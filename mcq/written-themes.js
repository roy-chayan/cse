/* Themes for the "বারবার আসা লিখিত প্রশ্ন" page (#/repeat). Every printed written question (main, অথবা, each part)
   is split into its separate asks ("কম্পিউটার কী? চিত্রসহ সংগঠন আলোচনা করুন।" is two). Each ask goes to the FIRST
   theme below whose test matches it, so specific themes come before general ones; an ask that matches nothing joins
   the theme of the ask before it in the same question (“এর কাজসমূহ লিখুন।”). Text is compared after removing tags
   and NFC-normalising. One sentence that joins two topics after a verb ("… লিখুন এবং …") becomes two asks when its
   halves belong to different chapters, or the second half is a worked problem (p-…) and the first is not; within
   one chapter the second half is otherwise nearly always the same task ("… লিখুন এবং ফ্লোচার্ট অঙ্কন করুন"). tools/check-site.mjs lists any ask that ends up in no theme.
   ch: the chapter, note: where the topic is taught. Titles are what a student would call the topic.
   window.ICT_REPEAT.group(written) does all of this for the page and for the checker. */
(function () {
  const re = (...words) => { const r = new RegExp(words.join("|").normalize("NFC")); return t => r.test(t); };
  const all = (...tests) => t => tests.every(f => f(t));
  const not = f => t => !f(t);
  const ascii = t => t.replace(/[০-৯]/g, c => "০১২৩৪৫৬৭৮৯".indexOf(c));
  const binaryOnly = t => /\)\s*2(?!\d)/.test(ascii(t)) && !/\)\s*(8|10|16)(?!\d)/.test(ascii(t));   // every number given in base 2
  const T = (id, ch, title, note, test) => ({ id, ch, title, note, test });

  const THEMES = [
    // ---- specific asks that would otherwise fall into broader themes ----
    T("fullform", "ch01", "পূর্ণরূপ", "#/note/computer-basics/hist", re("পূর্ণরূপ", "পূর্ণনাম")),
    T("bbs", "ch07", "ইন্টারনেটের বুলেটিন বোর্ড", "#/note/internet/bbs", re("বুলেটিন")),
    T("data-info", "ch03", "উপাত্ত ও তথ্য", "#/note/data-representation/data", re("উপাত্ত (ও|এবং) তথ্য", "তথ্য (ও|এবং) উপাত্ত", "ডেটা ও ইনফরমেশন")),
    T("human", "ch01", "মানুষ ও কম্পিউটারের তুলনা", "#/note/computer-basics/def", re("মানুষ (ও|এবং) কম্পিউটার", "মানুষের মধ্যে অনুপস্থিত")),
    T("algo-flow", "ch06", "অ্যালগরিদম ও ফ্লোচার্টের পার্থক্য", "#/note/algorithm-flowchart/diff", re("অ্যালগরিদম (ও|এবং) ফ্লোচার্টের (মধ্যে )?পার্থক্য", "ফ্লোচার্ট (ও|এবং) অ্যালগরিদমের (মধ্যে )?পার্থক্য")),
    T("bcd-bin", "ch03", "BCD কোড ও বাইনারির পার্থক্য", "#/note/data-representation/code", all(re("BCD", "বিসিডি"), re("পার্থক্য", "তুলনা"))),
    T("omr", "ch01", "OMR, OCR ও MICR", "#/note/computer-basics/io", re("OMR", "OCR", "MICR")),
    T("complement", "ch02", "২-এর পরিপূরক ও যোগ দিয়ে সব কাজ", "#/note/number-system/complement", re("পরিপূরক", "যোগের মাধ্যমে সকল কাজ")),
    T("stored", "ch01", "সংরক্ষিত প্রোগ্রাম ও দ্রুত গতির কারণ", "#/note/computer-basics/def", re("সংরক্ষিত প্রোগ্রাম", "দ্রুত গতির")),

    // ---- chapter ১ ----
    T("gen", "ch01", "কম্পিউটারের প্রজন্ম", "#/note/computer-basics/gen", re("প্রজন্ম", "জেনারেশন")),
    T("cpu", "ch01", "CPU, ALU, নিয়ন্ত্রণ অংশ ও মাইক্রোপ্রসেসর", "#/note/computer-basics/org", re("সিপিইউ", "CPU", "ALU", "গাণিতিক", "যুক্তিমূলক অংশ", "নিয়ন্ত্রণ অংশ", "মাইক্রোপ্রসেসর", "মাইক্রো প্রসেসর")),
    T("org", "ch01", "চিত্রসহ কম্পিউটারের সংগঠন", "#/note/computer-basics/org", re("কম্পিউটারের সংগঠন", "কম্পিউটার সংগঠন", "কীভাবে কাজ করে")),
    T("ram-rom", "ch01", "RAM, ROM, ক্যাশ ও EPROM", "#/note/computer-basics/mem", re("RAM", "ROM", "র‍্যাম", "ক্যাশ", "Cache", "BIOS")),
    T("mem", "ch01", "স্মৃতি: প্রকারভেদ, প্রধান ও সহায়ক", "#/note/computer-basics/mem", re("স্মৃতি", "মেমোরি", "ফ্লপি", "হার্ডডিস্ক")),
    T("size", "ch01", "আকার অনুসারে: সুপার থেকে মাইক্রো", "#/note/computer-basics/type", re("ডিজিটাল কম্পিউটার কী", "সুপার ?কম্পিউটার", "মেইনফ্রেম", "মিনি(?!ট)", "মাইক্রো ?কম্পিউটার", "ডিজিটাল কম্পিউটারের (প্রকার|শ্রেণি)", "আকার", "ল্যাপটপ", "পার্সোনাল কম্পিউটার", "পিসি")),
    T("kind", "ch01", "অ্যানালগ, ডিজিটাল ও হাইব্রিড", "#/note/computer-basics/type", re("অ্যানালগ", "হাইব্রিড", "গঠন ও ক্রিয়ানীতি", "গঠনগত", "কাজের ধরন")),
    T("hw-sw", "ch01", "হার্ডওয়্যার, সফটওয়্যার ও ফার্মওয়্যার", "#/note/computer-basics/sw", re("হার্ডওয়্যার", "ফার্মওয়্যার")),
    T("sw", "ch01", "সফটওয়্যারের প্রকারভেদ", "#/note/computer-basics/sw", re("সফটওয়্যার", "প্যাকেজ", "অনুবাদক", "ইউটিলিটি", "সোর্স কোড", "OR কোড")),
    T("printer", "ch01", "প্রিন্টার", "#/note/computer-basics/io", re("প্রিন্টার")),
    T("io", "ch01", "ইনপুট ও আউটপুট যন্ত্র", "#/note/computer-basics/io", all(re("স্ক্যানার", "মাউস", "মনিটর", "ইনপুট", "আউটপুট"), not(re("গেইট")))),
    T("hist", "ch01", "ইতিহাস: অ্যাবাকাস থেকে UNIVAC", "#/note/computer-basics/hist", re("অ্যাবাকাস", "জনক", "ব্যাবেজ", "প্রথম প্রোগ্রাম", "মেকানিক্যাল", "UNIVAC", "Mark", "মার্ক", "অ্যাডা")),
    T("def", "ch01", "কম্পিউটারের সংজ্ঞা, বৈশিষ্ট্য ও সীমাবদ্ধতা", "#/note/computer-basics/def", re("(?<!ডিজিটাল )কম্পিউটার কী", "কম্পিউটারের .*বৈশিষ্ট্য", "সীমাবদ্ধতা", "প্রধান চারটি কাজ", "প্রোগ্রাম নিয়ন্ত্রিত", "কম্পিউটারের ব্যবহার", "সময় পরিমাপ", "ইলেকট্রনিক্স যন্ত্র")),

    // ---- chapter ৪ (before chapter ২, whose words "যোগ", "গুণ" also appear in logic) ----
    T("univ", "ch04", "সার্বজনীন গেট: NAND ও NOR দিয়ে বাস্তবায়ন", "#/note/logic-gates/univ", re("সার্বজনীন", "(NOR|NAND) গেইটের (সাহায্যে|মাধ্যমে)", "NOR গেইট দ্বারা (OR|মৌলিক)")),
    T("bool", "ch04", "বুলিয়ান অ্যালজেবরা ও ডি মরগান", "#/note/logic-gates/bool", re("ডি মরগান", "বুলিয়ান (অ্যালজেবরা|বীজগণিত) (কী|বলতে)", "যৌক্তিক যোগ", "১ \\+ ১", "উপপাদ্য", "তিন চলকের জন্য প্রমাণ")),
    T("gates", "ch04", "লজিক গেট ও মৌলিক গেট: প্রতীক, সমীকরণ ও সারণি", "#/note/logic-gates/gates", all(re("গেইট", "গেট"), re("প্রতীক", "মৌলিক", "লজিক গেইট (কী|কাকে)", "তিন চলকের", "(?<![A-Z])AND(?![A-Z])", "(?<![A-Z])OR গেইট", "NOT গেইট"), not(re("সমীকরণটি", "দ্বারা NOR", "দ্বারা বাস্তবায়ন", "NOR গেইটের (সত্যক|সাহায্যে)", "মাধ্যমে বাস্তবায়ন", "XOR", "NAND")))),
    T("circuit", "ch04", "সমীকরণ সরল করা ও লজিক সার্কিট", "#/note/logic-gates/circ", all(re("সমীকরণ", "ফাংশন", "সরল", "প্রমাণ", "বর্তনী", "সার্কিট", "লজিক চিত্র", "এক্সপ্রেশন", "F =", "Y =", "X ="), not(re("ফ্লোচার্ট")))),
    T("compound", "ch04", "NOR, NAND ও XOR গেট", "#/note/logic-gates/nor", re("NOR", "NAND", "XOR", "X-OR")),
    T("truth", "ch04", "সত্যক সারণি", "#/note/logic-gates/truth", re("সত্যক সারণি (কী|কাকে)")),
    T("gates", "ch04", "লজিক গেট ও মৌলিক গেট: প্রতীক, সমীকরণ ও সারণি", "#/note/logic-gates/gates", re("গেইট", "গেট")),

    // ---- chapter ৫ ----
    T("os-types", "ch05", "অপারেটিং সিস্টেমের প্রকারভেদ", "#/note/operating-system/type", re("মাল্টিপ্রোগ্রামিং", "মাল্টিপ্রসেসিং", "টাইম ?শেয়ারিং", "টাইমশেয়ারিং", "টাইম স্লাইস", "ব্যাচ", "ডিস্ট্রিবিউটেড", "রিয়েল ?টাইম", "অপারেটিং সিস্টেমের (কাজ ও )?প্রকারভেদ")),
    T("cui-gui", "ch05", "বর্ণভিত্তিক ও চিত্রভিত্তিক অপারেটিং সিস্টেম", "#/note/operating-system/ui", re("বর্ণভিত্তিক", "চিত্রভিত্তিক", "GUI", "CUI")),
    T("dos", "ch05", "DOS ও Windows", "#/note/operating-system/dos", re("DOS", "ডস", "উইন্ডোজ", "Windows")),
    T("os", "ch05", "অপারেটিং সিস্টেম: সংজ্ঞা, কাজ ও সংগঠন", "#/note/operating-system/func", re("অপারেটিং সিস্টেম", "সুপারভাইজার")),

    // ---- chapter ৩ ----
    T("proc", "ch03", "উপাত্ত প্রক্রিয়াকরণ", "#/note/data-representation/proc", all(re("প্রক্রিয়াকরণ", "প্রসেসিং"), not(re("মাল্টিপ্রসেসিং")))),
    T("code", "ch03", "কোড ও বিট: BCD, ASCII ও EBCDIC", "#/note/data-representation/code", all(re("কোড", "BCD", "বিসিডি", "ASCII", "EBCDIC", "Bit"), not(re("\\)\\s*16", "সুডো")))),

    // ---- chapter ৬: worked problems first, then the ideas ----
    T("p-maxmin", "ch06", "বড় বা ছোট সংখ্যা নির্ণয়", "#/note/algorithm-flowchart/dec", all(re("বড়", "বৃহত্তম", "ছোট", "ক্ষুদ্রতম"), re("ফ্লোচার্ট", "অ্যালগরিদম"))),
    T("p-series", "ch06", "ধারা ও যোগফল", "#/note/algorithm-flowchart/loop", all(re("ফ্লোচার্ট", "অ্যালগরিদম"), re("যোগফল", "ধারা", "সিরিজ"))),
    T("p-fact", "ch06", "ফ্যাক্টরিয়াল", "#/note/algorithm-flowchart/p-fact", re("ফ্যাক্টরিয়াল", "factorial", "১ × ২")),
    T("p-gcd", "ch06", "গ.সা.গু", "#/note/algorithm-flowchart/p-gcd", re("গ\\.সা\\.গু")),
    T("p-evenodd", "ch06", "জোড় না বিজোড়", "#/note/algorithm-flowchart/p-evenodd", re("জোড় (না|বা) বিজোড়")),
    T("p-area", "ch06", "ক্ষেত্রফল নির্ণয়", "#/note/algorithm-flowchart/seq", re("ক্ষেত্রফল")),
    T("var", "ch06", "চলক", "#/note/algorithm-flowchart/var", re("চলক", "FOR-NEXT")),
    T("algo", "ch06", "অ্যালগরিদম ও সুডো কোড", "#/note/algorithm-flowchart/algo", re("অ্যালগরিদম", "সুডো কোড")),
    T("flow", "ch06", "ফ্লোচার্ট: প্রতীক, নিয়ম ও সুবিধা", "#/note/algorithm-flowchart/flow", re("ফ্লোচার্ট")),

    // ---- chapter ৭ ----
    T("email", "ch07", "ই-মেইল", "#/note/internet/mail", re("ই-মেইল", "E-mail", "Email", "ইমেইল")),
    T("web", "ch07", "WWW, ওয়েবসাইট ও ওয়েব ব্রাউজার", "#/note/internet/web", re("ওয়েব", "WWW", "www", "ব্রাউজার", "ওয়ার্ল্ড ওয়াইড")),
    T("net", "ch07", "নেটওয়ার্ক, টপোলজি ও প্রোটোকল", "#/note/internet/net", re("নেটওয়ার্ক", "টপোলজি", "প্রোটোকল", "HTML", "FTP", "ইন্ট্রানেট", "এক্সট্রানেট", "সার্চ ইঞ্জিন", "ই-কমার্স")),
    T("internet", "ch07", "ইন্টারনেট: সংজ্ঞা, সুফল ও কুফল", "#/note/internet/use-pro", re("ইন্টারনেট")),

    // ---- chapter ২ ----
    T("kind-num", "ch02", "সংখ্যা দেখে পদ্ধতি চেনা", "#/note/number-system/systems", re("কোন (ধরনের|সংখ্যা পদ্ধতির) সংখ্যা", "কী সংখ্যা", "কোন সংখ্যা পদ্ধতির")),
    T("table", "ch02", "০ থেকে ১৫/১৬-এর তালিকা", "#/note/number-system/systems", re("পর্যন্ত (দশমিক )?সংখ্যা")),
    T("bin-arith", "ch02", "বাইনারি যোগ, বিয়োগ, গুণ ও ভাগ", "#/note/number-system/arith", all(re("যোগ", "বিয়োগ", "গুণ", "ভাগ"), t => binaryOnly(t) || /বাইনারি যোগ ও বিয়োগ/.test(t))),
    T("mixed-arith", "ch02", "হেক্সা, অক্টাল ও মিশ্র ভিত্তির যোগ-বিয়োগ", "#/note/number-system/arith", re("যোগ", "বিয়োগ")),
    T("convert", "ch02", "এক পদ্ধতি থেকে অন্য পদ্ধতিতে রূপান্তর", "#/note/number-system/convert", re("প্রকাশ", "রূপান্তর", "সমকক্ষ", "বাইনারিতে", "অক্টালে", "দশমিকে", "হেক্সাডেসিমেলে", "মান লিখুন", "মান নির্ণয়")),
    T("systems", "ch02", "সংখ্যা পদ্ধতি, প্রকার ও ভিত্তি", "#/note/number-system/systems", re("সংখ্যা পদ্ধতি", "ভিত্তি", "পজিশনাল", "বাইনারি", "বেস"))
  ];

  const strip = h => h.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
  const find = t => THEMES.find(x => x.test(t));
  const joined = new RegExp("^(.*?(?:লিখুন|আলোচনা করুন|বর্ণনা করুন)) এবং (.+)$".normalize("NFC"));
  // One printed question part (HTML) → its asks: split after ? and ।, and at "… লিখুন এবং …" between two themes.
  function asksOf(html) {
    const out = [];
    for (const piece of html.normalize("NFC").split(/(?<=[?।])\s+/)) {
      const h = piece.trim(), t = strip(h);
      if (!t) continue;
      const m = h.match(joined), a = m && find(strip(m[1])), b = m && find(strip(m[2]));
      if (a && b && (a.ch !== b.ch || (b.id.startsWith("p-") && !a.id.startsWith("p-")))) out.push({ html: m[1] + "।", t: strip(m[1]) }, { html: m[2], t: strip(m[2]) });
      else out.push({ html: h, t });
    }
    return out;
  }
  // Every paper → themes, each with the asks that fall in it, most-asked first. Asks of one printed part that land in
  // the same theme read as one question. loose: asks that found no theme (the checker reports them).
  function group(W) {
    const byId = new Map(), loose = [], order = THEMES.map(x => x.id);
    for (const key of Object.keys(W).sort((a, b) => parseInt(b) - parseInt(a))) for (const q of W[key].questions) {
      const alts = q.alts || (q.alt ? [q.alt] : []);
      [q.parts || q.q, ...alts].forEach((choice, o) => {
        for (const pt of typeof choice === "string" ? [{ l: "", q: choice, m: "" }] : choice) {
          let prev = null;
          for (const a of asksOf(pt.q)) {
            const th = find(a.t) || prev;
            if (!th) { loose.push({ key, n: q.n, o, l: pt.l, t: a.t }); continue; }
            prev = th;
            if (!byId.has(th.id)) byId.set(th.id, { ...th, items: [] });
            const items = byId.get(th.id).items, last = items[items.length - 1];
            if (last && last.key === key && last.n === q.n && last.o === o && last.l === pt.l) last.html += " " + a.html;
            else items.push({ key, e: parseInt(key), n: q.n, o, l: pt.l, m: pt.m || q.marks, html: a.html });
          }
        }
      });
    }
    const themes = [...byId.values()].map(x => ({ ...x, exams: [...new Set(x.items.map(i => i.e))] }))
      .sort((a, b) => b.exams.length - a.exams.length || b.items.length - a.items.length || order.indexOf(a.id) - order.indexOf(b.id));
    return { themes, loose };
  }

  window.ICT_REPEAT = { group };
})();
