/* অধ্যায় ৬ · অ্যালগরিদম ও ফ্লোচার্ট — the chapter note (#/note/algorithm-flowchart), loaded only when the note is opened.
   The text between the backticks is plain HTML: edit it as HTML. Never type a backtick or a dollar sign followed by {
   inside it; String.raw keeps every backslash (the DOS paths) as written.
   First built by a generator (since lost; edit this file directly) that also ran every worked example; the flowcharts reuse the answers' drawing classes. */
(window.ICT_NOTES = window.ICT_NOTES || {}).ch06 = String.raw`
<article class="note">
  <header class="doc-head wrap">
    <p class="crumb"><a href="#/">সূচিপত্র</a><i aria-hidden="true">/</i>অধ্যায় ৬</p>
    <h1>অ্যালগরিদম ও ফ্লোচার্ট</h1>
    <p class="doc-lede">অ্যালগরিদম, চলক ও অপারেশন, আর ফ্লোচার্টের প্রতীক ও নিয়ম; তারপর পরীক্ষায় বারবার আসা প্রতিটি সমস্যার অ্যালগরিদম, ফ্লোচার্ট আর একটি উদাহরণে ধাপে ধাপে চালিয়ে দেখা। প্রতিটি অংশের সঙ্গে ২০০৬ থেকে ২০২৪ পর্যন্ত লিখিত পরীক্ষায় সেই অংশ থেকে আসা সব প্রশ্ন।</p>
    <p class="doc-meta"><span>অংশ <b>৭</b></span><span>বিগত লিখিত প্রশ্ন <b id="prevCount"></b></span><span>MCQ <b id="noteMcq"></b></span><span>পড়তে <b>৩৫ মিনিট</b></span></p>
  </header>

  <div class="secbar"><div class="wrap">
    <nav aria-label="এই নোটের অংশ" id="secnav">
      <a href="#/note/algorithm-flowchart/map">মানচিত্র</a>
      <a href="#/note/algorithm-flowchart/algo">অ্যালগরিদম</a>
      <a href="#/note/algorithm-flowchart/var">চলক ও অপারেশন</a>
      <a href="#/note/algorithm-flowchart/flow">ফ্লোচার্ট</a>
      <a href="#/note/algorithm-flowchart/diff">পার্থক্য</a>
      <a href="#/note/algorithm-flowchart/seq">ক্রমের সমস্যা</a>
      <a href="#/note/algorithm-flowchart/dec">সিদ্ধান্তের সমস্যা</a>
      <a href="#/note/algorithm-flowchart/loop">লুপের সমস্যা</a>
      <a href="#/note/algorithm-flowchart/mistakes">ভুল এড়ান</a>
    </nav>
  </div></div>

  <div class="wrap doc">

    <section class="blk" id="map">
      <p class="blk-no">শুরুতে</p>
      <div class="body">
        <h2>কোন অংশ থেকে কতবার এসেছে</h2>
        <p class="prose">প্রতিটি কলাম একটি নিবন্ধন পরীক্ষা (বাঁয়ে সর্বশেষ, নম্বরের নিচে সাল), প্রতিটি সারি এই অধ্যায়ের একটি অংশ। ভরাট বৃত্ত মানে সেই বছরের লিখিত প্রশ্নপত্রে ঐ অংশ থেকে প্রশ্ন ছিল, মূল প্রশ্নে বা “অথবা”-তে।</p>
        <figure class="fig"><div class="scroll" id="prevGrid"></div>
          <figcaption>৩য় (২০০৬) থেকে ১৮তম (২০২৪) পরীক্ষা, সহকারী শিক্ষক (কম্পিউটার / আইসিটি)। অংশের নামে চাপলে সেই অংশে যাবে; ভরাট বৃত্তে চাপলে সেই পরীক্ষার প্রশ্ন ছকের নিচে দেখাবে।<span class="grid-hint"> বাকি পরীক্ষাগুলো দেখতে ছকটি বাঁয়ে সরান।</span></figcaption></figure>
        <p class="tip"><b>সবচেয়ে বেশি এসেছে:</b> <span id="prevTop"></span>। ১৬টি প্রশ্নপত্রের প্রতিটিতেই এই অধ্যায় থেকে প্রশ্ন ছিল, আর প্রায় প্রতিবার অন্তত একটি অ্যালগরিদম লিখতে বা ফ্লোচার্ট আঁকতে বলা হয়েছে। অংশ ৫ থেকে ৭-এর সমস্যাগুলো হাতে এঁকে অভ্যাস করুন।</p>
      </div>
      <aside class="side">
        <p><b>এই অধ্যায়ের MCQ</b>প্রথম তিন অংশের শেষে সেই অংশের MCQ অনুশীলন; সব প্রশ্ন উত্তর ও ব্যাখ্যাসহ <a href="#/mcq/ch06">তালিকায়</a>।</p>
        <p><b>সিলেবাস চ</b>“এলগরিদম এবং ফ্লো চার্ট: ১. অ্যালগরিদম ২. চলক এবং অপারেশনস ৩. ফ্লোচার্ট।” সমস্যার অংশগুলো এই তিনটিরই প্রয়োগ।</p>
      </aside>
    </section>

    <section class="blk" id="algo" data-topic="algo" data-short="অ্যালগরিদম">
      <p class="blk-no">অংশ ১<small>সিলেবাস চ.১</small></p>
      <div class="body">
        <h2>অ্যালগরিদম</h2>
        <p class="defn"><b>সংজ্ঞা</b>কোনো সমস্যা সমাধানের জন্য ধাপে ধাপে সাজানো, সসীম সংখ্যক সুনির্দিষ্ট নির্দেশের ক্রমকে অ্যালগরিদম বলে। নামটি এসেছে নবম শতাব্দীর পারস্যের গণিতবিদ মুহাম্মদ ইবনে মুসা আল-খাওয়ারিজমির নাম থেকে।</p>
        <p class="prose">যেমন দুটি সংখ্যার যোগফল: ১. শুরু। ২. A ও B ইনপুট নিই। ৩. Sum = A + B। ৪. Sum প্রিন্ট করি। ৫. শেষ। প্রোগ্রাম লেখার আগে অ্যালগরিদম ঠিক করা হয়; একই অ্যালগরিদম যেকোনো প্রোগ্রামিং ভাষায় লেখা যায়।</p>
        <h3 class="sub" id="algo-props"><span>১.১</span>অ্যালগরিদমের বৈশিষ্ট্য বা শর্ত</h3>
        <ul class="pts">
          <li><b>সসীমতা (Finiteness):</b> নির্দিষ্ট সংখ্যক ধাপের পরে অবশ্যই শেষ হবে; অসীম লুপ চলবে না।</li>
          <li><b>সুনির্দিষ্টতা (Definiteness):</b> প্রতিটি ধাপ স্পষ্ট, একটির বেশি অর্থ হবে না।</li>
          <li><b>ইনপুট (Input):</b> শূন্য বা তার বেশি ইনপুট থাকে; কিছু অ্যালগরিদম ইনপুট ছাড়াও চলে।</li>
          <li><b>আউটপুট (Output):</b> অন্তত একটি আউটপুট বা ফল থাকবে।</li>
          <li><b>কার্যকারিতা (Effectiveness):</b> প্রতিটি ধাপ এত সহজ হবে যে কাগজ-কলমে সীমিত সময়ে করা যায়।</li>
        </ul>
        <p class="prose">এর সঙ্গে একটি <b>উত্তম</b> অ্যালগরিদমের আরও গুণ: সহজবোধ্য ও সংক্ষিপ্ত ধাপ, সব ধরনের ইনপুটে কাজ করে (সাধারণতা), আর কম সময় ও কম স্মৃতিতে কাজ সারে (দক্ষতা)। অ্যালগরিদম ডিজাইনের সময় তাই সময় ও স্থান জটিলতা বিশ্লেষণ করা হয়; সবচেয়ে খারাপ ক্ষেত্রের সময় প্রকাশ করা হয় O নোটেশনে।</p>
        <h3 class="sub"><span>১.২</span>সুবিধা ও অসুবিধা</h3>
        <table class="rt cmp"><thead><tr><th>সুবিধা</th><th>অসুবিধা</th></tr></thead><tbody><tr><td>বড় সমস্যা ছোট ধাপে ভেঙে বোঝা সহজ</td><td>বড় সমস্যায় অ্যালগরিদম লম্বা ও সময়সাপেক্ষ</td></tr><tr><td>প্রোগ্রাম লেখা দ্রুত ও সহজ হয়</td><td>শাখা আর লুপ বেশি হলে লেখায় যুক্তি বোঝা কঠিন</td></tr><tr><td>ভুল খোঁজা ও সংশোধন (ডিবাগিং) সহজ</td><td>চিত্রের মতো এক নজরে প্রবাহ দেখা যায় না</td></tr><tr><td>যেকোনো প্রোগ্রামিং ভাষায় রূপান্তর করা যায়</td><td></td></tr><tr><td>অন্যকে বোঝানো ও পরে পরিবর্তন করা সহজ</td><td></td></tr></tbody></table>
        <h3 class="sub"><span>১.৩</span>অ্যালগরিদম লেখার নিয়ম</h3>
        <ul class="pts">
          <li>প্রথম ধাপ “শুরু”, শেষ ধাপ “শেষ”।</li>
          <li>প্রতিটি ধাপে নম্বর দিন; এক ধাপে একটি কাজ।</li>
          <li>ইনপুট, হিসাব, সিদ্ধান্ত আর আউটপুট আলাদা ধাপে লিখুন।</li>
          <li>ফিরে যেতে হলে ধাপের নম্বর উল্লেখ করুন, যেমন “ধাপ ৪-এ ফিরে যাই”।</li>
          <li>যোগফলের চলক শুরুতে ০, গুণফলের চলক শুরুতে ১ ধরুন।</li>
        </ul>
        <h3 class="sub"><span>১.৪</span>প্রোগ্রামের তিন গঠন</h3>
        <p class="prose">যেকোনো অ্যালগরিদম তিন রকম গঠনে তৈরি: <b>ক্রম</b> (Sequence: ধাপগুলো একটির পর একটি, অংশ ৫), <b>সিদ্ধান্ত</b> (Selection: শর্তের হ্যাঁ বা না অনুযায়ী আলাদা পথ, অংশ ৬) আর <b>লুপ</b> (Repetition: শর্ত সত্য থাকা পর্যন্ত একই কাজ বারবার, অংশ ৭)। বড় অ্যালগরিদমকে ছোট ছোট অংশে ভাগ করাকে বলে মডুলার ডিজাইন; আর প্রোগ্রামের ভুল খুঁজে সংশোধন করাকে বলে ডিবাগিং।</p>
        <h3 class="sub"><span>১.৫</span>সুডো কোড</h3>
        <p class="defn"><b>সংজ্ঞা</b>প্রোগ্রামিং ভাষার মতো কাঠামোয় কিন্তু সাধারণ ভাষায় লেখা অ্যালগরিদমকে সুডো কোড (Pseudocode, ছদ্ম কোড) বলে। কম্পিউটার এটি চালাতে পারে না, কিন্তু প্রোগ্রামে রূপান্তর খুব সহজ।</p>
        <pre class="code">BEGIN
    READ N
    SUM ← 0
    FOR i ← 1 TO N
        SUM ← SUM + i
    END FOR
    PRINT SUM
END</pre>
        <p class="prose">ওপরেরটি ১ থেকে N পর্যন্ত সংখ্যার যোগফলের সুডো কোড; একই সমস্যার অ্যালগরিদম ও ফ্লোচার্ট আছে অংশ ৭-এ।</p>
        <div data-prev="algo"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="1-7,37,39,42,43,45,49,50,52,81" data-name="অ্যালগরিদম">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch06/q1">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>নম্বর পেতে</b>সংজ্ঞার পরে পাঁচটি বৈশিষ্ট্য নাম ও এক লাইনের ব্যাখ্যাসহ লিখুন; শেষে ছোট একটি উদাহরণ (দুটি সংখ্যার যোগফল) দিন।</p>
        <p><b>বারবার এসেছে</b>৭টি পরীক্ষায় অ্যালগরিদমের সংজ্ঞা, শর্ত, সুবিধা বা সুডো কোড চাওয়া হয়েছে।</p>
      </aside>
    </section>

    <section class="blk" id="var" data-topic="var" data-short="চলক ও অপারেশন">
      <p class="blk-no">অংশ ২<small>সিলেবাস চ.২</small></p>
      <div class="body">
        <h2>চলক ও অপারেশন</h2>
        <p class="defn"><b>চলক (Variable)</b>প্রোগ্রাম চলার সময় উপাত্ত রাখার জন্য স্মৃতির যে নামযুক্ত স্থান ব্যবহার করা হয়, এবং যার মান বদলানো যায়, তাকে চলক বলে। যেমন sum = 0, পরে sum = sum + 5 করলে sum-এর মান হয় ৫।</p>
        <p class="defn"><b>ধ্রুবক (Constant)</b>যার মান প্রোগ্রাম চলার সময় বদলায় না: যেমন 3.1416, 100, "Dhaka"।</p>
        <h3 class="sub" id="var-types"><span>২.১</span>চলকের প্রকারভেদ</h3>
        <table class="rt cmp"><thead><tr><th>প্রকার</th><th>কী রাখে</th><th>উদাহরণ</th></tr></thead><tbody><tr><td>পূর্ণসংখ্যা (int)</td><td>দশমিক ছাড়া সংখ্যা</td><td><span class="m">roll = 25</span></td></tr><tr><td>বাস্তব সংখ্যা (float, double)</td><td>ভগ্নাংশসহ সংখ্যা</td><td><span class="m">gpa = 4.75</span></td></tr><tr><td>অক্ষর (char)</td><td>একটি বর্ণ বা চিহ্ন</td><td><span class="m">grade = 'A'</span></td></tr><tr><td>স্ট্রিং</td><td>কয়েকটি বর্ণের সারি</td><td><span class="m">name = "Rahim"</span></td></tr></tbody></table>
        <p class="prose">পুরোনো BASIC ভাষায় চলক দুই রকম: সংখ্যাবাচক (A, X1) আর স্ট্রিং, যার নামের শেষে $ চিহ্ন (N$ = "Dhaka")। চলকটি কী ধরনের উপাত্ত রাখবে, তা-ই তার ডেটা টাইপ; এ থেকেই ঠিক হয় কতটুকু স্মৃতি লাগবে আর কোন কাজ করা যাবে।</p>
        <h3 class="sub" id="var-names"><span>২.২</span>চলকের নামকরণের নিয়ম</h3>
        <ul class="pts">
          <li>বর্ণ (a–z, A–Z) বা আন্ডারস্কোর (_) দিয়ে শুরু; অঙ্ক দিয়ে নয়।</li>
          <li>শুধু বর্ণ, অঙ্ক আর _ চলে; ফাঁকা স্থান বা অন্য চিহ্ন (-, @, #, $) নয়।</li>
          <li>প্রোগ্রামিং ভাষার সংরক্ষিত শব্দ (int, for, if) নাম হবে না।</li>
          <li>বড় ও ছোট হাতের অক্ষর আলাদা: Roll আর roll দুটি ভিন্ন চলক।</li>
          <li>নাম অর্থবহ রাখুন: total_marks, এক অক্ষরের t-এর চেয়ে ভালো।</li>
        </ul>
        <table class="rt cmp"><thead><tr><th>বৈধ</th><th>অবৈধ</th><th>কেন অবৈধ</th></tr></thead><tbody><tr><td><span class="m">test_1</span></td><td><span class="m">test exam</span></td><td>মাঝে ফাঁকা স্থান</td></tr><tr><td><span class="m">Roll107</span></td><td><span class="m">0marks</span></td><td>অঙ্ক দিয়ে শুরু</td></tr><tr><td><span class="m">student_name</span></td><td><span class="m">student-name</span>, <span class="m">student@name</span></td><td>- ও @ চিহ্ন চলে না</td></tr><tr><td><span class="m">number1</span></td><td><span class="m">int</span></td><td>সংরক্ষিত শব্দ</td></tr></tbody></table>
        <h3 class="sub" id="var-why"><span>২.৩</span>চলকের গুরুত্ব</h3>
        <ul class="pts">
          <li>ইনপুট, মধ্যবর্তী হিসাব আর ফল রাখার জায়গা দেয়।</li>
          <li>একই প্রোগ্রাম ভিন্ন ভিন্ন ইনপুটে চালানো যায়; সংখ্যা বদলালে প্রোগ্রাম বদলাতে হয় না।</li>
          <li>লুপে গণনা (i) আর যোগফল (Sum) রাখতে চলক লাগে।</li>
          <li>অর্থবহ নাম প্রোগ্রাম পড়া ও সংশোধন সহজ করে।</li>
        </ul>
        <p class="prose">উদাহরণ: <span class="m">area = length × width</span>; length ও width-এ যেকোনো মান দিলেই নতুন ক্ষেত্রফল, সূত্র একই থাকে।</p>
        <h3 class="sub"><span>২.৪</span>অপারেশন</h3>
        <p class="prose">প্রোগ্রামে উপাত্তের ওপর যে কাজ করা হয়, তাকে অপারেশন বলে; যে চিহ্ন দিয়ে করা হয়, তা অপারেটর।</p>
        <table class="rt cmp"><thead><tr><th>ধরন</th><th>অপারেটর</th><th>উদাহরণ ও ফল</th></tr></thead><tbody><tr><td>গাণিতিক</td><td><span class="m">+  −  *  /  %</span></td><td><span class="m">17 % 5 = 2</span> (ভাগশেষ)</td></tr><tr><td>তুলনামূলক</td><td><span class="m">&lt;  &gt;  ==  !=  &lt;=  &gt;=</span></td><td><span class="m">7 &gt; 3</span> সত্য</td></tr><tr><td>যৌক্তিক</td><td><span class="m">AND  OR  NOT</span></td><td><span class="m">(7 &gt; 3) AND (2 &gt; 5)</span> মিথ্যা</td></tr><tr><td>মান নির্ধারণ</td><td><span class="m">=</span></td><td><span class="m">x = x + 1</span>: x-এর মান এক বাড়ে</td></tr></tbody></table>
        <p class="prose">যেমন x = 25; y = x * 2 = ৫০; y = y % 3 করলে y-এর নতুন মান ৫০-কে ৩ দিয়ে ভাগ করে ভাগশেষ, অর্থাৎ ২।</p>
        <h3 class="sub" id="for-next"><span>২.৫</span>FOR-NEXT লুপ (BASIC)</h3>
        <p class="prose">একই কাজ নির্দিষ্টবার করতে BASIC-এ FOR-NEXT ব্যবহার হয়: FOR চলকটিকে শুরুর মান থেকে শেষের মান পর্যন্ত এক এক করে বাড়ায়, আর NEXT পর্যন্ত নির্দেশগুলো প্রতিবার চলে। উদাহরণ, ১ থেকে ১০-এর যোগফল:</p>
        <pre class="code">10 S = 0
20 FOR I = 1 TO 10
30 S = S + I
40 NEXT I
50 PRINT S
60 END</pre>
        <p class="prose">আউটপুট: ৫৫। লাইন ৩০ দশবার চলে, প্রতিবার I-এর মান ১ করে বাড়ে। ধাপ বদলাতে STEP লেখা যায়: FOR I = 1 TO 99 STEP 2 শুধু বিজোড় সংখ্যাগুলো নেয়।</p>
        <div data-prev="var"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="8-10,25-36,48,51,79,80" data-name="চলক ও অপারেশন">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch06/q8">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>MCQ-তে বেশি আসে</b>কোন নামটি বৈধ চলক। ওপরের নিয়ম আর বৈধ-অবৈধ ছকটি মুখস্থ রাখুন।</p>
        <p><b>বারবার এসেছে</b>৫টি পরীক্ষায় চলকের সংজ্ঞা, প্রকার, নামকরণ, গুরুত্ব বা অপারেশন চাওয়া হয়েছে।</p>
      </aside>
    </section>

    <section class="blk" id="flow" data-topic="flow" data-short="ফ্লোচার্ট">
      <p class="blk-no">অংশ ৩<small>সিলেবাস চ.৩</small></p>
      <div class="body">
        <h2>ফ্লোচার্ট</h2>
        <p class="defn"><b>সংজ্ঞা</b>নির্দিষ্ট প্রতীক আর তীর চিহ্ন দিয়ে অ্যালগরিদমের ধাপগুলোর চিত্ররূপকে ফ্লোচার্ট (প্রবাহচিত্র) বলে। কোন কাজের পর কোন কাজ, আর কোন শর্তে কোন পথ, তা এক নজরে দেখা যায়।</p>
        <h3 class="sub"><span>৩.১</span>ফ্লোচার্টের প্রকার</h3>
        <ul class="pts">
          <li><b>সিস্টেম ফ্লোচার্ট:</b> পুরো ব্যবস্থায় উপাত্ত কোথা থেকে কোথায় যায়: ইনপুট যন্ত্র, ফাইল, প্রক্রিয়া, রিপোর্ট।</li>
          <li><b>প্রোগ্রাম ফ্লোচার্ট:</b> একটি প্রোগ্রামের ধাপে ধাপে যুক্তি; পরীক্ষায় এটিই আঁকতে বলা হয়।</li>
        </ul>
        <h3 class="sub" id="flow-syms"><span>৩.২</span>প্রোগ্রাম ফ্লোচার্টের প্রতীক</h3>
        <div class="fig flow syms">
          <table class="rt cmp">
            <thead><tr><th>প্রতীক</th><th>নাম</th><th>অর্থ ও ব্যবহার</th></tr></thead>
            <tbody>
              <tr><td><svg viewBox="0 0 90 44" aria-hidden="true"><rect class="fs" x="6" y="8" width="78" height="28" rx="14"/></svg></td><td>ডিম্বাকৃতি (টার্মিনাল)</td><td>ফ্লোচার্টের শুরু ও শেষ</td></tr>
              <tr><td><svg viewBox="0 0 90 44" aria-hidden="true"><path class="fs" d="M20 8H86L70 36H4Z"/></svg></td><td>সামান্তরিক (ইনপুট/আউটপুট)</td><td>উপাত্ত নেওয়া বা ফল দেখানো, যেমন “A ইনপুট”, “Sum প্রিন্ট”</td></tr>
              <tr><td><svg viewBox="0 0 90 44" aria-hidden="true"><rect class="fs" x="6" y="8" width="78" height="28"/></svg></td><td>আয়তক্ষেত্র (প্রক্রিয়া)</td><td>হিসাব বা কোনো কাজ, যেমন A = L × W</td></tr>
              <tr><td><svg viewBox="0 0 90 44" aria-hidden="true"><path class="fs fd" d="M45 3L84 22L45 41L6 22Z"/></svg></td><td>রম্বস (সিদ্ধান্ত)</td><td>শর্ত যাচাই; হ্যাঁ বা না অনুযায়ী দুই পথ</td></tr>
              <tr><td><svg viewBox="0 0 90 44" aria-hidden="true"><path class="fa" d="M8 22H80"/><path class="ah" d="M78 17L88 22L78 27Z"/></svg></td><td>তীর (প্রবাহ রেখা)</td><td>কাজের ক্রম ও দিক</td></tr>
              <tr><td><svg viewBox="0 0 90 44" aria-hidden="true"><circle class="fs" cx="45" cy="22" r="14"/></svg></td><td>বৃত্ত (সংযোগকারী)</td><td>বড় ফ্লোচার্টের এক অংশকে আরেক অংশের সঙ্গে জোড়া</td></tr>
            </tbody>
          </table>
        </div>
        <p class="prose">লুপ বোঝাতে আলাদা কোনো প্রতীক নেই; রম্বস (শর্ত) আর পেছনে ফেরা তীর মিলেই লুপ হয়।</p>
        <h3 class="sub" id="flow-rules"><span>৩.৩</span>ফ্লোচার্ট আঁকার নিয়ম</h3>
        <ul class="pts">
          <li>শুধু প্রচলিত প্রতীক ব্যবহার করুন, প্রতিটি সঠিক কাজে।</li>
          <li>প্রবাহ ওপর থেকে নিচে আর বাঁ থেকে ডানে।</li>
          <li>একটি শুরু আর একটি শেষ।</li>
          <li>প্রতীকের ভেতরে লেখা সংক্ষিপ্ত ও স্পষ্ট।</li>
          <li>রম্বস থেকে বের হওয়া দুই পথে “হ্যাঁ” আর “না” লিখুন।</li>
          <li>তীরগুলো যেন পরস্পরকে না কাটে; জায়গা না পেলে সংযোগকারী বৃত্ত ব্যবহার করুন।</li>
          <li>পুরো চার্ট পরিচ্ছন্ন ও সহজবোধ্য রাখুন।</li>
        </ul>
        <h3 class="sub" id="flow-adv"><span>৩.৪</span>সুবিধা ও অসুবিধা</h3>
        <table class="rt cmp"><thead><tr><th>সুবিধা</th><th>অসুবিধা</th></tr></thead><tbody><tr><td>প্রোগ্রামের যুক্তি এক নজরে বোঝা যায়</td><td>জটিল প্রোগ্রামে চার্ট বড় ও এলোমেলো হয়ে যায়</td></tr><tr><td>ভুল খোঁজা ও সংশোধন সহজ</td><td>সামান্য পরিবর্তনেও পুরো চার্ট আবার আঁকতে হতে পারে</td></tr><tr><td>প্রোগ্রাম লেখা দ্রুত হয়</td><td>আঁকতে সময় লাগে</td></tr><tr><td>অন্যকে বোঝানো সহজ; প্রোগ্রামের দলিল (ডকুমেন্টেশন) হিসেবে কাজে লাগে</td><td></td></tr><tr><td>পরে প্রোগ্রাম রক্ষণাবেক্ষণ ও পরিবর্তন সহজ</td><td></td></tr></tbody></table>
        <div data-prev="flow"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="11-24,38,40,41,44,46,47" data-name="ফ্লোচার্ট">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch06/q11">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>নম্বর পেতে</b>“প্রতীক লিখুন” প্রশ্নে প্রতীক এঁকে, নাম ও কাজ পাশে লিখুন; ছক করে দিলে পরিষ্কার দেখায়।</p>
        <p><b>বারবার এসেছে</b>১০টি পরীক্ষায় ফ্লোচার্টের সংজ্ঞা, প্রতীক, নিয়ম বা সুবিধা চাওয়া হয়েছে; প্রতীকের প্রশ্নই সবচেয়ে বেশি।</p>
      </aside>
    </section>

    <section class="blk" id="diff" data-topic="diff" data-short="পার্থক্য">
      <p class="blk-no">অংশ ৪</p>
      <div class="body">
        <h2>অ্যালগরিদম ও ফ্লোচার্টের পার্থক্য</h2>
        <ol class="chain" aria-label="সমস্যা থেকে অ্যালগরিদম, তা থেকে ফ্লোচার্ট, তা থেকে প্রোগ্রাম">
          <li><b>সমস্যা</b><small>কী বের করতে হবে</small></li>
          <li><b>অ্যালগরিদম</b><small>ধাপে ধাপে লেখা</small></li>
          <li><b>ফ্লোচার্ট</b><small>ধাপগুলোর চিত্র</small></li>
          <li><b>প্রোগ্রাম</b><small>কম্পিউটারের ভাষায়</small></li>
        </ol>
        <table class="rt cmp"><thead><tr><th>বিষয়</th><th>অ্যালগরিদম</th><th>ফ্লোচার্ট</th></tr></thead><tbody><tr><td>রূপ</td><td>সাধারণ ভাষায় লেখা, নম্বর দেওয়া ধাপ</td><td>প্রতীক আর তীর দিয়ে আঁকা চিত্র</td></tr><tr><td>প্রতীক</td><td>লাগে না</td><td>নির্দিষ্ট প্রতীক লাগে</td></tr><tr><td>বোঝা</td><td>পড়ে বুঝতে হয়</td><td>এক নজরে প্রবাহ দেখা যায়</td></tr><tr><td>তৈরি</td><td>লিখতে সহজ ও দ্রুত</td><td>আঁকতে বেশি সময় লাগে</td></tr><tr><td>শাখা ও লুপ</td><td>জটিল হলে বোঝানো কঠিন</td><td>শাখা ও লুপ স্পষ্ট দেখা যায়</td></tr><tr><td>পরিবর্তন</td><td>সহজে লিখে বদলানো যায়</td><td>অনেক সময় আবার আঁকতে হয়</td></tr><tr><td>ক্রম</td><td>আগে তৈরি হয়</td><td>অ্যালগরিদম থেকে তৈরি হয়</td></tr></tbody></table>
        <div data-prev="diff"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="14,17,40,52,76-78,82-84" data-name="পার্থক্য">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch06/q14">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>নম্বর পেতে</b>অন্তত পাঁচটি সারির ছক দিন, আর ওপরের চার ধাপের সম্পর্কটি এক লাইনে লিখুন।</p>
        <p><b>বারবার এসেছে</b>৬টি পরীক্ষায়; প্রায়ই বড় প্রশ্নের একটি অংশ হিসেবে।</p>
      </aside>
    </section>

    <section class="blk" id="seq" data-topic="seq" data-short="ক্রমের সমস্যা">
      <p class="blk-no">অংশ ৫<small>ক্রম</small></p>
      <div class="body">
        <h2>ক্রমের সমস্যা: ক্ষেত্রফল</h2>
        <p class="prose">ইনপুট, একটি হিসাব, আউটপুট: কোনো শর্ত বা লুপ নেই। ফ্লোচার্ট সোজা ওপর থেকে নিচে।</p>
        <h4 class="sub-h" id="p-rect"><span>৫.১</span><span>আয়তক্ষেত্রের ক্ষেত্রফল</span></h4>
        <ol class="algo">
          <li>শুরু।</li>
          <li>দৈর্ঘ্য L ও প্রস্থ W ইনপুট নিই।</li>
          <li>A = L × W।</li>
          <li>A প্রিন্ট করি।</li>
          <li>শেষ।</li>
        </ol>
        <figure class="fig flow">
          <svg viewBox="0 0 360 338" role="img" aria-label="ফ্লোচার্ট: শুরু; L ও W ইনপুট; A = L × W; A প্রিন্ট; শেষ।">
            <defs><marker id="rect6-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
            <rect class="fs" x="120" y="10" width="120" height="40" rx="20"/><text x="180" y="31">শুরু</text>
            <path class="fa" d="M180 50V76" marker-end="url(#rect6-ah)"/>
            <path class="fs" d="M123 78H261L237 120H99Z"/><text x="180" y="100">L, W ইনপুট</text>
            <path class="fa" d="M180 120V146" marker-end="url(#rect6-ah)"/>
            <rect class="fs" x="114" y="148" width="132" height="42"/><text x="180" y="170">A = L × W</text>
            <path class="fa" d="M180 190V216" marker-end="url(#rect6-ah)"/>
            <path class="fs" d="M126 218H258L234 260H102Z"/><text x="180" y="240">A প্রিন্ট</text>
            <path class="fa" d="M180 260V286" marker-end="url(#rect6-ah)"/>
            <rect class="fs" x="120" y="288" width="120" height="40" rx="20"/><text x="180" y="309">শেষ</text>
          </svg>
          <figcaption>চিত্র: আয়তক্ষেত্রের ক্ষেত্রফল নির্ণয়ের ফ্লোচার্ট</figcaption>
        </figure>
        <p class="final"><b>উদাহরণ</b>L = ৮, W = ৫ হলে A = ৪০।</p>
        <h4 class="sub-h" id="p-circle"><span>৫.২</span><span>বৃত্তের ক্ষেত্রফল</span></h4>
        <ol class="algo">
          <li>শুরু।</li>
          <li>ব্যাসার্ধ r ইনপুট নিই।</li>
          <li>A = 3.1416 × r × r।</li>
          <li>A প্রিন্ট করি।</li>
          <li>শেষ।</li>
        </ol>
        <figure class="fig flow">
          <svg viewBox="0 0 360 338" role="img" aria-label="ফ্লোচার্ট: শুরু; r ইনপুট; A = 3.1416 গুণ r গুণ r; A প্রিন্ট; শেষ।">
            <defs><marker id="circ6-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
            <rect class="fs" x="120" y="10" width="120" height="40" rx="20"/><text x="180" y="31">শুরু</text>
            <path class="fa" d="M180 50V76" marker-end="url(#circ6-ah)"/>
            <path class="fs" d="M126 78H258L234 120H102Z"/><text x="180" y="100">r ইনপুট</text>
            <path class="fa" d="M180 120V146" marker-end="url(#circ6-ah)"/>
            <rect class="fs" x="73" y="148" width="214" height="42"/><text x="180" y="170">A = 3.1416 × r × r</text>
            <path class="fa" d="M180 190V216" marker-end="url(#circ6-ah)"/>
            <path class="fs" d="M126 218H258L234 260H102Z"/><text x="180" y="240">A প্রিন্ট</text>
            <path class="fa" d="M180 260V286" marker-end="url(#circ6-ah)"/>
            <rect class="fs" x="120" y="288" width="120" height="40" rx="20"/><text x="180" y="309">শেষ</text>
          </svg>
          <figcaption>চিত্র: বৃত্তের ক্ষেত্রফল নির্ণয়ের ফ্লোচার্ট</figcaption>
        </figure>
        <p class="final"><b>উদাহরণ</b>r = ৭ হলে A = ৩.১৪১৬ × ৪৯ = ১৫৩.৯৩৮৪।</p>
        <h4 class="sub-h" id="p-tri"><span>৫.৩</span><span>ত্রিভুজের ক্ষেত্রফল</span></h4>
        <ol class="algo">
          <li>শুরু।</li>
          <li>ভূমি b ও উচ্চতা h ইনপুট নিই।</li>
          <li>A = 0.5 × b × h।</li>
          <li>A প্রিন্ট করি।</li>
          <li>শেষ।</li>
        </ol>
        <figure class="fig flow">
          <svg viewBox="0 0 360 338" role="img" aria-label="ফ্লোচার্ট: শুরু; b ও h ইনপুট; A = 0.5 গুণ b গুণ h; A প্রিন্ট; শেষ।">
            <defs><marker id="tri6-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
            <rect class="fs" x="120" y="10" width="120" height="40" rx="20"/><text x="180" y="31">শুরু</text>
            <path class="fa" d="M180 50V76" marker-end="url(#tri6-ah)"/>
            <path class="fs" d="M123 78H261L237 120H99Z"/><text x="180" y="100">b, h ইনপুট</text>
            <path class="fa" d="M180 120V146" marker-end="url(#tri6-ah)"/>
            <rect class="fs" x="87" y="148" width="186" height="42"/><text x="180" y="170">A = 0.5 × b × h</text>
            <path class="fa" d="M180 190V216" marker-end="url(#tri6-ah)"/>
            <path class="fs" d="M126 218H258L234 260H102Z"/><text x="180" y="240">A প্রিন্ট</text>
            <path class="fa" d="M180 260V286" marker-end="url(#tri6-ah)"/>
            <rect class="fs" x="120" y="288" width="120" height="40" rx="20"/><text x="180" y="309">শেষ</text>
          </svg>
          <figcaption>চিত্র: ত্রিভুজের ক্ষেত্রফল নির্ণয়ের ফ্লোচার্ট</figcaption>
        </figure>
        <p class="final"><b>উদাহরণ</b>b = ১০, h = ৬ হলে A = ৩০।</p>
        <p class="prose">তিন বাহু a, b, c দেওয়া থাকলে হিসাবের ধাপ দুটি: s = (a + b + c) ÷ 2, তারপর A = √(s(s − a)(s − b)(s − c))। যেমন বাহু ৩, ৪, ৫ হলে s = ৬, A = √(৬ × ৩ × ২ × ১) = ৬। ফ্লোচার্টে শুধু আয়তক্ষেত্র দুটি হবে।</p>
        <div data-prev="seq"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="53-57,85-88" data-name="ক্রমের সমস্যা">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch06/q53">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>কাঠামো মনে রাখুন</b>শুরু → ইনপুট → হিসাব → আউটপুট → শেষ। প্রতিটি ক্ষেত্রফলের প্রশ্নে শুধু হিসাবের সূত্রটি বদলায়।</p>
        <p><b>বারবার এসেছে</b>৩টি পরীক্ষায়: আয়তক্ষেত্র, বৃত্ত আর ত্রিভুজ।</p>
      </aside>
    </section>

    <section class="blk" id="dec" data-topic="dec" data-short="সিদ্ধান্তের সমস্যা">
      <p class="blk-no">অংশ ৬<small>সিদ্ধান্ত</small></p>
      <div class="body">
        <h2>সিদ্ধান্তের সমস্যা: বড়-ছোট, জোড়-বিজোড়</h2>
        <p class="prose">এখানে রম্বস আসে: শর্তের উত্তর হ্যাঁ হলে এক পথ, না হলে আরেক পথ। প্রতিটি রম্বস থেকে দুটি তীর, দুটিতেই হ্যাঁ বা না লেখা।</p>
        <h4 class="sub-h" id="p-max3"><span>৬.১</span><span>তিনটি সংখ্যার মধ্যে বড় সংখ্যা</span></h4>
        <ol class="algo">
          <li>শুরু।</li>
          <li>তিনটি সংখ্যা A, B, C ইনপুট নিই।</li>
          <li>A &gt; B হলে ধাপ ৪-এ, না হলে ধাপ ৫-এ যাই।</li>
          <li>A &gt; C হলে A প্রিন্ট, না হলে C প্রিন্ট করে ধাপ ৬-এ যাই।</li>
          <li>B &gt; C হলে B প্রিন্ট, না হলে C প্রিন্ট করি।</li>
          <li>শেষ।</li>
        </ol>
        <figure class="fig flow">
          <svg viewBox="0 0 460 520" role="img" aria-label="ফ্লোচার্ট: শুরু; A, B, C ইনপুট; A বড় B-এর চেয়ে? হ্যাঁ হলে A বড় C-এর চেয়ে? হ্যাঁ হলে A প্রিন্ট, না হলে C প্রিন্ট। প্রথম প্রশ্নে না হলে B বড় C-এর চেয়ে? হ্যাঁ হলে B প্রিন্ট, না হলে C প্রিন্ট। তারপর শেষ।">
            <defs><marker id="max6-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
            <rect class="fs" x="170" y="10" width="120" height="40" rx="20"/><text x="230" y="31">শুরু</text>
            <path class="fa" d="M230 50V76" marker-end="url(#max6-ah)"/>
            <path class="fs" d="M158 78H326L302 120H134Z"/><text x="230" y="100">A, B, C ইনপুট</text>
            <path class="fa" d="M230 120V146" marker-end="url(#max6-ah)"/>
            <path class="fs fd" d="M230 148L310 188L230 228L150 188Z"/><text x="230" y="189">A &gt; B ?</text>
            <path class="fa" d="M150 188H90V246" marker-end="url(#max6-ah)"/>
            <text class="yn" x="120" y="176">হ্যাঁ</text>
            <path class="fa" d="M310 188H370V246" marker-end="url(#max6-ah)"/>
            <text class="yn" x="340" y="176">না</text>
            <path class="fs fd" d="M90 248L160 288L90 328L20 288Z"/><text x="90" y="289">A &gt; C ?</text>
            <path class="fs fd" d="M370 248L440 288L370 328L300 288Z"/><text x="370" y="289">B &gt; C ?</text>
            <path class="fa" d="M160 288H300"/>
            <path class="fa" d="M230 288V376" marker-end="url(#max6-ah)"/>
            <text class="yn" x="182" y="276">না</text>
            <text class="yn" x="278" y="276">না</text>
            <path class="fa" d="M90 328V376" marker-end="url(#max6-ah)"/>
            <text class="yn" x="110" y="354">হ্যাঁ</text>
            <path class="fa" d="M370 328V376" marker-end="url(#max6-ah)"/>
            <text class="yn" x="390" y="354">হ্যাঁ</text>
            <path class="fs" d="M40 378H158L140 418H22Z"/><text x="90" y="398">A প্রিন্ট</text>
            <path class="fs" d="M180 378H298L280 418H162Z"/><text x="230" y="398">C প্রিন্ট</text>
            <path class="fs" d="M320 378H438L420 418H302Z"/><text x="370" y="398">B প্রিন্ট</text>
            <path class="fa" d="M90 418V490H168" marker-end="url(#max6-ah)"/>
            <path class="fa" d="M230 418V468" marker-end="url(#max6-ah)"/>
            <path class="fa" d="M370 418V490H292" marker-end="url(#max6-ah)"/>
            <rect class="fs" x="170" y="470" width="120" height="40" rx="20"/><text x="230" y="491">শেষ</text>
          </svg>
          <figcaption>চিত্র: তিনটি সংখ্যার মধ্যে বড় সংখ্যা নির্ণয়ের ফ্লোচার্ট</figcaption>
        </figure>
        <table class="truth trace"><thead><tr><th>A</th><th>B</th><th>C</th><th>A > B ?</th><th>পরের প্রশ্ন</th><th>প্রিন্ট</th></tr></thead><tbody><tr><td>12</td><td>25</td><td>9</td><td>না</td><td>B > C ? হ্যাঁ</td><td>25</td></tr><tr><td>30</td><td>4</td><td>18</td><td>হ্যাঁ</td><td>A > C ? হ্যাঁ</td><td>30</td></tr><tr><td>5</td><td>6</td><td>40</td><td>না</td><td>B > C ? না</td><td>40</td></tr></tbody></table>
        <p class="prose"><b>আরেকটি সহজ উপায় (Max চলক দিয়ে):</b> Max = A ধরুন; B &gt; Max হলে Max = B; C &gt; Max হলে Max = C; শেষে Max প্রিন্ট। এভাবে দুটি রম্বসেই হয়, আর চারটি বা দশটি সংখ্যাতেও একই নিয়ম চলে (অংশ ৭.৬-এর মতো)।</p>
        <h4 class="sub-h" id="p-min3"><span>৬.২</span><span>তিনটি সংখ্যার মধ্যে ছোট সংখ্যা</span></h4>
        <ol class="algo">
          <li>শুরু।</li>
          <li>তিনটি সংখ্যা A, B, C ইনপুট নিই।</li>
          <li>A &lt; B হলে ধাপ ৪-এ, না হলে ধাপ ৫-এ যাই।</li>
          <li>A &lt; C হলে A প্রিন্ট, না হলে C প্রিন্ট করে ধাপ ৬-এ যাই।</li>
          <li>B &lt; C হলে B প্রিন্ট, না হলে C প্রিন্ট করি।</li>
          <li>শেষ।</li>
        </ol>
        <figure class="fig flow">
          <svg viewBox="0 0 460 520" role="img" aria-label="ফ্লোচার্ট: শুরু; A, B, C ইনপুট; A ছোট B-এর চেয়ে? হ্যাঁ হলে A ছোট C-এর চেয়ে? হ্যাঁ হলে A প্রিন্ট, না হলে C প্রিন্ট। প্রথম প্রশ্নে না হলে B ছোট C-এর চেয়ে? হ্যাঁ হলে B প্রিন্ট, না হলে C প্রিন্ট। তারপর শেষ।">
            <defs><marker id="min6-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
            <rect class="fs" x="170" y="10" width="120" height="40" rx="20"/><text x="230" y="31">শুরু</text>
            <path class="fa" d="M230 50V76" marker-end="url(#min6-ah)"/>
            <path class="fs" d="M158 78H326L302 120H134Z"/><text x="230" y="100">A, B, C ইনপুট</text>
            <path class="fa" d="M230 120V146" marker-end="url(#min6-ah)"/>
            <path class="fs fd" d="M230 148L310 188L230 228L150 188Z"/><text x="230" y="189">A &lt; B ?</text>
            <path class="fa" d="M150 188H90V246" marker-end="url(#min6-ah)"/>
            <text class="yn" x="120" y="176">হ্যাঁ</text>
            <path class="fa" d="M310 188H370V246" marker-end="url(#min6-ah)"/>
            <text class="yn" x="340" y="176">না</text>
            <path class="fs fd" d="M90 248L160 288L90 328L20 288Z"/><text x="90" y="289">A &lt; C ?</text>
            <path class="fs fd" d="M370 248L440 288L370 328L300 288Z"/><text x="370" y="289">B &lt; C ?</text>
            <path class="fa" d="M160 288H300"/>
            <path class="fa" d="M230 288V376" marker-end="url(#min6-ah)"/>
            <text class="yn" x="182" y="276">না</text>
            <text class="yn" x="278" y="276">না</text>
            <path class="fa" d="M90 328V376" marker-end="url(#min6-ah)"/>
            <text class="yn" x="110" y="354">হ্যাঁ</text>
            <path class="fa" d="M370 328V376" marker-end="url(#min6-ah)"/>
            <text class="yn" x="390" y="354">হ্যাঁ</text>
            <path class="fs" d="M40 378H158L140 418H22Z"/><text x="90" y="398">A প্রিন্ট</text>
            <path class="fs" d="M180 378H298L280 418H162Z"/><text x="230" y="398">C প্রিন্ট</text>
            <path class="fs" d="M320 378H438L420 418H302Z"/><text x="370" y="398">B প্রিন্ট</text>
            <path class="fa" d="M90 418V490H168" marker-end="url(#min6-ah)"/>
            <path class="fa" d="M230 418V468" marker-end="url(#min6-ah)"/>
            <path class="fa" d="M370 418V490H292" marker-end="url(#min6-ah)"/>
            <rect class="fs" x="170" y="470" width="120" height="40" rx="20"/><text x="230" y="491">শেষ</text>
          </svg>
          <figcaption>চিত্র: তিনটি সংখ্যার মধ্যে ছোট সংখ্যা নির্ণয়ের ফ্লোচার্ট</figcaption>
        </figure>
        <p class="prose">বড়-র ফ্লোচার্ট থেকে শুধু &gt;-এর জায়গায় &lt; বসালেই ছোট-র ফ্লোচার্ট। উদাহরণ: ১২, ২৫, ৯ হলে A &lt; B হ্যাঁ, A &lt; C না, তাই C = ৯ প্রিন্ট।</p>
        <h4 class="sub-h" id="p-evenodd"><span>৬.৩</span><span>সংখ্যাটি জোড় না বিজোড়</span></h4>
        <ol class="algo">
          <li>শুরু।</li>
          <li>একটি পূর্ণসংখ্যা N ইনপুট নিই।</li>
          <li>R = N mod 2 (২ দিয়ে ভাগের ভাগশেষ)।</li>
          <li>R = 0 হলে “জোড়” প্রিন্ট, না হলে “বিজোড়” প্রিন্ট করি।</li>
          <li>শেষ।</li>
        </ol>
        <figure class="fig flow">
          <svg viewBox="0 0 410 450" role="img" aria-label="ফ্লোচার্ট: শুরু; N ইনপুট; R = N mod 2; R শূন্য কি না? হ্যাঁ হলে জোড় প্রিন্ট, না হলে বিজোড় প্রিন্ট; শেষ।">
            <defs><marker id="eo6-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
            <rect class="fs" x="140" y="10" width="120" height="40" rx="20"/><text x="200" y="31">শুরু</text>
            <path class="fa" d="M200 50V76" marker-end="url(#eo6-ah)"/>
            <path class="fs" d="M146 78H278L254 120H122Z"/><text x="200" y="100">N ইনপুট</text>
            <path class="fa" d="M200 120V146" marker-end="url(#eo6-ah)"/>
            <rect class="fs" x="126" y="148" width="148" height="42"/><text x="200" y="170">R = N mod 2</text>
            <path class="fa" d="M200 190V216" marker-end="url(#eo6-ah)"/>
            <path class="fs fd" d="M200 218L272 258L200 298L128 258Z"/><text x="200" y="259">R = 0 ?</text>
            <path class="fa" d="M128 258H90V326" marker-end="url(#eo6-ah)"/>
            <text class="yn" x="98" y="246">হ্যাঁ</text>
            <path class="fa" d="M272 258H310V326" marker-end="url(#eo6-ah)"/>
            <text class="yn" x="302" y="246">না</text>
            <path class="fs" d="M14 328H190L166 370H-10Z"/><text x="90" y="350">“জোড়” প্রিন্ট</text>
            <path class="fs" d="M224 328H420L396 370H200Z"/><text x="310" y="350">“বিজোড়” প্রিন্ট</text>
            <path class="fa" d="M90 370V420H138" marker-end="url(#eo6-ah)"/>
            <path class="fa" d="M310 370V420H262" marker-end="url(#eo6-ah)"/>
            <rect class="fs" x="140" y="400" width="120" height="40" rx="20"/><text x="200" y="421">শেষ</text>
          </svg>
          <figcaption>চিত্র: একটি সংখ্যা জোড় না বিজোড় নির্ণয়ের ফ্লোচার্ট</figcaption>
        </figure>
        <p class="final"><b>উদাহরণ</b>N = ১৪ হলে R = ০, তাই “জোড়”; N = ৭ হলে R = ১, তাই “বিজোড়”।</p>
        <div data-prev="dec"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="58-63,89-92" data-name="সিদ্ধান্তের সমস্যা">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch06/q58">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>নম্বর পেতে</b>রম্বসের প্রতিটি পথে হ্যাঁ/না লিখুন, আর শেষে একটি উদাহরণে মান বসিয়ে কোন পথে গেল দেখান।</p>
        <p><b>বারবার এসেছে</b>১১টি পরীক্ষায়; তিন সংখ্যার বড় বা ছোট আর জোড়-বিজোড়ই ঘুরে ফিরে আসে।</p>
      </aside>
    </section>

    <section class="blk" id="loop" data-topic="loop" data-short="লুপের সমস্যা">
      <p class="blk-no">অংশ ৭<small>লুপ</small></p>
      <div class="body">
        <h2>লুপের সমস্যা: ধারা, গুণফল, গ.সা.গু</h2>
        <p class="prose">লুপে একটি গণনার চলক (i) শুরুর মান থেকে শেষ মান পর্যন্ত বাড়তে থাকে; প্রতিবার রম্বসে শর্ত যাচাই হয়, আর হ্যাঁ হলে কাজ সেরে তীর আবার রম্বসে ফিরে যায়। শর্ত মিথ্যা হলে লুপ থেকে বেরিয়ে ফল প্রিন্ট। তিনটি জিনিস কখনো ভুলবেন না: শুরুর মান, শর্ত, আর মান বাড়ানো।</p>
        <h4 class="sub-h" id="p-sum"><span>৭.১</span><span>১ থেকে N পর্যন্ত সংখ্যার যোগফল</span></h4>
        <ol class="algo">
          <li>শুরু।</li>
          <li>N ইনপুট নিই।</li>
          <li>Sum = 0, i = 1 ধরি।</li>
          <li>i ≤ N না হলে ধাপ ৭-এ যাই।</li>
          <li>Sum = Sum + i।</li>
          <li>i = i + 1 করে ধাপ ৪-এ ফিরে যাই।</li>
          <li>Sum প্রিন্ট করি।</li>
          <li>শেষ।</li>
        </ol>
        <figure class="fig flow">
          <svg viewBox="0 0 430 570" role="img" aria-label="ফ্লোচার্ট: শুরু; N ইনপুট; Sum = 0, i = 1; i ছোট বা সমান N? হ্যাঁ হলে Sum = Sum + i, i = i + 1, তারপর আবার যাচাই; না হলে Sum প্রিন্ট; শেষ।">
            <defs><marker id="sum6-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
            <rect class="fs" x="110" y="10" width="120" height="40" rx="20"/><text x="170" y="31">শুরু</text>
            <path class="fa" d="M170 50V76" marker-end="url(#sum6-ah)"/>
            <path class="fs" d="M116 78H248L224 120H92Z"/><text x="170" y="100">N ইনপুট</text>
            <path class="fa" d="M170 120V146" marker-end="url(#sum6-ah)"/>
            <rect class="fs" x="82" y="148" width="176" height="42"/><text x="170" y="170">Sum = 0, i = 1</text>
            <path class="fa" d="M170 190V216" marker-end="url(#sum6-ah)"/>
            <path class="fs fd" d="M170 218L242 258L170 298L98 258Z"/><text x="170" y="259">i ≤ N ?</text>
            <path class="fa" d="M170 298V328" marker-end="url(#sum6-ah)"/>
            <text class="yn" x="192" y="313">হ্যাঁ</text>
            <rect class="fs" x="86" y="330" width="168" height="42"/><text x="170" y="352">Sum = Sum + i</text>
            <path class="fa" d="M170 372V398" marker-end="url(#sum6-ah)"/>
            <rect class="fs" x="104" y="400" width="132" height="42"/><text x="170" y="422">i = i + 1</text>
            <path class="fa" d="M104 421H34V258H96" marker-end="url(#sum6-ah)"/>
            <path class="fa" d="M242 258H330V454" marker-end="url(#sum6-ah)"/>
            <text class="yn" x="266" y="246">না</text>
            <path class="fs" d="M268 456H416L392 498H244Z"/><text x="330" y="478">Sum প্রিন্ট</text>
            <path class="fa" d="M330 498V518" marker-end="url(#sum6-ah)"/>
            <rect class="fs" x="270" y="520" width="120" height="40" rx="20"/><text x="330" y="541">শেষ</text>
          </svg>
          <figcaption>চিত্র: ১ থেকে N পর্যন্ত যোগফল নির্ণয়ের ফ্লোচার্ট</figcaption>
        </figure>
        <table class="truth trace"><thead><tr><th>i</th><th>Sum = Sum + i</th></tr></thead><tbody><tr><td>1</td><td>1</td></tr><tr><td>2</td><td>3</td></tr><tr><td>3</td><td>6</td></tr><tr><td>4</td><td>10</td></tr><tr><td>5</td><td>15</td></tr><tr><td>6</td><td>i ≤ 5 মিথ্যা, থামি</td></tr></tbody></table>
        <p class="final"><b>উদাহরণ</b>N = ৫ হলে Sum = ১৫। N = ১০০ দিলে ৫০৫০, N = ৫০ দিলে ১২৭৫ (যাচাই: N(N + 1) ÷ 2)।</p>
        <p class="prose">প্রশ্নে “১ থেকে ১০০” নির্দিষ্ট থাকলে N ইনপুটের বদলে শর্তে সরাসরি i ≤ 100 লিখতে পারেন।</p>
        <h4 class="sub-h" id="p-odd"><span>৭.২</span><span>বিজোড় ধারা: ১ + ৩ + ৫ + … + N</span></h4>
        <ol class="algo">
          <li>শুরু।</li>
          <li>শেষ পদ N ইনপুট নিই।</li>
          <li>Sum = 0, i = 1 ধরি।</li>
          <li>i ≤ N না হলে ধাপ ৭-এ যাই।</li>
          <li>Sum = Sum + i।</li>
          <li>i = i + 2 করে ধাপ ৪-এ ফিরে যাই।</li>
          <li>Sum প্রিন্ট করি।</li>
          <li>শেষ।</li>
        </ol>
        <figure class="fig flow">
          <svg viewBox="0 0 430 570" role="img" aria-label="ফ্লোচার্ট: শুরু; N ইনপুট; Sum = 0, i = 1; i ছোট বা সমান N? হ্যাঁ হলে Sum = Sum + i, i = i + 2, তারপর আবার যাচাই; না হলে Sum প্রিন্ট; শেষ।">
            <defs><marker id="odd6-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
            <rect class="fs" x="110" y="10" width="120" height="40" rx="20"/><text x="170" y="31">শুরু</text>
            <path class="fa" d="M170 50V76" marker-end="url(#odd6-ah)"/>
            <path class="fs" d="M116 78H248L224 120H92Z"/><text x="170" y="100">N ইনপুট</text>
            <path class="fa" d="M170 120V146" marker-end="url(#odd6-ah)"/>
            <rect class="fs" x="82" y="148" width="176" height="42"/><text x="170" y="170">Sum = 0, i = 1</text>
            <path class="fa" d="M170 190V216" marker-end="url(#odd6-ah)"/>
            <path class="fs fd" d="M170 218L242 258L170 298L98 258Z"/><text x="170" y="259">i ≤ N ?</text>
            <path class="fa" d="M170 298V328" marker-end="url(#odd6-ah)"/>
            <text class="yn" x="192" y="313">হ্যাঁ</text>
            <rect class="fs" x="86" y="330" width="168" height="42"/><text x="170" y="352">Sum = Sum + i</text>
            <path class="fa" d="M170 372V398" marker-end="url(#odd6-ah)"/>
            <rect class="fs" x="104" y="400" width="132" height="42"/><text x="170" y="422">i = i + 2</text>
            <path class="fa" d="M104 421H34V258H96" marker-end="url(#odd6-ah)"/>
            <path class="fa" d="M242 258H330V454" marker-end="url(#odd6-ah)"/>
            <text class="yn" x="266" y="246">না</text>
            <path class="fs" d="M268 456H416L392 498H244Z"/><text x="330" y="478">Sum প্রিন্ট</text>
            <path class="fa" d="M330 498V518" marker-end="url(#odd6-ah)"/>
            <rect class="fs" x="270" y="520" width="120" height="40" rx="20"/><text x="330" y="541">শেষ</text>
          </svg>
          <figcaption>চিত্র: ১ + ৩ + ৫ + … + N-এর যোগফল নির্ণয়ের ফ্লোচার্ট</figcaption>
        </figure>
        <table class="truth trace"><thead><tr><th>i</th><th>Sum = Sum + i</th></tr></thead><tbody><tr><td>1</td><td>1</td></tr><tr><td>3</td><td>4</td></tr><tr><td>5</td><td>9</td></tr><tr><td>7</td><td>16</td></tr><tr><td>9</td><td>25</td></tr><tr><td>11</td><td>i ≤ 9 মিথ্যা, থামি</td></tr></tbody></table>
        <p class="final"><b>উদাহরণ</b>N = ৯ হলে Sum = ২৫। N = ৫১ দিলে ৬৭৬, N = ৯৯ দিলে ২৫০০; “১ থেকে ১০০-এর বিজোড় সংখ্যা” মানেও শেষ পদ ৯৯, যোগফল ২৫০০ (যাচাই: পদসংখ্যার বর্গ)।</p>
        <p class="prose">এটি ৭.১-এর লুপই, শুধু i একবারে ২ করে বাড়ে। একই লুপে i = i + 2 আর শুরু i = 2 দিলে জোড় ধারা।</p>
        <h4 class="sub-h" id="p-even"><span>৭.৩</span><span>জোড় ধারা: ২ + ৪ + ৬ + … + N</span></h4>
        <ol class="algo">
          <li>শুরু।</li>
          <li>শেষ পদ N ইনপুট নিই।</li>
          <li>Sum = 0, i = 2 ধরি।</li>
          <li>i ≤ N না হলে ধাপ ৭-এ যাই।</li>
          <li>Sum = Sum + i।</li>
          <li>i = i + 2 করে ধাপ ৪-এ ফিরে যাই।</li>
          <li>Sum প্রিন্ট করি।</li>
          <li>শেষ।</li>
        </ol>
        <figure class="fig flow">
          <svg viewBox="0 0 430 570" role="img" aria-label="ফ্লোচার্ট: শুরু; N ইনপুট; Sum = 0, i = 2; i ছোট বা সমান N? হ্যাঁ হলে Sum = Sum + i, i = i + 2, তারপর আবার যাচাই; না হলে Sum প্রিন্ট; শেষ।">
            <defs><marker id="even6-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
            <rect class="fs" x="110" y="10" width="120" height="40" rx="20"/><text x="170" y="31">শুরু</text>
            <path class="fa" d="M170 50V76" marker-end="url(#even6-ah)"/>
            <path class="fs" d="M116 78H248L224 120H92Z"/><text x="170" y="100">N ইনপুট</text>
            <path class="fa" d="M170 120V146" marker-end="url(#even6-ah)"/>
            <rect class="fs" x="82" y="148" width="176" height="42"/><text x="170" y="170">Sum = 0, i = 2</text>
            <path class="fa" d="M170 190V216" marker-end="url(#even6-ah)"/>
            <path class="fs fd" d="M170 218L242 258L170 298L98 258Z"/><text x="170" y="259">i ≤ N ?</text>
            <path class="fa" d="M170 298V328" marker-end="url(#even6-ah)"/>
            <text class="yn" x="192" y="313">হ্যাঁ</text>
            <rect class="fs" x="86" y="330" width="168" height="42"/><text x="170" y="352">Sum = Sum + i</text>
            <path class="fa" d="M170 372V398" marker-end="url(#even6-ah)"/>
            <rect class="fs" x="104" y="400" width="132" height="42"/><text x="170" y="422">i = i + 2</text>
            <path class="fa" d="M104 421H34V258H96" marker-end="url(#even6-ah)"/>
            <path class="fa" d="M242 258H330V454" marker-end="url(#even6-ah)"/>
            <text class="yn" x="266" y="246">না</text>
            <path class="fs" d="M268 456H416L392 498H244Z"/><text x="330" y="478">Sum প্রিন্ট</text>
            <path class="fa" d="M330 498V518" marker-end="url(#even6-ah)"/>
            <rect class="fs" x="270" y="520" width="120" height="40" rx="20"/><text x="330" y="541">শেষ</text>
          </svg>
          <figcaption>চিত্র: ২ + ৪ + ৬ + … + N-এর যোগফল নির্ণয়ের ফ্লোচার্ট</figcaption>
        </figure>
        <table class="truth trace"><thead><tr><th>i</th><th>Sum = Sum + i</th></tr></thead><tbody><tr><td>2</td><td>2</td></tr><tr><td>4</td><td>6</td></tr><tr><td>6</td><td>12</td></tr><tr><td>8</td><td>20</td></tr><tr><td>10</td><td>30</td></tr><tr><td>12</td><td>i ≤ 10 মিথ্যা, থামি</td></tr></tbody></table>
        <p class="final"><b>উদাহরণ</b>N = ১০ হলে Sum = ৩০; N = ১০০ দিলে ২৫৫০।</p>
        <h4 class="sub-h" id="p-fact"><span>৭.৪</span><span>ফ্যাক্টরিয়াল: ১ × ২ × ৩ × … × N</span></h4>
        <ol class="algo">
          <li>শুরু।</li>
          <li>একটি ধনাত্মক পূর্ণসংখ্যা N ইনপুট নিই।</li>
          <li>F = 1, i = 1 ধরি।</li>
          <li>i ≤ N না হলে ধাপ ৭-এ যাই।</li>
          <li>F = F × i।</li>
          <li>i = i + 1 করে ধাপ ৪-এ ফিরে যাই।</li>
          <li>F প্রিন্ট করি; এটিই N! (N ফ্যাক্টরিয়াল)।</li>
          <li>শেষ।</li>
        </ol>
        <figure class="fig flow">
          <svg viewBox="0 0 430 570" role="img" aria-label="ফ্লোচার্ট: শুরু; N ইনপুট; F = 1, i = 1; i ছোট বা সমান N? হ্যাঁ হলে F = F গুণ i, i = i + 1, তারপর আবার যাচাই; না হলে F প্রিন্ট; শেষ।">
            <defs><marker id="fact6-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
            <rect class="fs" x="110" y="10" width="120" height="40" rx="20"/><text x="170" y="31">শুরু</text>
            <path class="fa" d="M170 50V76" marker-end="url(#fact6-ah)"/>
            <path class="fs" d="M116 78H248L224 120H92Z"/><text x="170" y="100">N ইনপুট</text>
            <path class="fa" d="M170 120V146" marker-end="url(#fact6-ah)"/>
            <rect class="fs" x="91" y="148" width="158" height="42"/><text x="170" y="170">F = 1, i = 1</text>
            <path class="fa" d="M170 190V216" marker-end="url(#fact6-ah)"/>
            <path class="fs fd" d="M170 218L242 258L170 298L98 258Z"/><text x="170" y="259">i ≤ N ?</text>
            <path class="fa" d="M170 298V328" marker-end="url(#fact6-ah)"/>
            <text class="yn" x="192" y="313">হ্যাঁ</text>
            <rect class="fs" x="104" y="330" width="132" height="42"/><text x="170" y="352">F = F × i</text>
            <path class="fa" d="M170 372V398" marker-end="url(#fact6-ah)"/>
            <rect class="fs" x="104" y="400" width="132" height="42"/><text x="170" y="422">i = i + 1</text>
            <path class="fa" d="M104 421H34V258H96" marker-end="url(#fact6-ah)"/>
            <path class="fa" d="M242 258H330V454" marker-end="url(#fact6-ah)"/>
            <text class="yn" x="266" y="246">না</text>
            <path class="fs" d="M276 456H408L384 498H252Z"/><text x="330" y="478">F প্রিন্ট</text>
            <path class="fa" d="M330 498V518" marker-end="url(#fact6-ah)"/>
            <rect class="fs" x="270" y="520" width="120" height="40" rx="20"/><text x="330" y="541">শেষ</text>
          </svg>
          <figcaption>চিত্র: ১ × ২ × ৩ × … × N (ফ্যাক্টরিয়াল) নির্ণয়ের ফ্লোচার্ট</figcaption>
        </figure>
        <table class="truth trace"><thead><tr><th>i</th><th>F = F × i</th></tr></thead><tbody><tr><td>1</td><td>1</td></tr><tr><td>2</td><td>2</td></tr><tr><td>3</td><td>6</td></tr><tr><td>4</td><td>24</td></tr><tr><td>5</td><td>120</td></tr><tr><td>6</td><td>i ≤ 5 মিথ্যা, থামি</td></tr></tbody></table>
        <p class="final"><b>উদাহরণ</b>N = ৫ হলে F = ১২০, অর্থাৎ ৫! = ১২০।</p>
        <p class="prose">গুণফলের চলক শুরুতে <b>১</b>, ০ নয়; ০ দিয়ে শুরু করলে যেকোনো কিছু গুণ করলেও ০-ই থাকবে।</p>
        <h4 class="sub-h" id="p-gcd"><span>৭.৫</span><span>দুটি সংখ্যার গ.সা.গু</span></h4>
        <ol class="algo">
          <li>শুরু।</li>
          <li>দুটি ধনাত্মক পূর্ণসংখ্যা a ও b ইনপুট নিই।</li>
          <li>b ≠ 0 না হলে ধাপ ৬-এ যাই।</li>
          <li>r = a mod b (a-কে b দিয়ে ভাগের ভাগশেষ)।</li>
          <li>a = b, b = r করে ধাপ ৩-এ ফিরে যাই।</li>
          <li>a প্রিন্ট করি; এটিই গ.সা.গু।</li>
          <li>শেষ।</li>
        </ol>
        <figure class="fig flow">
          <svg viewBox="0 0 430 500" role="img" aria-label="ফ্লোচার্ট: শুরু; a ও b ইনপুট; b শূন্য নয়? হ্যাঁ হলে r = a mod b, তারপর a = b ও b = r, তারপর আবার যাচাই; না হলে a প্রিন্ট; শেষ।">
            <defs><marker id="gcd6-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
            <rect class="fs" x="110" y="10" width="120" height="40" rx="20"/><text x="170" y="31">শুরু</text>
            <path class="fa" d="M170 50V76" marker-end="url(#gcd6-ah)"/>
            <path class="fs" d="M113 78H251L227 120H89Z"/><text x="170" y="100">a, b ইনপুট</text>
            <path class="fa" d="M170 120V146" marker-end="url(#gcd6-ah)"/>
            <path class="fs fd" d="M170 148L242 188L170 228L98 188Z"/><text x="170" y="189">b ≠ 0 ?</text>
            <path class="fa" d="M170 228V258" marker-end="url(#gcd6-ah)"/>
            <text class="yn" x="192" y="243">হ্যাঁ</text>
            <rect class="fs" x="96" y="260" width="148" height="42"/><text x="170" y="282">r = a mod b</text>
            <path class="fa" d="M170 302V328" marker-end="url(#gcd6-ah)"/>
            <rect class="fs" x="91" y="330" width="158" height="42"/><text x="170" y="352">a = b, b = r</text>
            <path class="fa" d="M91 351H34V188H96" marker-end="url(#gcd6-ah)"/>
            <path class="fa" d="M242 188H330V384" marker-end="url(#gcd6-ah)"/>
            <text class="yn" x="266" y="176">না</text>
            <path class="fs" d="M276 386H408L384 428H252Z"/><text x="330" y="408">a প্রিন্ট</text>
            <path class="fa" d="M330 428V448" marker-end="url(#gcd6-ah)"/>
            <rect class="fs" x="270" y="450" width="120" height="40" rx="20"/><text x="330" y="471">শেষ</text>
          </svg>
          <figcaption>চিত্র: দুটি সংখ্যার গ.সা.গু নির্ণয়ের ফ্লোচার্ট (ইউক্লিডের ভাগ পদ্ধতি)</figcaption>
        </figure>
        <table class="truth trace"><thead><tr><th>a</th><th>b</th><th>r = a mod b</th></tr></thead><tbody><tr><td>84</td><td>36</td><td>12</td></tr><tr><td>36</td><td>12</td><td>0</td></tr><tr><td>12</td><td>0</td><td>থামি</td></tr></tbody></table>
        <p class="final"><b>উদাহরণ</b>৮৪ ও ৩৬-এর গ.সা.গু = ১২।</p>
        <p class="prose">ইউক্লিডের ভাগ পদ্ধতি: ভাজককে নতুন ভাজ্য আর ভাগশেষকে নতুন ভাজক করে ভাগ চলতে থাকে; ভাগশেষ ০ হলে শেষ ভাজকটিই গ.সা.গু। এই প্রশ্নের পূর্ণ নমুনা উত্তর আছে <a href="#/written/18-school/q6">১৮তম লিখিত প্রশ্ন ৬-এ</a>।</p>
        <h4 class="sub-h" id="p-minN"><span>৭.৬</span><span>N টি সংখ্যার মধ্যে ছোট সংখ্যা</span></h4>
        <ol class="algo">
          <li>শুরু।</li>
          <li>কয়টি সংখ্যা, সেই N ইনপুট নিই।</li>
          <li>প্রথম সংখ্যা x ইনপুট নিয়ে Min = x, i = 2 ধরি।</li>
          <li>i ≤ N না হলে ধাপ ৮-এ যাই।</li>
          <li>পরের সংখ্যা x ইনপুট নিই।</li>
          <li>x &lt; Min হলে Min = x।</li>
          <li>i = i + 1 করে ধাপ ৪-এ ফিরে যাই।</li>
          <li>Min প্রিন্ট করি।</li>
          <li>শেষ।</li>
        </ol>
        <figure class="fig flow">
          <svg viewBox="0 0 440 822" role="img" aria-label="ফ্লোচার্ট: শুরু; N ইনপুট; প্রথম সংখ্যা x ইনপুট; Min = x, i = 2; i ছোট বা সমান N? হ্যাঁ হলে x ইনপুট, x ছোট Min-এর চেয়ে হলে Min = x; তারপর i = i + 1 করে আবার যাচাই; না হলে Min প্রিন্ট; শেষ।">
            <defs><marker id="minN6-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path class="ah" d="M0 0L10 5L0 10z"/></marker></defs>
            <rect class="fs" x="100" y="10" width="120" height="40" rx="20"/><text x="160" y="31">শুরু</text>
            <path class="fa" d="M160 50V76" marker-end="url(#minN6-ah)"/>
            <path class="fs" d="M106 78H238L214 120H82Z"/><text x="160" y="100">N ইনপুট</text>
            <path class="fa" d="M160 120V146" marker-end="url(#minN6-ah)"/>
            <path class="fs" d="M106 148H238L214 190H82Z"/><text x="160" y="170">x ইনপুট</text>
            <path class="fa" d="M160 190V216" marker-end="url(#minN6-ah)"/>
            <rect class="fs" x="72" y="218" width="176" height="42"/><text x="160" y="240">Min = x, i = 2</text>
            <path class="fa" d="M160 260V286" marker-end="url(#minN6-ah)"/>
            <path class="fs fd" d="M160 288L232 328L160 368L88 328Z"/><text x="160" y="329">i ≤ N ?</text>
            <path class="fa" d="M160 368V396" marker-end="url(#minN6-ah)"/>
            <text class="yn" x="182" y="382">হ্যাঁ</text>
            <path class="fs" d="M106 398H238L214 440H82Z"/><text x="160" y="420">x ইনপুট</text>
            <path class="fa" d="M160 440V466" marker-end="url(#minN6-ah)"/>
            <path class="fs fd" d="M160 468L232 508L160 548L88 508Z"/><text x="160" y="509">x &lt; Min ?</text>
            <path class="fa" d="M160 548V576" marker-end="url(#minN6-ah)"/>
            <text class="yn" x="182" y="562">হ্যাঁ</text>
            <rect class="fs" x="94" y="578" width="132" height="42"/><text x="160" y="600">Min = x</text>
            <path class="fa" d="M160 620V646" marker-end="url(#minN6-ah)"/>
            <rect class="fs" x="94" y="648" width="132" height="42"/><text x="160" y="670">i = i + 1</text>
            <path class="fa" d="M232 508H272V669H228" marker-end="url(#minN6-ah)"/>
            <text class="yn" x="252" y="496">না</text>
            <path class="fa" d="M94 669H30V328H86" marker-end="url(#minN6-ah)"/>
            <path class="fa" d="M232 328H345V706" marker-end="url(#minN6-ah)"/>
            <text class="yn" x="254" y="316">না</text>
            <path class="fs" d="M283 708H431L407 750H259Z"/><text x="345" y="730">Min প্রিন্ট</text>
            <path class="fa" d="M345 750V770" marker-end="url(#minN6-ah)"/>
            <rect class="fs" x="285" y="772" width="120" height="40" rx="20"/><text x="345" y="793">শেষ</text>
          </svg>
          <figcaption>চিত্র: N টি সংখ্যার মধ্যে ছোট সংখ্যা নির্ণয়ের ফ্লোচার্ট</figcaption>
        </figure>
        <table class="truth trace"><thead><tr><th>ক্রম</th><th>x</th><th>x &lt; Min ?</th><th>Min</th></tr></thead><tbody><tr><td>১</td><td>7</td><td>শুরুর মান</td><td>7</td></tr><tr><td>২</td><td>3</td><td>হ্যাঁ</td><td>3</td></tr><tr><td>৩</td><td>9</td><td>না</td><td>3</td></tr><tr><td>৪</td><td>1</td><td>হ্যাঁ</td><td>1</td></tr><tr><td>৫</td><td>4</td><td>না</td><td>1</td></tr></tbody></table>
        <p class="final"><b>উদাহরণ</b>৭, ৩, ৯, ১, ৪ (N = ৫) হলে Min = ১।</p>
        <p class="prose">বড় সংখ্যা চাইলে Min-এর জায়গায় Max আর &lt;-এর জায়গায় &gt;। ৩য় পরীক্ষায় ঠিক এই প্রশ্নটি এসেছিল।</p>
        <div data-prev="loop"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="64-75,93-100" data-name="লুপের সমস্যা">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch06/q64">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>নম্বর পেতে</b>লুপের ফ্লোচার্টে পেছনে ফেরা তীরটি স্পষ্ট আঁকুন, আর ছোট একটি মানে (N = ৫) ধাপগুলো চালিয়ে ছকে দেখান।</p>
        <p><b>বারবার এসেছে</b>১২টি পরীক্ষায়: ধারার যোগফল সবচেয়ে বেশি, তারপর ফ্যাক্টরিয়াল ও গ.সা.গু।</p>
      </aside>
    </section>

    <section class="blk" id="mistakes">
      <p class="blk-no">শেষে</p>
      <div class="body">
        <h2>যেসব ভুল হয়</h2>
        <div class="fixes">
          <div class="fix"><p class="was">শুরু ও শেষের জন্য আয়তক্ষেত্র</p><p class="is">শুরু ও শেষ: ডিম্বাকৃতি</p><p class="why">আয়তক্ষেত্র শুধু হিসাব বা কাজের জন্য।</p></div>
          <div class="fix"><p class="was">ইনপুট-আউটপুটের জন্য আয়তক্ষেত্র</p><p class="is">ইনপুট ও আউটপুট: সামান্তরিক</p><p class="why">“A ইনপুট”, “Sum প্রিন্ট” দুটোই সামান্তরিকে।</p></div>
          <div class="fix"><p class="was">রম্বস থেকে তীরে কিছু না লেখা</p><p class="is">দুই তীরে “হ্যাঁ” ও “না”</p><p class="why">না লিখলে কোন শর্তে কোন পথ, বোঝা যায় না।</p></div>
          <div class="fix"><p class="was">লুপে i বাড়াতে ভুলে যাওয়া</p><p class="is">প্রতি ঘুরে i = i + 1 (বা + 2)</p><p class="why">না বাড়ালে শর্ত কখনো মিথ্যা হয় না; লুপ শেষ হয় না।</p></div>
          <div class="fix"><p class="was">গুণফলের চলক F = 0</p><p class="is">F = 1, যোগফলের চলক Sum = 0</p><p class="why">০ দিয়ে গুণ করলে সবসময় ০।</p></div>
          <div class="fix"><p class="was">অ্যালগরিদমে “শুরু” আর “শেষ” বাদ</p><p class="is">প্রথম ধাপ শুরু, শেষ ধাপ শেষ</p><p class="why">সসীমতা বোঝাতে পরীক্ষক এ দুটি দেখতে চান।</p></div>
          <div class="fix"><p class="was">চলকের নাম test exam বা 2nd</p><p class="is">test_exam, second</p><p class="why">ফাঁকা স্থান বা শুরুতে অঙ্ক চলে না।</p></div>
        </div>
      </div>
    </section>

    <section class="blk" id="practice">
      <p class="blk-no">অনুশীলন</p>
      <div class="body">
        <h2>এবার নিজে করুন</h2>
        <p class="prose">এই অধ্যায়ের সব MCQ উত্তর ও ব্যাখ্যাসহ পড়ুন, অথবা সময় ধরে পরীক্ষা দিন। লিখিত অংশের জন্য অংশ ৫ থেকে ৭-এর প্রতিটি সমস্যার অ্যালগরিদম লিখে, পাশে ফ্লোচার্ট এঁকে, তারপর এখানে মিলিয়ে নিন।</p>
        <p class="note-acts"><a class="btn" href="#/mcq/ch06">অধ্যায়ের MCQ পড়ুন <span aria-hidden="true">→</span></a><a class="btn line" href="#/setup/ch06">এই অধ্যায়ে পরীক্ষা দিন</a></p>
        <ul class="note-links">
          <li><a href="#/written/18-school/q6">গ.সা.গু-এর ফ্লোচার্ট ও অ্যালগরিদম</a><span>১৮তম লিখিত · প্রশ্ন ৬</span></li>
          <li><a href="#/written/17-school/q6">প্রোগ্রাম ফ্লোচার্টের প্রতীক</a><span>১৭তম লিখিত · প্রশ্ন ৬ (অথবা)</span></li>
          <li><a href="#/written/13-school/q5">অ্যালগরিদম ও ফ্লোচার্টের পার্থক্য; তিন সংখ্যার ছোট</a><span>১৩তম লিখিত · প্রশ্ন ৫ (অথবা)</span></li>
        </ul>
      </div>
    </section>

  </div>
</article>
`;
