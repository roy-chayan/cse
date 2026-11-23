// New MCQs for chapter ৪ (লজিক গেট): universal gates, which came up in 9 of 16 written papers but had 6 MCQs.
// Applied on 2026-11-23 (questions 103 onward in mcq/ch04.js). Kept as the record of how those questions were made
// and to check them:  node tools/mcq/gen-ch04-mcq.mjs mcq/ch04.js --check
// recomputes every answer and confirms the file still holds exactly these questions. Without --check it would append
// them, and it refuses to if the chapter no longer has just the book's 102.
// Written for this site and appended after the book's 102. Every gate count is proved here: each circuit is built
// from NAND or NOR gates only, its gates are counted, and its truth table is compared with the gate it should be.
import fs from "node:fs";
const [FILE] = process.argv.slice(2);
const L = ["ক", "খ", "গ", "ঘ"], BN = "০১২৩৪৫৬৭৮৯", bn = s => String(s).replace(/\d/g, d => BN[d]);
const ok = (c, m) => { if (!c) throw new Error("check failed: " + m); };

// ---- circuits: a list of gates, each [kind, input, input]; inputs are "A", "B" or the index of an earlier gate ----
const nand = (x, y) => (x && y ? 0 : 1), nor = (x, y) => (x || y ? 0 : 1);
const run = (gates, A, B) => { const v = []; for (const [k, p, q] of gates) { const g = s => (s === "A" ? A : s === "B" ? B : v[s]); v.push((k === "nand" ? nand : nor)(g(p), g(q))); } return v[v.length - 1]; };
const TARGET = { NOT: (a) => 1 - a, AND: (a, b) => a & b, OR: (a, b) => a | b, XOR: (a, b) => a ^ b, XNOR: (a, b) => 1 - (a ^ b), NOR: (a, b) => 1 - (a | b), NAND: (a, b) => 1 - (a & b) };
const C = {
  "nand NOT": [["nand", "A", "A"]],
  "nand AND": [["nand", "A", "B"], ["nand", 0, 0]],
  "nand OR": [["nand", "A", "A"], ["nand", "B", "B"], ["nand", 0, 1]],
  "nand XOR": [["nand", "A", "B"], ["nand", "A", 0], ["nand", "B", 0], ["nand", 1, 2]],
  "nand XNOR": [["nand", "A", "B"], ["nand", "A", 0], ["nand", "B", 0], ["nand", 1, 2], ["nand", 3, 3]],
  "nand NOR": [["nand", "A", "A"], ["nand", "B", "B"], ["nand", 0, 1], ["nand", 2, 2]],
  "nor NOT": [["nor", "A", "A"]],
  "nor OR": [["nor", "A", "B"], ["nor", 0, 0]],
  "nor AND": [["nor", "A", "A"], ["nor", "B", "B"], ["nor", 0, 1]],
  "nor XNOR": [["nor", "A", "B"], ["nor", "A", 0], ["nor", "B", 0], ["nor", 1, 2]],
  "nor XOR": [["nor", "A", "B"], ["nor", "A", 0], ["nor", "B", 0], ["nor", 1, 2], ["nor", 3, 3]]
};
const count = {};
for (const [key, gates] of Object.entries(C)) {
  const t = TARGET[key.split(" ")[1]];
  for (const A of [0, 1]) for (const B of [0, 1]) ok(run(gates, A, B) === (key.endsWith("NOT") ? t(A) : t(A, B)), key + " truth table");
  count[key] = gates.length;
}
// the teacher's trick: NOT, AND, OR, XOR, XNOR need 1, 2, 3, 4, 5 NANDs; for NOR swap each pair: 1, 3, 2, 5, 4
ok(["NOT", "AND", "OR", "XOR", "XNOR"].map(g => count["nand " + g]).join() === "1,2,3,4,5", "NAND column");
ok(["NOT", "AND", "OR", "XOR", "XNOR"].map(g => count["nor " + g]).join() === "1,3,2,5,4", "NOR column");
const ov = s => `<span class="ov">${s}</span>`;

