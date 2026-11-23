// New MCQs for chapter ২ (সংখ্যা পদ্ধতি): arithmetic and complements, which came up in every written paper but had
// Applied on 2026-11-23 (questions 130 onward in mcq/ch02.js). Kept as the record of how those questions were made
// and to check them:  node tools/mcq/gen-ch02-mcq.mjs mcq/ch02.js --check
// recomputes every answer and confirms the file still holds exactly these questions. Without --check it would append
// them, and it refuses to if the chapter no longer has just the book's 129.
// only a handful of MCQs. Written for this site, appended after the book's 129. Every answer is computed here.
// Text is HTML (bases as <sub>), written the way the book's questions are. Options list the correct one first and
// the answer letter rotates ক→ঘ, except where the options are plain numbers, which go in ascending order.
import fs from "node:fs";
const [FILE] = process.argv.slice(2);
const L = ["ক", "খ", "গ", "ঘ"], BN = "০১২৩৪৫৬৭৮৯", bn = s => String(s).replace(/\d/g, d => BN[d]);
const ok = (c, m) => { if (!c) throw new Error("check failed: " + m); };
const B = (s, b) => `(${s})<sub>${b}</sub>`;
const p = (s, b) => parseInt(s, b), to = (n, b) => n.toString(b).toUpperCase();
const twos = (n, bits) => ((1 << bits) + n).toString(2).padStart(bits, "0").slice(-bits);
const frac = s => { const [w, f = ""] = s.split("."); return parseInt(w, 2) + [...f].reduce((t, d, i) => t + d * 2 ** -(i + 1), 0); };

