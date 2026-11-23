// Builds answers/3-school.js: model answers for the ৩য় (২০০৬) paper (subject code ১২২), every question with its অথবা.
//   node tools/answers/build-3-school.mjs
// Sources, so nothing is written twice (see lib.mjs): worked blocks from the chapter notes, earlier answers reused
// with data-include, and new writing below. Every number written here is computed or checked against a computation.
import { notes, ok, bn, part, include, inc, OR, side, answer, writeAnswers } from "./lib.mjs";

const { fromH4, fromH3, fromSection } = notes("wa3");
const ov = s => `<span class="ov">${s}</span>`;
const sub = (n, b) => `(${n})<sub>${b}</sub>`;
const split = s => `  <p class="split-note">${s}</p>`;
const drop = (s, piece, to = "") => { ok(s.includes(piece), piece.slice(0, 60)); return s.replace(piece, to); };
const val = (s, b) => { const [w, f = ""] = s.split("."); return parseInt(w + f, b) / b ** f.length; };
const N = x => 1 - x;
const tt = f => [...Array(8).keys()].map(k => +!!f(k >> 2 & 1, k >> 1 & 1, k & 1)).join("");

// ---------------- lifted blocks, checked ----------------
// প্রশ্ন ২: (129.75)10
const n32 = drop(fromH4("t-note", "n3-2"), `<p class="prose">পজিশনাল ও নন-পজিশনাল পদ্ধতির আলোচনা <a href="#/note/number-system/idea">অংশ ১</a>-এ। অঙ্কটি:</p>`,
  `<p class="prose">পূর্ণ অংশ ২ দিয়ে বারবার ভাগ, ভগ্নাংশ ২ দিয়ে বারবার গুণ; অক্টাল ও হেক্সার পূর্ণ অংশ বাইনারির দল থেকে, ভগ্নাংশ ৮ ও ১৬ দিয়ে গুণ করে।</p>`);
ok(val("129.75", 10) === val("10000001.11", 2) && val("129.75", 10) === val("201.6", 8) && val("129.75", 10) === val("81.C", 16), "129.75");
ok(n32.includes("= (10000001.11)<sub>2</sub> = (201.6)<sub>8</sub> = (81.C)<sub>16</sub>"), "n3-2 result");

// প্রশ্ন ২ অথবা: FF; the bases and digits
const n32o = fromH4("t-note", "n3-2o"), cut32o = n32o.indexOf(`<p class="prose">দশমিক বাদে অন্য পদ্ধতিগুলোর ভিত্তি ও মৌলিক চিহ্ন:</p>`);
ok(cut32o > 0, "split n3-2o");
const ff = n32o.slice(0, cut32o).trimEnd(), bases = "    " + n32o.slice(cut32o).trim();
ok(val("FF", 16) === 255 && val("FE", 16) === 254 && val("100", 16) === 256 && (255).toString(8) === "377", "FF");
ok(ff.includes("(FF)<sub>16</sub> = (255)<sub>10</sub> = (11111111)<sub>2</sub> = (377)<sub>8</sub>"), "n3-2o result");

// প্রশ্ন ৩: sum and product
const n33 = drop(fromH4("t-note", "n3-3"), ` কম্পিউটারের ভেতরে কেন বাইনারি, তা আছে <a href="#/note/number-system/idea">অংশ ১ · ১.৩</a>-এ; সফটওয়্যারের অংশ <a href="#/note/computer-basics/sw">অধ্যায় ১</a>-এ।`);
ok(val("1011.01", 2) + 7 === val("10010.01", 2) && val("1011.01", 2) * 7 === val("1001110.11", 2), "1011.01 and 111");
ok(n33.includes("= (10010.01)<sub>2</sub>") && n33.includes("= (1001110.11)<sub>2</sub>"), "n3-3 results");

