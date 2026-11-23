// Lists every part of every written model answer (paper, question, part number, title, marks), to find a part
// that a new answer can reuse with <div data-include="wa-<paper>-<n>" data-part="<k>" data-inner>.
//   node tools/answer-index.mjs [words to filter by]
import fs from "node:fs";
import vm from "node:vm";
const read = f => fs.readFileSync(new URL("../" + f, import.meta.url), "utf8");
const window = { ICT_ANSWERS: {} }, ctx = { window };
vm.createContext(ctx);
for (const f of fs.readdirSync(new URL("../answers/", import.meta.url)).filter(f => /^\d+-school\.js$/.test(f))) vm.runInContext(read("answers/" + f), ctx);
const all = { ...window.ICT_ANSWERS };
for (const m of read("index.html").matchAll(/<template id="wa-(\d+-school)-(\d+)">([\s\S]*?)<\/template>/g)) (all[m[1]] ||= {})[m[2]] = m[3];
const strip = s => s.replace(/<sub>(\w+)<\/sub>/g, "_$1").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
const filter = process.argv.slice(2).join(" ");
for (const paper of Object.keys(all).sort((a, b) => parseInt(b) - parseInt(a)))
  for (const [n, html] of Object.entries(all[paper]).sort((a, b) => a[0] - b[0])) {
    const body = html.slice(html.indexOf('<div class="ans-body">'));
    let k = 0, inAlt = false;
    for (const m of body.matchAll(/<p class="ans-or">|<section class="part">\s*<h3 class="part-h"><span>([\s\S]*?)<\/span>(?:<i class="bub mk"[^>]*>([^<]*)<\/i>)?/g)) {
      if (m[0].startsWith('<p class="ans-or"')) { inAlt = true; continue; }
      k++;
      const line = `wa-${paper}-${n} part ${k}${inAlt ? " (অথবা)" : ""} · ${strip(m[1])}${m[2] ? ` · ${m[2]}` : ""}`;
      if (!filter || filter.split(" ").some(w => line.includes(w))) console.log(line);
    }
  }