const QS = [
  { q: "শুধু NAND গেট দিয়ে একটি AND গেট তৈরি করতে কয়টি NAND গেট লাগে?", o: [bn(count["nand AND"]), "১", "৩", "৪"],
    x: "প্রথম NAND দেয় AB-এর পূরক, দ্বিতীয় NAND (দুই ইনপুট জোড়া) সেটি উল্টে AB দেয়; মোট ২টি। মনে রাখার কৌশল: NOT, AND, OR, XOR, XNOR-এর জন্য NAND লাগে ১, ২, ৩, ৪, ৫।" },
  { q: "শুধু NAND গেট দিয়ে একটি X-OR গেট তৈরি করতে কয়টি NAND গেট লাগে?", o: [bn(count["nand XOR"]), "২", "৩", "৫"],
    x: "হীরার মতো সাজানো ৪টি NAND: সামনেরটি A ও B নেয়, মাঝের দুটি A ও B-এর সঙ্গে প্রথমটির ফল নেয়, পেছনেরটি মাঝের দুটির ফল জোড়ে।" },
  { q: "শুধু NAND গেট দিয়ে একটি X-NOR গেট তৈরি করতে কয়টি NAND গেট লাগে?", o: [bn(count["nand XNOR"]), "২", "৩", "৪"],
    x: "X-OR-এর ৪টি NAND-এর পরে আরেকটি NAND (দুই ইনপুট জোড়া) ফল উল্টে দেয়; মোট ৫টি।" },
  { q: "শুধু NOR গেট দিয়ে একটি AND গেট তৈরি করতে কয়টি NOR গেট লাগে?", o: [bn(count["nor AND"]), "১", "২", "৪"],
    x: "সামনের দুটি NOR A ও B-কে আলাদা করে উল্টায়, পেছনেরটি দুটিকে জোড়ে: মোট ৩টি। NOR-এর কলামে NAND-এর ক্রম জোড়ায় জোড়ায় অদলবদল: ১, ৩, ২, ৫, ৪।" },
  { q: "শুধু NOR গেট দিয়ে একটি OR গেট তৈরি করতে কয়টি NOR গেট লাগে?", o: [bn(count["nor OR"]), "১", "৩", "৪"],
    x: "প্রথম NOR দেয় A + B-এর পূরক, দ্বিতীয় NOR (দুই ইনপুট জোড়া) সেটি উল্টে A + B দেয়; মোট ২টি।" },
  { q: "শুধু NOR গেট দিয়ে একটি X-OR গেট তৈরি করতে কয়টি NOR গেট লাগে?", o: [bn(count["nor XOR"]), "২", "৩", "৪"],
    x: "NOR-এর হীরায় (৪টি) তৈরি হয় X-NOR; তার পরে আরেকটি NOR ফল উল্টে X-OR দেয়, মোট ৫টি। NAND-এ ঠিক উল্টো: X-OR ৪টি, X-NOR ৫টি।" },
  { q: "শুধু NOR গেট দিয়ে একটি X-NOR গেট তৈরি করতে কয়টি NOR গেট লাগে?", o: [bn(count["nor XNOR"]), "৩", "৫", "৬"],
    x: "হীরার মতো সাজানো ৪টি NOR সরাসরি X-NOR দেয়।" },
  { q: "শুধু NAND গেট দিয়ে একটি NOR গেট তৈরি করতে কয়টি NAND গেট লাগে?", o: [bn(count["nand NOR"]), "২", "৩", "৫"],
    x: "NAND দিয়ে OR বানাতে ৩টি (সামনে দুই, পেছনে এক), তার পরে আরেকটি NAND ফল উল্টায়: মোট ৪টি, তবে হীরার মতো নয়।" },
  { q: "একটি NAND গেটের দুই ইনপুট একসঙ্গে জোড়া দিলে এটি কোন গেটের কাজ করে?", o: ["NOT", "AND", "OR", "বাফার"],
    x: `দুই ইনপুটেই A দিলে আউটপুট ${ov("A·A")} = ${ov("A")}, অর্থাৎ NOT গেট। NOR-এর ক্ষেত্রেও একই: ${ov("A + A")} = ${ov("A")}।` },
  { q: "একটি NOR গেটের দুই ইনপুটে A ও A দিলে আউটপুট কী হবে?", o: [ov("A"), "A", "০", "১"],
    x: `${ov("A + A")} = ${ov("A")}, কারণ A + A = A; তাই একটি NOR দিয়েই NOT গেট।` },
  { q: "সার্বজনীন গেট দিয়ে পুরো চিপ তৈরির প্রধান সুবিধা কী?", o: ["এক ধরনের গেট বানিয়েই সব বর্তনী তৈরি করা যায়, তাই খরচ ও জটিলতা কমে", "চিপটি বিদ্যুৎ ছাড়াই চলে", "যেকোনো বর্তনীতে গেটের সংখ্যা সবসময় কমে যায়", "শুধু যোগের কাজ করা যায়"],
    x: "NAND বা NOR দিয়েই AND, OR, NOT, তাই যেকোনো বর্তনী বানানো যায়; কারখানায় এক ধরনের গেট বানালেই চলে। গেটের সংখ্যা বরং অনেক সময় বাড়ে (যেমন AND-এর জন্য ২টি NAND)।" }
];

