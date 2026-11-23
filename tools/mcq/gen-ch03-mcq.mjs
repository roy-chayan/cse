// New MCQs for chapter ৩ (উপাত্ত উপস্থাপন): working with BCD, ASCII and EBCDIC codes, where the book's questions
// Applied on 2026-11-23 (questions 58 onward in mcq/ch03.js). Kept as the record of how those questions were made
// and to check them:  node tools/mcq/gen-ch03-mcq.mjs mcq/ch03.js --check
// recomputes every answer and confirms the file still holds exactly these questions. Without --check it would append
// them, and it refuses to if the chapter no longer has just the book's 57.
// were mostly names and bit counts. Written for this site and appended after the book's 57; every code is computed.
import fs from "node:fs";
const [FILE] = process.argv.slice(2);
const L = ["ক", "খ", "গ", "ঘ"], BN = "০১২৩৪৫৬৭৮৯", bn = s => String(s).replace(/\d/g, d => BN[d]);
const ok = (c, m) => { if (!c) throw new Error("check failed: " + m); };
const nib = d => d.toString(2).padStart(4, "0");
const bcd = n => [...String(n)].map(d => nib(+d)).join(" ");
const unbcd = s => +s.split(" ").map(g => parseInt(g, 2)).join("");
const ascii = ch => ch.charCodeAt(0);
const ebcdic = ch => (/[0-9]/.test(ch) ? 0xF0 + +ch : /[A-I]/.test(ch) ? 0xC1 + ch.charCodeAt(0) - 65 : /[J-R]/.test(ch) ? 0xD1 + ch.charCodeAt(0) - 74 : null);
const hex = n => n.toString(16).toUpperCase();
const B = (s, b) => `(${s})<sub>${b}</sub>`;

// BCD addition 7 + 5: 0111 + 0101 = 1100, more than 9, so add 0110
const sum75 = 7 + 5, corrected = sum75 + 6;
ok(nib(sum75) === "1100" && corrected === 0b10010 && bcd(12) === "0001 0010", "BCD 7+5");

