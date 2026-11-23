// Shared helpers for the build-<no>-school.mjs scripts, which write answers/<no>-school.js (model answers for one
// older written paper). Each script:
//   - lifts worked blocks from the chapter notes in index.html (fromH4 / fromH3), so a calculation lives in one place
//   - reuses earlier answers to the same question with data-include (fillIncludes in app.js); see tools/answer-index.mjs
//   - writes the rest itself
import fs from "node:fs";
import vm from "node:vm";

export const root = new URL("../../", import.meta.url);
export const read = f => fs.readFileSync(new URL(f, root), "utf8");
export const ok = (c, m) => { if (!c) throw new Error("check failed: " + m); };
const BN = "০১২৩৪৫৬৭৮৯";
export const bn = s => String(s).replace(/\d/g, d => BN[d]);

// A note refers to its own parts by number; on a paper page those words need the note's name or a link instead.
const FIXES = [[">অংশ ২-এ</a>", ">অধ্যায় ২-এর নোটে</a>"],
  ["(অংশ ৭.৬-এর মতো)", '(যেমন <a href="#/note/algorithm-flowchart/p-minN">N টি সংখ্যার মধ্যে ছোট</a> নির্ণয়ে)'],
  ["অ্যালগরিদম ও ফ্লোচার্ট আছে অংশ ৭-এ।", 'অ্যালগরিদম ও ফ্লোচার্ট আছে <a href="#/note/algorithm-flowchart/p-sum">অধ্যায় ৬-এর নোটে</a>।']];

// suffix: added to every id lifted from a note (and to url(#…) references), so nothing clashes on the paper page.
export function notes(suffix) {
  const html = read("index.html");
  const template = id => { const a = html.indexOf(`<template id="${id}">`); ok(a >= 0, id); return html.slice(a, html.indexOf("</template>", a)); };
  // A worked block: everything after a heading up to the next h4/h3, or to the section's past-question list if that comes
  // first (the heading itself is dropped; the answer gives its own).
  const cut = (t, start) => {
    const ends = ["<h4", "<h3", "<div data-prev", "<!--/PAST-BATCHES-->"].map(s => t.indexOf(s, start)).filter(i => i > 0);
    return t.slice(start, Math.min(...ends)).trim();
  };
  const afterTag = (t, i, tag) => t.indexOf(`</${tag}>`, i) + tag.length + 3;
  const tidy = (s, what) => {
    balanced(s, what);
    ok(!/data-prev|data-practice|<section/.test(s), `${what}: only answer content`);
    for (const [from, to] of FIXES) s = s.split(from).join(to);
    return suffixIds(s, suffix).split("\n").map(l => l.replace(/^ {8}/, "    ")).join("\n");
  };
  const fromH4 = (tpl, id) => { const t = template(tpl), i = t.indexOf(`id="${id}"`); ok(i > 0, id); return tidy(cut(t, afterTag(t, i, "h4")), id); };
  const fromH3 = (tpl, title) => { const t = template(tpl), i = t.indexOf(`</span>${title}</h3>`); ok(i > 0, title); return tidy(cut(t, afterTag(t, i, "h3")), title); };
  // A whole sub-section by its heading's id, smaller headings inside it included: up to the next heading of the same
  // level, or the section's past-question list.
  const fromSection = (tpl, id) => {
    const t = template(tpl), i = t.indexOf(` id="${id}"`); ok(i > 0, id);
    const tag = t.slice(t.lastIndexOf("<", i) + 1, i).split(/\s/)[0], start = afterTag(t, i, tag);
    const ends = [`<${tag}`, "<div data-prev"].map(s => t.indexOf(s, start)).filter(x => x > 0);
    return tidy(t.slice(start, Math.min(...ends)).trim(), id);
  };
  // A slice of part k of an earlier answer, for when only a piece of it fits (a data-include always brings the whole
  // part). start: where the slice begins; with skipStart the marker itself is left out. end: where it stops (default:
  // the end of the part).
  const fromAnswer = (paper, n, k, start, { end, skipStart = false } = {}) => {
    const h = (allAnswers()[paper] || {})[n]; ok(h, `answer ${paper} ${n}`);
    const p = [...h.matchAll(/<section class="part">[\s\S]*?<\/section>/g)].map(m => m[0])[k - 1]; ok(p, `${paper} ${n} part ${k}`);
    const a = p.indexOf(start); ok(a >= 0, start);
    const b = end ? p.indexOf(end, a + start.length) : p.lastIndexOf("</section>"); ok(b > a, end || "end of part");
    const s = p.slice(skipStart ? a + start.length : a, b).trim(), what = `${paper} ${n}/${k}`;
    balanced(s, what);
    return "    " + suffixIds(s, suffix);
  };
  return { html, template, fromH4, fromH3, fromSection, fromAnswer };
}

