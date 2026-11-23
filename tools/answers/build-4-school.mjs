// Builds answers/4-school.js: model answers for the ৪র্থ (২০০৭) paper (subject code ১১৪), every question with its অথবা.
//   node tools/answers/build-4-school.mjs
// Printing problems, each stated in its answer: “DOS কোডে” for BCD (প্রশ্ন ২); the brackets of প্রশ্ন ৪'s two
// expressions don't match (read as in the chapter ৪ note); (ABC + DEF) has no base (read as hex, from the note).
// Sources, so nothing is written twice (see lib.mjs): worked blocks from the chapter notes, earlier answers reused
// with data-include, and new writing below. Every number written here is computed or checked against a computation.
import { notes, ok, bn, part, include, reuse, inc, OR, side, answer, writeAnswers, seriesSum } from "./lib.mjs";

const { template, fromH4, fromH3, fromSection, fromAnswer } = notes("wa4");
const ov = s => `<span class="ov">${s}</span>`;
const sub = (n, b) => `(${n})<sub>${b}</sub>`;
const split = s => `  <p class="split-note">${s}</p>`;
const drop = (s, piece, to = "") => { ok(s.includes(piece), piece.slice(0, 60)); return s.replace(piece, to); };
const indent = s => s.split("\n").map(l => l.replace(/^ {8}/, "    ")).join("\n");
const val = (s, b) => { const [w, f = ""] = s.split("."); return parseInt(w + f, b) / b ** f.length; };
const N = x => 1 - x;
const tt = f => [...Array(8).keys()].map(k => +!!f(k >> 2 & 1, k >> 1 & 1, k & 1)).join("");
const pick = (tpl, re, what) => { const m = template(tpl).match(re); ok(m, what); return indent(m[0]); };
const bcd = n => [...String(n)].map(d => (+d).toString(2).padStart(4, "0")).join(" ");

// ---------------- lifted blocks, checked ----------------
// প্রশ্ন ১: 0–16 in binary, octal and hex
let t016 = fromH4("t-note", "n4-1");
t016 = drop(t016, `<p class="prose">একই প্রশ্নের অন্য অংশগুলো (বৈশিষ্ট্য, অ্যাবাকাস, সফটওয়্যার-ফার্মওয়্যার) আছে <a href="#/note/computer-basics/def">অধ্যায় ১</a>-এ। তালিকাটি:</p>`,
  `<p class="prose">বাইনারি পাই ২ দিয়ে বারবার ভাগ করে (বা ৮, ৪, ২, ১ ওজনে ভেঙে); বাইনারির ডান দিক থেকে ৩ বিটের দলে অক্টাল, ৪ বিটের দলে হেক্সাডেসিমাল:</p>`);
const rows016 = [...t016.matchAll(/<tr><td>([০-৯]+)<\/td><td>([01]+)<\/td><td>([0-7]+)<\/td><td>([0-9A-F]+)<\/td><\/tr>/g)];
ok(rows016.length === 17, "0–16: 17 rows");
rows016.forEach(([, d, b, o, x], k) => ok(d === bn(k) && b === k.toString(2) && o === k.toString(8) && x === k.toString(16).toUpperCase(), `row ${k}`));

// প্রশ্ন ১ অথবা: 5A
const n5a = fromH4("t-note", "n4-1o");
ok(val("5A", 16) === 90 && (90).toString(2) === "1011010" && (90).toString(8) === "132" && n5a.includes("= (1011010)<sub>2</sub> = (132)<sub>8</sub> = (90)<sub>10</sub>"), "5A");

// প্রশ্ন ২: ABC + DEF; 129 in BCD
const n42 = fromH4("t-note", "n4-2"), cut42 = n42.indexOf(`<p class="prose"><b>(129)<sub>10</sub> থেকে BCD:</b>`);
ok(cut42 > 0, "split n4-2");
const abcdef = drop(n42.slice(0, cut42).trimEnd(), `ভিত্তির আলোচনা <a href="#/note/number-system/idea">অংশ ১</a>-এ। `);
ok(val("ABC", 16) + val("DEF", 16) === val("18AB", 16) && abcdef.includes("= (18AB)<sub>16</sub>"), "ABC + DEF");
const b129 = "    " + drop(n42.slice(cut42).trim(), ` BCD কোডের আলোচনা <a href="#/note/data-representation/code">অধ্যায় ৩</a>-এ।`);
ok(bcd(129) === "0001 0010 1001" && b129.includes(`(${bcd(129)})<sub>BCD</sub>`), "129 BCD");

// প্রশ্ন ২ অথবা: (101.01)2 ÷ (11.1)2
const div2 = drop(fromH4("t-note", "n4-2o"), ` একই প্রশ্নের CPU-র সংগঠন আছে <a href="#/note/computer-basics/org">অধ্যায় ১</a>-এ।`);
ok(val("101.01", 2) / val("11.1", 2) === val("1.1", 2) && div2.includes("= (1.1)<sub>2</sub>"), "101.01 ÷ 11.1");

