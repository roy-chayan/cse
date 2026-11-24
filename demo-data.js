/* ICT মাস্টার — site data other than the chapter MCQs (those are in mcq/*.js).
   written: written papers; the question text is from the real paper, the model answers are in answers/ (see app.js). */
window.KHATA_DEMO = {
  /* Written (descriptive) papers. The question text is from the real paper; the model answers live in
     answers/<paper>.js (every paper has them now).
     marks: as printed; split: how the marks are divided between the parts of the answer. */
  written: {
    "18-school": {
      year: 2024, exam: "১৮তম শিক্ষক নিবন্ধন", level: "স্কুল পর্যায়", subject: "তথ্য ও যোগাযোগ প্রযুক্তি",
      post: "সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি)", code: "৩১৩", time: "৩ ঘণ্টা", mins: 180, full: "১০০", date: "১২ জুলাই ২০২৪",
      rule: "ডান পাশে উল্লিখিত সংখ্যা প্রশ্নের পূর্ণমান জ্ঞাপক। সকল প্রশ্নের উত্তর দিতে হবে।",
      questions: [
        { n: 1, marks: "১০", q: "কম্পিউটার প্রজন্ম বলতে কী বোঝায়? কম্পিউটারের বিভিন্ন প্রজন্মের বৈশিষ্ট্য বর্ণনা করুন।" },
        { n: 2, marks: "১০", q: "কম্পিউটার স্মৃতি বলতে কী বোঝায়? কম্পিউটার স্মৃতির শ্রেণিবিভাগ আলোচনা করুন।" },
        { n: 3, marks: "১০", q: "ALU কী? এর কর্মপদ্ধতি চিত্রসহ বর্ণনা করুন।" },
        { n: 4, marks: "২+৪+৪=১০", q: "মৌলিক গেইট কী? NAND এবং NOR গেইটকে কেন সার্বজনীন গেইট বলা হয় ব্যাখ্যা করুন।" },
        { n: 5, marks: "২+৮=১০", q: "২-এর পরিপূরক পদ্ধতি কী? ২-এর পরিপূরক পদ্ধতি ব্যবহার করে (−১৫)<sub>১০</sub> থেকে (+১১)<sub>১০</sub> বিয়োগ করুন।" },
        { n: 6, marks: "৫+৫=১০", q: "দুইটি সংখ্যার গ.সা.গু নির্ণয়ের জন্য ফ্লোচার্ট অঙ্কন করুন ও অ্যালগরিদম লিখুন।" },
        { n: 7, marks: "১+৪+৫=১০", q: "কোড কী? BCD এবং Binary কোডের মধ্যে পার্থক্য লিখুন। তিনভিত্তিক সংখ্যা পদ্ধতি সম্পর্কে ব্যাখ্যা করুন।" },
        { n: 8, marks: "৫+৫=১০", q: "(৯D·AB৬)<sub>১৬</sub> ও (৩০৬·৫১)<sub>১০</sub> যোগ করুন এবং ফলাফল বাইনারীতে প্রকাশ করুন। (১১০১০১) কোন সংখ্যা পদ্ধতির সংখ্যা হতে পারে বলে মনে করেন?" },
        { n: 9, marks: "২+৮=১০", q: "DOS কী? অপারেটিং সিস্টেমের কাজ ও প্রকারভেদ ব্যাখ্যা করুন।" },
        { n: 10, marks: "৫+৫=১০", q: "X = <span class=\"ov\">A</span>BC + A<span class=\"ov\">B</span>C + AB<span class=\"ov\">C</span> + ABC সমীকরণটির সরলীকৃত মান NAND এবং NOR গেইট দ্বারা বাস্তবায়ন করুন।" }
      ]
    }
  }
};