const balanced = (s, what) => {
  for (const tag of ["div", "figure", "table", "ol", "ul", "p", "svg"]) ok((s.match(new RegExp(`<${tag}[\\s>]`, "g")) || []).length === (s.match(new RegExp(`</${tag}>`, "g")) || []).length, `${what}: <${tag}> balanced`);
};
const suffixIds = (s, suffix) => s.replace(/ id="([^"]+)"/g, ` id="$1-${suffix}"`).replace(/url\(#([^)]+)\)/g, `url(#$1-${suffix})`);

// An arrowhead marker for flow drawings; the id must be unique on the paper page.
export const arrowDefs = id => `<defs><marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>`;

// A series sum (first, first + step, … up to last), run exactly as its flowchart runs. Returns the sum, the trace
// ([i, Sum] after each pass), the i that stops the loop, the flowchart and a short trace table (first 3, …, last 3).
export function seriesSum({ first, step, last, id, caption }) {
  const trace = [];
  let Sum = 0, i = first;
  while (i <= last) { Sum += i; trace.push([i, Sum]); i += step; }
  const rows = [...trace.slice(0, 3), null, ...trace.slice(-3)].map(r => r ? `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>` : `<tr><td>…</td><td>…</td></tr>`).join("")
    + `<tr><td>${i}</td><td>i ≤ ${last} মিথ্যা, থামি</td></tr>`;
  const a = `marker-end="url(#${id})"`;
  const fig = `    <figure class="fig flow">
      <svg viewBox="0 0 400 486" role="img" aria-label="ফ্লোচার্ট: শুরু; Sum = 0, i = ${first}; i ছোট বা সমান ${bn(last)}? হ্যাঁ হলে Sum = Sum + i, i = i + ${step}, তারপর আবার যাচাই; না হলে Sum প্রিন্ট; শেষ।">
        ${arrowDefs(id)}
        <rect class="fs" x="110" y="10" width="120" height="40" rx="20"/><text x="170" y="31">শুরু</text>
        <path class="fa" d="M170 50V76" ${a}/>
        <rect class="fs" x="95" y="78" width="150" height="44"/><text x="170" y="100">Sum = 0, i = ${first}</text>
        <path class="fa" d="M170 122V146" ${a}/>
        <path class="fs fd" d="M170 148L240 188L170 228L100 188Z"/><text x="170" y="188">i ≤ ${last} ?</text>
        <path class="fa" d="M170 228V252" ${a}/><text class="yn" x="190" y="242">হ্যাঁ</text>
        <rect class="fs" x="95" y="254" width="150" height="40"/><text x="170" y="274">Sum = Sum + i</text>
        <path class="fa" d="M170 294V318" ${a}/>
        <rect class="fs" x="95" y="320" width="150" height="40"/><text x="170" y="340">i = i + ${step}</text>
        <path class="fa" d="M95 340H40V188H98" ${a}/>
        <path class="fa" d="M240 188H318V372" ${a}/><text class="yn" x="262" y="176">না</text>
        <path class="fs" d="M270 374H386L366 414H250Z"/><text x="318" y="394">Sum প্রিন্ট</text>
        <path class="fa" d="M318 414V428" ${a}/>
        <rect class="fs" x="258" y="430" width="120" height="40" rx="20"/><text x="318" y="451">শেষ</text>
      </svg>
      <figcaption>${caption}</figcaption>
    </figure>`;
  return { Sum, trace, stop: i, fig, rows };
}