// প্রশ্ন ৩ অথবা: difference and quotient; “everything by addition”
const n33o = fromH4("t-note", "n3-3o"), cutAdd = n33o.indexOf(`<p class="prose"><b>“কম্পিউটার যোগের মাধ্যমে সকল কাজ সম্পাদন করতে পারে”:</b>`);
ok(cutAdd > 0, "split n3-3o");
const subDiv = n33o.slice(0, cutAdd).trimEnd();
ok(val("11101.01", 2) - 5 === val("11000.01", 2) && Math.floor(29.25 / 5 * 256) === parseInt("10111011001", 2), "11101.01 and 101");
ok(subDiv.includes("= (11000.01)<sub>2</sub>") && subDiv.includes("≈ (101.11011001)<sub>2</sub>"), "n3-3o results");
const byAdd = "    " + drop(n33o.slice(cutAdd).trim(), ` পরিপূরকে বিয়োগ আছে <a href="#/note/number-system/complement">অংশ ৭</a>-এ। অন্য ইলেকট্রনিক যন্ত্রের সঙ্গে পার্থক্য <a href="#/note/computer-basics/def">অধ্যায় ১</a>-এ।`)
  .replace("(ওপরের গুণের মতো)", "(প্রশ্ন ৩-এর গুণের মতো)");
ok(!byAdd.includes("ওপরের"), "by-addition paragraph");
// 9 − 5 by 2's complement in 8 bits, to show subtraction by addition
const c8 = n => ((~n + 1) & 255).toString(2).padStart(8, "0"), b8 = n => n.toString(2).padStart(8, "0");
ok(c8(5) === "11111011" && ((9 + parseInt(c8(5), 2)) & 255) === 4, "9 − 5 by complement");

// প্রশ্ন ৪: the circuit; the gates
const circ4 = fromH4("t-note-ch04", "pp3-4");
ok(tt((a, b, c) => (a | b) & N(c) | N(a) & c) === tt((a, b, c) => a & N(c) | b & N(c) | N(a) & c), "pp3-4 expansion");
const gateNand = fromH3("t-note-ch04", "NAND গেট"), gateNor = fromH3("t-note-ch04", "NOR গেট"), gateXor = fromH3("t-note-ch04", "XOR ও XNOR গেট"), gateTable = fromH3("t-note-ch04", "সাতটি গেট এক ছকে");
const xor3 = [...Array(8).keys()].map(k => [k >> 2 & 1, k >> 1 & 1, k & 1]);
ok(xor3.filter(([a, b, c]) => a ^ b ^ c).map(r => r.join("")).join() === "001,010,100,111", "3-input XOR ones");

// pieces of the chapter notes
const minN = fromH4("t-note-ch06", "p-minN"), algoProps = fromSection("t-note-ch06", "algo-props"), varTypes = fromSection("t-note-ch06", "var-types");
const ecom = fromSection("t-note-ch07", "ecom"), webRole = fromSection("t-note-ch07", "web-role");

// ---------------- the answers ----------------
const A = {};