// প্রশ্ন ৪: the circuit as read in the note; প্রশ্ন ৪ অথবা: two truth tables
const circ4 = fromH4("t-note-ch04", "pp4-4");
ok(tt((a, b, c) => N(a | N(a) & N(b)) & a & b | c) === tt((a, b, c) => c), "pp4-4 = C");
ok(circ4.includes("<b>সরল রূপ</b>Y = C"), "pp4-4 result");
const maj = (a, b, c) => a & b | b & c | c & a;
const majRows = [...Array(8).keys()].map(k => [k >> 2 & 1, k >> 1 & 1, k & 1]).map(([a, b, c]) => `<tr><td>${a}</td><td>${b}</td><td>${c}</td><td>${a & b}</td><td>${b & c}</td><td>${c & a}</td><td>${maj(a, b, c)}</td></tr>`).join("");
const X3 = (a, b, c) => N(a | b | N(c)) & (N(b) & c);
ok(tt(X3) === tt((a, b, c) => N(a) & N(b) & c), "(A + B + C̄)'·B̄C = ĀB̄C");
const proofTable = (() => { const t = template("t-note-ch04"), i = t.indexOf(`id="pp5-3"`), a = t.indexOf(`<table class="truth">`, i), b = t.indexOf("</table>", a) + 8; ok(a > i && b > a, "pp5-3 table"); return indent(t.slice(a, b)); })();
for (let k = 0; k < 8; k++) { const [a, b, c] = [k >> 2 & 1, k >> 1 & 1, k & 1]; ok(proofTable.includes(`<tr><td>${a}</td><td>${b}</td><td>${c}</td><td>${N(a | b | N(c))}</td><td>${N(b) & c}</td><td>${X3(a, b, c)}</td><td>${N(a) & N(b) & c}</td></tr>`), `proof row ${k}`); }

// প্রশ্ন ৫: 1 + 3 + … + 99 (the odd numbers up to 100)
const S5 = seriesSum({ first: 1, step: 2, last: 100, id: "odd4-ah", caption: "" });
ok(S5.Sum === 2500 && S5.trace.length === 50 && S5.stop === 101, "odd numbers to 100");

// প্রশ্ন ৭: the factorial algorithm, with a trace for N = 5
const factAlgo = pick("t-note-ch06", /<ol class="algo">\s*<li>শুরু।<\/li>\s*<li>একটি ধনাত্মক পূর্ণসংখ্যা N ইনপুট নিই।<\/li>[\s\S]*?<\/ol>/, "factorial algorithm");
const factTrace = []; { let F = 1; for (let i = 1; i <= 5; i++) { F *= i; factTrace.push([i, F]); } ok(F === 120, "5! = 120"); }
const n47 = fromH4("t-note", "n4-7o");
ok(val("37.25", 10) === val("100101.01", 2) && n47.includes("= (100101.01)<sub>2</sub>"), "37.25");

// pieces of chapter notes and earlier answers
const dosCmd = fromH3("t-note-ch05", "অভ্যন্তরীণ ও বাহ্যিক কমান্ড");
const procSteps = fromH3("t-note-ch03", "প্রক্রিয়াকরণের ধাপ");
const multiDiff = fromSection("t-note-ch05", "multi-diff");
const cuiPro = fromSection("t-note-ch05", "cui-pro");
ok(cuiPro.includes("CUI") && cuiPro.includes("GUI"), "CUI and GUI pros");
const ascii = fromH3("t-note-ch03", "ASCII");
const flowRules = fromSection("t-note-ch06", "flow-rules");
const tri = fromH4("t-note-ch06", "p-tri");
const humanVsPc = fromH3("t-note-ch03", "ম্যানুয়াল ও কম্পিউটারভিত্তিক প্রক্রিয়াকরণ");
const mechanical = pick("t-note-ch01", /<p class="prose"><b>যান্ত্রিক কম্পিউটারের অসুবিধা:<\/b>[\s\S]*?<\/p>/, "mechanical computers");
const omrOcr = fromAnswer("14-school", 8, 1, `<table class="rt cmp">`);
const osDef = pick("t-note-ch05", /<p class="defn"><b>সংজ্ঞা<\/b>অপারেটিং সিস্টেম \(Operating System, OS\)[\s\S]*?<\/p>/, "OS definition");

// ---------------- the answers ----------------
const A = {};

