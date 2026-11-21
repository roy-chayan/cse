/* Model answers · ১৭তম শিক্ষক নিবন্ধন (২০২৩), সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি), বিষয় কোড ৩১৩.
   One entry per question: the answer HTML, built the same way as the ১৮তম answers in index.html
   (.ans-body with .part sections, then an optional aside.side). "অথবা" answers follow a <p class="ans-or">.
   <div data-include="wa-18-school-2"></div> pulls in an earlier answer to the same question (data-part = one part only;
   data-inner = without that part's heading). Every calculation here was checked by script. */
(window.ICT_ANSWERS = window.ICT_ANSWERS || {})["17-school"] = {

1: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. গঠন ও ক্রিয়ানীতি অনুসারে শ্রেণিবিভাগ</span><i class="bub mk">১০</i></h3>
    <p class="prose">কম্পিউটার কোন ধরনের উপাত্ত নিয়ে কীভাবে কাজ করে, অর্থাৎ গঠন ও ক্রিয়ানীতি অনুসারে কম্পিউটার তিন প্রকার: অ্যানালগ, ডিজিটাল ও হাইব্রিড।</p>
    <figure class="fig">
      <ul class="tree">
        <li><span class="t-root">কম্পিউটার <small>গঠন ও ক্রিয়ানীতি অনুসারে</small></span>
          <ul>
            <li><span>অ্যানালগ</span><span class="leaf">স্পিডোমিটার · থার্মোমিটার · ভোল্টমিটার</span></li>
            <li><span>ডিজিটাল</span><span class="leaf">সুপার · মেইনফ্রেম · মিনি · মাইক্রো</span></li>
            <li><span>হাইব্রিড</span><span class="leaf">ICU-র রোগী পর্যবেক্ষণ যন্ত্র · ECG · ক্ষেপণাস্ত্র নিয়ন্ত্রণ</span></li>
          </ul>
        </li>
      </ul>
      <figcaption>চিত্র: গঠন ও ক্রিয়ানীতি অনুসারে কম্পিউটারের শ্রেণিবিভাগ</figcaption>
    </figure>

    <h4 class="sub-h"><span>১</span>অ্যানালগ কম্পিউটার</h4>
    <p class="prose">যে কম্পিউটার অবিচ্ছিন্নভাবে বদলাতে থাকা রাশি (তাপ, চাপ, গতি, ভোল্টেজ) পরিমাপ করে কাজ করে, তাকে অ্যানালগ কম্পিউটার বলে।</p>
    <ul class="pts">
      <li>উপাত্ত ধারাবাহিক বা অবিচ্ছিন্ন; কাজ করে পরিমাপের মাধ্যমে।</li>
      <li>ফল দেখায় কাঁটা, ডায়াল বা লেখচিত্রে; নির্ভুলতা তুলনামূলক কম।</li>
      <li>সাধারণত স্মৃতি থাকে না; একটি নির্দিষ্ট কাজের জন্য তৈরি।</li>
      <li><b>উদাহরণ:</b> গাড়ির স্পিডোমিটার, থার্মোমিটার, ভোল্টমিটার, সিসমোগ্রাফ।</li>
    </ul>

    <h4 class="sub-h"><span>২</span>ডিজিটাল কম্পিউটার</h4>
    <p class="prose">যে কম্পিউটার সব উপাত্ত ০ ও ১ (বাইনারি) সংকেতে রূপান্তর করে গণনার মাধ্যমে কাজ করে, তাকে ডিজিটাল কম্পিউটার বলে।</p>
    <ul class="pts">
      <li>উপাত্ত বিচ্ছিন্ন (০ ও ১); কাজ করে গণনার মাধ্যমে।</li>
      <li>দ্রুত, নির্ভুল, বিপুল স্মৃতি; প্রোগ্রাম বদলে নানা কাজ করা যায়।</li>
      <li>আকার ও ক্ষমতা অনুসারে আবার চার প্রকার: সুপার, মেইনফ্রেম, মিনি ও মাইক্রো কম্পিউটার।</li>
      <li><b>উদাহরণ:</b> ডেস্কটপ, ল্যাপটপ, স্মার্টফোন, ক্যালকুলেটর।</li>
    </ul>

    <h4 class="sub-h"><span>৩</span>হাইব্রিড কম্পিউটার</h4>
    <p class="prose">অ্যানালগ ও ডিজিটাল দুই ধরনের সুবিধা একসঙ্গে যে কম্পিউটারে থাকে, তাকে হাইব্রিড কম্পিউটার বলে। এর অ্যানালগ অংশ সেন্সর থেকে অবিচ্ছিন্ন সংকেত মাপে, রূপান্তরক (ADC) তা ডিজিটাল সংখ্যায় বদলায়, আর ডিজিটাল অংশ হিসাব করে ফল দেখায় বা যন্ত্রকে নিয়ন্ত্রণ করে।</p>
    <ul class="pts">
      <li><b>উদাহরণ:</b> হাসপাতালের ICU-তে রোগীর রক্তচাপ ও হৃৎস্পন্দন পর্যবেক্ষণ, ECG যন্ত্র, আবহাওয়া পর্যবেক্ষণ, মহাকাশযান ও ক্ষেপণাস্ত্র নিয়ন্ত্রণ।</li>
    </ul>

    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>অ্যানালগ</th><th>ডিজিটাল</th><th>হাইব্রিড</th></tr></thead>
      <tbody>
        <tr><td>উপাত্ত</td><td>অবিচ্ছিন্ন</td><td>বিচ্ছিন্ন (০, ১)</td><td>দুই ধরনেরই</td></tr>
        <tr><td>কাজের ধরন</td><td>পরিমাপ</td><td>গণনা</td><td>পরিমাপ ও গণনা</td></tr>
        <tr><td>নির্ভুলতা</td><td>কম</td><td>বেশি</td><td>বেশি</td></tr>
      </tbody>
    </table>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. দ্বিতীয় প্রজন্মের কম্পিউটারের বৈশিষ্ট্য</span><i class="bub mk">৫</i></h3>
    <p class="prose">দ্বিতীয় প্রজন্মের সময়কাল মোটামুটি ১৯৫৯–১৯৬৫। এর বৈশিষ্ট্য:</p>
    <ul class="pts">
      <li>মূল ইলেকট্রনিক উপাদান ট্রানজিস্টর (১৯৪৭ সালে বেল ল্যাবরেটরিতে উদ্ভাবিত)।</li>
      <li>ভ্যাকুয়াম টিউবের চেয়ে আকারে ছোট, বিদ্যুৎ খরচ ও তাপ কম।</li>
      <li>দ্রুততর ও বেশি নির্ভরযোগ্য; কাজের গতি মাইক্রোসেকেন্ড পর্যায়ের।</li>
      <li>প্রধান স্মৃতি চৌম্বক কোর; সহায়ক স্মৃতি চৌম্বক টেপ ও ডিস্ক।</li>
      <li>অ্যাসেম্বলি ভাষা এবং FORTRAN ও COBOL-এর মতো উচ্চস্তরের ভাষার ব্যবহার শুরু।</li>
      <li><b>উদাহরণ:</b> IBM 1401, IBM 1620, CDC 1604।</li>
    </ul>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ক. সুপার কম্পিউটার ও মেইনফ্রেম কম্পিউটার</span><i class="bub mk">১০</i></h3>
    <h4 class="sub-h"><span>১</span>সুপার কম্পিউটার</h4>
    <p class="prose">সবচেয়ে দ্রুতগতির, সবচেয়ে শক্তিশালী ও ব্যয়বহুল কম্পিউটারকে সুপার কম্পিউটার বলে। এতে হাজার হাজার প্রসেসর একসঙ্গে একটি কাজ ভাগ করে (সমান্তরাল প্রক্রিয়াকরণ) করে।</p>
    <ul class="pts">
      <li>গতি মাপা হয় FLOPS (প্রতি সেকেন্ডে ফ্লোটিং পয়েন্ট অপারেশন) এককে; বর্তমানে কোটি কোটি বিলিয়ন অপারেশন।</li>
      <li>বিশাল আকার, প্রচুর বিদ্যুৎ লাগে, শীতল রাখার বিশেষ ব্যবস্থা লাগে।</li>
      <li><b>ব্যবহার:</b> আবহাওয়ার পূর্বাভাস, পারমাণবিক ও মহাকাশ গবেষণা, ভূমিকম্প বিশ্লেষণ, ওষুধ আবিষ্কারের জটিল হিসাব।</li>
      <li><b>উদাহরণ:</b> Frontier (যুক্তরাষ্ট্র), Fugaku (জাপান), PARAM (ভারত)।</li>
    </ul>
    <h4 class="sub-h"><span>২</span>মেইনফ্রেম কম্পিউটার</h4>
    <p class="prose">যে বড় ও শক্তিশালী কম্পিউটার একসঙ্গে শত শত, এমনকি হাজারো ব্যবহারকারীর বিপুল লেনদেন ও তথ্য সামলায়, তাকে মেইনফ্রেম কম্পিউটার বলে। ব্যবহারকারীরা টার্মিনাল দিয়ে এর সঙ্গে যুক্ত থাকেন।</p>
    <ul class="pts">
      <li>একই সময়ে বহু ব্যবহারকারী ও বহু প্রোগ্রাম চালাতে পারে; বিপুল স্মৃতি ও সংরক্ষণক্ষমতা।</li>
      <li>অত্যন্ত নির্ভরযোগ্য, বছরের পর বছর না থেমে চলে।</li>
      <li><b>ব্যবহার:</b> ব্যাংক, বিমা, বিমানের টিকিট সংরক্ষণ, সরকারি তথ্যভান্ডার, বড় প্রতিষ্ঠানের হিসাব।</li>
      <li><b>উদাহরণ:</b> IBM z সিরিজ।</li>
    </ul>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>সুপার</th><th>মেইনফ্রেম</th></tr></thead>
      <tbody>
        <tr><td>মূল লক্ষ্য</td><td>একটি জটিল হিসাব সবচেয়ে দ্রুত</td><td>অনেক ব্যবহারকারীর অনেক লেনদেন একসঙ্গে</td></tr>
        <tr><td>গতি</td><td>সবচেয়ে বেশি</td><td>বেশি, তবে সুপারের চেয়ে কম</td></tr>
        <tr><td>ব্যবহারকারী</td><td>অল্প কয়েকটি গবেষণা দল</td><td>শত শত থেকে হাজারো</td></tr>
        <tr><td>দাম</td><td>সবচেয়ে বেশি</td><td>অনেক বেশি</td></tr>
      </tbody>
    </table>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. অ্যানালগ ও ডিজিটাল কম্পিউটারের পার্থক্য</span><i class="bub mk">৫</i></h3>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>অ্যানালগ</th><th>ডিজিটাল</th></tr></thead>
      <tbody>
        <tr><td>উপাত্ত</td><td>অবিচ্ছিন্ন (ধারাবাহিক) রাশি</td><td>বিচ্ছিন্ন সংকেত, ০ ও ১</td></tr>
        <tr><td>কাজের ধরন</td><td>পরিমাপ করে</td><td>গণনা করে</td></tr>
        <tr><td>নির্ভুলতা</td><td>কম, আনুমানিক</td><td>বেশি</td></tr>
        <tr><td>ফলাফল</td><td>কাঁটা, ডায়াল বা লেখচিত্রে</td><td>সংখ্যা বা লেখায়</td></tr>
        <tr><td>স্মৃতি</td><td>সাধারণত থাকে না</td><td>বিপুল স্মৃতি</td></tr>
        <tr><td>ব্যবহার</td><td>নির্দিষ্ট একটি পরিমাপে</td><td>বহুমুখী</td></tr>
        <tr><td>উদাহরণ</td><td>স্পিডোমিটার, থার্মোমিটার</td><td>পিসি, ল্যাপটপ, ক্যালকুলেটর</td></tr>
      </tbody>
    </table>
  </section>
</div>
<aside class="side">
  <p><b>নম্বর পেতে</b>শ্রেণিবিভাগের প্রশ্নে আগে গাছটি আঁকুন, তারপর প্রতিটি প্রকারের সংজ্ঞা, ২–৩টি বৈশিষ্ট্য ও উদাহরণ। শেষে ছোট তুলনা ছক।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/computer-basics/type">অধ্যায় ১ · প্রকারভেদ ও শ্রেণিবিন্যাস</a></p>
  <p class="tags"><span class="xt">অধ্যায়: কম্পিউটার বেসিক</span></p>
</aside>
`,

2: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. সিপিইউ কী? সিপিইউ-এর সংগঠন</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>CPU (Central Processing Unit) বা কেন্দ্রীয় প্রক্রিয়াকরণ অংশ হলো কম্পিউটারের সেই অংশ, যা প্রোগ্রামের প্রতিটি নির্দেশ পড়ে, বুঝে এবং পালন করে; সব হিসাব ও সিদ্ধান্ত এখানে হয় বলে একে কম্পিউটারের মস্তিষ্ক বলা হয়।</p>
    <p class="prose">CPU তিনটি প্রধান অংশে গঠিত: নিয়ন্ত্রণ অংশ, গাণিতিক যুক্তি অংশ ও রেজিস্টার। অংশগুলো অভ্যন্তরীণ বাস দিয়ে যুক্ত, আর সিস্টেম বাস দিয়ে প্রধান স্মৃতির সঙ্গে।</p>
    <figure class="fig flow wide cpuorg">
      <svg viewBox="0 0 560 300" role="img" aria-label="সিপিইউ-এর সংগঠন: নিয়ন্ত্রণ অংশ, গাণিতিক যুক্তি অংশ ও রেজিস্টার অভ্যন্তরীণ বাস দিয়ে যুক্ত; সিস্টেম বাস দিয়ে সিপিইউ প্রধান স্মৃতির সঙ্গে যুক্ত; নিয়ন্ত্রণ অংশ সংকেত দিয়ে গাণিতিক যুক্তি অংশকে চালায়।">
        <defs><marker id="cpu17-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
        <rect class="cpu" x="10" y="10" width="350" height="280"/><text class="sm" x="40" y="26">CPU</text>
        <rect class="fs" x="40" y="36" width="300" height="62"/><text x="190" y="58">নিয়ন্ত্রণ অংশ (CU)</text><text class="sm" x="190" y="82">PC · IR · ডিকোডার · টাইমিং</text>
        <path class="busl" d="M40 150H340"/><text class="sm" x="262" y="138">অভ্যন্তরীণ বাস</text>
        <path class="fa" d="M190 100V148" marker-start="url(#cpu17-ah)" marker-end="url(#cpu17-ah)"/>
        <rect class="fs fd" x="40" y="200" width="140" height="70"/><text x="110" y="226">গাণিতিক যুক্তি</text><text x="110" y="248">অংশ (ALU)</text>
        <rect class="fs" x="200" y="200" width="140" height="70"/><text x="270" y="226">রেজিস্টার</text><text class="sm" x="270" y="250">AC · MAR · MDR</text>
        <path class="fa" d="M110 152V198" marker-start="url(#cpu17-ah)" marker-end="url(#cpu17-ah)"/>
        <path class="fa" d="M270 152V198" marker-start="url(#cpu17-ah)" marker-end="url(#cpu17-ah)"/>
        <path class="fa dash" d="M40 67H24V235H38" marker-end="url(#cpu17-ah)"/>
        <rect class="fs" x="440" y="115" width="110" height="70"/><text x="495" y="142">প্রধান</text><text x="495" y="164">স্মৃতি</text>
        <path class="busl" d="M362 150H438"/><text class="sm" x="400" y="134">সিস্টেম বাস</text>
      </svg>
      <figcaption>চিত্র: সিপিইউ-এর সংগঠন। ড্যাশ রেখা নিয়ন্ত্রণ সংকেত।</figcaption>
    </figure>
    <h4 class="sub-h"><span>১</span>নিয়ন্ত্রণ অংশ (Control Unit)</h4>
    <p class="prose">প্রধান স্মৃতি থেকে নির্দেশ এনে ডিকোড করে এবং ইনপুট, স্মৃতি, ALU ও আউটপুটকে সংকেত দিয়ে কাজের ক্রম ঠিক রাখে। এর ভেতরে থাকে প্রোগ্রাম কাউন্টার (পরের নির্দেশের ঠিকানা), ইনস্ট্রাকশন রেজিস্টার (চলতি নির্দেশ), ডিকোডার ও টাইমিং-কন্ট্রোল সার্কিট।</p>
    <h4 class="sub-h"><span>২</span>গাণিতিক যুক্তি অংশ (ALU)</h4>
    <p class="prose">যোগ, বিয়োগ, গুণ, ভাগের মতো গাণিতিক কাজ এবং তুলনা, AND, OR, NOT-এর মতো যৌক্তিক কাজ করে। ফল জমা হয় অ্যাকুমুলেটরে, আর ফলের ধরন জানায় ফ্ল্যাগ।</p>
    <h4 class="sub-h"><span>৩</span>রেজিস্টার</h4>
    <p class="prose">CPU-র ভেতরের অতি দ্রুত, ছোট অস্থায়ী স্মৃতি। যেমন অ্যাকুমুলেটর (AC, ফল রাখে), মেমোরি অ্যাড্রেস রেজিস্টার (MAR, যে ঠিকানায় পড়া-লেখা হবে), মেমোরি ডেটা রেজিস্টার (MDR, স্মৃতি থেকে আসা বা যাওয়া উপাত্ত)।</p>
    <p class="prose">এ ছাড়া আধুনিক CPU-তে ক্যাশ মেমোরি থাকে, যা বারবার লাগা উপাত্ত রেখে স্মৃতির সঙ্গে গতির ব্যবধান কমায়।</p>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. কম্পিউটার কীভাবে কাজ করে</span><i class="bub mk">৫</i></h3>
    <p class="prose">কম্পিউটার প্রতিটি কাজ চারটি ধাপের চক্রে করে, যাকে IPOS চক্র বলে:</p>
    <ol class="chain">
      <li><b>ইনপুট</b><small>কিবোর্ড, মাউস</small></li>
      <li><b>প্রক্রিয়াকরণ</b><small>CPU</small></li>
      <li><b>আউটপুট</b><small>মনিটর, প্রিন্টার</small></li>
      <li><b>সংরক্ষণ</b><small>স্মৃতি, ডিস্ক</small></li>
    </ol>
    <ul class="pts">
      <li><b>ইনপুট:</b> ইনপুট যন্ত্র দিয়ে উপাত্ত ও নির্দেশ দেওয়া হয়; সেগুলো বাইনারিতে রূপান্তরিত হয়ে স্মৃতিতে যায়।</li>
      <li><b>প্রক্রিয়াকরণ:</b> CPU প্রতিটি নির্দেশ স্মৃতি থেকে আনে (Fetch), বোঝে (Decode) এবং পালন করে (Execute); হিসাব করে ALU, নিয়ন্ত্রণ করে CU।</li>
      <li><b>আউটপুট:</b> ফল মানুষের বোঝার মতো রূপে পর্দায় বা কাগজে দেখানো হয়।</li>
      <li><b>সংরক্ষণ:</b> উপাত্ত ও ফল পরে ব্যবহারের জন্য স্মৃতিতে বা ডিস্কে রাখা হয়।</li>
    </ul>
    <p class="prose">যেমন ৫ + ৩ লিখে Enter চাপলে কিবোর্ড সংখ্যা দুটি স্মৃতিতে পাঠায়, CU যোগের নির্দেশ ALU-কে দেয়, ALU ৮ হিসাব করে, আর মনিটরে ৮ দেখায়।</p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ক. কম্পিউটার স্মৃতি ও এর শ্রেণিবিভাগ</span><i class="bub mk">১০</i></h3>
    <p class="inc-note">একই প্রশ্ন ১৮তম পরীক্ষায় আবার এসেছে (প্রশ্ন ২); উত্তর এক। সংজ্ঞায় ২ আর শ্রেণিবিভাগে ৮ ধরে লিখলে উত্তর গোছানো হয়।</p>
    <div data-include="wa-18-school-2" data-inner></div>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. আধুনিক জীবনে ইন্টারনেটের প্রয়োগ</span><i class="bub mk">৫</i></h3>
    <p class="prose">ইন্টারনেট হলো বিশ্বজুড়ে কোটি কোটি কম্পিউটারের নেটওয়ার্কের নেটওয়ার্ক। আধুনিক জীবনের প্রায় প্রতিটি ক্ষেত্রে এর ব্যবহার:</p>
    <ul class="pts">
      <li><b>যোগাযোগ:</b> ই-মেইল, মেসেঞ্জার, ভিডিও কল; মুহূর্তে বিশ্বের যেকোনো প্রান্তে বার্তা।</li>
      <li><b>শিক্ষা:</b> অনলাইন ক্লাস, ই-বুক, শিক্ষামূলক ভিডিও, পরীক্ষার ফল প্রকাশ ও ভর্তি আবেদন।</li>
      <li><b>ব্যবসা ও কেনাকাটা:</b> ই-কমার্স, অনলাইন বিজ্ঞাপন, ঘরে বসে কেনাকাটা।</li>
      <li><b>ব্যাংকিং:</b> অনলাইন ব্যাংকিং, মোবাইল ব্যাংকিং, বিল পরিশোধ।</li>
      <li><b>স্বাস্থ্য:</b> টেলিমেডিসিন, অনলাইনে ডাক্তারের সময় নেওয়া, স্বাস্থ্য তথ্য।</li>
      <li><b>সরকারি সেবা:</b> ই-গভর্ন্যান্স; অনলাইনে জন্মনিবন্ধন, পাসপোর্ট ও চাকরির আবেদন।</li>
      <li><b>বিনোদন ও সংবাদ:</b> অনলাইন পত্রিকা, ভিডিও, গান, সামাজিক যোগাযোগমাধ্যম।</li>
      <li><b>কর্মসংস্থান:</b> ফ্রিল্যান্সিং, ঘরে বসে অফিসের কাজ, অনলাইনে চাকরি খোঁজা।</li>
    </ul>
  </section>
</div>
<aside class="side">
  <p><b>সংগঠনের চিত্র</b>CPU-র ভেতরে CU, ALU ও রেজিস্টার, বাইরে স্মৃতি, আর বাস দিয়ে জোড়া; চিত্রেই অর্ধেক নম্বর।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/computer-basics/org">অধ্যায় ১ · সংগঠন, CPU ও ALU</a></p>
  <p class="tags"><span class="xt">অধ্যায়: কম্পিউটার বেসিক</span><span class="xt">ইন্টারনেট</span></p>
</aside>
`,

3: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. সিস্টেম সফটওয়্যার ও এর প্রকারভেদ</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>যে সফটওয়্যার কম্পিউটারের হার্ডওয়্যার পরিচালনা ও নিয়ন্ত্রণ করে এবং অন্য সব প্রোগ্রাম চালানোর পরিবেশ তৈরি করে, তাকে সিস্টেম সফটওয়্যার বলে। এটি ব্যবহারকারী ও হার্ডওয়্যারের মধ্যে সেতুর কাজ করে।</p>
    <figure class="fig">
      <ul class="tree">
        <li><span class="t-root">সিস্টেম সফটওয়্যার</span>
          <ul>
            <li><span>অপারেটিং সিস্টেম</span><span class="leaf">Windows · Linux · macOS · Android</span></li>
            <li><span>ইউটিলিটি প্রোগ্রাম</span><span class="leaf">অ্যান্টিভাইরাস · ডিস্ক ক্লিনআপ · ডিফ্র্যাগমেন্টার · ব্যাকআপ</span></li>
            <li><span>অনুবাদক প্রোগ্রাম</span><span class="leaf">অ্যাসেম্বলার · কম্পাইলার · ইন্টারপ্রেটার</span></li>
            <li><span>ডিভাইস ড্রাইভার</span><span class="leaf">প্রিন্টার, গ্রাফিক্স কার্ড, সাউন্ড কার্ডের ড্রাইভার</span></li>
          </ul>
        </li>
      </ul>
      <figcaption>চিত্র: সিস্টেম সফটওয়্যারের প্রকারভেদ</figcaption>
    </figure>
    <ul class="pts">
      <li><b>অপারেটিং সিস্টেম:</b> সবচেয়ে গুরুত্বপূর্ণ সিস্টেম সফটওয়্যার। প্রসেস, মেমোরি, ফাইল ও ডিভাইস ব্যবস্থাপনা করে এবং ব্যবহারকারীর সঙ্গে যোগাযোগ রাখে। এটি ছাড়া কম্পিউটার চালু করে কোনো কাজ করা যায় না।</li>
      <li><b>ইউটিলিটি প্রোগ্রাম:</b> কম্পিউটারকে সুরক্ষিত, পরিচ্ছন্ন ও দক্ষ রাখে: ভাইরাস খোঁজা, অপ্রয়োজনীয় ফাইল মোছা, ডিস্কের ছড়ানো ফাইল গোছানো, ফাইল সংকোচন ও ব্যাকআপ।</li>
      <li><b>অনুবাদক প্রোগ্রাম:</b> মানুষের লেখা প্রোগ্রামকে মেশিন ভাষায় রূপান্তর করে। অ্যাসেম্বলার অ্যাসেম্বলি ভাষা, কম্পাইলার পুরো প্রোগ্রাম একবারে, ইন্টারপ্রেটার এক লাইন করে অনুবাদ করে।</li>
      <li><b>ডিভাইস ড্রাইভার:</b> নির্দিষ্ট হার্ডওয়্যারের সঙ্গে অপারেটিং সিস্টেমের যোগাযোগের প্রোগ্রাম; ড্রাইভার ছাড়া প্রিন্টার বা গ্রাফিক্স কার্ড ঠিকমতো কাজ করে না।</li>
      <li><b>ফার্মওয়্যার (BIOS):</b> ROM-এ স্থায়ীভাবে লেখা প্রোগ্রাম; কম্পিউটার চালু হলে যন্ত্রাংশ পরীক্ষা করে অপারেটিং সিস্টেম লোড করে।</li>
    </ul>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. চিত্রভিত্তিক অপারেটিং সিস্টেমের কাজ</span><i class="bub mk">৫</i></h3>
    <p class="prose">যে অপারেটিং সিস্টেমে কমান্ড লেখার বদলে উইন্ডো, আইকন, মেনু ও মাউস-পয়েন্টার দিয়ে কাজ করা যায়, তাকে চিত্রভিত্তিক বা GUI (Graphical User Interface) অপারেটিং সিস্টেম বলে। যেমন: Windows, macOS, Ubuntu। এর গুরুত্বপূর্ণ কাজ:</p>
    <ul class="pts">
      <li>প্রতিটি প্রোগ্রাম আলাদা উইন্ডোতে খোলে; একসঙ্গে একাধিক প্রোগ্রাম চালানো ও এক উইন্ডো থেকে আরেকটিতে যাওয়া যায় (মাল্টিটাস্কিং)।</li>
      <li>আইকন ও মেনুতে ক্লিক করে প্রোগ্রাম চালানো, ফাইল খোলা ও বন্ধ করা যায়; কমান্ড মুখস্থ রাখতে হয় না।</li>
      <li>ড্র্যাগ অ্যান্ড ড্রপ করে ফাইল ও ফোল্ডার কপি, সরানো ও মোছা যায়।</li>
      <li>প্রিন্টার, স্ক্যানারসহ যন্ত্র নিয়ন্ত্রণ সেটিংসে ছবির মাধ্যমে সহজে করা যায়; প্লাগ অ্যান্ড প্লে সুবিধা।</li>
      <li>ছবি, ভিডিও ও শব্দ নিয়ে কাজ (মাল্টিমিডিয়া) সহজ হয়; ব্যবহারকারী অ্যাকাউন্ট ও পাসওয়ার্ড দিয়ে নিরাপত্তা দেয়।</li>
    </ul>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ক. মাল্টিপ্রসেসিং অপারেটিং সিস্টেম</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>যে অপারেটিং সিস্টেম একই কম্পিউটারের দুই বা ততোধিক প্রসেসরকে একসঙ্গে নিয়ন্ত্রণ করে এবং প্রোগ্রাম বা কাজের অংশগুলো প্রসেসরগুলোর মধ্যে ভাগ করে দিয়ে একই সময়ে চালায়, তাকে মাল্টিপ্রসেসিং অপারেটিং সিস্টেম বলে।</p>
    <figure class="fig flow wide mproc">
      <svg viewBox="0 0 540 270" role="img" aria-label="মাল্টিপ্রসেসিং: অপারেটিং সিস্টেম তিনটি প্রসেসরকে কাজ ভাগ করে দেয়; প্রসেসরগুলো একটি সাধারণ বাস দিয়ে ভাগ করা প্রধান স্মৃতি ও ইনপুট-আউটপুট যন্ত্রের সঙ্গে যুক্ত।">
        <defs><marker id="mp17-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
        <rect class="fs fd" x="70" y="10" width="400" height="44"/><text x="270" y="33">অপারেটিং সিস্টেম: কাজ ভাগ করে দেয়</text>
        <path class="fa dash" d="M100 54V94" marker-end="url(#mp17-ah)"/><path class="fa dash" d="M270 54V94" marker-end="url(#mp17-ah)"/><path class="fa dash" d="M440 54V94" marker-end="url(#mp17-ah)"/>
        <rect class="fs" x="40" y="96" width="120" height="44"/><text x="100" y="119">প্রসেসর ১</text>
        <rect class="fs" x="210" y="96" width="120" height="44"/><text x="270" y="119">প্রসেসর ২</text>
        <rect class="fs" x="380" y="96" width="120" height="44"/><text x="440" y="119">প্রসেসর ৩</text>
        <path class="fa" d="M100 142V186" marker-start="url(#mp17-ah)" marker-end="url(#mp17-ah)"/><path class="fa" d="M270 142V186" marker-start="url(#mp17-ah)" marker-end="url(#mp17-ah)"/><path class="fa" d="M440 142V186" marker-start="url(#mp17-ah)" marker-end="url(#mp17-ah)"/>
        <path class="busl" d="M40 190H500"/><text class="sm" x="185" y="178">সাধারণ বাস</text>
        <path class="fa" d="M160 194V218" marker-start="url(#mp17-ah)" marker-end="url(#mp17-ah)"/><path class="fa" d="M380 194V218" marker-start="url(#mp17-ah)" marker-end="url(#mp17-ah)"/>
        <rect class="fs" x="70" y="220" width="180" height="40"/><text x="160" y="241">ভাগ করা প্রধান স্মৃতি</text>
        <rect class="fs" x="290" y="220" width="180" height="40"/><text x="380" y="241">ইনপুট-আউটপুট যন্ত্র</text>
      </svg>
      <figcaption>চিত্র: মাল্টিপ্রসেসিং অপারেটিং সিস্টেমের কার্যপদ্ধতি</figcaption>
    </figure>
    <h4 class="sub-h"><span>১</span>কার্যপদ্ধতি</h4>
    <ol class="algo">
      <li>একাধিক প্রসেসর একটি সাধারণ বাস দিয়ে একই প্রধান স্মৃতি ও ইনপুট-আউটপুট যন্ত্র ভাগাভাগি করে।</li>
      <li>অপারেটিং সিস্টেম চলমান প্রোগ্রামগুলোকে (বা একটি বড় প্রোগ্রামের অংশগুলোকে) ছোট কাজে ভাগ করে।</li>
      <li>কোন প্রসেসর ফাঁকা আছে দেখে প্রতিটি কাজ একটি প্রসেসরকে দেয়; প্রসেসরগুলো একই সময়ে আলাদা কাজ চালায়।</li>
      <li>স্মৃতিতে একই উপাত্ত নিয়ে যেন দুই প্রসেসর একসঙ্গে টানাটানি না করে, অপারেটিং সিস্টেম তা সমন্বয় করে।</li>
      <li>কোনো প্রসেসর নষ্ট হলে তার কাজ অন্য প্রসেসরে সরিয়ে দেয়, ফলে কম্পিউটার চলতেই থাকে।</li>
    </ol>
    <h4 class="sub-h"><span>২</span>প্রকার</h4>
    <ul class="pts">
      <li><b>সিমেট্রিক:</b> সব প্রসেসর সমান; যেকোনো প্রসেসর যেকোনো কাজ করতে পারে। আধুনিক মাল্টিকোর কম্পিউটার এভাবে চলে।</li>
      <li><b>অ্যাসিমেট্রিক (মাস্টার-স্লেভ):</b> একটি প্রধান প্রসেসর কাজ ভাগ করে দেয়, বাকিরা নির্দিষ্ট কাজ করে।</li>
    </ul>
    <h4 class="sub-h"><span>৩</span>সুবিধা ও অসুবিধা</h4>
    <ul class="pts">
      <li><b>সুবিধা:</b> একই সময়ে বেশি কাজ (থ্রুপুট বেশি), গতি বেশি, একটি প্রসেসর নষ্ট হলেও কাজ চলে (নির্ভরযোগ্য)।</li>
      <li><b>অসুবিধা:</b> হার্ডওয়্যার ব্যয়বহুল, অপারেটিং সিস্টেম জটিল, প্রসেসরগুলোর সমন্বয়ে বাড়তি সময় লাগে।</li>
      <li><b>উদাহরণ:</b> মাল্টিকোর প্রসেসরে চলা Windows, Linux, UNIX সার্ভার।</li>
    </ul>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. অনুবাদক প্রোগ্রাম ও এর কাজ</span><i class="bub mk">৫</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>যে প্রোগ্রাম উচ্চস্তরের বা অ্যাসেম্বলি ভাষায় লেখা প্রোগ্রামকে (সোর্স প্রোগ্রাম) কম্পিউটারের বোধগম্য মেশিন ভাষায় (অবজেক্ট প্রোগ্রাম) রূপান্তর করে, তাকে অনুবাদক প্রোগ্রাম বলে।</p>
    <ul class="pts">
      <li>সোর্স প্রোগ্রামকে মেশিন ভাষায় রূপান্তর করা।</li>
      <li>প্রোগ্রামের ব্যাকরণগত (সিনট্যাক্স) ভুল খুঁজে বের করে বার্তা দেখানো।</li>
      <li>প্রয়োজনীয় লাইব্রেরি প্রোগ্রাম যুক্ত করে চালানোর উপযোগী ফাইল তৈরিতে সাহায্য করা।</li>
      <li>স্মৃতিতে প্রোগ্রাম ও উপাত্তের জায়গা নির্ধারণে সাহায্য করা।</li>
    </ul>
    <table class="rt cmp">
      <thead><tr><th>অনুবাদক</th><th>কী অনুবাদ করে</th><th>কীভাবে</th></tr></thead>
      <tbody>
        <tr><td>অ্যাসেম্বলার</td><td>অ্যাসেম্বলি ভাষা</td><td>নেমোনিক কোড থেকে মেশিন কোডে</td></tr>
        <tr><td>কম্পাইলার</td><td>উচ্চস্তরের ভাষা (C, C++)</td><td>পুরো প্রোগ্রাম একবারে; দ্রুত চলে</td></tr>
        <tr><td>ইন্টারপ্রেটার</td><td>উচ্চস্তরের ভাষা (Python, BASIC)</td><td>এক লাইন করে অনুবাদ ও সঙ্গে সঙ্গে চালানো</td></tr>
      </tbody>
    </table>
  </section>
</div>
<aside class="side">
  <p><b>চিত্র দিন</b>মাল্টিপ্রসেসিংয়ে কয়েকটি প্রসেসর, ভাগ করা স্মৃতি আর একটি অপারেটিং সিস্টেম, এই তিনটি চিত্রে দেখালেই প্রশ্নের “চিত্রসহ” অংশ পূর্ণ হয়।</p>
  <p class="tags"><span class="xt">অধ্যায়: কম্পিউটার বেসিক</span><span class="xt">অপারেটিং সিস্টেম</span></p>
</aside>
`,

4: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. ভিত্তি; পজিশনাল ও নন-পজিশনাল সংখ্যা পদ্ধতি</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>ভিত্তি</b>কোনো সংখ্যা পদ্ধতিতে যতগুলো আলাদা মৌলিক অঙ্ক বা চিহ্ন ব্যবহার করা হয়, সেই সংখ্যাকে ঐ পদ্ধতির ভিত্তি (base বা radix) বলে। ভিত্তি N হলে অঙ্ক থাকে ০ থেকে N − ১ পর্যন্ত। যেমন বাইনারির ভিত্তি ২ (0, 1), অক্টালের ৮ (0–7), দশমিকের ১০ (0–9), হেক্সাডেসিমালের ১৬ (0–9, A–F)।</p>

    <h4 class="sub-h"><span>১</span>পজিশনাল সংখ্যা পদ্ধতি</h4>
    <p class="prose">যে পদ্ধতিতে অঙ্কের মান তার অবস্থানের (স্থানের) ওপর নির্ভর করে, তাকে পজিশনাল বা স্থানিক সংখ্যা পদ্ধতি বলে। প্রতিটি অবস্থানের একটি স্থানীয় মান থাকে, যা ভিত্তির ঘাত। কোনো অঙ্কের প্রকৃত মান = অঙ্কের নিজস্ব মান × স্থানীয় মান।</p>
    <p class="expand"><span>(555)<sub>10</sub></span> = 5×10<sup>2</sup> + 5×10<sup>1</sup> + 5×10<sup>0</sup> = 500 + 50 + 5 = <b>555</b></p>
    <p class="expand"><span>(1101)<sub>2</sub></span> = 1×2<sup>3</sup> + 1×2<sup>2</sup> + 0×2<sup>1</sup> + 1×2<sup>0</sup> = 8 + 4 + 0 + 1 = <b>13</b></p>
    <p class="prose">(555)<sub>10</sub>-এ একই অঙ্ক ৫ তিন জায়গায় তিন রকম মান দিয়েছে: ৫০০, ৫০ ও ৫। বাইনারি, অক্টাল, দশমিক ও হেক্সাডেসিমাল, সবই পজিশনাল পদ্ধতি।</p>

    <h4 class="sub-h"><span>২</span>নন-পজিশনাল সংখ্যা পদ্ধতি</h4>
    <p class="prose">যে পদ্ধতিতে অঙ্ক বা চিহ্নের মান তার অবস্থানের ওপর নির্ভর করে না, প্রতিটি চিহ্নের একটি নির্দিষ্ট মান থাকে, তাকে নন-পজিশনাল পদ্ধতি বলে। মান বের করতে চিহ্নগুলোর মান যোগ (কখনো বিয়োগ) করতে হয়। প্রাচীন রোমান ও মিশরীয় পদ্ধতি এর উদাহরণ। রোমান পদ্ধতিতে I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000:</p>
    <p class="expand"><span>XV</span> = 10 + 5 = <b>15</b></p>
    <p class="expand"><span>IX</span> = 10 − 1 = <b>9</b></p>
    <p class="expand"><span>MDCLXVI</span> = 1000 + 500 + 100 + 50 + 10 + 5 + 1 = <b>1666</b></p>
    <p class="prose">ছোট মানের চিহ্ন বড়টির আগে বসলে বিয়োগ হয় (IX), পরে বসলে যোগ (XV)। X-এর মান সবসময় ১০, যেখানেই বসুক।</p>

    <h4 class="sub-h"><span>৩</span>পার্থক্য</h4>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>পজিশনাল</th><th>নন-পজিশনাল</th></tr></thead>
      <tbody>
        <tr><td>অঙ্কের মান</td><td>অবস্থানের ওপর নির্ভর করে</td><td>অবস্থানের ওপর নির্ভর করে না</td></tr>
        <tr><td>ভিত্তি</td><td>থাকে</td><td>থাকে না</td></tr>
        <tr><td>শূন্য</td><td>আছে</td><td>সাধারণত নেই</td></tr>
        <tr><td>হিসাব</td><td>সহজ</td><td>জটিল</td></tr>
        <tr><td>উদাহরণ</td><td>বাইনারি, দশমিক</td><td>রোমান, মিশরীয়</td></tr>
      </tbody>
    </table>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. (৫৩.৬২)<sub>১০</sub> থেকে অক্টাল</span><i class="bub mk">৫</i></h3>
    <p class="prose">পূর্ণ অংশ ৮ দিয়ে বারবার ভাগ, ভগ্নাংশ ৮ দিয়ে বারবার গুণ।</p>
    <div class="work">
      <div class="ladder" role="img" aria-label="৫৩-কে ৮ দিয়ে ভাগ: ভাগশেষ ৫, তারপর ৬। নিচ থেকে পড়লে 65।">
        <span class="dv">8</span><span class="qt">53</span><span class="rm">5</span>
        <span class="dv">8</span><span class="qt">6</span><span class="rm">6</span>
        <span class="dv"></span><span class="qt end">0</span><span class="rm"></span>
      </div>
      <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 146 V8 M5 15 L12 6 L19 15"/></svg><span>নিচ থেকে পড়ুন</span></div>
      <p class="work-res">(53)<sub>10</sub> = (<b>65</b>)<sub>8</sub></p>
    </div>
    <div class="work">
      <table class="truth trace">
        <thead><tr><th>ভগ্নাংশ × ৮</th><th>পূর্ণ অংশ</th></tr></thead>
        <tbody><tr><td>0.62 × 8 = 4.96</td><td>4</td></tr><tr><td>0.96 × 8 = 7.68</td><td>7</td></tr><tr><td>0.68 × 8 = 5.44</td><td>5</td></tr><tr><td>0.44 × 8 = 3.52</td><td>3</td></tr></tbody>
      </table>
      <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 4 V142 M5 135 L12 144 L19 135"/></svg><span>ওপর থেকে পড়ুন</span></div>
      <p class="work-res">(0.62)<sub>10</sub> ≈ (<b>0.4753</b>)<sub>8</sub></p>
    </div>
    <p class="final"><b>উত্তর</b>(৫৩.৬২)<sub>১০</sub> ≈ (65.4753)<sub>৮</sub></p>
    <p class="prose">ভগ্নাংশটি শেষ হয় না, তাই চার ঘর পর্যন্ত নেওয়া হলো। যাচাই: (65.4753)<sub>8</sub> = 53 + 0.5 + 0.109375 + 0.009765625 + 0.000732421875 ≈ 53.6199।</p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ক. ২-এর পরিপূরক; (−১৩)<sub>১০</sub> হতে (৯)<sub>১০</sub> বিয়োগ</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>কোনো বাইনারি সংখ্যার প্রতিটি বিট উল্টে (১-এর পরিপূরক) তার সঙ্গে ১ যোগ করলে যে সংখ্যা পাওয়া যায়, তাকে ঐ সংখ্যার ২-এর পরিপূরক বলে। কম্পিউটার এ পদ্ধতিতে ঋণাত্মক সংখ্যা প্রকাশ করে এবং বিয়োগকে যোগে বদলে একই যোগ-সার্কিটে বিয়োগ করে। সবচেয়ে বাঁয়ের বিট চিহ্ন বিট: ০ ধনাত্মক, ১ ঋণাত্মক।</p>
    <p class="prose">(−১৩) − (৯) = (−১৩) + (−৯)। তাই −১৩ ও −৯-কে ২-এর পরিপূরকে প্রকাশ করে যোগ করব। ৮ বিট ধরা হলো।</p>
    <h4 class="sub-h"><span>ধাপ ১</span>−১৩ নির্ণয়</h4>
    <div class="bcalc">
      <code>0000 1101</code><span>(+১৩)<sub>১০</sub></span>
      <code>1111 0010</code><span>সব বিট উল্টে</span>
      <code class="add">+         1</code><span>১ যোগ</span>
      <code class="res">1111 0011</code><span><b>−১৩</b></span>
    </div>
    <h4 class="sub-h"><span>ধাপ ২</span>−৯ নির্ণয়</h4>
    <div class="bcalc">
      <code>0000 1001</code><span>(+৯)<sub>১০</sub></span>
      <code>1111 0110</code><span>সব বিট উল্টে</span>
      <code class="add">+         1</code><span>১ যোগ</span>
      <code class="res">1111 0111</code><span><b>−৯</b></span>
    </div>
    <h4 class="sub-h"><span>ধাপ ৩</span>যোগ</h4>
    <div class="bcalc">
      <code>  1111 0011</code><span>−১৩</span>
      <code class="add">+ 1111 0111</code><span>−৯</span>
      <code class="res"><i class="carry" title="শেষ ক্যারি">1</i> 1110 1010</code><span>শেষ ক্যারি <i class="carry">1</i> বাদ দিলে <b>1110 1010</b></span>
    </div>
    <h4 class="sub-h"><span>ধাপ ৪</span>ফল পড়া</h4>
    <p class="prose">চিহ্ন বিট ১, তাই ফল ঋণাত্মক। মান জানতে আবার ২-এর পরিপূরক নিই:</p>
    <div class="bcalc">
      <code>1110 1010</code><span>ফল</span>
      <code>0001 0101</code><span>সব বিট উল্টে</span>
      <code class="add">+         1</code><span>১ যোগ</span>
      <code class="res">0001 0110</code><span>= (২২)<sub>১০</sub></span>
    </div>
    <p class="final"><b>উত্তর</b>(−১৩)<sub>১০</sub> − (৯)<sub>১০</sub> = (−২২)<sub>১০</sub> = (1110 1010)<sub>২</sub></p>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. বাইনারি সংখ্যা পদ্ধতি ও BCD কোডের তুলনা</span><i class="bub mk">৫</i></h3>
    <p class="prose">বাইনারিতে পুরো দশমিক সংখ্যাকে একবারে ২-ভিত্তিক সংখ্যায় রূপান্তর করা হয়; BCD-তে দশমিকের প্রতিটি অঙ্ককে আলাদাভাবে ৪ বিটে লেখা হয়। যেমন (৩৯)<sub>১০</sub> = (100111)<sub>২</sub> = (0011 1001)<sub>BCD</sub>।</p>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>বাইনারি</th><th>BCD</th></tr></thead>
      <tbody>
        <tr><td>প্রকৃতি</td><td>সংখ্যা পদ্ধতি</td><td>কোড</td></tr>
        <tr><td>রূপান্তর</td><td>পুরো সংখ্যা একসঙ্গে</td><td>প্রতিটি অঙ্ক আলাদা ৪ বিটে</td></tr>
        <tr><td>বিট সংখ্যা</td><td>কম (৩৯-এ ৬ বিট)</td><td>বেশি (৩৯-এ ৮ বিট)</td></tr>
        <tr><td>বৈধ বিন্যাস</td><td>সব বিন্যাস বৈধ</td><td>১০১০ থেকে ১১১১ অবৈধ</td></tr>
        <tr><td>গাণিতিক কাজ</td><td>সহজ, সরাসরি</td><td>জটিল; ৯ ছাড়ালে 0110 যোগ করে সংশোধন</td></tr>
        <tr><td>ব্যবহার</td><td>কম্পিউটারের ভেতরের হিসাব</td><td>ক্যালকুলেটর, ডিজিটাল ঘড়ির প্রদর্শন</td></tr>
      </tbody>
    </table>
  </section>
</div>
<aside class="side">
  <p><b>প্রথম লাইনেই</b>পরিপূরকের অঙ্কে কত বিট ধরছেন লিখে দিন, আর শেষ ক্যারি বাদ দেওয়ার কথা লিখুন।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/number-system/idea">অধ্যায় ২ · ধারণা ও ভিত্তি</a>, <a href="#/note/number-system/complement">পরিপূরক</a></p>
  <p class="tags"><span class="xt">অধ্যায়: সংখ্যা পদ্ধতি</span><span class="xt">উপাত্ত উপস্থাপন</span></p>
</aside>
`,

5: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. মৌলিক লজিক গেইট সত্যক সারণিসহ</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>যে গেইটগুলো দিয়ে বুলিয়ান অ্যালজেবরার তিনটি মৌলিক কাজ (যৌক্তিক গুণ, যৌক্তিক যোগ ও পূরক) সম্পন্ন হয় এবং যাদের দিয়ে অন্য সব গেইট তৈরি করা যায়, সেগুলোকে মৌলিক লজিক গেইট বলে। মৌলিক গেইট তিনটি: AND, OR ও NOT।</p>

    <h4 class="sub-h"><span>১</span>AND গেইট</h4>
    <p class="prose">যৌক্তিক গুণের গেইট। সব ইনপুট ১ হলেই আউটপুট ১, অন্যথায় ০। সমীকরণ: <span class="m">Y = A·B</span>। এটি দুটি সুইচ পরপর (সিরিজে) জোড়া বর্তনীর মতো: দুটিই চালু হলে বাতি জ্বলে।</p>
    <div class="gates">
      <figure class="fig gate-sym"><svg viewBox="0 0 150 64" role="img" aria-label="AND গেইটের প্রতীক"><text x="0" y="24" text-anchor="start">A</text><path class="w" d="M12 20 L40 20"/><text x="0" y="44" text-anchor="start">B</text><path class="w" d="M12 40 L40 40"/><path class="gb" d="M40 10H58A20 20 0 0 1 58 50H40Z"/><path class="w" d="M78 30 L118 30"/><text x="122" y="34" text-anchor="start">Y</text></svg><figcaption>AND গেইটের প্রতীক</figcaption></figure>
      <table class="truth"><thead><tr><th>A</th><th>B</th><th>Y</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td></tr></tbody></table>
    </div>

    <h4 class="sub-h"><span>২</span>OR গেইট</h4>
    <p class="prose">যৌক্তিক যোগের গেইট। যেকোনো একটি ইনপুট ১ হলেই আউটপুট ১; সব ০ হলে আউটপুট ০। সমীকরণ: <span class="m">Y = A + B</span>। এটি পাশাপাশি (প্যারালালে) জোড়া দুটি সুইচের মতো।</p>
    <div class="gates">
      <figure class="fig gate-sym"><svg viewBox="0 0 150 64" role="img" aria-label="OR গেইটের প্রতীক"><text x="0" y="24" text-anchor="start">A</text><path class="w" d="M12 20 L45 20"/><text x="0" y="44" text-anchor="start">B</text><path class="w" d="M12 40 L45 40"/><path class="gb" d="M40 10Q54 30 40 50Q66 50 78 30Q66 10 40 10Z"/><path class="w" d="M78 30 L118 30"/><text x="122" y="34" text-anchor="start">Y</text></svg><figcaption>OR গেইটের প্রতীক</figcaption></figure>
      <table class="truth"><thead><tr><th>A</th><th>B</th><th>Y</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td></tr></tbody></table>
    </div>

    <h4 class="sub-h"><span>৩</span>NOT গেইট</h4>
    <p class="prose">পূরকের গেইট; একটি মাত্র ইনপুট। ইনপুটের বিপরীত মান আউটপুটে দেয়: ০ দিলে ১, ১ দিলে ০। সমীকরণ: <span class="m">Y = <span class="ov">A</span></span>। একে ইনভার্টারও বলে।</p>
    <div class="gates">
      <figure class="fig gate-sym"><svg viewBox="0 0 150 64" role="img" aria-label="NOT গেইটের প্রতীক"><text x="0" y="34" text-anchor="start">A</text><path class="w" d="M12 30 L40 30"/><path class="gb" d="M40 12L72 30L40 48Z"/><circle class="gb" cx="76" cy="30" r="4"/><path class="w" d="M80 30 L118 30"/><text x="122" y="34" text-anchor="start">Y</text></svg><figcaption>NOT গেইটের প্রতীক</figcaption></figure>
      <table class="truth"><thead><tr><th>A</th><th>Y</th></tr></thead><tbody><tr><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td></tr></tbody></table>
    </div>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. সত্যক সারণি</span><i class="bub mk">৫</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>কোনো লজিক গেইট বা বুলিয়ান সমীকরণের সম্ভাব্য সব ইনপুট-সমন্বয়ের জন্য আউটপুট কী হবে, তা যে ছকে দেখানো হয়, তাকে সত্যক সারণি (Truth Table) বলে। n টি ইনপুট থাকলে সারির সংখ্যা ২<sup>n</sup>।</p>
    <p class="prose">উদাহরণ: Y = A·B + C সমীকরণের সত্যক সারণি। ইনপুট তিনটি, তাই ২<sup>৩</sup> = ৮টি সারি।</p>
    <table class="truth">
      <thead><tr><th>A</th><th>B</th><th>C</th><th>A·B</th><th>Y = A·B + C</th></tr></thead>
      <tbody><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr></tbody>
    </table>
    <p class="prose">সত্যক সারণি দিয়ে কোনো সার্কিটের আচরণ যাচাই করা যায় এবং দুটি বুলিয়ান সমীকরণ সমান কি না প্রমাণ করা যায়।</p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ক. NOR গেইটের সাহায্যে NOT, OR ও AND</span><i class="bub mk">১০</i></h3>
    <p class="inc-note">এই অংশটি ১৮তম পরীক্ষার ৪ নম্বর প্রশ্নের উত্তরেও আছে।</p>
    <div data-include="wa-18-school-4" data-part="3" data-inner></div>
    <h4 class="sub-h"><span>যাচাই</span>সত্যক সারণিতে তিনটি বাস্তবায়ন</h4>
    <p class="prose">নিচের প্রতিটি কলাম শুধু NOR দিয়ে তৈরি সার্কিটের আউটপুট: NOT কলামে NOR(A, A), OR কলামে NOR(NOR(A, B)), AND কলামে NOR(<span class="ov">A</span>, <span class="ov">B</span>)। তিনটিই মূল NOT, OR ও AND গেইটের সত্যক সারণির সঙ্গে প্রতিটি সারিতে মেলে।</p>
    <table class="truth">
      <thead><tr><th>A</th><th>B</th><th>NOT: <span class="ov">A</span></th><th>OR: A + B</th><th>AND: A·B</th></tr></thead>
      <tbody><tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td></tr></tbody>
    </table>
    <p class="final"><b>সিদ্ধান্ত</b>NOR দিয়ে NOT, OR ও AND, তিনটি মৌলিক গেইটই তৈরি হয়; তাই NOR সার্বজনীন গেইট।</p>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. F = <span class="ov">X</span>Y + XYZ হলে F·<span class="ov">F</span> = 0 প্রমাণ</span><i class="bub mk">৫</i></h3>
    <p class="prose">আগে F সরল করি:</p>
    <ul class="eqs">
      <li><span>F = <span class="ov">X</span>Y + XYZ = Y(<span class="ov">X</span> + XZ)</span></li>
      <li><span>= Y(<span class="ov">X</span> + Z)</span><small><span class="ov">X</span> + XZ = <span class="ov">X</span> + Z</small></li>
      <li><span><span class="ov">F</span> = <span class="ov">Y</span> + <span class="ov"><span class="ov">X</span> + Z</span> = <span class="ov">Y</span> + X<span class="ov">Z</span></span><small>ডি মরগানের সূত্র</small></li>
      <li><span>F·<span class="ov">F</span> = Y(<span class="ov">X</span> + Z)(<span class="ov">Y</span> + X<span class="ov">Z</span>)</span></li>
      <li><span>= Y<span class="ov">Y</span>(<span class="ov">X</span> + Z) + Y(<span class="ov">X</span> + Z)X<span class="ov">Z</span></span></li>
      <li><span>= 0 + Y(<span class="ov">X</span>X<span class="ov">Z</span> + XZ<span class="ov">Z</span>)</span><small>Y<span class="ov">Y</span> = 0</small></li>
      <li><span>= Y(0 + 0) = 0</span><small><span class="ov">X</span>X = 0, Z<span class="ov">Z</span> = 0</small></li>
    </ul>
    <p class="prose">সত্যক সারণি দিয়েও দেখা যায়, প্রতিটি সারিতে F ও <span class="ov">F</span>-এর একটি ০, তাই গুণফল সবসময় ০:</p>
    <table class="truth">
      <thead><tr><th>X</th><th>Y</th><th>Z</th><th>F</th><th><span class="ov">F</span></th><th>F·<span class="ov">F</span></th></tr></thead>
      <tbody><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr></tbody>
    </table>
    <p class="final"><b>প্রমাণিত</b>F·<span class="ov">F</span> = 0 (পূরক সূত্র: A·<span class="ov">A</span> = 0)</p>
  </section>
</div>
<aside class="side">
  <p><b>নম্বর পেতে</b>প্রতিটি গেইটের প্রতীক, সমীকরণ ও সত্যক সারণি, তিনটিই দিন; একটি বাদ পড়লে নম্বর কাটে।</p>
  <p><b>ছাপার কথা</b>অথবা (খ)-এর সমীকরণ ছাপায় এভাবে আছে; বার যেখানেই থাকুক, F·<span class="ov">F</span> = 0 যেকোনো F-এর জন্য সত্য।</p>
  <p class="tags"><span class="xt">অধ্যায়: লজিক সার্কিট ও লজিক গেট</span></p>
</aside>
`,

6: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ডেটা প্রসেসিং পদ্ধতি</span><i class="bub mk">৫</i></h3>
    <p class="prose">উপাত্ত সংগ্রহ করে সাজানো, হিসাব ও বিশ্লেষণের মাধ্যমে অর্থবহ তথ্যে রূপান্তর করার প্রক্রিয়াকে ডেটা প্রসেসিং বলে। এটি কয়েকটি ধাপে হয়:</p>
    <ol class="algo">
      <li><span><b>সংগ্রহ:</b> জরিপ, ফরম বা যন্ত্র থেকে উপাত্ত জোগাড়।</span></li>
      <li><span><b>প্রস্তুতি ও যাচাই:</b> ভুল ও অসম্পূর্ণ উপাত্ত বাদ দিয়ে সাজানো।</span></li>
      <li><span><b>ইনপুট:</b> কম্পিউটারে উপাত্ত প্রবেশ করানো।</span></li>
      <li><span><b>প্রক্রিয়াকরণ:</b> শ্রেণিবিন্যাস, সাজানো, হিসাব ও সারসংক্ষেপ।</span></li>
      <li><span><b>আউটপুট ও সংরক্ষণ:</b> প্রতিবেদন বা লেখচিত্রে ফল দেখানো এবং পরে ব্যবহারের জন্য রাখা।</span></li>
    </ol>
    <p class="prose"><b>পদ্ধতি:</b> ব্যাচ প্রসেসিং (উপাত্ত জমিয়ে একসঙ্গে, যেমন বেতন), অনলাইন প্রসেসিং (সঙ্গে সঙ্গে, যেমন ATM), রিয়েল-টাইম প্রসেসিং (নির্দিষ্ট সময়ের মধ্যে, যেমন বিমান নিয়ন্ত্রণ) ও ডিস্ট্রিবিউটেড প্রসেসিং (নেটওয়ার্কের কয়েকটি কম্পিউটারে ভাগ করে)।</p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>প্রোগ্রাম ফ্লোচার্টের প্রতীক</span><i class="bub mk">৫</i></h3>
    <div class="fig flow syms">
      <table class="rt cmp">
        <thead><tr><th>প্রতীক</th><th>নাম</th><th>অর্থ ও ব্যবহার</th></tr></thead>
        <tbody>
          <tr><td><svg viewBox="0 0 90 44" aria-hidden="true"><rect class="fs" x="6" y="8" width="78" height="28" rx="14"/></svg></td><td>টার্মিনাল</td><td>ফ্লোচার্টের শুরু ও শেষ</td></tr>
          <tr><td><svg viewBox="0 0 90 44" aria-hidden="true"><path class="fs" d="M20 8H86L70 36H4Z"/></svg></td><td>ইনপুট/আউটপুট</td><td>উপাত্ত নেওয়া বা ফল দেখানো</td></tr>
          <tr><td><svg viewBox="0 0 90 44" aria-hidden="true"><rect class="fs" x="6" y="8" width="78" height="28"/></svg></td><td>প্রক্রিয়া</td><td>হিসাব বা কোনো কাজ (যেমন A = L × W)</td></tr>
          <tr><td><svg viewBox="0 0 90 44" aria-hidden="true"><path class="fs fd" d="M45 3L84 22L45 41L6 22Z"/></svg></td><td>সিদ্ধান্ত</td><td>শর্ত যাচাই; হ্যাঁ বা না অনুযায়ী দুই পথ</td></tr>
          <tr><td><svg viewBox="0 0 90 44" aria-hidden="true"><path class="fa" d="M8 22H80"/><path class="ah" d="M78 17L88 22L78 27Z"/></svg></td><td>প্রবাহ রেখা</td><td>কাজের ক্রম ও দিক</td></tr>
          <tr><td><svg viewBox="0 0 90 44" aria-hidden="true"><circle class="fs" cx="45" cy="22" r="14"/></svg></td><td>সংযোগকারী</td><td>ফ্লোচার্টের এক অংশকে আরেক অংশের সঙ্গে জোড়া</td></tr>
        </tbody>
      </table>
    </div>
  </section>
</div>
<aside class="side">
  <p><b>বিস্তারিত নোট</b><a href="#/note/data-representation/proc">অধ্যায় ৩ · উপাত্ত প্রক্রিয়াকরণ</a></p>
  <p class="tags"><span class="xt">অধ্যায়: উপাত্ত উপস্থাপন</span><span class="xt">অ্যালগরিদম ও ফ্লোচার্ট</span></p>
</aside>
`,

7: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>দুটি সংখ্যার গ.সা.গু নির্ণয়ের অ্যালগরিদম</span><i class="bub mk">৫</i></h3>
    <p class="inc-note">একই প্রশ্ন ১৮তম পরীক্ষায় এসেছে (প্রশ্ন ৬); সেখানে ফ্লোচার্টও আছে।</p>
    <div data-include="wa-18-school-6" data-part="2" data-inner></div>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>আয়তক্ষেত্রের ক্ষেত্রফল নির্ণয়ের ফ্লোচার্ট</span><i class="bub mk">৫</i></h3>
    <p class="prose">আয়তক্ষেত্রের ক্ষেত্রফল = দৈর্ঘ্য × প্রস্থ। দৈর্ঘ্য L ও প্রস্থ W ইনপুট নিয়ে A = L × W হিসাব করে A দেখাতে হবে।</p>
    <figure class="fig flow slim">
      <svg viewBox="0 0 320 352" role="img" aria-label="ফ্লোচার্ট: শুরু; L ও W ইনপুট; A = L × W; A প্রিন্ট; শেষ।">
        <defs><marker id="rect17-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
        <rect class="fs" x="100" y="10" width="120" height="40" rx="20"/><text x="160" y="31">শুরু</text>
        <path class="fa" d="M160 50V78" marker-end="url(#rect17-ah)"/>
        <path class="fs" d="M92 80H252L228 124H68Z"/><text x="160" y="103">L, W ইনপুট</text>
        <path class="fa" d="M160 124V152" marker-end="url(#rect17-ah)"/>
        <rect class="fs" x="88" y="154" width="144" height="44"/><text x="160" y="177">A = L × W</text>
        <path class="fa" d="M160 198V226" marker-end="url(#rect17-ah)"/>
        <path class="fs" d="M100 228H244L220 272H76Z"/><text x="160" y="251">A প্রিন্ট</text>
        <path class="fa" d="M160 272V300" marker-end="url(#rect17-ah)"/>
        <rect class="fs" x="100" y="302" width="120" height="40" rx="20"/><text x="160" y="323">শেষ</text>
      </svg>
      <figcaption>চিত্র: আয়তক্ষেত্রের ক্ষেত্রফল নির্ণয়ের ফ্লোচার্ট</figcaption>
    </figure>
  </section>
</div>
<aside class="side">
  <p><b>প্রতীক ঠিক রাখুন</b>শুরু-শেষ ডিম্বাকার, ইনপুট-আউটপুট সামান্তরিক, হিসাব আয়ত। ভুল প্রতীকে নম্বর কাটে।</p>
  <p class="tags"><span class="xt">অধ্যায়: অ্যালগরিদম ও ফ্লোচার্ট</span></p>
</aside>
`,

8: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ই-মেইল ও ই-মেইল অ্যাড্রেসের গঠন</span><i class="bub mk">৫</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>ই-মেইল (Electronic Mail) হলো ইন্টারনেটের মাধ্যমে এক কম্পিউটার বা মোবাইল থেকে আরেকটিতে লেখা, ছবি ও ফাইল পাঠানোর ইলেকট্রনিক ডাক ব্যবস্থা। পাঠানো ও গ্রহণে SMTP, POP3 ও IMAP প্রোটোকল ব্যবহৃত হয়।</p>
    <p class="prose">প্রতিটি ই-মেইল অ্যাড্রেস পৃথিবীতে অনন্য। এর তিনটি অংশ, যেমন <span class="m">rahim.cse@gmail.com</span>:</p>
    <table class="rt cmp">
      <thead><tr><th>অংশ</th><th>উদাহরণে</th><th>অর্থ</th></tr></thead>
      <tbody>
        <tr><td>ইউজার নাম</td><td class="m">rahim.cse</td><td>ব্যবহারকারীর নিজস্ব নাম; একই ডোমেইনে দুজনের এক নাম হয় না</td></tr>
        <tr><td>@ (অ্যাট) চিহ্ন</td><td class="m">@</td><td>ইউজার নাম আর ডোমেইনকে আলাদা করে</td></tr>
        <tr><td>ডোমেইন নাম</td><td class="m">gmail.com</td><td>মেইল সার্ভারের নাম (gmail) আর টপ লেভেল ডোমেইন (.com, .edu, .gov, .bd)</td></tr>
      </tbody>
    </table>
  </section>

  <p class="ans-or">অথবা</p>
  <p class="inc-note">“অথবা”-তে ছাপা প্রশ্নটি মূল প্রশ্নের হুবহু একই; ওপরের উত্তরই প্রযোজ্য।</p>
</div>
<aside class="side">
  <p class="tags"><span class="xt">অধ্যায়: ইন্টারনেট</span></p>
</aside>
`,

9: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>(BF)<sub>16</sub> ও (55)<sub>8</sub> যোগ, ফল হেক্সাডেসিমালে</span><i class="bub mk">৫</i></h3>
    <p class="prose">দুটি সংখ্যা ভিন্ন পদ্ধতির, তাই আগে (55)<sub>8</sub>-কে হেক্সাডেসিমালে আনি, বাইনারির মাধ্যমে:</p>
    <p class="expand"><span>(55)<sub>8</sub></span> = 101 101 = 0010 1101 = (2D)<sub>16</sub></p>
    <div class="bcalc">
      <code>  BF</code><span>(BF)<sub>16</sub></span>
      <code class="add">+ 2D</code><span>(55)<sub>8</sub></span>
      <code class="res">  EC</code><span>F + D = ১৫ + ১৩ = ২৮ = ১৬ + ১২, বসে C, হাতে ১; B + 2 + ১ = ১১ + ২ + ১ = ১৪ = E</span>
    </div>
    <p class="final"><b>উত্তর</b>(BF)<sub>16</sub> + (55)<sub>8</sub> = (EC)<sub>16</sub></p>
    <p class="prose">যাচাই: (BF)<sub>16</sub> = ১৯১, (55)<sub>8</sub> = ৪৫, যোগফল ২৩৬; আর (EC)<sub>16</sub> = ১৪ × ১৬ + ১২ = ২৩৬।</p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>কোন যুক্তিতে ১ + ১ = ১ এবং ১ + ১ = ১০</span><i class="bub mk">৫</i></h3>
    <p class="prose">দুটি সমীকরণ দুটি আলাদা গণিতের:</p>
    <ul class="pts">
      <li><b>১ + ১ = ১ (বুলিয়ান অ্যালজেবরা):</b> এখানে ০ ও ১ সংখ্যা নয়, যৌক্তিক অবস্থা: মিথ্যা ও সত্য। “+” চিহ্ন যৌক্তিক যোগ, অর্থাৎ OR। “সত্য অথবা সত্য” = সত্য, তাই ১ + ১ = ১। OR গেইটের দুই ইনপুট ১ হলে আউটপুট ১।</li>
      <li><b>১ + ১ = ১০ (বাইনারি গাণিতিক যোগ):</b> এখানে ০ ও ১ সংখ্যা। ১ + ১ = দুই, আর বাইনারিতে ২ লেখা হয় 10: যোগফল ০, ক্যারি ১। অর্থাৎ ১০ মানে “এক-শূন্য”, দশ নয়।</li>
    </ul>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>১ + ১ = ১</th><th>১ + ১ = ১০</th></tr></thead>
      <tbody>
        <tr><td>গণিত</td><td>বুলিয়ান অ্যালজেবরা</td><td>বাইনারি সংখ্যা পদ্ধতি</td></tr>
        <tr><td>“+” মানে</td><td>যৌক্তিক যোগ (OR)</td><td>গাণিতিক যোগ</td></tr>
        <tr><td>০ ও ১ মানে</td><td>মিথ্যা ও সত্য</td><td>সংখ্যা শূন্য ও এক</td></tr>
        <tr><td>ক্যারি</td><td>নেই</td><td>আছে</td></tr>
      </tbody>
    </table>
  </section>
</div>
<aside class="side">
  <p><b>বিস্তারিত নোট</b><a href="#/note/number-system/arith">অধ্যায় ২ · যোগ, বিয়োগ, গুণ, ভাগ</a></p>
  <p class="tags"><span class="xt">অধ্যায়: সংখ্যা পদ্ধতি</span><span class="xt">লজিক সার্কিট ও লজিক গেট</span></p>
</aside>
`,

10: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>সমীকরণ সরলীকরণ ও যুক্তি বর্তনী</span><i class="bub mk">৫</i></h3>
    <p class="prose">ধরি F = <span class="m"><span class="ov">(A + <span class="ov">C</span>)(<span class="ov">B</span> + D)</span></span>।</p>
    <ul class="eqs">
      <li><span>F = <span class="ov">(A + <span class="ov">C</span>)(<span class="ov">B</span> + D)</span></span></li>
      <li><span>= <span class="ov">A + <span class="ov">C</span></span> + <span class="ov"><span class="ov">B</span> + D</span></span><small>ডি মরগান: <span class="ov">XY</span> = <span class="ov">X</span> + <span class="ov">Y</span></small></li>
      <li><span>= <span class="ov">A</span>·<span class="ov"><span class="ov">C</span></span> + <span class="ov"><span class="ov">B</span></span>·<span class="ov">D</span></span><small>ডি মরগান: <span class="ov">X + Y</span> = <span class="ov">X</span>·<span class="ov">Y</span></small></li>
      <li><span>= <span class="ov">A</span>C + B<span class="ov">D</span></span><small>দ্বি-পূরক: <span class="ov"><span class="ov">X</span></span> = X</small></li>
    </ul>
    <p class="final"><b>সরলীকৃত মান</b>F = <span class="ov">A</span>C + B<span class="ov">D</span></p>
    <figure class="fig wide mid">
      <svg viewBox="0 0 540 214" role="img" aria-label="যুক্তি বর্তনী: A একটি NOT গেইট দিয়ে A-বার হয়, C-এর সঙ্গে AND গেইটে যায়; D একটি NOT গেইট দিয়ে D-বার হয়, B-এর সঙ্গে আরেকটি AND গেইটে যায়; দুই AND গেইটের আউটপুট একটি OR গেইটে গিয়ে F দেয়।">
        <text x="6" y="51" text-anchor="start">A</text><path class="w" d="M20 47 L60 47"/><path class="gb" d="M60 35L88 47L60 59Z"/><circle class="gb" cx="92" cy="47" r="4"/><path class="w" d="M96 47 L200 47"/><text x="112" y="40" text-anchor="start"><tspan text-decoration="overline">A</tspan></text>
        <text x="6" y="77" text-anchor="start">C</text><path class="w" d="M20 73 L200 73"/>
        <text x="6" y="151" text-anchor="start">B</text><path class="w" d="M20 147 L200 147"/>
        <text x="6" y="177" text-anchor="start">D</text><path class="w" d="M20 173 L60 173"/><path class="gb" d="M60 161L88 173L60 185Z"/><circle class="gb" cx="92" cy="173" r="4"/><path class="w" d="M96 173 L200 173"/><text x="112" y="166" text-anchor="start"><tspan text-decoration="overline">D</tspan></text>
        <path class="gb" d="M200 35H220A25 25 0 0 1 220 85H200Z"/><path class="w" d="M245 60 L290 60 L290 97 L340 97"/><text x="252" y="53" text-anchor="start"><tspan text-decoration="overline">A</tspan>C</text>
        <path class="gb" d="M200 135H220A25 25 0 0 1 220 185H200Z"/><path class="w" d="M245 160 L290 160 L290 123 L340 123"/><text x="252" y="153" text-anchor="start">B<tspan text-decoration="overline">D</tspan></text>
        <path class="gb" d="M330 85Q345 110 330 135Q360 135 375 110Q360 85 330 85Z"/><path class="w" d="M375 110 L430 110"/><text x="436" y="115" text-anchor="start">F</text>
        <text class="cap" x="74" y="204" text-anchor="middle">NOT</text><text class="cap" x="222" y="204" text-anchor="middle">AND</text><text class="cap" x="352" y="204" text-anchor="middle">OR</text>
      </svg>
      <figcaption>চিত্র: F = <span class="ov">A</span>C + B<span class="ov">D</span>-এর যুক্তি বর্তনী</figcaption>
    </figure>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>অ্যালগরিদম ও এর বৈশিষ্ট্য</span><i class="bub mk">৫</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>কোনো সমস্যা সমাধানের জন্য ধাপে ধাপে লেখা সুনির্দিষ্ট ও সসীম নির্দেশের ক্রমকে অ্যালগরিদম বলে। শব্দটি এসেছে গণিতবিদ আল খোয়ারিজমির নাম থেকে।</p>
    <ul class="pts">
      <li><b>সসীমতা:</b> নির্দিষ্ট সংখ্যক ধাপের পরে অবশ্যই শেষ হবে।</li>
      <li><b>সুনির্দিষ্টতা:</b> প্রতিটি ধাপ স্পষ্ট ও দ্ব্যর্থহীন।</li>
      <li><b>ইনপুট:</b> শূন্য বা এক বা একাধিক ইনপুট থাকে।</li>
      <li><b>আউটপুট:</b> অন্তত একটি ফল দেয়।</li>
      <li><b>কার্যকারিতা:</b> প্রতিটি ধাপ বাস্তবে সম্পাদনযোগ্য ও সহজ।</li>
      <li><b>ভাষা-নিরপেক্ষ:</b> যেকোনো প্রোগ্রামিং ভাষায় রূপ দেওয়া যায়।</li>
    </ul>
  </section>
</div>
<aside class="side">
  <p><b>সরলীকরণে</b>প্রতিটি লাইনের পাশে কোন সূত্র লাগালেন লিখুন; চিত্রে প্রতিটি গেইটের আউটপুটের নাম দিন।</p>
  <p><b>ছাপার কথা</b>বারটি ছাপায় পুরো (A + <span class="ov">C</span>)(<span class="ov">B</span> + D)-এর ওপর।</p>
  <p class="tags"><span class="xt">অধ্যায়: লজিক সার্কিট ও লজিক গেট</span><span class="xt">অ্যালগরিদম ও ফ্লোচার্ট</span></p>
</aside>
`
};
