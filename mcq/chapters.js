/* The chapter list shown on the home page, in order. It follows the NTRCA syllabus for
   কম্পিউটার বিজ্ঞান (Computer Science), subject code ৩১৩, full marks ১০০: sections K to Q, one chapter each.
   id must match the chapter file (mcq/ch03.js has id "ch03"). A chapter without a file shows as "শিগগির".
   topics: the syllabus's own sub-topics, shortened to one line.
   note: a chapter's study note, for a chapter whose note comes before its MCQ file (its MCQ file sets it otherwise). */
window.ICT_CHAPTERS = [
  { id: "ch01", no: 1, name: "কম্পিউটার বেসিক", topics: "সংজ্ঞা ও বৈশিষ্ট্য, ইতিহাস ও প্রজন্ম, প্রকারভেদ ও শ্রেণিবিন্যাস, সংগঠন, হার্ডওয়্যার ও সফটওয়্যার" },
  { id: "ch02", no: 2, name: "সংখ্যা পদ্ধতি", topics: "পজিশনাল ও নন-পজিশনাল, এক পদ্ধতি থেকে অন্যটিতে রূপান্তর, বাইনারি যোগ-বিয়োগ-গুণ-ভাগ" },
  { id: "ch03", no: 3, name: "উপাত্ত উপস্থাপন", note: "#/note/data-representation", topics: "উপাত্ত, তথ্য ও উপাত্ত প্রক্রিয়াকরণ, BCD, EBCDIC, ASCII" },
  { id: "ch04", no: 4, name: "লজিক সার্কিট ও লজিক গেট", topics: "OR, AND, NOT ও NOR গেট" },
  { id: "ch05", no: 5, name: "অপারেটিং সিস্টেম", topics: "কার্যাবলি ও প্রকারভেদ, DOS, Windows" },
  { id: "ch06", no: 6, name: "অ্যালগরিদম ও ফ্লোচার্ট", topics: "অ্যালগরিদম, চলক (Variables) ও অপারেশন, ফ্লোচার্ট" },
  { id: "ch07", no: 7, name: "ইন্টারনেট", topics: "সংজ্ঞা, ই-মেইল, ওয়ার্ল্ড ওয়াইড ওয়েব ও ব্রাউজার" }
];
