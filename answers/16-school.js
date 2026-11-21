/* Model answers · ১৬তম শিক্ষক নিবন্ধন (২০১৯), সহকারী শিক্ষক (তথ্য ও যোগাযোগ প্রযুক্তি), বিষয় কোড ৩১৩.
   Same structure as answers/17-school.js. Q8 is printed twice on the paper (Q6 and Q8 ask the same thing),
   so Q8 reuses Q6's answer. Every calculation here was checked by script. */
(window.ICT_ANSWERS = window.ICT_ANSWERS || {})["16-school"] = {

1: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. কম্পিউটারের সংগঠন</span><i class="bub mk">১০</i></h3>
    <p class="prose">কম্পিউটারের বিভিন্ন অংশ কীভাবে সাজানো থাকে এবং একে অন্যের সঙ্গে মিলে কাজ করে, তাকে কম্পিউটারের সংগঠন বলে। কম্পিউটার পাঁচটি কার্যকরী অংশ নিয়ে গঠিত: ইনপুট, স্মৃতি, গাণিতিক যুক্তি অংশ (ALU), নিয়ন্ত্রণ অংশ (CU) ও আউটপুট। ALU ও CU মিলে কেন্দ্রীয় প্রক্রিয়াকরণ অংশ (CPU)।</p>
    <figure class="fig flow wide org">
      <svg viewBox="0 0 640 300" role="img" aria-label="কম্পিউটারের সংগঠন: ইনপুট অংশ থেকে উপাত্ত যায় স্মৃতিতে; স্মৃতি ও গাণিতিক যুক্তি অংশের মধ্যে উপাত্ত আসা-যাওয়া করে; স্মৃতি থেকে ফল যায় আউটপুট অংশে। নিয়ন্ত্রণ অংশ সব অংশে নিয়ন্ত্রণ সংকেত পাঠায়। নিয়ন্ত্রণ অংশ ও গাণিতিক যুক্তি অংশ মিলে CPU।">
        <defs><marker id="org16-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
        <rect class="cpu" x="170" y="14" width="300" height="276"/><text class="sm" x="196" y="30">CPU</text>
        <rect class="fs" x="220" y="40" width="200" height="50"/><text x="320" y="66">নিয়ন্ত্রণ অংশ (CU)</text>
        <rect class="fs" x="220" y="125" width="200" height="50"/><text x="320" y="151">স্মৃতি অংশ</text>
        <rect class="fs fd" x="220" y="215" width="200" height="50"/><text x="320" y="241">গাণিতিক যুক্তি অংশ (ALU)</text>
        <rect class="fs" x="10" y="125" width="120" height="50"/><text x="70" y="151">ইনপুট অংশ</text><text class="sm" x="70" y="192">কিবোর্ড, মাউস</text>
        <rect class="fs" x="510" y="125" width="120" height="50"/><text x="570" y="151">আউটপুট অংশ</text><text class="sm" x="570" y="192">মনিটর, প্রিন্টার</text>
        <path class="fa" d="M130 150H218" marker-end="url(#org16-ah)"/>
        <path class="fa" d="M420 150H508" marker-end="url(#org16-ah)"/>
        <path class="fa" d="M300 175V213" marker-end="url(#org16-ah)"/><path class="fa" d="M340 215V177" marker-end="url(#org16-ah)"/>
        <path class="fa dash" d="M220 60H70V123" marker-end="url(#org16-ah)"/>
        <path class="fa dash" d="M420 60H570V123" marker-end="url(#org16-ah)"/>
        <path class="fa dash" d="M320 90V123" marker-end="url(#org16-ah)"/>
        <path class="fa dash" d="M220 80H195V240H218" marker-end="url(#org16-ah)"/>
      </svg>
      <figcaption>চিত্র: কম্পিউটারের সংগঠন। টানা রেখা উপাত্তের পথ, ড্যাশ রেখা নিয়ন্ত্রণ সংকেত।</figcaption>
    </figure>
    <h4 class="sub-h"><span>১</span>ইনপুট অংশ</h4>
    <p class="prose">ব্যবহারকারীর কাছ থেকে উপাত্ত ও নির্দেশ গ্রহণ করে, সেগুলো বাইনারি সংকেতে রূপান্তর করে স্মৃতিতে পাঠায়। যেমন কিবোর্ড, মাউস, স্ক্যানার, মাইক্রোফোন।</p>
    <h4 class="sub-h"><span>২</span>স্মৃতি অংশ</h4>
    <p class="prose">প্রোগ্রাম, উপাত্ত, মধ্যবর্তী ও চূড়ান্ত ফল জমা রাখে এবং প্রয়োজনমতো CPU-কে সরবরাহ করে। প্রধান স্মৃতি (RAM, ROM) চলমান কাজ রাখে; সহায়ক স্মৃতি (হার্ডডিস্ক, SSD) স্থায়ীভাবে রাখে।</p>
    <h4 class="sub-h"><span>৩</span>গাণিতিক যুক্তি অংশ (ALU)</h4>
    <p class="prose">যোগ, বিয়োগ, গুণ, ভাগের মতো গাণিতিক কাজ এবং তুলনা (&gt;, &lt;, =) ও AND, OR, NOT-এর মতো যৌক্তিক কাজ করে। ফল রেজিস্টার হয়ে স্মৃতিতে ফেরে।</p>
    <h4 class="sub-h"><span>৪</span>নিয়ন্ত্রণ অংশ (CU)</h4>
    <p class="prose">স্মৃতি থেকে নির্দেশ এনে বোঝে এবং বাকি সব অংশকে সংকেত দিয়ে বলে কখন কী করতে হবে। পুরো কম্পিউটারের কাজের সমন্বয় করে বলে একে কম্পিউটারের স্নায়ুকেন্দ্র বলা যায়।</p>
    <h4 class="sub-h"><span>৫</span>আউটপুট অংশ</h4>
    <p class="prose">প্রক্রিয়াকরণের ফল বাইনারি থেকে মানুষের বোঝার মতো রূপে দেখায়: মনিটরে, কাগজে বা শব্দে। যেমন মনিটর, প্রিন্টার, স্পিকার।</p>
    <p class="prose">অংশগুলো তিন ধরনের বাস দিয়ে যুক্ত থাকে: <b>ডেটা বাস</b> উপাত্ত বহন করে, <b>অ্যাড্রেস বাস</b> স্মৃতির ঠিকানা বহন করে, আর <b>কন্ট্রোল বাস</b> নিয়ন্ত্রণ সংকেত বহন করে।</p>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. হাইব্রিড কম্পিউটার ও এর বৈশিষ্ট্য</span><i class="bub mk">৫</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>অ্যানালগ ও ডিজিটাল কম্পিউটারের সুবিধা একসঙ্গে নিয়ে যে কম্পিউটার তৈরি, তাকে হাইব্রিড কম্পিউটার বলে। এটি অ্যানালগ পদ্ধতিতে পরিমাপ করে এবং ডিজিটাল পদ্ধতিতে হিসাব করে।</p>
    <ol class="chain">
      <li><b>অ্যানালগ অংশ</b><small>সেন্সরে পরিমাপ</small></li>
      <li><b>রূপান্তরক</b><small>ADC</small></li>
      <li><b>ডিজিটাল অংশ</b><small>হিসাব ও ফল</small></li>
    </ol>
    <ul class="pts">
      <li>অবিচ্ছিন্ন (অ্যানালগ) ও বিচ্ছিন্ন (ডিজিটাল), দুই ধরনের উপাত্ত নিয়েই কাজ করতে পারে।</li>
      <li>অ্যানালগ অংশ সেন্সর থেকে তাপ, চাপ, স্পন্দন মাপে; রূপান্তরক (ADC) তা সংখ্যায় বদলায়; ডিজিটাল অংশ হিসাব করে।</li>
      <li>অ্যানালগের দ্রুত পরিমাপ আর ডিজিটালের নির্ভুলতা ও স্মৃতি, দুটিই পাওয়া যায়।</li>
      <li>সাধারণত নির্দিষ্ট বিশেষ কাজের জন্য তৈরি; দাম বেশি ও গঠন জটিল।</li>
      <li><b>উদাহরণ ও ব্যবহার:</b> হাসপাতালের ICU-তে রোগী পর্যবেক্ষণ যন্ত্র, ECG, আবহাওয়া পর্যবেক্ষণ, মহাকাশযান ও ক্ষেপণাস্ত্র নিয়ন্ত্রণ।</li>
    </ul>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ক. কম্পিউটারের প্রজন্ম; তৃতীয় ও চতুর্থ প্রজন্ম</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>প্রযুক্তির বড় পরিবর্তনের ভিত্তিতে কম্পিউটারের বিকাশের ধাপগুলোকে কম্পিউটারের প্রজন্ম বলে। প্রতিটি প্রজন্ম চেনা যায় তার মূল ইলেকট্রনিক উপাদান দিয়ে: ভ্যাকুয়াম টিউব, ট্রানজিস্টর, ইন্টিগ্রেটেড সার্কিট, মাইক্রোপ্রসেসর এবং কৃত্রিম বুদ্ধিমত্তা।</p>

    <h4 class="sub-h"><span>৩</span>তৃতীয় প্রজন্ম (১৯৬৫–১৯৭১): ইন্টিগ্রেটেড সার্কিট</h4>
    <ul class="pts">
      <li>মূল উপাদান ইন্টিগ্রেটেড সার্কিট (IC): একটি সিলিকন চিপে অনেকগুলো ট্রানজিস্টর, রেজিস্টর ও ক্যাপাসিটর (SSI ও MSI প্রযুক্তি)।</li>
      <li>আকার, দাম, তাপ ও বিদ্যুৎ খরচ আরও কমে; গতি ও নির্ভরযোগ্যতা বাড়ে, গতি ন্যানোসেকেন্ড পর্যায়ের।</li>
      <li>পাঞ্চকার্ডের বদলে কিবোর্ড ও মনিটর দিয়ে কাজ শুরু।</li>
      <li>অপারেটিং সিস্টেমের ব্যবহার; মাল্টিপ্রোগ্রামিং ও টাইম শেয়ারিং চালু হয়।</li>
      <li>BASIC, PASCAL-সহ উচ্চস্তরের ভাষার ব্যাপক ব্যবহার; মিনি কম্পিউটারের আবির্ভাব।</li>
      <li><b>উদাহরণ:</b> IBM System/360, IBM 370, PDP-11।</li>
    </ul>

    <h4 class="sub-h"><span>৪</span>চতুর্থ প্রজন্ম (১৯৭১–বর্তমান): মাইক্রোপ্রসেসর</h4>
    <ul class="pts">
      <li>মূল উপাদান মাইক্রোপ্রসেসর: LSI ও VLSI প্রযুক্তিতে পুরো CPU একটি চিপে। ১৯৭১ সালের Intel 4004 প্রথম বাণিজ্যিক মাইক্রোপ্রসেসর।</li>
      <li>পার্সোনাল কম্পিউটার, ল্যাপটপ ও পরে স্মার্টফোনের যুগ; দাম সাধারণ মানুষের নাগালে আসে।</li>
      <li>অর্ধপরিবাহী (সেমিকন্ডাক্টর) মেমোরি; হার্ডডিস্ক ও অপটিক্যাল ডিস্কে বিপুল সংরক্ষণক্ষমতা।</li>
      <li>মাউস ও গ্রাফিক্যাল ইউজার ইন্টারফেস (GUI); নেটওয়ার্ক ও ইন্টারনেটের প্রসার।</li>
      <li>গতি পিকোসেকেন্ড পর্যায়ের; আকারে ছোট, নির্ভরযোগ্য ও কম বিদ্যুৎ খরচ।</li>
      <li><b>উদাহরণ:</b> IBM PC, Apple Macintosh, আজকের ডেস্কটপ ও ল্যাপটপ।</li>
    </ul>

    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>তৃতীয় প্রজন্ম</th><th>চতুর্থ প্রজন্ম</th></tr></thead>
      <tbody>
        <tr><td>মূল উপাদান</td><td>IC (SSI, MSI)</td><td>মাইক্রোপ্রসেসর (LSI, VLSI)</td></tr>
        <tr><td>স্মৃতি</td><td>চৌম্বক কোর, পরে অর্ধপরিবাহী</td><td>অর্ধপরিবাহী RAM, ROM</td></tr>
        <tr><td>ইনপুট-আউটপুট</td><td>কিবোর্ড, মনিটর</td><td>মাউস, GUI, টাচস্ক্রিন</td></tr>
        <tr><td>ধরন</td><td>মিনি কম্পিউটার</td><td>মাইক্রো বা পার্সোনাল কম্পিউটার</td></tr>
      </tbody>
    </table>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. কম্পিউটারের পাঁচটি গুরুত্বপূর্ণ বৈশিষ্ট্য</span><i class="bub mk">৫</i></h3>
    <ol class="algo">
      <li><span><b>দ্রুতগতি:</b> প্রতি সেকেন্ডে কোটি কোটি নির্দেশ পালন করে; মানুষের কয়েক দিনের হিসাব কয়েক মুহূর্তে করে।</span></li>
      <li><span><b>নির্ভুলতা:</b> সঠিক উপাত্ত ও প্রোগ্রাম দিলে ফল নির্ভুল হয়। ভুল ফল সাধারণত ভুল ইনপুটের কারণে (Garbage In, Garbage Out)।</span></li>
      <li><span><b>ক্লান্তিহীনতা ও নির্ভরযোগ্যতা:</b> একটানা ঘণ্টার পর ঘণ্টা একই মান ও গতিতে কাজ করে; বিরক্ত বা অমনোযোগী হয় না।</span></li>
      <li><span><b>বিপুল স্মৃতি:</b> বিপুল পরিমাণ উপাত্ত দীর্ঘদিন সংরক্ষণ করে এবং মুহূর্তে খুঁজে বের করে।</span></li>
      <li><span><b>বহুমুখিতা:</b> প্রোগ্রাম বদলে একই কম্পিউটারে হিসাব, লেখালেখি, ছবি আঁকা, গান শোনা, যোগাযোগসহ নানা কাজ করা যায়।</span></li>
    </ol>
    <p class="prose">এ ছাড়া কম্পিউটার স্বয়ংক্রিয়ভাবে কাজ করে। তবে এর নিজস্ব বুদ্ধি বা বিচারক্ষমতা নেই; যা নির্দেশ দেওয়া হয় শুধু তা-ই করে।</p>
  </section>
</div>
<aside class="side">
  <p><b>চিত্রেই অর্ধেক নম্বর</b>সংগঠনের চিত্রে পাঁচটি অংশ, উপাত্তের পথ (টানা তীর) আর নিয়ন্ত্রণ সংকেত (ড্যাশ তীর) আলাদা করে দেখান।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/computer-basics/org">অধ্যায় ১ · সংগঠন</a>, <a href="#/note/computer-basics/gen">প্রজন্ম</a></p>
  <p class="tags"><span class="xt">অধ্যায়: কম্পিউটার বেসিক</span></p>
</aside>
`,

2: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. মাইক্রোপ্রসেসর ও এর গঠন</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>কম্পিউটারের কেন্দ্রীয় প্রক্রিয়াকরণ অংশের (CPU) সব কাজ যে একটি মাত্র ইন্টিগ্রেটেড সার্কিট চিপে তৈরি করা হয়, তাকে মাইক্রোপ্রসেসর বলে। ১৯৭১ সালে Intel কোম্পানি প্রথম মাইক্রোপ্রসেসর Intel 4004 (৪ বিট) তৈরি করে; এর মাধ্যমেই চতুর্থ প্রজন্মের শুরু।</p>
    <figure class="fig flow wide big">
      <svg viewBox="0 0 600 290" role="img" aria-label="মাইক্রোপ্রসেসরের গঠন: ভেতরে গাণিতিক যুক্তি অংশ, রেজিস্টার অ্যারে, নির্দেশ রেজিস্টার ও ডিকোডার এবং নিয়ন্ত্রণ অংশ অভ্যন্তরীণ ডেটা বাস দিয়ে যুক্ত; বাইরে অ্যাড্রেস বাস, ডেটা বাস ও কন্ট্রোল বাস দিয়ে স্মৃতি ও ইনপুট-আউটপুটের সঙ্গে যুক্ত।">
        <defs><marker id="mpu16-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
        <rect class="cpu" x="10" y="10" width="375" height="270"/><text class="sm" x="76" y="26">মাইক্রোপ্রসেসর</text>
        <rect class="fs fd" x="28" y="40" width="160" height="66"/><text x="108" y="62">ALU</text><text class="sm" x="108" y="88">অ্যাকুমুলেটর · ফ্ল্যাগ</text>
        <rect class="fs" x="205" y="40" width="160" height="66"/><text x="285" y="62">রেজিস্টার অ্যারে</text><text class="sm" x="285" y="88">B C D E H L · PC · SP</text>
        <path class="busl" d="M28 145H365"/><text class="sm" x="196" y="131">অভ্যন্তরীণ ডেটা বাস</text>
        <path class="fa" d="M108 108V141" marker-start="url(#mpu16-ah)" marker-end="url(#mpu16-ah)"/>
        <path class="fa" d="M285 108V141" marker-start="url(#mpu16-ah)" marker-end="url(#mpu16-ah)"/>
        <path class="fa" d="M108 149V182" marker-end="url(#mpu16-ah)"/>
        <rect class="fs" x="28" y="184" width="160" height="66"/><text x="108" y="206">নির্দেশ রেজিস্টার</text><text class="sm" x="108" y="232">ও ডিকোডার</text>
        <rect class="fs" x="205" y="184" width="160" height="66"/><text x="285" y="206">নিয়ন্ত্রণ অংশ</text><text class="sm" x="285" y="232">সময় ও নিয়ন্ত্রণ সংকেত</text>
        <path class="fa" d="M188 217H203" marker-end="url(#mpu16-ah)"/>
        <rect class="fs" x="480" y="40" width="110" height="210"/><text x="535" y="133">স্মৃতি</text><text x="535" y="157">ও I/O</text>
        <path class="fa" d="M365 73H478" marker-end="url(#mpu16-ah)"/><text class="sm" x="432" y="60">অ্যাড্রেস বাস</text>
        <path class="fa" d="M367 145H478" marker-start="url(#mpu16-ah)" marker-end="url(#mpu16-ah)"/><text class="sm" x="432" y="132">ডেটা বাস</text>
        <path class="fa dash" d="M365 217H478" marker-start="url(#mpu16-ah)" marker-end="url(#mpu16-ah)"/><text class="sm" x="432" y="204">কন্ট্রোল বাস</text>
      </svg>
      <figcaption>চিত্র: মাইক্রোপ্রসেসরের গঠন</figcaption>
    </figure>
    <h4 class="sub-h"><span>১</span>গাণিতিক যুক্তি অংশ (ALU)</h4>
    <p class="prose">গাণিতিক ও যৌক্তিক কাজ করে। এর সঙ্গে থাকে অ্যাকুমুলেটর (একটি অপারেন্ড ও ফল রাখে) এবং ফ্ল্যাগ রেজিস্টার (ফল শূন্য, ঋণাত্মক বা ক্যারি হলো কি না জানায়)।</p>
    <h4 class="sub-h"><span>২</span>রেজিস্টার অ্যারে</h4>
    <p class="prose">চিপের ভেতরের অতি দ্রুত অস্থায়ী স্মৃতির সারি। সাধারণ কাজের রেজিস্টার (যেমন 8085-এ B, C, D, E, H, L) উপাত্ত রাখে; প্রোগ্রাম কাউন্টার (PC) পরের নির্দেশের ঠিকানা রাখে; স্ট্যাক পয়েন্টার (SP) স্ট্যাকের শীর্ষের ঠিকানা রাখে।</p>
    <h4 class="sub-h"><span>৩</span>নির্দেশ রেজিস্টার ও ডিকোডার</h4>
    <p class="prose">স্মৃতি থেকে আনা নির্দেশ নির্দেশ রেজিস্টারে বসে; ডিকোডার তা ভেঙে বোঝে কোন কাজ করতে হবে।</p>
    <h4 class="sub-h"><span>৪</span>সময় ও নিয়ন্ত্রণ অংশ</h4>
    <p class="prose">ক্লক সংকেতের তালে ডিকোড করা নির্দেশ অনুযায়ী ALU, রেজিস্টার, স্মৃতি ও ইনপুট-আউটপুটকে নিয়ন্ত্রণ সংকেত (যেমন পড়া, লেখা) পাঠায়।</p>
    <h4 class="sub-h"><span>৫</span>বাস</h4>
    <ul class="pts">
      <li><b>অ্যাড্রেস বাস:</b> একমুখী; মাইক্রোপ্রসেসর থেকে স্মৃতির ঠিকানা যায়। 8085-এর ১৬ বিট অ্যাড্রেস বাস ২<sup>১৬</sup> = ৬৫,৫৩৬ বাইট (৬৪ KB) স্মৃতি চিনতে পারে।</li>
      <li><b>ডেটা বাস:</b> দ্বিমুখী; উপাত্ত আসা-যাওয়া করে। এর প্রস্থ (৮, ১৬, ৩২, ৬৪ বিট) দিয়ে মাইক্রোপ্রসেসরকে ৮ বিট, ১৬ বিট ইত্যাদি বলা হয়।</li>
      <li><b>কন্ট্রোল বাস:</b> পড়া (RD), লেখা (WR)-এর মতো নিয়ন্ত্রণ সংকেত বহন করে।</li>
    </ul>
    <p class="prose"><b>উদাহরণ:</b> Intel 4004, 8085, 8086, Pentium, Core i3/i5/i7; AMD Ryzen। মাইক্রোপ্রসেসরের ক্ষমতা মাপা হয় ক্লক গতি (GHz) ও শব্দ-দৈর্ঘ্য (বিট) দিয়ে।</p>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. গাণিতিক ও যুক্তিমূলক অংশের (ALU) কাজ</span><i class="bub mk">৫</i></h3>
    <ul class="pts">
      <li><b>গাণিতিক কাজ:</b> যোগ, বিয়োগ, গুণ ও ভাগ। ALU মূলত যোগ করতে পারে; বিয়োগ করে ২-এর পরিপূরক যোগ করে, গুণ বারবার যোগ ও সরণ করে, ভাগ বারবার বিয়োগ করে।</li>
      <li><b>যৌক্তিক কাজ:</b> AND, OR, NOT, XOR ইত্যাদি বিটভিত্তিক কাজ।</li>
      <li><b>তুলনা:</b> দুটি সংখ্যার মধ্যে বড়, ছোট বা সমান (&gt;, &lt;, =) নির্ণয়; এর ওপর ভিত্তি করে প্রোগ্রাম সিদ্ধান্ত নেয়।</li>
      <li><b>সরণ ও ঘূর্ণন:</b> বিটগুলোকে বাঁয়ে বা ডানে সরানো (Shift, Rotate); বাঁয়ে এক ঘর সরালে মান দ্বিগুণ হয়।</li>
      <li><b>ফল ও অবস্থা জানানো:</b> ফল অ্যাকুমুলেটরে রাখে এবং ফ্ল্যাগে জানায় ফল শূন্য, ঋণাত্মক, ক্যারি বা ওভারফ্লো হলো কি না।</li>
    </ul>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ক. সহায়ক স্মৃতি; হার্ডডিস্কের গঠন</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>যে স্মৃতিতে প্রোগ্রাম ও উপাত্ত স্থায়ীভাবে সংরক্ষণ করা হয়, বিদ্যুৎ চলে গেলেও যা মুছে যায় না এবং CPU যা সরাসরি নয়, প্রধান স্মৃতির মাধ্যমে ব্যবহার করে, তাকে সহায়ক স্মৃতি বলে। যেমন হার্ডডিস্ক, SSD, পেনড্রাইভ, CD, DVD, ম্যাগনেটিক টেপ।</p>
    <p class="prose">হার্ডডিস্ক সবচেয়ে প্রচলিত সহায়ক স্মৃতি। এটি চৌম্বকীয় পদ্ধতিতে তথ্য রাখে এবং এর গঠন নিচের অংশগুলো নিয়ে:</p>
    <figure class="fig flow hdd">
      <svg viewBox="0 0 380 240" role="img" aria-label="হার্ডডিস্কের গঠন, ওপর থেকে দেখা: একটি গোল প্ল্যাটার মাঝের স্পিন্ডলে ঘোরে; প্ল্যাটারের গায়ে বৃত্তাকার ট্র্যাক; একটি ট্র্যাকের এক টুকরো সেক্টর; অ্যাকচুয়েটর আর্মের মাথায় রিড-রাইট হেড প্ল্যাটারের ওপর থাকে।">
        <circle class="fs" cx="130" cy="120" r="100"/>
        <circle class="trk" cx="130" cy="120" r="80"/><circle class="trk on" cx="130" cy="120" r="62"/><circle class="trk" cx="130" cy="120" r="44"/>
        <path class="sect" d="M184.39 74.36 A71 71 0 0 1 199.92 107.67 L182.19 110.8 A53 53 0 0 0 170.6 85.93 Z"/>
        <circle class="fs" cx="130" cy="120" r="12"/>
        <path class="arm" d="M340 210 L195 92"/><circle class="fs" cx="340" cy="210" r="9"/><rect class="head" x="186" y="84" width="16" height="12" transform="rotate(39 194 90)"/>
        <path class="fa" d="M60 22 L84 48"/><text class="sm" x="52" y="14">প্ল্যাটার</text>
        <path class="fa" d="M268 34 L203 84"/><text class="sm" x="300" y="28">রিড-রাইট হেড</text>
        <path class="fa" d="M310 132 L194 98"/><text class="sm" x="338" y="138">সেক্টর</text>
        <path class="fa" d="M24 178 L76 158"/><text class="sm" x="22" y="190">ট্র্যাক</text>
        <path class="fa" d="M130 120 L106 216"/><text class="sm" x="96" y="230">স্পিন্ডল</text>
        <text class="sm" x="282" y="232">অ্যাকচুয়েটর আর্ম</text>
      </svg>
      <figcaption>চিত্র ১: হার্ডডিস্কের গঠন (ওপর থেকে দেখা)</figcaption>
    </figure>
    <figure class="fig flow hdd">
      <svg viewBox="0 0 380 222" role="img" aria-label="হার্ডডিস্কের গঠন, পাশ থেকে দেখা: তিনটি প্ল্যাটার একটি স্পিন্ডলে গাঁথা; প্রতিটি প্ল্যাটারের ওপরে ও নিচে একটি করে রিড-রাইট হেড, সব হেড একটি অ্যাকচুয়েটরে যুক্ত; সব প্ল্যাটারের একই ট্র্যাক মিলে একটি সিলিন্ডার।">
        <rect class="fs" x="104" y="26" width="12" height="166"/>
        <rect class="fs" x="20" y="60" width="180" height="8"/><rect class="fs" x="20" y="105" width="180" height="8"/><rect class="fs" x="20" y="150" width="180" height="8"/>
        <rect class="fa dash" x="62" y="50" width="14" height="118"/>
        <path class="arm thin" d="M156 54H322M156 74H322M156 99H322M156 119H322M156 144H322M156 164H322"/>
        <rect class="head" x="146" y="51" width="12" height="6"/><rect class="head" x="146" y="71" width="12" height="6"/><rect class="head" x="146" y="96" width="12" height="6"/><rect class="head" x="146" y="116" width="12" height="6"/><rect class="head" x="146" y="141" width="12" height="6"/><rect class="head" x="146" y="161" width="12" height="6"/>
        <rect class="fs" x="320" y="40" width="22" height="138"/>
        <path class="fa" d="M40 38V58"/><text class="sm" x="40" y="28">প্ল্যাটার</text>
        <path class="fa" d="M200 38L157 50"/><text class="sm" x="218" y="28">রিড-রাইট হেড</text>
        <path class="fa" d="M69 180V170"/><text class="sm" x="69" y="192">সিলিন্ডার</text>
        <path class="fa" d="M117 186L142 202"/><text class="sm" x="174" y="206">স্পিন্ডল</text>
        <path class="fa" d="M300 188V168"/><text class="sm" x="300" y="200">অ্যাকচুয়েটর আর্ম</text>
      </svg>
      <figcaption>চিত্র ২: হার্ডডিস্কের গঠন (পাশ থেকে দেখা)</figcaption>
    </figure>
    <ul class="pts">
      <li><b>প্ল্যাটার:</b> চৌম্বক পদার্থে মোড়া এক বা একাধিক ধাতব বা কাচের চাকতি; দুই পিঠেই তথ্য থাকে।</li>
      <li><b>স্পিন্ডল ও মোটর:</b> প্ল্যাটারগুলো একটি দণ্ডে গাঁথা; মোটর এদের প্রতি মিনিটে ৫,৪০০–৭,২০০ বার (RPM) ঘোরায়।</li>
      <li><b>রিড-রাইট হেড:</b> প্রতিটি পিঠের জন্য একটি হেড; প্ল্যাটার না ছুঁয়ে সামান্য ওপরে ভেসে থেকে চুম্বকত্ব বদলে লেখে ও পড়ে।</li>
      <li><b>অ্যাকচুয়েটর আর্ম:</b> সব হেডকে একসঙ্গে ভেতরে-বাইরে সরিয়ে নির্দিষ্ট ট্র্যাকে নেয়।</li>
      <li><b>ট্র্যাক:</b> প্রতিটি পিঠের এককেন্দ্রিক বৃত্তাকার পথ।</li>
      <li><b>সেক্টর:</b> ট্র্যাকের ছোট টুকরো, তথ্য রাখার ক্ষুদ্রতম একক (সাধারণত ৫১২ বাইট বা ৪ KB)।</li>
      <li><b>সিলিন্ডার:</b> সব প্ল্যাটারের একই নম্বরের ট্র্যাক মিলে একটি সিলিন্ডার।</li>
    </ul>
    <p class="prose"><b>ধারণক্ষমতা</b> = সিলিন্ডার × হেড × প্রতি ট্র্যাকে সেক্টর × প্রতি সেক্টরে বাইট। যেমন ১০০০ × ৪ × ৬৩ × ৫১২ = ১২,৯০,২৪,০০০ বাইট ≈ ১২৩ MB। তথ্য পেতে মোট সময় = সিক টাইম (হেড ট্র্যাকে যেতে) + ঘূর্ণন বিলম্ব (সেক্টর হেডের নিচে আসতে) + স্থানান্তর সময়।</p>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. হার্ডওয়্যার ও সফটওয়্যারের তুলনা</span><i class="bub mk">৫</i></h3>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>হার্ডওয়্যার</th><th>সফটওয়্যার</th></tr></thead>
      <tbody>
        <tr><td>সংজ্ঞা</td><td>কম্পিউটারের যন্ত্রাংশ, যা দেখা ও ছোঁয়া যায়</td><td>কাজ করানোর নির্দেশ বা প্রোগ্রামের সমষ্টি; ছোঁয়া যায় না</td></tr>
        <tr><td>প্রকার</td><td>ইনপুট, প্রক্রিয়াকরণ, স্মৃতি ও আউটপুট যন্ত্র</td><td>সিস্টেম ও অ্যাপ্লিকেশন সফটওয়্যার</td></tr>
        <tr><td>তৈরি</td><td>কারখানায়, ইলেকট্রনিক উপাদানে</td><td>প্রোগ্রামিং ভাষায় লিখে</td></tr>
        <tr><td>ক্ষয়</td><td>ব্যবহারে ক্ষয় হয়, ভেঙে যায়</td><td>ক্ষয় হয় না; তবে ত্রুটি (বাগ) থাকতে পারে</td></tr>
        <tr><td>ভাইরাস</td><td>আক্রান্ত হয় না</td><td>আক্রান্ত হতে পারে</td></tr>
        <tr><td>বদলানো</td><td>নতুন যন্ত্রাংশ লাগাতে হয়</td><td>আপডেট বা নতুন করে ইনস্টল করলেই হয়</td></tr>
        <tr><td>নির্ভরতা</td><td>সফটওয়্যার ছাড়া অচল</td><td>চলতে হার্ডওয়্যার লাগে</td></tr>
        <tr><td>উদাহরণ</td><td>কিবোর্ড, মনিটর, RAM, হার্ডডিস্ক</td><td>Windows, MS Word, Chrome</td></tr>
      </tbody>
    </table>
    <p class="prose">হার্ডওয়্যার যেন কম্পিউটারের দেহ, আর সফটওয়্যার তার প্রাণ; একটি ছাড়া অন্যটি কোনো কাজে আসে না।</p>
  </section>
</div>
<aside class="side">
  <p><b>বাস তিনটি</b>অ্যাড্রেস বাস একমুখী, ডেটা ও কন্ট্রোল বাস দ্বিমুখী; এই কথাটি লিখলে পরীক্ষক খুশি হন।</p>
  <p><b>ALU বিস্তারিত</b><a href="#/written/18-school/q3">১৮তম প্রশ্ন ৩: ALU-র কর্মপদ্ধতি</a></p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/computer-basics/org">অধ্যায় ১ · সংগঠন</a>, <a href="#/note/computer-basics/mem">স্মৃতি</a></p>
  <p class="tags"><span class="xt">অধ্যায়: কম্পিউটার বেসিক</span></p>
</aside>
`,

3: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. সফটওয়্যার; অ্যাপ্লিকেশন সফটওয়্যারের প্রকার</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>কম্পিউটারকে দিয়ে কোনো কাজ করানোর জন্য ধারাবাহিকভাবে সাজানো নির্দেশ বা প্রোগ্রামের সমষ্টিকে সফটওয়্যার বলে। সফটওয়্যার দুই প্রকার: সিস্টেম সফটওয়্যার (যেমন অপারেটিং সিস্টেম) ও অ্যাপ্লিকেশন সফটওয়্যার।</p>
    <p class="prose">ব্যবহারকারীর নির্দিষ্ট কোনো কাজ বা সমস্যা সমাধানের জন্য যে সফটওয়্যার তৈরি, তাকে অ্যাপ্লিকেশন সফটওয়্যার বলে। এটি অপারেটিং সিস্টেমের ওপর চলে।</p>
    <figure class="fig">
      <ul class="tree">
        <li><span class="t-root">অ্যাপ্লিকেশন সফটওয়্যার</span>
          <ul>
            <li><span>সাধারণ ব্যবহারের (প্যাকেজ)</span><span class="leaf">ওয়ার্ড প্রসেসর · স্প্রেডশিট · ডেটাবেজ · প্রেজেন্টেশন · গ্রাফিক্স · ব্রাউজার</span></li>
            <li><span>বিশেষ ব্যবহারের (কাস্টমাইজড)</span><span class="leaf">বেতন হিসাব · ব্যাংকিং · টিকিট বুকিং · স্কুলের ফল প্রকাশ</span></li>
          </ul>
        </li>
      </ul>
      <figcaption>চিত্র: অ্যাপ্লিকেশন সফটওয়্যারের প্রকারভেদ</figcaption>
    </figure>
    <h4 class="sub-h"><span>১</span>সাধারণ ব্যবহারের বা প্যাকেজ সফটওয়্যার</h4>
    <p class="prose">অনেক মানুষের একই ধরনের কাজের জন্য তৈরি, বাজারে কিনে বা নামিয়ে ব্যবহার করা যায়।</p>
    <table class="rt cmp">
      <thead><tr><th>প্রকার</th><th>কাজ</th><th>উদাহরণ</th></tr></thead>
      <tbody>
        <tr><td>ওয়ার্ড প্রসেসর</td><td>চিঠি, প্রতিবেদন লেখা ও সাজানো</td><td>MS Word, Google Docs</td></tr>
        <tr><td>স্প্রেডশিট</td><td>সারণিতে হিসাব, সূত্র, লেখচিত্র</td><td>MS Excel, Google Sheets</td></tr>
        <tr><td>ডেটাবেজ ব্যবস্থাপনা</td><td>বিপুল উপাত্ত সংরক্ষণ, খোঁজা, সাজানো</td><td>MS Access, Oracle, MySQL</td></tr>
        <tr><td>প্রেজেন্টেশন</td><td>স্লাইড দিয়ে উপস্থাপনা</td><td>MS PowerPoint</td></tr>
        <tr><td>গ্রাফিক্স ও ডিজাইন</td><td>ছবি সম্পাদনা ও নকশা</td><td>Adobe Photoshop, Illustrator</td></tr>
        <tr><td>মাল্টিমিডিয়া</td><td>গান ও ভিডিও চালানো, সম্পাদনা</td><td>VLC Media Player</td></tr>
        <tr><td>যোগাযোগ ও ইন্টারনেট</td><td>ওয়েব দেখা, ই-মেইল, ভিডিও কল</td><td>Chrome, Gmail, Zoom</td></tr>
      </tbody>
    </table>
    <h4 class="sub-h"><span>২</span>বিশেষ ব্যবহারের বা কাস্টমাইজড সফটওয়্যার</h4>
    <p class="prose">কোনো নির্দিষ্ট প্রতিষ্ঠানের নির্দিষ্ট চাহিদা অনুযায়ী ফরমায়েশ দিয়ে তৈরি করা সফটওয়্যার। যেমন একটি ব্যাংকের লেনদেন সফটওয়্যার, কারখানার বেতন হিসাব, রেলের টিকিট বুকিং, বিদ্যালয়ের ফল প্রকাশ সফটওয়্যার। এটি ওই প্রতিষ্ঠানের কাজে পুরোপুরি মেলে, তবে খরচ ও সময় বেশি লাগে।</p>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. অপারেটিং সিস্টেমের গুরুত্বপূর্ণ কাজ</span><i class="bub mk">৫</i></h3>
    <ul class="pts">
      <li><b>প্রসেস ব্যবস্থাপনা:</b> কোন প্রোগ্রাম কখন কতক্ষণ CPU পাবে তা ঠিক করে।</li>
      <li><b>মেমোরি ব্যবস্থাপনা:</b> প্রোগ্রামকে প্রধান স্মৃতিতে জায়গা দেয় ও কাজ শেষে ফেরত নেয়।</li>
      <li><b>ফাইল ব্যবস্থাপনা:</b> ফাইল ও ফোল্ডার তৈরি, সংরক্ষণ, খোঁজা, কপি ও মোছা।</li>
      <li><b>ডিভাইস ব্যবস্থাপনা:</b> কিবোর্ড, প্রিন্টার, ডিস্কসহ ইনপুট-আউটপুট যন্ত্র নিয়ন্ত্রণ (ড্রাইভারের মাধ্যমে)।</li>
      <li><b>নিরাপত্তা:</b> পাসওয়ার্ড ও অনুমতি দিয়ে অননুমোদিত ব্যবহার ঠেকায়।</li>
      <li><b>ব্যবহারকারীর সঙ্গে যোগাযোগ:</b> কমান্ড বা চিত্রভিত্তিক ইন্টারফেস দেয়; ত্রুটি হলে বার্তা দেখায়।</li>
      <li><b>বুটিং:</b> কম্পিউটার চালু করে কাজের উপযোগী অবস্থায় আনে।</li>
    </ul>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ক. টাইমশেয়ারিং অপারেটিং সিস্টেম</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>যে অপারেটিং সিস্টেম CPU-র সময়কে ছোট ছোট টুকরোয় (টাইম স্লাইস) ভাগ করে পালাক্রমে অনেক ব্যবহারকারী বা প্রোগ্রামকে দেয়, ফলে একটি কম্পিউটারে একসঙ্গে অনেকে কাজ করতে পারেন, তাকে টাইমশেয়ারিং অপারেটিং সিস্টেম বলে।</p>
    <figure class="fig flow wide tshare">
      <svg viewBox="0 0 560 295" role="img" aria-label="টাইমশেয়ারিং: চারজন ব্যবহারকারী অপারেটিং সিস্টেমের সঙ্গে যুক্ত; অপারেটিং সিস্টেম পালা করে প্রত্যেককে CPU দেয়। নিচের সময়রেখায় CPU-র পালা ১, ২, ৩, ৪, তারপর আবার ১, ২, ৩, ৪।">
        <defs><marker id="ts16-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
        <rect class="fs" x="10" y="20" width="120" height="36"/><text x="70" y="38">ব্যবহারকারী ১</text>
        <rect class="fs" x="10" y="68" width="120" height="36"/><text x="70" y="86">ব্যবহারকারী ২</text>
        <rect class="fs" x="10" y="116" width="120" height="36"/><text x="70" y="134">ব্যবহারকারী ৩</text>
        <rect class="fs" x="10" y="164" width="120" height="36"/><text x="70" y="182">ব্যবহারকারী ৪</text>
        <path class="fa" d="M132 38L208 84" marker-start="url(#ts16-ah)" marker-end="url(#ts16-ah)"/>
        <path class="fa" d="M132 86L208 102" marker-start="url(#ts16-ah)" marker-end="url(#ts16-ah)"/>
        <path class="fa" d="M132 134L208 122" marker-start="url(#ts16-ah)" marker-end="url(#ts16-ah)"/>
        <path class="fa" d="M132 182L208 140" marker-start="url(#ts16-ah)" marker-end="url(#ts16-ah)"/>
        <rect class="fs fd" x="210" y="72" width="150" height="80"/><text x="285" y="100">অপারেটিং সিস্টেম</text><text class="sm" x="285" y="126">সময় ভাগ করে দেয়</text>
        <path class="fa" d="M360 112H438" marker-end="url(#ts16-ah)"/><text class="sm" x="399" y="98">পালা করে</text>
        <rect class="fs" x="440" y="87" width="110" height="50"/><text x="495" y="112">CPU</text>
        <text class="sm" x="128" y="222">CPU কার কাজ করছে:</text>
        <rect class="fs fd" x="40" y="236" width="60" height="30"/><text x="70" y="251">১</text>
        <rect class="fs" x="100" y="236" width="60" height="30"/><text x="130" y="251">২</text>
        <rect class="fs" x="160" y="236" width="60" height="30"/><text x="190" y="251">৩</text>
        <rect class="fs" x="220" y="236" width="60" height="30"/><text x="250" y="251">৪</text>
        <rect class="fs fd" x="280" y="236" width="60" height="30"/><text x="310" y="251">১</text>
        <rect class="fs" x="340" y="236" width="60" height="30"/><text x="370" y="251">২</text>
        <rect class="fs" x="400" y="236" width="60" height="30"/><text x="430" y="251">৩</text>
        <rect class="fs" x="460" y="236" width="60" height="30"/><text x="490" y="251">৪</text>
        <text class="sm" x="150" y="284">প্রতিটি ঘর একটি টাইম স্লাইস</text><text class="sm" x="490" y="284">সময় →</text>
      </svg>
      <figcaption>চিত্র: টাইমশেয়ারিং অপারেটিং সিস্টেমের কার্যপদ্ধতি</figcaption>
    </figure>
    <h4 class="sub-h"><span>১</span>কার্যপদ্ধতি</h4>
    <ol class="algo">
      <li>অনেক ব্যবহারকারী আলাদা টার্মিনাল থেকে একই কম্পিউটারে যুক্ত থাকেন; প্রত্যেকের প্রোগ্রাম স্মৃতিতে থাকে।</li>
      <li>অপারেটিং সিস্টেম প্রোগ্রামগুলোকে একটি সারিতে (রেডি কিউ) সাজায়।</li>
      <li>সারির প্রথম প্রোগ্রামটি একটি টাইম স্লাইস (কয়েক মিলিসেকেন্ড) ধরে CPU পায়।</li>
      <li>সময় শেষ হলে কাজ বাকি থাকলেও অপারেটিং সিস্টেম প্রোগ্রামটির অবস্থা সংরক্ষণ করে তাকে সারির শেষে পাঠায় এবং পরের প্রোগ্রামকে CPU দেয় (কনটেক্সট সুইচ)।</li>
      <li>এভাবে পালা ঘুরতে থাকে (রাউন্ড রবিন)। পালা এত দ্রুত ঘোরে যে প্রত্যেক ব্যবহারকারী মনে করেন কম্পিউটারটি শুধু তাঁর কাজই করছে।</li>
    </ol>
    <h4 class="sub-h"><span>২</span>সুবিধা ও অসুবিধা</h4>
    <ul class="pts">
      <li><b>সুবিধা:</b> সবাই দ্রুত সাড়া পান; CPU অলস বসে থাকে না; একটি দামি কম্পিউটার অনেকে ভাগ করে ব্যবহার করতে পারেন।</li>
      <li><b>অসুবিধা:</b> বারবার পালা বদলে বাড়তি সময় খরচ; ব্যবহারকারী বেশি হলে সবার কাজ ধীর হয়; অনেকের উপাত্ত একসঙ্গে থাকায় নিরাপত্তার ঝুঁকি।</li>
      <li><b>উদাহরণ:</b> UNIX, Linux, Multics।</li>
    </ul>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. ইউটিলিটি প্রোগ্রাম ও এর কাজ</span><i class="bub mk">৫</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>যে সিস্টেম সফটওয়্যার কম্পিউটারকে সুরক্ষিত, পরিচ্ছন্ন ও দক্ষ রাখতে রক্ষণাবেক্ষণের কাজ করে, তাকে ইউটিলিটি প্রোগ্রাম বলে।</p>
    <table class="rt cmp">
      <thead><tr><th>কাজ</th><th>ইউটিলিটি</th></tr></thead>
      <tbody>
        <tr><td>ভাইরাস খুঁজে বের করা ও মোছা</td><td>অ্যান্টিভাইরাস (Windows Defender, Avast)</td></tr>
        <tr><td>অপ্রয়োজনীয় ও অস্থায়ী ফাইল মুছে জায়গা খালি করা</td><td>ডিস্ক ক্লিনআপ</td></tr>
        <tr><td>ছড়ানো ফাইলের টুকরো এক জায়গায় গুছিয়ে গতি বাড়ানো</td><td>ডিস্ক ডিফ্র্যাগমেন্টার</td></tr>
        <tr><td>ফাইল ছোট করা ও একসঙ্গে বাঁধা</td><td>কম্প্রেশন (WinZip, WinRAR, 7-Zip)</td></tr>
        <tr><td>ফাইলের অনুলিপি রেখে হারানো থেকে রক্ষা</td><td>ব্যাকআপ</td></tr>
        <tr><td>ডিস্ক প্রস্তুত করা ও ত্রুটি খোঁজা</td><td>ফরম্যাটার, ডিস্ক চেকার</td></tr>
      </tbody>
    </table>
  </section>
</div>
<aside class="side">
  <p><b>প্রকার আগে, উদাহরণ পরে</b>অ্যাপ্লিকেশন সফটওয়্যারের প্রতিটি প্রকারের পাশে একটি করে নাম লিখুন; ছক করলে কম সময়ে বেশি নম্বর।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/computer-basics/sw">অধ্যায় ১ · হার্ডওয়্যার ও সফটওয়্যার</a></p>
  <p class="tags"><span class="xt">অধ্যায়: কম্পিউটার বেসিক</span><span class="xt">অপারেটিং সিস্টেম</span></p>
</aside>
`,

4: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. সংখ্যা পদ্ধতি; পজিশনাল পদ্ধতির উদাহরণ</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>কিছু নির্দিষ্ট অঙ্ক বা চিহ্ন এবং নিয়ম ব্যবহার করে সংখ্যা লেখা, পড়া ও গণনা করার পদ্ধতিকে সংখ্যা পদ্ধতি বলে। কোনো পদ্ধতিতে মোট যতগুলো আলাদা অঙ্ক ব্যবহৃত হয়, তা ঐ পদ্ধতির ভিত্তি। সংখ্যা পদ্ধতি দুই প্রকার: পজিশনাল (অঙ্কের মান তার অবস্থানের ওপর নির্ভর করে) ও নন-পজিশনাল (যেমন রোমান)।</p>
    <p class="prose">পজিশনাল পদ্ধতিতে প্রতিটি অবস্থানের স্থানীয় মান ভিত্তির ঘাত: দশমিক বিন্দুর বাঁয়ে ভিত্তি<sup>০</sup>, ভিত্তি<sup>১</sup>, ভিত্তি<sup>২</sup> … আর ডানে ভিত্তি<sup>−১</sup>, ভিত্তি<sup>−২</sup> …। প্রচলিত চারটি পজিশনাল পদ্ধতি:</p>
    <table class="rt cmp">
      <thead><tr><th>পদ্ধতি</th><th>ভিত্তি</th><th>অঙ্ক</th><th>ব্যবহার</th></tr></thead>
      <tbody>
        <tr><td>বাইনারি</td><td>২</td><td>0, 1</td><td>কম্পিউটারের ভেতরের সব কাজ</td></tr>
        <tr><td>অক্টাল</td><td>৮</td><td>0–7</td><td>বাইনারিকে ৩ বিট করে সংক্ষেপে লেখা</td></tr>
        <tr><td>দশমিক</td><td>১০</td><td>0–9</td><td>দৈনন্দিন গণনা</td></tr>
        <tr><td>হেক্সাডেসিমাল</td><td>১৬</td><td>0–9, A–F</td><td>মেমোরি ঠিকানা, রঙের কোড</td></tr>
      </tbody>
    </table>
    <h4 class="sub-h"><span>১</span>বাইনারি</h4>
    <p class="expand"><span>(1011)<sub>2</sub></span> = 1×2<sup>3</sup> + 0×2<sup>2</sup> + 1×2<sup>1</sup> + 1×2<sup>0</sup> = 8 + 0 + 2 + 1 = <b>11</b></p>
    <h4 class="sub-h"><span>২</span>অক্টাল</h4>
    <p class="expand"><span>(157)<sub>8</sub></span> = 1×8<sup>2</sup> + 5×8<sup>1</sup> + 7×8<sup>0</sup> = 64 + 40 + 7 = <b>111</b></p>
    <h4 class="sub-h"><span>৩</span>দশমিক</h4>
    <p class="expand"><span>(583)<sub>10</sub></span> = 5×10<sup>2</sup> + 8×10<sup>1</sup> + 3×10<sup>0</sup> = 500 + 80 + 3 = <b>583</b></p>
    <h4 class="sub-h"><span>৪</span>হেক্সাডেসিমাল</h4>
    <p class="expand"><span>(2AF)<sub>16</sub></span> = 2×16<sup>2</sup> + 10×16<sup>1</sup> + 15×16<sup>0</sup> = 512 + 160 + 15 = <b>687</b></p>
    <p class="prose">হেক্সাডেসিমালে A = ১০, B = ১১, C = ১২, D = ১৩, E = ১৪, F = ১৫। প্রতিটি উদাহরণে একই অঙ্ক অবস্থান বদলালে তার মান বদলায়, এটিই পজিশনাল পদ্ধতির বৈশিষ্ট্য।</p>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. (23.45)<sub>10</sub> থেকে বাইনারি</span><i class="bub mk">৫</i></h3>
    <p class="prose">পূর্ণ অংশ ২ দিয়ে বারবার ভাগ, ভগ্নাংশ ২ দিয়ে বারবার গুণ।</p>
    <div class="work">
      <div class="ladder" role="img" aria-label="২৩-কে ২ দিয়ে বারবার ভাগ। ভাগশেষ ১, ১, ১, ০, ১। নিচ থেকে পড়লে 10111।">
        <span class="dv">2</span><span class="qt">23</span><span class="rm">1</span>
        <span class="dv">2</span><span class="qt">11</span><span class="rm">1</span>
        <span class="dv">2</span><span class="qt">5</span><span class="rm">1</span>
        <span class="dv">2</span><span class="qt">2</span><span class="rm">0</span>
        <span class="dv">2</span><span class="qt">1</span><span class="rm">1</span>
        <span class="dv"></span><span class="qt end">0</span><span class="rm"></span>
      </div>
      <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 146 V8 M5 15 L12 6 L19 15"/></svg><span>নিচ থেকে পড়ুন</span></div>
      <p class="work-res">(23)<sub>10</sub> = (<b>10111</b>)<sub>2</sub></p>
    </div>
    <div class="work">
      <table class="truth trace">
        <thead><tr><th>ভগ্নাংশ × ২</th><th>পূর্ণ অংশ</th></tr></thead>
        <tbody><tr><td>0.45 × 2 = 0.90</td><td>0</td></tr><tr><td>0.90 × 2 = 1.80</td><td>1</td></tr><tr><td>0.80 × 2 = 1.60</td><td>1</td></tr><tr><td>0.60 × 2 = 1.20</td><td>1</td></tr><tr><td>0.20 × 2 = 0.40</td><td>0</td></tr><tr><td>0.40 × 2 = 0.80</td><td>0</td></tr><tr><td>0.80 × 2 = 1.60</td><td>1</td></tr><tr><td>0.60 × 2 = 1.20</td><td>1</td></tr></tbody>
      </table>
      <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 4 V142 M5 135 L12 144 L19 135"/></svg><span>ওপর থেকে পড়ুন</span></div>
      <p class="work-res">(0.45)<sub>10</sub> ≈ (<b>0.01110011</b>)<sub>2</sub></p>
    </div>
    <p class="final"><b>উত্তর</b>(23.45)<sub>10</sub> ≈ (10111.01110011)<sub>2</sub></p>
    <p class="prose">পঞ্চম ধাপে ভগ্নাংশ আবার ০.২০ হয়েছে, তাই এখান থেকে 0011 অংশটি বারবার ফিরে আসবে; ভগ্নাংশটি কখনো শেষ হয় না। আট ঘর পর্যন্ত নেওয়া হলো। যাচাই: (10111.01110011)<sub>2</sub> = 23.44921875 ≈ 23.45।</p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ক. ২-এর পরিপূরক; (25)<sub>10</sub> থেকে (15)<sub>10</sub> বিয়োগ</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>কোনো বাইনারি সংখ্যার প্রতিটি বিট উল্টে (১-এর পরিপূরক) তার সঙ্গে ১ যোগ করলে যে সংখ্যা পাওয়া যায়, তাকে ঐ সংখ্যার ২-এর পরিপূরক বলে। এ পদ্ধতিতে ঋণাত্মক সংখ্যা প্রকাশ করা হয় এবং বিয়োগকে যোগে বদলে একই যোগ-সার্কিটে বিয়োগ করা যায়। সবচেয়ে বাঁয়ের বিট চিহ্ন বিট: ০ ধনাত্মক, ১ ঋণাত্মক।</p>
    <p class="prose">২-এর পরিপূরকের সুবিধা: শূন্যের একটিই রূপ (0000 0000), আলাদা বিয়োগ-সার্কিট লাগে না, আর শেষ ক্যারি শুধু বাদ দিলেই চলে।</p>
    <p class="prose">(25) − (15) = (25) + (−15)। ৮ বিট ধরে −১৫ নির্ণয় করে ২৫-এর সঙ্গে যোগ করব।</p>
    <h4 class="sub-h"><span>ধাপ ১</span>+২৫ ও −১৫ নির্ণয়</h4>
    <div class="bcalc">
      <code>0001 1001</code><span>(+২৫)<sub>১০</sub></span>
      <code>0000 1111</code><span>(+১৫)<sub>১০</sub></span>
      <code>1111 0000</code><span>সব বিট উল্টে</span>
      <code class="add">+         1</code><span>১ যোগ</span>
      <code class="res">1111 0001</code><span><b>−১৫</b></span>
    </div>
    <h4 class="sub-h"><span>ধাপ ২</span>যোগ</h4>
    <div class="bcalc">
      <code>  0001 1001</code><span>+২৫</span>
      <code class="add">+ 1111 0001</code><span>−১৫</span>
      <code class="res"><i class="carry" title="শেষ ক্যারি">1</i> 0000 1010</code><span>শেষ ক্যারি <i class="carry">1</i> বাদ দিলে <b>0000 1010</b></span>
    </div>
    <h4 class="sub-h"><span>ধাপ ৩</span>ফল পড়া</h4>
    <p class="prose">চিহ্ন বিট ০, তাই ফল ধনাত্মক এবং সরাসরি পড়া যায়: (0000 1010)<sub>2</sub> = 8 + 2 = ১০।</p>
    <p class="final"><b>উত্তর</b>(25)<sub>10</sub> − (15)<sub>10</sub> = (0000 1010)<sub>2</sub> = (10)<sub>10</sub></p>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. BCD কোড; (27)<sub>10</sub> থেকে BCD</span><i class="bub mk">৫</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>দশমিক সংখ্যার প্রতিটি অঙ্ককে আলাদাভাবে ৪ বিটের বাইনারিতে প্রকাশ করার কোডকে BCD (Binary Coded Decimal) কোড বলে। এর বিটগুলোর ওজন ৮, ৪, ২, ১, তাই একে ৮৪২১ কোডও বলে। ০ থেকে ৯ পর্যন্ত ১০টি বিন্যাস বৈধ; 1010 থেকে 1111 অবৈধ।</p>
    <table class="truth">
      <thead><tr><th>দশমিক অঙ্ক</th><th>2</th><th>7</th></tr></thead>
      <tbody><tr><td>BCD</td><td>0010</td><td>0111</td></tr></tbody>
    </table>
    <p class="final"><b>উত্তর</b>(27)<sub>10</sub> = (0010 0111)<sub>BCD</sub></p>
    <p class="prose">লক্ষ করুন, BCD আর বাইনারি এক নয়: (27)<sub>10</sub> = (11011)<sub>2</sub>, যেখানে BCD-তে লাগে ৮ বিট।</p>
  </section>
</div>
<aside class="side">
  <p><b>ভগ্নাংশ না ফুরালে</b>কত ঘর পর্যন্ত নিলেন লিখে দিন এবং ≈ চিহ্ন দিন; পুনরাবৃত্তি ধরতে পারলে উল্লেখ করুন।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/number-system/systems">অধ্যায় ২ · সংখ্যা পদ্ধতির প্রকার</a>, <a href="#/note/number-system/convert">দশমিক থেকে রূপান্তর</a>, <a href="#/note/number-system/complement">পরিপূরক</a></p>
  <p class="tags"><span class="xt">অধ্যায়: সংখ্যা পদ্ধতি</span><span class="xt">উপাত্ত উপস্থাপন</span></p>
</aside>
`,

5: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>ক. ডি মরগানের উপপাদ্য ও তিন চলকে প্রমাণ</span><i class="bub mk">১০</i></h3>
    <p class="prose">ফরাসি গণিতবিদ অগাস্টাস ডি মরগান দুটি উপপাদ্য দেন, যা দিয়ে যোগের পূরককে গুণে আর গুণের পূরককে যোগে বদলানো যায়।</p>
    <p class="defn"><b>প্রথম উপপাদ্য</b>কয়েকটি চলকের যোগফলের পূরক তাদের পূরকগুলোর গুণফলের সমান: <span class="m"><span class="ov">A + B</span> = <span class="ov">A</span>·<span class="ov">B</span></span>; তিন চলকে <span class="m"><span class="ov">A + B + C</span> = <span class="ov">A</span>·<span class="ov">B</span>·<span class="ov">C</span></span></p>
    <p class="defn"><b>দ্বিতীয় উপপাদ্য</b>কয়েকটি চলকের গুণফলের পূরক তাদের পূরকগুলোর যোগফলের সমান: <span class="m"><span class="ov">A·B</span> = <span class="ov">A</span> + <span class="ov">B</span></span>; তিন চলকে <span class="m"><span class="ov">A·B·C</span> = <span class="ov">A</span> + <span class="ov">B</span> + <span class="ov">C</span></span></p>

    <h4 class="sub-h"><span>প্রমাণ ১</span><span><span class="ov">A + B + C</span> = <span class="ov">A</span>·<span class="ov">B</span>·<span class="ov">C</span></span></h4>
    <table class="truth">
      <thead><tr><th>A</th><th>B</th><th>C</th><th>A+B+C</th><th><span class="ov">A+B+C</span></th><th><span class="ov">A</span>·<span class="ov">B</span>·<span class="ov">C</span></th></tr></thead>
      <tbody><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr></tbody>
    </table>
    <p class="prose">শেষ দুই কলাম আটটি সারিতেই হুবহু এক, তাই প্রথম উপপাদ্য প্রমাণিত।</p>

    <h4 class="sub-h"><span>প্রমাণ ২</span><span><span class="ov">A·B·C</span> = <span class="ov">A</span> + <span class="ov">B</span> + <span class="ov">C</span></span></h4>
    <table class="truth">
      <thead><tr><th>A</th><th>B</th><th>C</th><th>A·B·C</th><th><span class="ov">A·B·C</span></th><th><span class="ov">A</span>+<span class="ov">B</span>+<span class="ov">C</span></th></tr></thead>
      <tbody><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr></tbody>
    </table>
    <p class="prose">এখানেও শেষ দুই কলাম প্রতিটি সারিতে সমান, তাই দ্বিতীয় উপপাদ্য প্রমাণিত।</p>
    <p class="final"><b>মনে রাখার নিয়ম</b>বার ভাঙুন, চিহ্ন বদলান: যোগ হলে গুণ, গুণ হলে যোগ।</p>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. <span class="ov">A</span>BC + A<span class="ov">B</span>C + ABC সরলীকরণ</span><i class="bub mk">৫</i></h3>
    <p class="prose">ধরি Y = <span class="ov">A</span>BC + A<span class="ov">B</span>C + ABC। ABC পদটি দুবার লিখে নিই (X + X = X):</p>
    <ul class="eqs">
      <li><span>Y = <span class="ov">A</span>BC + ABC + A<span class="ov">B</span>C + ABC</span><small>ABC + ABC = ABC</small></li>
      <li><span>= BC(<span class="ov">A</span> + A) + AC(<span class="ov">B</span> + B)</span><small>সাধারণ উৎপাদক</small></li>
      <li><span>= BC·1 + AC·1</span><small><span class="ov">X</span> + X = 1</small></li>
      <li><span>= BC + AC = C(A + B)</span></li>
    </ul>
    <p class="final"><b>সরলীকৃত মান</b>Y = AC + BC = C(A + B)</p>
    <p class="prose">যাচাই: A = 1, B = 0, C = 1 হলে মূল সমীকরণে শুধু A<span class="ov">B</span>C = 1, তাই Y = 1; সরল রূপেও C(A + B) = 1·(1 + 0) = 1।</p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ক. সার্বজনীন গেইট; NAND-এর সার্বজনীনতা</span><i class="bub mk">১০</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>যে গেইট দিয়ে তিনটি মৌলিক গেইট (AND, OR, NOT) এবং তাই যেকোনো লজিক সার্কিট তৈরি করা যায়, তাকে সার্বজনীন গেইট বলে। NAND ও NOR এই দুটি সার্বজনীন গেইট। এক ধরনের গেইট দিয়ে পুরো সার্কিট বানানো যায় বলে চিপ তৈরি সহজ ও সস্তা হয়।</p>
    <p class="inc-note">NAND-এর অংশটি ১৮তম পরীক্ষার ৪ নম্বর প্রশ্নের উত্তরেও আছে।</p>
    <div data-include="wa-18-school-4" data-part="2" data-inner></div>
    <h4 class="sub-h"><span>যাচাই</span>সত্যক সারণিতে তিনটি বাস্তবায়ন</h4>
    <p class="prose">নিচের প্রতিটি কলাম শুধু NAND দিয়ে তৈরি সার্কিটের আউটপুট: NOT কলামে NAND(A, A), AND কলামে NAND(NAND(A, B)), OR কলামে NAND(<span class="ov">A</span>, <span class="ov">B</span>)। তিনটিই মূল NOT, AND ও OR গেইটের সত্যক সারণির সঙ্গে প্রতিটি সারিতে মেলে।</p>
    <table class="truth">
      <thead><tr><th>A</th><th>B</th><th>NOT: <span class="ov">A</span></th><th>AND: A·B</th><th>OR: A + B</th></tr></thead>
      <tbody><tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td><td>1</td></tr></tbody>
    </table>
    <p class="final"><b>সিদ্ধান্ত</b>NAND দিয়ে NOT, AND ও OR, তিনটি মৌলিক গেইটই তৈরি হয়; তাই NAND সার্বজনীন গেইট।</p>
  </section>

  <section class="part">
    <h3 class="part-h"><span>খ. মৌলিক গেইট দিয়ে X-OR</span><i class="bub mk">৫</i></h3>
    <p class="prose">X-OR গেইটের দুই ইনপুট ভিন্ন হলে আউটপুট ১, একই হলে ০। এর সমীকরণ <span class="m">Y = A ⊕ B = <span class="ov">A</span>B + A<span class="ov">B</span></span>। তাই দুটি NOT, দুটি AND ও একটি OR গেইট লাগে।</p>
    <figure class="fig wide mid">
      <svg viewBox="0 0 540 214" role="img" aria-label="X-OR বাস্তবায়ন: A একটি NOT গেইটে A-বার হয়ে B-এর সঙ্গে প্রথম AND গেইটে যায়; B একটি NOT গেইটে B-বার হয়ে A-এর সঙ্গে দ্বিতীয় AND গেইটে যায়; দুই AND-এর আউটপুট একটি OR গেইটে গিয়ে Y দেয়।">
        <text x="6" y="56" text-anchor="start">A</text><path class="w" d="M20 52H90"/><circle class="j" cx="50" cy="52" r="2.6"/><path class="w" d="M50 52V142H250"/>
        <path class="w" d="M126 52H250"/><text x="150" y="44" text-anchor="start"><tspan text-decoration="overline">A</tspan></text>
        <text x="6" y="172" text-anchor="start">B</text><path class="w" d="M20 168H90"/><circle class="j" cx="70" cy="168" r="2.6"/><path class="w" d="M70 168V78H250"/>
        <path class="w" d="M126 168H250"/><text x="150" y="160" text-anchor="start"><tspan text-decoration="overline">B</tspan></text>
        <path class="w" d="M295 65H330V97H380"/><text x="300" y="56" text-anchor="start"><tspan text-decoration="overline">A</tspan>B</text>
        <path class="w" d="M295 155H330V123H380"/><text x="300" y="146" text-anchor="start">A<tspan text-decoration="overline">B</tspan></text>
        <path class="w" d="M415 110H470"/><text x="476" y="114" text-anchor="start">Y</text>
        <path class="gb" d="M90 40L118 52L90 64Z"/><circle class="gb" cx="122" cy="52" r="4"/>
        <path class="gb" d="M90 156L118 168L90 180Z"/><circle class="gb" cx="122" cy="168" r="4"/>
        <path class="gb" d="M250 40H270A25 25 0 0 1 270 90H250Z"/>
        <path class="gb" d="M250 130H270A25 25 0 0 1 270 180H250Z"/>
        <path class="gb" d="M370 85Q385 110 370 135Q400 135 415 110Q400 85 370 85Z"/>
        <text class="cap" x="104" y="204" text-anchor="middle">NOT</text><text class="cap" x="272" y="204" text-anchor="middle">AND</text><text class="cap" x="392" y="204" text-anchor="middle">OR</text>
      </svg>
      <figcaption>চিত্র: মৌলিক গেইট দিয়ে X-OR, Y = <span class="ov">A</span>B + A<span class="ov">B</span></figcaption>
    </figure>
    <table class="truth">
      <thead><tr><th>A</th><th>B</th><th><span class="ov">A</span>B</th><th>A<span class="ov">B</span></th><th>Y</th></tr></thead>
      <tbody><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td></tr></tbody>
    </table>
  </section>
</div>
<aside class="side">
  <p><b>প্রমাণে দুটি সারণি</b>তিন চলকে ২<sup>৩</sup> = ৮টি সারি; দুই পাশের কলাম পাশাপাশি রাখুন যেন মিল এক নজরে দেখা যায়।</p>
  <p><b>ছাপার কথা</b>অথবা অংশে নম্বর ছাপা নেই; মূল প্রশ্নের মতো ক-তে ১০ আর খ-তে ৫ ধরা হয়েছে।</p>
  <p class="tags"><span class="xt">অধ্যায়: লজিক সার্কিট ও লজিক গেট</span></p>
</aside>
`,

6: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>উপাত্ত ও তথ্যের পার্থক্য</span><i class="bub mk">৫</i></h3>
    <p class="prose">প্রক্রিয়াকরণের আগের কাঁচামাল উপাত্ত, আর প্রক্রিয়াকরণের পরের অর্থবহ ফল তথ্য। যেমন তিন শিক্ষার্থীর নম্বর থেকে গড় বের করা:</p>
    <ol class="chain">
      <li><b>উপাত্ত</b><small>৭৫, ৬২, ৮৮</small></li>
      <li><b>প্রক্রিয়াকরণ</b><small>যোগ ÷ ৩</small></li>
      <li><b>তথ্য</b><small>গড় নম্বর ৭৫</small></li>
    </ol>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>উপাত্ত (Data)</th><th>তথ্য (Information)</th></tr></thead>
      <tbody>
        <tr><td>সংজ্ঞা</td><td>প্রক্রিয়াকরণের আগের সংখ্যা, অক্ষর, চিহ্ন, ছবি</td><td>উপাত্ত প্রক্রিয়াকরণের পর পাওয়া অর্থবহ ফল</td></tr>
        <tr><td>অর্থ</td><td>এককভাবে সাধারণত অর্থহীন</td><td>অর্থবহ ও ব্যবহারযোগ্য</td></tr>
        <tr><td>ভূমিকা</td><td>প্রক্রিয়াকরণের ইনপুট</td><td>প্রক্রিয়াকরণের আউটপুট</td></tr>
        <tr><td>নির্ভরতা</td><td>তথ্যের ওপর নির্ভর করে না</td><td>উপাত্তের ওপর নির্ভরশীল</td></tr>
        <tr><td>সিদ্ধান্ত</td><td>সরাসরি সিদ্ধান্তে কাজে আসে না</td><td>সিদ্ধান্ত নিতে সাহায্য করে</td></tr>
        <tr><td>উদাহরণ</td><td>৭৫, ৬২, ৮৮</td><td>গড় নম্বর ৭৫, সর্বোচ্চ ৮৮</td></tr>
      </tbody>
    </table>
    <p class="prose">একটি প্রক্রিয়ার তথ্য আরেকটি প্রক্রিয়ার উপাত্ত হতে পারে; যেমন প্রতিটি শ্রেণির গড় নম্বর মিলিয়ে পুরো বিদ্যালয়ের গড় বের করা যায়।</p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>বর্ণভিত্তিক ও চিত্রভিত্তিক অপারেটিং সিস্টেমের পার্থক্য</span><i class="bub mk">৫</i></h3>
    <table class="rt cmp">
      <thead><tr><th>বিষয়</th><th>বর্ণভিত্তিক (CUI)</th><th>চিত্রভিত্তিক (GUI)</th></tr></thead>
      <tbody>
        <tr><td>কাজের ধরন</td><td>কমান্ড টাইপ করে</td><td>আইকন, মেনু ও উইন্ডোতে ক্লিক করে</td></tr>
        <tr><td>ইনপুট যন্ত্র</td><td>প্রধানত কিবোর্ড</td><td>মাউস, কিবোর্ড, টাচস্ক্রিন</td></tr>
        <tr><td>শেখা</td><td>কঠিন; কমান্ড মনে রাখতে হয়</td><td>সহজ; দেখে দেখে কাজ করা যায়</td></tr>
        <tr><td>মাল্টিটাস্কিং</td><td>সাধারণত একসঙ্গে একটি কাজ</td><td>একসঙ্গে অনেক উইন্ডো</td></tr>
        <tr><td>হার্ডওয়্যার</td><td>কম মেমোরি ও সাধারণ হার্ডওয়্যারে চলে</td><td>বেশি মেমোরি ও শক্তিশালী হার্ডওয়্যার লাগে</td></tr>
        <tr><td>ছবি ও মাল্টিমিডিয়া</td><td>নেই বললেই চলে</td><td>পূর্ণ সমর্থন</td></tr>
        <tr><td>উদাহরণ</td><td>MS-DOS, UNIX-এর কমান্ড লাইন</td><td>Windows, macOS, Ubuntu</td></tr>
      </tbody>
    </table>
  </section>
</div>
<aside class="side">
  <p><b>উদাহরণ দিন</b>পার্থক্যের ছকের নিচে উপাত্ত থেকে তথ্য হওয়ার একটি ছোট উদাহরণ দিলে পূর্ণ নম্বর নিশ্চিত।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/data-representation/data">অধ্যায় ৩ · উপাত্ত ও তথ্য</a></p>
  <p class="tags"><span class="xt">অধ্যায়: উপাত্ত উপস্থাপন</span><span class="xt">অপারেটিং সিস্টেম</span></p>
</aside>
`,

7: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>তিনটি সংখ্যার মধ্যে বৃহত্তম নির্ণয়ের অ্যালগরিদম</span><i class="bub mk">৫</i></h3>
    <ol class="algo">
      <li>শুরু।</li>
      <li>তিনটি সংখ্যা A, B ও C ইনপুট নিই।</li>
      <li>যদি A &gt; B এবং A &gt; C হয়, তবে বৃহত্তম = A ধরে ধাপ ৬-এ যাই।</li>
      <li>যদি B &gt; C হয়, তবে বৃহত্তম = B ধরে ধাপ ৬-এ যাই।</li>
      <li>অন্যথায় বৃহত্তম = C ধরি।</li>
      <li>বৃহত্তম সংখ্যাটি প্রিন্ট করি।</li>
      <li>শেষ।</li>
    </ol>
    <h4 class="sub-h"><span>উদাহরণ</span>A = 12, B = 25, C = 9</h4>
    <table class="truth trace">
      <thead><tr><th>ধাপ</th><th>শর্ত</th><th>ফল</th></tr></thead>
      <tbody><tr><td>৩</td><td>12 &gt; 25 এবং 12 &gt; 9</td><td>মিথ্যা</td></tr><tr><td>৪</td><td>25 &gt; 9</td><td>সত্য, বৃহত্তম = 25</td></tr><tr><td>৬</td><td>প্রিন্ট</td><td>25</td></tr></tbody>
    </table>
    <p class="final"><b>ফল</b>বৃহত্তম সংখ্যা ২৫</p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>বৃত্তের ক্ষেত্রফল নির্ণয়ের ফ্লোচার্ট</span><i class="bub mk">৫</i></h3>
    <p class="prose">বৃত্তের ক্ষেত্রফল = πr², যেখানে π ≈ ৩.১৪১৬। ব্যাসার্ধ R ইনপুট নিয়ে A = 3.1416 × R × R হিসাব করে A দেখাতে হবে।</p>
    <figure class="fig flow slim">
      <svg viewBox="0 0 320 352" role="img" aria-label="ফ্লোচার্ট: শুরু; R ইনপুট; A = 3.1416 × R × R; A প্রিন্ট; শেষ।">
        <defs><marker id="circ16-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
        <rect class="fs" x="100" y="10" width="120" height="40" rx="20"/><text x="160" y="31">শুরু</text>
        <path class="fa" d="M160 50V78" marker-end="url(#circ16-ah)"/>
        <path class="fs" d="M100 80H244L220 124H76Z"/><text x="160" y="103">R ইনপুট</text>
        <path class="fa" d="M160 124V152" marker-end="url(#circ16-ah)"/>
        <rect class="fs" x="60" y="154" width="200" height="44"/><text x="160" y="177">A = 3.1416 × R × R</text>
        <path class="fa" d="M160 198V226" marker-end="url(#circ16-ah)"/>
        <path class="fs" d="M100 228H244L220 272H76Z"/><text x="160" y="251">A প্রিন্ট</text>
        <path class="fa" d="M160 272V300" marker-end="url(#circ16-ah)"/>
        <rect class="fs" x="100" y="302" width="120" height="40" rx="20"/><text x="160" y="323">শেষ</text>
      </svg>
      <figcaption>চিত্র: বৃত্তের ক্ষেত্রফল নির্ণয়ের ফ্লোচার্ট</figcaption>
    </figure>
  </section>
</div>
<aside class="side">
  <p><b>সমান হলে?</b>A = B = C হলেও অ্যালগরিদম কাজ করে: ধাপ ৫-এ C-কে বৃহত্তম ধরে, যার মান অন্য দুটির সমান।</p>
  <p class="tags"><span class="xt">অধ্যায়: অ্যালগরিদম ও ফ্লোচার্ট</span></p>
</aside>
`,

8: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>উপাত্ত ও তথ্যের পার্থক্য</span><i class="bub mk">৫</i></h3>
    <p class="inc-note">প্রশ্নপত্রে ৬ ও ৮ নম্বরে একই প্রশ্ন ছাপা হয়েছে; উত্তরও এক।</p>
    <div data-include="wa-16-school-6" data-part="1" data-inner></div>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ওয়েব ব্রাউজার ও কয়েকটির নাম</span><i class="bub mk">৫</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>যে অ্যাপ্লিকেশন সফটওয়্যার দিয়ে ইন্টারনেটের ওয়ার্ল্ড ওয়াইড ওয়েবে থাকা ওয়েবপেজ খুঁজে, এনে পর্দায় দেখা যায়, তাকে ওয়েব ব্রাউজার বলে। এটি HTTP বা HTTPS প্রোটোকলে ওয়েব সার্ভার থেকে HTML পেজ এনে লেখা, ছবি ও ভিডিওসহ সাজিয়ে দেখায়।</p>
    <ul class="pts">
      <li>ঠিকানা বারে URL লিখে বা লিংকে ক্লিক করে ওয়েবপেজ খোলা।</li>
      <li>একসঙ্গে অনেক ট্যাবে পেজ খোলা; পছন্দের পেজ বুকমার্ক করে রাখা।</li>
      <li>আগে দেখা পেজের তালিকা (হিস্টোরি) রাখা; ফাইল ডাউনলোড করা।</li>
    </ul>
    <table class="rt cmp">
      <thead><tr><th>ব্রাউজার</th><th>প্রতিষ্ঠান</th></tr></thead>
      <tbody>
        <tr><td>Google Chrome</td><td>Google</td></tr>
        <tr><td>Mozilla Firefox</td><td>Mozilla Foundation</td></tr>
        <tr><td>Microsoft Edge</td><td>Microsoft</td></tr>
        <tr><td>Safari</td><td>Apple</td></tr>
        <tr><td>Opera</td><td>Opera</td></tr>
      </tbody>
    </table>
    <p class="prose">পুরোনো ব্রাউজারের মধ্যে Mosaic (প্রথম জনপ্রিয় চিত্রভিত্তিক ব্রাউজার), Netscape Navigator ও Internet Explorer উল্লেখযোগ্য।</p>
  </section>
</div>
<aside class="side">
  <p><b>বিস্তারিত নোট</b><a href="#/note/data-representation/data">অধ্যায় ৩ · উপাত্ত ও তথ্য</a></p>
  <p class="tags"><span class="xt">অধ্যায়: উপাত্ত উপস্থাপন</span><span class="xt">ইন্টারনেট</span></p>
</aside>
`,

9: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>(AB)<sub>16</sub> ও (75)<sub>8</sub> যোগ, ফল অক্টালে</span><i class="bub mk">৫</i></h3>
    <p class="prose">ফল অক্টালে চাই, তাই আগে (AB)<sub>16</sub>-কে বাইনারির মাধ্যমে অক্টালে আনি:</p>
    <p class="expand"><span>(AB)<sub>16</sub></span> = 1010 1011 = 010 101 011 = (<b>253</b>)<sub>8</sub></p>
    <p class="prose">এবার অক্টালে যোগ করি; কোনো ঘরে যোগফল ৮ বা তার বেশি হলে ৮ বাদ দিয়ে বসাই, হাতে ১:</p>
    <div class="bcalc">
      <code>  253</code><span>(AB)<sub>16</sub></span>
      <code class="add">+  75</code><span>(75)<sub>8</sub></span>
      <code class="res">  350</code><span>3 + 5 = ৮, বসে 0, হাতে ১; 5 + 7 + ১ = ১৩ = ৮ + ৫, বসে 5, হাতে ১; 2 + ১ = 3</span>
    </div>
    <p class="final"><b>উত্তর</b>(AB)<sub>16</sub> + (75)<sub>8</sub> = (350)<sub>8</sub></p>
    <p class="prose">যাচাই: (AB)<sub>16</sub> = ১৭১, (75)<sub>8</sub> = ৬১, যোগফল ২৩২; আর (350)<sub>8</sub> = ৩ × ৬৪ + ৫ × ৮ + ০ = ২৩২।</p>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>(CD)<sub>16</sub> থেকে (77)<sub>8</sub> বিয়োগ, ফল হেক্সাডেসিমালে</span><i class="bub mk">৫</i></h3>
    <p class="prose">ফল হেক্সাডেসিমালে চাই, তাই (77)<sub>8</sub>-কে বাইনারির মাধ্যমে হেক্সাডেসিমালে আনি:</p>
    <p class="expand"><span>(77)<sub>8</sub></span> = 111 111 = 0011 1111 = (<b>3F</b>)<sub>16</sub></p>
    <div class="bcalc">
      <code>  CD</code><span>(CD)<sub>16</sub></span>
      <code class="add">− 3F</code><span>(77)<sub>8</sub></span>
      <code class="res">  8E</code><span>D থেকে F হয় না, ধার ১৬: ১৩ + ১৬ − ১৫ = ১৪ = E; C থেকে ধার ১ বাদ: ১২ − ১ − ৩ = ৮</span>
    </div>
    <p class="final"><b>উত্তর</b>(CD)<sub>16</sub> − (77)<sub>8</sub> = (8E)<sub>16</sub></p>
    <p class="prose">যাচাই: (CD)<sub>16</sub> = ২০৫, (77)<sub>8</sub> = ৬৩, বিয়োগফল ১৪২; আর (8E)<sub>16</sub> = ৮ × ১৬ + ১৪ = ১৪২।</p>
  </section>
</div>
<aside class="side">
  <p><b>যেটিতে উত্তর চাই, সেটিতে আনুন</b>ফল অক্টালে চাইলে দুটি সংখ্যাই অক্টালে এনে হিসাব করুন; শেষে দশমিকে যাচাই এক লাইনে লিখে দিন।</p>
  <p><b>বিস্তারিত নোট</b><a href="#/note/number-system/between">অধ্যায় ২ · পদ্ধতির মধ্যে রূপান্তর</a>, <a href="#/note/number-system/arith">যোগ-বিয়োগ</a></p>
  <p class="tags"><span class="xt">অধ্যায়: সংখ্যা পদ্ধতি</span></p>
</aside>
`,

10: `
<div class="ans-body">
  <section class="part">
    <h3 class="part-h"><span>সমীকরণ সরলীকরণ ও যুক্তি বর্তনী</span><i class="bub mk">৫</i></h3>
    <p class="prose">ধরি F = <span class="m"><span class="ov">c + b</span>(a + bc)</span>।</p>
    <ul class="eqs">
      <li><span>F = <span class="ov">c + b</span>·(a + bc)</span></li>
      <li><span>= <span class="ov">c</span>·<span class="ov">b</span>·(a + bc)</span><small>ডি মরগান: <span class="ov">X + Y</span> = <span class="ov">X</span>·<span class="ov">Y</span></small></li>
      <li><span>= a·<span class="ov">b</span>·<span class="ov">c</span> + <span class="ov">b</span>b·<span class="ov">c</span>c</span><small>বণ্টন সূত্র</small></li>
      <li><span>= a·<span class="ov">b</span>·<span class="ov">c</span> + 0</span><small><span class="ov">b</span>b = 0</small></li>
      <li><span>= a·<span class="ov">b</span>·<span class="ov">c</span></span></li>
    </ul>
    <p class="final"><b>সরলীকৃত মান</b>F = a·<span class="ov">b</span>·<span class="ov">c</span></p>
    <figure class="fig wide mid">
      <svg viewBox="0 0 540 170" role="img" aria-label="যুক্তি বর্তনী: b ও c প্রতিটি একটি NOT গেইট দিয়ে b-বার ও c-বার হয়; a, b-বার ও c-বার তিন ইনপুটের একটি AND গেইটে গিয়ে F দেয়।">
        <text x="6" y="34" text-anchor="start">a</text><path class="w" d="M20 30H230V60H262"/>
        <text x="6" y="84" text-anchor="start">b</text><path class="w" d="M20 80H90"/><path class="w" d="M126 80H262"/><text x="150" y="72" text-anchor="start"><tspan text-decoration="overline">b</tspan></text>
        <text x="6" y="134" text-anchor="start">c</text><path class="w" d="M20 130H90"/><path class="w" d="M126 130H230V100H262"/><text x="150" y="122" text-anchor="start"><tspan text-decoration="overline">c</tspan></text>
        <path class="gb" d="M90 68L118 80L90 92Z"/><circle class="gb" cx="122" cy="80" r="4"/>
        <path class="gb" d="M90 118L118 130L90 142Z"/><circle class="gb" cx="122" cy="130" r="4"/>
        <path class="gb" d="M260 45H280A35 35 0 0 1 280 115H260Z"/>
        <path class="w" d="M315 80H380"/><text x="386" y="84" text-anchor="start">F</text>
        <text class="cap" x="104" y="162" text-anchor="middle">NOT</text><text class="cap" x="287" y="162" text-anchor="middle">AND</text>
      </svg>
      <figcaption>চিত্র: F = a·<span class="ov">b</span>·<span class="ov">c</span>-এর যুক্তি বর্তনী</figcaption>
    </figure>
  </section>

  <p class="ans-or">অথবা</p>

  <section class="part">
    <h3 class="part-h"><span>ফ্লোচার্ট ও এর সুবিধা</span><i class="bub mk">৫</i></h3>
    <p class="defn"><b>সংজ্ঞা</b>কোনো সমস্যা সমাধানের ধাপগুলো নির্দিষ্ট প্রতীক ও তীরচিহ্ন দিয়ে চিত্রের মাধ্যমে প্রকাশ করাকে ফ্লোচার্ট বলে। এটি অ্যালগরিদমের চিত্ররূপ। ফ্লোচার্ট দুই প্রকার: সিস্টেম ফ্লোচার্ট ও প্রোগ্রাম ফ্লোচার্ট।</p>
    <ul class="pts">
      <li><b>সহজে বোঝা যায়:</b> ছবি দেখে প্রোগ্রামের যুক্তি ও কাজের ধারা এক নজরে বোঝা যায়।</li>
      <li><b>যোগাযোগ:</b> প্রোগ্রামার, বিশ্লেষক ও ব্যবহারকারীর মধ্যে ভাব বিনিময় সহজ হয়।</li>
      <li><b>বিশ্লেষণ:</b> সমস্যাকে ছোট ছোট ধাপে ভেঙে ভালোভাবে বিশ্লেষণ করা যায়।</li>
      <li><b>সহজ কোডিং:</b> ফ্লোচার্ট দেখে যেকোনো ভাষায় সহজে প্রোগ্রাম লেখা যায়।</li>
      <li><b>ভুল খোঁজা:</b> যুক্তির ভুল (ডিবাগিং) সহজে ধরা পড়ে।</li>
      <li><b>ডকুমেন্টেশন ও রক্ষণাবেক্ষণ:</b> প্রোগ্রামের স্থায়ী দলিল হিসেবে থাকে; পরে পরিবর্তন করা সহজ হয়।</li>
    </ul>
  </section>
</div>
<aside class="side">
  <p><b>ধাপের পাশে সূত্র</b>সরলীকরণের প্রতিটি লাইনে কোন সূত্র লাগালেন লিখুন; বর্তনীতে NOT গেইটের আউটপুটের নাম দিন।</p>
  <p class="tags"><span class="xt">অধ্যায়: লজিক সার্কিট ও লজিক গেট</span><span class="xt">অ্যালগরিদম ও ফ্লোচার্ট</span></p>
</aside>
`
};