A[1] = answer([
  split("প্রশ্নে নম্বর ভাগ করা নেই। সংজ্ঞায় ২, বৈশিষ্ট্যে ৪, অ্যাবাকাসে ২, পার্থক্যে ৩ আর তালিকায় ৪ ধরে লিখুন।"),
  part("কম্পিউটার কী", "২", [inc("এই অংশটি ১০ম পরীক্ষার ১ নম্বর প্রশ্নের উত্তর থেকে।"), include("10-school", 1, 1)].join("\n"), true),
  part("মানুষের মধ্যে অনুপস্থিত, কম্পিউটারের এমন পাঁচটি বৈশিষ্ট্য", "৪", `    <ol class="algo">
      <li><span><b>অবিশ্বাস্য গতি:</b> সেকেন্ডে কোটি কোটি হিসাব; মানুষের কয়েক দিনের কাজ কয়েক মুহূর্তে।</span></li>
      <li><span><b>নির্ভুলতা:</b> ক্লান্তি বা অমনোযোগে মানুষ ভুল করে; কম্পিউটার সঠিক উপাত্ত ও প্রোগ্রামে প্রতিবার নির্ভুল ফল দেয়।</span></li>
      <li><span><b>ক্লান্তিহীনতা:</b> একটানা ঘণ্টার পর ঘণ্টা একই মান ও গতিতে কাজ করে; বিরক্ত বা ক্লান্ত হয় না।</span></li>
      <li><span><b>বিপুল ও স্থায়ী স্মৃতি:</b> বিশাল পরিমাণ তথ্য রাখে, কখনো ভোলে না, মুহূর্তে খুঁজে দেয়।</span></li>
      <li><span><b>আবেগ ও পক্ষপাতহীনতা:</b> রাগ, ভয় বা একঘেয়েমি নেই; একই কাজ প্রতিবার একইভাবে করে।</span></li>
    </ol>
    <p class="prose">উল্টো দিকে, কম্পিউটারের নিজস্ব বুদ্ধি, বিচারবোধ ও সৃজনশীলতা নেই; এগুলো মানুষের।</p>`, true),
  part("অ্যাবাকাস কী", "২", [inc("এই অংশটি ১১তম পরীক্ষার ১ নম্বর প্রশ্নের উত্তর থেকে।"), include("11-school", 1, 1)].join("\n"), true),
  part("সফটওয়্যার ও ফার্মওয়্যারের পার্থক্য", "৩", `    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>সফটওয়্যার</th><th>ফার্মওয়্যার</th></tr></thead>
      <tbody>
        <tr><td>কোথায় থাকে</td><td>হার্ডডিস্ক বা SSD-তে; চলার সময় RAM-এ</td><td>যন্ত্রের ভেতরের ROM বা ফ্ল্যাশ মেমোরিতে</td></tr>
        <tr><td>বদলানো</td><td>সহজে ইনস্টল, আপডেট ও মুছে ফেলা যায়</td><td>সাধারণত বদলানো হয় না; শুধু প্রস্তুতকারকের আপডেটে</td></tr>
        <tr><td>কাজ</td><td>ব্যবহারকারীর নানা কাজ</td><td>নির্দিষ্ট যন্ত্রকে চালু ও নিয়ন্ত্রণ করা</td></tr>
        <tr><td>উদাহরণ</td><td>Windows, MS Word</td><td>BIOS, রাউটারের নিয়ন্ত্রণ প্রোগ্রাম</td></tr>
      </tbody>
    </table>`, true),
  part("০ থেকে ১৬ পর্যন্ত দশমিক সংখ্যার বাইনারি, অক্টাল ও হেক্সাডেসিমাল মান", "৪", t016, true),
  OR,
  `  <p class="split-note">প্রশ্নে নম্বর ভাগ করা নেই। সংজ্ঞায় ২, প্রজন্মগুলোর বৈশিষ্ট্যে ৮ আর 5A-তে ৫ ধরে লিখুন। প্রথম অংশটি ১৮তম পরীক্ষার ১ নম্বর প্রশ্নের উত্তর থেকে।</p>`,
  reuse("18-school", 1, 1),
  part("প্রত্যেক প্রজন্মের দুটি করে বৈশিষ্ট্য, উদাহরণসহ", "৮", [inc("একই প্রশ্ন ১৮তম, ১২তম ও ৭ম পরীক্ষায় এসেছে; প্রতিটি প্রজন্ম থেকে মূল উপাদান আর একটি বৈশিষ্ট্য বেছে লিখলেই দুটি হয়।"), include("18-school", 1, 2)].join("\n"), true),
  part("5A কোন ধরনের সংখ্যা; বাইনারি, অক্টাল ও দশমিক মান", "৫", n5a, true)
].join("\n"), side([["মানুষের তুলনায়", "“মানুষের মধ্যে অনুপস্থিত” বলা আছে, তাই প্রতিটি বৈশিষ্ট্যে মানুষের সঙ্গে তুলনার এক টুকরো কথা দিন।"],
  ["বিস্তারিত নোট", `<a href="#/note/computer-basics/def">অধ্যায় ১ · বৈশিষ্ট্য</a>, <a href="#/note/computer-basics/hist">ইতিহাস</a>, <a href="#/note/computer-basics/sw">ফার্মওয়্যার</a>, <a href="#/note/number-system/systems">অধ্যায় ২ · চার পদ্ধতি</a>`]], ["কম্পিউটার বেসিক", "সংখ্যা পদ্ধতি"]));

