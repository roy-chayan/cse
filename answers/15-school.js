/* Model answers · ১৫তম শিক্ষক নিবন্ধন (২০১৮), সহকারী শিক্ষক (কম্পিউটার) ও প্রদর্শক (তথ্য ও যোগাযোগ প্রযুক্তি), বিষয় কোড ৩১৩.
   Same structure as answers/17-school.js. The printed paper leaves out the equation of Q5 (ক), so that answer
   shows the method on a stated example. Q4 has no "অথবা" as printed. Every calculation here was checked by script. */
(window.ICT_ANSWERS = window.ICT_ANSWERS || {})["15-school"] = {

1: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. ডিজিটাল কম্পিউটার ও এর শ্রেণিবিভাগ</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>যে কম্পিউটার সব উপাত্তকে ০ ও ১ (বাইনারি) সংকেতে রূপান্তর করে গণনার মাধ্যমে কাজ করে, তাকে ডিজিটাল কম্পিউটার বলে। এটি দ্রুত, নির্ভুল, বিপুল স্মৃতির অধিকারী এবং প্রোগ্রাম বদলে নানা কাজ করতে পারে। আজকের প্রায় সব কম্পিউটারই ডিজিটাল।</p>
    <p class="prose">আকার, গতি, ক্ষমতা ও দাম অনুসারে ডিজিটাল কম্পিউটার চার প্রকার:</p>
    <figure class="fig">
      <ul class="tree">
        <li><span class="t-root">ডিজিটাল কম্পিউটার <small>আকার ও ক্ষমতা অনুসারে</small></span>
          <ul>
            <li><span>সুপার কম্পিউটার</span><span class="leaf">Frontier · Fugaku · PARAM</span></li>
            <li><span>মেইনফ্রেম কম্পিউটার</span><span class="leaf">IBM z সিরিজ</span></li>
            <li><span>মিনি কম্পিউটার</span><span class="leaf">PDP-11 · VAX · IBM AS/400</span></li>
            <li><span>মাইক্রো কম্পিউটার</span>
              <ul>
                <li><span>ডেস্কটপ</span></li>
                <li><span>ল্যাপটপ</span></li>
                <li><span>ট্যাবলেট ও স্মার্টফোন</span></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <figcaption>চিত্র: ডিজিটাল কম্পিউটারের শ্রেণিবিভাগ</figcaption>
    </figure>
    <h4 class="sub-h"><span>১</span>সুপার কম্পিউটার</h4>
    <p class="prose">সবচেয়ে দ্রুত, শক্তিশালী ও ব্যয়বহুল কম্পিউটার। হাজার হাজার প্রসেসর একসঙ্গে একটি কাজ ভাগ করে করে; গতি মাপা হয় FLOPS এককে। আবহাওয়ার পূর্বাভাস, মহাকাশ ও পারমাণবিক গবেষণা, ভূমিকম্প বিশ্লেষণে ব্যবহৃত হয়।</p>
    <h4 class="sub-h"><span>২</span>মেইনফ্রেম কম্পিউটার</h4>
    <p class="prose">বড় আকারের শক্তিশালী কম্পিউটার, যা টার্মিনালের মাধ্যমে একসঙ্গে শত শত ব্যবহারকারীর বিপুল লেনদেন সামলায়। ব্যাংক, বিমা, বিমানের টিকিট সংরক্ষণ ও বড় প্রতিষ্ঠানের তথ্যভান্ডারে ব্যবহৃত হয়।</p>
    <h4 class="sub-h"><span>৩</span>মিনি কম্পিউটার</h4>
    <p class="prose">মেইনফ্রেমের চেয়ে ছোট ও কম দামি, মাইক্রোর চেয়ে শক্তিশালী মাঝারি কম্পিউটার; একসঙ্গে কয়েকজন থেকে কয়েক শ ব্যবহারকারী কাজ করতে পারেন। কারখানার উৎপাদন নিয়ন্ত্রণ, মাঝারি প্রতিষ্ঠানের হিসাব ও সার্ভারে ব্যবহৃত হয়।</p>
    <h4 class="sub-h"><span>৪</span>মাইক্রো কম্পিউটার</h4>
    <p class="prose">মাইক্রোপ্রসেসর দিয়ে তৈরি ছোট, কম দামি কম্পিউটার, যা সাধারণত একজন ব্যক্তি ব্যবহার করেন; তাই একে পার্সোনাল কম্পিউটারও বলে। ডেস্কটপ, ল্যাপটপ, ট্যাবলেট ও স্মার্টফোন এর রূপ। যেমন IBM PC, Apple Macintosh।</p>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>সুপার</th><th>মেইনফ্রেম</th><th>মিনি</th><th>মাইক্রো</th></tr></thead>
      <tbody>
        <tr><td>গতি</td><td>সর্বোচ্চ</td><td>অনেক বেশি</td><td>মাঝারি</td><td>তুলনামূলক কম</td></tr>
        <tr><td>ব্যবহারকারী</td><td>গবেষণা দল</td><td>শত শত</td><td>কয়েক থেকে কয়েক শ</td><td>সাধারণত একজন</td></tr>
        <tr><td>দাম</td><td>সর্বোচ্চ</td><td>অনেক বেশি</td><td>মাঝারি</td><td>কম</td></tr>
      </tbody>
    </table>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. মানুষ ও কম্পিউটারের বৈশিষ্ট্যগত পার্থক্য</span><i class="bub mk">৫</i></h3>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>মানুষ</th><th>কম্পিউটার</th></tr></thead>
      <tbody>
        <tr><td>বুদ্ধি ও বিচারক্ষমতা</td><td>নিজস্ব বুদ্ধি, বিবেক ও বিচারক্ষমতা আছে</td><td>নেই; শুধু দেওয়া নির্দেশ পালন করে</td></tr>
        <tr><td>গতি</td><td>ধীর</td><td>অত্যন্ত দ্রুত</td></tr>
        <tr><td>নির্ভুলতা</td><td>ক্লান্ত বা অমনোযোগী হলে ভুল করে</td><td>সঠিক নির্দেশ ও উপাত্তে নির্ভুল</td></tr>
        <tr><td>ক্লান্তি</td><td>ক্লান্ত হয়, বিশ্রাম লাগে</td><td>ক্লান্তিহীনভাবে একটানা কাজ করে</td></tr>
        <tr><td>স্মৃতি</td><td>সীমিত; ভুলে যায়</td><td>বিপুল ও স্থায়ী</td></tr>
        <tr><td>আবেগ ও অনুভূতি</td><td>আছে</td><td>নেই</td></tr>
        <tr><td>সৃজনশীলতা</td><td>নতুন কিছু উদ্ভাবন করতে পারে</td><td>নিজে থেকে কিছু সৃষ্টি করতে পারে না</td></tr>
        <tr><td>নির্ভরতা</td><td>স্বাধীন</td><td>মানুষ ও বিদ্যুতের ওপর নির্ভরশীল</td></tr>
      </tbody>
    </table>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ক. কম্পিউটার প্রজন্ম; দ্বিতীয় ও পঞ্চম প্রজন্ম</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>প্রযুক্তির বড় পরিবর্তনের ভিত্তিতে কম্পিউটারের বিকাশের ধাপগুলোকে কম্পিউটার প্রজন্ম বলে। প্রতিটি প্রজন্ম চেনা যায় তার মূল ইলেকট্রনিক উপাদান দিয়ে: ভ্যাকুয়াম টিউব, ট্রানজিস্টর, ইন্টিগ্রেটেড সার্কিট, মাইক্রোপ্রসেসর এবং কৃত্রিম বুদ্ধিমত্তা।</p>
    <h4 class="sub-h"><span>২</span>দ্বিতীয় প্রজন্ম (১৯৫৯–১৯৬৫): ট্রানজিস্টর</h4>
    <ul class="pts">
      <li>মূল উপাদান ট্রানজিস্টর, যা ১৯৪৭ সালে বেল ল্যাবরেটরিতে উদ্ভাবিত হয়।</li>
      <li>ভ্যাকুয়াম টিউবের চেয়ে আকারে ছোট, বিদ্যুৎ ও তাপ কম, নির্ভরযোগ্যতা বেশি।</li>
      <li>প্রধান স্মৃতি চৌম্বক কোর; সহায়ক স্মৃতি হিসেবে চৌম্বক টেপ ও ডিস্কের ব্যবহার।</li>
      <li>অ্যাসেম্বলি ভাষা এবং FORTRAN, COBOL-এর মতো উচ্চস্তরের ভাষার ব্যবহার শুরু; গতি মাইক্রোসেকেন্ড পর্যায়ের।</li>
      <li><b>উদাহরণ:</b> IBM 1401, IBM 1620, CDC 1604।</li>
    </ul>
    <h4 class="sub-h"><span>৫</span>পঞ্চম প্রজন্ম (বর্তমান ও ভবিষ্যৎ): কৃত্রিম বুদ্ধিমত্তা</h4>
    <ul class="pts">
      <li>লক্ষ্য কৃত্রিম বুদ্ধিমত্তা (AI): যন্ত্র নিজে শিখবে, যুক্তি দিয়ে সিদ্ধান্ত নেবে। ১৯৮২ সালে জাপানের “পঞ্চম প্রজন্মের কম্পিউটার” প্রকল্প এ ধারণা সামনে আনে।</li>
      <li>ULSI প্রযুক্তি ও সমান্তরাল প্রক্রিয়াকরণ: একসঙ্গে অনেক প্রসেসর একটি কাজ ভাগাভাগি করে শেষ করে।</li>
      <li>মানুষের স্বাভাবিক ভাষা, কণ্ঠস্বর ও ছবি বুঝতে পারা।</li>
      <li>বিশেষজ্ঞ ব্যবস্থা (Expert System) ও রোবটিক্স; কোয়ান্টাম ও অপটিক্যাল কম্পিউটিং নিয়ে গবেষণা চলছে।</li>
      <li><b>উদাহরণ:</b> IBM Watson, কৃত্রিম বুদ্ধিমত্তাভিত্তিক রোবট ও ভয়েস সহকারী।</li>
    </ul>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>দ্বিতীয় প্রজন্ম</th><th>পঞ্চম প্রজন্ম</th></tr></thead>
      <tbody>
        <tr><td>মূল প্রযুক্তি</td><td>ট্রানজিস্টর</td><td>ULSI, কৃত্রিম বুদ্ধিমত্তা</td></tr>
        <tr><td>স্মৃতি</td><td>চৌম্বক কোর</td><td>অর্ধপরিবাহী, বিপুল ধারণক্ষমতা</td></tr>
        <tr><td>ভাষা</td><td>অ্যাসেম্বলি, FORTRAN, COBOL</td><td>মানুষের স্বাভাবিক ভাষা, কণ্ঠস্বর</td></tr>
        <tr><td>প্রক্রিয়াকরণ</td><td>একটি প্রসেসর</td><td>সমান্তরাল প্রক্রিয়াকরণ</td></tr>
      </tbody>
    </table>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. গাণিতিক ও যৌক্তিক ইউনিট (ALU)</span><i class="bub mk">৫</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>ALU (Arithmetic Logic Unit) হলো CPU-র সেই অংশ, যা যোগ, বিয়োগ, গুণ, ভাগের মতো গাণিতিক কাজ এবং তুলনা ও AND, OR, NOT-এর মতো যৌক্তিক কাজ করে।</p>
    <p class="inc-note">একই বিষয়ের পূর্ণ উত্তর ১৮তম পরীক্ষার ৩ নম্বর প্রশ্নে; নিচের অংশ ও চিত্র সেখান থেকে।</p>
    <div data-include="wa-18-school-3" data-part="2" data-inner></div>
  </section>
</div>
<aside class="side">
  <p><b>প্রশ্নের নাম মিলিয়ে নিন</b>“ডিজিটাল কম্পিউটারের শ্রেণিবিভাগ” মানে আকার অনুসারে সুপার থেকে মাইক্রো; “গঠন ও ক্রিয়ানীতি অনুসারে” মানে অ্যানালগ, ডিজিটাল, হাইব্রিড।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/computer-basics/type">অধ্যায় ১ · প্রকারভেদ</a>, <a href="#/note/computer-basics/gen">প্রজন্ম</a></p>
  <p class="tags"><span class="xt">অধ্যায়: কম্পিউটার বেসিক</span></p>
</aside>
`,

2: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. অপারেটিং সিস্টেম ও এর সংগঠন</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>যে সিস্টেম সফটওয়্যার কম্পিউটারের হার্ডওয়্যার ও সব রিসোর্স পরিচালনা করে এবং ব্যবহারকারী ও অন্য প্রোগ্রামের সঙ্গে হার্ডওয়্যারের সংযোগ ঘটায়, তাকে অপারেটিং সিস্টেম বলে। যেমন Windows, Linux, macOS, Android।</p>
    <p class="prose">অপারেটিং সিস্টেম কয়েকটি স্তরে সাজানো থাকে। ভেতরে হার্ডওয়্যার, তাকে ঘিরে কার্নেল, তারপর শেল, আর বাইরে অ্যাপ্লিকেশন প্রোগ্রাম; ব্যবহারকারী বাইরের স্তর দিয়ে কাজ করেন।</p>
    <figure class="fig flow onion">
      <svg viewBox="0 0 400 400" role="img" aria-label="অপারেটিং সিস্টেমের সংগঠন: কেন্দ্রে হার্ডওয়্যার, তাকে ঘিরে কার্নেল, তারপর শেল, বাইরে অ্যাপ্লিকেশন প্রোগ্রাম; ব্যবহারকারী বাইরের স্তর দিয়ে কাজ করেন।">
        <defs><marker id="os15-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
        <circle class="fs" cx="200" cy="200" r="180"/>
        <circle class="fs" cx="200" cy="200" r="132"/>
        <circle class="fs fd" cx="200" cy="200" r="88"/>
        <circle class="fs" cx="200" cy="200" r="46"/>
        <text x="200" y="44">অ্যাপ্লিকেশন প্রোগ্রাম</text><text class="sm" x="200" y="356">Word · Excel · Chrome</text>
        <text x="200" y="90">শেল</text><text class="sm" x="200" y="310">কমান্ড লাইন · GUI</text>
        <text x="200" y="133">কার্নেল</text><text class="sm" x="200" y="267">প্রসেস · মেমোরি</text>
        <text class="sm" x="200" y="200">হার্ডওয়্যার</text>
        <text class="sm" x="48" y="18">ব্যবহারকারী</text><path class="fa" d="M60 30L90 62" marker-end="url(#os15-ah)"/>
        <text class="sm" x="352" y="18">ব্যবহারকারী</text><path class="fa" d="M340 30L310 62" marker-end="url(#os15-ah)"/>
      </svg>
      <figcaption>চিত্র: অপারেটিং সিস্টেমের স্তরভিত্তিক সংগঠন</figcaption>
    </figure>
    <h4 class="sub-h"><span>১</span>হার্ডওয়্যার</h4>
    <p class="prose">CPU, স্মৃতি, ডিস্ক ও ইনপুট-আউটপুট যন্ত্র; সবচেয়ে ভেতরের স্তর, যাকে অপারেটিং সিস্টেম নিয়ন্ত্রণ করে।</p>
    <h4 class="sub-h"><span>২</span>কার্নেল</h4>
    <p class="prose">অপারেটিং সিস্টেমের মূল অংশ; কম্পিউটার চালু হলে প্রথমে স্মৃতিতে আসে এবং বন্ধ হওয়া পর্যন্ত থাকে। সরাসরি হার্ডওয়্যার নিয়ন্ত্রণ করে:</p>
    <ul class="pts">
      <li><b>প্রসেস ব্যবস্থাপনা:</b> কোন প্রোগ্রাম কখন CPU পাবে।</li>
      <li><b>মেমোরি ব্যবস্থাপনা:</b> প্রোগ্রামকে স্মৃতিতে জায়গা দেওয়া ও ফেরত নেওয়া।</li>
      <li><b>ফাইল ব্যবস্থাপনা:</b> ডিস্কে ফাইল ও ফোল্ডার রাখা ও খোঁজা।</li>
      <li><b>ডিভাইস ব্যবস্থাপনা:</b> ড্রাইভারের মাধ্যমে ইনপুট-আউটপুট যন্ত্র চালানো।</li>
    </ul>
    <p class="prose">অন্য প্রোগ্রাম কার্নেলের কাছে সেবা চায় সিস্টেম কলের মাধ্যমে।</p>
    <h4 class="sub-h"><span>৩</span>শেল</h4>
    <p class="prose">ব্যবহারকারী ও কার্নেলের মাঝের দোভাষী। ব্যবহারকারীর কমান্ড বা ক্লিক বুঝে কার্নেলকে জানায়, ফল দেখায়। এটি কমান্ড লাইন (যেমন DOS-এর command.com, Linux-এর bash) বা চিত্রভিত্তিক (GUI) হতে পারে।</p>
    <h4 class="sub-h"><span>৪</span>অ্যাপ্লিকেশন প্রোগ্রাম ও ব্যবহারকারী</h4>
    <p class="prose">ওয়ার্ড প্রসেসর, ব্রাউজারের মতো প্রোগ্রাম অপারেটিং সিস্টেমের ওপর চলে। ব্যবহারকারী এগুলোর মাধ্যমে কাজ করেন, কিন্তু হার্ডওয়্যারের খুঁটিনাটি জানতে হয় না; সেটি সামলায় অপারেটিং সিস্টেম।</p>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. মাল্টিপ্রসেসিং অপারেটিং সিস্টেম</span><i class="bub mk">৫</i></h3>
    <p class="inc-note">একই প্রশ্ন ১৭তম পরীক্ষায় ১০ নম্বরে এসেছে (প্রশ্ন ৩)। ৫ নম্বরের জন্য সংজ্ঞা, চিত্র ও কার্যপদ্ধতির ধাপগুলো যথেষ্ট।</p>
    <div data-include="wa-17-school-3" data-part="3" data-inner></div>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ক. আউটপুট; গঠন ও ক্রিয়ানীতি অনুসারে শ্রেণিবিন্যাস</span><i class="bub mk">১০</i></h3>
    <h4 class="sub-h"><span>১</span>আউটপুট</h4>
    <p class="prose">প্রক্রিয়াকরণের পর কম্পিউটার যে ফল দেয়, তাকে আউটপুট বলে। যে যন্ত্র এই ফল বাইনারি থেকে মানুষের বোঝার মতো রূপে দেখায়, তা আউটপুট যন্ত্র: মনিটর, প্রিন্টার, স্পিকার, প্লটার, প্রজেক্টর। আউটপুট দুই ধরনের: <b>সফট কপি</b> (পর্দায় বা শব্দে, স্থায়ী নয়) ও <b>হার্ড কপি</b> (কাগজে ছাপা, স্থায়ী)।</p>
    <h4 class="sub-h"><span>২</span>গঠন ও ক্রিয়ানীতি অনুসারে শ্রেণিবিন্যাস</h4>
    <p class="inc-note">এই অংশটি ১৭তম পরীক্ষার ১ নম্বর প্রশ্নের উত্তরেও আছে।</p>
    <div data-include="wa-17-school-1" data-part="1" data-inner></div>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. লেজার প্রিন্টারের কার্যনীতি</span><i class="bub mk">৫</i></h3>
    <p class="prose">লেজার প্রিন্টার একটি নন-ইমপ্যাক্ট পেজ প্রিন্টার: কাগজে আঘাত না করে একবারে পুরো পৃষ্ঠা ছাপে। এর মূল অংশ আলোক-সংবেদী ড্রাম, যা স্থির বিদ্যুৎ (ইলেকট্রোস্ট্যাটিক) ব্যবহার করে টোনার গুঁড়া কাগজে বসায়।</p>
    <figure class="fig flow wide">
      <svg viewBox="0 0 520 228" role="img" aria-label="লেজার প্রিন্টারের কার্যনীতি: ঘুরন্ত আলোক-সংবেদী ড্রামের চারপাশে পরপর চার্জিং রোলার, লেজার, টোনার, ট্রান্সফার রোলার ও পরিষ্কারক ব্লেড; কাগজ ড্রামের নিচ দিয়ে গিয়ে ফিউজারের দুই গরম রোলারের মাঝ দিয়ে বের হয়।">
        <defs><marker id="lp15-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
        <path class="fa" d="M30 172H505" marker-end="url(#lp15-ah)"/><text class="sm" x="50" y="160">কাগজ</text>
        <circle class="fs" cx="230" cy="110" r="58"/><text x="230" y="102">ড্রাম</text><text class="sm" x="230" y="124">আলোক-সংবেদী</text>
        <circle class="fs" cx="280" cy="60" r="11"/><path class="fa" d="M330 36L290 54"/><text class="sm" x="378" y="30">১ চার্জিং রোলার</text>
        <rect class="fs" x="60" y="10" width="100" height="32"/><text x="110" y="26">২ লেজার</text>
        <path class="fa dash" d="M160 30L210 54" marker-end="url(#lp15-ah)"/>
        <circle class="fs" cx="160" cy="110" r="11"/><rect class="fs fd" x="46" y="92" width="96" height="36"/><text x="94" y="110">৩ টোনার</text>
        <circle class="fs" cx="230" cy="186" r="11"/><text class="sm" x="230" y="214">৪ ট্রান্সফার রোলার</text>
        <circle class="fs fd" cx="430" cy="158" r="12"/><circle class="fs fd" cx="430" cy="186" r="12"/><text class="sm" x="430" y="214">৫ ফিউজার: তাপ ও চাপ</text>
        <rect class="fs fd" x="284" y="104" width="12" height="22"/><text class="sm" x="346" y="115">৬ পরিষ্কারক</text>
      </svg>
      <figcaption>চিত্র: লেজার প্রিন্টারের কার্যনীতি। ড্রাম ঘড়ির কাঁটার উল্টো দিকে ঘোরে।</figcaption>
    </figure>
    <ol class="algo">
      <li><span><b>চার্জ দেওয়া:</b> চার্জিং রোলার ঘুরন্ত ড্রামের পুরো গায়ে সমান ঋণাত্মক চার্জ দেয়।</span></li>
      <li><span><b>লেখা:</b> কম্পিউটার থেকে আসা পৃষ্ঠার ছবি অনুযায়ী লেজার রশ্মি ড্রামে পড়ে; যেখানে আলো পড়ে সেখানের চার্জ সরে যায়, ফলে ড্রামে পৃষ্ঠার অদৃশ্য চার্জ-ছবি তৈরি হয়।</span></li>
      <li><span><b>টোনার লাগানো:</b> চার্জযুক্ত সূক্ষ্ম টোনার গুঁড়া শুধু আলো-পড়া জায়গায় লাগে; ছবিটি দৃশ্যমান হয়।</span></li>
      <li><span><b>স্থানান্তর:</b> কাগজের নিচে ট্রান্সফার রোলার বিপরীত চার্জ দেয়, তাই টোনার ড্রাম থেকে কাগজে চলে আসে।</span></li>
      <li><span><b>স্থায়ী করা:</b> ফিউজারের গরম রোলার তাপ ও চাপে টোনার গলিয়ে কাগজে বসিয়ে দেয়; তাই সদ্য ছাপা কাগজ গরম থাকে।</span></li>
      <li><span><b>পরিষ্কার:</b> ব্লেড ড্রামে লেগে থাকা বাড়তি টোনার মুছে ফেলে; চার্জ মুছে ড্রাম পরের পৃষ্ঠার জন্য তৈরি হয়।</span></li>
    </ol>
    <p class="prose">লেজার প্রিন্টার দ্রুত (প্রতি মিনিটে অনেক পৃষ্ঠা), নিঃশব্দ এবং ছাপা খুব স্পষ্ট (৬০০–১২০০ dpi)।</p>
  </section>
</div>
<aside class="side">
  <p><b>স্তরের চিত্র</b>অপারেটিং সিস্টেমের সংগঠনে পেঁয়াজের খোসার মতো স্তর আঁকুন: ভেতরে হার্ডওয়্যার, বাইরে ব্যবহারকারী।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/computer-basics/io">অধ্যায় ১ · ইনপুট ও আউটপুট</a>, <a href="#/note/computer-basics/type">প্রকারভেদ</a></p>
  <p class="tags"><span class="xt">অধ্যায়: অপারেটিং সিস্টেম</span><span class="xt">কম্পিউটার বেসিক</span></p>
</aside>
`,

3: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. (5A.35)<sub>16</sub> ও (201.15)<sub>10</sub> বাইনারিতে যোগ, যোগফল অক্টালে</span><i class="bub mk">১০</i></h3>
    <h4 class="sub-h"><span>ধাপ ১</span><span>(5A.35)<sub>16</sub> থেকে বাইনারি</span></h4>
    <p class="prose">প্রতিটি হেক্সাডেসিমাল অঙ্কের বদলে ৪ বিট বসাই:</p>
    <p class="expand"><span>(5A.35)<sub>16</sub></span> = 0101 1010 . 0011 0101 = (<b>1011010.00110101</b>)<sub>2</sub></p>

    <h4 class="sub-h"><span>ধাপ ২</span><span>(201.15)<sub>10</sub> থেকে বাইনারি</span></h4>
    <div class="work">
      <div class="ladder" role="img" aria-label="২০১-কে ২ দিয়ে বারবার ভাগ। ভাগশেষ ১, ০, ০, ১, ০, ০, ১, ১। নিচ থেকে পড়লে 11001001।">
        <span class="dv">2</span><span class="qt">201</span><span class="rm">1</span>
        <span class="dv">2</span><span class="qt">100</span><span class="rm">0</span>
        <span class="dv">2</span><span class="qt">50</span><span class="rm">0</span>
        <span class="dv">2</span><span class="qt">25</span><span class="rm">1</span>
        <span class="dv">2</span><span class="qt">12</span><span class="rm">0</span>
        <span class="dv">2</span><span class="qt">6</span><span class="rm">0</span>
        <span class="dv">2</span><span class="qt">3</span><span class="rm">1</span>
        <span class="dv">2</span><span class="qt">1</span><span class="rm">1</span>
        <span class="dv"></span><span class="qt end">0</span><span class="rm"></span>
      </div>
      <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 146 V8 M5 15 L12 6 L19 15"/></svg><span>নিচ থেকে পড়ুন</span></div>
      <p class="work-res">(201)<sub>10</sub> = (<b>11001001</b>)<sub>2</sub></p>
    </div>
    <div class="work">
      <table class="truth trace">
        <thead><tr><th>ভগ্নাংশ × ২</th><th>পূর্ণ অংশ</th></tr></thead>
        <tbody><tr><td>0.15 × 2 = 0.30</td><td>0</td></tr><tr><td>0.30 × 2 = 0.60</td><td>0</td></tr><tr><td>0.60 × 2 = 1.20</td><td>1</td></tr><tr><td>0.20 × 2 = 0.40</td><td>0</td></tr><tr><td>0.40 × 2 = 0.80</td><td>0</td></tr><tr><td>0.80 × 2 = 1.60</td><td>1</td></tr><tr><td>0.60 × 2 = 1.20</td><td>1</td></tr><tr><td>0.20 × 2 = 0.40</td><td>0</td></tr></tbody>
      </table>
      <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 4 V142 M5 135 L12 144 L19 135"/></svg><span>ওপর থেকে পড়ুন</span></div>
      <p class="work-res">(0.15)<sub>10</sub> ≈ (<b>0.00100110</b>)<sub>2</sub></p>
    </div>
    <p class="prose">০.১৫ বাইনারিতে শেষ হয় না (তৃতীয় ধাপ থেকে 1001 বারবার আসে), তাই প্রথম সংখ্যার মতো ৮ ঘর নেওয়া হলো: (201.15)<sub>10</sub> ≈ (11001001.00100110)<sub>2</sub>।</p>

    <h4 class="sub-h"><span>ধাপ ৩</span>বাইনারি যোগ</h4>
    <div class="bcalc">
      <code>  01011010.00110101</code><span>(5A.35)<sub>16</sub></span>
      <code class="add">+ 11001001.00100110</code><span>(201.15)<sub>10</sub></span>
      <code class="res">100100011.01011011</code><span>যোগফল</span>
    </div>

    <h4 class="sub-h"><span>ধাপ ৪</span>যোগফল থেকে অক্টাল</h4>
    <p class="prose">বিন্দু থেকে বাঁয়ে ও ডানে ৩ বিট করে দল বানাই; ডানের শেষ দলে দরকারমতো 0 যোগ করি:</p>
    <p class="expand"><span>পূর্ণ অংশ</span> 100 100 011 = <b>443</b></p>
    <p class="expand"><span>ভগ্নাংশ</span> 010 110 110 = <b>266</b></p>
    <p class="final"><b>উত্তর</b>যোগফল (100100011.01011011)<sub>2</sub> ≈ (443.266)<sub>8</sub></p>
    <p class="prose">যাচাই: (5A.35)<sub>16</sub> = ৯০.২০৭০৩১২৫ আর (201.15)<sub>10</sub>, যোগফল ২৯১.৩৫৭; (443.266)<sub>8</sub> = ২৯১.৩৫৫। সামান্য পার্থক্য ০.১৫-কে ৮ ঘরে ছাঁটার জন্য।</p>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. (10110)<sub>2</sub> থেকে (1011)<sub>2</sub> বিয়োগ</span><i class="bub mk">৫</i></h3>
    <h4 class="sub-h"><span>পদ্ধতি ১</span>সরাসরি বিয়োগ</h4>
    <p class="prose">নিয়ম: 0 − 0 = 0, 1 − 0 = 1, 1 − 1 = 0, আর 0 − 1-এ বাঁয়ের ঘর থেকে ধার নিলে 10 − 1 = 1।</p>
    <div class="bcalc">
      <code>  10110</code><span>(২২)<sub>১০</sub></span>
      <code class="add">− 01011</code><span>(১১)<sub>১০</sub></span>
      <code class="res">  01011</code><span>ডান থেকে: 10 − 1 = 1 (ধার); 1 − 1 − 1-এ আবার ধার, 11 − 1 − 1 = 1; 1 − 0 − 1 = 0; 10 − 1 = 1 (ধার); 1 − 0 − 1 = 0</span>
    </div>
    <h4 class="sub-h"><span>পদ্ধতি ২</span>২-এর পরিপূরক দিয়ে</h4>
    <div class="bcalc">
      <code>01011</code><span>(1011)<sub>2</sub>, ৫ বিটে</span>
      <code>10100</code><span>সব বিট উল্টে</span>
      <code class="add">+    1</code><span>১ যোগ</span>
      <code class="res">10101</code><span>২-এর পরিপূরক</span>
    </div>
    <div class="bcalc">
      <code>  10110</code><span>(10110)<sub>2</sub></span>
      <code class="add">+ 10101</code><span>পরিপূরক</span>
      <code class="res"><i class="carry" title="শেষ ক্যারি">1</i> 01011</code><span>শেষ ক্যারি <i class="carry">1</i> বাদ দিলে <b>01011</b></span>
    </div>
    <p class="final"><b>উত্তর</b>(10110)<sub>2</sub> − (1011)<sub>2</sub> = (1011)<sub>2</sub>, অর্থাৎ ২২ − ১১ = ১১</p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ক. বিভিন্ন প্রকার সংখ্যা পদ্ধতি</span><i class="bub mk">১০</i></h3>
    <p class="inc-note">এই অংশটি ১৬তম পরীক্ষার ৪ নম্বর প্রশ্নের উত্তরেও আছে।</p>
    <div data-include="wa-16-school-4" data-part="1" data-inner></div>
    <h4 class="sub-h"><span>৫</span>নন-পজিশনাল পদ্ধতি</h4>
    <p class="prose">এ পদ্ধতিতে প্রতিটি চিহ্নের একটি নির্দিষ্ট মান থাকে, অবস্থান বদলালে মান বদলায় না; ভিত্তি বা শূন্য নেই। যেমন রোমান পদ্ধতি (I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000):</p>
    <p class="expand"><span>XV</span> = 10 + 5 = <b>15</b></p>
    <p class="expand"><span>MDCLXVI</span> = 1000 + 500 + 100 + 50 + 10 + 5 + 1 = <b>1666</b></p>
    <p class="prose">হিসাব জটিল বলে কম্পিউটারে নন-পজিশনাল পদ্ধতি ব্যবহার হয় না; কম্পিউটার চলে পজিশনাল বাইনারিতে।</p>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. (ABCDEF)<sub>16</sub> থেকে দশমিক</span><i class="bub mk">৫</i></h3>
    <p class="prose">প্রতিটি অঙ্কের মানকে তার স্থানীয় মান (১৬-এর ঘাত) দিয়ে গুণ করে যোগ করি। A = 10, B = 11, C = 12, D = 13, E = 14, F = 15।</p>
    <table class="truth trace">
      <thead><tr><th>অঙ্ক</th><th>মান</th><th>স্থানীয় মান</th><th>গুণফল</th></tr></thead>
      <tbody><tr><td>A</td><td>10</td><td>16<sup>5</sup> = 1048576</td><td>10485760</td></tr><tr><td>B</td><td>11</td><td>16<sup>4</sup> = 65536</td><td>720896</td></tr><tr><td>C</td><td>12</td><td>16<sup>3</sup> = 4096</td><td>49152</td></tr><tr><td>D</td><td>13</td><td>16<sup>2</sup> = 256</td><td>3328</td></tr><tr><td>E</td><td>14</td><td>16<sup>1</sup> = 16</td><td>224</td></tr><tr><td>F</td><td>15</td><td>16<sup>0</sup> = 1</td><td>15</td></tr></tbody>
    </table>
    <p class="final"><b>উত্তর</b>(ABCDEF)<sub>16</sub> = (11259375)<sub>10</sub></p>
  </section>
</div>
<aside class="side">
  <p><b>ভগ্নাংশ না ফুরালে</b>দুটি সংখ্যার ভগ্নাংশে সমান ঘর নিন এবং উত্তরে ≈ চিহ্ন দিন; কত ঘর নিলেন লিখে দিন।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/number-system/convert">অধ্যায় ২ · দশমিক থেকে রূপান্তর</a>, <a href="#/note/number-system/arith">যোগ-বিয়োগ</a>, <a href="#/note/number-system/todec">দশমিকে রূপান্তর</a></p>
  <p class="tags"><span class="xt">অধ্যায়: সংখ্যা পদ্ধতি</span></p>
</aside>
`,

4: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. লজিক গেইট; মৌলিক গেইটের নাম, সত্যক সারণি ও প্রতীক</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>লজিক গেইট</b>যে ইলেকট্রনিক সার্কিট এক বা একাধিক বাইনারি ইনপুট (০ বা ১) নিয়ে একটি নির্দিষ্ট যুক্তি অনুযায়ী একটি বাইনারি আউটপুট দেয়, তাকে লজিক গেইট বলে। এটি ডিজিটাল সার্কিটের মৌলিক গঠন-একক; প্রতিটি গেইট একটি বুলিয়ান অপারেশন বাস্তবায়ন করে।</p>
    <p class="inc-note">মৌলিক গেইটের অংশটি ১৭তম পরীক্ষার ৫ নম্বর প্রশ্নের উত্তরেও আছে।</p>
    <div data-include="wa-17-school-5" data-part="1" data-inner></div>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. 57A কোন ধরনের সংখ্যা; এর অক্টাল মান</span><i class="bub mk">৫</i></h3>
    <p class="prose">57A-তে A অঙ্কটি আছে, যা শুধু হেক্সাডেসিমাল পদ্ধতিতে ব্যবহৃত হয় (A = ১০)। তাই এটি একটি <b>হেক্সাডেসিমাল সংখ্যা</b>: (57A)<sub>16</sub>।</p>
    <p class="prose">অক্টালে নিতে আগে প্রতিটি অঙ্কের বদলে ৪ বিট, তারপর ডান থেকে ৩ বিট করে দল:</p>
    <p class="expand"><span>(57A)<sub>16</sub></span> = 0101 0111 1010 = 010 101 111 010 = (<b>2572</b>)<sub>8</sub></p>
    <p class="final"><b>উত্তর</b>(57A)<sub>16</sub> = (2572)<sub>8</sub></p>
    <p class="prose">যাচাই: (57A)<sub>16</sub> = ৫ × ২৫৬ + ৭ × ১৬ + ১০ = ১৪০২; (2572)<sub>8</sub> = ২ × ৫১২ + ৫ × ৬৪ + ৭ × ৮ + ২ = ১৪০২।</p>
  </section>
</div>
<aside class="side">
  <p><b>অথবা নেই</b>ছাপা প্রশ্নপত্রে এই প্রশ্নের কোনো “অথবা” নেই; দুটি অংশই লিখতে হবে।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/number-system/between">অধ্যায় ২ · পদ্ধতির মধ্যে রূপান্তর</a></p>
  <p class="tags"><span class="xt">অধ্যায়: লজিক সার্কিট ও লজিক গেট</span><span class="xt">সংখ্যা পদ্ধতি</span></p>
</aside>
`,

5: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. সমীকরণ সরলীকরণ ও লজিক সার্কিট</span><i class="bub mk">১০</i></h3>
    <p class="inc-note">ছাপা প্রশ্নপত্রে সমীকরণটি নেই। নিচে এ ধরনের প্রশ্নের নিয়মটি একটি উদাহরণ সমীকরণে দেখানো হলো; পরীক্ষায় যে সমীকরণই আসুক, ধাপগুলো একই।</p>
    <p class="prose"><b>উদাহরণ:</b> F = AB + A(B + C) + B(B + C)</p>
    <h4 class="sub-h"><span>ধাপ ১</span>সরলীকরণ</h4>
    <ul class="eqs">
      <li><span>F = AB + A(B + C) + B(B + C)</span></li>
      <li><span>= AB + AB + AC + BB + BC</span><small>বণ্টন সূত্র</small></li>
      <li><span>= AB + AC + B + BC</span><small>X + X = X, X·X = X</small></li>
      <li><span>= AB + AC + B</span><small>B + BC = B (শোষণ)</small></li>
      <li><span>= B + AC</span><small>B + AB = B (শোষণ)</small></li>
    </ul>
    <p class="final"><b>সরলীকৃত মান</b>F = B + AC</p>
    <h4 class="sub-h"><span>ধাপ ২</span>সত্যক সারণিতে যাচাই</h4>
    <table class="truth">
      <thead><tr><th>A</th><th>B</th><th>C</th><th>মূল F</th><th>B + AC</th></tr></thead>
      <tbody><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr></tbody>
    </table>
    <h4 class="sub-h"><span>ধাপ ৩</span>সরলীকৃত মানের লজিক সার্কিট</h4>
    <figure class="fig wide mid">
      <svg viewBox="0 0 540 150" role="img" aria-label="লজিক সার্কিট: A ও C একটি AND গেইটে গিয়ে AC হয়; AC ও B একটি OR গেইটে গিয়ে F দেয়।">
        <text x="6" y="44" text-anchor="start">A</text><path class="w" d="M20 40H200"/>
        <text x="6" y="70" text-anchor="start">C</text><path class="w" d="M20 66H200"/>
        <text x="6" y="124" text-anchor="start">B</text><path class="w" d="M20 120H270V98H298"/>
        <path class="w" d="M245 53H270V72H298"/><text x="250" y="46" text-anchor="start">AC</text>
        <path class="w" d="M335 85H390"/><text x="396" y="89" text-anchor="start">F</text>
        <path class="gb" d="M200 28H220A25 25 0 0 1 220 78H200Z"/>
        <path class="gb" d="M290 60Q305 85 290 110Q320 110 335 85Q320 60 290 60Z"/>
        <text class="cap" x="222" y="142" text-anchor="middle">AND</text><text class="cap" x="312" y="142" text-anchor="middle">OR</text>
      </svg>
      <figcaption>চিত্র: F = B + AC-এর লজিক সার্কিট</figcaption>
    </figure>
    <p class="prose">মূল সমীকরণ সরাসরি বানাতে লাগত তিনটি AND ও দুটি OR গেইট (B + C-এর জন্য একটি, শেষে তিন ইনপুটের একটি); সরল করার পর লাগে মাত্র একটি AND ও একটি OR। সার্কিট ছোট, সস্তা ও দ্রুত হয়, সরলীকরণের উদ্দেশ্য এটিই।</p>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. <span class="ov">X + Y + Z</span> = <span class="ov">X</span>·<span class="ov">Y</span>·<span class="ov">Z</span> প্রমাণ</span><i class="bub mk">৫</i></h3>
    <p class="prose">তিন চলকে ২<sup>৩</sup> = ৮টি সারি। দুই পাশের মান প্রতিটি সারিতে মিললে সমীকরণটি প্রমাণিত (ডি মরগানের প্রথম উপপাদ্য)।</p>
    <table class="truth">
      <thead><tr><th>X</th><th>Y</th><th>Z</th><th>X+Y+Z</th><th><span class="ov">X+Y+Z</span></th><th><span class="ov">X</span>·<span class="ov">Y</span>·<span class="ov">Z</span></th></tr></thead>
      <tbody><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr></tbody>
    </table>
    <p class="final"><b>প্রমাণিত</b>শেষ দুই কলাম আটটি সারিতেই সমান, তাই <span class="ov">X + Y + Z</span> = <span class="ov">X</span>·<span class="ov">Y</span>·<span class="ov">Z</span></p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ক. CPU; নিয়ন্ত্রণ অংশের কার্যাবলি</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>CPU (Central Processing Unit) বা কেন্দ্রীয় প্রক্রিয়াকরণ অংশ কম্পিউটারের সেই অংশ, যা প্রোগ্রামের প্রতিটি নির্দেশ পড়ে, বোঝে ও পালন করে। এর তিন অংশ: নিয়ন্ত্রণ অংশ (CU), গাণিতিক যুক্তি অংশ (ALU) ও রেজিস্টার।</p>
    <p class="prose">নিয়ন্ত্রণ অংশ নিজে কোনো হিসাব করে না; এটি নির্দেশ এনে বোঝে এবং কম্পিউটারের সব অংশকে সংকেত দিয়ে কাজ করায়, যেমন একটি অর্কেস্ট্রার পরিচালক।</p>
    <figure class="fig flow wide big">
      <svg viewBox="0 0 580 290" role="img" aria-label="নিয়ন্ত্রণ অংশ: প্রোগ্রাম কাউন্টার প্রধান স্মৃতিতে ঠিকানা পাঠায়; স্মৃতি থেকে নির্দেশ আসে নির্দেশ রেজিস্টারে; ডিকোডার তা বোঝে; সময় ও নিয়ন্ত্রণ অংশ ক্লকের তালে ALU, ইনপুট, আউটপুট ও স্মৃতিতে নিয়ন্ত্রণ সংকেত পাঠায়।">
        <defs><marker id="cu15-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
        <rect class="fs" x="10" y="100" width="100" height="80"/><text x="60" y="128">প্রধান</text><text x="60" y="152">স্মৃতি</text>
        <rect class="cpu" x="140" y="20" width="280" height="240"/><text class="sm" x="215" y="34">নিয়ন্ত্রণ অংশ (CU)</text>
        <rect class="fs" x="165" y="48" width="120" height="44"/><text x="225" y="62">PC</text><text class="sm" x="225" y="80">পরের ঠিকানা</text>
        <rect class="fs" x="165" y="120" width="120" height="44"/><text x="225" y="134">IR</text><text class="sm" x="225" y="152">চলতি নির্দেশ</text>
        <rect class="fs" x="165" y="192" width="120" height="44"/><text x="225" y="214">ডিকোডার</text>
        <rect class="fs fd" x="315" y="48" width="85" height="188"/><text x="357" y="130">সময় ও</text><text x="357" y="154">নিয়ন্ত্রণ</text>
        <path class="fa" d="M165 70H60V98" marker-end="url(#cu15-ah)"/><text class="sm" x="104" y="58">ঠিকানা</text>
        <path class="fa" d="M110 142H163" marker-end="url(#cu15-ah)"/>
        <path class="fa" d="M225 164V190" marker-end="url(#cu15-ah)"/>
        <path class="fa" d="M285 214H313" marker-end="url(#cu15-ah)"/>
        <path class="fa" d="M357 8V46" marker-end="url(#cu15-ah)"/><text class="sm" x="386" y="16">ক্লক</text>
        <rect class="fs" x="470" y="40" width="100" height="40"/><text x="520" y="60">ALU</text>
        <rect class="fs" x="470" y="120" width="100" height="40"/><text x="520" y="140">ইনপুট</text>
        <rect class="fs" x="470" y="200" width="100" height="40"/><text x="520" y="220">আউটপুট</text>
        <path class="fa dash" d="M400 90H435V60H468" marker-end="url(#cu15-ah)"/>
        <path class="fa dash" d="M400 140H468" marker-end="url(#cu15-ah)"/>
        <path class="fa dash" d="M400 190H435V220H468" marker-end="url(#cu15-ah)"/>
        <path class="fa dash" d="M357 236V276H60V182" marker-end="url(#cu15-ah)"/>
        <text class="sm" x="520" y="264">নিয়ন্ত্রণ সংকেত</text>
      </svg>
      <figcaption>চিত্র: নিয়ন্ত্রণ অংশের কাজ। টানা রেখা ঠিকানা ও নির্দেশের পথ, ড্যাশ রেখা নিয়ন্ত্রণ সংকেত।</figcaption>
    </figure>
    <h4 class="sub-h"><span>১</span>নির্দেশ আনা (Fetch)</h4>
    <p class="prose">প্রোগ্রাম কাউন্টারে (PC) থাকা ঠিকানা থেকে পরের নির্দেশটি প্রধান স্মৃতি থেকে এনে নির্দেশ রেজিস্টারে (IR) রাখে; PC এক ঘর এগিয়ে যায়।</p>
    <h4 class="sub-h"><span>২</span>নির্দেশ বোঝা (Decode)</h4>
    <p class="prose">ডিকোডার নির্দেশটি ভেঙে দেখে কোন কাজ (যোগ, তুলনা, স্থানান্তর) এবং কোন উপাত্ত নিয়ে।</p>
    <h4 class="sub-h"><span>৩</span>পালন করানো (Execute)</h4>
    <p class="prose">ALU-কে হিসাব করতে, রেজিস্টার ও স্মৃতিকে উপাত্ত দিতে বা নিতে সংকেত পাঠায়; ফল রেজিস্টারে বা স্মৃতিতে জমা করায়।</p>
    <h4 class="sub-h"><span>৪</span>সমন্বয় ও সময় নিয়ন্ত্রণ</h4>
    <ul class="pts">
      <li>ক্লক সংকেতের তালে সব অংশের কাজের ক্রম ও সময় মেলায়।</li>
      <li>ইনপুট থেকে উপাত্ত স্মৃতিতে আনা এবং ফল আউটপুটে পাঠানো নিয়ন্ত্রণ করে।</li>
      <li>বাসে উপাত্তের প্রবাহ নিয়ন্ত্রণ করে; ইন্টারাপ্ট ও ত্রুটি সামলায়।</li>
    </ul>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. স্মৃতি ইউনিটের কাজ</span><i class="bub mk">৫</i></h3>
    <ul class="pts">
      <li><b>প্রোগ্রাম রাখা:</b> চলমান প্রোগ্রামের নির্দেশগুলো রাখে, যেখান থেকে CPU একটি একটি করে নেয়।</li>
      <li><b>উপাত্ত রাখা:</b> ইনপুট যন্ত্র থেকে আসা উপাত্ত প্রক্রিয়াকরণের আগ পর্যন্ত জমা রাখে।</li>
      <li><b>মধ্যবর্তী ফল রাখা:</b> হিসাবের মাঝখানের ফল রেখে পরের ধাপে CPU-কে দেয়।</li>
      <li><b>চূড়ান্ত ফল রাখা:</b> আউটপুটে পাঠানোর আগে বা পরে ব্যবহারের জন্য ফল জমা রাখে।</li>
      <li><b>স্থায়ী সংরক্ষণ:</b> সহায়ক স্মৃতি (হার্ডডিস্ক, SSD) ফাইল ও প্রোগ্রাম স্থায়ীভাবে রাখে।</li>
      <li><b>চালু করার নির্দেশ:</b> ROM-এ থাকা BIOS কম্পিউটার চালু করে অপারেটিং সিস্টেম লোড করে।</li>
    </ul>
  </section>
</div>
<aside class="side">
  <p><b>সমীকরণ না থাকলে</b>পরীক্ষার হলে এমন হলে পরিদর্শককে জানান; সময় নষ্ট না করে অথবা অংশের উত্তর দেওয়াই নিরাপদ।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/computer-basics/org">অধ্যায় ১ · সংগঠন, CPU ও ALU</a>, <a href="#/note/computer-basics/mem">স্মৃতি</a></p>
  <p class="tags"><span class="xt">অধ্যায়: লজিক সার্কিট ও লজিক গেট</span><span class="xt">কম্পিউটার বেসিক</span></p>
</aside>
`,

6: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ডিস্ট্রিবিউটেড অপারেটিং সিস্টেম</span><i class="bub mk">৫</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>যে অপারেটিং সিস্টেম নেটওয়ার্কে যুক্ত একাধিক স্বাধীন কম্পিউটারকে (প্রত্যেকের নিজস্ব CPU ও স্মৃতি) এমনভাবে পরিচালনা করে যে ব্যবহারকারীর কাছে সবগুলো মিলে একটি কম্পিউটার মনে হয়, তাকে ডিস্ট্রিবিউটেড অপারেটিং সিস্টেম বলে।</p>
    <figure class="fig flow wide">
      <svg viewBox="0 0 460 210" role="img" aria-label="ডিস্ট্রিবিউটেড অপারেটিং সিস্টেম: চারটি কম্পিউটার, প্রত্যেকের নিজস্ব CPU ও স্মৃতি, একটি নেটওয়ার্কে যুক্ত; নেটওয়ার্কে প্রিন্টার ও ফাইল সার্ভারও আছে; সবগুলো মিলে একটি সিস্টেম।">
        <rect class="cpu" x="8" y="8" width="444" height="194"/><text class="sm" x="230" y="24">সবগুলো মিলে একটি সিস্টেম</text>
        <rect class="fs" x="14" y="38" width="100" height="50"/><text x="64" y="56">কম্পিউটার ১</text><text class="sm" x="64" y="76">CPU + স্মৃতি</text>
        <rect class="fs" x="124" y="38" width="100" height="50"/><text x="174" y="56">কম্পিউটার ২</text><text class="sm" x="174" y="76">CPU + স্মৃতি</text>
        <rect class="fs" x="234" y="38" width="100" height="50"/><text x="284" y="56">কম্পিউটার ৩</text><text class="sm" x="284" y="76">CPU + স্মৃতি</text>
        <rect class="fs" x="344" y="38" width="100" height="50"/><text x="394" y="56">কম্পিউটার ৪</text><text class="sm" x="394" y="76">CPU + স্মৃতি</text>
        <path class="fa" d="M64 88V122M174 88V122M284 88V122M394 88V122M170 128V150M300 128V150"/>
        <path class="busl" d="M20 125H440"/><text class="sm" x="229" y="110">নেটওয়ার্ক</text>
        <rect class="fs fd" x="110" y="152" width="120" height="36"/><text x="170" y="170">প্রিন্টার</text>
        <rect class="fs fd" x="240" y="152" width="120" height="36"/><text x="300" y="170">ফাইল সার্ভার</text>
      </svg>
      <figcaption>চিত্র: ডিস্ট্রিবিউটেড অপারেটিং সিস্টেম</figcaption>
    </figure>
    <ul class="pts">
      <li><b>রিসোর্স ভাগাভাগি:</b> এক কম্পিউটারের ব্যবহারকারী অন্য কম্পিউটারের ফাইল, প্রিন্টার বা প্রসেসর ব্যবহার করতে পারেন।</li>
      <li><b>দ্রুত হিসাব:</b> একটি বড় কাজ কয়েকটি কম্পিউটারে ভাগ করে একসঙ্গে চালানো যায় (লোড ভাগাভাগি)।</li>
      <li><b>নির্ভরযোগ্যতা:</b> একটি কম্পিউটার নষ্ট হলেও বাকিরা কাজ চালিয়ে যায়।</li>
      <li><b>স্বচ্ছতা:</b> কোন কাজ কোন কম্পিউটারে হচ্ছে, ব্যবহারকারীকে জানতে হয় না।</li>
      <li><b>অসুবিধা:</b> নেটওয়ার্ক বিকল হলে সমস্যা; নিরাপত্তা ঝুঁকি বেশি; সফটওয়্যার জটিল।</li>
    </ul>
    <p class="prose">মাল্টিপ্রসেসিংয়ে প্রসেসরগুলো একটি স্মৃতি ভাগ করে (দৃঢ়ভাবে যুক্ত); ডিস্ট্রিবিউটেডে প্রত্যেকের নিজস্ব স্মৃতি, যোগাযোগ নেটওয়ার্কে (শিথিলভাবে যুক্ত)। উদাহরণ: Amoeba, Plan 9।</p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ওয়েব ব্রাউজার ও এর কাজ</span><i class="bub mk">৫</i></h3>
    <p class="inc-note">একই প্রশ্ন ১৬তম পরীক্ষায় এসেছে (প্রশ্ন ৮)।</p>
    <div data-include="wa-16-school-8" data-part="2" data-inner></div>
  </section>
</div>
<aside class="side">
  <p><b>চিত্র দিন</b>কয়েকটি কম্পিউটার, একটি নেটওয়ার্ক আর চারপাশে একটি দাগ “একটি সিস্টেম”; এই চিত্রেই ধারণাটি পরিষ্কার হয়।</p>
  <p class="tags"><span class="xt">অধ্যায়: অপারেটিং সিস্টেম</span><span class="xt">ইন্টারনেট</span></p>
</aside>
`,

7: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>অ্যালগরিদম ও এর শর্ত</span><i class="bub mk">৫</i></h3>
    <p class="inc-note">একই প্রশ্ন ১৭তম পরীক্ষায় এসেছে (প্রশ্ন ১০); অ্যালগরিদমের শর্ত মানেই এর বৈশিষ্ট্যগুলো।</p>
    <div data-include="wa-17-school-10" data-part="2" data-inner></div>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>১ থেকে ১০০ পর্যন্ত স্বাভাবিক সংখ্যার যোগফলের অ্যালগরিদম</span><i class="bub mk">৫</i></h3>
    <ol class="algo">
      <li>শুরু।</li>
      <li>Sum = 0 এবং i = 1 ধরি।</li>
      <li>Sum = Sum + i।</li>
      <li>i = i + 1।</li>
      <li>যদি i ≤ 100 হয়, তবে ধাপ ৩-এ ফিরে যাই।</li>
      <li>Sum প্রিন্ট করি।</li>
      <li>শেষ।</li>
    </ol>
    <h4 class="sub-h"><span>যাচাই</span>প্রথম ও শেষ কয়েকটি ঘুর</h4>
    <table class="truth trace">
      <thead><tr><th>i</th><th>Sum = Sum + i</th></tr></thead>
      <tbody><tr><td>1</td><td>0 + 1 = 1</td></tr><tr><td>2</td><td>1 + 2 = 3</td></tr><tr><td>3</td><td>3 + 3 = 6</td></tr><tr><td>…</td><td>…</td></tr><tr><td>100</td><td>4950 + 100 = 5050</td></tr></tbody>
    </table>
    <p class="final"><b>ফল</b>Sum = ৫০৫০</p>
    <p class="prose">সূত্র দিয়েও মেলে: n(n + 1)/2 = ১০০ × ১০১ / ২ = ৫০৫০।</p>
  </section>
</div>
<aside class="side">
  <p><b>লুপের শর্ত</b>i ≤ 100 না লিখে i &lt; 100 লিখলে ১০০ বাদ পড়ে যোগফল ৪৯৫০ হয়; এই ভুলটি খুব সাধারণ।</p>
  <p class="tags"><span class="xt">অধ্যায়: অ্যালগরিদম ও ফ্লোচার্ট</span></p>
</aside>
`,

8: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>কোড; EBCDIC কোড</span><i class="bub mk">৫</i></h3>
    <p class="defn"><b>কোড</b>কম্পিউটারে বর্ণ, অঙ্ক ও বিশেষ চিহ্নকে বাইনারি বিটের নির্দিষ্ট বিন্যাসে প্রকাশ করার পদ্ধতিকে কোড বলে। কম্পিউটার শুধু ০ ও ১ বোঝে, তাই প্রতিটি অক্ষরের জন্য একটি নির্দিষ্ট বিট-বিন্যাস ঠিক করা থাকে। যেমন BCD, ASCII, EBCDIC, ইউনিকোড।</p>
    <p class="prose"><b>EBCDIC</b> (Extended Binary Coded Decimal Interchange Code) IBM তাদের মেইনফ্রেম (System/360) কম্পিউটারের জন্য ১৯৬০-এর দশকে তৈরি করে। এটি ৮ বিটের কোড, তাই ২<sup>৮</sup> = ২৫৬টি অক্ষর প্রকাশ করা যায়। প্রতিটি অক্ষর দুই ভাগে: বাঁয়ের ৪ বিট <b>জোন</b>, ডানের ৪ বিট <b>ডিজিট</b>।</p>
    <table class="rt cmp">
      <thead><tr><th>অক্ষর</th><th>জোন</th><th>ডিজিট</th><th>হেক্সা</th></tr></thead>
      <tbody>
        <tr><td>A</td><td>1100</td><td>0001</td><td>C1</td></tr>
        <tr><td>I</td><td>1100</td><td>1001</td><td>C9</td></tr>
        <tr><td>J</td><td>1101</td><td>0001</td><td>D1</td></tr>
        <tr><td>S</td><td>1110</td><td>0010</td><td>E2</td></tr>
        <tr><td>0</td><td>1111</td><td>0000</td><td>F0</td></tr>
        <tr><td>9</td><td>1111</td><td>1001</td><td>F9</td></tr>
      </tbody>
    </table>
    <p class="prose">A–I, J–R ও S–Z তিনটি আলাদা জোনে থাকে (C, D, E), তাই বর্ণগুলোর কোড পরপর নয়, মাঝে ফাঁক আছে। অঙ্ক ০–৯ এর কোড F0 থেকে F9। ASCII-র চেয়ে আলাদা বলে দুই কোডের কম্পিউটারের মধ্যে উপাত্ত আদান-প্রদানে রূপান্তর লাগে।</p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>Y = A + <span class="ov">A</span>B + <span class="ov">AB</span>-এর সত্যক সারণি</span><i class="bub mk">৫</i></h3>
    <p class="prose">দুই চলক A ও B, তাই ২<sup>২</sup> = ৪টি সারি।</p>
    <table class="truth">
      <thead><tr><th>A</th><th>B</th><th><span class="ov">A</span>B</th><th><span class="ov">AB</span></th><th>Y</th></tr></thead>
      <tbody><tr><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td></tr></tbody>
    </table>
    <p class="final"><b>ফল</b>সব সারিতে Y = 1, অর্থাৎ Y সবসময় সত্য</p>
    <p class="prose">বীজগণিতেও মেলে: A + <span class="ov">A</span>B = A + B, আর <span class="ov">AB</span> = <span class="ov">A</span> + <span class="ov">B</span>; তাই Y = A + B + <span class="ov">A</span> + <span class="ov">B</span> = (A + <span class="ov">A</span>) + (B + <span class="ov">B</span>) = 1।</p>
  </section>
</div>
<aside class="side">
  <p><b>বিস্তারিত নোট</b><a href="#/note/data-representation/code">অধ্যায় ৩ · কোড</a>, <a href="#/note/data-representation/ascii">ASCII ও EBCDIC</a></p>
  <p class="tags"><span class="xt">অধ্যায়: উপাত্ত উপস্থাপন</span><span class="xt">লজিক সার্কিট ও লজিক গেট</span></p>
</aside>
`,

9: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>(x + y)(x + z) = x + yz প্রমাণ</span><i class="bub mk">৫</i></h3>
    <ul class="eqs">
      <li><span>বামপক্ষ = (x + y)(x + z)</span></li>
      <li><span>= x·x + x·z + y·x + y·z</span><small>বণ্টন সূত্র</small></li>
      <li><span>= x + xz + xy + yz</span><small>x·x = x</small></li>
      <li><span>= x(1 + z + y) + yz</span><small>x সাধারণ উৎপাদক</small></li>
      <li><span>= x·1 + yz</span><small>1 + A = 1</small></li>
      <li><span>= x + yz = ডানপক্ষ</span></li>
    </ul>
    <p class="final"><b>প্রমাণিত</b>(x + y)(x + z) = x + yz</p>
    <p class="prose">এটি বুলিয়ান অ্যালজেবরার বণ্টন সূত্রের দ্বিতীয় রূপ: যোগ গুণের ওপর বণ্টিত হয়, যা সাধারণ বীজগণিতে সত্য নয়।</p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>সংখ্যা জোড় না বিজোড় নির্ণয়ের অ্যালগরিদম</span><i class="bub mk">৫</i></h3>
    <ol class="algo">
      <li>শুরু।</li>
      <li>একটি পূর্ণসংখ্যা N ইনপুট নিই।</li>
      <li>N-কে ২ দিয়ে ভাগ করে ভাগশেষ নির্ণয় করি: R = N mod 2।</li>
      <li>যদি R = 0 হয়, তবে “N জোড় সংখ্যা” প্রিন্ট করি।</li>
      <li>অন্যথায় “N বিজোড় সংখ্যা” প্রিন্ট করি।</li>
      <li>শেষ।</li>
    </ol>
    <h4 class="sub-h"><span>উদাহরণ</span>দুটি সংখ্যায় যাচাই</h4>
    <table class="truth trace">
      <thead><tr><th>N</th><th>R = N mod 2</th><th>ফল</th></tr></thead>
      <tbody><tr><td>24</td><td>0</td><td>জোড়</td></tr><tr><td>17</td><td>1</td><td>বিজোড়</td></tr></tbody>
    </table>
  </section>
</div>
<aside class="side">
  <p><b>প্রতিটি লাইনে সূত্র</b>প্রমাণের প্রতিটি ধাপের পাশে কোন সূত্র লাগালেন লিখুন; ধাপ বাদ দিলে নম্বর কাটে।</p>
  <p class="tags"><span class="xt">অধ্যায়: লজিক সার্কিট ও লজিক গেট</span><span class="xt">অ্যালগরিদম ও ফ্লোচার্ট</span></p>
</aside>
`,

10: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ই-মেইল ও এর মাধ্যমে তথ্য আদান-প্রদান</span><i class="bub mk">৫</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>ই-মেইল (Electronic Mail) হলো ইন্টারনেটের মাধ্যমে এক ব্যবহারকারী থেকে আরেকজনের কাছে লেখা, ছবি ও ফাইল পাঠানোর ইলেকট্রনিক ডাক ব্যবস্থা। প্রত্যেক ব্যবহারকারীর একটি অনন্য ঠিকানা থাকে, যেমন <span class="m">rahim@gmail.com</span>।</p>
    <ol class="chain">
      <li><b>প্রেরক</b><small>লিখে Send</small></li>
      <li><b>প্রেরকের সার্ভার</b><small>SMTP</small></li>
      <li><b>প্রাপকের সার্ভার</b><small>মেইলবক্সে জমা</small></li>
      <li><b>প্রাপক</b><small>POP3 / IMAP</small></li>
    </ol>
    <ol class="algo">
      <li>প্রেরক মেইল প্রোগ্রামে (Gmail, Outlook) প্রাপকের ঠিকানা, বিষয় ও বার্তা লিখে, প্রয়োজনে ফাইল সংযুক্ত করে Send চাপেন।</li>
      <li>বার্তাটি SMTP প্রোটোকলে প্রেরকের মেইল সার্ভারে যায়।</li>
      <li>সার্ভার ঠিকানার @-এর পরের ডোমেইন দেখে DNS থেকে প্রাপকের মেইল সার্ভার খুঁজে SMTP-তে সেখানে পাঠায়।</li>
      <li>বার্তাটি প্রাপকের মেইলবক্সে জমা থাকে; প্রাপক অফলাইনে থাকলেও হারায় না।</li>
      <li>প্রাপক নিজের সুবিধামতো POP3 বা IMAP প্রোটোকলে বার্তাটি নামিয়ে পড়েন এবং Reply বা Forward করতে পারেন।</li>
    </ol>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>DOS ও Windows অপারেটিং সিস্টেমের পার্থক্য</span><i class="bub mk">৫</i></h3>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>DOS</th><th>Windows</th></tr></thead>
      <tbody>
        <tr><td>ইন্টারফেস</td><td>বর্ণভিত্তিক (CUI); কমান্ড টাইপ করতে হয়, যেমন DIR, COPY</td><td>চিত্রভিত্তিক (GUI); আইকন, মেনু ও উইন্ডোতে ক্লিক</td></tr>
        <tr><td>ইনপুট যন্ত্র</td><td>প্রধানত কিবোর্ড</td><td>মাউস, কিবোর্ড, টাচস্ক্রিন</td></tr>
        <tr><td>মাল্টিটাস্কিং</td><td>একসঙ্গে একটি প্রোগ্রাম (সিঙ্গেল টাস্কিং)</td><td>একসঙ্গে অনেক প্রোগ্রাম</td></tr>
        <tr><td>ব্যবহারকারী</td><td>একক ব্যবহারকারী</td><td>একাধিক ব্যবহারকারী অ্যাকাউন্ট</td></tr>
        <tr><td>ফাইলের নাম</td><td>৮ অক্ষর নাম + ৩ অক্ষর এক্সটেনশন</td><td>২৫৫ অক্ষর পর্যন্ত লম্বা নাম</td></tr>
        <tr><td>মাল্টিমিডিয়া ও নেটওয়ার্ক</td><td>সমর্থন নেই বললেই চলে</td><td>পূর্ণ সমর্থন; ইন্টারনেট সহজে</td></tr>
        <tr><td>শেখা</td><td>কঠিন</td><td>সহজ</td></tr>
        <tr><td>হার্ডওয়্যার চাহিদা</td><td>খুব কম</td><td>বেশি মেমোরি ও শক্তিশালী প্রসেসর</td></tr>
      </tbody>
    </table>
    <p class="prose">দুটিই Microsoft-এর তৈরি; MS-DOS ১৯৮১ সালে আর Windows ১৯৮৫ সালে প্রথম আসে।</p>
  </section>
</div>
<aside class="side">
  <p><b>প্রোটোকলের নাম</b>পাঠাতে SMTP, নামাতে POP3 বা IMAP; এই তিনটির নাম লিখলে উত্তর পূর্ণ হয়।</p>
  <p class="tags"><span class="xt">অধ্যায়: ইন্টারনেট</span><span class="xt">অপারেটিং সিস্টেম</span></p>
</aside>
`
};