const ARITH = [
  (() => { const a = "10110", b = "1111", s = to(p(a, 2) + p(b, 2), 2); ok(s === "100101", "add");
    return { q: `বাইনারি যোগ করুন: ${B(a, 2)} + ${B(b, 2)} = ?`, o: [B(s, 2), B("11101", 2), B("100111", 2), B("100001", 2)],
      x: `কলামে যোগ, 1 + 1 = 10 লিখে ক্যারি নিয়ে: ফল ${B(s, 2)}। যাচাই: ${bn(p(a, 2))} + ${bn(p(b, 2))} = ${bn(p(s, 2))}।` }; })(),
  (() => { const a = "11011", b = "1101", s = to(p(a, 2) - p(b, 2), 2); ok(s === "1110", "sub");
    return { q: `বাইনারি বিয়োগ করুন: ${B(a, 2)} − ${B(b, 2)} = ?`, o: [B(s, 2), B("1010", 2), B("1100", 2), B("10110", 2)],
      x: `0 − 1-এ পাশের ঘর থেকে ধার নিলে 10 − 1 = 1। ফল ${B(s, 2)}; যাচাই: ${bn(p(a, 2))} − ${bn(p(b, 2))} = ${bn(p(s, 2))}।` }; })(),
  (() => { const a = "1011", b = "101", s = to(p(a, 2) * p(b, 2), 2); ok(s === "110111", "mul");
    return { q: `বাইনারি গুণ করুন: ${B(a, 2)} × ${B(b, 2)} = ?`, o: [B(s, 2), B("110101", 2), B("101111", 2), B("1111", 2)],
      x: `গুণকের যে ঘরে 1, সেখানে ${B(a, 2)}-কে সরিয়ে লিখে যোগ: 1011 + 101100 = ${s}। যাচাই: ${bn(p(a, 2))} × ${bn(p(b, 2))} = ${bn(p(s, 2))}।` }; })(),
  (() => { const a = "11011", b = "11", s = to(p(a, 2) / p(b, 2), 2); ok(s === "1001" && p(a, 2) % p(b, 2) === 0, "div");
    return { q: `বাইনারি ভাগ করুন: ${B(a, 2)} ÷ ${B(b, 2)} = ?`, o: [B(s, 2), B("1011", 2), B("111", 2), B("1101", 2)],
      x: `দশমিকের মতো ধাপে ধাপে ভাগ; ভাগফল ${B(s, 2)}, ভাগশেষ 0। যাচাই: ${bn(p(a, 2))} ÷ ${bn(p(b, 2))} = ${bn(p(s, 2))}।` }; })(),
  (() => { const a = "101.11", b = "11.01", v = frac(a) + frac(b); ok(v === 9, "frac add");
    return { q: `বাইনারি যোগ করুন: ${B(a, 2)} + ${B(b, 2)} = ?`, o: [B("1001", 2), B("1000.11", 2), B("1001.1", 2), B("111.11", 2)],
      x: `বিন্দু বরাবর সাজিয়ে যোগ: .11 + .01 = 1.00 (ক্যারি 1), তারপর 101 + 11 + 1 = 1001, ফল (1001.00)<sub>2</sub> = ${B("1001", 2)}। যাচাই: ৫.৭৫ + ৩.২৫ = ৯।` }; })(),
  (() => { const a = "365", b = "247", s = to(p(a, 8) + p(b, 8), 8); ok(s === "634", "oct add");
    return { q: `অক্টাল যোগ করুন: ${B(a, 8)} + ${B(b, 8)} = ?`, o: [B(s, 8), B("612", 8), B("5112", 8), B("624", 8)],
      x: `প্রতি ঘরে যোগফল ৮ বা বেশি হলে ৮ বাদ দিয়ে ১ ক্যারি: 5 + 7 = 12 → 4, ক্যারি 1; 6 + 4 + 1 = 11 → 3, ক্যারি 1; 3 + 2 + 1 = 6। ফল ${B(s, 8)}। যাচাই: ${bn(p(a, 8))} + ${bn(p(b, 8))} = ${bn(p(s, 8))}।` }; })(),
  (() => { const a = "725", b = "346", s = to(p(a, 8) - p(b, 8), 8); ok(s === "357", "oct sub");
    return { q: `অক্টাল বিয়োগ করুন: ${B(a, 8)} − ${B(b, 8)} = ?`, o: [B(s, 8), B("421", 8), B("367", 8), B("457", 8)],
      x: `5 − 6-এ ধার নিলে ৮ যোগ হয়: 13 − 6 = 7; 1 − 4-এ আবার ধার: 9 − 4 = 5; 6 − 3 = 3। ফল ${B(s, 8)}। যাচাই: ${bn(p(a, 8))} − ${bn(p(b, 8))} = ${bn(p(s, 8))}।` }; })(),
  (() => { const a = "3A", b = "2F", s = to(p(a, 16) + p(b, 16), 16); ok(s === "69", "hex add");
    return { q: `হেক্সাডেসিমাল যোগ করুন: ${B(a, 16)} + ${B(b, 16)} = ?`, o: [B(s, 16), B("5F", 16), B("59", 16), B("6F", 16)],
      x: `A + F = 10 + 15 = 25 = 16 + 9 → 9, ক্যারি 1; 3 + 2 + 1 = 6। ফল ${B(s, 16)}। যাচাই: ${bn(p(a, 16))} + ${bn(p(b, 16))} = ${bn(p(s, 16))}।` }; })(),
  (() => { const a = "B4", b = "5C", s = to(p(a, 16) - p(b, 16), 16); ok(s === "58", "hex sub");
    return { q: `হেক্সাডেসিমাল বিয়োগ করুন: ${B(a, 16)} − ${B(b, 16)} = ?`, o: [B(s, 16), B("68", 16), B("5A", 16), B("48", 16)],
      x: `4 − C-এ ধার নিলে ১৬ যোগ হয়: 20 − 12 = 8; B থেকে 1 গেলে A, A − 5 = 5। ফল ${B(s, 16)}। যাচাই: ${bn(p(a, 16))} − ${bn(p(b, 16))} = ${bn(p(s, 16))}।` }; })(),
  (() => { ok(7 + 5 === 1 * 8 + 4, "oct carry");
    return { q: "অক্টাল যোগে 7 + 5 করলে সেই ঘরে কী লেখা হবে, আর ক্যারি কত?", o: ["4 লিখি, ক্যারি 1", "12 লিখি, ক্যারি 0", "2 লিখি, ক্যারি 1", "5 লিখি, ক্যারি 1"],
      x: "7 + 5 = ১২, যা ৮-এর চেয়ে বড়; ১২ − ৮ = ৪ লিখি, আর ১ ক্যারি যায়। অর্থাৎ (14)<sub>8</sub>।" }; })(),
  (() => { const s = to(9 + 8, 16); ok(s === "11", "hex 9+8");
    return { q: `হেক্সাডেসিমালে ${B("9", 16)} + ${B("8", 16)} = ?`, o: [B(s, 16), B("17", 16), B("F", 16), B("10", 16)],
      x: `৯ + ৮ = ১৭ (দশমিক) = ১৬ + ১, তাই ${B(s, 16)}। (17)<sub>16</sub> লিখলে তা দশমিকে ২৩ হয়ে যাবে।` }; })(),
  { q: "হেক্সাডেসিমাল বিয়োগে পাশের ঘর থেকে ধার নিলে বর্তমান ঘরে কত যোগ হয়?", o: ["১৬", "২", "৮", "১০"], num: true,
    x: "যেকোনো পদ্ধতিতে ধারের মান সেই পদ্ধতির ভিত্তি: বাইনারিতে ২, অক্টালে ৮, দশমিকে ১০, হেক্সায় ১৬।" }
];
const COMP = [
  (() => { const a = "101000", inv = [...a].map(d => (d === "1" ? "0" : "1")).join(""), s = to(p(inv, 2) + 1, 2).padStart(6, "0"); ok(s === "011000", "2s");
    return { q: `${B(a, 2)}-এর ২-এর পরিপূরক কত?`, o: [B(s, 2), B(inv, 2), B("011001", 2), B("101000", 2)],
      x: `১-এর পরিপূরক ${inv}, তাতে ১ যোগ করে ${s}। শর্টকাট: ডান থেকে প্রথম 1 পর্যন্ত (1000) হুবহু রাখি, বাকি (10) উল্টে 01, তাই 011000।` }; })(),
  (() => { const s = twos(-20, 8); ok(s === "11101100", "-20");
    return { q: "৮ বিটে −২০-এর ২-এর পরিপূরক রূপ কোনটি?", o: [s, "11101011", "10010100", "00010100"],
      x: `+২০ = 00010100; উল্টে 11101011 (১-এর পরিপূরক), ১ যোগ করে ${s}। 10010100 হলো চিহ্ন-বিটসহ মান (sign-magnitude), ২-এর পরিপূরক নয়।` }; })(),
  (() => { const r = (9 + p(twos(-5, 4), 2)) & 0b1111; ok(r === 4 && twos(-5, 4) === "1011", "9-5");
    return { q: "৪ বিটে ২-এর পরিপূরক পদ্ধতিতে ৯ − ৫ করতে 1001 + 1011 = 10100 হলো। শেষের ক্যারি বাদ দিলে ফল কত?", o: ["0100", "10100", "1100", "0101"],
      x: "৫ = 0101, তার ২-এর পরিপূরক 1011; 1001 + 1011 = 10100। ৪ বিটের বাইরের ক্যারি 1 বাদ দিলে 0100 = ৪, যা ৯ − ৫-এর উত্তর।" }; })(),
  (() => { ok(-(2 ** 7) === -128, "min8");
    return { q: "৮ বিটের ২-এর পরিপূরক পদ্ধতিতে সবচেয়ে ছোট (ঋণাত্মক) সংখ্যা কত?", o: ["−১২৮", "−১২৭", "−২৫৫", "০"],
      x: "n বিটে পরিসর −২<sup>n−1</sup> থেকে +(২<sup>n−1</sup> − ১); ৮ বিটে −১২৮ থেকে +১২৭। −১২৮-এর রূপ 10000000।" }; })()
];