A[1] = answer([
  split("প্রশ্নে নম্বর ভাগ করা নেই। সীমাবদ্ধতায় ৪, প্রজন্মে ৬ আর পার্থক্যে ৫ ধরে লিখুন।"),
  part("কম্পিউটার ব্যবহারের সীমাবদ্ধতা", "৪", `    <ul class="pts">
      <li><b>নিজস্ব বুদ্ধি নেই:</b> নিজে চিন্তা, বিচার বা নতুন সিদ্ধান্ত নিতে পারে না; প্রোগ্রামে যা বলা আছে শুধু তা-ই করে।</li>
      <li><b>প্রোগ্রাম ছাড়া অচল:</b> প্রতিটি কাজের জন্য আগে থেকে লেখা প্রোগ্রাম লাগে।</li>
      <li><b>ভুল ইনপুটে ভুল ফল:</b> ভুল উপাত্ত দিলে ভুল ফল দেয় (Garbage In, Garbage Out); নিজে ভুল ধরতে পারে না।</li>
      <li><b>বিদ্যুৎনির্ভর:</b> বিদ্যুৎ ছাড়া চলে না; হঠাৎ বিদ্যুৎ গেলে না-রাখা কাজ হারায়।</li>
      <li><b>অনুভূতি ও সাধারণ জ্ঞান নেই:</b> মানুষের আবেগ, নৈতিকতা বা পরিস্থিতি বোঝে না।</li>
      <li><b>ঝুঁকি:</b> ভাইরাস, হ্যাকিং ও যন্ত্র নষ্ট হলে তথ্য হারানোর ভয়; দীর্ঘ ব্যবহারে চোখ ও শরীরের ক্ষতি।</li>
    </ul>`, true),
  part("প্রতিটি প্রজন্মের একটি করে প্রধান বৈশিষ্ট্য, উদাহরণসহ", "৬", `    <table class="rt cmp">
      <thead><tr><th>প্রজন্ম</th><th>প্রধান বৈশিষ্ট্য</th><th>উদাহরণ</th></tr></thead>
      <tbody>
        <tr><td>প্রথম (১৯৪৬–১৯৫৯)</td><td>ভ্যাকুয়াম টিউব; বিশাল আকার, প্রচুর তাপ</td><td>ENIAC, UNIVAC-I</td></tr>
        <tr><td>দ্বিতীয় (১৯৫৯–১৯৬৫)</td><td>ট্রানজিস্টর; ছোট, কম তাপ, চৌম্বক কোর স্মৃতি</td><td>IBM 1401, IBM 1620</td></tr>
        <tr><td>তৃতীয় (১৯৬৫–১৯৭১)</td><td>ইন্টিগ্রেটেড সার্কিট (IC); অপারেটিং সিস্টেমের ব্যবহার</td><td>IBM System/360, PDP-11</td></tr>
        <tr><td>চতুর্থ (১৯৭১–বর্তমান)</td><td>মাইক্রোপ্রসেসর (VLSI); পার্সোনাল কম্পিউটারের যুগ</td><td>IBM PC, Apple Macintosh</td></tr>
        <tr><td>পঞ্চম (বর্তমান ও ভবিষ্যৎ)</td><td>কৃত্রিম বুদ্ধিমত্তা, সমান্তরাল প্রক্রিয়াকরণ</td><td>IBM Watson</td></tr>
      </tbody>
    </table>`, true),
  part("অ্যানালগ ও ডিজিটাল কম্পিউটারের পাঁচটি পার্থক্য", "৫", [inc("একই প্রশ্ন ১৭তম ও ৪র্থ পরীক্ষায় এসেছে।"), include("17-school", 1, 4)].join("\n"), true),
  OR,
  split("প্রশ্নে নম্বর ভাগ করা নেই। শ্রেণিবিন্যাসে ৮ আর সংগঠনে ৭ ধরে লিখুন।"),
  part("আকার ও আকৃতির ভিত্তিতে কম্পিউটারের শ্রেণিবিন্যাস", "৮", [inc("আকার ও ক্ষমতা অনুসারে ডিজিটাল কম্পিউটারের চার ভাগ; অংশটি ১৫তম পরীক্ষার ১ নম্বর প্রশ্নের উত্তর থেকে।"), include("15-school", 1, 1)].join("\n"), true),
  part("চিত্রসহ কম্পিউটার সংগঠন", "৭", [inc("একই প্রশ্ন ১৬তম, ১০ম, ৮ম, ৬ষ্ঠ ও ৫ম পরীক্ষায় এসেছে।"), include("16-school", 1, 1)].join("\n"), true)
].join("\n"), side([["প্রজন্মের ছক", "প্রতিটি প্রজন্মে একটি করে বৈশিষ্ট্য চাওয়া হলে মূল উপাদানটিই সবচেয়ে নিরাপদ উত্তর: টিউব, ট্রানজিস্টর, IC, মাইক্রোপ্রসেসর, কৃত্রিম বুদ্ধিমত্তা।"],
  ["বিস্তারিত নোট", `<a href="#/note/computer-basics/def">অধ্যায় ১ · সীমাবদ্ধতা</a>, <a href="#/note/computer-basics/gen">প্রজন্ম</a>, <a href="#/note/computer-basics/type">প্রকারভেদ</a>, <a href="#/note/computer-basics/org">সংগঠন</a>`]], ["কম্পিউটার বেসিক"]));