A[2] = answer([
  split("প্রশ্নে নম্বর ভাগ করা নেই। ভিত্তিতে ৫, যোগে ৫, BCD-র সংজ্ঞায় ২ আর রূপান্তরে ৩ ধরে লিখুন।"),
  part("সংখ্যা পদ্ধতির ভিত্তি; বিভিন্ন পদ্ধতির ভিত্তি", "৫", [inc("এই অংশটি ৮ম পরীক্ষার ৯ নম্বর প্রশ্নের (অথবা) উত্তর থেকে।"), include("8-school", 9, 2)].join("\n"), true),
  part("(ABC + DEF)-এর যোগফল", "৫", abcdef, true),
  part("BCD কোড কী", "২", [inc("এই অংশটি ১০ম পরীক্ষার ৫ নম্বর প্রশ্নের উত্তর থেকে।"), include("10-school", 5, 2)].join("\n"), true),
  part(`${sub("129", 10)} থেকে BCD কোডে`, "৩", `    <p class="prose">ছাপায় শেষ বাক্যে “DOS কোডে” আছে; DOS কোনো কোড নয়, প্রসঙ্গ অনুযায়ী এটি BCD কোড।</p>
${b129}`, true),
  OR,
  split("প্রশ্নে নম্বর ভাগ করা নেই। যুক্তিতে ৫, CPU-তে ৭ আর ভাগে ৩ ধরে লিখুন।"),
  part("“সফটওয়্যার হার্ডওয়্যারকে নিয়ন্ত্রণ করে”: যুক্তি", "৫", `    <p class="prose">হার্ডওয়্যার নিজে কিছুই জানে না; কখন কোন অংশ কী করবে, তা সফটওয়্যারের নির্দেশেই ঠিক হয়। যুক্তিগুলো:</p>
    <ol class="algo">
      <li><span><b>চালু হওয়া:</b> কম্পিউটার চালু হলে ROM-এর BIOS (ফার্মওয়্যার) যন্ত্রাংশ পরীক্ষা করে অপারেটিং সিস্টেম লোড করে; এটি ছাড়া যন্ত্র চালুই হয় না।</span></li>
      <li><span><b>রিসোর্স বণ্টন:</b> অপারেটিং সিস্টেম ঠিক করে কোন প্রোগ্রাম কখন CPU, কতটুকু স্মৃতি আর কোন ইনপুট-আউটপুট যন্ত্র পাবে।</span></li>
      <li><span><b>ড্রাইভার:</b> প্রিন্টার, স্ক্যানার, সাউন্ড কার্ডের মতো প্রতিটি যন্ত্র চলে তার ডিভাইস ড্রাইভারের নির্দেশে।</span></li>
      <li><span><b>একই যন্ত্র, ভিন্ন কাজ:</b> একই হার্ডওয়্যার ওয়ার্ড প্রসেসর চালালে লেখার যন্ত্র, গেম চালালে খেলার যন্ত্র; কাজ বদলায় সফটওয়্যার বদলালে।</span></li>
      <li><span><b>সফটওয়্যার ছাড়া অচল:</b> প্রোগ্রাম না থাকলে সবচেয়ে দামি হার্ডওয়্যারও কিছুই করতে পারে না।</span></li>
    </ol>
    <p class="prose">তাই সফটওয়্যারকে কম্পিউটারের প্রাণ আর হার্ডওয়্যারকে দেহ বলা হয়।</p>`, true),
  part("সিপিইউ কী; সিপিইউ-এর সংগঠন চিত্রসহ", "৭", [inc("একই প্রশ্ন ১৭তম পরীক্ষায় এসেছে (প্রশ্ন ২ ক)।"), include("17-school", 2, 1)].join("\n"), true),
  part(`${sub("101.01", 2)}-কে ${sub("11.1", 2)} দ্বারা ভাগ`, "৩", div2, true)
].join("\n"), side([["ভিত্তি না থাকলে", "(ABC + DEF)-এ ভিত্তি লেখা নেই; A–F দেখে হেক্সা ধরেছেন, তা শুরুতেই লিখুন।"],
  ["বিস্তারিত নোট", `<a href="#/note/number-system/idea">অধ্যায় ২ · ভিত্তি</a>, <a href="#/note/number-system/arith">গাণিতিক কাজ</a>, <a href="#/note/data-representation/code">অধ্যায় ৩ · BCD</a>, <a href="#/note/computer-basics/org">অধ্যায় ১ · CPU</a>`]], ["সংখ্যা পদ্ধতি", "উপাত্ত উপস্থাপন", "কম্পিউটার বেসিক"]));