// A sum-of-products circuit drawn exactly as written: input rails, one AND per product, one OR. Every gate output shows
// its own expression (no G1/G2 labels). Gate outputs above the OR's centre turn down, those below turn up; the further
// a gate is from the centre, the later it turns, so no two wires meet.
export function sopCircuit(inputs, terms, out) {
  const rail = Object.fromEntries(inputs.map((v, k) => [v, 30 + 16 * k])), gates = [];
  let top = 20;
  for (const t of terms) { const h = t.length === 2 ? 40 : 50; gates.push({ t, top, h, ins: t.map((v, k) => [v, top + 10 + k * (h - 20) / (t.length - 1)]), oy: top + h / 2, ox: 118 + h / 2 }); top += h + 10; }
  const n = terms.length, H = Math.max(40, 15 * (n + 1)), cy = n % 2 ? gates[(n - 1) / 2].oy : (gates[n / 2 - 1].oy + gates[n / 2].oy) / 2, s = H / 40;
  const orIn = gates.map((_, j) => cy + (j - (n - 1) / 2) * H / (n + 1));
  const back = y => { const u = (y - (cy - H / 2)) / H; return Math.round(230 + 28 * s * u * (1 - u) + 2); };
  const above = gates.map((g, j) => j).filter(j => orIn[j] > gates[j].oy), below = gates.map((g, j) => j).filter(j => orIn[j] < gates[j].oy);
  const turnAt = j => above.includes(j) ? 190 + 12 * (above.length - 1 - above.indexOf(j)) : 200 + 12 * below.indexOf(j);
  const wires = [], dots = [], low = {};
  gates.forEach((g, j) => {
    for (const [v, y] of g.ins) { wires.push(`M${rail[v]} ${y}H101`); dots.push([rail[v], y]); low[v] = Math.max(low[v] || 0, y); }
    const ty = orIn[j];
    wires.push(g.oy === ty ? `M${g.ox} ${g.oy}H${back(ty)}` : `M${g.ox} ${g.oy}H${turnAt(j)}V${ty}H${back(ty)}`);
  });
  const ox = 230 + 38 * s, bottom = Math.max(top - 10, cy + H / 2 + 40) + 10, expr = `${out} = ${terms.map(t => t.join("")).join("+")}`;
  const W = Math.max(360, 236 + 8 * expr.length);
  const fo = (x, y, w, t) => `<foreignObject x="${x}" y="${y}" width="${w}" height="34" overflow="visible"><div class="flab">${t}</div></foreignObject>`;
  return `    <figure class="fig eqfig">
      <svg viewBox="0 0 ${W} ${bottom}" width="${Math.round(W * 1.15)}" role="img" aria-label="লজিক সার্কিট, ছাপা রূপ অনুযায়ী: ${terms.map(t => `${t.join(" ও ")} একটি AND গেইটে`).join("; ")}; সবগুলোর ফল একটি OR গেইটে গিয়ে ${out} দেয়।">
${inputs.map(v => `        <text x="${rail[v] - 4}" y="12" text-anchor="start">${v}</text>`).join("\n")}
        <path class="w" d="${inputs.map(v => `M${rail[v]} 18V${low[v]}`).join("")}${wires.join("")}M${ox} ${cy}H${ox + 25}"/>
${gates.map(g => `        <path class="gb" d="M100 ${g.top}H118A${g.h / 2} ${g.h / 2} 0 0 1 118 ${g.top + g.h}H100Z"/>`).join("\n")}
        <path class="gb" d="M230 ${cy - H / 2}Q${230 + 14 * s} ${cy} 230 ${cy + H / 2}Q${+(230 + 25.8 * s).toFixed(1)} ${cy + H / 2} ${ox} ${cy}Q${+(230 + 25.8 * s).toFixed(1)} ${cy - H / 2} 230 ${cy - H / 2}Z"/>
${dots.map(([x, y]) => `        <circle class="j" cx="${x}" cy="${y}" r="2.6"/>`).join("\n")}
${gates.map(g => `        ${fo(g.ox + 4, g.oy - 18, 10 * g.t.length + 10, g.t.join(""))}`).join("\n")}
        ${fo(ox + 29, cy - 18, 20, out)}
        ${fo(226, cy + H / 2 + 5, 8 * expr.length + 10, expr)}
      </svg>
    </figure>`;
}