A[2] = answer([
  split("প্রশ্নে নম্বর ভাগ করা নেই। পজিশনাল ও নন-পজিশনালে ৭ আর রূপান্তরে ৮ ধরে লিখুন।"),
  part("উদাহরণসহ পজিশনাল ও নন-পজিশনাল পদ্ধতি", "৭", [inc("একই প্রশ্ন ১৭তম, ১৪তম ও ১১তম পরীক্ষায় এসেছে; অংশটি ১৪তম পরীক্ষার ৩ নম্বর প্রশ্নের (অথবা খ) উত্তর থেকে।"), include("14-school", 3, 4)].join("\n"), true),
  part(`${sub("129.75", 10)} থেকে বাইনারি, অক্টাল ও হেক্সাডেসিমাল`, "৮", n32, true),
  OR,
  split("প্রশ্নে নম্বর ভাগ করা নেই। FF-এ ৯ আর ভিত্তি ও চিহ্নে ৬ ধরে লিখুন।"),
  part("FF কোন ধরনের সংখ্যা; আগের ও পরের সংখ্যা; অন্য পদ্ধতিতে মান", "৯", ff, true),
  part("দশমিক ছাড়া অন্য পদ্ধতিগুলোর বেস ও মৌলিক চিহ্ন", "৬", bases, true)
].join("\n"), side([["FF-এর পরে", "হেক্সায় F + 1 = 10; তাই FF + 1 = 100, ঠিক যেমন দশমিকে ৯৯ + ১ = ১০০।"],
  ["বিস্তারিত নোট", `<a href="#/note/number-system/idea">অধ্যায় ২ · পজিশনাল ও নন-পজিশনাল</a>, <a href="#/note/number-system/convert">দশমিক থেকে রূপান্তর</a>, <a href="#/note/number-system/systems">চার পদ্ধতি</a>`]], ["সংখ্যা পদ্ধতি"]));

