// Checks the site's data for mistakes that are easy to make when adding questions or links.
// Run from the project folder:  node tools/check-site.mjs
// It reads the same files the browser loads and prints what it finds; nothing is changed.
//   - every MCQ: four different options and an answer letter ক খ গ ঘ
//   - every chapter note: each practice set names real MCQs, and every MCQ of the chapter is in some set
//   - every past written question (mcq/written-prev.js): its paper, question, অথবা and part exist
//   - every answer link (ans): a note link lands on a real section id; a written link names a real paper
//   - every #/note/… link in index.html and answers/*.js lands on a real section
import fs from "node:fs";
import vm from "node:vm";

const read = f => fs.readFileSync(new URL("../" + f, import.meta.url), "utf8");
const window = {}, ctx = { window };
vm.createContext(ctx);
for (const f of ["demo-data.js", "written-papers.js", "mcq/chapters.js", "mcq/written-prev.js",
  ...fs.readdirSync(new URL("../mcq/", import.meta.url)).filter(f => /^ch\d+\.js$/.test(f)).sort().map(f => "mcq/" + f)]) vm.runInContext(read(f), ctx);
const html = read("index.html"), app = read("app.js");
const problems = [], say = s => problems.push(s);
const LETTERS = ["ক", "খ", "গ", "ঘ"];

// ---- MCQs ----
const chapters = window.ICT_MCQ || [];
let mcqs = 0;
for (const ch of chapters) {
  ch.questions.forEach((q, i) => {
    mcqs++;
    const where = `${ch.id} প্রশ্ন ${i + 1}`;
    if (!Array.isArray(q.o) || q.o.length !== 4) say(`${where}: needs exactly 4 options`);
    else if (new Set(q.o).size !== 4) say(`${where}: two options are the same`);
    if (!LETTERS.includes(q.a)) say(`${where}: answer "${q.a}" is not ক খ গ ঘ`);
    if (!q.x) say(`${where}: no explanation`);
    for (const s of [q.q, ...(q.o || []), q.x || ""]) if (/<(?![a-z/!])/i.test(s.replace(/<svg[\s\S]*?<\/svg>/g, ""))) say(`${where}: a bare "<" in the text; write &lt;`);
  });
}

// ---- note practice sets ----
const notes = Object.fromEntries([...app.matchAll(/"([a-z-]+)": \{ tpl: "(t-note[\w-]*)", ch: "(ch\d+)" \}/g)].map(m => [m[1], { tpl: m[2], ch: m[3] }]));
const template = id => { const a = html.indexOf(`<template id="${id}">`); return a < 0 ? "" : html.slice(a, html.indexOf("</template>", a)); };
const idsIn = t => new Set([...t.matchAll(/ id="([^"]+)"/g)].map(m => m[1]));
for (const [key, n] of Object.entries(notes)) {
  const t = template(n.tpl), ch = chapters.find(c => c.id === n.ch);
  if (!t) { say(`note ${key}: template ${n.tpl} is missing`); continue; }
  if (!ch) continue;
  const inSets = new Set();
  for (const [, set] of t.matchAll(/data-practice="([^"]+)"/g))
    for (const r of set.split(",")) {
      const [a, b = a] = r.split("-").map(Number);
      for (let k = a; k <= b; k++) { if (k < 1 || k > ch.questions.length) say(`note ${key}: practice set "${set}" names MCQ ${k}, which doesn't exist`); inSets.add(k); }
    }
  const loose = ch.questions.map((_, i) => i + 1).filter(k => !inSets.has(k));
  if (loose.length) say(`note ${key}: ${loose.length} MCQ(s) in no practice set: ${loose.join(", ")}`);
}

// ---- past written questions and their links ----
const W = window.KHATA_DEMO.written, P = window.ICT_PREV;
const alts = q => q.alts || (q.alt ? [q.alt] : []);
const noteIds = Object.fromEntries(Object.entries(notes).map(([k, n]) => [k, idsIn(template(n.tpl))]));
for (const x of P.items) {
  const where = `written-prev ${x.c} ${x.e}তম${x.n ? ` প্রশ্ন ${x.n}` : ""}${x.o ? ` অথবা ${x.o}` : ""}${x.l ? ` ${x.l}` : ""}`;
  if (!P.exams.some(e => e.no === x.e)) say(`${where}: exam ${x.e} is not in the exam list`);
  if (x.n) {
    const paper = W[`${x.e}-school`], q = paper && paper.questions.find(y => y.n === x.n);
    if (!q) say(`${where}: no such question in the paper`);
    else if (!x.q) {
      const src = x.o ? alts(q)[x.o - 1] : (q.parts || q.q);
      if (!src) say(`${where}: the paper has no অথবা ${x.o}`);
      else if (x.l && (typeof src === "string" || !src.some(pt => pt.l === x.l))) say(`${where}: no part ${x.l}`);
    }
  }
  if (x.ans) {
    const m = x.ans.match(/^#\/note\/([a-z-]+)\/([\w-]+)$/), w = x.ans.match(/^#\/written\/(\d+-school)\/q(\d+)$/);
    if (m) { if (!noteIds[m[1]]) say(`${where}: link to unknown note "${m[1]}"`); else if (!noteIds[m[1]].has(m[2])) say(`${where}: note ${m[1]} has no section "${m[2]}"`); }
    else if (w) { if (!W[w[1]]) say(`${where}: link to unknown paper ${w[1]}`); }
    else say(`${where}: link "${x.ans}" is neither a note nor a written answer`);
  }
}

// ---- every note link anywhere: notes, answer templates and answer files ----
const linkSources = [["index.html", html], ...fs.readdirSync(new URL("../answers/", import.meta.url)).filter(f => f.endsWith(".js")).map(f => ["answers/" + f, read("answers/" + f)])];
for (const [file, text] of linkSources)
  for (const m of text.matchAll(/#\/note\/([a-z-]+)\/([\w-]+)/g)) {
    if (!noteIds[m[1]]) say(`${file}: link to unknown note "${m[1]}"`);
    else if (!noteIds[m[1]].has(m[2])) say(`${file}: link #/note/${m[1]}/${m[2]}, but that note has no such section`);
  }

console.log(`${chapters.length} chapters · ${mcqs} MCQs · ${Object.keys(notes).length} notes · ${P.items.length} past written questions · ${Object.keys(W).length} papers`);
console.log(problems.length ? `\n${problems.length} problem(s):\n- ` + problems.join("\n- ") : "No problems found.");
process.exit(problems.length ? 1 : 0);