A[3] = answer([
  split("প্রশ্নে নম্বর ভাগ করা নেই। স্মৃতি ও পার্থক্যে ৪, যুক্তিতে ৪, ল্যাপটপে ২ আর DOS কমান্ডে ৫ ধরে লিখুন।"),
  part("কম্পিউটার স্মৃতি কী; প্রধান ও সহায়ক স্মৃতির চারটি পার্থক্য", "৪", [inc("“এর মধ্যে পার্থক্য” মানে স্মৃতির দুই প্রধান ভাগ, প্রধান ও সহায়ক স্মৃতির পার্থক্য ধরা হলো। সংজ্ঞা ১৮তম আর ছক ৮ম পরীক্ষার উত্তর থেকে।"), include("18-school", 2, 1), include("8-school", 1, 4)].join("\n"), true),
  part("“কম্পিউটার একটি প্রোগ্রাম নিয়ন্ত্রিত ইলেকট্রনিক যন্ত্র”: যুক্তি", "৪", `    <ul class="pts">
      <li><b>ইলেকট্রনিক:</b> ট্রানজিস্টর, IC ও মাইক্রোপ্রসেসরের মতো ইলেকট্রনিক উপাদানে তৈরি; বিদ্যুৎ সংকেতের দুই অবস্থায় (০ ও ১) কাজ করে, তাই এত দ্রুত।</li>
      <li><b>প্রোগ্রাম নিয়ন্ত্রিত:</b> নিজে থেকে কিছুই করে না; প্রতিটি কাজ প্রোগ্রামের নির্দেশে। প্রোগ্রাম স্মৃতিতে থাকে, CPU নির্দেশগুলো একে একে পালন করে।</li>
      <li><b>প্রোগ্রাম বদলালে কাজ বদলায়:</b> একই যন্ত্র হিসাব, লেখা, ছবি বা গানের কাজ করে শুধু প্রোগ্রাম বদলে।</li>
      <li><b>প্রোগ্রামই নির্ধারক:</b> ভুল প্রোগ্রাম বা ভুল উপাত্ত দিলে ভুল ফল আসে (Garbage In, Garbage Out); কম্পিউটার নিজে তা শোধরাতে পারে না।</li>
    </ul>
    <p class="prose">তাই কম্পিউটার একটি প্রোগ্রাম নিয়ন্ত্রিত ইলেকট্রনিক যন্ত্র।</p>`, true),
  part("আকৃতিগত দিক হতে ল্যাপটপ কোন ধরনের কম্পিউটার", "২", `    <p class="prose">ল্যাপটপ একটি <b>মাইক্রো কম্পিউটার</b> (পার্সোনাল কম্পিউটার)। আকার ও ক্ষমতা অনুসারে ডিজিটাল কম্পিউটারের চার ভাগের (সুপার, মেইনফ্রেম, মিনি, মাইক্রো) মধ্যে এটি মাইক্রো; আর আকৃতিতে মাইক্রো কম্পিউটারের ধরনগুলো হলো ডেস্কটপ, ল্যাপটপ বা নোটবুক, ট্যাবলেট ও স্মার্টফোন। ল্যাপটপে মনিটর, কিবোর্ড ও টাচপ্যাড একসঙ্গে, ব্যাটারিতে চলে, কোলে রেখে (lap) ব্যবহার করা যায় বলে এমন নাম।</p>`, true),
  part("DOS-এর ইন্টারনাল ও এক্সটারনাল কমান্ড", "৫", dosCmd, true),
  OR,
  split("প্রশ্নে নম্বর ভাগ করা নেই। তিনটি অংশে ৫ করে ধরে লিখুন।"),
  part("উপাত্ত প্রক্রিয়াকরণের প্রধান ধাপ", "৫", procSteps, true),
  part("মাল্টিপ্রোগ্রামিং ও মাল্টিপ্রসেসিং অপারেটিং সিস্টেমের পার্থক্য", "৫", multiDiff, true),
  part("বর্ণভিত্তিক ও চিত্রভিত্তিক অপারেটিং সিস্টেমের সুবিধা ও অসুবিধা", "৫", cuiPro, true)
].join("\n"), side([["কমান্ড চেনা", "অভ্যন্তরীণ: DIR, COPY, DEL, CLS (COMMAND.COM-এর ভেতরে)। বাহ্যিক: FORMAT, DISKCOPY, XCOPY (ডিস্কে আলাদা ফাইল)।"],
  ["বিস্তারিত নোট", `<a href="#/note/computer-basics/mem">অধ্যায় ১ · স্মৃতি</a>, <a href="#/note/computer-basics/type">প্রকারভেদ</a>, <a href="#/note/operating-system/dos-cmd">অধ্যায় ৫ · DOS কমান্ড</a>, <a href="#/note/operating-system/multi-diff">মাল্টিপ্রোগ্রামিং ও মাল্টিপ্রসেসিং</a>, <a href="#/note/data-representation/proc">অধ্যায় ৩ · প্রক্রিয়াকরণ</a>`]], ["কম্পিউটার বেসিক", "অপারেটিং সিস্টেম", "উপাত্ত উপস্থাপন"]));