A[3] = answer([
  split("প্রশ্নে নম্বর ভাগ করা নেই। যোগ ও গুণে ৬, বাইনারির কারণে ৩, আর দুই সফটওয়্যারে ৩ করে ধরে লিখুন।"),
  part(`${sub("1011.01", 2)} ও ${sub("111", 2)}-এর যোগফল ও গুণফল`, "৬", n33, true),
  part("কম্পিউটারের অভ্যন্তরীণ কাজে কোন সংখ্যা পদ্ধতি এবং কেন", "৩", [`    <p class="prose">কম্পিউটারের ভেতরের সব কাজ হয় <b>বাইনারি</b> সংখ্যা পদ্ধতিতে। কারণগুলো:</p>`, inc("এই অংশটি ৭ম পরীক্ষার ২ নম্বর প্রশ্নের (অথবা) উত্তর থেকে।"), include("7-school", 2, 3)].join("\n"), true),
  part("কাস্টমাইজড সফটওয়্যার", "৩", `    <p class="defn"><b>কাস্টমাইজড সফটওয়্যার</b>কোনো নির্দিষ্ট প্রতিষ্ঠান বা ব্যবহারকারীর চাহিদা অনুযায়ী ফরমায়েশ দিয়ে আলাদাভাবে তৈরি করানো অ্যাপ্লিকেশন সফটওয়্যারকে কাস্টমাইজড সফটওয়্যার বলে।</p>
    <ul class="pts">
      <li>প্রতিষ্ঠানের নিজস্ব নিয়ম ও কাজের ধারা মেনে তৈরি হয়; বাজারে কিনতে পাওয়া যায় না।</li>
      <li>তৈরি করতে সময় ও খরচ বেশি, তবে প্রতিষ্ঠানের প্রয়োজন পুরো মেটায়।</li>
      <li><b>উদাহরণ:</b> ব্যাংকের হিসাব ব্যবস্থাপনা, প্রতিষ্ঠানের বেতন হিসাব, বোর্ডের পরীক্ষার ফল প্রকাশ, রেলের টিকিট বিক্রির সফটওয়্যার।</li>
    </ul>`, true),
  part("সমন্বিত প্যাকেজ সফটওয়্যার", "৩", `    <p class="defn"><b>সমন্বিত প্যাকেজ</b>কয়েকটি প্যাকেজ প্রোগ্রাম (ওয়ার্ড প্রসেসর, স্প্রেডশিট, ডেটাবেজ, প্রেজেন্টেশন) একসঙ্গে মিলিয়ে একটি প্যাকেজ হিসেবে দেওয়া হলে তাকে সমন্বিত (Integrated) প্যাকেজ সফটওয়্যার বলে।</p>
    <ul class="pts">
      <li>সব প্রোগ্রামের চেহারা ও মেনু প্রায় একই, তাই একটি শিখলে বাকিগুলো সহজ।</li>
      <li>এক প্রোগ্রামের উপাত্ত সহজে আরেকটিতে নেওয়া যায়; যেমন Excel-এর ছক Word-এর প্রতিবেদনে বা PowerPoint-এ।</li>
      <li>আলাদা আলাদা কেনার চেয়ে খরচ কম।</li>
      <li><b>উদাহরণ:</b> Microsoft Office (Word, Excel, PowerPoint, Access), LibreOffice, Google Workspace।</li>
    </ul>`, true),
  OR,
  split("প্রশ্নে নম্বর ভাগ করা নেই। বিয়োগ ও ভাগে ৭, যোগের যুক্তিতে ৫ আর পার্থক্যে ৩ ধরে লিখুন।"),
  part(`${sub("11101.01", 2)} ও ${sub("101", 2)}: বড়টি থেকে ছোটটির বিয়োগফল এবং ভাগফল`, "৭", subDiv, true),
  part("“কম্পিউটার যোগের মাধ্যমে সকল কাজ সম্পাদন করতে পারে”: যথার্থতা", "৫", `${byAdd}
    <p class="prose"><b>উদাহরণ, যোগ দিয়ে বিয়োগ:</b> ৯ − ৫ বের করতে ৮ বিটে ৫-এর ২-এর পরিপূরক ${c8(5)} নিয়ে ৯-এর (${b8(9)}) সঙ্গে যোগ করি: ${b8(9)} + ${c8(5)} = 1 ${b8(4)}; বাড়তি বাঁয়ের ১ বাদ দিলে ${b8(4)} = ৪।</p>`, true),
  part("কম্পিউটার ও অন্যান্য ইলেকট্রনিক যন্ত্রের পার্থক্য", "৩", `    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>কম্পিউটার</th><th>অন্যান্য ইলেকট্রনিক যন্ত্র (টিভি, রেডিও, ক্যালকুলেটর)</th></tr></thead>
      <tbody>
        <tr><td>কাজ</td><td>প্রোগ্রাম বদলে নানা ধরনের কাজ (বহুমুখী)</td><td>নির্দিষ্ট একটি বা কয়েকটি কাজ</td></tr>
        <tr><td>প্রোগ্রাম</td><td>নতুন প্রোগ্রাম লিখে বা বসিয়ে কাজ বদলানো যায়</td><td>কাজ তৈরির সময়ই স্থির করা</td></tr>
        <tr><td>স্মৃতি</td><td>বিপুল উপাত্ত ও প্রোগ্রাম রাখে</td><td>স্মৃতি থাকে না বা খুব সামান্য</td></tr>
        <tr><td>যৌক্তিক সিদ্ধান্ত</td><td>তুলনা করে শর্ত অনুযায়ী পথ বেছে নেয়</td><td>পারে না</td></tr>
        <tr><td>উপাত্ত প্রক্রিয়াকরণ</td><td>উপাত্ত নিয়ে প্রক্রিয়া করে নতুন তথ্য তৈরি করে</td><td>সংকেত গ্রহণ ও দেখানো বা শোনানো (টিভি, রেডিও)</td></tr>
      </tbody>
    </table>`, true)
].join("\n"), side([["গুণে বিন্দু", "বিন্দু বাদ দিয়ে গুণ করুন, শেষে দুই সংখ্যার মোট ভগ্নাংশ-ঘর গুনে বিন্দু বসান।"],
  ["বিস্তারিত নোট", `<a href="#/note/number-system/arith">অধ্যায় ২ · গাণিতিক কাজ</a>, <a href="#/note/number-system/complement">পরিপূরক</a>, <a href="#/note/number-system/idea">কেন বাইনারি</a>, <a href="#/note/computer-basics/sw">অধ্যায় ১ · সফটওয়্যার</a>`]], ["সংখ্যা পদ্ধতি", "কম্পিউটার বেসিক"]));

