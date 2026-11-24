/* অধ্যায় ৩ · উপাত্ত উপস্থাপন — the chapter note (#/note/data-representation), loaded only when the note is opened.
   The text between the backticks is plain HTML: edit it as HTML. Never type a backtick or a dollar sign followed by {
   inside it; String.raw keeps every backslash (the DOS paths) as written. */
(window.ICT_NOTES = window.ICT_NOTES || {}).ch03 = String.raw`
<article class="note">
  <header class="doc-head wrap">
    <p class="crumb"><a href="#/">সূচিপত্র</a><i aria-hidden="true">/</i>অধ্যায় ৩</p>
    <h1>উপাত্ত উপস্থাপন</h1>
    <p class="doc-lede">উপাত্ত ও তথ্য, উপাত্ত প্রক্রিয়াকরণ, আর কম্পিউটারে অঙ্ক ও বর্ণ রাখার কোড: BCD, ASCII, EBCDIC। প্রতিটি অংশের সঙ্গে ২০০৬ থেকে ২০২৪ পর্যন্ত লিখিত পরীক্ষায় সেই অংশ থেকে আসা সব প্রশ্ন।</p>
    <p class="doc-meta"><span>অংশ <b>৪</b></span><span>বিগত লিখিত প্রশ্ন <b id="prevCount"></b></span><span>MCQ <b id="noteMcq"></b></span><span>পড়তে <b>২০ মিনিট</b></span></p>
  </header>

  <div class="secbar"><div class="wrap">
    <nav aria-label="এই নোটের অংশ" id="secnav">
      <a href="#/note/data-representation/map">মানচিত্র</a>
      <a href="#/note/data-representation/data">উপাত্ত ও তথ্য</a>
      <a href="#/note/data-representation/proc">উপাত্ত প্রক্রিয়াকরণ</a>
      <a href="#/note/data-representation/code">কোড ও BCD</a>
      <a href="#/note/data-representation/ascii">ASCII ও EBCDIC</a>
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
        <p class="tip"><b>সবচেয়ে বেশি এসেছে:</b> <span id="prevTop"></span>। “উপাত্ত ও তথ্যের পার্থক্য” আর “BCD ও বাইনারির পার্থক্য” প্রায় নিশ্চিত ৫ নম্বর; ছক দুটি মুখস্থ রাখুন।</p>
      </div>
      <aside class="side">
        <p><b>এই অধ্যায়ের MCQ</b>প্রতিটি অংশের শেষে সেই অংশের MCQ অনুশীলন; পুরো অধ্যায়ের প্রশ্ন উত্তর ও ব্যাখ্যাসহ <a href="#/mcq/ch03">তালিকায়</a>।</p>
      </aside>
    </section>

    <section class="blk" id="data" data-topic="data" data-short="উপাত্ত ও তথ্য">
      <p class="blk-no">অংশ ১<small>সিলেবাস গ.১</small></p>
      <div class="body">
        <h2>উপাত্ত ও তথ্য</h2>
        <p class="defn"><b>উপাত্ত (Data)</b>কোনো বিষয়ে সংগ্রহ করা অপ্রক্রিয়াজাত তথ্য, সংখ্যা, শব্দ, ছবি বা প্রতীক, যা একা একা কোনো পূর্ণ অর্থ বা সিদ্ধান্ত দেয় না। যেমন: একটি শ্রেণির ৪০ জন শিক্ষার্থীর প্রাপ্ত নম্বর।</p>
        <p class="defn"><b>তথ্য (Information)</b>উপাত্ত প্রক্রিয়া করে (সাজিয়ে, হিসাব করে, বিশ্লেষণ করে) পাওয়া অর্থবহ ফল, যা সিদ্ধান্ত নিতে কাজে লাগে। যেমন: শ্রেণির গড় নম্বর ৭২, সর্বোচ্চ নম্বর পেয়েছে রহিম, পাসের হার ৯৫%।</p>
        <ol class="chain" aria-label="উপাত্ত থেকে প্রক্রিয়াকরণের মাধ্যমে তথ্য">
          <li><b>উপাত্ত</b><small>৬৫, ৭২, ৮০, ৪৮ …</small></li>
          <li><b>প্রক্রিয়াকরণ</b><small>সাজানো, যোগ, গড়</small></li>
          <li><b>তথ্য</b><small>গড় ৬৬.২৫, সর্বোচ্চ ৮০</small></li>
        </ol>

        <h3 class="sub"><span>১.১</span>উপাত্ত ও তথ্যের পার্থক্য</h3>
        <table class="rt cmp">
          <thead><tr><th>বিষয়</th><th>উপাত্ত</th><th>তথ্য</th></tr></thead>
          <tbody>
            <tr><td>প্রকৃতি</td><td>কাঁচামাল, অপ্রক্রিয়াজাত</td><td>প্রক্রিয়াজাত ফল</td></tr>
            <tr><td>অর্থ</td><td>একা একা অর্থবহ নাও হতে পারে</td><td>সবসময় অর্থবহ</td></tr>
            <tr><td>সংগঠন</td><td>এলোমেলো, অসংগঠিত</td><td>সাজানো, সংগঠিত</td></tr>
            <tr><td>নির্ভরতা</td><td>তথ্যের ওপর নির্ভর করে না</td><td>উপাত্তের ওপর নির্ভর করে</td></tr>
            <tr><td>সিদ্ধান্ত</td><td>সরাসরি সিদ্ধান্ত নেওয়া যায় না</td><td>সিদ্ধান্ত নিতে সাহায্য করে</td></tr>
            <tr><td>কম্পিউটারে</td><td>ইনপুট</td><td>আউটপুট</td></tr>
            <tr><td>উদাহরণ</td><td>শিক্ষার্থীদের আলাদা আলাদা নম্বর</td><td>ফলাফলের তালিকা, গড়, মেধাক্রম</td></tr>
          </tbody>
        </table>

        <h3 class="sub"><span>১.২</span>দুইয়ের মধ্যে সুনির্দিষ্ট সীমারেখা টানা যায় না কেন</h3>
        <p class="prose">একই জিনিস একজনের কাছে তথ্য, আরেকজনের কাছে উপাত্ত। একটি স্কুলের পাসের হার স্কুলটির কাছে প্রক্রিয়াজাত তথ্য; কিন্তু শিক্ষা বোর্ড সব স্কুলের পাসের হার নিয়ে আবার প্রক্রিয়া করে জেলার ফল বের করে, তখন সেটিই বোর্ডের কাছে উপাত্ত। এক ধাপের আউটপুট পরের ধাপের ইনপুট হয়, তাই কোনটি উপাত্ত আর কোনটি তথ্য, তা নির্ভর করে কে, কী উদ্দেশ্যে ব্যবহার করছে তার ওপর।</p>

        <div data-prev="data"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="1-7,9,10,74-76" data-name="উপাত্ত ও তথ্য">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch03/q1">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>নম্বর পেতে</b>পার্থক্যের প্রশ্নে অন্তত পাঁচটি সারির ছক দিন, আর শেষে একটি উদাহরণে দেখান কীভাবে উপাত্ত তথ্যে বদলায়।</p>
        <p><b>বারবার এসেছে</b>নয়টি পরীক্ষায় উপাত্ত ও তথ্যের পার্থক্য বা সংজ্ঞা এসেছে; ১৬তম পরীক্ষায় একই প্রশ্ন দুবার।</p>
      </aside>
    </section>

    <section class="blk" id="proc" data-topic="proc" data-short="উপাত্ত প্রক্রিয়াকরণ">
      <p class="blk-no">অংশ ২<small>সিলেবাস গ.১</small></p>
      <div class="body">
        <h2>উপাত্ত প্রক্রিয়াকরণ</h2>
        <p class="defn"><b>সংজ্ঞা</b>নির্দিষ্ট লক্ষ্যে উপাত্ত সংগ্রহ করে তা সাজানো, হিসাব, তুলনা ও বিশ্লেষণের মাধ্যমে অর্থবহ তথ্যে রূপান্তর করার পুরো প্রক্রিয়াকে উপাত্ত প্রক্রিয়াকরণ (Data Processing) বলে।</p>

        <h3 class="sub"><span>২.১</span>প্রক্রিয়াকরণের ধাপ</h3>
        <ol class="algo">
          <li><b>সংগ্রহ:</b> জরিপ, ফরম, সেন্সর বা নথি থেকে প্রয়োজনীয় উপাত্ত জোগাড় করা।</li>
          <li><b>প্রস্তুতি ও যাচাই:</b> ভুল, অসম্পূর্ণ বা দ্বৈত উপাত্ত বাদ দিয়ে নির্দিষ্ট রূপে সাজানো।</li>
          <li><b>ইনপুট:</b> উপাত্ত কম্পিউটারে প্রবেশ করানো (কিবোর্ড, স্ক্যানার, OMR ইত্যাদি দিয়ে)।</li>
          <li><b>প্রক্রিয়াকরণ:</b> শ্রেণিবিন্যাস, ক্রমানুসারে সাজানো (sorting), হিসাব (যোগ, গড়), তুলনা ও সারসংক্ষেপ তৈরি।</li>
          <li><b>আউটপুট:</b> ফল প্রতিবেদন, ছক বা লেখচিত্র আকারে উপস্থাপন।</li>
          <li><b>সংরক্ষণ:</b> উপাত্ত ও ফল ভবিষ্যতে ব্যবহারের জন্য রেখে দেওয়া।</li>
        </ol>

        <h3 class="sub"><span>২.২</span>প্রক্রিয়াকরণের পদ্ধতি</h3>
        <ul class="pts">
          <li><b>ব্যবহৃত উপায় অনুসারে:</b> ম্যানুয়াল (হাতে, কাগজ-কলমে), যান্ত্রিক (ক্যালকুলেটর, টাইপরাইটারের মতো যন্ত্রে) আর ইলেকট্রনিক (কম্পিউটারে)।</li>
          <li><b>ব্যাচ প্রসেসিং:</b> একই ধরনের অনেক উপাত্ত জমিয়ে নির্দিষ্ট সময়ে একসঙ্গে প্রক্রিয়া। যেমন: মাসশেষে বেতন, বিদ্যুৎ বিল।</li>
          <li><b>অনলাইন প্রসেসিং:</b> উপাত্ত প্রবেশের সঙ্গে সঙ্গে সরাসরি সংযুক্ত কম্পিউটারে প্রক্রিয়া। যেমন: ATM লেনদেন, অনলাইনে টিকিট কাটা।</li>
          <li><b>রিয়েল-টাইম প্রসেসিং:</b> নির্দিষ্ট সময়সীমার মধ্যে ফল দিতেই হবে। যেমন: বিমান চলাচল নিয়ন্ত্রণ, ক্ষেপণাস্ত্র নিয়ন্ত্রণ।</li>
          <li><b>টাইম শেয়ারিং:</b> একটি কম্পিউটারের সময় ছোট ছোট ভাগে অনেক ব্যবহারকারীকে পালাক্রমে দেওয়া।</li>
          <li><b>ডিস্ট্রিবিউটেড প্রসেসিং:</b> নেটওয়ার্কে যুক্ত একাধিক কম্পিউটারে কাজ ভাগ করে প্রক্রিয়া।</li>
        </ul>

        <h3 class="sub"><span>২.৩</span>ম্যানুয়াল ও কম্পিউটারভিত্তিক প্রক্রিয়াকরণ</h3>
        <table class="rt cmp">
          <thead><tr><th>বিষয়</th><th>ম্যানুয়াল</th><th>কম্পিউটারভিত্তিক</th></tr></thead>
          <tbody>
            <tr><td>গতি</td><td>ধীর</td><td>অত্যন্ত দ্রুত</td></tr>
            <tr><td>নির্ভুলতা</td><td>ভুলের সম্ভাবনা বেশি</td><td>সঠিক ইনপুটে নির্ভুল</td></tr>
            <tr><td>বিপুল উপাত্ত</td><td>সামলানো কঠিন, খরচ বেশি</td><td>সহজে সামলায়, খরচ কম</td></tr>
            <tr><td>সংরক্ষণ ও খোঁজা</td><td>কাগজে, খুঁজতে সময় লাগে</td><td>ডিস্কে, মুহূর্তে খুঁজে পাওয়া যায়</td></tr>
            <tr><td>জনবল</td><td>বেশি লোক লাগে</td><td>কম লোক লাগে</td></tr>
            <tr><td>শুরুর খরচ</td><td>কম</td><td>যন্ত্র ও সফটওয়্যারে বেশি</td></tr>
          </tbody>
        </table>
        <p class="prose">উপাত্ত প্রক্রিয়াকরণে মানুষ বিচার-বুদ্ধি দিয়ে নতুন পরিস্থিতিতে সিদ্ধান্ত নিতে পারে, কিন্তু ধীর ও ক্লান্তিপ্রবণ; কম্পিউটার দ্রুত, নির্ভুল ও ক্লান্তিহীন, কিন্তু প্রোগ্রামের বাইরে কিছু ভাবতে পারে না। তুলনার পুরো ছক আছে <a href="#/note/computer-basics/def">অধ্যায় ১ · মানুষ ও কম্পিউটার</a> অংশে।</p>

        <div data-prev="proc"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="8,11-20,29,30,77-83" data-name="উপাত্ত প্রক্রিয়াকরণ">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch03/q11">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>ধাপ লিখতে</b>ছয়টি ধাপ ক্রম ধরে লিখুন, প্রতিটির পাশে একটি উদাহরণ (যেমন পরীক্ষার ফল তৈরি) দিলে উত্তর গোছানো দেখায়।</p>
        <p><b>অপারেটিং সিস্টেমের সঙ্গে</b>ব্যাচ, টাইম শেয়ারিং ও রিয়েল-টাইম অপারেটিং সিস্টেমের প্রকারভেদেও আসে (অধ্যায় ৫)।</p>
      </aside>
    </section>

    <section class="blk" id="code" data-topic="code" data-short="কোড ও BCD">
      <p class="blk-no">অংশ ৩<small>সিলেবাস গ.২</small></p>
      <div class="body">
        <h2>কোড ও BCD</h2>
        <p class="defn"><b>কোড</b>কম্পিউটারে প্রতিটি অঙ্ক, বর্ণ ও চিহ্নকে ০ ও ১-এর একটি নির্দিষ্ট বিন্যাস দিয়ে প্রকাশ করার নিয়মকে কোড বলে। কোড না থাকলে কিবোর্ডে চাপা “A” কম্পিউটার বুঝত না; প্রতিটি বর্ণের জন্য ঠিক করা একটি বিট-বিন্যাসই কম্পিউটারের কাছে সেই বর্ণ।</p>
        <figure class="fig">
          <ul class="tree">
            <li><span class="t-root">কোড</span>
              <ul>
                <li><span>সংখ্যাসূচক <small>শুধু অঙ্ক</small></span><span class="leaf">BCD (8421) · Excess-3 · Gray কোড</span></li>
                <li><span>আলফানিউমেরিক <small>অঙ্ক, বর্ণ, চিহ্ন</small></span><span class="leaf">ASCII · EBCDIC · ইউনিকোড</span></li>
              </ul>
            </li>
          </ul>
          <figcaption>চিত্র: কোডের শ্রেণিবিভাগ</figcaption>
        </figure>

        <h3 class="sub"><span>৩.১</span>BCD (Binary Coded Decimal)</h3>
        <p class="prose">দশমিক সংখ্যার <em>প্রতিটি অঙ্ককে আলাদাভাবে</em> ৪ বিটের বাইনারিতে লেখার কোড। চারটি বিটের ওজন বাঁ থেকে ৮, ৪, ২, ১; তাই একে 8421 কোডও বলে। ৪ বিটে ১৬টি বিন্যাস হয়, কিন্তু BCD-তে লাগে শুধু ১০টি (0000 থেকে 1001); 1010 থেকে 1111 অবৈধ।</p>
        <div class="g16 g10" aria-label="০ থেকে ৯-এর BCD: 0000, 0001, 0010, 0011, 0100, 0101, 0110, 0111, 1000, 1001">
          <div><b>০</b><code>0000</code></div><div><b>১</b><code>0001</code></div><div><b>২</b><code>0010</code></div><div><b>৩</b><code>0011</code></div><div><b>৪</b><code>0100</code></div>
          <div><b>৫</b><code>0101</code></div><div><b>৬</b><code>0110</code></div><div><b>৭</b><code>0111</code></div><div><b>৮</b><code>1000</code></div><div><b>৯</b><code>1001</code></div>
        </div>
        <p class="caption">দশমিক ০ থেকে ৯ (ওপরে) ও তার BCD (নিচে)।</p>
        <div class="groups" role="img" aria-label="২৩৯-এর BCD: ২ মানে 0010, ৩ মানে 0011, ৯ মানে 1001">
          <span><code>0010</code><b>2</b></span><span><code>0011</code><b>3</b></span><span><code>1001</code><b>9</b></span>
          <p class="work-res">(239)<sub>10</sub> = (<b>0010 0011 1001</b>)<sub>BCD</sub></p>
        </div>
        <p class="prose">একইভাবে (27)<sub>10</sub> = (0010 0111)<sub>BCD</sub>, (129)<sub>10</sub> = (0001 0010 1001)<sub>BCD</sub>, (925)<sub>10</sub> = (1001 0010 0101)<sub>BCD</sub>।</p>

        <h3 class="sub"><span>৩.২</span>BCD-র প্রকারভেদ</h3>
        <ul class="pts">
          <li><b>বিটসংখ্যা অনুসারে:</b> ৪ বিট BCD, যা শুধু ০–৯ অঙ্ক প্রকাশ করে; আর ৬ বিট BCD, যা দুটি জোন বিট যোগ করে ২<sup>৬</sup> = ৬৪টি অঙ্ক, বড় হাতের বর্ণ ও চিহ্ন প্রকাশ করে। ৬ বিটকে ৮ বিটে বাড়িয়েই তৈরি হয় EBCDIC।</li>
          <li><b>ওজন অনুসারে:</b> ওজনযুক্ত (8421, 2421) আর ওজনবিহীন (Excess-3, যেখানে প্রতিটি অঙ্কের সঙ্গে ৩ যোগ করে লেখা হয়)।</li>
        </ul>

        <h3 class="sub"><span>৩.৩</span>BCD ও বাইনারির পার্থক্য</h3>
        <table class="rt cmp">
          <thead><tr><th>বিষয়</th><th>BCD</th><th>বাইনারি</th></tr></thead>
          <tbody>
            <tr><td>রূপান্তর</td><td>প্রতিটি দশমিক অঙ্ক আলাদা ৪ বিটে</td><td>পুরো সংখ্যা একসঙ্গে</td></tr>
            <tr><td>বিট সংখ্যা</td><td>বেশি লাগে (৩৯-এ ৮ বিট)</td><td>কম লাগে (৩৯-এ ৬ বিট)</td></tr>
            <tr><td>বৈধ বিন্যাস</td><td>৪ বিটের ১৬টির মধ্যে ১০টি</td><td>সব বিন্যাসই বৈধ</td></tr>
            <tr><td>গাণিতিক কাজ</td><td>জটিল; ঘরের যোগফল ৯ ছাড়ালে 0110 যোগ করে সংশোধন</td><td>সরাসরি</td></tr>
            <tr><td>দশমিকে পড়া</td><td>সহজ, প্রতি ৪ বিটে একটি অঙ্ক</td><td>পুরো হিসাব করতে হয়</td></tr>
            <tr><td>ব্যবহার</td><td>ক্যালকুলেটর, ডিজিটাল ঘড়ি, সেভেন-সেগমেন্ট ডিসপ্লে</td><td>কম্পিউটারের ভেতরের হিসাব</td></tr>
          </tbody>
        </table>
        <p class="prose">উদাহরণসহ পুরো উত্তর আছে <a href="#/written/18-school/q7">১৮তম লিখিত প্রশ্ন ৭-এ</a>।</p>

        <h3 class="sub"><span>৩.৪</span>বিট, নিবল, বাইট ও ওয়ার্ড</h3>
        <table class="rt cmp">
          <thead><tr><th>একক</th><th>কত বিট</th><th>কী বোঝায়</th></tr></thead>
          <tbody>
            <tr><td>বিট (Binary Digit)</td><td>১</td><td>০ অথবা ১; উপাত্তের ক্ষুদ্রতম একক</td></tr>
            <tr><td>নিবল</td><td>৪</td><td>অর্ধেক বাইট; একটি হেক্সাডেসিমাল বা BCD অঙ্ক</td></tr>
            <tr><td>বাইট</td><td>৮</td><td>সাধারণত একটি অক্ষর বা চিহ্ন</td></tr>
            <tr><td>ওয়ার্ড</td><td>৮, ১৬, ৩২ বা ৬৪</td><td>CPU একবারে যত বিট প্রক্রিয়া করে; CPU-র আর্কিটেকচারের ওপর নির্ভর করে</td></tr>
          </tbody>
        </table>
        <p class="prose">বড় এককগুলো ১০২৪ গুণ করে বাড়ে: ১০২৪ বাইট = ১ কিলোবাইট (KB), ১০২৪ KB = ১ মেগাবাইট (MB), তারপর GB ও TB। আর গ্রে কোডে পরপর দুটি সংখ্যার মধ্যে মাত্র একটি বিট বদলায়; এটি ওজনবিহীন সংখ্যাসূচক কোড, তাই হিসাবে নয়, সংকেত পাঠানোয় ব্যবহৃত হয়।</p>

        <div data-prev="code"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="21-28,31,32,37-40,44,45,58-67,84-85" data-name="কোড ও BCD">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch03/q21">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>ফাঁদ</b>(BCD)<sub>16</sub>-এর মতো প্রশ্নে BCD কোনো কোড নয়, হেক্সাডেসিমাল সংখ্যা: B, C, D তিনটি অঙ্ক। সেটি অধ্যায় ২-এর রূপান্তর।</p>
        <p><b>বারবার এসেছে</b>“BCD ও বাইনারির পার্থক্য” আটটি পরীক্ষায় এসেছে।</p>
      </aside>
    </section>

    <section class="blk" id="ascii" data-topic="ascii" data-short="ASCII ও EBCDIC">
      <p class="blk-no">অংশ ৪<small>সিলেবাস গ.৩–৪</small></p>
      <div class="body">
        <h2>ASCII, EBCDIC ও ইউনিকোড</h2>

        <h3 class="sub"><span>৪.১</span>ASCII</h3>
        <p class="prose">American Standard Code for Information Interchange। ১৯৬৩ সালে আমেরিকার মান সংস্থা (ANSI) তৈরি করে। এটি <em>৭ বিটের</em> কোড, তাই ২<sup>৭</sup> = ১২৮টি অক্ষর: ০–৩১ নিয়ন্ত্রণ অক্ষর, ৩২ ফাঁকা ঘর, ৪৮–৫৭ অঙ্ক ০–৯, ৬৫–৯০ A–Z, ৯৭–১২২ a–z। পরে ৮ বিটের বর্ধিত ASCII-তে ২৫৬টি অক্ষর হয়। পার্সোনাল কম্পিউটার ও ইন্টারনেটে সবচেয়ে বেশি ব্যবহৃত।</p>
        <table class="rt cmp">
          <thead><tr><th>অক্ষর</th><th>ASCII (দশমিক)</th><th>বাইনারি (৭ বিট)</th><th>হেক্সা</th></tr></thead>
          <tbody>
            <tr><td>A</td><td>৬৫</td><td class="m">100 0001</td><td class="m">41</td></tr>
            <tr><td>a</td><td>৯৭</td><td class="m">110 0001</td><td class="m">61</td></tr>
            <tr><td>0</td><td>৪৮</td><td class="m">011 0000</td><td class="m">30</td></tr>
            <tr><td>ফাঁকা ঘর</td><td>৩২</td><td class="m">010 0000</td><td class="m">20</td></tr>
          </tbody>
        </table>
        <p class="tip"><b>মনে রাখার কৌশল:</b> ছোট হাতের বর্ণ = বড় হাতের বর্ণ + ৩২। যেমন B = ৬৬, তাই b = ৯৮।</p>

        <h3 class="sub"><span>৪.২</span>EBCDIC</h3>
        <p class="prose">Extended Binary Coded Decimal Interchange Code। IBM তাদের মেইনফ্রেম (System/360) কম্পিউটারের জন্য ১৯৬০-এর দশকে তৈরি করে। এটি <em>৮ বিটের</em> কোড, তাই ২<sup>৮</sup> = ২৫৬টি অক্ষর। প্রতিটি অক্ষর দুই ভাগে: বাঁয়ের ৪ বিট জোন, ডানের ৪ বিট ডিজিট। যেমন A = 1100 0001 (C1), অঙ্ক 0 = 1111 0000 (F0), অঙ্ক ০–৯ = F0 থেকে F9।</p>

        <h3 class="sub"><span>৪.৩</span>ASCII ও EBCDIC-এর পার্থক্য</h3>
        <table class="rt cmp">
          <thead><tr><th>বিষয়</th><th>ASCII</th><th>EBCDIC</th></tr></thead>
          <tbody>
            <tr><td>পূর্ণরূপ</td><td>American Standard Code for Information Interchange</td><td>Extended Binary Coded Decimal Interchange Code</td></tr>
            <tr><td>বিট</td><td>৭ বিট (বর্ধিত রূপে ৮)</td><td>৮ বিট</td></tr>
            <tr><td>অক্ষর</td><td>১২৮ (বর্ধিত রূপে ২৫৬)</td><td>২৫৬</td></tr>
            <tr><td>তৈরি করে</td><td>ANSI</td><td>IBM</td></tr>
            <tr><td>ব্যবহার</td><td>পার্সোনাল কম্পিউটার, ইন্টারনেট</td><td>IBM মেইনফ্রেম</td></tr>
            <tr><td>বর্ণের ক্রম</td><td>A–Z পরপর, ফাঁক নেই</td><td>A–Z তিন ভাগে, মাঝে ফাঁক (I-এর পরে J লাফিয়ে)</td></tr>
            <tr><td>অঙ্ক ০–৯</td><td>৩০ থেকে ৩৯ (হেক্সা)</td><td>F0 থেকে F9 (হেক্সা)</td></tr>
          </tbody>
        </table>

        <h3 class="sub"><span>৪.৪</span>BCD ও EBCDIC</h3>
        <p class="prose">BCD মূলত ৪ বিটে শুধু অঙ্ক (৬ বিটে সর্বোচ্চ ৬৪টি অক্ষর) প্রকাশ করে; EBCDIC হলো BCD-র বর্ধিত ৮ বিটের রূপ, যাতে ২৫৬টি অঙ্ক, বড় ও ছোট হাতের বর্ণ, চিহ্ন ও নিয়ন্ত্রণ অক্ষর রাখা যায়। নামেই সম্পর্কটি আছে: Extended BCD।</p>

        <h3 class="sub"><span>৪.৫</span>ইউনিকোড</h3>
        <p class="prose">ASCII-তে শুধু ইংরেজি বর্ণ ধরে, বাংলা বা অন্য ভাষার জায়গা নেই। ইউনিকোড শুরুতে ১৬ বিটের (২<sup>১৬</sup> = ৬৫,৫৩৬টি অক্ষর) কোড, এখন ১১ লক্ষের বেশি অক্ষর রাখতে পারে; পৃথিবীর প্রায় সব ভাষা এতে আছে। বাংলা বর্ণের ইউনিকোড পরিসর U+0980 থেকে U+09FF। এর প্রথম ১২৮টি অক্ষর হুবহু ASCII-র মতো।</p>

        <div data-prev="ascii"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="33-36,41-43,46-57,68-73,86-88" data-name="ASCII ও EBCDIC">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch03/q33">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>পূর্ণরূপ লিখুন</b>প্রশ্নে প্রায়ই আসে: ASCII, EBCDIC, BCD, এবং কত বিট ও কতটি অক্ষর।</p>
        <p><b>কোড কী</b>প্রশ্নের সঙ্গে ASCII বা EBCDIC থাকলে আগে কোডের সংজ্ঞা, তারপর কোডটির বিট, অক্ষর সংখ্যা ও একটি উদাহরণ দিন।</p>
      </aside>
    </section>

    <section class="blk" id="practice">
      <p class="blk-no">অনুশীলন</p>
      <div class="body">
        <h2>এবার নিজে করুন</h2>
        <p class="prose">এই অধ্যায়ের সব MCQ উত্তর ও ব্যাখ্যাসহ পড়ুন, অথবা সময় ধরে পরীক্ষা দিন। আর ওপরের প্রতিটি অংশের বিগত প্রশ্ন থেকে প্রতিদিন একটি খাতায় লিখুন; পার্থক্যের প্রশ্নগুলো ছক করে।</p>
        <p class="note-acts"><a class="btn" href="#/mcq/ch03">অধ্যায়ের MCQ পড়ুন <span aria-hidden="true">→</span></a><a class="btn line" href="#/setup/ch03">এই অধ্যায়ে পরীক্ষা দিন</a></p>
        <ul class="note-links">
          <li><a href="#/written/18-school/q7">কোড কী, BCD ও বাইনারি কোডের পার্থক্য</a><span>১৮তম লিখিত · প্রশ্ন ৭</span></li>
          <li><a href="#/note/number-system/between">হেক্সা, অক্টাল ও বাইনারির রূপান্তর</a><span>অধ্যায় ২ · নোট</span></li>
        </ul>
      </div>
    </section>

  </div>
</article>
`;