// suggested: the paper prints no marks for this part, so the bubble carries the marks we suggest.
export const part = (title, marks, body, suggested) =>
  `  <section class="part">\n    <h3 class="part-h"><span>${title}</span><i class="bub mk"${suggested ? ' title="প্রস্তাবিত নম্বর"' : ""}>${marks}</i></h3>\n${body}\n  </section>`;
export const include = (paper, n, k, inner = true) => `    <div data-include="wa-${paper}-${n}" data-part="${k}"${inner ? " data-inner" : ""}></div>`;
export const reuse = (paper, n, k) => `  <div data-include="wa-${paper}-${n}" data-part="${k}"></div>`;   // a whole earlier part, its own heading and marks
export const inc = s => `    <p class="inc-note">${s}</p>`;
export const OR = `\n  <p class="ans-or">অথবা</p>\n`;
export const side = (items, chapters) => `<aside class="side">\n${items.map(([b, s]) => `  <p><b>${b}</b>${s}</p>`).join("\n")}\n  <p class="tags">${chapters.map(c => `<span class="xt">অধ্যায়: ${c}</span>`).join("")}</p>\n</aside>`;
export const answer = (body, aside) => `\n<div class="ans-body">\n${body}\n</div>\n${aside}\n`;

// Every model answer on the site, as { "<no>-school": { <question>: html } }: the answer files, then the ১৮তম
// paper's <template id="wa-18-school-n"> blocks in index.html.
export function allAnswers() {
  const window = { ICT_ANSWERS: {} }, ctx = { window };
  vm.createContext(ctx);
  for (const f of fs.readdirSync(new URL("answers/", root)).filter(f => f.endsWith(".js")).sort()) vm.runInContext(read("answers/" + f), ctx);
  const all = { ...window.ICT_ANSWERS };
  for (const m of read("index.html").matchAll(/<template id="wa-(\d+-school)-(\d+)">([\s\S]*?)<\/template>/g)) (all[m[1]] ||= {})[m[2]] = m[3];
  return all;
}

// Each data-include must name an answer that exists and, with data-part="k", one with at least k parts
// (fillIncludes in app.js counts the <section class="part"> blocks of the earlier answer).
export function includeProblems(all) {
  const parts = {}, out = [];
  for (const [p, qs] of Object.entries(all)) for (const [n, h] of Object.entries(qs)) parts[`wa-${p}-${n}`] = (h.match(/<section class="part">/g) || []).length;
  for (const [p, qs] of Object.entries(all)) for (const [n, h] of Object.entries(qs))
    for (const m of h.matchAll(/data-include="([^"]+)"(?: data-part="(\d+)")?/g)) {
      if (!(m[1] in parts)) out.push(`wa-${p}-${n} reuses ${m[1]}, which doesn't exist`);
      else if (m[2] && +m[2] > parts[m[1]]) out.push(`wa-${p}-${n} reuses ${m[1]} part ${m[2]}, but that answer has ${parts[m[1]]} part(s)`);
    }
  return out;
}

// Writes answers/<key>.js. title: the paper, e.g. "১০ম শিক্ষক নিবন্ধন (২০১৪)".
export function writeAnswers(key, A, title, script) {
  const bad = includeProblems({ ...allAnswers(), [key]: A });
  ok(!bad.length, bad.join("; "));
  const esc = s => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
  const out = `/* Model answers · ${title}, সহকারী শিক্ষক (কম্পিউটার), বিষয় কোড ৩১৩.
   Built by tools/answers/${script}: worked blocks come from the chapter notes, repeated questions reuse earlier
   answers (data-include), the rest is written there. Edit that script and rebuild, not this file. */
(window.ICT_ANSWERS = window.ICT_ANSWERS || {})["${key}"] = {
${Object.entries(A).map(([n, h]) => `\n${n}: \`${esc(h)}\``).join(",\n")}
};
`;
  fs.writeFileSync(new URL(`answers/${key}.js`, root), out);
  console.log(`answers/${key}.js:`, Object.keys(A).length, "questions,", out.length, "characters");
}