A[4] = answer([
  split("প্রশ্নে নম্বর ভাগ করা নেই। মৌলিক গেইটে ৫, যৌগিক গেইটে ৫ আর বাস্তবায়নে ৫ ধরে লিখুন।"),
  part("লজিক গেইট; মৌলিক গেইটের প্রতীক, সমীকরণ ও সত্যক সারণি", "৫", [inc("এই অংশটি ৫ম পরীক্ষার ৩ নম্বর প্রশ্নের উত্তর থেকে।"), include("5-school", 3, 1)].join("\n"), true),
  part("যৌগিক গেইট: NAND, NOR, XOR ও XNOR", "৫", `    <h4 class="sub-h"><span>১</span><span>NAND গেইট</span></h4>
${gateNand}
    <h4 class="sub-h"><span>২</span><span>NOR গেইট</span></h4>
${gateNor}
    <h4 class="sub-h"><span>৩</span><span>XOR ও XNOR গেইট</span></h4>
${gateXor}
    <h4 class="sub-h"><span>৪</span><span>সাতটি গেইট এক ছকে</span></h4>
${gateTable}`, true),
  part(`(A + B)${ov("C")} + ${ov("A")}C সমীকরণের লজিক গেইট দ্বারা বাস্তবায়ন`, "৫", circ4, true),
  OR,
  split("প্রশ্নে নম্বর ভাগ করা নেই। সার্বজনীন গেইটে ১০, সত্যক সারণির সংজ্ঞায় ২ আর তিন ইনপুটের X-OR-এ ৩ ধরে লিখুন।"),
  part("সার্বজনীন গেইট; NAND ও NOR গেইটের সার্বজনীনতার প্রমাণ", "১০", [inc("একই প্রশ্ন ১৪তম পরীক্ষায় এসেছে (প্রশ্ন ৪ ক)।"), include("14-school", 4, 1)].join("\n"), true),
  part("সত্যক সারণি কী", "২", [inc("এই অংশটি ৫ম পরীক্ষার ৩ নম্বর প্রশ্নের (অথবা) উত্তর থেকে।"), include("5-school", 3, 3)].join("\n"), true),
  part("তিন ইনপুট X-OR গেইটের সত্যক সারণি", "৩", `    <p class="prose">Y = A ⊕ B ⊕ C: আগে A ⊕ B, তারপর তার সঙ্গে C-এর X-OR। ইনপুটে বিজোড় সংখ্যক ১ থাকলে আউটপুট ১।</p>
    <table class="truth"><thead><tr><th>A</th><th>B</th><th>C</th><th>A⊕B</th><th>Y</th></tr></thead><tbody>${xor3.map(([a, b, c]) => `<tr><td>${a}</td><td>${b}</td><td>${c}</td><td>${a ^ b}</td><td>${a ^ b ^ c}</td></tr>`).join("")}</tbody></table>
    <p class="prose">Y = 1 হয় শুধু 001, 010, 100 ও 111 সারিতে; প্রতিটিতে ১-এর সংখ্যা বিজোড় (১ বা ৩)।</p>`, true)
].join("\n"), side([["সব গেইট এক ছকে", "“বিভিন্ন প্রকার” চাইলে সাতটি গেইটই দিন: মৌলিক তিনটি আর যৌগিক চারটি; প্রতিটিতে প্রতীক, সমীকরণ ও সারণি।"],
  ["বিস্তারিত নোট", `<a href="#/note/logic-gates/gates">অধ্যায় ৪ · মৌলিক গেট</a>, <a href="#/note/logic-gates/nor">যৌগিক গেট</a>, <a href="#/note/logic-gates/univ">সার্বজনীন গেট</a>, <a href="#/note/logic-gates/pp3-4">এই বর্তনী</a>`]], ["লজিক সার্কিট ও লজিক গেট"]));