const CODE = [
  { q: `${B("93", 10)}-এর BCD (8421) কোড কোনটি?`, o: [bcd(93), "0101 1101", "1001 1100", "0011 1001"], check: () => bcd(93) === "1001 0011" && (93).toString(2) === "1011101",
    x: "প্রতিটি দশমিক অঙ্ক আলাদা ৪ বিটে: ৯ = 1001, ৩ = 0011, তাই 1001 0011। 0101 1101 হলো ৯৩-এর সাধারণ বাইনারি (1011101), BCD নয়।" },
  { q: "BCD কোড 0110 0010 0101 কোন দশমিক সংখ্যা নির্দেশ করে?", o: [bn(unbcd("0110 0010 0101")), "১৫৭৩", "৫২৬", "৬২৪"], num: true, check: () => unbcd("0110 0010 0101") === 625 && parseInt("011000100101", 2) === 1573,
    x: "প্রতি ৪ বিটে একটি অঙ্ক: 0110 = ৬, 0010 = ২, 0101 = ৫, তাই ৬২৫। পুরোটা একসঙ্গে বাইনারি ধরলে ১৫৭৩ আসে, যা ভুল।" },
  { q: `${B("39", 10)} BCD-তে প্রকাশ করতে কয়টি বিট লাগে?`, o: ["৮", "৬", "৭", "১২"], num: true, check: () => bcd(39).replace(" ", "").length === 8 && (39).toString(2).length === 6,
    x: "দুটি অঙ্ক, প্রতিটিতে ৪ বিট: 0011 1001, মোট ৮ বিট। সাধারণ বাইনারিতে ৩৯ = 100111, মাত্র ৬ বিট; তাই BCD-তে বিট বেশি লাগে।" },
  { q: "৪ বিটের ১৬টি বিন্যাসের মধ্যে কয়টি বৈধ BCD অঙ্ক?", o: ["১০", "৮", "১২", "১৬"], num: true, check: () => [...Array(16).keys()].filter(v => v <= 9).length === 10,
    x: "BCD-তে শুধু ০–৯ (0000–1001), অর্থাৎ ১০টি বৈধ; 1010 থেকে 1111, এই ৬টি অব্যবহৃত।" },
  { q: "নিচের কোনটি বৈধ BCD সংখ্যা নয়?", o: ["0101 1010", "1001 0011", "0111 0000", "0000 1000"], check: () => parseInt("1010", 2) > 9,
    x: "1010 = ১০, কিন্তু BCD-র একটি ঘরে সর্বোচ্চ ৯ (1001) থাকতে পারে; তাই 0101 1010 অবৈধ।" },
  { q: "Excess-3 কোডে দশমিক ৪ কীভাবে লেখা হয়?", o: [nib(4 + 3), "0100", "0011", "1000"], check: () => nib(7) === "0111",
    x: "Excess-3-এ প্রতিটি অঙ্কের সঙ্গে ৩ যোগ করে তারপর ৪ বিটে লেখা হয়: ৪ + ৩ = ৭ = 0111। এটি ওজনবিহীন কোড।" },
  { q: "BCD যোগে কোনো ঘরের যোগফল ৯ ছাড়ালে সংশোধনের জন্য কত যোগ করতে হয়?", o: ["0110 (৬)", "0011 (৩)", "1001 (৯)", "1010 (১০)"],
    x: "৪ বিটে ১৬টি বিন্যাস, BCD ব্যবহার করে ১০টি; বাকি ৬টি লাফিয়ে যেতে 0110 যোগ করা হয়, আর ক্যারি পরের ঘরে যায়।" },
  { q: "BCD-তে ৭ + ৫ করলে 0111 + 0101 = 1100 হয়। সংশোধনের পর সঠিক BCD ফল কোনটি?", o: [bcd(12), "1100", "0001 1100", "0001 0001"],
    x: "1100 = ১২, যা ৯-এর বেশি, তাই 0110 যোগ: 1100 + 0110 = 1 0010। ফল 0001 0010, অর্থাৎ ১২-এর BCD।" },
  { q: "১ কিলোবাইট (KB) সমান কত বাইট?", o: [bn(2 ** 10), "১০০", "৫১২", "১০০০"], num: true, check: () => 2 ** 10 === 1024,
    x: "কম্পিউটারে বড় এককগুলো ১০২৪ (২<sup>১০</sup>) গুণ করে: ১ KB = ১০২৪ বাইট, ১ MB = ১০২৪ KB, ১ GB = ১০২৪ MB।" },
  { q: "১ বাইটে কয়টি নিবল থাকে?", o: ["২", "১", "৪", "৮"], num: true, check: () => 8 / 4 === 2,
    x: "১ নিবল = ৪ বিট, ১ বাইট = ৮ বিট, তাই ১ বাইটে ২টি নিবল; প্রতিটি নিবল একটি হেক্সাডেসিমাল বা BCD অঙ্ক।" }
];
const CODES = [
  { q: "ASCII কোডে 'A'-এর দশমিক মান ৬৫ হলে 'D'-এর মান কত?", o: [bn(ascii("D")), "৬৭", "৬৯", "১০০"], num: true, check: () => ascii("D") === 68,
    x: "ASCII-তে A–Z পরপর: A = ৬৫, B = ৬৬, C = ৬৭, D = ৬৮।" },
  { q: "ASCII কোডে 'B'-এর মান ৬৬ হলে ছোট হাতের 'b'-এর মান কত?", o: [bn(ascii("b")), "৬৭", "৯৭", "৯৯"], num: true, check: () => ascii("b") === 66 + 32,
    x: "ছোট হাতের বর্ণ = বড় হাতের বর্ণ + ৩২; তাই b = ৬৬ + ৩২ = ৯৮। ৯৭ হলো 'a'।" },
  { q: "ASCII কোডে অঙ্ক '0'-এর দশমিক মান কত?", o: [bn(ascii("0")), "০", "৩২", "৬৫"], num: true, check: () => ascii("0") === 48,
    x: "অঙ্ক ০–৯-এর ASCII মান ৪৮–৫৭ (হেক্সায় 30–39); ৩২ হলো ফাঁকা ঘর, ৬৫ হলো 'A'।" },
  { q: "৭ বিটের ASCII-তে 'A' কীভাবে লেখা হয়?", o: ["100 0001", "110 0001", "011 0000", "100 0010"], check: () => ascii("A").toString(2) === "1000001",
    x: "A = ৬৫ = ৬৪ + ১ = 100 0001 (হেক্সায় 41)। 110 0001 হলো 'a' (৯৭), 011 0000 অঙ্ক '0', 100 0010 'B'।" },
  { q: "EBCDIC কোডে অঙ্ক ৭-এর হেক্সাডেসিমাল কোড কত?", o: [hex(ebcdic("7")), "37", "C7", "07"], check: () => hex(ebcdic("7")) === "F7" && hex(ascii("7")) === "37",
    x: "EBCDIC-এ অঙ্কের জোন 1111 (F), ডিজিট অংশে অঙ্কটি: ৭ = 1111 0111 = F7। 37 হলো ASCII-তে '7'।" },
  { q: "EBCDIC কোডে 'A'-এর হেক্সাডেসিমাল কোড কত?", o: [hex(ebcdic("A")), "41", "A1", "F1"], check: () => hex(ebcdic("A")) === "C1",
    x: "A–I-এর জোন 1100 (C), A প্রথম বর্ণ, তাই 1100 0001 = C1। 41 হলো ASCII-তে 'A', F1 হলো EBCDIC-এ অঙ্ক ১।" }
];

const GROUPS = [["কোড, BCD ও একক", "code", CODE], ["ASCII ও EBCDIC", "ascii", CODES]];
let src = fs.readFileSync(FILE, "utf8");
const already = (src.match(/\{ q: "/g) || []).length, BOOK = 57, CHECK = process.argv.includes("--check");
if (!CHECK) ok(already === BOOK, "the book's 57 are there and nothing was added yet");
const esc = s => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const num = s => parseFloat(s.replace(/[০-৯]/g, d => BN.indexOf(d)));
let n = BOOK, rot = 0;
const lines = [], ranges = {}, letters = { ক: 0, খ: 0, গ: 0, ঘ: 0 };
for (const [title, topic, qs] of GROUPS) {
  lines.push(`    // প্রশ্ন ${bn(n + 1)}–${bn(n + qs.length)} · ${title} (এই সাইটের জন্য লেখা)`);
  ranges[topic] = `${n + 1}-${n + qs.length}`;
  for (const it of qs) {
    ok(it.o.length === 4 && new Set(it.o).size === 4, "4 distinct options: " + it.q);
    if (it.check) ok(it.check(), "computed: " + it.q);
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
const head = "/* অধ্যায় ৩ · উপাত্ত উপস্থাপন — 57 questions, in their original order.";
ok(src.includes(head), "header");
src = src.replace(head, `/* অধ্যায় ৩ · উপাত্ত উপস্থাপন — ${n} questions: 1–57 from the book, in its order; 58–${n} written for this site, grouped by the note's sections.`);
fs.writeFileSync(FILE, src);
console.log("added", n - already, "now", n, "letters", letters, "ranges", JSON.stringify(ranges));
