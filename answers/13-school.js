/* Model answers · ১৩তম শিক্ষক নিবন্ধন (২০১৬), সহকারী শিক্ষক (কম্পিউটার), বিষয় কোড ৩১৩.
   Same structure as answers/17-school.js. Questions 2, 3 and 5 carry ১৫ marks with no split printed, so their answers
   open with a split-note and suggested marks, as in the ১৮তম answers. Every calculation here was checked by script. */
(window.ICT_ANSWERS = window.ICT_ANSWERS || {})["13-school"] = {

1: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. BIOS; মেমোরির প্রকারভেদ (প্রধান ও সহায়ক)</span><i class="bub mk">১০</i></h3>
    <h4 class="sub-h"><span>১</span>BIOS</h4>
    <p class="defn"><b>সংজ্ঞা</b>BIOS (Basic Input/Output System) হলো মাদারবোর্ডের ROM বা ফ্ল্যাশ মেমোরিতে স্থায়ীভাবে লেখা একটি ফার্মওয়্যার, যা কম্পিউটার চালু হওয়ার মুহূর্ত থেকে অপারেটিং সিস্টেম লোড হওয়া পর্যন্ত কম্পিউটারকে চালায়।</p>
    <ul class="pts">
      <li><b>POST:</b> চালু হলেই (Power-On Self Test) CPU, RAM, কিবোর্ড, ডিস্কসহ যন্ত্রাংশ ঠিক আছে কি না পরীক্ষা করে; সমস্যা হলে বিপ শব্দ বা বার্তা দেয়।</li>
      <li><b>বুটিং:</b> কোন ডিস্ক থেকে চালু হবে তা খুঁজে বুটস্ট্র্যাপ লোডার দিয়ে অপারেটিং সিস্টেম স্মৃতিতে আনে।</li>
      <li><b>মৌলিক ইনপুট-আউটপুট:</b> কিবোর্ড, পর্দা ও ডিস্কের সঙ্গে প্রাথমিক যোগাযোগের নির্দেশ দেয়।</li>
      <li><b>সেটআপ:</b> তারিখ-সময়, বুটের ক্রমের মতো সেটিংস ব্যাটারিচালিত CMOS-এ রাখে। এখনকার কম্পিউটারে BIOS-এর আধুনিক রূপ UEFI।</li>
    </ul>
    <h4 class="sub-h"><span>২</span>মেমোরির প্রকারভেদ</h4>
    <p class="inc-note">এই অংশটি ১৮তম পরীক্ষার ২ নম্বর প্রশ্নের উত্তরেও আছে।</p>
    <div data-include="wa-18-school-2" data-part="2" data-inner></div>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. RAM ও Cache Memory-এর পার্থক্য</span><i class="bub mk">৫</i></h3>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>RAM</th><th>ক্যাশ মেমোরি</th></tr></thead>
      <tbody>
        <tr><td>অবস্থান</td><td>মাদারবোর্ডের মেমোরি স্লটে</td><td>CPU-র ভেতরে বা খুব কাছে (L1, L2, L3)</td></tr>
        <tr><td>প্রযুক্তি</td><td>সাধারণত DRAM</td><td>SRAM</td></tr>
        <tr><td>গতি</td><td>দ্রুত, তবে ক্যাশের চেয়ে ধীর</td><td>RAM-এর চেয়ে অনেক দ্রুত</td></tr>
        <tr><td>ধারণক্ষমতা</td><td>বড় (কয়েক GB)</td><td>ছোট (কয়েক KB থেকে কয়েক MB)</td></tr>
        <tr><td>দাম</td><td>প্রতি বাইটে কম</td><td>প্রতি বাইটে অনেক বেশি</td></tr>
        <tr><td>রিফ্রেশ</td><td>DRAM-কে বারবার রিফ্রেশ করতে হয়</td><td>রিফ্রেশ লাগে না</td></tr>
        <tr><td>কাজ</td><td>চলমান প্রোগ্রাম ও উপাত্ত রাখে</td><td>বারবার লাগা উপাত্ত রেখে CPU ও RAM-এর গতির ব্যবধান কমায়</td></tr>
      </tbody>
    </table>
    <p class="prose">দুটিই অস্থায়ী (বিদ্যুৎ গেলে মুছে যায়) এবং দুটিই প্রধান স্মৃতির অংশ।</p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ক. কম্পিউটার সংগঠন</span><i class="bub mk">১০</i></h3>
    <p class="inc-note">একই প্রশ্ন ১৬তম পরীক্ষায় এসেছে (প্রশ্ন ১)।</p>
    <div data-include="wa-16-school-1" data-part="1" data-inner></div>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. কম্পিউটারের প্রধান বৈশিষ্ট্য</span><i class="bub mk">৫</i></h3>
    <div data-include="wa-16-school-1" data-part="4" data-inner></div>
  </section>
</div>
<aside class="side">
  <p><b>BIOS এক লাইনে</b>ROM-এ লেখা ফার্মওয়্যার, যা চালু হলে যন্ত্রাংশ পরীক্ষা করে (POST) অপারেটিং সিস্টেম লোড করে।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/computer-basics/mem">অধ্যায় ১ · স্মৃতি</a>, <a href="#/note/computer-basics/org">সংগঠন</a></p>
  <p class="tags"><span class="xt">অধ্যায়: কম্পিউটার বেসিক</span></p>
</aside>
`,

2: `
<div class="ans-body">
  <p class="split-note">প্রশ্নে নম্বর ভাগ করা নেই। হাইব্রিডের কার্যপ্রণালিতে ৫ আর ডিজিটালের শ্রেণিবিভাগে ১০ ধরে লিখলে উত্তর গোছানো হয়।</p>
  <section class="part">
    <h3 class="part-h"><span>হাইব্রিড কম্পিউটারের কার্যপ্রণালি</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৫</i></h3>
    <p class="prose">হাইব্রিড কম্পিউটার অ্যানালগ ও ডিজিটাল দুই অংশ মিলিয়ে কাজ করে: অ্যানালগ অংশ অবিচ্ছিন্ন রাশি মাপে, আর ডিজিটাল অংশ সেই মাপ সংখ্যায় নিয়ে নির্ভুল হিসাব করে।</p>
    <ol class="chain">
      <li><b>সেন্সর</b><small>তাপ, চাপ, স্পন্দন</small></li>
      <li><b>অ্যানালগ অংশ</b><small>অবিচ্ছিন্ন সংকেত</small></li>
      <li><b>ADC</b><small>অ্যানালগ → ডিজিটাল</small></li>
      <li><b>ডিজিটাল অংশ</b><small>হিসাব, সিদ্ধান্ত</small></li>
    </ol>
    <ol class="algo">
      <li>সেন্সর রোগীর হৃৎস্পন্দন, রক্তচাপ বা তাপের মতো রাশি অবিচ্ছিন্নভাবে মাপে; অ্যানালগ অংশ এই সংকেত গ্রহণ করে দ্রুত প্রক্রিয়া করে।</li>
      <li>অ্যানালগ থেকে ডিজিটাল রূপান্তরক (ADC) অবিচ্ছিন্ন সংকেতকে নির্দিষ্ট সময় পরপর সংখ্যায় (০ ও ১) বদলায়।</li>
      <li>ডিজিটাল অংশ সংখ্যাগুলো স্মৃতিতে রাখে, হিসাব ও তুলনা করে সিদ্ধান্ত নেয়।</li>
      <li>ফল পর্দায় সংখ্যা বা লেখচিত্রে দেখায়; প্রয়োজনে ডিজিটাল থেকে অ্যানালগ রূপান্তরক (DAC) দিয়ে যন্ত্রকে নিয়ন্ত্রণ সংকেত পাঠায়, যেমন বিপদসংকেত বাজানো।</li>
    </ol>
    <p class="prose"><b>উদাহরণ:</b> হাসপাতালের ICU-তে রোগী পর্যবেক্ষণ যন্ত্র, ECG, আবহাওয়া পর্যবেক্ষণ, মহাকাশযান ও ক্ষেপণাস্ত্র নিয়ন্ত্রণ।</p>
  </section>
  <section class="part">
    <h3 class="part-h"><span>ডিজিটাল কম্পিউটারের শ্রেণিবিভাগ</span><i class="bub mk" title="প্রস্তাবিত নম্বর">১০</i></h3>
    <p class="inc-note">এই অংশটি ১৫তম পরীক্ষার ১ নম্বর প্রশ্নের উত্তরেও আছে।</p>
    <div data-include="wa-15-school-1" data-part="1" data-inner></div>
  </section>

  <p class="ans-or">অথবা</p>
  <p class="split-note">এখানেও নম্বর ভাগ করা নেই। MICR ও এর কার্যপ্রণালিতে ৬ আর প্রিন্টারের শ্রেণিবিভাগে ৯ ধরা যায়।</p>

  <section class="part">
    <h3 class="part-h"><span>MICR ও এর কার্যপ্রণালি</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৬</i></h3>
    <div data-include="wa-14-school-5" data-part="3" data-inner></div>
    <h4 class="sub-h"><span>কার্যপ্রণালি</span>চেক পড়ার ধাপ</h4>
    <ol class="algo">
      <li>চেক MICR পাঠক যন্ত্রে ঢোকানো হয়।</li>
      <li>যন্ত্রের লেখক হেড চেকের নিচের চৌম্বক কালির অক্ষরগুলোকে চুম্বকিত করে।</li>
      <li>রিড হেড প্রতিটি অক্ষর পার হওয়ার সময় তার চৌম্বক সংকেতের আকার মাপে; প্রতিটি অক্ষরের সংকেত আলাদা।</li>
      <li>সংকেতকে জানা নকশার সঙ্গে মিলিয়ে অক্ষর চেনে এবং চেক নম্বর, ব্যাংক-শাখার কোড ও হিসাব নম্বর কম্পিউটারে পাঠায়।</li>
      <li>কম্পিউটার লেনদেন হিসাব করে এবং চেকগুলো ব্যাংক অনুযায়ী আলাদা খোপে সাজিয়ে দেয়।</li>
    </ol>
  </section>
  <section class="part">
    <h3 class="part-h"><span>প্রিন্টারের শ্রেণিবিভাগ</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৯</i></h3>
    <p class="prose">ছাপার পদ্ধতি অনুসারে প্রিন্টার দুই প্রকার: কাগজে আঘাত করে ছাপে ইমপ্যাক্ট প্রিন্টার, আর আঘাত ছাড়াই ছাপে নন-ইমপ্যাক্ট প্রিন্টার।</p>
    <figure class="fig">
      <ul class="tree">
        <li><span class="t-root">প্রিন্টার</span>
          <ul>
            <li><span>ইমপ্যাক্ট প্রিন্টার</span>
              <ul>
                <li><span>ক্যারেক্টার প্রিন্টার <small>একবারে একটি অক্ষর</small></span><span class="leaf">ডট ম্যাট্রিক্স · ডেইজি হুইল</span></li>
                <li><span>লাইন প্রিন্টার <small>একবারে একটি লাইন</small></span><span class="leaf">ড্রাম · চেইন</span></li>
              </ul>
            </li>
            <li><span>নন-ইমপ্যাক্ট প্রিন্টার</span>
              <ul>
                <li><span>ইঙ্কজেট</span></li>
                <li><span>লেজার <small>একবারে একটি পৃষ্ঠা</small></span></li>
                <li><span>থার্মাল</span></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <figcaption>চিত্র: প্রিন্টারের শ্রেণিবিভাগ</figcaption>
    </figure>
    <ul class="pts">
      <li><b>ডট ম্যাট্রিক্স:</b> পিনগুলো কালির রিবনে আঘাত করে বিন্দু দিয়ে অক্ষর গড়ে; কার্বন কপি করা যায়, শব্দ বেশি।</li>
      <li><b>ডেইজি হুইল:</b> চাকার পাপড়িতে খোদাই করা অক্ষর রিবনে আঘাত করে; টাইপরাইটারের মতো স্পষ্ট ছাপা, তবে ধীর ও ছবি ছাপা যায় না।</li>
      <li><b>ড্রাম ও চেইন:</b> দ্রুতগতির লাইন প্রিন্টার; ঘুরন্ত ড্রাম বা চেইনে অক্ষর থাকে, একবারে পুরো লাইন ছাপে। বড় প্রতিষ্ঠানে বেশি ছাপার কাজে।</li>
      <li><b>ইঙ্কজেট:</b> ছোট ছোট নল দিয়ে কালির অতি সূক্ষ্ম ফোঁটা কাগজে ছিটিয়ে ছাপে; রঙিন ছবিতে ভালো, দাম কম।</li>
      <li><b>লেজার:</b> লেজার রশ্মি ও টোনারে একবারে পুরো পৃষ্ঠা ছাপে; দ্রুত, নিঃশব্দ, খুব স্পষ্ট।</li>
      <li><b>থার্মাল:</b> তাপে রং বদলায় এমন বিশেষ কাগজে তাপ দিয়ে ছাপে; দোকানের রসিদ ও ATM স্লিপে।</li>
    </ul>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>ইমপ্যাক্ট</th><th>নন-ইমপ্যাক্ট</th></tr></thead>
      <tbody>
        <tr><td>ছাপার উপায়</td><td>কাগজে আঘাত করে</td><td>আঘাত ছাড়া (কালি ছিটিয়ে, লেজার বা তাপে)</td></tr>
        <tr><td>শব্দ</td><td>বেশি</td><td>প্রায় নিঃশব্দ</td></tr>
        <tr><td>গতি ও মান</td><td>ধীর, ছাপা কম স্পষ্ট</td><td>দ্রুত, খুব স্পষ্ট</td></tr>
        <tr><td>কার্বন কপি</td><td>করা যায়</td><td>করা যায় না</td></tr>
      </tbody>
    </table>
  </section>
</div>
<aside class="side">
  <p><b>প্রিন্টারের কার্যনীতি</b>ডট ম্যাট্রিক্স ও লেজারের চিত্রসহ কার্যনীতি আছে <a href="#/written/14-school/q2">১৪তম প্রশ্ন ২-এর উত্তরে</a>।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/computer-basics/type">অধ্যায় ১ · প্রকারভেদ</a>, <a href="#/note/computer-basics/io">ইনপুট ও আউটপুট</a></p>
  <p class="tags"><span class="xt">অধ্যায়: কম্পিউটার বেসিক</span></p>
</aside>
`,

3: `
<div class="ans-body">
  <p class="split-note">প্রশ্নে নম্বর ভাগ করা নেই। বৈশিষ্ট্যে ৫ আর রূপান্তরে ১০ ধরে লিখুন।</p>
  <section class="part">
    <h3 class="part-h"><span>সংখ্যা পদ্ধতির বৈশিষ্ট্য</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৫</i></h3>
    <ul class="pts">
      <li>প্রতিটি সংখ্যা পদ্ধতির একটি <b>ভিত্তি</b> থাকে; ভিত্তি মানে ঐ পদ্ধতিতে ব্যবহৃত মোট আলাদা অঙ্কের সংখ্যা।</li>
      <li>অঙ্ক থাকে ০ থেকে (ভিত্তি − ১) পর্যন্ত; সবচেয়ে বড় অঙ্ক ভিত্তির চেয়ে ১ কম। যেমন অক্টালে ০–৭, ৮ বলে কোনো অঙ্ক নেই।</li>
      <li>পজিশনাল পদ্ধতিতে প্রতিটি অবস্থানের একটি <b>স্থানীয় মান</b> থাকে, যা ভিত্তির ঘাত: বিন্দুর বাঁয়ে b<sup>0</sup>, b<sup>1</sup>, b<sup>2</sup> …, ডানে b<sup>−1</sup>, b<sup>−2</sup> …।</li>
      <li>সংখ্যার মান = প্রতিটি অঙ্ক × তার স্থানীয় মান, সবগুলোর যোগফল।</li>
      <li>কোনো ঘরের যোগফল ভিত্তির সমান হলে সেখানে ০ বসে এবং বাঁয়ের ঘরে ১ যায় (হাতে ১): দশমিকে 9 + 1 = 10, বাইনারিতে 1 + 1 = 10।</li>
      <li>ভিত্তি সংখ্যার ডান পাশে নিচে লেখা হয়: (101)<sub>2</sub> = ৫, কিন্তু (101)<sub>10</sub> = একশো এক; একই অঙ্ক, ভিন্ন মান।</li>
    </ul>
  </section>
  <section class="part">
    <h3 class="part-h"><span>(101.10)<sub>10</sub> থেকে বাইনারি ও হেক্সাডেসিমাল</span><i class="bub mk" title="প্রস্তাবিত নম্বর">১০</i></h3>
    <p class="prose">(101.10)<sub>10</sub> = (101.1)<sub>10</sub>; পূর্ণ অংশ ১০১, ভগ্নাংশ ০.১।</p>
    <h4 class="sub-h"><span>ধাপ ১</span>বাইনারি</h4>
    <div class="work">
      <div class="ladder" role="img" aria-label="১০১-কে ২ দিয়ে বারবার ভাগ। ভাগশেষ ১, ০, ১, ০, ০, ১, ১। নিচ থেকে পড়লে 1100101।">
        <span class="dv">2</span><span class="qt">101</span><span class="rm">1</span>
        <span class="dv">2</span><span class="qt">50</span><span class="rm">0</span>
        <span class="dv">2</span><span class="qt">25</span><span class="rm">1</span>
        <span class="dv">2</span><span class="qt">12</span><span class="rm">0</span>
        <span class="dv">2</span><span class="qt">6</span><span class="rm">0</span>
        <span class="dv">2</span><span class="qt">3</span><span class="rm">1</span>
        <span class="dv">2</span><span class="qt">1</span><span class="rm">1</span>
        <span class="dv"></span><span class="qt end">0</span><span class="rm"></span>
      </div>
      <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 146 V8 M5 15 L12 6 L19 15"/></svg><span>নিচ থেকে পড়ুন</span></div>
      <p class="work-res">(101)<sub>10</sub> = (<b>1100101</b>)<sub>2</sub></p>
    </div>
    <div class="work">
      <table class="truth trace">
        <thead><tr><th>ভগ্নাংশ × ২</th><th>পূর্ণ অংশ</th></tr></thead>
        <tbody><tr><td>0.1 × 2 = 0.2</td><td>0</td></tr><tr><td>0.2 × 2 = 0.4</td><td>0</td></tr><tr><td>0.4 × 2 = 0.8</td><td>0</td></tr><tr><td>0.8 × 2 = 1.6</td><td>1</td></tr><tr><td>0.6 × 2 = 1.2</td><td>1</td></tr><tr><td>0.2 × 2 = 0.4</td><td>0</td></tr><tr><td>0.4 × 2 = 0.8</td><td>0</td></tr><tr><td>0.8 × 2 = 1.6</td><td>1</td></tr></tbody>
      </table>
      <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 4 V142 M5 135 L12 144 L19 135"/></svg><span>ওপর থেকে পড়ুন</span></div>
      <p class="work-res">(0.1)<sub>10</sub> ≈ (<b>0.00011001</b>)<sub>2</sub></p>
    </div>
    <p class="prose">ষষ্ঠ ধাপে ভগ্নাংশ আবার ০.২ হয়েছে, তাই 0011 অংশটি বারবার ফিরে আসবে; ০.১ বাইনারিতে কখনো শেষ হয় না। আট ঘর পর্যন্ত নেওয়া হলো।</p>
    <h4 class="sub-h"><span>ধাপ ২</span>হেক্সাডেসিমাল</h4>
    <p class="expand"><span>পূর্ণ অংশ</span> 0110 0101 = (<b>65</b>)<sub>16</sub></p>
    <table class="truth trace">
      <thead><tr><th>ভগ্নাংশ × ১৬</th><th>পূর্ণ অংশ</th></tr></thead>
      <tbody><tr><td>0.1 × 16 = 1.6</td><td>1</td></tr><tr><td>0.6 × 16 = 9.6</td><td>9</td></tr><tr><td>0.6 × 16 = 9.6</td><td>9</td></tr><tr><td>0.6 × 16 = 9.6</td><td>9</td></tr></tbody>
    </table>
    <p class="final"><b>উত্তর</b>(101.10)<sub>10</sub> ≈ (1100101.00011001)<sub>2</sub> ≈ (65.1999)<sub>16</sub></p>
    <p class="prose">যাচাই: (1100101)<sub>2</sub> = ৬৪ + ৩২ + ৪ + ১ = ১০১; (65)<sub>16</sub> = ৬ × ১৬ + ৫ = ১০১। হেক্সায় ৯ অঙ্কটি বারবার আসে।</p>
  </section>

  <p class="ans-or">অথবা</p>
  <p class="split-note">এখানেও নম্বর ভাগ করা নেই। পার্থক্যে ৫ আর যোগে ১০ ধরা যায়।</p>

  <section class="part">
    <h3 class="part-h"><span>BCD ও বাইনারি সংখ্যা পদ্ধতির পার্থক্য</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৫</i></h3>
    <div data-include="wa-17-school-4" data-part="4" data-inner></div>
  </section>
  <section class="part">
    <h3 class="part-h"><span>(567.76)<sub>8</sub> ও (F9C.D3)<sub>16</sub>-এর যোগফল হেক্সাডেসিমালে</span><i class="bub mk" title="প্রস্তাবিত নম্বর">১০</i></h3>
    <h4 class="sub-h"><span>ধাপ ১</span><span>(567.76)<sub>8</sub> থেকে হেক্সাডেসিমাল</span></h4>
    <p class="prose">প্রতিটি অক্টাল অঙ্কের বদলে ৩ বিট, তারপর বিন্দু থেকে দুই দিকে ৪ বিট করে দল:</p>
    <p class="expand"><span>(567.76)<sub>8</sub></span> = 101 110 111 . 111 110 = 1 0111 0111 . 1111 1000 = (<b>177.F8</b>)<sub>16</sub></p>
    <h4 class="sub-h"><span>ধাপ ২</span>হেক্সাডেসিমালে যোগ</h4>
    <div class="bcalc">
      <code>  F9C.D3</code><span>(F9C.D3)<sub>16</sub></span>
      <code class="add">+ 177.F8</code><span>(567.76)<sub>8</sub></span>
      <code class="res"> 1114.CB</code><span>যোগফল</span>
    </div>
    <table class="truth trace">
      <thead><tr><th>ঘর</th><th>যোগ</th><th>বসে</th><th>হাতে</th></tr></thead>
      <tbody><tr><td>ডানের ভগ্নাংশ</td><td>3 + 8 = ১১</td><td>B</td><td>০</td></tr><tr><td>বাঁয়ের ভগ্নাংশ</td><td>D + F = ১৩ + ১৫ = ২৮ = ১৬ + ১২</td><td>C</td><td>১</td></tr><tr><td>একক</td><td>C + 7 + ১ = ১২ + ৭ + ১ = ২০ = ১৬ + ৪</td><td>4</td><td>১</td></tr><tr><td>ষোলো</td><td>9 + 7 + ১ = ১৭ = ১৬ + ১</td><td>1</td><td>১</td></tr><tr><td>২৫৬</td><td>F + 1 + ১ = ১৭ = ১৬ + ১</td><td>1</td><td>১</td></tr><tr><td>শেষ</td><td>হাতের ১</td><td>1</td><td>–</td></tr></tbody>
    </table>
    <p class="final"><b>উত্তর</b>(567.76)<sub>8</sub> + (F9C.D3)<sub>16</sub> = (1114.CB)<sub>16</sub></p>
    <p class="prose">যাচাই: (567.76)<sub>8</sub> = ৩৭৫.৯৬৮৭৫, (F9C.D3)<sub>16</sub> = ৩৯৯৬.৮২৪২১৮৭৫, যোগফল ৪৩৭২.৭৯২৯৬৮৭৫; আর (1114.CB)<sub>16</sub> = ৪০৯৬ + ২৫৬ + ১৬ + ৪ + ২০৩/২৫৬ = ৪৩৭২.৭৯২৯৬৮৭৫।</p>
  </section>
</div>
<aside class="side">
  <p><b>হেক্সা যোগে</b>প্রতিটি ঘরে যোগফল ১৬ বা বেশি হলে ১৬ বাদ দিয়ে বসান, হাতে ১; ছোট ছক করে দেখালে ভুল কম হয়।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/number-system/idea">অধ্যায় ২ · ধারণা ও ভিত্তি</a>, <a href="#/note/number-system/convert">দশমিক থেকে রূপান্তর</a>, <a href="#/note/number-system/between">পদ্ধতির মধ্যে রূপান্তর</a></p>
  <p class="tags"><span class="xt">অধ্যায়: সংখ্যা পদ্ধতি</span><span class="xt">উপাত্ত উপস্থাপন</span></p>
</aside>
`,

4: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. ANSI-র সংজ্ঞা; অপারেটিং সিস্টেমের প্রকারভেদ</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>ANSI-র সংজ্ঞা</b>“Operating system is a software which controls the execution of computer programs and which may provide scheduling, debugging, input-output control, accounting, compilation, storage assignment, data management and related services.” অর্থাৎ অপারেটিং সিস্টেম এমন সফটওয়্যার, যা কম্পিউটারের প্রোগ্রামগুলোর চালনা নিয়ন্ত্রণ করে এবং কাজের সময়সূচি নির্ধারণ, ত্রুটি সংশোধন, ইনপুট-আউটপুট নিয়ন্ত্রণ, হিসাব রাখা, কম্পাইল করা, স্মৃতিতে জায়গা দেওয়া, উপাত্ত ব্যবস্থাপনা ও এ-সংক্রান্ত সেবা দেয়।</p>
    <figure class="fig">
      <ul class="tree">
        <li><span class="t-root">অপারেটিং সিস্টেম</span>
          <ul>
            <li><span>কাজের ধরন অনুসারে</span><span class="leaf">ব্যাচ · মাল্টিপ্রোগ্রামিং · টাইম শেয়ারিং · মাল্টিপ্রসেসিং · রিয়েল টাইম · ডিস্ট্রিবিউটেড · নেটওয়ার্ক</span></li>
            <li><span>ব্যবহারকারী অনুসারে</span><span class="leaf">একক ব্যবহারকারী · বহু ব্যবহারকারী</span></li>
            <li><span>ইন্টারফেস অনুসারে</span><span class="leaf">বর্ণভিত্তিক (CUI) · চিত্রভিত্তিক (GUI)</span></li>
          </ul>
        </li>
      </ul>
      <figcaption>চিত্র: অপারেটিং সিস্টেমের প্রকারভেদ</figcaption>
    </figure>
    <ul class="pts">
      <li><b>ব্যাচ প্রসেসিং:</b> একই ধরনের কাজ জমিয়ে ব্যাচ বানিয়ে ব্যবহারকারীর হস্তক্ষেপ ছাড়া একটির পর একটি চালায়; যেমন বেতন, বিল।</li>
      <li><b>মাল্টিপ্রোগ্রামিং:</b> স্মৃতিতে একাধিক প্রোগ্রাম রাখে; একটি ইনপুট-আউটপুটের জন্য অপেক্ষা করলে CPU আরেকটি চালায়, তাই CPU অলস থাকে না।</li>
      <li><b>টাইম শেয়ারিং বা মাল্টিটাস্কিং:</b> CPU-র সময় ছোট টাইম স্লাইসে ভাগ করে পালাক্রমে অনেক ব্যবহারকারী বা প্রোগ্রামকে দেয়; সবাই দ্রুত সাড়া পান। যেমন UNIX, Windows।</li>
      <li><b>মাল্টিপ্রসেসিং:</b> একাধিক প্রসেসরকে একসঙ্গে নিয়ন্ত্রণ করে কাজ ভাগ করে দেয়।</li>
      <li><b>রিয়েল টাইম:</b> নির্দিষ্ট সময়সীমার মধ্যে সাড়া দিতেই হবে; যেমন বিমান নিয়ন্ত্রণ, কারখানার রোবট, ICU-র যন্ত্র।</li>
      <li><b>ডিস্ট্রিবিউটেড:</b> নেটওয়ার্কে যুক্ত অনেক কম্পিউটারকে একটি কম্পিউটারের মতো চালায়।</li>
      <li><b>নেটওয়ার্ক:</b> সার্ভার থেকে নেটওয়ার্কের কম্পিউটার, ফাইল ও প্রিন্টার ভাগাভাগি নিয়ন্ত্রণ করে; যেমন Windows Server, Linux সার্ভার।</li>
      <li><b>একক ও বহু ব্যবহারকারী:</b> MS-DOS একক ব্যবহারকারী; UNIX একসঙ্গে বহু ব্যবহারকারী।</li>
      <li><b>CUI ও GUI:</b> কমান্ড টাইপ করে কাজ (DOS) অথবা আইকন-মেনুতে ক্লিক করে কাজ (Windows, macOS)।</li>
    </ul>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. ব্যাচ প্রসেসিং ও টাইম শেয়ারিং অপারেটিং সিস্টেমের পার্থক্য</span><i class="bub mk">৫</i></h3>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>ব্যাচ প্রসেসিং</th><th>টাইম শেয়ারিং</th></tr></thead>
      <tbody>
        <tr><td>কাজ চালানো</td><td>একটি কাজ পুরো শেষ হলে পরেরটি</td><td>প্রতিটি কাজ ছোট টাইম স্লাইসে পালাক্রমে</td></tr>
        <tr><td>ব্যবহারকারীর যোগাযোগ</td><td>চলার সময় থাকে না</td><td>সরাসরি থাকে (ইন্টারঅ্যাকটিভ)</td></tr>
        <tr><td>সাড়া পাওয়ার সময়</td><td>দীর্ঘ; ফল আসে ব্যাচ শেষে</td><td>খুব কম; প্রায় সঙ্গে সঙ্গে</td></tr>
        <tr><td>টাইম স্লাইস</td><td>নেই</td><td>আছে</td></tr>
        <tr><td>ব্যবহারকারী</td><td>একসঙ্গে একজনের কাজ</td><td>একসঙ্গে অনেকে</td></tr>
        <tr><td>উপযোগী কাজ</td><td>বড় ও পুনরাবৃত্ত কাজ (বেতন, বিল)</td><td>অনেকের ছোট ছোট কাজ, প্রশ্নোত্তর</td></tr>
      </tbody>
    </table>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ক. NAND সার্বজনীন গেট: প্রমাণ</span><i class="bub mk">১০</i></h3>
    <p class="inc-note">একই প্রশ্ন ১৬তম পরীক্ষায় এসেছে (প্রশ্ন ৫)।</p>
    <div data-include="wa-16-school-5" data-part="3" data-inner></div>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. <span class="ov">A</span>B + A<span class="ov">B</span>-এর লজিক চিত্র ও NAND দিয়ে বাস্তবায়ন</span><i class="bub mk">৫</i></h3>
    <p class="prose"><span class="m">Y = <span class="ov">A</span>B + A<span class="ov">B</span></span> হলো X-OR গেইট, Y = A ⊕ B।</p>
    <h4 class="sub-h"><span>১</span>মৌলিক গেইটে লজিক চিত্র</h4>
    <div data-include="wa-16-school-5" data-part="4" data-inner></div>
    <h4 class="sub-h"><span>২</span>শুধু NAND দিয়ে</h4>
    <p class="prose">চারটি NAND গেইটেই X-OR তৈরি হয়: প্রথমটি N<sub>1</sub> = <span class="ov">AB</span>; দ্বিতীয়টি A ও N<sub>1</sub> থেকে, তৃতীয়টি B ও N<sub>1</sub> থেকে; চতুর্থটি দ্বিতীয় ও তৃতীয়টির আউটপুট থেকে Y দেয়।</p>
    <figure class="fig wide mid">
      <svg viewBox="0 0 540 190" role="img" aria-label="চারটি NAND গেইটে X-OR: প্রথম NAND-এ A ও B; দ্বিতীয় NAND-এ A ও প্রথমটির আউটপুট; তৃতীয় NAND-এ B ও প্রথমটির আউটপুট; চতুর্থ NAND-এ দ্বিতীয় ও তৃতীয়টির আউটপুট, যা থেকে Y।">
        <text x="6" y="44" text-anchor="start">A</text><path class="w" d="M20 40H290"/><circle class="j" cx="60" cy="40" r="2.6"/><path class="w" d="M60 40V88H150"/>
        <text x="6" y="164" text-anchor="start">B</text><path class="w" d="M20 160H290"/><circle class="j" cx="80" cy="160" r="2.6"/><path class="w" d="M80 160V112H150"/>
        <path class="w" d="M203 100H240"/><circle class="j" cx="240" cy="100" r="2.6"/><path class="w" d="M240 100V66H290M240 100V134H290"/>
        <text x="206" y="92" text-anchor="start"><tspan text-decoration="overline">AB</tspan></text>
        <path class="w" d="M343 53H380V88H420"/><path class="w" d="M343 147H380V112H420"/>
        <path class="w" d="M473 100H510"/><text x="514" y="104" text-anchor="start">Y</text>
        <path class="gb" d="M150 75H170A25 25 0 0 1 170 125H150Z"/><circle class="gb" cx="199" cy="100" r="4"/><text class="cap" x="166" y="104" text-anchor="middle">১</text>
        <path class="gb" d="M290 28H310A25 25 0 0 1 310 78H290Z"/><circle class="gb" cx="339" cy="53" r="4"/><text class="cap" x="306" y="57" text-anchor="middle">২</text>
        <path class="gb" d="M290 122H310A25 25 0 0 1 310 172H290Z"/><circle class="gb" cx="339" cy="147" r="4"/><text class="cap" x="306" y="151" text-anchor="middle">৩</text>
        <path class="gb" d="M420 75H440A25 25 0 0 1 440 125H420Z"/><circle class="gb" cx="469" cy="100" r="4"/><text class="cap" x="436" y="104" text-anchor="middle">৪</text>
      </svg>
      <figcaption>চিত্র: চারটি NAND দিয়ে Y = A ⊕ B</figcaption>
    </figure>
    <ul class="eqs">
      <li><span>Y = <span class="ov"><span class="ov">A·<span class="ov">AB</span></span> · <span class="ov">B·<span class="ov">AB</span></span></span></span></li>
      <li><span>= A·<span class="ov">AB</span> + B·<span class="ov">AB</span></span><small>ডি মরগান ও দ্বি-পূরক</small></li>
      <li><span>= (A + B)(<span class="ov">A</span> + <span class="ov">B</span>)</span><small><span class="ov">AB</span> = <span class="ov">A</span> + <span class="ov">B</span></small></li>
      <li><span>= A<span class="ov">B</span> + <span class="ov">A</span>B</span><small>A<span class="ov">A</span> = 0, B<span class="ov">B</span> = 0</small></li>
    </ul>
  </section>
</div>
<aside class="side">
  <p><b>ANSI-র সংজ্ঞা</b>ইংরেজি বাক্যটি হুবহু লিখে পাশে বাংলা অর্থ দিলে পূর্ণ নম্বর পাওয়া সহজ।</p>
  <p class="tags"><span class="xt">অধ্যায়: অপারেটিং সিস্টেম</span><span class="xt">লজিক সার্কিট ও লজিক গেট</span></p>
</aside>
`,

5: `
<div class="ans-body">
  <p class="split-note">প্রশ্নে নম্বর ভাগ করা নেই। তিন ধরনের নেটওয়ার্কে ১০ আর OCR-OMR পার্থক্যে ৫ ধরে লিখুন।</p>
  <section class="part">
    <h3 class="part-h"><span>ইন্টারনেট, ইন্ট্রানেট ও এক্সট্রানেট</span><i class="bub mk" title="প্রস্তাবিত নম্বর">১০</i></h3>
    <h4 class="sub-h"><span>১</span>ইন্টারনেট</h4>
    <p class="prose">বিশ্বজুড়ে কোটি কোটি কম্পিউটার ও নেটওয়ার্ক TCP/IP প্রোটোকলে যুক্ত হয়ে যে উন্মুক্ত নেটওয়ার্কের নেটওয়ার্ক তৈরি করেছে, তাকে ইন্টারনেট বলে। যে কেউ ইন্টারনেট সংযোগ নিয়ে ওয়েব, ই-মেইল, ভিডিও কল ব্যবহার করতে পারেন; এর কোনো একক মালিক নেই।</p>
    <h4 class="sub-h"><span>২</span>ইন্ট্রানেট</h4>
    <p class="prose">একটি প্রতিষ্ঠানের ভেতরের ব্যক্তিগত নেটওয়ার্ক, যা ইন্টারনেটের প্রযুক্তি (TCP/IP, ওয়েবপেজ, ব্রাউজার, ই-মেইল) ব্যবহার করে, কিন্তু শুধু ঐ প্রতিষ্ঠানের কর্মীরা ব্যবহার করতে পারেন। যেমন একটি ব্যাংকের অভ্যন্তরীণ নোটিশ, ছুটির আবেদন ও নথির ওয়েবসাইট। ফায়ারওয়াল বাইরের প্রবেশ ঠেকায়।</p>
    <h4 class="sub-h"><span>৩</span>এক্সট্রানেট</h4>
    <p class="prose">ইন্ট্রানেটের যে অংশে প্রতিষ্ঠানের বাইরের নির্দিষ্ট অংশীদার (সরবরাহকারী, ডিলার, গ্রাহক) পাসওয়ার্ড দিয়ে নিয়ন্ত্রিতভাবে ঢুকতে পারে, তাকে এক্সট্রানেট বলে। যেমন একটি ওষুধ কোম্পানির ডিলাররা অনলাইনে অর্ডার দেন ও মজুত দেখেন।</p>
    <figure class="fig flow">
      <svg viewBox="0 0 460 240" role="img" aria-label="তিনটি নেটওয়ার্কের সম্পর্ক: সবচেয়ে বাইরে ইন্টারনেট, সবার জন্য উন্মুক্ত; তার ভেতরে এক্সট্রানেট, প্রতিষ্ঠান ও অনুমোদিত অংশীদার; সবচেয়ে ভেতরে ইন্ট্রানেট, শুধু প্রতিষ্ঠানের কর্মী।">
        <rect class="fs" x="10" y="10" width="440" height="220"/><text x="230" y="32">ইন্টারনেট</text><text class="sm" x="230" y="52">সবার জন্য উন্মুক্ত</text>
        <rect class="fs" x="50" y="66" width="360" height="150"/><text x="230" y="86">এক্সট্রানেট</text><text class="sm" x="230" y="106">প্রতিষ্ঠান ও অনুমোদিত অংশীদার</text>
        <rect class="fs fd" x="105" y="122" width="250" height="80"/><text x="230" y="150">ইন্ট্রানেট</text><text class="sm" x="230" y="176">শুধু প্রতিষ্ঠানের কর্মী</text>
      </svg>
      <figcaption>চিত্র: ইন্টারনেট, এক্সট্রানেট ও ইন্ট্রানেটের পরিধি</figcaption>
    </figure>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>ইন্টারনেট</th><th>ইন্ট্রানেট</th><th>এক্সট্রানেট</th></tr></thead>
      <tbody>
        <tr><td>ব্যবহারকারী</td><td>যে কেউ</td><td>শুধু প্রতিষ্ঠানের কর্মী</td><td>কর্মী ও অনুমোদিত অংশীদার</td></tr>
        <tr><td>পরিধি</td><td>সারা বিশ্ব</td><td>প্রতিষ্ঠানের ভেতর</td><td>প্রতিষ্ঠান ও অংশীদার</td></tr>
        <tr><td>নিরাপত্তা</td><td>কম</td><td>সবচেয়ে বেশি</td><td>মাঝারি, পাসওয়ার্ডে নিয়ন্ত্রিত</td></tr>
        <tr><td>মালিকানা</td><td>কারও একার নয়</td><td>প্রতিষ্ঠানের</td><td>প্রতিষ্ঠানের</td></tr>
      </tbody>
    </table>
  </section>
  <section class="part">
    <h3 class="part-h"><span>OCR ও OMR-এর পার্থক্য</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৫</i></h3>
    <p class="inc-note">একই পার্থক্য ১৪তম পরীক্ষার ৮ নম্বর প্রশ্নের উত্তরেও আছে।</p>
    <div data-include="wa-14-school-8" data-part="1" data-inner></div>
  </section>

  <p class="ans-or">অথবা</p>
  <p class="split-note">এখানেও নম্বর ভাগ করা নেই। উপাত্ত প্রক্রিয়াকরণে ৩, পার্থক্যে ৫ আর ফ্লোচার্টে ৭ ধরা যায়।</p>

  <section class="part">
    <h3 class="part-h"><span>উপাত্ত প্রক্রিয়াকরণ</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৩</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>নির্দিষ্ট লক্ষ্যে উপাত্ত সংগ্রহ করে তা যাচাই, সাজানো, হিসাব ও বিশ্লেষণের মাধ্যমে অর্থবহ তথ্যে রূপান্তর করার প্রক্রিয়াকে উপাত্ত প্রক্রিয়াকরণ বলে। এর ধাপ: সংগ্রহ, প্রস্তুতি ও যাচাই, ইনপুট, প্রক্রিয়াকরণ, আউটপুট ও সংরক্ষণ।</p>
    <ol class="chain">
      <li><b>উপাত্ত</b><small>৭৫, ৬২, ৮৮</small></li>
      <li><b>প্রক্রিয়াকরণ</b><small>যোগ ÷ ৩</small></li>
      <li><b>তথ্য</b><small>গড় ৭৫</small></li>
    </ol>
  </section>
  <section class="part">
    <h3 class="part-h"><span>অ্যালগরিদম ও ফ্লোচার্টের পার্থক্য</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৫</i></h3>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>অ্যালগরিদম</th><th>ফ্লোচার্ট</th></tr></thead>
      <tbody>
        <tr><td>প্রকাশ</td><td>ধাপে ধাপে লেখা নির্দেশ</td><td>প্রতীক ও তীরচিহ্নে আঁকা চিত্র</td></tr>
        <tr><td>বোঝা</td><td>পড়ে বুঝতে হয়</td><td>এক নজরে বোঝা যায়</td></tr>
        <tr><td>তৈরি</td><td>সহজ ও দ্রুত</td><td>আঁকতে সময় বেশি লাগে</td></tr>
        <tr><td>বদলানো</td><td>সহজ</td><td>কঠিন; নতুন করে আঁকতে হয়</td></tr>
        <tr><td>জটিল যুক্তি</td><td>সহজে লেখা যায়</td><td>শাখা বেশি হলে চিত্র জটিল হয়ে যায়</td></tr>
        <tr><td>ক্রম</td><td>সাধারণত আগে লেখা হয়</td><td>অ্যালগরিদমের চিত্ররূপ</td></tr>
      </tbody>
    </table>
  </section>
  <section class="part">
    <h3 class="part-h"><span>তিনটি সংখ্যার মধ্যে ছোট সংখ্যা নির্ণয়ের ফ্লোচার্ট</span><i class="bub mk" title="প্রস্তাবিত নম্বর">৭</i></h3>
    <figure class="fig flow">
      <svg viewBox="0 0 460 520" role="img" aria-label="ফ্লোচার্ট: শুরু; A, B, C ইনপুট; A ছোট B-এর চেয়ে? হ্যাঁ হলে A ছোট C-এর চেয়ে? হ্যাঁ হলে A প্রিন্ট, না হলে C প্রিন্ট। প্রথম প্রশ্নে না হলে B ছোট C-এর চেয়ে? হ্যাঁ হলে B প্রিন্ট, না হলে C প্রিন্ট। তারপর শেষ।">
        <defs><marker id="min13-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
        <rect class="fs" x="170" y="10" width="120" height="40" rx="20"/><text x="230" y="31">শুরু</text>
        <path class="fa" d="M230 50V76" marker-end="url(#min13-ah)"/>
        <path class="fs" d="M170 78H314L290 120H146Z"/><text x="230" y="99">A, B, C ইনপুট</text>
        <path class="fa" d="M230 120V146" marker-end="url(#min13-ah)"/>
        <path class="fs fd" d="M230 148L310 190L230 232L150 190Z"/><text x="230" y="190">A &lt; B ?</text>
        <path class="fa" d="M150 190H90V246" marker-end="url(#min13-ah)"/><text class="yn" x="120" y="178">হ্যাঁ</text>
        <path class="fa" d="M310 190H370V246" marker-end="url(#min13-ah)"/><text class="yn" x="340" y="178">না</text>
        <path class="fs fd" d="M90 248L160 290L90 332L20 290Z"/><text x="90" y="290">A &lt; C ?</text>
        <path class="fs fd" d="M370 248L440 290L370 332L300 290Z"/><text x="370" y="290">B &lt; C ?</text>
        <path class="fa" d="M160 290H300"/><path class="fa" d="M230 290V376" marker-end="url(#min13-ah)"/>
        <text class="yn" x="182" y="278">না</text><text class="yn" x="278" y="278">না</text>
        <path class="fa" d="M90 332V376" marker-end="url(#min13-ah)"/><text class="yn" x="110" y="356">হ্যাঁ</text>
        <path class="fa" d="M370 332V376" marker-end="url(#min13-ah)"/><text class="yn" x="390" y="356">হ্যাঁ</text>
        <path class="fs" d="M45 378H163L145 418H27Z"/><text x="95" y="398">A প্রিন্ট</text>
        <path class="fs" d="M185 378H303L285 418H167Z"/><text x="235" y="398">C প্রিন্ট</text>
        <path class="fs" d="M325 378H443L425 418H307Z"/><text x="375" y="398">B প্রিন্ট</text>
        <path class="fa" d="M90 418V490H168" marker-end="url(#min13-ah)"/>
        <path class="fa" d="M230 418V468" marker-end="url(#min13-ah)"/>
        <path class="fa" d="M370 418V490H292" marker-end="url(#min13-ah)"/>
        <rect class="fs" x="170" y="470" width="120" height="40" rx="20"/><text x="230" y="491">শেষ</text>
      </svg>
      <figcaption>চিত্র: তিনটি সংখ্যার মধ্যে ছোট সংখ্যা নির্ণয়ের ফ্লোচার্ট</figcaption>
    </figure>
    <p class="prose">যাচাই: A = 7, B = 3, C = 5 হলে 7 &lt; 3 মিথ্যা, তাই ডানে; 3 &lt; 5 সত্য, তাই B = 3 প্রিন্ট হয়, যা সবচেয়ে ছোট।</p>
  </section>
</div>
<aside class="side">
  <p><b>পরিধির চিত্র</b>তিনটি নেটওয়ার্ক একটির ভেতরে আরেকটি আঁকুন: সবচেয়ে ছোট ইন্ট্রানেট, সবচেয়ে বড় ইন্টারনেট।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/computer-basics/io">অধ্যায় ১ · ইনপুট ও আউটপুট</a>, <a href="#/note/data-representation/proc">অধ্যায় ৩ · উপাত্ত প্রক্রিয়াকরণ</a></p>
  <p class="tags"><span class="xt">অধ্যায়: ইন্টারনেট</span><span class="xt">কম্পিউটার বেসিক</span><span class="xt">অ্যালগরিদম ও ফ্লোচার্ট</span></p>
</aside>
`,

6: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>১ + ৩ + ৫ + … + N ধারার যোগফলের ফ্লোচার্ট</span><i class="bub mk">৫</i></h3>
    <p class="prose">i = 1 থেকে শুরু করে প্রতিবার ২ বাড়িয়ে বিজোড় সংখ্যাগুলো যোগ করি, যতক্ষণ i ≤ N।</p>
    <figure class="fig flow">
      <svg viewBox="0 0 400 556" role="img" aria-label="ফ্লোচার্ট: শুরু; N ইনপুট; Sum = 0, i = 1; i ছোট বা সমান N? হ্যাঁ হলে Sum = Sum + i, i = i + 2, তারপর আবার যাচাই; না হলে Sum প্রিন্ট; শেষ।">
        <defs><marker id="odd13-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
        <rect class="fs" x="110" y="10" width="120" height="40" rx="20"/><text x="170" y="31">শুরু</text>
        <path class="fa" d="M170 50V76" marker-end="url(#odd13-ah)"/>
        <path class="fs" d="M118 78H246L222 120H94Z"/><text x="170" y="99">N ইনপুট</text>
        <path class="fa" d="M170 120V146" marker-end="url(#odd13-ah)"/>
        <rect class="fs" x="95" y="148" width="150" height="44"/><text x="170" y="170">Sum = 0, i = 1</text>
        <path class="fa" d="M170 192V216" marker-end="url(#odd13-ah)"/>
        <path class="fs fd" d="M170 218L240 258L170 298L100 258Z"/><text x="170" y="258">i ≤ N ?</text>
        <path class="fa" d="M170 298V322" marker-end="url(#odd13-ah)"/><text class="yn" x="190" y="312">হ্যাঁ</text>
        <rect class="fs" x="95" y="324" width="150" height="40"/><text x="170" y="344">Sum = Sum + i</text>
        <path class="fa" d="M170 364V388" marker-end="url(#odd13-ah)"/>
        <rect class="fs" x="95" y="390" width="150" height="40"/><text x="170" y="410">i = i + 2</text>
        <path class="fa" d="M95 410H40V258H98" marker-end="url(#odd13-ah)"/>
        <path class="fa" d="M240 258H318V442" marker-end="url(#odd13-ah)"/><text class="yn" x="262" y="246">না</text>
        <path class="fs" d="M270 444H386L366 484H250Z"/><text x="318" y="464">Sum প্রিন্ট</text>
        <path class="fa" d="M318 484V498" marker-end="url(#odd13-ah)"/>
        <rect class="fs" x="258" y="500" width="120" height="40" rx="20"/><text x="318" y="521">শেষ</text>
      </svg>
      <figcaption>চিত্র: ১ + ৩ + ৫ + … + N-এর যোগফল নির্ণয়ের ফ্লোচার্ট</figcaption>
    </figure>
    <p class="prose">যাচাই: N = 9 হলে i = 1, 3, 5, 7, 9 যোগ হয়ে Sum = ২৫; i = 11 হলে 11 ≤ 9 মিথ্যা, তাই ২৫ প্রিন্ট হয়।</p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ওয়েবসাইট ও ওয়েবপেজের পার্থক্য</span><i class="bub mk">৫</i></h3>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>ওয়েবপেজ</th><th>ওয়েবসাইট</th></tr></thead>
      <tbody>
        <tr><td>সংজ্ঞা</td><td>ওয়েবের একটি একক ডকুমেন্ট (HTML পাতা)</td><td>একই ডোমেইনের অধীনে পরস্পর লিংক করা অনেক ওয়েবপেজের সমষ্টি</td></tr>
        <tr><td>ঠিকানা</td><td>প্রতিটি পেজের নিজস্ব URL</td><td>একটি ডোমেইন নাম, যেমন www.bangladesh.gov.bd</td></tr>
        <tr><td>সম্পর্ক</td><td>ওয়েবসাইটের একটি অংশ</td><td>অনেক ওয়েবপেজ নিয়ে গঠিত</td></tr>
        <tr><td>হোমপেজ</td><td>নিজে হোমপেজ নাও হতে পারে</td><td>প্রথম পাতাটি হোমপেজ, সেখান থেকে বাকি পাতায় যাওয়া যায়</td></tr>
        <tr><td>উদাহরণ</td><td>একটি সংবাদপত্রের একটি খবরের পাতা</td><td>পুরো সংবাদপত্রের সাইট</td></tr>
      </tbody>
    </table>
  </section>
</div>
<aside class="side">
  <p><b>লুপ আঁকুন</b>শর্তের বাক্স থেকে “হ্যাঁ” পথে যোগ ও বৃদ্ধি, তারপর তীর আবার শর্তে ফেরে; “না” পথে ফল প্রিন্ট।</p>
  <p class="tags"><span class="xt">অধ্যায়: অ্যালগরিদম ও ফ্লোচার্ট</span><span class="xt">ইন্টারনেট</span></p>
</aside>
`,

7: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>প্রোগ্রাম ফ্লোচার্টের প্রতীক ও কাজ</span><i class="bub mk">৫</i></h3>
    <p class="inc-note">একই প্রশ্ন ১৭তম পরীক্ষায় এসেছে (প্রশ্ন ৬)।</p>
    <div data-include="wa-17-school-6" data-part="2" data-inner></div>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ফার্মওয়্যার; ডিস্ট্রিবিউটেড অপারেটিং সিস্টেম</span><i class="bub mk">৫</i></h3>
    <p class="defn"><b>ফার্মওয়্যার</b>যে সফটওয়্যার স্থায়ীভাবে হার্ডওয়্যারের ভেতরে ROM বা ফ্ল্যাশ মেমোরিতে লেখা থাকে এবং যন্ত্রটিকে চালু ও নিয়ন্ত্রণ করে, তাকে ফার্মওয়্যার বলে। যেমন কম্পিউটারের BIOS, রাউটার ও প্রিন্টারের নিয়ন্ত্রণ প্রোগ্রাম।</p>
    <p class="inc-note">ডিস্ট্রিবিউটেড অপারেটিং সিস্টেমের অংশটি ১৫তম পরীক্ষার ৬ নম্বর প্রশ্নের উত্তরেও আছে।</p>
    <div data-include="wa-15-school-6" data-part="1" data-inner></div>
  </section>
</div>
<aside class="side">
  <p class="tags"><span class="xt">অধ্যায়: অ্যালগরিদম ও ফ্লোচার্ট</span><span class="xt">অপারেটিং সিস্টেম</span></p>
</aside>
`,

8: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>পূর্ণরূপ: TCP/IP, FTP, http, URL, Wi-MAX</span><i class="bub mk">৫</i></h3>
    <table class="rt cmp">
      <thead><tr><th>সংক্ষেপ</th><th>পূর্ণরূপ</th><th>কাজ</th></tr></thead>
      <tbody>
        <tr><td>TCP/IP</td><td>Transmission Control Protocol / Internet Protocol</td><td>ইন্টারনেটের মূল প্রোটোকল; উপাত্ত প্যাকেটে ভাগ করে ঠিকানামতো পৌঁছায়</td></tr>
        <tr><td>FTP</td><td>File Transfer Protocol</td><td>নেটওয়ার্কে এক কম্পিউটার থেকে আরেকটিতে ফাইল আদান-প্রদান</td></tr>
        <tr><td>http</td><td>HyperText Transfer Protocol</td><td>ওয়েব সার্ভার থেকে ব্রাউজারে ওয়েবপেজ আনা</td></tr>
        <tr><td>URL</td><td>Uniform Resource Locator</td><td>ইন্টারনেটে কোনো পেজ বা ফাইলের পূর্ণ ঠিকানা</td></tr>
        <tr><td>Wi-MAX</td><td>Worldwide Interoperability for Microwave Access</td><td>অনেক দূর পর্যন্ত তারবিহীন ব্রডব্যান্ড ইন্টারনেট (IEEE 802.16)</td></tr>
      </tbody>
    </table>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>DOS-এর পূর্ণরূপ; GUI ভিত্তিক অপারেটিং সিস্টেম</span><i class="bub mk">৫</i></h3>
    <p class="prose"><b>DOS-এর পূর্ণরূপ:</b> Disk Operating System; এটি বর্ণভিত্তিক, একক ব্যবহারকারী ও একক কাজের অপারেটিং সিস্টেম।</p>
    <p class="inc-note">GUI অপারেটিং সিস্টেমের অংশটি ১৭তম পরীক্ষার ৩ নম্বর প্রশ্নের উত্তরেও আছে।</p>
    <div data-include="wa-17-school-3" data-part="2" data-inner></div>
  </section>
</div>
<aside class="side">
  <p><b>পূর্ণরূপের প্রশ্নে</b>শুধু পূর্ণরূপ নয়, এক লাইনে কাজটিও লিখুন; বানান ঠিক রাখুন।</p>
  <p class="tags"><span class="xt">অধ্যায়: ইন্টারনেট</span><span class="xt">অপারেটিং সিস্টেম</span></p>
</aside>
`,

9: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>E-mail; চিত্রভিত্তিক ও বর্ণভিত্তিক অপারেটিং সিস্টেমের পার্থক্য</span><i class="bub mk">৫</i></h3>
    <p class="defn"><b>E-mail</b>ই-মেইল (Electronic Mail) হলো ইন্টারনেটের মাধ্যমে এক ব্যবহারকারী থেকে আরেকজনের কাছে লেখা, ছবি ও ফাইল পাঠানোর ইলেকট্রনিক ডাক ব্যবস্থা। প্রত্যেকের একটি অনন্য ঠিকানা থাকে, যেমন <span class="m">rahim@gmail.com</span>; পাঠাতে SMTP, নামাতে POP3 বা IMAP প্রোটোকল ব্যবহৃত হয়।</p>
    <p class="inc-note">পার্থক্যের ছকটি ১৬তম পরীক্ষার ৬ নম্বর প্রশ্নের উত্তরেও আছে।</p>
    <div data-include="wa-16-school-6" data-part="2" data-inner></div>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>অ্যানালগ ও ডিজিটাল কম্পিউটারের পার্থক্য</span><i class="bub mk">৫</i></h3>
    <p class="inc-note">একই প্রশ্ন ১৭তম পরীক্ষায় এসেছে (প্রশ্ন ১)।</p>
    <div data-include="wa-17-school-1" data-part="4" data-inner></div>
  </section>
</div>
<aside class="side">
  <p class="tags"><span class="xt">অধ্যায়: ইন্টারনেট</span><span class="xt">অপারেটিং সিস্টেম</span><span class="xt">কম্পিউটার বেসিক</span></p>
</aside>
`,

10: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>(1101011.1011)<sub>2</sub> ও (1010110.0101)<sub>2</sub>-এর যোগফল, হেক্সাডেসিমালে</span><i class="bub mk">৫</i></h3>
    <p class="prose">বাইনারি যোগের নিয়ম: 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10 (বসে 0, হাতে 1), 1 + 1 + 1 = 11 (বসে 1, হাতে 1)। বিন্দু বরাবর মিলিয়ে ডান থেকে যোগ করি:</p>
    <div class="bcalc">
      <code>  1101011.1011</code><span>(1101011.1011)<sub>2</sub> = ১০৭.৬৮৭৫</span>
      <code class="add">+ 1010110.0101</code><span>(1010110.0101)<sub>2</sub> = ৮৬.৩১২৫</span>
      <code class="res"> 11000010.0000</code><span>যোগফল</span>
    </div>
    <p class="prose">হেক্সাডেসিমালে নিতে বিন্দু থেকে দুই দিকে ৪ বিট করে দল:</p>
    <p class="expand"><span>৪ বিটের দল</span> 1100 0010 . 0000 = (<b>C2.0</b>)<sub>16</sub></p>
    <p class="final"><b>উত্তর</b>যোগফল (11000010)<sub>2</sub> = (C2)<sub>16</sub></p>
    <p class="prose">যাচাই: ১০৭.৬৮৭৫ + ৮৬.৩১২৫ = ১৯৪; আর (C2)<sub>16</sub> = ১২ × ১৬ + ২ = ১৯৪। ভগ্নাংশ দুটি যোগে ঠিক ১ হয়েছে, তাই যোগফলে ভগ্নাংশ নেই।</p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>BCD, EBCDIC ও ASCII কোড</span><i class="bub mk">৫</i></h3>
    <ul class="pts">
      <li><b>BCD (Binary Coded Decimal):</b> দশমিক সংখ্যার প্রতিটি অঙ্ককে আলাদাভাবে ৪ বিটে প্রকাশ করে (ওজন ৮৪২১)। যেমন (59)<sub>10</sub> = 0101 1001। শুধু অঙ্ক প্রকাশ করে; ক্যালকুলেটর ও ডিজিটাল ঘড়িতে ব্যবহৃত।</li>
      <li><b>EBCDIC (Extended Binary Coded Decimal Interchange Code):</b> IBM-এর তৈরি ৮ বিটের কোড, ২৫৬টি অক্ষর; প্রতিটি অক্ষর ৪ বিট জোন ও ৪ বিট ডিজিট। যেমন A = 1100 0001 (C1)। IBM মেইনফ্রেমে ব্যবহৃত।</li>
      <li><b>ASCII (American Standard Code for Information Interchange):</b> ANSI-র তৈরি ৭ বিটের কোড, ১২৮টি অক্ষর (বর্ধিত রূপে ৮ বিটে ২৫৬)। যেমন A = 65 = 1000001, a = 97, অঙ্ক 0 = 48। পার্সোনাল কম্পিউটার ও ইন্টারনেটে সবচেয়ে প্রচলিত।</li>
    </ul>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>BCD</th><th>EBCDIC</th><th>ASCII</th></tr></thead>
      <tbody>
        <tr><td>বিট</td><td>৪ (প্রতি অঙ্কে)</td><td>৮</td><td>৭ (বর্ধিত ৮)</td></tr>
        <tr><td>প্রকাশ করে</td><td>শুধু অঙ্ক ০–৯</td><td>২৫৬টি অক্ষর</td><td>১২৮টি (বর্ধিত ২৫৬)</td></tr>
        <tr><td>“A”-এর কোড</td><td>নেই</td><td>C1</td><td>41 (হেক্সা)</td></tr>
      </tbody>
    </table>
  </section>
</div>
<aside class="side">
  <p><b>বিন্দু মিলিয়ে</b>দুই সংখ্যার ভগ্নাংশে সমান ঘর রাখুন, বিন্দু একই কলামে বসান, তারপর ডান থেকে যোগ করুন।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/number-system/arith">অধ্যায় ২ · যোগ-বিয়োগ</a>, <a href="#/note/data-representation/code">অধ্যায় ৩ · কোড</a></p>
  <p class="tags"><span class="xt">অধ্যায়: সংখ্যা পদ্ধতি</span><span class="xt">উপাত্ত উপস্থাপন</span></p>
</aside>
`
};