A[4] = answer([
  split("প্রশ্নে নম্বর ভাগ করা নেই। সত্যক সারণিতে ২, NOR-এ ৪, বর্তনীতে ৪ আর কোড ও ASCII-তে ৫ ধরে লিখুন।"),
  part("সত্যক সারণি কী", "২", [inc("এই অংশটি ৫ম পরীক্ষার ৩ নম্বর প্রশ্নের (অথবা) উত্তর থেকে।"), include("5-school", 3, 3)].join("\n"), true),
  part("NOR গেইটের সত্যক সারণি ও মৌলিক গেইটে বাস্তবায়ন", "৪", [inc("একই প্রশ্ন ৮ম, ৬ষ্ঠ ও ৫ম পরীক্ষায় এসেছে।"), include("8-school", 3, 2)].join("\n"), true),
  part(`${ov(`A + ${ov("A")}${ov("B")}`)}·AB + C সমীকরণের বর্তনী`, "৪", circ4, true),
  part("কোড কী; ASCII কোড বিস্তারিত", "৫", [inc("কোডের সংজ্ঞা ১৮তম পরীক্ষার ৭ নম্বর প্রশ্নের উত্তর থেকে।"), include("18-school", 7, 1), `    <h4 class="sub-h"><span>ASCII</span><span>American Standard Code for Information Interchange</span></h4>`, ascii].join("\n"), true),
  OR,
  split("প্রশ্নে নম্বর ভাগ করা নেই। তিনটি অংশে ৫ করে ধরে লিখুন।"),
  part("Y = AB + BC + CA-এর সত্যক সারণি", "৫", `    <p class="prose">তিন চলকে ২<sup>৩</sup> = ৮টি সারি; প্রতিটি গুণফল পদের কলাম আগে, তারপর তিনটির যোগ (OR)।</p>
    <table class="truth"><thead><tr><th>A</th><th>B</th><th>C</th><th>AB</th><th>BC</th><th>CA</th><th>Y</th></tr></thead><tbody>${majRows}</tbody></table>
    <p class="prose">তিনটি ইনপুটের অন্তত দুটি ১ হলেই Y = 1; তাই একে সংখ্যাগরিষ্ঠ (majority) ফাংশন বলে।</p>`, true),
  part(`সত্যক সারণির সাহায্যে প্রমাণ: ${ov(`A + B + ${ov("C")}`)}·${ov("B")}C = ${ov("A")}${ov("B")}C`, "৫", `    <p class="prose">ছাপায় বন্ধনী মেলে না; বার পুরো A + B + ${ov("C")}-এর ওপর ধরে বামপক্ষ ${ov(`A + B + ${ov("C")}`)}·${ov("B")}C পড়া হলো। প্রতিটি সারিতে “বাম” কলাম আর ডানপক্ষের কলাম সমান:</p>
${proofTable}
    <p class="prose">আটটি সারিতেই দুই পক্ষ সমান, তাই বাম পক্ষ = ডান পক্ষ, প্রমাণিত।</p>`, true),
  part("তিনটি সংখ্যার মধ্যে ছোট সংখ্যা নির্ণয়ের ফ্লোচার্ট", "৫", [inc("একই প্রশ্ন ১৩তম ও ১১তম পরীক্ষায় এসেছে।"), include("13-school", 5, 5)].join("\n"), true)
].join("\n"), side([["বন্ধনী মেলে না", "ছাপা সমীকরণের বন্ধনী না মিললে যে পড়াটি নিয়েছেন তা শুরুতে লিখুন, তারপর সেভাবেই বর্তনী বা সারণি।"],
  ["বিস্তারিত নোট", `<a href="#/note/logic-gates/nor">অধ্যায় ৪ · NOR</a>, <a href="#/note/logic-gates/pp4-4">এই বর্তনী</a>, <a href="#/note/logic-gates/pp5-3">এই প্রমাণ</a>, <a href="#/note/data-representation/ascii">অধ্যায় ৩ · ASCII</a>, <a href="#/note/algorithm-flowchart/p-min3">অধ্যায় ৬ · তিনটির মধ্যে ছোট</a>`]], ["লজিক সার্কিট ও লজিক গেট", "উপাত্ত উপস্থাপন", "অ্যালগরিদম ও ফ্লোচার্ট"]));