let src = fs.readFileSync(FILE, "utf8");
const already = (src.match(/\{ q: "/g) || []).length, BOOK = 102, CHECK = process.argv.includes("--check");
if (!CHECK) ok(already === BOOK, "the book's 102 are there and nothing was added yet");
const esc = s => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const num = s => (/^[০-৯]+$/.test(s) ? parseInt(s.replace(/[০-৯]/g, d => BN.indexOf(d))) : NaN);
let n = BOOK, rot = 0;
const lines = [`    // প্রশ্ন ${bn(n + 1)}–${bn(n + QS.length)} · সার্বজনীন গেট (এই সাইটের জন্য লেখা)`], letters = { ক: 0, খ: 0, গ: 0, ঘ: 0 };
for (const it of QS) {
  ok(it.o.length === 4 && new Set(it.o).size === 4, "4 distinct options: " + it.q);
  let o, at;
  if (it.o.every(s => !isNaN(num(s)))) { o = [...it.o].sort((a, b) => num(a) - num(b)); at = o.indexOf(it.o[0]); }
  else { o = it.o.slice(1); at = rot++ % 4; o.splice(at, 0, it.o[0]); }
  letters[L[at]]++; n++;
  lines.push(`    { q: "${esc(it.q)}", o: [${o.map(s => `"${esc(s)}"`).join(", ")}], a: "${L[at]}",\n      x: "${esc(it.x)}" }`);
}
if (CHECK) {
  const missing = lines.filter(l => !l.startsWith("    //") && !src.includes(l));
  console.log(missing.length ? `${missing.length} question(s) differ from the file:\n` + missing.join("\n") : `ok: all ${n - BOOK} questions match the file, answers recomputed`);
  process.exit(missing.length ? 1 : 0);
}
const body = lines.reduce((acc, line, i) => acc + (line.startsWith("    //") ? line + "\n" : line + (i < lines.length - 1 ? ",\n" : "\n")), "");
ok(/\}\n  \]\n\}\);\s*$/.test(src), "file ending");
src = src.replace(/\}\n  \]\n\}\);\s*$/, "},\n" + body + "  ]\n});\n");
const head = "/* অধ্যায় ৪ · লজিক সার্কিট ও লজিক গেট — 102 questions, in their original order.";
ok(src.includes(head), "header");
src = src.replace(head, `/* অধ্যায় ৪ · লজিক সার্কিট ও লজিক গেট — ${n} questions: 1–102 from the book, in its order; 103–${n} written for this site (universal gates).`);
fs.writeFileSync(FILE, src);
console.log("added", n - already, "now", n, "letters", letters, "gate counts", JSON.stringify(count));
