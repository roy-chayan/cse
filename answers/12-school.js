/* Model answers · ১২তম শিক্ষক নিবন্ধন (২০১৫), সহকারী শিক্ষক (কম্পিউটার), বিষয় কোড ৩১৩.
   Same structure as answers/17-school.js. Most questions here carry ১৫ marks with no split printed (and two "অথবা"
   print no marks), so those answers open with a split-note and suggested marks. Every calculation was checked by script. */
(window.ICT_ANSWERS = window.ICT_ANSWERS || {})["12-school"] = {

1: `
<div class="ans-body">
  <p class="split-note">প্রশ্নে নম্বর ভাগ করা নেই। প্রজন্মের ধারণা ও প্রকারে ৪ আর প্রতিটি প্রজন্মের বৈশিষ্ট্য ও উদাহরণে ১১ ধরে লিখুন।</p>
  <section class="part">
    <h3 class="part-h"><span>কম্পিউটার প্রজন্ম কী; কত প্রকার ও কী কী</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৪</i></h3>
    <p class="inc-note">একই প্রশ্ন ১৮তম পরীক্ষায় এসেছে (প্রশ্ন ১)। প্রজন্ম পাঁচ প্রকার, নিচের সময়রেখায় দেখানো।</p>
    <div data-include="wa-18-school-1" data-part="1" data-inner></div>
  </section>
  <section class="part">
    <h3 class="part-h"><span>প্রতিটি প্রজন্মের বৈশিষ্ট্য ও উদাহরণ</span><i class="bub mk" title="প্রস্তাবিত নম্বর">১১</i></h3>
    <p class="prose">প্রতিটি প্রজন্মে অন্তত তিনটি বৈশিষ্ট্য ও উদাহরণ লাগবে; নিচে প্রতিটিতে চার-পাঁচটি দেওয়া আছে।</p>
    <div data-include="wa-18-school-1" data-part="2" data-inner></div>
  </section>

  <p class="ans-or">অথবা</p>
  <p class="split-note">এখানেও নম্বর ভাগ করা নেই। সংখ্যার ধরন ও পরের সংখ্যায় ৫ আর তিনটি রূপান্তরে ১০ ধরা যায়।</p>

  <section class="part">
    <h3 class="part-h"><span>FF কোন ধরনের সংখ্যা; এর পরের সংখ্যা</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৫</i></h3>
    <p class="prose">FF-এ F অঙ্কটি আছে, যা শুধু হেক্সাডেসিমাল পদ্ধতিতে ব্যবহৃত হয় (F = ১৫)। তাই FF একটি <b>হেক্সাডেসিমাল সংখ্যা</b>: (FF)<sub>16</sub> = ১৫ × ১৬ + ১৫ = ২৫৫। এটি দুই অঙ্কের সবচেয়ে বড় হেক্সাডেসিমাল সংখ্যা।</p>
    <div class="bcalc">
      <code>  FF</code><span>(FF)<sub>16</sub></span>
      <code class="add">+  1</code><span>এক বেশি</span>
      <code class="res"> 100</code><span>F + 1 = ১৬ = (10)<sub>16</sub>, বসে 0, হাতে ১; আবার F + ১ = (10)<sub>16</sub></span>
    </div>
    <p class="final"><b>উত্তর</b>FF-এর পরের সংখ্যা (100)<sub>16</sub></p>
  </section>
  <section class="part">
    <h3 class="part-h"><span>(100)<sub>16</sub>-এর বাইনারি, অক্টাল ও দশমিক মান</span><i class="bub mk" title="প্রস্তাবিত নম্বর">১০</i></h3>
    <p class="expand"><span>বাইনারি</span> 1 → 0001, 0 → 0000, 0 → 0000; তাই (100)<sub>16</sub> = 0001 0000 0000 = (<b>100000000</b>)<sub>2</sub></p>
    <p class="expand"><span>অক্টাল</span> ডান থেকে ৩ বিটের দল: 100 000 000 = (<b>400</b>)<sub>8</sub></p>
    <p class="expand"><span>দশমিক</span> 1×16<sup>2</sup> + 0×16<sup>1</sup> + 0×16<sup>0</sup> = <b>256</b></p>
    <p class="final"><b>উত্তর</b>(100)<sub>16</sub> = (100000000)<sub>2</sub> = (400)<sub>8</sub> = (256)<sub>10</sub></p>
    <p class="prose">যাচাই: (400)<sub>8</sub> = ৪ × ৬৪ = ২৫৬; আর FF = ২৫৫, তাই পরের সংখ্যা ২৫৬ ঠিক।</p>
  </section>
</div>
<aside class="side">
  <p><b>“কত প্রকার”</b>প্রজন্ম পাঁচটি; নাম ও মূল প্রযুক্তির ছোট ছকটি দিলে দ্বিতীয় প্রশ্নের নম্বর নিশ্চিত।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/computer-basics/gen">অধ্যায় ১ · প্রজন্ম</a>, <a href="#/note/number-system/between">অধ্যায় ২ · পদ্ধতির মধ্যে রূপান্তর</a></p>
  <p class="tags"><span class="xt">অধ্যায়: কম্পিউটার বেসিক</span><span class="xt">সংখ্যা পদ্ধতি</span></p>
</aside>
`,

2: `
<div class="ans-body">
  <p class="split-note">প্রশ্নে নম্বর ভাগ করা নেই। পার্থক্যে ৫ আর ডিজিটালের প্রকারভেদে ১০ ধরে লিখুন।</p>
  <section class="part">
    <h3 class="part-h"><span>অ্যানালগ ও ডিজিটাল কম্পিউটারের পার্থক্য</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৫</i></h3>
    <p class="inc-note">একই পার্থক্য ১৭তম পরীক্ষার ১ নম্বর প্রশ্নের উত্তরেও আছে।</p>
    <div data-include="wa-17-school-1" data-part="4" data-inner></div>
  </section>
  <section class="part">
    <h3 class="part-h"><span>ডিজিটাল কম্পিউটারের প্রকারভেদ</span><i class="bub mk" title="প্রস্তাবিত নম্বর">১০</i></h3>
    <p class="inc-note">এই অংশটি ১৫তম পরীক্ষার ১ নম্বর প্রশ্নের উত্তরেও আছে।</p>
    <div data-include="wa-15-school-1" data-part="1" data-inner></div>
  </section>

  <p class="ans-or">অথবা</p>
  <p class="split-note">এখানেও নম্বর ভাগ করা নেই। যোগে ৬ আর তিনটি রূপান্তরে ৯ ধরা যায়।</p>

  <section class="part">
    <h3 class="part-h"><span>(101.00)<sub>2</sub> ও (10010.10)<sub>2</sub>-এর যোগ</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৬</i></h3>
    <p class="prose">বিন্দু একই কলামে রেখে ডান থেকে যোগ করি (1 + 1 = 10, বসে 0, হাতে 1):</p>
    <div class="bcalc">
      <code>    101.00</code><span>(101.00)<sub>2</sub> = ৫</span>
      <code class="add">+ 10010.10</code><span>(10010.10)<sub>2</sub> = ১৮.৫</span>
      <code class="res">  10111.10</code><span>যোগফল</span>
    </div>
  </section>
  <section class="part">
    <h3 class="part-h"><span>যোগফল অক্টাল, হেক্সাডেসিমাল ও দশমিকে</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৯</i></h3>
    <p class="expand"><span>অক্টাল</span> বিন্দু থেকে ৩ বিটের দল: 010 111 . 100 = (<b>27.4</b>)<sub>8</sub></p>
    <p class="expand"><span>হেক্সাডেসিমাল</span> ৪ বিটের দল: 0001 0111 . 1000 = (<b>17.8</b>)<sub>16</sub></p>
    <p class="expand"><span>দশমিক</span> 1×2<sup>4</sup> + 0×2<sup>3</sup> + 1×2<sup>2</sup> + 1×2<sup>1</sup> + 1×2<sup>0</sup> + 1×2<sup>−1</sup> = 16 + 4 + 2 + 1 + 0.5 = <b>23.5</b></p>
    <p class="final"><b>উত্তর</b>(10111.1)<sub>2</sub> = (27.4)<sub>8</sub> = (17.8)<sub>16</sub> = (23.5)<sub>10</sub></p>
    <p class="prose">যাচাই: ৫ + ১৮.৫ = ২৩.৫; (27.4)<sub>8</sub> = ১৬ + ৭ + ০.৫ = ২৩.৫; (17.8)<sub>16</sub> = ১৬ + ৭ + ০.৫ = ২৩.৫।</p>
  </section>
</div>
<aside class="side">
  <p><b>দল বানাতে</b>বিন্দুর বাঁয়ে বাঁ দিকে, ডানে ডান দিকে 0 যোগ করে দল পূর্ণ করুন; 10111.1-এর ভগ্নাংশ অক্টালে .100, হেক্সায় .1000।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/computer-basics/type">অধ্যায় ১ · প্রকারভেদ</a>, <a href="#/note/number-system/arith">অধ্যায় ২ · যোগ</a></p>
  <p class="tags"><span class="xt">অধ্যায়: কম্পিউটার বেসিক</span><span class="xt">সংখ্যা পদ্ধতি</span></p>
</aside>
`,

3: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. সংখ্যা পদ্ধতি; প্রকার; পজিশনাল ও নন-পজিশনাল</span><i class="bub mk">৯</i></h3>
    <p class="defn"><b>সংখ্যা পদ্ধতি</b>কিছু নির্দিষ্ট অঙ্ক বা চিহ্ন এবং নিয়ম ব্যবহার করে সংখ্যা লেখা, পড়া ও গণনা করার পদ্ধতিকে সংখ্যা পদ্ধতি বলে।</p>
    <p class="prose"><b>প্রকার:</b> সংখ্যা পদ্ধতি প্রধানত দুই প্রকার: পজিশনাল ও নন-পজিশনাল। প্রচলিত পজিশনাল পদ্ধতি চারটি: বাইনারি (ভিত্তি ২), অক্টাল (৮), দশমিক (১০) ও হেক্সাডেসিমাল (১৬)। নন-পজিশনালের উদাহরণ রোমান ও প্রাচীন মিশরীয় পদ্ধতি।</p>
    <p class="inc-note">পজিশনাল ও নন-পজিশনালের অংশটি ১৭তম পরীক্ষার ৪ নম্বর প্রশ্নের উত্তরেও আছে।</p>
    <div data-include="wa-17-school-4" data-part="1" data-inner></div>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. দশমিক থেকে বাইনারি ও বাইনারি থেকে দশমিকে রূপান্তরের পদ্ধতি</span><i class="bub mk">৬</i></h3>
    <h4 class="sub-h"><span>১</span>দশমিক থেকে বাইনারি</h4>
    <ul class="pts">
      <li><b>পূর্ণ অংশ:</b> সংখ্যাটিকে ২ দিয়ে বারবার ভাগ করি যতক্ষণ ভাগফল ০ না হয়; ভাগশেষগুলো নিচ থেকে ওপরে পড়লে বাইনারি।</li>
      <li><b>ভগ্নাংশ:</b> ভগ্নাংশকে ২ দিয়ে বারবার গুণ করি; প্রতিবারের পূর্ণ অংশ (০ বা ১) ওপর থেকে নিচে পড়লে বাইনারি ভগ্নাংশ।</li>
    </ul>
    <p class="prose">উদাহরণ: (25.625)<sub>10</sub></p>
    <div class="work">
      <div class="ladder" role="img" aria-label="২৫-কে ২ দিয়ে বারবার ভাগ। ভাগশেষ ১, ০, ০, ১, ১। নিচ থেকে পড়লে 11001।">
        <span class="dv">2</span><span class="qt">25</span><span class="rm">1</span>
        <span class="dv">2</span><span class="qt">12</span><span class="rm">0</span>
        <span class="dv">2</span><span class="qt">6</span><span class="rm">0</span>
        <span class="dv">2</span><span class="qt">3</span><span class="rm">1</span>
        <span class="dv">2</span><span class="qt">1</span><span class="rm">1</span>
        <span class="dv"></span><span class="qt end">0</span><span class="rm"></span>
      </div>
      <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 146 V8 M5 15 L12 6 L19 15"/></svg><span>নিচ থেকে পড়ুন</span></div>
      <p class="work-res">(25)<sub>10</sub> = (<b>11001</b>)<sub>2</sub></p>
    </div>
    <div class="work">
      <table class="truth trace">
        <thead><tr><th>ভগ্নাংশ × ২</th><th>পূর্ণ অংশ</th></tr></thead>
        <tbody><tr><td>0.625 × 2 = 1.25</td><td>1</td></tr><tr><td>0.25 × 2 = 0.50</td><td>0</td></tr><tr><td>0.50 × 2 = 1.00</td><td>1</td></tr></tbody>
      </table>
      <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 4 V142 M5 135 L12 144 L19 135"/></svg><span>ওপর থেকে পড়ুন</span></div>
      <p class="work-res">(0.625)<sub>10</sub> = (<b>0.101</b>)<sub>2</sub></p>
    </div>
    <p class="prose">তাই (25.625)<sub>10</sub> = (11001.101)<sub>2</sub>। ভগ্নাংশ ০ হলে গুণ থামাই; না হলে প্রয়োজনমতো ঘর পর্যন্ত নিই।</p>
    <h4 class="sub-h"><span>২</span>বাইনারি থেকে দশমিক</h4>
    <p class="prose">প্রতিটি বিটকে তার স্থানীয় মান (২-এর ঘাত) দিয়ে গুণ করে যোগ করি: বিন্দুর বাঁয়ে 2<sup>0</sup>, 2<sup>1</sup>, 2<sup>2</sup> …, ডানে 2<sup>−1</sup>, 2<sup>−2</sup> …।</p>
    <p class="expand"><span>(11001.101)<sub>2</sub></span> = 1×2<sup>4</sup> + 1×2<sup>3</sup> + 0×2<sup>2</sup> + 0×2<sup>1</sup> + 1×2<sup>0</sup> + 1×2<sup>−1</sup> + 0×2<sup>−2</sup> + 1×2<sup>−3</sup> = 16 + 8 + 1 + 0.5 + 0.125 = <b>25.625</b></p>
    <p class="prose">দুই দিকের উত্তর মিলে গেল, অর্থাৎ পদ্ধতি দুটি একে অন্যের উল্টো।</p>
  </section>

  <p class="ans-or">অথবা</p>
  <p class="split-note">অথবা অংশে নম্বর ছাপা নেই; মূল প্রশ্নের মতো ক-তে ৯ আর খ-তে ৬ ধরা হয়েছে।</p>

  <section class="part">
    <h3 class="part-h"><span>ক. (6F3A)<sub>16</sub> থেকে বাইনারি, অক্টাল ও দশমিক</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৯</i></h3>
    <p class="expand"><span>বাইনারি</span> 6 → 0110, F → 1111, 3 → 0011, A → 1010; (6F3A)<sub>16</sub> = 0110 1111 0011 1010 = (<b>110111100111010</b>)<sub>2</sub></p>
    <p class="expand"><span>অক্টাল</span> ডান থেকে ৩ বিটের দল: 110 111 100 111 010 = (<b>67472</b>)<sub>8</sub></p>
    <table class="truth trace">
      <thead><tr><th>অঙ্ক</th><th>মান</th><th>স্থানীয় মান</th><th>গুণফল</th></tr></thead>
      <tbody><tr><td>6</td><td>6</td><td>16<sup>3</sup> = 4096</td><td>24576</td></tr><tr><td>F</td><td>15</td><td>16<sup>2</sup> = 256</td><td>3840</td></tr><tr><td>3</td><td>3</td><td>16<sup>1</sup> = 16</td><td>48</td></tr><tr><td>A</td><td>10</td><td>16<sup>0</sup> = 1</td><td>10</td></tr></tbody>
    </table>
    <p class="final"><b>উত্তর</b>(6F3A)<sub>16</sub> = (110111100111010)<sub>2</sub> = (67472)<sub>8</sub> = (28474)<sub>10</sub></p>
    <p class="prose">যাচাই: (67472)<sub>8</sub> = ৬ × ৪০৯৬ + ৭ × ৫১২ + ৪ × ৬৪ + ৭ × ৮ + ২ = ২৪৫৭৬ + ৩৫৮৪ + ২৫৬ + ৫৬ + ২ = ২৮৪৭৪।</p>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. (705.75)<sub>10</sub> থেকে বাইনারি ও অক্টাল</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৬</i></h3>
    <div class="work">
      <div class="ladder" role="img" aria-label="৭০৫-কে ২ দিয়ে বারবার ভাগ। নিচ থেকে পড়লে 1011000001।">
        <span class="dv">2</span><span class="qt">705</span><span class="rm">1</span>
        <span class="dv">2</span><span class="qt">352</span><span class="rm">0</span>
        <span class="dv">2</span><span class="qt">176</span><span class="rm">0</span>
        <span class="dv">2</span><span class="qt">88</span><span class="rm">0</span>
        <span class="dv">2</span><span class="qt">44</span><span class="rm">0</span>
        <span class="dv">2</span><span class="qt">22</span><span class="rm">0</span>
        <span class="dv">2</span><span class="qt">11</span><span class="rm">1</span>
        <span class="dv">2</span><span class="qt">5</span><span class="rm">1</span>
        <span class="dv">2</span><span class="qt">2</span><span class="rm">0</span>
        <span class="dv">2</span><span class="qt">1</span><span class="rm">1</span>
        <span class="dv"></span><span class="qt end">0</span><span class="rm"></span>
      </div>
      <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 146 V8 M5 15 L12 6 L19 15"/></svg><span>নিচ থেকে পড়ুন</span></div>
      <p class="work-res">(705)<sub>10</sub> = (<b>1011000001</b>)<sub>2</sub></p>
    </div>
    <p class="expand"><span>ভগ্নাংশ</span> 0.75 × 2 = 1.5 → 1; 0.5 × 2 = 1.0 → 1; তাই (0.75)<sub>10</sub> = (<b>0.11</b>)<sub>2</sub></p>
    <div class="work">
      <div class="ladder" role="img" aria-label="৭০৫-কে ৮ দিয়ে বারবার ভাগ। ভাগশেষ ১, ০, ৩, ১। নিচ থেকে পড়লে 1301।">
        <span class="dv">8</span><span class="qt">705</span><span class="rm">1</span>
        <span class="dv">8</span><span class="qt">88</span><span class="rm">0</span>
        <span class="dv">8</span><span class="qt">11</span><span class="rm">3</span>
        <span class="dv">8</span><span class="qt">1</span><span class="rm">1</span>
        <span class="dv"></span><span class="qt end">0</span><span class="rm"></span>
      </div>
      <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 146 V8 M5 15 L12 6 L19 15"/></svg><span>নিচ থেকে পড়ুন</span></div>
      <p class="work-res">(705)<sub>10</sub> = (<b>1301</b>)<sub>8</sub></p>
    </div>
    <p class="expand"><span>ভগ্নাংশ</span> 0.75 × 8 = 6.0 → 6; তাই (0.75)<sub>10</sub> = (<b>0.6</b>)<sub>8</sub></p>
    <p class="final"><b>উত্তর</b>(705.75)<sub>10</sub> = (1011000001.11)<sub>2</sub> = (1301.6)<sub>8</sub></p>
    <p class="prose">যাচাই: বাইনারিকে ৩ বিটে দল করলে 001 011 000 001 . 110 = 1301.6, একই উত্তর। ০.৭৫ ঠিকঠাক শেষ হয়, তাই উত্তর নির্ভুল, আনুমানিক নয়।</p>
  </section>
</div>
<aside class="side">
  <p><b>পদ্ধতি বর্ণনায়</b>নিয়মটি লিখে একটি ছোট উদাহরণে দুই দিকেই দেখান; একই সংখ্যা দিয়ে গেলে-ফিরলে মিলিয়ে দেখানো যায়।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/number-system/todec">অধ্যায় ২ · দশমিকে রূপান্তর</a>, <a href="#/note/number-system/convert">দশমিক থেকে রূপান্তর</a></p>
  <p class="tags"><span class="xt">অধ্যায়: সংখ্যা পদ্ধতি</span></p>
</aside>
`,

4: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. প্রোগ্রামের চলক; প্রকার; অপারেশন</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>চলক</b>প্রোগ্রাম চলার সময় যার মান বদলাতে পারে, এমন নামযুক্ত মেমোরি অবস্থানকে চলক (Variable) বলে। চলকের নাম দিয়ে প্রোগ্রাম সেই অবস্থানের মান পড়ে ও বদলায়। যেমন x = 5 লিখলে x নামের ঘরে ৫ থাকে; পরে x = x + 1 লিখলে মান হয় ৬।</p>
    <h4 class="sub-h"><span>১</span>নামকরণের নিয়ম</h4>
    <ul class="pts">
      <li>নাম শুরু হবে বর্ণ বা আন্ডারস্কোর (_) দিয়ে; অঙ্ক দিয়ে নয় (2total ভুল, total2 ঠিক)।</li>
      <li>শুধু বর্ণ, অঙ্ক ও আন্ডারস্কোর চলবে; ফাঁকা জায়গা বা বিশেষ চিহ্ন (+, −, @) নয়।</li>
      <li>ভাষার সংরক্ষিত শব্দ (int, if, for) চলকের নাম হতে পারে না।</li>
      <li>C-তে বড় ও ছোট হাতের অক্ষর আলাদা: Age ও age দুটি ভিন্ন চলক। নাম অর্থপূর্ণ রাখা ভালো, যেমন salary।</li>
    </ul>
    <h4 class="sub-h"><span>২</span>চলকের প্রকার</h4>
    <p class="prose">রাখা মানের ধরন অনুসারে চলক প্রধানত দুই প্রকার: <b>সংখ্যাবাচক</b> (সংখ্যা রাখে) ও <b>বর্ণবাচক বা স্ট্রিং</b> (বর্ণ ও লেখা রাখে)। ডেটা টাইপ অনুসারে বিস্তারিত:</p>
    <table class="rt cmp">
      <thead><tr><th>প্রকার</th><th>কী রাখে</th><th>উদাহরণ (C)</th></tr></thead>
      <tbody>
        <tr><td>পূর্ণসংখ্যা (integer)</td><td>ভগ্নাংশ ছাড়া সংখ্যা</td><td class="m">int age = 25;</td></tr>
        <tr><td>বাস্তব বা ভগ্নাংশ (float, double)</td><td>দশমিক বিন্দুসহ সংখ্যা</td><td class="m">float price = 12.5;</td></tr>
        <tr><td>বর্ণ (character)</td><td>একটি বর্ণ বা চিহ্ন</td><td class="m">char grade = 'A';</td></tr>
        <tr><td>স্ট্রিং (string)</td><td>একাধিক বর্ণের লেখা</td><td class="m">char name[] = "Rahim";</td></tr>
        <tr><td>বুলিয়ান (boolean)</td><td>সত্য বা মিথ্যা</td><td class="m">bool passed = true;</td></tr>
      </tbody>
    </table>
    <p class="prose">ব্যবহারের পরিধি অনুসারে চলক দুই প্রকার: <b>লোকাল</b> (শুধু যে অংশে ঘোষণা, সেখানেই চলে) ও <b>গ্লোবাল</b> (পুরো প্রোগ্রামে চলে)। যার মান কখনো বদলায় না, সেটি চলক নয়, ধ্রুবক (Constant), যেমন PI = 3.1416।</p>
    <h4 class="sub-h"><span>৩</span>প্রোগ্রামে অপারেশন</h4>
    <p class="prose">চলক বা মানের ওপর যে কাজ (হিসাব, তুলনা, যুক্তি, মান বসানো) করা হয়, তাকে অপারেশন বলে। কাজের চিহ্নটি অপারেটর, আর যার ওপর কাজ হয় তা অপারেন্ড; যেমন a + b-তে + অপারেটর, a ও b অপারেন্ড। a = 10 ও b = 3 ধরে:</p>
    <table class="rt cmp">
      <thead><tr><th>অপারেশন</th><th>অপারেটর</th><th>উদাহরণ ও ফল</th></tr></thead>
      <tbody>
        <tr><td>গাণিতিক</td><td class="m">+ − * / %</td><td>a + b = 13, a * b = 30, a % b = 1 (ভাগশেষ)</td></tr>
        <tr><td>তুলনামূলক (সম্পর্কসূচক)</td><td class="m">&lt; &gt; &lt;= &gt;= == !=</td><td>a &gt; b সত্য, a == b মিথ্যা</td></tr>
        <tr><td>যৌক্তিক</td><td class="m">&amp;&amp; (AND) || (OR) ! (NOT)</td><td>(a &gt; 5) &amp;&amp; (b &gt; 5) মিথ্যা; !(a &gt; 5) মিথ্যা</td></tr>
        <tr><td>মান বসানো (অ্যাসাইনমেন্ট)</td><td class="m">= += −=</td><td>a += 2 করলে a = 12</td></tr>
        <tr><td>বৃদ্ধি ও হ্রাস</td><td class="m">++ −−</td><td>a++ করলে a = 11</td></tr>
      </tbody>
    </table>
    <pre class="code">int a = 10, b = 3;     /* পূর্ণসংখ্যার চলক */
float avg;             /* ভগ্নাংশের চলক */
avg = (a + b) / 2.0;   /* গাণিতিক অপারেশন: avg = 6.5 */
if (a &gt; b) a = a - b; /* তুলনা, তারপর মান বসানো: a = 7 */</pre>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. BCD কোড ও বাইনারি সংখ্যা পদ্ধতির পার্থক্য</span><i class="bub mk">৫</i></h3>
    <p class="inc-note">একই প্রশ্ন ১৭তম পরীক্ষায় এসেছে (প্রশ্ন ৪)।</p>
    <div data-include="wa-17-school-4" data-part="4" data-inner></div>
  </section>

  <p class="ans-or">অথবা</p>
  <p class="split-note">অথবা অংশে নম্বর ছাপা নেই; মূল প্রশ্নের মতো ক-তে ১০ আর খ-তে ৫ ধরা হয়েছে।</p>

  <section class="part">
    <h3 class="part-h"><span>ক. ফ্লোচার্ট অঙ্কনের নিয়ম; ফ্লোচার্ট ও অ্যালগরিদমের পার্থক্য</span><i class="bub mk" title="প্রস্তাবিত নম্বর">১০</i></h3>
    <h4 class="sub-h"><span>১</span>ফ্লোচার্ট অঙ্কনের নিয়ম</h4>
    <ul class="pts">
      <li>প্রচলিত (ANSI) প্রতীক ব্যবহার করতে হবে: শুরু-শেষে ডিম্বাকার, ইনপুট-আউটপুটে সামান্তরিক, হিসাবে আয়ত, সিদ্ধান্তে রম্বস।</li>
      <li>একটি মাত্র “শুরু” ও একটি মাত্র “শেষ” থাকবে।</li>
      <li>প্রবাহ সাধারণত ওপর থেকে নিচে ও বাঁ থেকে ডানে; দিক বোঝাতে প্রতিটি রেখায় তীরচিহ্ন।</li>
      <li>সিদ্ধান্তের প্রতীকে একটি পথ ঢোকে, দুটি বের হয়; বের হওয়া পথে “হ্যাঁ” ও “না” লিখতে হবে।</li>
      <li>প্রতীকের ভেতরের লেখা সংক্ষিপ্ত ও স্পষ্ট হবে।</li>
      <li>প্রবাহ রেখা যেন একটি আরেকটিকে না কাটে; ফ্লোচার্ট বড় হলে সংযোগকারী (বৃত্ত) ব্যবহার করতে হবে।</li>
      <li>সম্পূর্ণ ফ্লোচার্ট পরিচ্ছন্ন ও সহজবোধ্য হবে, যাতে অন্য কেউ দেখে বুঝতে পারেন।</li>
    </ul>
    <h4 class="sub-h"><span>২</span>ফ্লোচার্ট ও অ্যালগরিদমের পার্থক্য</h4>
    <p class="inc-note">পার্থক্যের ছকটি ১৩তম পরীক্ষার ৫ নম্বর প্রশ্নের উত্তরেও আছে।</p>
    <div data-include="wa-13-school-5" data-part="4" data-inner></div>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. সংখ্যা জোড় না বিজোড় নির্ণয়ের ফ্লোচার্ট</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৫</i></h3>
    <figure class="fig flow">
      <svg viewBox="0 0 460 430" role="img" aria-label="ফ্লোচার্ট: শুরু; N ইনপুট; R = N mod 2; R শূন্য কি না? হ্যাঁ হলে জোড় প্রিন্ট, না হলে বিজোড় প্রিন্ট; শেষ।">
        <defs><marker id="even12-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
        <rect class="fs" x="170" y="10" width="120" height="40" rx="20"/><text x="230" y="31">শুরু</text>
        <path class="fa" d="M230 50V76" marker-end="url(#even12-ah)"/>
        <path class="fs" d="M170 78H314L290 120H146Z"/><text x="230" y="99">N ইনপুট</text>
        <path class="fa" d="M230 120V146" marker-end="url(#even12-ah)"/>
        <rect class="fs" x="150" y="148" width="160" height="44"/><text x="230" y="170">R = N mod 2</text>
        <path class="fa" d="M230 192V218" marker-end="url(#even12-ah)"/>
        <path class="fs fd" d="M230 220L300 260L230 300L160 260Z"/><text x="230" y="260">R = 0 ?</text>
        <path class="fa" d="M160 260H90V318" marker-end="url(#even12-ah)"/><text class="yn" x="125" y="248">হ্যাঁ</text>
        <path class="fa" d="M300 260H370V318" marker-end="url(#even12-ah)"/><text class="yn" x="335" y="248">না</text>
        <path class="fs" d="M30 320H170L150 360H10Z"/><text x="90" y="340">জোড় প্রিন্ট</text>
        <path class="fs" d="M310 320H450L430 360H290Z"/><text x="370" y="340">বিজোড় প্রিন্ট</text>
        <path class="fa" d="M90 360V400H168" marker-end="url(#even12-ah)"/>
        <path class="fa" d="M370 360V400H292" marker-end="url(#even12-ah)"/>
        <rect class="fs" x="170" y="380" width="120" height="40" rx="20"/><text x="230" y="401">শেষ</text>
      </svg>
      <figcaption>চিত্র: সংখ্যা জোড় না বিজোড় নির্ণয়ের ফ্লোচার্ট</figcaption>
    </figure>
    <p class="prose">যাচাই: N = 17 হলে R = 1, তাই “বিজোড়”; N = 24 হলে R = 0, তাই “জোড়”।</p>
  </section>
</div>
<aside class="side">
  <p><b>চলক ও অপারেশন</b>সংজ্ঞার সঙ্গে একটি ছোট কোডের উদাহরণ দিন; প্রতিটি প্রকারের একটি করে চলক দেখালে প্রশ্নের সব অংশ ঢাকা পড়ে।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/data-representation/code">অধ্যায় ৩ · কোড</a></p>
  <p class="tags"><span class="xt">অধ্যায়: অ্যালগরিদম ও ফ্লোচার্ট</span><span class="xt">উপাত্ত উপস্থাপন</span></p>
</aside>
`,

5: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. অপারেটিং সিস্টেম; প্রকারভেদ; বৈশিষ্ট্য</span><i class="bub mk">১০</i></h3>
    <p class="inc-note">সংজ্ঞা ও প্রকারভেদ ১৩তম পরীক্ষার ৪ নম্বর প্রশ্নের উত্তরেও আছে।</p>
    <div data-include="wa-13-school-4" data-part="1" data-inner></div>
    <h4 class="sub-h"><span>বৈশিষ্ট্য</span>অপারেটিং সিস্টেমের বৈশিষ্ট্য</h4>
    <ul class="pts">
      <li>হার্ডওয়্যার ও ব্যবহারকারীর মধ্যে সেতু; CPU, স্মৃতি, ডিস্ক ও যন্ত্রসহ সব রিসোর্স পরিচালনা করে।</li>
      <li>কম্পিউটার চালু হলে প্রথমে স্মৃতিতে আসে এবং বন্ধ হওয়া পর্যন্ত থাকে।</li>
      <li>ব্যবহারকারীকে কমান্ড বা চিত্রভিত্তিক ইন্টারফেস দেয়।</li>
      <li>একসঙ্গে অনেক প্রোগ্রাম (মাল্টিটাস্কিং) ও অনেক ব্যবহারকারী সামলাতে পারে।</li>
      <li>ফাইল ও ফোল্ডার সংগঠিত রাখে; পাসওয়ার্ড ও অনুমতি দিয়ে নিরাপত্তা দেয়।</li>
      <li>ত্রুটি শনাক্ত করে বার্তা দেয়; অ্যাপ্লিকেশনকে হার্ডওয়্যারের খুঁটিনাটি থেকে আড়াল রাখে।</li>
    </ul>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. DOS ও Windows অপারেটিং সিস্টেমের পার্থক্য</span><i class="bub mk">৫</i></h3>
    <p class="inc-note">একই প্রশ্ন ১৫তম পরীক্ষায় এসেছে (প্রশ্ন ১০)।</p>
    <div data-include="wa-15-school-10" data-part="2" data-inner></div>
  </section>

  <p class="ans-or">অথবা</p>
  <p class="split-note">প্রশ্নে নম্বর ভাগ করা নেই। প্রতীক, সমীকরণ ও সত্যক সারণিতে ৯ আর বৈদ্যুতিক বর্তনীতে ৬ ধরা যায়।</p>

  <section class="part">
    <h3 class="part-h"><span>মৌলিক গেট: প্রতীক, বুলিয়ান সমীকরণ ও সত্যক সারণি</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৯</i></h3>
    <p class="inc-note">এই অংশটি ১৭তম পরীক্ষার ৫ নম্বর প্রশ্নের উত্তরেও আছে। মৌলিক গেট তিন প্রকার: AND, OR ও NOT।</p>
    <div data-include="wa-17-school-5" data-part="1" data-inner></div>
  </section>
  <section class="part">
    <h3 class="part-h"><span>মৌলিক গেটের বৈদ্যুতিক বর্তনী</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৬</i></h3>
    <p class="prose">সুইচ চাপা (বন্ধ) = ১, খোলা = ০; বাতি জ্বলে = ১, নেভা = ০। সুইচ দুটি কীভাবে জোড়া, তাতেই গেটের কাজ:</p>
    <div class="gates">
      <figure class="fig gate-sym circ">
        <svg viewBox="0 -4 230 128" role="img" aria-label="AND-এর বৈদ্যুতিক বর্তনী: ব্যাটারি, সিরিজে দুটি সুইচ A ও B এবং একটি বাতি Y। দুটি সুইচই বন্ধ হলে বাতি জ্বলে।">
          <path class="w" d="M20 62V26H55M90 26H120M155 26H200V58M200 82V110H20V70"/>
          <path class="w" style="stroke-width:2.6" d="M8 62H32"/><path class="w" d="M14 70H26"/>
          <circle class="j" cx="55" cy="26" r="2.6"/><path class="w" d="M55 26L86 13"/><circle class="j" cx="90" cy="26" r="2.6"/>
          <circle class="j" cx="120" cy="26" r="2.6"/><path class="w" d="M120 26L151 13"/><circle class="j" cx="155" cy="26" r="2.6"/>
          <circle class="gb" cx="200" cy="70" r="12"/><path class="w" d="M191.5 61.5L208.5 78.5M208.5 61.5L191.5 78.5"/>
          <text x="64" y="11" text-anchor="start">A</text><text x="129" y="11" text-anchor="start">B</text><text x="216" y="74" text-anchor="start">Y</text>
        </svg>
        <figcaption>AND: দুটি সুইচ সিরিজে; দুটিই বন্ধ হলে বাতি জ্বলে</figcaption>
      </figure>
      <figure class="fig gate-sym circ">
        <svg viewBox="0 -4 230 128" role="img" aria-label="OR-এর বৈদ্যুতিক বর্তনী: ব্যাটারি, প্যারালালে দুটি সুইচ A ও B এবং একটি বাতি Y। যেকোনো একটি সুইচ বন্ধ হলেই বাতি জ্বলে।">
          <path class="w" d="M20 62V26H85M120 26H200V58M200 82V110H20V70"/>
          <path class="w" d="M45 26V58H85M120 58H165V26"/>
          <path class="w" style="stroke-width:2.6" d="M8 62H32"/><path class="w" d="M14 70H26"/>
          <circle class="j" cx="45" cy="26" r="2.6"/><circle class="j" cx="165" cy="26" r="2.6"/>
          <circle class="j" cx="85" cy="26" r="2.6"/><path class="w" d="M85 26L116 13"/><circle class="j" cx="120" cy="26" r="2.6"/>
          <circle class="j" cx="85" cy="58" r="2.6"/><path class="w" d="M85 58L116 45"/><circle class="j" cx="120" cy="58" r="2.6"/>
          <circle class="gb" cx="200" cy="70" r="12"/><path class="w" d="M191.5 61.5L208.5 78.5M208.5 61.5L191.5 78.5"/>
          <text x="94" y="11" text-anchor="start">A</text><text x="94" y="78" text-anchor="start">B</text><text x="216" y="74" text-anchor="start">Y</text>
        </svg>
        <figcaption>OR: দুটি সুইচ প্যারালালে; যেকোনো একটি বন্ধ হলেই বাতি জ্বলে</figcaption>
      </figure>
      <figure class="fig gate-sym circ">
        <svg viewBox="0 -4 230 128" role="img" aria-label="NOT-এর বৈদ্যুতিক বর্তনী: ব্যাটারি, একটি রোধ, তারপর বাতি Y; সুইচ A বাতির সমান্তরালে। সুইচ খোলা থাকলে বাতি জ্বলে, বন্ধ করলে বিদ্যুৎ সুইচ দিয়ে চলে যায় আর বাতি নেভে।">
          <path class="w" d="M20 62V26H50M92 26H200V58M200 82V110H20V70"/>
          <path class="w" d="M50 26L55 18L63 34L71 18L79 34L87 18L92 26"/>
          <path class="w" style="stroke-width:2.6" d="M8 62H32"/><path class="w" d="M14 70H26"/>
          <circle class="j" cx="130" cy="26" r="2.6"/><circle class="j" cx="130" cy="110" r="2.6"/>
          <path class="w" d="M130 26V48M130 90V110"/><circle class="j" cx="130" cy="48" r="2.6"/><path class="w" d="M130 48L146 84"/><circle class="j" cx="130" cy="90" r="2.6"/>
          <circle class="gb" cx="200" cy="70" r="12"/><path class="w" d="M191.5 61.5L208.5 78.5M208.5 61.5L191.5 78.5"/>
          <text x="64" y="12" text-anchor="start">R</text><text x="150" y="64" text-anchor="start">A</text><text x="216" y="74" text-anchor="start">Y</text>
        </svg>
        <figcaption>NOT: সুইচ বাতির সমান্তরালে; সুইচ বন্ধ হলে বাতি নেভে</figcaption>
      </figure>
    </div>
    <ul class="pts">
      <li><b>AND (Y = A·B):</b> সুইচ দুটি সিরিজে, তাই বিদ্যুৎ যেতে দুটিকেই বন্ধ থাকতে হয়। একটিও খোলা থাকলে বাতি নেভা।</li>
      <li><b>OR (Y = A + B):</b> সুইচ দুটি প্যারালালে, তাই যেকোনো একটি পথ বন্ধ হলেই বিদ্যুৎ যায় ও বাতি জ্বলে।</li>
      <li><b>NOT (Y = <span class="ov">A</span>):</b> সুইচ খোলা (A = 0) থাকলে বিদ্যুৎ বাতি দিয়ে যায়, বাতি জ্বলে (Y = 1)। সুইচ বন্ধ (A = 1) করলে বিদ্যুৎ সুইচের সহজ পথে চলে যায়, বাতি নেভে (Y = 0)। রোধ R ব্যাটারিকে শর্ট সার্কিট থেকে রক্ষা করে।</li>
    </ul>
  </section>
</div>
<aside class="side">
  <p><b>পূর্ণ নম্বরে চারটি জিনিস</b>প্রতিটি গেটের প্রতীক, সমীকরণ, সত্যক সারণি আর সুইচ-বাতির বর্তনী; একটি বাদ গেলে নম্বর কাটে।</p>
  <p class="tags"><span class="xt">অধ্যায়: অপারেটিং সিস্টেম</span><span class="xt">লজিক সার্কিট ও লজিক গেট</span></p>
</aside>
`,

6: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>কম্পিউটারের বৈশিষ্ট্য</span><i class="bub mk">৫</i></h3>
    <p class="inc-note">একই প্রশ্ন ১৬তম পরীক্ষায় এসেছে (প্রশ্ন ১)।</p>
    <div data-include="wa-16-school-1" data-part="4" data-inner></div>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>Mark-1; (1101101.101)<sub>2</sub> ও (10110.11)<sub>2</sub>-এর যোগ ও বিয়োগ</span><i class="bub mk">৫</i></h3>
    <p class="prose"><b>Mark-1:</b> হার্ভার্ড বিশ্ববিদ্যালয়ের হাওয়ার্ড আইকেন IBM-এর সহায়তায় ১৯৪৪ সালে Mark-1 (Automatic Sequence Controlled Calculator) তৈরি করেন। এটি রিলে, সুইচ ও গিয়ারে চলা একটি ইলেকট্রো-মেকানিক্যাল কম্পিউটার; প্রায় ৫১ ফুট লম্বা ও প্রায় ৫ টন ভারী। পাঞ্চ করা কাগজের ফিতা থেকে নির্দেশ পড়ে স্বয়ংক্রিয়ভাবে হিসাব করত; সেকেন্ডে প্রায় ৩টি যোগ করতে পারত।</p>
    <h4 class="sub-h"><span>যোগ</span>বিন্দু মিলিয়ে ডান থেকে</h4>
    <div class="bcalc">
      <code>  1101101.101</code><span>১০৯.৬২৫</span>
      <code class="add">+   10110.110</code><span>২২.৭৫</span>
      <code class="res"> 10000100.011</code><span>যোগফল = ১৩২.৩৭৫</span>
    </div>
    <h4 class="sub-h"><span>বিয়োগ</span>প্রথমটি থেকে দ্বিতীয়টি</h4>
    <div class="bcalc">
      <code>  1101101.101</code><span>১০৯.৬২৫</span>
      <code class="add">−   10110.110</code><span>২২.৭৫ (0 − 1-এ বাঁয়ের ঘর থেকে ধার, 10 − 1 = 1)</span>
      <code class="res">  1010110.111</code><span>বিয়োগফল = ৮৬.৮৭৫</span>
    </div>
    <p class="final"><b>উত্তর</b>যোগফল (10000100.011)<sub>2</sub>, বিয়োগফল (1010110.111)<sub>2</sub></p>
    <p class="prose">যাচাই: ১০৯.৬২৫ + ২২.৭৫ = ১৩২.৩৭৫ = ১২৮ + ৪ + ০.২৫ + ০.১২৫; ১০৯.৬২৫ − ২২.৭৫ = ৮৬.৮৭৫ = ৬৪ + ১৬ + ৪ + ২ + ০.৫ + ০.২৫ + ০.১২৫।</p>
  </section>
</div>
<aside class="side">
  <p><b>Mark-1 চিনতে</b>১৯৪৪, হাওয়ার্ড আইকেন, IBM ও হার্ভার্ড; প্রথম দিকের স্বয়ংক্রিয় ইলেকট্রো-মেকানিক্যাল কম্পিউটার।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/computer-basics/hist">অধ্যায় ১ · ইতিহাস</a>, <a href="#/note/number-system/arith">অধ্যায় ২ · যোগ-বিয়োগ</a></p>
  <p class="tags"><span class="xt">অধ্যায়: কম্পিউটার বেসিক</span><span class="xt">সংখ্যা পদ্ধতি</span></p>
</aside>
`,

7: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>গাণিতিক যুক্তি অংশের গঠন ও কার্যপ্রণালি</span><i class="bub mk">৫</i></h3>
    <p class="inc-note">পূর্ণ উত্তর ১৮তম পরীক্ষার ৩ নম্বর প্রশ্নে; গঠনের চিত্র ও কাজের ধাপগুলোই এখানে মূল।</p>
    <div data-include="wa-18-school-3" data-part="2" data-inner></div>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>নিয়ন্ত্রণ অংশের কাজের প্রক্রিয়া</span><i class="bub mk">৫</i></h3>
    <p class="inc-note">পূর্ণ উত্তর ১৫তম পরীক্ষার ৫ নম্বর প্রশ্নে।</p>
    <div data-include="wa-15-school-5" data-part="3" data-inner></div>
  </section>
</div>
<aside class="side">
  <p><b>বিস্তারিত নোট</b><a href="#/note/computer-basics/org">অধ্যায় ১ · সংগঠন, CPU ও ALU</a></p>
  <p class="tags"><span class="xt">অধ্যায়: কম্পিউটার বেসিক</span></p>
</aside>
`,

8: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>উপাত্ত ও তথ্যের পার্থক্য</span><i class="bub mk">৫</i></h3>
    <p class="inc-note">একই প্রশ্ন ১৬তম পরীক্ষায় এসেছে (প্রশ্ন ৬)।</p>
    <div data-include="wa-16-school-6" data-part="1" data-inner></div>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>অ্যাডা অগাস্টা বায়রন; BCD ও EBCDIC কোডের পার্থক্য</span><i class="bub mk">৫</i></h3>
    <p class="prose"><b>অ্যাডা অগাস্টা বায়রন</b> (১৮১৫–১৮৫২), পরে লেডি অ্যাডা লাভলেস, ছিলেন ব্রিটিশ গণিতবিদ এবং কবি লর্ড বায়রনের কন্যা। তিনি চার্লস ব্যাবেজের অ্যানালিটিক্যাল ইঞ্জিন নিয়ে কাজ করেন এবং ১৮৪৩ সালে এর জন্য বার্নুলি সংখ্যা হিসাবের ধাপে ধাপে নির্দেশমালা লেখেন। একে প্রথম কম্পিউটার প্রোগ্রাম ধরা হয়, তাই তাঁকে প্রথম প্রোগ্রামার বলা হয়। তাঁর সম্মানে একটি প্রোগ্রামিং ভাষার নাম রাখা হয় Ada।</p>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>BCD</th><th>EBCDIC</th></tr></thead>
      <tbody>
        <tr><td>পূর্ণরূপ</td><td>Binary Coded Decimal</td><td>Extended Binary Coded Decimal Interchange Code</td></tr>
        <tr><td>বিট</td><td>প্রতিটি দশমিক অঙ্কে ৪ বিট</td><td>প্রতিটি অক্ষরে ৮ বিট</td></tr>
        <tr><td>প্রকাশ করে</td><td>শুধু অঙ্ক ০–৯</td><td>বর্ণ, অঙ্ক ও চিহ্ন মিলে ২৫৬টি অক্ষর</td></tr>
        <tr><td>গঠন</td><td>৮৪২১ ওজনে অঙ্কের বাইনারি</td><td>৪ বিট জোন + ৪ বিট ডিজিট</td></tr>
        <tr><td>অঙ্ক ৭</td><td>0111</td><td>1111 0111 (F7)</td></tr>
        <tr><td>ব্যবহার</td><td>ক্যালকুলেটর, ডিজিটাল ঘড়ির প্রদর্শন</td><td>IBM মেইনফ্রেম কম্পিউটার</td></tr>
      </tbody>
    </table>
  </section>
</div>
<aside class="side">
  <p><b>ছাপার কথা</b>অথবা প্রশ্নে কোড দুটির নাম ভাঙা অক্ষরে ছাপা; অক্ষর মিলিয়ে এগুলো BCD ও EBCDIC।</p>
  <p class="tags"><span class="xt">অধ্যায়: উপাত্ত উপস্থাপন</span><span class="xt">কম্পিউটার বেসিক</span></p>
</aside>
`,

9: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>(11001)<sub>2</sub> ÷ (101)<sub>2</sub>; (203.25)<sub>8</sub> থেকে হেক্সাডেসিমাল</span><i class="bub mk">৫</i></h3>
    <h4 class="sub-h"><span>১</span>বাইনারি ভাগ</h4>
    <p class="prose">দশমিকের মতো লম্বা ভাগ: ভাজ্যের বাঁ থেকে যতটুকু নিলে ভাজক 101 বসে, ততটুকু নিই; বসলে ভাগফলে 1, না বসলে 0।</p>
    <table class="truth cols">
      <thead><tr><th>ধাপ</th><th>নেওয়া অংশ</th><th>101 বসে?</th><th>ভাগফলে</th><th>বাকি</th></tr></thead>
      <tbody><tr><td>১</td><td>110</td><td>হ্যাঁ</td><td>1</td><td>110 − 101 = 1</td></tr><tr><td>২</td><td>10 (পরের 0 নামিয়ে)</td><td>না</td><td>0</td><td>10</td></tr><tr><td>৩</td><td>101 (পরের 1 নামিয়ে)</td><td>হ্যাঁ</td><td>1</td><td>0</td></tr></tbody>
    </table>
    <p class="final"><b>উত্তর</b>(11001)<sub>2</sub> ÷ (101)<sub>2</sub> = (101)<sub>2</sub>, ভাগশেষ 0 (২৫ ÷ ৫ = ৫)</p>
    <h4 class="sub-h"><span>২</span><span>(203.25)<sub>8</sub> থেকে হেক্সাডেসিমাল</span></h4>
    <p class="expand"><span>(203.25)<sub>8</sub></span> = 010 000 011 . 010 101 = 1000 0011 . 0101 0100 = (<b>83.54</b>)<sub>16</sub></p>
    <p class="final"><b>উত্তর</b>(203.25)<sub>8</sub> = (83.54)<sub>16</sub></p>
    <p class="prose">যাচাই: (203.25)<sub>8</sub> = ১৩১.৩২৮১২৫; (83.54)<sub>16</sub> = ১৩১ + ৫/১৬ + ৪/২৫৬ = ১৩১.৩২৮১২৫।</p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>স্ক্যানার; OCR ও OMR-এর পার্থক্য</span><i class="bub mk">৫</i></h3>
    <p class="inc-note">একই প্রশ্ন ১৪তম পরীক্ষায় এসেছে (প্রশ্ন ৮)।</p>
    <div data-include="wa-14-school-8" data-part="1" data-inner></div>
  </section>
</div>
<aside class="side">
  <p><b>অক্টাল থেকে হেক্সা</b>সরাসরি নয়, বাইনারির মাধ্যমে: আগে ৩ বিট, তারপর বিন্দু থেকে ৪ বিটের দল।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/number-system/arith">অধ্যায় ২ · গুণ ও ভাগ</a>, <a href="#/note/number-system/between">পদ্ধতির মধ্যে রূপান্তর</a></p>
  <p class="tags"><span class="xt">অধ্যায়: সংখ্যা পদ্ধতি</span><span class="xt">কম্পিউটার বেসিক</span></p>
</aside>
`,

10: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ওয়েব ব্রাউজার; ই-মেইল অ্যাড্রেসের অংশ</span><i class="bub mk">৫</i></h3>
    <p class="defn"><b>ওয়েব ব্রাউজার</b>যে অ্যাপ্লিকেশন সফটওয়্যার দিয়ে ইন্টারনেটের ওয়েবপেজ খুঁজে, এনে পর্দায় দেখা যায়, তাকে ওয়েব ব্রাউজার বলে। যেমন Google Chrome, Mozilla Firefox, Microsoft Edge, Safari।</p>
    <p class="inc-note">ই-মেইল অ্যাড্রেসের অংশটি ১৭তম পরীক্ষার ৮ নম্বর প্রশ্নের উত্তরেও আছে।</p>
    <div data-include="wa-17-school-8" data-part="1" data-inner></div>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>প্রিন্টার ও এর প্রকার; প্রধান ও সহায়ক স্মৃতির পার্থক্য</span><i class="bub mk">৫</i></h3>
    <p class="prose"><b>প্রিন্টার</b> এমন আউটপুট যন্ত্র, যা কম্পিউটারের লেখা ও ছবি কাগজে ছেপে স্থায়ী রূপ (হার্ড কপি) দেয়। ছাপার পদ্ধতি অনুসারে প্রিন্টার দুই প্রকার: <b>ইমপ্যাক্ট</b> (কাগজে আঘাত করে: ডট ম্যাট্রিক্স, ডেইজি হুইল, ড্রাম ও চেইন প্রিন্টার) এবং <b>নন-ইমপ্যাক্ট</b> (আঘাত ছাড়া: ইঙ্কজেট, লেজার, থার্মাল)। একবারে কতটুকু ছাপে সে অনুযায়ী ক্যারেক্টার, লাইন ও পেজ প্রিন্টার।</p>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>প্রধান স্মৃতি</th><th>সহায়ক স্মৃতি</th></tr></thead>
      <tbody>
        <tr><td>CPU-র সঙ্গে সম্পর্ক</td><td>CPU সরাসরি ব্যবহার করে</td><td>প্রধান স্মৃতির মাধ্যমে ব্যবহার করে</td></tr>
        <tr><td>গতি</td><td>দ্রুত</td><td>ধীর</td></tr>
        <tr><td>স্থায়িত্ব</td><td>RAM অস্থায়ী (ROM স্থায়ী)</td><td>স্থায়ী</td></tr>
        <tr><td>ধারণক্ষমতা</td><td>কম</td><td>অনেক বেশি</td></tr>
        <tr><td>প্রতি বাইটে দাম</td><td>বেশি</td><td>কম</td></tr>
        <tr><td>উদাহরণ</td><td>RAM, ROM, ক্যাশ</td><td>হার্ডডিস্ক, SSD, পেনড্রাইভ, CD, DVD</td></tr>
      </tbody>
    </table>
  </section>
</div>
<aside class="side">
  <p><b>প্রিন্টারের শ্রেণিবিভাগ</b>গাছ-চিত্রসহ বিস্তারিত আছে <a href="#/written/13-school/q2">১৩তম প্রশ্ন ২-এর উত্তরে</a>।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/computer-basics/mem">অধ্যায় ১ · স্মৃতি</a></p>
  <p class="tags"><span class="xt">অধ্যায়: ইন্টারনেট</span><span class="xt">কম্পিউটার বেসিক</span></p>
</aside>
`
};