const GROUPS = [["যোগ, বিয়োগ, গুণ, ভাগ", "arith", ARITH], ["পরিপূরক", "comp", COMP]];
let src = fs.readFileSync(FILE, "utf8");
const already = (src.match(/\{ q: "/g) || []).length, BOOK = 129, CHECK = process.argv.includes("--check");
if (!CHECK) ok(already === BOOK, "the book's 129 are there and nothing was added yet");
const esc = s => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const num = s => parseFloat(s.replace(/[০-৯]/g, d => BN.indexOf(d)));
let n = BOOK, rot = 0;
const lines = [], ranges = {}, letters = { ক: 0, খ: 0, গ: 0, ঘ: 0 };
for (const [title, topic, qs] of GROUPS) {
  lines.push(`    // প্রশ্ন ${bn(n + 1)}–${bn(n + qs.length)} · ${title} (এই সাইটের জন্য লেখা)`);
  ranges[topic] = `${n + 1}-${n + qs.length}`;
  for (const it of qs) {
    ok(it.o.length === 4 && new Set(it.o).size === 4, "4 distinct options: " + it.q);
    let o, at;
    if (it.num) { o = [...it.o].sort((a, b) => num(a) - num(b)); at = o.indexOf(it.o[0]); }
    else { o = it.o.slice(1); at = rot++ % 4; o.splice(at, 0, it.o[0]); }
    letters[L[at]]++; n++;
    lines.push(`    { q: "${esc(it.q)}", o: [${o.map(s => `"${esc(s)}"`).join(", ")}], a: "${L[at]}",\n      x: "${esc(it.x)}" }`);
  }
}
if (CHECK) {
  const missing = lines.filter(l => !l.startsWith("    //") && !src.includes(l));
  console.log(missing.length ? `${missing.length} question(s) differ from the file:\n` + missing.join("\n") : `ok: all ${n - BOOK} questions match the file, answers recomputed`);
  process.exit(missing.length ? 1 : 0);
}
const body = lines.reduce((acc, line, i) => acc + (line.startsWith("    //") ? line + "\n" : line + (i < lines.length - 1 ? ",\n" : "\n")), "");
ok(/\}\n  \]\n\}\);\s*$/.test(src), "file ending");
src = src.replace(/\}\n  \]\n\}\);\s*$/, "},\n" + body + "  ]\n});\n");
const head = "/* অধ্যায় ২ · সংখ্যা পদ্ধতি — 129 questions, in their original order.";
ok(src.includes(head), "header");
src = src.replace(head, `/* অধ্যায় ২ · সংখ্যা পদ্ধতি — ${n} questions: 1–129 from the book, in its order; 130–${n} written for this site, grouped by the note's sections.`);
fs.writeFileSync(FILE, src);
console.log("added", n - already, "now", n, "letters", letters, "ranges", JSON.stringify(ranges));