A[5] = answer([
  split("প্রশ্নে নম্বর ভাগ করা নেই। কার্যাবলিতে ১০ আর পার্থক্যে ৫ ধরে লিখুন।"),
  part("অপারেটিং সিস্টেমের কার্যাবলি", "১০", [inc("এই অংশটি ৭ম পরীক্ষার ৩ নম্বর প্রশ্নের উত্তর থেকে।"), include("7-school", 3, 2)].join("\n"), true),
  part("বর্ণভিত্তিক ও চিত্রভিত্তিক অপারেটিং সিস্টেমের পাঁচটি পার্থক্য", "৫", [inc("একই প্রশ্ন ১৬তম পরীক্ষায় এসেছে (প্রশ্ন ৬, অথবা)।"), include("16-school", 6, 2)].join("\n"), true),
  OR,
  split("প্রশ্নে নম্বর ভাগ করা নেই। মাল্টিপ্রোগ্রামিংয়ে ৫, টাইম শেয়ারিংয়ে ৫ আর পার্থক্যে ৫ ধরে লিখুন।"),
  part("মাল্টিপ্রোগ্রামিং অপারেটিং সিস্টেম", "৫", [inc("এই অংশটি ৮ম পরীক্ষার ২ নম্বর প্রশ্নের (অথবা) উত্তর থেকে।"), include("8-school", 2, 4)].join("\n"), true),
  part("টাইম শেয়ারিং অপারেটিং সিস্টেম", "৫", [inc("একই প্রশ্ন ১৬তম পরীক্ষায় এসেছে (প্রশ্ন ৩, অথবা ক)।"), include("16-school", 3, 3)].join("\n"), true),
  part("অ্যালগরিদম ও ফ্লোচার্টের পার্থক্য", "৫", [inc("একই প্রশ্ন ১৩তম, ১১তম, ৮ম ও ৫ম পরীক্ষায় এসেছে।"), include("13-school", 5, 4)].join("\n"), true)
].join("\n"), side([["দুটি আলাদা ধারণা", "মাল্টিপ্রোগ্রামিং: একটি অপেক্ষায় গেলে আরেকটি চলে, লক্ষ্য CPU ব্যস্ত রাখা। টাইম শেয়ারিং: প্রত্যেকে পালা করে ছোট সময় পায়, লক্ষ্য দ্রুত সাড়া।"],
  ["বিস্তারিত নোট", `<a href="#/note/operating-system/os-func">অধ্যায় ৫ · কার্যাবলি</a>, <a href="#/note/operating-system/multiprog">মাল্টিপ্রোগ্রামিং</a>, <a href="#/note/operating-system/timeshare">টাইম শেয়ারিং</a>, <a href="#/note/algorithm-flowchart/diff">অধ্যায় ৬ · পার্থক্য</a>`]], ["অপারেটিং সিস্টেম", "অ্যালগরিদম ও ফ্লোচার্ট"]));

A[6] = answer([
  part("N সংখ্যার মধ্যে ছোট সংখ্যা বের করার ফ্লোচার্ট", "৫", minN),
  OR,
  part("তিনটি সংখ্যার মধ্যে ছোট সংখ্যা বের করার ফ্লোচার্ট", "৫", [inc("একই প্রশ্ন ১৩তম, ১১তম ও ৪র্থ পরীক্ষায় এসেছে।"), include("13-school", 5, 5)].join("\n"))
].join("\n"), side([["লুপে তুলনা", "N টি সংখ্যায় প্রথমটিকে ছোট ধরে বাকিগুলোর সঙ্গে একে একে তুলনা করুন; ছোট পেলেই বদলে দিন।"],
  ["বিস্তারিত নোট", `<a href="#/note/algorithm-flowchart/p-minN">অধ্যায় ৬ · N টির মধ্যে ছোট</a>, <a href="#/note/algorithm-flowchart/p-min3">তিনটির মধ্যে ছোট</a>`]], ["অ্যালগরিদম ও ফ্লোচার্ট"]));