A[5] = answer([
  split("প্রশ্নে নম্বর ভাগ করা নেই। তিনটি অংশে ৫ করে ধরে লিখুন।"),
  part("১ হতে ১০০ পর্যন্ত বিজোড় সংখ্যার যোগফলের অ্যালগরিদম", "৫", `    <ol class="algo">
      <li>শুরু।</li>
      <li>Sum = 0, i = 1 ধরি।</li>
      <li>i ≤ 100 না হলে ধাপ ৬-এ যাই।</li>
      <li>Sum = Sum + i।</li>
      <li>i = i + 2 করে ধাপ ৩-এ ফিরে যাই।</li>
      <li>Sum প্রিন্ট করি।</li>
      <li>শেষ।</li>
    </ol>
    <table class="truth trace"><thead><tr><th>i</th><th>Sum = Sum + i</th></tr></thead><tbody>${S5.rows}</tbody></table>
    <p class="final"><b>ফল</b>১ + ৩ + ৫ + … + ৯৯ = ${bn(S5.Sum)}</p>
    <p class="prose">যাচাই: ১০০-এর মধ্যে বিজোড় সংখ্যা ${bn(S5.trace.length)}টি; প্রথম n টি বিজোড় সংখ্যার যোগফল n², তাই ${bn(S5.trace.length)}² = ${bn(S5.Sum)}।</p>`, true),
  part("ফ্লোচার্ট কী; অঙ্কনের নিয়মাবলি", "৫", `    <p class="defn"><b>ফ্লোচার্ট</b>কোনো সমস্যা সমাধানের ধাপগুলো নির্দিষ্ট প্রতীক ও তীরচিহ্ন দিয়ে আঁকা চিত্ররূপকে ফ্লোচার্ট বলে; এটি অ্যালগরিদমের ছবি।</p>
${flowRules}`, true),
  part("ত্রিভুজের ক্ষেত্রফল নির্ণয়ের ফ্লোচার্ট", "৫", tri, true),
  OR,
  split("প্রশ্নে নম্বর ভাগ করা নেই। প্যাকেজ প্রোগ্রামে ৩, সংজ্ঞায় ২, নিয়ন্ত্রণ প্রোগ্রামে ৫ আর পার্থক্যে ৫ ধরে লিখুন।"),
  part("প্যাকেজ প্রোগ্রাম কী", "৩", `    <p class="defn"><b>প্যাকেজ প্রোগ্রাম</b>অনেক ব্যবহারকারীর একই ধরনের কাজের জন্য আগে থেকে তৈরি করে বাজারে বিক্রি বা বিতরণ করা অ্যাপ্লিকেশন সফটওয়্যারকে প্যাকেজ প্রোগ্রাম বলে। যেমন MS Word (লেখা), MS Excel (হিসাব), PowerPoint (উপস্থাপনা), Photoshop (ছবি সম্পাদনা)।</p>
    <ul class="pts">
      <li>তৈরি অবস্থায় পাওয়া যায়; কিনে বা নামিয়ে সঙ্গে সঙ্গে ব্যবহার করা যায়।</li>
      <li>ব্যবহার সহজ; সঙ্গে নির্দেশিকা (Help) থাকে।</li>
      <li>অনেকের জন্য তৈরি বলে কাস্টমাইজড সফটওয়্যারের চেয়ে দাম কম, তবে নির্দিষ্ট প্রতিষ্ঠানের সব চাহিদা মেটায় না।</li>
    </ul>`, true),
  part("অপারেটিং সিস্টেম কী", "২", osDef, true),
  part("অপারেটিং সিস্টেমের নিয়ন্ত্রণ প্রোগ্রামসমূহ", "৫", [inc("এই অংশটি ৬ষ্ঠ পরীক্ষার ৩ নম্বর প্রশ্নের উত্তর থেকে; ছকের বাঁ দিকের তিনটি নিয়ন্ত্রণ প্রোগ্রাম।"), include("6-school", 3, 2)].join("\n"), true),
  part("উপাত্ত ও তথ্যের পার্থক্য", "৫", [inc("একই প্রশ্ন ১৬তম পরীক্ষায় এসেছে (প্রশ্ন ৬)।"), include("16-school", 6, 1)].join("\n"), true)
].join("\n"), side([["বিজোড় মানে ৯৯ পর্যন্ত", "১০০ জোড়, তাই শেষ বিজোড় পদ ৯৯; শর্ত i ≤ 100 বা i ≤ 99 দুটিতেই ফল ২৫০০।"],
  ["বিস্তারিত নোট", `<a href="#/note/algorithm-flowchart/p-odd">অধ্যায় ৬ · বিজোড় ধারা</a>, <a href="#/note/algorithm-flowchart/flow-rules">ফ্লোচার্টের নিয়ম</a>, <a href="#/note/algorithm-flowchart/p-tri">ত্রিভুজ</a>, <a href="#/note/operating-system/org-ctrl">অধ্যায় ৫ · নিয়ন্ত্রণ প্রোগ্রাম</a>`]], ["অ্যালগরিদম ও ফ্লোচার্ট", "অপারেটিং সিস্টেম", "কম্পিউটার বেসিক", "উপাত্ত উপস্থাপন"]));
ok(seriesSum({ first: 1, step: 2, last: 99, id: "x", caption: "" }).Sum === 2500, "i ≤ 99 gives the same");

A[6] = answer([
  part("ইন্টারনেট কী; সুফল ও কুফল", "৫", [inc("একই প্রশ্ন ১০ম, ৮ম ও ৬ষ্ঠ পরীক্ষায় এসেছে।"), include("10-school", 9, 1)].join("\n")),
  OR,
  part("গাণিতিক/যুক্তিমূলক অংশের সংগঠন চিত্রসহ", "৫", [inc("একই প্রশ্ন ১৮তম (প্রশ্ন ৩) ও ১২তম পরীক্ষায় এসেছে।"), include("18-school", 3, 1), include("18-school", 3, 2)].join("\n"))
].join("\n"), side([["বিস্তারিত নোট", `<a href="#/note/internet/use-pro">অধ্যায় ৭ · সুফল-কুফল</a>, <a href="#/note/computer-basics/org">অধ্যায় ১ · ALU</a>`]], ["ইন্টারনেট", "কম্পিউটার বেসিক"]));