A[7] = answer([
  part("উপাত্ত ও তথ্যের পাঁচটি পার্থক্য", "৫", [inc("একই প্রশ্ন ১৬তম পরীক্ষায় এসেছে (প্রশ্ন ৬)।"), include("16-school", 6, 1)].join("\n")),
  OR,
  part("উদাহরণসহ BCD, EBCDIC ও ASCII কোড", "৫", [inc("একই প্রশ্ন ১৩তম পরীক্ষায় এসেছে (প্রশ্ন ১০, অথবা)।"), include("13-school", 10, 2)].join("\n"))
].join("\n"), side([["বিস্তারিত নোট", `<a href="#/note/data-representation/data">অধ্যায় ৩ · উপাত্ত ও তথ্য</a>, <a href="#/note/data-representation/code">কোড</a>`]], ["উপাত্ত উপস্থাপন"]));

A[8] = answer([
  part("উত্তম অ্যালগরিদমের বৈশিষ্ট্য", "৫", algoProps),
  OR,
  part("চলক কী", "২", [inc("এই অংশটি ৯ম পরীক্ষার ৯ নম্বর প্রশ্নের উত্তর থেকে।"), include("9-school", 9, 1)].join("\n"), true),
  part("উদাহরণসহ চলকের প্রকারভেদ", "৩", varTypes, true)
].join("\n"), side([["পাঁচটি শর্ত", "সসীমতা, সুনির্দিষ্টতা, ইনপুট, আউটপুট, কার্যকারিতা; উত্তম হতে আরও লাগে সহজবোধ্যতা, সাধারণতা ও দক্ষতা।"],
  ["বিস্তারিত নোট", `<a href="#/note/algorithm-flowchart/algo-props">অধ্যায় ৬ · অ্যালগরিদমের বৈশিষ্ট্য</a>, <a href="#/note/algorithm-flowchart/var-types">চলকের প্রকারভেদ</a>`]], ["অ্যালগরিদম ও ফ্লোচার্ট"]));

A[9] = answer([
  part("ইন্টারনেট কী; সুফল ও কুফল", "৫", [inc("একই প্রশ্ন ১০ম, ৮ম, ৬ষ্ঠ ও ৪র্থ পরীক্ষায় এসেছে।"), include("10-school", 9, 1)].join("\n")),
  OR,
  part("ই-মেইল", "৩", [inc("এই অংশটি ১৭তম পরীক্ষার ৮ নম্বর প্রশ্নের উত্তর থেকে।"), include("17-school", 8, 1)].join("\n"), true),
  part("ই-কমার্স", "২", ecom, true)
].join("\n"), side([["বিস্তারিত নোট", `<a href="#/note/internet/use-pro">অধ্যায় ৭ · সুফল-কুফল</a>, <a href="#/note/internet/mail">ই-মেইল</a>, <a href="#/note/internet/ecom">ই-কমার্স</a>`]], ["ইন্টারনেট"]));

A[10] = answer([
  part("শিক্ষা ও ব্যবসায় ওয়ার্ল্ড ওয়াইড ওয়েবের ভূমিকা", "৫", webRole),
  OR,
  part("সংরক্ষিত প্রোগ্রাম নির্বাহই দ্রুত গতির মূল কারণ", "৫", [inc("একই প্রশ্ন ৯ম পরীক্ষায় এসেছে (প্রশ্ন ২, অথবা)।"), include("9-school", 2, 7)].join("\n"))
].join("\n"), side([["উদাহরণ দিন", "শিক্ষায় অনলাইন ক্লাস ও ফল প্রকাশ, ব্যবসায় ই-কমার্স ও অনলাইন বিজ্ঞাপন: প্রতিটি দাবির পাশে একটি চেনা উদাহরণ।"],
  ["বিস্তারিত নোট", `<a href="#/note/internet/web-role">অধ্যায় ৭ · WWW-এর ভূমিকা</a>, <a href="#/note/computer-basics/def">অধ্যায় ১ · সংরক্ষিত প্রোগ্রাম</a>`]], ["ইন্টারনেট", "কম্পিউটার বেসিক"]));

writeAnswers("3-school", A, "৩য় শিক্ষক নিবন্ধন (২০০৬)", "build-3-school.mjs");