A[7] = answer([
  part("ধনাত্মক পূর্ণসংখ্যার ফ্যাক্টরিয়াল নির্ণয়ের অ্যালগরিদম", "৫", `${factAlgo}
    <h4 class="sub-h"><span>উদাহরণ</span><span>N = 5</span></h4>
    <table class="truth trace"><thead><tr><th>i</th><th>F = F × i</th></tr></thead><tbody>${factTrace.map(([i, F]) => `<tr><td>${i}</td><td>${F}</td></tr>`).join("")}<tr><td>6</td><td>i ≤ 5 মিথ্যা, থামি</td></tr></tbody></table>
    <p class="final"><b>ফল</b>৫! = ১ × ২ × ৩ × ৪ × ৫ = ${bn(120)}</p>`),
  OR,
  part(`${sub("37.25", 10)} থেকে বাইনারি`, "৫", n47)
].join("\n"), side([["শুরুর মান ১", "গুণফলের লুপে F = 1 দিয়ে শুরু করুন; ০ দিয়ে শুরু করলে ফল সবসময় ০।"],
  ["বিস্তারিত নোট", `<a href="#/note/algorithm-flowchart/p-fact">অধ্যায় ৬ · ফ্যাক্টরিয়াল</a>, <a href="#/note/number-system/convert">অধ্যায় ২ · দশমিক থেকে রূপান্তর</a>`]], ["অ্যালগরিদম ও ফ্লোচার্ট", "সংখ্যা পদ্ধতি"]));

A[8] = answer([
  part("বুলেটিন বোর্ড; ইন্টারনেটের বুলেটিন বোর্ড", "৫", [inc("একই প্রশ্ন ৬ষ্ঠ পরীক্ষায় এসেছে (প্রশ্ন ৬)।"), include("6-school", 6, 1)].join("\n")),
  OR,
  part("অ্যানালগ ও ডিজিটাল কম্পিউটারের পাঁচটি পার্থক্য", "৫", [inc("একই প্রশ্ন ১৭তম পরীক্ষায় এসেছে (প্রশ্ন ১, অথবা খ)।"), include("17-school", 1, 4)].join("\n"))
].join("\n"), side([["বিস্তারিত নোট", `<a href="#/note/internet/bbs">অধ্যায় ৭ · বুলেটিন বোর্ড</a>, <a href="#/note/computer-basics/type">অধ্যায় ১ · অ্যানালগ ও ডিজিটাল</a>`]], ["ইন্টারনেট", "কম্পিউটার বেসিক"]));

A[9] = answer([
  part("UNIVAC কী", "২", [inc("এই অংশটি ৫ম পরীক্ষার ৭ নম্বর প্রশ্নের (অথবা) উত্তর থেকে।"), include("5-school", 7, 3)].join("\n"), true),
  part("প্রথম প্রোগ্রাম রচয়িতা", "১", `    <p class="prose"><b>অ্যাডা লাভলেস</b> (অ্যাডা অগাস্টা বায়রন, কবি লর্ড বায়রনের মেয়ে)। ১৮৪৩ সালে তিনি চার্লস ব্যাবেজের অ্যানালিটিক্যাল ইঞ্জিনের জন্য বার্নুলি সংখ্যা হিসাবের ধাপ লেখেন; একেই প্রথম কম্পিউটার প্রোগ্রাম ধরা হয়।</p>`, true),
  part("মেকানিক্যাল কম্পিউটারের অসুবিধা", "২", mechanical, true),
  OR,
  part("উপাত্ত প্রক্রিয়াকরণে মানুষ ও কম্পিউটারের তুলনা", "৫", humanVsPc)
].join("\n"), side([["বিস্তারিত নোট", `<a href="#/note/computer-basics/hist">অধ্যায় ১ · ইতিহাস</a>, <a href="#/note/data-representation/proc">অধ্যায় ৩ · উপাত্ত প্রক্রিয়াকরণ</a>`]], ["কম্পিউটার বেসিক", "উপাত্ত উপস্থাপন"]));

A[10] = answer([
  part("ইনপুট ও আউটপুট ডিভাইস কী", "২", [inc("এই অংশটি ৫ম পরীক্ষার ৫ নম্বর প্রশ্নের (অথবা) উত্তর থেকে।"), include("5-school", 5, 6)].join("\n"), true),
  part("OMR ও OCR-এর তিনটি পার্থক্য", "৩", [inc("ছকটি ১৪তম পরীক্ষার ৮ নম্বর প্রশ্নের উত্তর থেকে; যেকোনো তিনটি সারি লিখলেই চলে।"), omrOcr].join("\n"), true),
  OR,
  part("প্রিন্টার কী", "১", [inc("এই অংশটি ৬ষ্ঠ পরীক্ষার ৭ নম্বর প্রশ্নের উত্তর থেকে।"), include("6-school", 7, 2)].join("\n"), true),
  part("লেজার প্রিন্টারের মূলনীতি", "৪", [inc("একই প্রশ্ন ১৫তম ও ৭ম পরীক্ষায় এসেছে।"), include("15-school", 2, 4)].join("\n"), true)
].join("\n"), side([["বিস্তারিত নোট", `<a href="#/note/computer-basics/io">অধ্যায় ১ · ইনপুট-আউটপুট, OMR ও OCR, প্রিন্টার</a>`]], ["কম্পিউটার বেসিক"]));

writeAnswers("4-school", A, "৪র্থ শিক্ষক নিবন্ধন (২০০৭)", "build-4-school.mjs");
