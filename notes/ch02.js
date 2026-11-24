/* অধ্যায় ২ · সংখ্যা পদ্ধতি — the chapter note (#/note/number-system), loaded only when the note is opened.
   The text between the backticks is plain HTML: edit it as HTML. Never type a backtick or a dollar sign followed by {
   inside it; String.raw keeps every backslash (the DOS paths) as written. */
(window.ICT_NOTES = window.ICT_NOTES || {}).ch02 = String.raw`
<article class="note">
  <header class="doc-head wrap">
    <p class="crumb"><a href="#/">সূচিপত্র</a><i aria-hidden="true">/</i>অধ্যায় ২</p>
    <h1>সংখ্যা পদ্ধতি</h1>
    <p class="doc-lede">বাইনারি, অক্টাল, দশমিক আর হেক্সাডেসিমাল: এক পদ্ধতি থেকে আরেকটিতে যাওয়ার নিয়ম, ৮৪২১ নিয়মসহ দ্রুত কৌশল, যোগ-বিয়োগ-গুণ-ভাগ আর পরিপূরক। প্রতিটি অংশের সঙ্গে ২০০৬ থেকে ২০২৪ পর্যন্ত লিখিত পরীক্ষায় সেই অংশ থেকে আসা সব প্রশ্ন, ১০ম থেকে ৩য় পরীক্ষার সব অঙ্কের ধাপে ধাপে সমাধান, আর যেকোনো সংখ্যা নিজে রূপান্তর করে ধাপগুলো দেখার যন্ত্র।</p>
    <p class="doc-meta"><span>অংশ <b>৮</b></span><span>সঙ্গে <b>৮৪২১ নিয়ম ও রূপান্তর যন্ত্র</b></span><span>বিগত লিখিত প্রশ্ন <b id="prevCount"></b></span><span>MCQ <b id="noteMcq"></b></span><span>পড়তে <b>৪৫ মিনিট</b></span></p>
  </header>

  <div class="secbar"><div class="wrap">
    <nav aria-label="এই নোটের অংশ" id="secnav">
      <a href="#/note/number-system/map">মানচিত্র</a>
      <a href="#/note/number-system/idea">ধারণা</a>
      <a href="#/note/number-system/systems">চার পদ্ধতি</a>
      <a href="#/note/number-system/todec">দশমিকে</a>
      <a href="#/note/number-system/convert">দশমিক থেকে</a>
      <a href="#/note/number-system/between">বাইনারি-অক্টাল-হেক্সা</a>
      <a href="#/note/number-system/w8421">৮৪২১ নিয়ম</a>
      <a href="#/note/number-system/arith">যোগ-বিয়োগ</a>
      <a href="#/note/number-system/complement">পরিপূরক</a>
      <a href="#/note/number-system/past">বিগত অঙ্ক</a>
      <a href="#/note/number-system/conv">রূপান্তর যন্ত্র</a>
      <a href="#/note/number-system/mistakes">ভুল এড়ান</a>
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
        <p class="tip"><b>সবচেয়ে বেশি এসেছে:</b> <span id="prevTop"></span>। প্রায় প্রতিটি প্রশ্নপত্রে অন্তত একটি অঙ্ক থাকে; হাতে কলমে অনুশীলনই এই অধ্যায়ের মূল প্রস্তুতি।</p>
      </div>
      <aside class="side">
        <p><b>অঙ্কের প্রশ্নে</b>প্রতিটি ধাপ লিখুন, ভিত্তি সাবস্ক্রিপ্টে দিন, আর শেষে উত্তরটি একটি বাক্সে বা দাগ টেনে আলাদা করুন।</p>
      </aside>
    </section>

    <section class="blk" id="idea" data-topic="pos" data-short="ধারণা, ভিত্তি ও পজিশনাল">
      <p class="blk-no">অংশ ১<small>সিলেবাস খ.১–২</small></p>
      <div class="body">
        <h2>মূল ধারণা</h2>
        <p class="statement">সংখ্যা লেখা ও প্রকাশ করার নিয়মই সংখ্যা পদ্ধতি। কোনো পদ্ধতিতে যতগুলো আলাদা অঙ্ক ব্যবহার হয়, সেটাই তার <em>ভিত্তি</em> (base বা radix)। একই সংখ্যা চার পদ্ধতিতে চার রকম দেখায়, মান একই থাকে।</p>
        <p class="eqline"><span>(25)<sub>10</sub></span><i>=</i><span>(11001)<sub>2</sub></span><i>=</i><span>(31)<sub>8</sub></span><i>=</i><span>(19)<sub>16</sub></span></p>

        <h3 class="sub"><span>১.১</span>পজিশনাল ও নন-পজিশনাল</h3>
        <table class="rt cmp">
          <thead><tr><th>বিষয়</th><th>পজিশনাল (স্থানিক)</th><th>নন-পজিশনাল</th></tr></thead>
          <tbody>
            <tr><td>অঙ্কের মান</td><td>কোন ঘরে বসেছে তার ওপর নির্ভর করে</td><td>যেখানেই বসুক, একই থাকে</td></tr>
            <tr><td>মান বের করতে</td><td>অঙ্কের নিজস্ব মান, স্থানীয় মান ও ভিত্তি: তিনটিই লাগে</td><td>শুধু অঙ্কের নিজস্ব মান যোগ বা বিয়োগ</td></tr>
            <tr><td>শূন্য</td><td>আছে; ফাঁকা ঘর বোঝায়</td><td>সাধারণত নেই</td></tr>
            <tr><td>বড় সংখ্যা লেখা</td><td>সহজ, অল্প অঙ্কে</td><td>কঠিন, অনেক চিহ্ন লাগে</td></tr>
            <tr><td>উদাহরণ</td><td>বাইনারি, অক্টাল, দশমিক, হেক্সাডেসিমাল</td><td>রোমান (I, V, X), মিশরীয় হায়ারোগ্লিফিক্স</td></tr>
          </tbody>
        </table>
        <p class="prose">যেমন দশমিক 555-এ তিনটি ৫-এর মান আলাদা: ৫০০, ৫০ আর ৫। কিন্তু রোমান III-এ প্রতিটি I-এর মান ১-ই, তাই III = ১ + ১ + ১ = ৩।</p>

        <h3 class="sub"><span>১.২</span>সংখ্যা পদ্ধতির বৈশিষ্ট্য</h3>
        <ul class="pts">
          <li><b>ভিত্তি:</b> প্রতিটি পজিশনাল পদ্ধতির একটি নির্দিষ্ট ভিত্তি থাকে।</li>
          <li><b>অঙ্কের সীমা:</b> ভিত্তি N হলে অঙ্ক থাকে ০ থেকে N − ১ পর্যন্ত, মোট N টি।</li>
          <li><b>স্থানীয় মান:</b> ডান থেকে প্রতিটি ঘরের মান আগের ঘরের N গুণ (N<sup>0</sup>, N<sup>1</sup>, N<sup>2</sup> …); বিন্দুর ডানে N<sup>−1</sup>, N<sup>−2</sup> …।</li>
          <li><b>মান:</b> প্রতিটি অঙ্ক × তার স্থানীয় মান, সব যোগ করলে সংখ্যার মান।</li>
          <li><b>পূর্ণাংশ ও ভগ্নাংশ:</b> র‍্যাডিক্স পয়েন্ট (বিন্দু) দুই অংশ আলাদা করে।</li>
        </ul>

        <h3 class="sub"><span>১.৩</span>কম্পিউটার কেন বাইনারি ব্যবহার করে</h3>
        <p class="prose">কম্পিউটারের সার্কিট ট্রানজিস্টর দিয়ে তৈরি, যা সুইচের মতো দুটি অবস্থায় থাকে: বিদ্যুৎ আছে (১) আর নেই (০)। দুই অবস্থা সহজে, নির্ভুলভাবে আলাদা করা যায়; দশটি আলাদা ভোল্টেজ রাখা অনেক কঠিন ও ভুলপ্রবণ। তা ছাড়া বুলিয়ান অ্যালজেবরার যুক্তিও ০ আর ১ দিয়ে চলে, আর বাইনারিতে যোগ-বিয়োগের সার্কিট সবচেয়ে সরল। তাই কম্পিউটারের ভেতরের সব কাজ বাইনারিতে।</p>

        <h3 class="sub"><span>১.৪</span>বিট, নিবল, বাইট</h3>
        <p class="prose">বাইনারির প্রতিটি অঙ্ক (০ বা ১) একটি <em>বিট</em> (Binary digit); এটিই মেমোরির ক্ষুদ্রতম একক। ৪ বিটে ১ নিবল, ৮ বিটে ১ বাইট, আর এক বাইটে একটি অক্ষর রাখা যায়। সংখ্যার সবচেয়ে বাঁয়ের বিট <em>MSB</em> (স্থানীয় মান সবচেয়ে বেশি), সবচেয়ে ডানের বিট <em>LSB</em>।</p>

        <h3 class="sub"><span>১.৫</span>সংক্ষিপ্ত ইতিহাস</h3>
        <ol class="tl">
          <li><span>খ্রি.পূ. ৩৪০০</span><p><b>মিশরীয় হায়ারোগ্লিফিক্স:</b> প্রথম লিখিত গণনা; ১-এর জন্য খাড়া দাগ, ১০-এর জন্য ∩।</p></li>
          <li><span>প্রাচীনকাল</span><p><b>ব্যাবিলন:</b> ছোট সংখ্যায় ১০-ভিত্তিক, বড় সংখ্যায় ৬০-ভিত্তিক; ঘণ্টায় ৬০ মিনিট সেখান থেকে। <b>মায়ান</b> পদ্ধতি ছিল ২০-ভিত্তিক।</p></li>
          <li><span>প্রাচীন ভারত</span><p><b>শূন্য ও দশভিত্তিক পদ্ধতি:</b> ভারতীয় গণিতবিদদের দান; আরবদের হাত ধরে ইউরোপে, তাই নাম হিন্দু-আরবীয় পদ্ধতি। পিঙ্গলা ছন্দশাস্ত্রে বাইনারির প্রাথমিক ধারণা দেন।</p></li>
          <li><span>নবম শতক</span><p><b>আল খোয়ারিজমি</b> দশভিত্তিক পদ্ধতির ওপর বই লেখেন; তাঁর নাম থেকে “অ্যালগরিদম” শব্দ।</p></li>
          <li><span>১৭০৩</span><p><b>গটফ্রিড লিবনিজ</b> আধুনিক বাইনারি পদ্ধতি প্রকাশ করেন।</p></li>
        </ol>

        <div data-prev="pos"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="1-30,32-36,43-51,54,56,57,62,66,67,69,72,92-99" data-name="ধারণা ও ভিত্তি">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch02/q21">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>লেখার নিয়ম</b>ভিত্তি লেখা হয় সংখ্যার ডান পাশে নিচে, ছোট করে। ভিত্তি না লিখলে সংখ্যাটি কোন পদ্ধতির, তা নিশ্চিত বলা যায় না।</p>
        <p><b>তিনভিত্তিক পদ্ধতি</b>১৮তম পরীক্ষায় এসেছে; ব্যাখ্যা ও উদাহরণ আছে <a href="#/written/18-school/q7">লিখিত প্রশ্ন ৭-এর উত্তরে</a>।</p>
      </aside>
    </section>

    <section class="blk" id="systems" data-topic="kind" data-short="চার পদ্ধতি ও কোন ধরনের সংখ্যা">
      <p class="blk-no">অংশ ২<small>সিলেবাস খ.২</small></p>
      <div class="body">
        <h2>চার পদ্ধতি</h2>
        <table class="rt">
          <thead><tr><th>পদ্ধতি</th><th>ভিত্তি</th><th>অঙ্ক</th><th>মনে রাখুন</th></tr></thead>
          <tbody>
            <tr><td>বাইনারি</td><td class="n">২</td><td class="m">0, 1</td><td>কম্পিউটারের নিজের ভাষা; সার্কিটের চালু ও বন্ধ, এই দুই অবস্থাই ১ ও ০।</td></tr>
            <tr><td>অক্টাল</td><td class="n">৮</td><td class="m">0–7</td><td>৩টি বিট মিলে এক অক্টাল অঙ্ক; ৭-এর পরের সংখ্যা 10।</td></tr>
            <tr><td>দশমিক</td><td class="n">১০</td><td class="m">0–9</td><td>রোজকার গোনার পদ্ধতি।</td></tr>
            <tr><td>হেক্সাডেসিমাল</td><td class="n">১৬</td><td class="m">0–9, A–F</td><td>৪টি বিট মিলে এক অঙ্ক; A = ১০ থেকে F = ১৫; FF-এর পরের সংখ্যা 100।</td></tr>
          </tbody>
        </table>
        <p class="tip"><b>সাধারণ নিয়ম:</b> ভিত্তি N হলে অঙ্ক থাকে ০ থেকে N−১ পর্যন্ত। ভিত্তি যত বড়, একই সংখ্যা লিখতে অঙ্ক তত কম লাগে।</p>
        <h3 class="sub">এক নজরে ০ থেকে ১৫</h3>
        <div class="g16" id="g16" aria-label="০ থেকে ১৫: দশমিক, বাইনারি, অক্টাল ও হেক্সাডেসিমাল"></div>
        <p class="caption">প্রতি ঘরে ওপর থেকে: দশমিক, বাইনারি, অক্টাল, হেক্সাডেসিমাল। ১৬ হলে: (10000)<sub>2</sub> = (20)<sub>8</sub> = (10)<sub>16</sub>।</p>

        <h3 class="sub"><span>২.১</span>“কোন ধরনের সংখ্যা?”</h3>
        <p class="prose">সংখ্যায় ব্যবহৃত সবচেয়ে বড় অঙ্ক দেখে ঠিক করুন: অঙ্কটি ভিত্তির চেয়ে ছোট হতে হবে। তাই সবচেয়ে বড় অঙ্কের চেয়ে বড় যেকোনো ভিত্তি সম্ভব; উত্তরে লিখুন <em>সবচেয়ে ছোট</em> প্রচলিত পদ্ধতিটি।</p>
        <table class="rt cmp">
          <thead><tr><th>সংখ্যা</th><th>কেন</th><th>উত্তর</th></tr></thead>
          <tbody>
            <tr><td class="m">FF, 5A, FB, 57A</td><td>A–F অক্ষর আছে, যা শুধু হেক্সাডেসিমালে</td><td>হেক্সাডেসিমাল</td></tr>
            <tr><td class="m">(BA.2B), (FF.AB)</td><td>ভগ্নাংশসহ; অক্ষর A, B, F</td><td>হেক্সাডেসিমাল</td></tr>
            <tr><td class="m">467, 2572</td><td>সবচেয়ে বড় অঙ্ক ৭</td><td>অক্টাল (বা তার বড় যেকোনো ভিত্তি)</td></tr>
            <tr><td class="m">110101</td><td>শুধু ০ ও ১</td><td>যেকোনো পদ্ধতি; সবচেয়ে সম্ভাব্য বাইনারি</td></tr>
            <tr><td class="m">5G</td><td>G কোনো প্রচলিত পদ্ধতির অঙ্ক নয়</td><td>প্রচলিত চার পদ্ধতির কোনোটিই নয় (ভিত্তি অন্তত ১৭ লাগবে)</td></tr>
          </tbody>
        </table>
        <p class="expand"><span>57A কোন ধরনের সংখ্যা?</span> A আছে, তাই হেক্সাডেসিমাল। অক্টালে: 0101 0111 1010 = 010 101 111 010 = (<b>2572</b>)<sub>8</sub></p>
        <p class="prose">শুধু ০ আর ১ দিয়ে লেখা সংখ্যার পুরো বিশ্লেষণ আছে <a href="#/written/18-school/q8">১৮তম লিখিত প্রশ্ন ৮-এর উত্তরে</a>।</p>

        <h3 class="sub"><span>২.২</span>আগের ও পরের সংখ্যা</h3>
        <p class="prose">শেষ ঘরে ১ যোগ করুন; অঙ্কটি ভিত্তিতে পৌঁছালে সেখানে ০ বসিয়ে ১ বাঁয়ে নিন, দশমিকে ৯৯ + ১ = ১০০-এর মতো।</p>
        <table class="rt cmp">
          <thead><tr><th>সংখ্যা</th><th>আগেরটি</th><th>পরেরটি</th></tr></thead>
          <tbody>
            <tr><td class="m">(FF)<sub>16</sub></td><td class="m">FE</td><td class="m">100 = (256)<sub>10</sub> = (400)<sub>8</sub> = (1 0000 0000)<sub>2</sub></td></tr>
            <tr><td class="m">(467)<sub>8</sub></td><td class="m">466</td><td class="m">470</td></tr>
            <tr><td class="m">(1011)<sub>2</sub></td><td class="m">1010</td><td class="m">1100</td></tr>
          </tbody>
        </table>
        <p class="expand"><span>FF-এর আগের ও পরের সংখ্যার যোগফল</span> = (FE)<sub>16</sub> + (100)<sub>16</sub> = (1FE)<sub>16</sub> = (<b>1 1111 1110</b>)<sub>2</sub> = ৫১০</p>

        <div data-prev="kind"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="38,39,52,59,70,71,81,146-153" data-name="কোন ধরনের সংখ্যা">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch02/q52">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>মুখস্থ রাখুন</b>০ থেকে ১৫-এর বাইনারি রূপ জানা থাকলে বাইনারি, অক্টাল ও হেক্সার মধ্যে প্রায় সব রূপান্তর এক লাইনে হয়ে যায়।</p>
        <p><b>“FF কোন ধরনের সংখ্যা”</b>প্রশ্নে তিনটি অংশ থাকে: পদ্ধতির নাম ও কারণ, পরের সংখ্যা, আর অন্য পদ্ধতিতে মান। তিনটিই লিখুন।</p>
      </aside>
    </section>

    <section class="blk" id="todec" data-topic="todec" data-short="অন্য পদ্ধতি থেকে দশমিকে">
      <p class="blk-no">অংশ ৩<small>সিলেবাস খ.৩</small></p>
      <div class="body">
        <h2>যেকোনো পদ্ধতি থেকে দশমিকে</h2>
        <p class="prose">প্রতিটি অঙ্ককে তার স্থানীয় মান, অর্থাৎ ভিত্তির ঘাত দিয়ে গুণ করে যোগ করুন। বিন্দুর বাঁয়ে ঘাত ০, ১, ২ … করে বাড়ে; ডানে −১, −২ … করে কমে।</p>
        <p class="tip"><b>৮৪২১ নিয়মে দ্রুত:</b> বাইনারির বেলায় গুণ লাগে না; যে ঘরে 1, শুধু সেই ঘরের ওজন (… ৩২ ১৬ ৮ ৪ ২ ১) যোগ করুন: (10111)<sub>2</sub> = ১৬ + ৪ + ২ + ১ = ২৩। <a href="#/note/number-system/w8421">৮৪২১ নিয়ম দেখুন</a>।</p>
        <p class="expand"><span>(10111)<sub>2</sub></span> = 1×2<sup>4</sup> + 0×2<sup>3</sup> + 1×2<sup>2</sup> + 1×2<sup>1</sup> + 1×2<sup>0</sup> = 16 + 0 + 4 + 2 + 1 = <b>23</b></p>
        <p class="expand"><span>(2C)<sub>16</sub></span> = 2×16<sup>1</sup> + 12×16<sup>0</sup> = 32 + 12 = <b>44</b></p>
        <p class="expand"><span>(65.24)<sub>8</sub></span> = 6×8<sup>1</sup> + 5×8<sup>0</sup> + 2×8<sup>−1</sup> + 4×8<sup>−2</sup> = 48 + 5 + 0.25 + 0.0625 = <b>53.3125</b></p>
        <p class="expand"><span>(7D5.E6)<sub>16</sub></span> = 7×16<sup>2</sup> + 13×16<sup>1</sup> + 5×16<sup>0</sup> + 14×16<sup>−1</sup> + 6×16<sup>−2</sup> = 1792 + 208 + 5 + 0.875 + 0.0234375 = <b>2005.8984375</b></p>
        <p class="expand"><span>(0.101)<sub>2</sub></span> = 1×2<sup>−1</sup> + 0×2<sup>−2</sup> + 1×2<sup>−3</sup> = 0.5 + 0 + 0.125 = <b>0.625</b></p>

        <div data-prev="todec"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="42,60,63-65,77,78,80,84,100,102,104,112,113,125,161-165" data-name="দশমিকে রূপান্তর">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch02/q60">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>হাতের কাছে রাখুন</b>২-এর ঘাত: ১, ২, ৪, ৮, ১৬, ৩২, ৬৪, ১২৮, ২৫৬। ভগ্নাংশে: ০.৫, ০.২৫, ০.১২৫, ০.০৬২৫। ১৬-এর ঘাত: ১, ১৬, ২৫৬, ৪০৯৬।</p>
      </aside>
    </section>

    <section class="blk" id="convert" data-topic="fromdec" data-short="দশমিক থেকে অন্য পদ্ধতিতে">
      <p class="blk-no">অংশ ৪<small>সিলেবাস খ.৩</small></p>
      <div class="body">
        <h2>দশমিক থেকে অন্য পদ্ধতিতে</h2>

        <h3 class="sub"><span>৪.১</span>দশমিক পূর্ণসংখ্যা থেকে বাইনারি</h3>
        <p class="prose">২ দিয়ে বারবার ভাগ করুন, প্রতিবারের ভাগশেষ ডানে লিখুন। ভাগফল ০ হলে থামুন, তারপর ভাগশেষগুলো <em>নিচ থেকে ওপরে</em> পড়ুন।</p>
        <p class="tip"><b>ভাগ ছাড়াও হয়, ৮৪২১ নিয়মে:</b> সবচেয়ে বড় যে ওজন ঢোকে সেখানে 1 বসিয়ে বিয়োগ, বাকিটার জন্য আবার: ৯১ = ৬৪ + ১৬ + ৮ + ২ + ১ → 1011011। লিখিত উত্তরে ভাগের মই দেখিয়ে এভাবে মিলিয়ে নিন। <a href="#/note/number-system/w8421">৮৪২১ নিয়ম দেখুন</a>।</p>
        <div class="work">
          <div class="ladder" role="img" aria-label="৯১-কে ২ দিয়ে বারবার ভাগ। ভাগশেষ ১, ১, ০, ১, ১, ০, ১। নিচ থেকে পড়লে 1011011।">
            <span class="dv">2</span><span class="qt">91</span><span class="rm">1</span>
            <span class="dv">2</span><span class="qt">45</span><span class="rm">1</span>
            <span class="dv">2</span><span class="qt">22</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">11</span><span class="rm">1</span>
            <span class="dv">2</span><span class="qt">5</span><span class="rm">1</span>
            <span class="dv">2</span><span class="qt">2</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">1</span><span class="rm">1</span>
            <span class="dv"></span><span class="qt end">0</span><span class="rm"></span>
          </div>
          <div class="readup" aria-hidden="true">
            <svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 146 V8 M5 15 L12 6 L19 15"/></svg>
            <span>নিচ থেকে পড়ুন</span>
          </div>
          <p class="work-res">(91)<sub>10</sub> = (<b>1011011</b>)<sub>2</sub></p>
        </div>
        <p class="tip"><b>দ্রুত পথ:</b> সংখ্যাটিকে ২-এর ঘাতের যোগফল হিসেবে ভাঙুন, যে ঘাত লাগল তার ঘরে ১, বাকিগুলোতে ০। যেমন ৭৫ = ৬৪ + ৮ + ২ + ১, তাই (64, 32, 16, 8, 4, 2, 1)-এর ঘরে 1 0 0 1 0 1 1।</p>

        <h3 class="sub"><span>৪.২</span>দশমিক ভগ্নাংশ থেকে বাইনারি</h3>
        <p class="prose">ভগ্নাংশকে ২ দিয়ে বারবার গুণ করুন। প্রতিবারের পূর্ণ অংশ (০ বা ১) আলাদা করে রাখুন, বাকি ভগ্নাংশ নিয়ে আবার গুণ। ভগ্নাংশ ০ হলে থামুন, আর পূর্ণ অংশগুলো <em>ওপর থেকে নিচে</em> পড়ুন।</p>
        <div class="work">
          <table class="truth trace">
            <thead><tr><th>ভগ্নাংশ × ২</th><th>পূর্ণ অংশ</th></tr></thead>
            <tbody><tr><td>0.625 × 2 = 1.25</td><td>1</td></tr><tr><td>0.25 × 2 = 0.50</td><td>0</td></tr><tr><td>0.50 × 2 = 1.00</td><td>1</td></tr></tbody>
          </table>
          <div class="readup" aria-hidden="true">
            <svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 4 V142 M5 135 L12 144 L19 135"/></svg>
            <span>ওপর থেকে পড়ুন</span>
          </div>
          <p class="work-res">(0.625)<sub>10</sub> = (<b>0.101</b>)<sub>2</sub></p>
        </div>
        <p class="prose">পূর্ণ ও ভগ্নাংশ দুটোই থাকলে দুই অংশ আলাদা করে রূপান্তর করে বিন্দু দিয়ে জুড়ে দিন: (13.5)<sub>10</sub> = (1101.1)<sub>2</sub>। ভগ্নাংশ কখনো শেষ না হলে (যেমন ০.৪৫) চার থেকে ছয় ঘর পর্যন্ত নিয়ে থামুন, আর উত্তরে লিখুন “প্রায়”।</p>

        <h3 class="sub"><span>৪.৩</span>দশমিক থেকে অক্টাল ও হেক্সাডেসিমাল</h3>
        <p class="prose">নিয়ম একই, শুধু ভাজক বদলায়: অক্টালের জন্য ৮, হেক্সার জন্য ১৬ দিয়ে ভাগ; ভগ্নাংশে ৮ বা ১৬ দিয়ে গুণ। হেক্সায় ১০ থেকে ১৫ হলে A থেকে F লিখুন।</p>
        <div class="work">
          <div class="ladder" role="img" aria-label="১২৭-কে ৮ দিয়ে বারবার ভাগ। ভাগশেষ ৭, ৭, ১। নিচ থেকে পড়লে 177।">
            <span class="dv">8</span><span class="qt">127</span><span class="rm">7</span>
            <span class="dv">8</span><span class="qt">15</span><span class="rm">7</span>
            <span class="dv">8</span><span class="qt">1</span><span class="rm">1</span>
            <span class="dv"></span><span class="qt end">0</span><span class="rm"></span>
          </div>
          <div class="readup" aria-hidden="true">
            <svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 146 V8 M5 15 L12 6 L19 15"/></svg>
            <span>নিচ থেকে পড়ুন</span>
          </div>
          <p class="work-res">(127)<sub>10</sub> = (<b>177</b>)<sub>8</sub></p>
        </div>
        <div class="work">
          <div class="ladder" role="img" aria-label="৯৪-কে ১৬ দিয়ে বারবার ভাগ। ভাগশেষ ১৪ অর্থাৎ E, তারপর ৫। নিচ থেকে পড়লে 5E।">
            <span class="dv">16</span><span class="qt">94</span><span class="rm">14 = E</span>
            <span class="dv">16</span><span class="qt">5</span><span class="rm">5</span>
            <span class="dv"></span><span class="qt end">0</span><span class="rm"></span>
          </div>
          <div class="readup" aria-hidden="true">
            <svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 146 V8 M5 15 L12 6 L19 15"/></svg>
            <span>নিচ থেকে পড়ুন</span>
          </div>
          <p class="work-res">(94)<sub>10</sub> = (<b>5E</b>)<sub>16</sub></p>
        </div>
        <p class="prose">ভগ্নাংশসহ উদাহরণ, (53.62)<sub>10</sub> থেকে অক্টাল (১৭তম পরীক্ষা): পূর্ণ অংশ ৫৩ = ৬ × ৮ + ৫, তাই (65)<sub>8</sub>। ভগ্নাংশ ৮ দিয়ে গুণ:</p>
        <div class="work">
          <table class="truth trace">
            <thead><tr><th>ভগ্নাংশ × ৮</th><th>পূর্ণ অংশ</th></tr></thead>
            <tbody><tr><td>0.62 × 8 = 4.96</td><td>4</td></tr><tr><td>0.96 × 8 = 7.68</td><td>7</td></tr><tr><td>0.68 × 8 = 5.44</td><td>5</td></tr><tr><td>0.44 × 8 = 3.52</td><td>3</td></tr></tbody>
          </table>
          <div class="readup" aria-hidden="true">
            <svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 4 V142 M5 135 L12 144 L19 135"/></svg>
            <span>ওপর থেকে পড়ুন</span>
          </div>
          <p class="work-res">(53.62)<sub>10</sub> ≈ (<b>65.4753</b>)<sub>8</sub></p>
        </div>

        <div data-prev="fromdec"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="31,37,40,41,55,68,75,101,103,111,114,124,154-160" data-name="দশমিক থেকে রূপান্তর">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch02/q31">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>সবচেয়ে বেশি আসে</b>ভগ্নাংশসহ দশমিক সংখ্যাকে বাইনারি, অক্টাল ও হেক্সায় একসঙ্গে প্রকাশ করা (যেমন ৪৫.৩৫, ১২৯.৭৫, ৬৫৩.৪৭)।</p>
        <p><b>মনে রাখার সূত্র</b>দশমিক থেকে অন্য পদ্ধতিতে যেতে ভাগ (ভগ্নাংশে গুণ); অন্য পদ্ধতি থেকে দশমিকে আসতে ঘাত দিয়ে গুণ করে যোগ।</p>
      </aside>
    </section>

    <section class="blk" id="between" data-topic="between" data-short="বাইনারি, অক্টাল ও হেক্সা">
      <p class="blk-no">অংশ ৫<small>সিলেবাস খ.৩</small></p>
      <div class="body">
        <h2>বাইনারি, অক্টাল ও হেক্সার মধ্যে</h2>

        <h3 class="sub"><span>৫.১</span>বাইনারি থেকে হেক্সা বা অক্টাল</h3>
        <p class="prose">বিন্দু থেকে শুরু করে দুই দিকে হেক্সার জন্য ৪টি, অক্টালের জন্য ৩টি করে বিট ভাগ করুন। ঘর পূর্ণ না হলে পূর্ণ অংশের বাঁয়ে আর ভগ্নাংশের ডানে শূন্য বসান। প্রতিটি ভাগ একটি অঙ্ক।</p>
        <p class="tip"><b>৮৪২১ নিয়মে পড়ুন:</b> ৪ বিটের প্রতিটি দল ৮ ৪ ২ ১ ওজনে, ৩ বিটের দল ৪ ২ ১ ওজনে: 1101 = ৮ + ৪ + ১ = ১৩ = D; 110 = ৪ + ২ = ৬। <a href="#/note/number-system/w8421">৮৪২১ নিয়ম দেখুন</a>।</p>
        <div class="groups" role="img" aria-label="11011110.1-কে চার বিট করে ভাগ: 1101 মানে D, 1110 মানে E, বিন্দুর পরে 1000 মানে 8, তাই DE.8">
          <span><code>1101</code><b>D</b></span><span><code>1110</code><b>E</b></span><span class="gpt"><code>.</code></span><span><code>1000</code><b>8</b></span>
          <p class="work-res">(11011110.1)<sub>2</sub> = (<b>DE.8</b>)<sub>16</sub></p>
        </div>
        <div class="groups" role="img" aria-label="একই সংখ্যাকে তিন বিট করে ভাগ: 011 মানে 3, 011 মানে 3, 110 মানে 6, বিন্দুর পরে 100 মানে 4, তাই 336.4">
          <span><code>011</code><b>3</b></span><span><code>011</code><b>3</b></span><span><code>110</code><b>6</b></span><span class="gpt"><code>.</code></span><span><code>100</code><b>4</b></span>
          <p class="work-res">(11011110.1)<sub>2</sub> = (<b>336.4</b>)<sub>8</sub></p>
        </div>

        <h3 class="sub"><span>৫.২</span>হেক্সা বা অক্টাল থেকে বাইনারি</h3>
        <p class="prose">প্রতিটি অঙ্কের জায়গায় তার ৪ বিট (হেক্সা) বা ৩ বিট (অক্টাল) লিখুন, তারপর একেবারে বাঁয়ের অপ্রয়োজনীয় শূন্য বাদ দিন।</p>
        <p class="expand"><span>(ABC)<sub>16</sub></span> = 1010 1011 1100 = (<b>101010111100</b>)<sub>2</sub></p>
        <p class="expand"><span>(BA.2B)<sub>16</sub></span> = 1011 1010 . 0010 1011 = (<b>10111010.00101011</b>)<sub>2</sub></p>
        <p class="expand"><span>(43)<sub>8</sub></span> = 100 011 = (<b>100011</b>)<sub>2</sub></p>

        <h3 class="sub"><span>৫.৩</span>হেক্সা ও অক্টালের মধ্যে</h3>
        <p class="prose">সরাসরি নয়, বাইনারি হয়ে যান: আগে প্রতিটি অঙ্ক বিটে ভাঙুন, তারপর নতুন মাপে (৩ বা ৪ বিট) ভাগ করুন।</p>
        <p class="expand"><span>(2F3)<sub>16</sub></span> = 0010 1111 0011 = 001 011 110 011 = (<b>1363</b>)<sub>8</sub></p>
        <p class="expand"><span>(BA.2B)<sub>16</sub></span> = 10 111 010 . 001 010 110 = (<b>272.126</b>)<sub>8</sub></p>
        <h4 class="sub-h" id="bridge"><span>কৌশল</span>বাইনারি সেতু: চার ধাপে হেক্সা থেকে অক্টাল</h4>
        <p class="prose">হেক্সার এক অঙ্ক মানে ৪ বিট, অক্টালের এক অঙ্ক মানে ৩ বিট; তাই বাইনারি দুটোরই সেতু। প্রতিটি ধাপ আলাদা করে লিখলে A–F-এর বিটে ভুল হয় না:</p>
        <table class="rt cmp eqtab">
          <thead><tr><th>ধাপ</th><th>কী করবেন</th><th>BFE দিয়ে</th></tr></thead>
          <tbody>
            <tr><td>১</td><td>প্রতিটি অঙ্কের মান লিখুন (A = ১০, B = ১১ … F = ১৫)</td><td class="m">11 15 14</td></tr>
            <tr><td>২</td><td>প্রতিটি মান ৪ বিটে লিখুন, ৮৪২১ ওজনে</td><td class="m">1011 1111 1110</td></tr>
            <tr><td>৩</td><td>ডান দিক থেকে ৩ বিটের দল করুন; সবচেয়ে বাঁয়ের দলে কম পড়লে বাঁয়ে 0 বসান</td><td class="m">101 111 111 110</td></tr>
            <tr><td>৪</td><td>প্রতিটি দল ৪২১ ওজনে পড়ুন</td><td class="m">5 7 7 6</td></tr>
          </tbody>
        </table>
        <p class="final"><b>উত্তর</b>(BFE)<sub>16</sub> = (5776)<sub>8</sub></p>
        <p class="prose">যাচাই: (BFE)<sub>16</sub> = ১১ × ২৫৬ + ১৫ × ১৬ + ১৪ = ৩০৭০; (5776)<sub>8</sub> = ৫ × ৫১২ + ৭ × ৬৪ + ৭ × ৮ + ৬ = ৩০৭০। দ্বিতীয় ধাপের ৪ বিট কীভাবে আসে, তা আছে <a href="#/note/number-system/w8421">৮৪২১ নিয়মে</a>।</p>
        <h4 class="sub-h"><span>উদাহরণ</span>12A7C: আগে বাইনারি, তারপর বাকিগুলো</h4>
        <p class="expand"><span>১. মান</span> 1 2 10 7 12</p>
        <p class="expand"><span>২. বাইনারি</span> 0001 0010 1010 0111 1100 = (<b>10010101001111100</b>)<sub>2</sub></p>
        <p class="expand"><span>৩–৪. অক্টাল</span> ডান থেকে ৩ বিটের দল, বাঁয়ের দলে ১টি 0 বসিয়ে: 010 010 101 001 111 100 = (<b>225174</b>)<sub>8</sub></p>
        <p class="expand"><span>দশমিক</span> ১৬ দিয়ে গুণ করে পরের অঙ্ক যোগ: 1 → 1 × 16 + 2 = 18 → 18 × 16 + 10 = 298 → 298 × 16 + 7 = 4775 → 4775 × 16 + 12 = (<b>76412</b>)<sub>10</sub></p>
        <p class="final"><b>উত্তর</b>(12A7C)<sub>16</sub> = (10010101001111100)<sub>2</sub> = (225174)<sub>8</sub> = (76412)<sub>10</sub></p>
        <p class="prose">দশমিকের এই গুণ-করে-যোগের কৌশলটি আছে <a href="#/note/number-system/w8421">৮৪২১ নিয়মের</a> চ অংশে; ঘাতের রূপে লিখলেও একই: ৬৫৫৩৬ + ৮১৯২ + ২৫৬০ + ১১২ + ১২ = ৭৬৪১২।</p>
        <h4 class="sub-h"><span>বিন্দু থাকলে</span>দল শুরু বিন্দু থেকে, দুই দিকে</h4>
        <p class="prose">বিন্দুর বাঁয়ে দল হয় বিন্দু থেকে বাঁ দিকে, ডানে বিন্দু থেকে ডান দিকে। কম পড়লে শূন্য বসে বাইরের দিকে: বাঁ অংশে সবচেয়ে বাঁয়ে, ডান অংশে সবচেয়ে ডানে।</p>
        <p class="expand"><span>(3A.6)<sub>16</sub></span> মান 3 10 . 6 → 0011 1010 . 0110 → ৩ বিটের দল: 111 010 . 011 000 = (<b>72.3</b>)<sub>8</sub></p>
        <p class="prose">ডান অংশে 0110-কে দল করতে ডানে দুটি 0 বসিয়ে 011 000, অর্থাৎ 3 আর 0; শেষের 0 বাদ দিলে .3। যাচাই: দুটির মানই ৫৮.৩৭৫।</p>
        <h4 class="sub-h"><span>উল্টো পথে</span>অক্টাল থেকে হেক্সা</h4>
        <p class="prose">একই চার ধাপ, শুধু মাপ উল্টো: প্রতিটি অক্টাল অঙ্ক ৩ বিটে (৪২১), তারপর ৪ বিটের দল, প্রতিটি দল ৮৪২১ ওজনে পড়ে হেক্সা অঙ্ক।</p>
        <p class="expand"><span>(5776)<sub>8</sub></span> 101 111 111 110 → ৪ বিটের দল: 1011 1111 1110 → ১১ ১৫ ১৪ = (<b>BFE</b>)<sub>16</sub></p>
        <p class="prose">ওপরের BFE-তেই ফিরে এলাম; উত্তর মিলিয়ে নেওয়ার এটিও একটি উপায়।</p>

        <div data-prev="between"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="53,58,61,73,74,76,79,82,83,105-110,123,127" data-name="বাইনারি-অক্টাল-হেক্সা">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch02/q53">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>ভগ্নাংশের দিকে</b>শূন্য বসে বিন্দু থেকে দূরে, অর্থাৎ ডানে। .1 মানে .100 (অক্টাল ৪) বা .1000 (হেক্সা ৮)।</p>
      </aside>
    </section>

    <section class="blk" id="w8421">
      <p class="blk-no">কৌশল<small>৮৪২১ নিয়ম</small></p>
      <div class="body">
        <h2>৮৪২১ নিয়ম: ভাগ-গুণ ছাড়াই রূপান্তর</h2>
        <p class="prose">বাইনারির প্রতিটি ঘরের একটি নির্দিষ্ট মান বা <em>ওজন</em> আছে: সবচেয়ে ডানের ঘরের ওজন ১, তারপর বাঁয়ে প্রতি ঘরে দ্বিগুণ। শেষ চার ঘরের ওজন ৮, ৪, ২, ১, তাই এর নাম ৮৪২১ নিয়ম। ওজনগুলো মুখস্থ থাকলে বাইনারি, অক্টাল, হেক্সা আর BCD-র প্রায় সব রূপান্তর শুধু যোগ-বিয়োগে হয়ে যায়।</p>
        <table class="truth wt"><thead><tr><th>ঘাত</th><th>2<sup>7</sup></th><th>2<sup>6</sup></th><th>2<sup>5</sup></th><th>2<sup>4</sup></th><th>2<sup>3</sup></th><th>2<sup>2</sup></th><th>2<sup>1</sup></th><th>2<sup>0</sup></th></tr></thead><tbody><tr><td>ওজন</td><td>128</td><td>64</td><td>32</td><td>16</td><td>8</td><td>4</td><td>2</td><td>1</td></tr></tbody></table>
        <table class="truth wt"><thead><tr><th>ঘাত</th><th>2<sup>−1</sup></th><th>2<sup>−2</sup></th><th>2<sup>−3</sup></th><th>2<sup>−4</sup></th></tr></thead><tbody><tr><td>ওজন</td><td>.5</td><td>.25</td><td>.125</td><td>.0625</td></tr></tbody></table>
        <p class="prose">বিন্দুর বাঁয়ে প্রতি ঘরে দ্বিগুণ, ডানে প্রতি ঘরে অর্ধেক।</p>
        <p class="tip"><b>মুখস্থের কৌশল:</b> ১ থেকে দ্বিগুণ করতে থাকুন: ১, ২, ৪, ৮, ১৬, ৩২, ৬৪, ১২৮, ২৫৬, ৫১২, ১০২৪। আর ১ থেকে অর্ধেক করতে থাকুন: .৫, .২৫, .১২৫, .০৬২৫।</p>
        <h3 class="sub"><span>ক</span>বাইনারি থেকে দশমিক</h3>
        <p class="prose">যে ঘরে 1, শুধু সেই ঘরের ওজন যোগ করুন; 0-এর ঘরগুলো বাদ।</p>
        <div class="wrow" role="img" aria-label="ওজন 32, 16, 8, 4, 2, 1-এর নিচে বিট 1, 0, 1, 1, 0, 1; যেখানে 1, সেই ওজনগুলোর যোগফল 45"><span><small>32</small><i class="bub on">1</i></span><span><small>16</small><i class="bub">0</i></span><span><small>8</small><i class="bub on">1</i></span><span><small>4</small><i class="bub on">1</i></span><span><small>2</small><i class="bub">0</i></span><span><small>1</small><i class="bub on">1</i></span></div>
        <p class="work-res">(101101)<sub>2</sub> = 32 + 8 + 4 + 1 = (<b>45</b>)<sub>10</sub></p>
        <div class="wrow" role="img" aria-label="ওজন 16, 8, 4, 2, 1, .5, .25, .125-এর নিচে বিট 1, 0, 1, 1, 1, 1, 0, 1; যেখানে 1, সেই ওজনগুলোর যোগফল 23.625"><span><small>16</small><i class="bub on">1</i></span><span><small>8</small><i class="bub">0</i></span><span><small>4</small><i class="bub on">1</i></span><span><small>2</small><i class="bub on">1</i></span><span><small>1</small><i class="bub on">1</i></span><span class="wpt"><small>&nbsp;</small><b>.</b></span><span><small>.5</small><i class="bub on">1</i></span><span><small>.25</small><i class="bub">0</i></span><span><small>.125</small><i class="bub on">1</i></span></div>
        <p class="work-res">(10111.101)<sub>2</sub> = 16 + 4 + 2 + 1 + .5 + .125 = (<b>23.625</b>)<sub>10</sub></p>
        <p class="prose">অংশ ৩-এর “অঙ্ক × ভিত্তির ঘাত” আর এখানের ওজন একই জিনিস; শুধু ২-এর ঘাতগুলো আগে থেকে জানা থাকায় লেখা অনেক ছোট হয়।</p>
        <h3 class="sub"><span>খ</span>দশমিক থেকে বাইনারি, ভাগ ছাড়া</h3>
        <ol class="algo">
          <li>সংখ্যাটির সমান বা তার চেয়ে ছোট সবচেয়ে বড় ওজনটি খুঁজুন; সেই ঘরে <b>1</b>।</li>
          <li>সংখ্যা থেকে ওজনটি বিয়োগ করুন।</li>
          <li>বাকিটার জন্য পরের ছোট ওজনগুলো একে একে দেখুন: ঢুকলে 1 বসিয়ে বিয়োগ, না ঢুকলে 0।</li>
          <li>বাকি ০ হলে থামুন; ডানের বাকি ঘরগুলোতে 0।</li>
        </ol>
        <p class="prose">উদাহরণ: ৪৫।</p>
        <table class="truth cols"><thead><tr><th>ওজন</th><th>ঢোকে?</th><th>বিট</th><th>বাকি</th></tr></thead><tbody><tr><td>32</td><td>হ্যাঁ</td><td>1</td><td>45 − 32 = 13</td></tr><tr><td>16</td><td>না</td><td>0</td><td>13</td></tr><tr><td>8</td><td>হ্যাঁ</td><td>1</td><td>13 − 8 = 5</td></tr><tr><td>4</td><td>হ্যাঁ</td><td>1</td><td>5 − 4 = 1</td></tr><tr><td>2</td><td>না</td><td>0</td><td>1</td></tr><tr><td>1</td><td>হ্যাঁ</td><td>1</td><td>1 − 1 = 0</td></tr></tbody></table>
        <div class="wrow" role="img" aria-label="ওজন 32, 16, 8, 4, 2, 1-এর নিচে বিট 1, 0, 1, 1, 0, 1; যেখানে 1, সেই ওজনগুলোর যোগফল 45"><span><small>32</small><i class="bub on">1</i></span><span><small>16</small><i class="bub">0</i></span><span><small>8</small><i class="bub on">1</i></span><span><small>4</small><i class="bub on">1</i></span><span><small>2</small><i class="bub">0</i></span><span><small>1</small><i class="bub on">1</i></span></div>
        <p class="work-res">(45)<sub>10</sub> = 32 + 8 + 4 + 1 = (<b>101101</b>)<sub>2</sub></p>
        <p class="expand"><span>এক লাইনে</span> ৭৫ = 64 + 8 + 2 + 1 → ৬৪, ৮, ২, ১-এর ঘরে 1: (<b>1001011</b>)<sub>2</sub></p>
        <p class="expand"><span>এক লাইনে</span> ১২৯ = 128 + 1 → (<b>10000001</b>)<sub>2</sub></p>
        <p class="prose">ভগ্নাংশেও একই কাজ, অর্ধেকের ওজনগুলো দিয়ে:</p>
        <p class="expand"><span>.625</span> = .5 + .125 → .5, .25, .125-এর ঘরে 1, 0, 1: (<b>.101</b>)<sub>2</sub></p>
        <p class="expand"><span>.75</span> = .5 + .25 → (<b>.11</b>)<sub>2</sub></p>
        <p class="prose">ভগ্নাংশটি এই অর্ধেকগুলোর যোগফলে না মিললে (যেমন .৩৫, .৮৬) এভাবে কখনো শেষ হয় না; তখন ×২-এর সারণিই ব্যবহার করুন (<a href="#/note/number-system/convert">অংশ ৪.২</a>)।</p>
        <p class="tip"><b>লিখিত পরীক্ষায়:</b> “রূপান্তর করুন” প্রশ্নে ভাগের মইটিই দেখান, পরীক্ষক ধাপগুলো সেভাবেই আশা করেন; তারপর ৮৪২১ দিয়ে কয়েক সেকেন্ডে উত্তর মিলিয়ে নিন। MCQ-তে সরাসরি ৮৪২১।</p>
        <h3 class="sub"><span>গ</span>হেক্সা ↔ বাইনারি: প্রতি অঙ্কে ৪ বিট, ওজন ৮ ৪ ২ ১</h3>
        <table class="truth cols"><thead><tr><th>হেক্সা</th><th>মান</th><th>৮৪২১-এ</th><th>বিট</th></tr></thead><tbody><tr><td>0</td><td>০</td><td>০</td><td>0000</td></tr><tr><td>1</td><td>১</td><td>1</td><td>0001</td></tr><tr><td>2</td><td>২</td><td>2</td><td>0010</td></tr><tr><td>3</td><td>৩</td><td>2 + 1</td><td>0011</td></tr><tr><td>4</td><td>৪</td><td>4</td><td>0100</td></tr><tr><td>5</td><td>৫</td><td>4 + 1</td><td>0101</td></tr><tr><td>6</td><td>৬</td><td>4 + 2</td><td>0110</td></tr><tr><td>7</td><td>৭</td><td>4 + 2 + 1</td><td>0111</td></tr><tr><td>8</td><td>৮</td><td>8</td><td>1000</td></tr><tr><td>9</td><td>৯</td><td>8 + 1</td><td>1001</td></tr><tr><td>A</td><td>১০</td><td>8 + 2</td><td>1010</td></tr><tr><td>B</td><td>১১</td><td>8 + 2 + 1</td><td>1011</td></tr><tr><td>C</td><td>১২</td><td>8 + 4</td><td>1100</td></tr><tr><td>D</td><td>১৩</td><td>8 + 4 + 1</td><td>1101</td></tr><tr><td>E</td><td>১৪</td><td>8 + 4 + 2</td><td>1110</td></tr><tr><td>F</td><td>১৫</td><td>8 + 4 + 2 + 1</td><td>1111</td></tr></tbody></table>
        <p class="expand"><span>হেক্সা থেকে বাইনারি</span> (BCD)<sub>16</sub>: B = 8 + 2 + 1 → 1011, C = 8 + 4 → 1100, D = 8 + 4 + 1 → 1101; তাই (<b>1011 1100 1101</b>)<sub>2</sub></p>
        <p class="expand"><span>বাইনারি থেকে হেক্সা</span> 1110 = 8 + 4 + 2 = ১৪ = <b>E</b>; 0101 = 4 + 1 = <b>5</b></p>
        <h3 class="sub"><span>ঘ</span>অক্টাল ↔ বাইনারি: প্রতি অঙ্কে ৩ বিট, ওজন ৪ ২ ১</h3>
        <table class="truth cols"><thead><tr><th>অক্টাল</th><th>৪২১-এ</th><th>বিট</th></tr></thead><tbody><tr><td>0</td><td>০</td><td>000</td></tr><tr><td>1</td><td>1</td><td>001</td></tr><tr><td>2</td><td>2</td><td>010</td></tr><tr><td>3</td><td>2 + 1</td><td>011</td></tr><tr><td>4</td><td>4</td><td>100</td></tr><tr><td>5</td><td>4 + 1</td><td>101</td></tr><tr><td>6</td><td>4 + 2</td><td>110</td></tr><tr><td>7</td><td>4 + 2 + 1</td><td>111</td></tr></tbody></table>
        <p class="expand"><span>অক্টাল থেকে বাইনারি</span> (753)<sub>8</sub>: 7 = 4 + 2 + 1 → 111, 5 = 4 + 1 → 101, 3 = 2 + 1 → 011; তাই (<b>111 101 011</b>)<sub>2</sub></p>
        <p class="expand"><span>বাইনারি থেকে অক্টাল</span> 110 = 4 + 2 = <b>6</b>; 011 = 2 + 1 = <b>3</b></p>
        <h3 class="sub"><span>ঙ</span>BCD: প্রতিটি দশমিক অঙ্কে ৪ বিট</h3>
        <p class="prose">BCD কোডও একই ওজনে চলে, তাই এর আরেক নাম 8421 কোড। তফাত শুধু এই যে পুরো সংখ্যা নয়, প্রতিটি দশমিক অঙ্ক আলাদা করে ৪ বিটে লেখা হয় (বিস্তারিত <a href="#/note/data-representation/code">অধ্যায় ৩</a>-এ)।</p>
        <p class="expand"><span>(925)<sub>10</sub></span> 9 = 8 + 1 → 1001, 2 → 0010, 5 = 4 + 1 → 0101; তাই (<b>1001 0010 0101</b>)<sub>BCD</sub></p>
        <h3 class="sub"><span>চ</span>গুণ করে যোগ: ঘাত ছাড়াই দশমিকে</h3>
        <p class="prose">বাঁয়ের অঙ্ক থেকে শুরু করুন। চলতি ফলকে ভিত্তি দিয়ে গুণ করে পরের অঙ্কটি যোগ করুন; শেষ অঙ্ক যোগ হলে সেটিই দশমিক মান। বাইনারিতে ভিত্তি ২, তাই কাজটি শুধু “দ্বিগুণ করে যোগ”। লম্বা সংখ্যায় ১৬<sup>৪</sup> = ৬৫৫৩৬-এর মতো বড় ঘাত মনে রাখতে হয় না।</p>
        <table class="truth cols"><thead><tr><th>অঙ্ক</th><th>হিসাব</th><th>চলতি ফল</th></tr></thead><tbody><tr><td>1</td><td>প্রথম অঙ্ক</td><td>1</td></tr><tr><td>0</td><td>1 × 2 + 0</td><td>2</td></tr><tr><td>1</td><td>2 × 2 + 1</td><td>5</td></tr><tr><td>1</td><td>5 × 2 + 1</td><td>11</td></tr><tr><td>0</td><td>11 × 2 + 0</td><td>22</td></tr><tr><td>1</td><td>22 × 2 + 1</td><td>45</td></tr></tbody></table>
        <p class="work-res">(101101)<sub>2</sub> = (<b>45</b>)<sub>10</sub></p>
        <table class="truth cols"><thead><tr><th>অঙ্ক</th><th>হিসাব</th><th>চলতি ফল</th></tr></thead><tbody><tr><td>1</td><td>প্রথম অঙ্ক</td><td>1</td></tr><tr><td>2</td><td>1 × 16 + 2</td><td>18</td></tr><tr><td>A (10)</td><td>18 × 16 + 10</td><td>298</td></tr><tr><td>7</td><td>298 × 16 + 7</td><td>4775</td></tr><tr><td>C (12)</td><td>4775 × 16 + 12</td><td>76412</td></tr></tbody></table>
        <p class="work-res">(12A7C)<sub>16</sub> = (<b>76412</b>)<sub>10</sub></p>
        <p class="expand"><span>(5776)<sub>8</sub></span> 5 → 5 × 8 + 7 = 47 → 47 × 8 + 7 = 383 → 383 × 8 + 6 = <b>3070</b></p>
        <p class="prose">এটি পূর্ণ অংশের জন্য; ভগ্নাংশে ঘাতের নিয়মই (অংশ ৩) সহজ। লিখিত উত্তরে ঘাতের রূপটি প্রচলিত, এই কৌশলে মিলিয়ে নিন।</p>
        <h3 class="sub"><span>ছ</span>দেখেই চেনা সংখ্যা</h3>
        <table class="rt cmp"><thead><tr><th>সংখ্যা</th><th>মান</th><th>কেন</th></tr></thead><tbody><tr><td class="m">(1111)<sub>2</sub></td><td>১৫</td><td>চারটি 1 = ২<sup>৪</sup> − ১</td></tr><tr><td class="m">(111111)<sub>2</sub></td><td>৬৩</td><td>ছয়টি 1 = ২<sup>৬</sup> − ১</td></tr><tr><td class="m">(11111111)<sub>2</sub></td><td>২৫৫</td><td>আটটি 1 = ২<sup>৮</sup> − ১; ৮ বিটে সবচেয়ে বড়</td></tr><tr><td class="m">(10000)<sub>2</sub></td><td>১৬</td><td>1-এর পরে চারটি 0 = ২<sup>৪</sup></td></tr><tr><td class="m">(10000000)<sub>2</sub></td><td>১২৮</td><td>1-এর পরে সাতটি 0 = ২<sup>৭</sup></td></tr><tr><td class="m">(FF)<sub>16</sub></td><td>২৫৫</td><td>দুই হেক্সা অঙ্কে সবচেয়ে বড় = ১৬<sup>২</sup> − ১</td></tr><tr><td class="m">(100)<sub>16</sub></td><td>২৫৬</td><td>১৬<sup>২</sup></td></tr><tr><td class="m">(777)<sub>8</sub></td><td>৫১১</td><td>তিন অক্টাল অঙ্কে সবচেয়ে বড় = ৮<sup>৩</sup> − ১</td></tr><tr><td class="m">(1000)<sub>8</sub></td><td>৫১২</td><td>৮<sup>৩</sup></td></tr></tbody></table>
        <p class="prose">নিয়ম দুটি: পরপর n টি সর্বোচ্চ অঙ্ক = (ভিত্তি)<sup>n</sup> − ১, আর 1-এর পরে n টি 0 = (ভিত্তি)<sup>n</sup>। কারণ সব 1-এর সঙ্গে ১ যোগ করলেই 1-এর পরে সব 0 হয়: 1111 + 1 = 10000, তাই 1111 = ১৬ − ১ = ১৫।</p>
        <h3 class="sub"><span>জ</span>আরও কয়েকটি ছোট কৌশল</h3>
        <ul class="pts">
          <li><b>সরিয়ে গুণ-ভাগ:</b> বাইনারিতে ডানে একটি 0 বসালে মান দ্বিগুণ: 101 → 1010 (৫ → ১০); তিনটি 0 বসালে ৮ গুণ। শেষ বিটটি বাদ দিলে মান অর্ধেক, আর বাদ পড়া বিটটিই ভাগশেষ: 1011 → 101, অর্থাৎ ১১ ÷ ২ = ৫, ভাগশেষ ১। হেক্সায় ডানে 0 বসালে ১৬ গুণ: (2C)<sub>16</sub> = ৪৪ থেকে (2C0)<sub>16</sub> = ৭০৪।</li>
          <li><b>জোড় না বিজোড়:</b> বাইনারির শেষ বিট 0 হলে জোড়, 1 হলে বিজোড়। অক্টাল আর হেক্সার ভিত্তিও জোড়, তাই সেখানে শুধু শেষ অঙ্কটি দেখুন: (2CD)<sub>16</sub>-এর শেষ অঙ্ক D = ১৩, তাই সংখ্যাটি বিজোড় (৭১৭)।</li>
        </ul>
        <p class="prose"><b>মুখস্থ রাখার ভগ্নাংশ:</b> আটের ভাগগুলো তিন পদ্ধতিতেই ছোট আর শেষ হয়ে যায়; অক্টালে দেখুন, অঙ্কটি ঠিক আটের ভাগের লব।</p>
        <table class="truth"><thead><tr><th>দশমিক</th><th>বাইনারি</th><th>অক্টাল</th><th>হেক্সা</th></tr></thead><tbody><tr><td>.125</td><td>.001</td><td>.1</td><td>.2</td></tr><tr><td>.25</td><td>.01</td><td>.2</td><td>.4</td></tr><tr><td>.375</td><td>.011</td><td>.3</td><td>.6</td></tr><tr><td>.5</td><td>.1</td><td>.4</td><td>.8</td></tr><tr><td>.625</td><td>.101</td><td>.5</td><td>.A</td></tr><tr><td>.75</td><td>.11</td><td>.6</td><td>.C</td></tr><tr><td>.875</td><td>.111</td><td>.7</td><td>.E</td></tr></tbody></table>
        <h3 class="sub"><span>ঝ</span>কখন কোন উপায়</h3>
        <table class="rt cmp">
          <thead><tr><th>কাজ</th><th>দ্রুত উপায়</th><th>লিখিত উত্তরে</th></tr></thead>
          <tbody>
            <tr><td>বাইনারি থেকে দশমিক</td><td>৮৪২১: ওজন যোগ</td><td>ওজন যোগ বা ঘাতের গুণ, দুটোই চলে</td></tr>
            <tr><td>লম্বা হেক্সা বা অক্টাল থেকে দশমিক</td><td>গুণ করে যোগ (চ)</td><td>ঘাতের রূপ; গুণ করে যোগে মিলিয়ে নিন</td></tr>
            <tr><td>সব 1, বা 1-এর পরে সব 0</td><td>দেখেই (ছ)</td><td>একই</td></tr>
            <tr><td>হেক্সা ↔ অক্টাল</td><td><a href="#/note/number-system/bridge">বাইনারি সেতু, চার ধাপে</a></td><td>একই, চার ধাপ লিখে</td></tr>
            <tr><td>ছোট দশমিক থেকে বাইনারি</td><td>৮৪২১</td><td>ভাগের মই দেখান, ৮৪২১ দিয়ে মিলিয়ে নিন</td></tr>
            <tr><td>বড় সংখ্যা (যেমন ৩০১৫)</td><td>ভাগের মই</td><td>ভাগের মই</td></tr>
            <tr><td>ভগ্নাংশ .৫, .২৫, .১২৫ দিয়ে গড়া</td><td>৮৪২১</td><td>×২-এর সারণি</td></tr>
            <tr><td>ভগ্নাংশ .৩৫, .৮৬-এর মতো</td><td>×২-এর সারণি</td><td>×২-এর সারণি</td></tr>
            <tr><td>হেক্সা বা অক্টাল ↔ বাইনারি</td><td>প্রতি অঙ্কে ৮৪২১ বা ৪২১</td><td>একই</td></tr>
            <tr><td>BCD</td><td>প্রতি অঙ্কে ৮৪২১</td><td>একই</td></tr>
          </tbody>
        </table>
        <p class="prose">নিজে মিলিয়ে দেখতে চাইলে <a href="#/note/number-system/past">বিগত অঙ্কের</a> যেকোনো উত্তর ৮৪২১ দিয়ে যাচাই করুন।</p>
      </div>
      <aside class="side">
        <p><b>MCQ-তে</b>“(1101)<sub>2</sub> = ?” দেখামাত্র ৮ + ৪ + ১ = ১৩। “(25)<sub>10</sub> = ?” হলে ১৬ + ৮ + ১, অর্থাৎ 11001।</p>
        <p><b>মনে রাখুন</b>২<sup>৮</sup> = ২৫৬ আর ২<sup>১০</sup> = ১০২৪, যা এক কিলো; ৮ বিটে সর্বোচ্চ ২৫৫ = 11111111।</p>
      </aside>
    </section>



    <section class="blk" id="arith" data-topic="arith" data-short="যোগ, বিয়োগ, গুণ, ভাগ">
      <p class="blk-no">অংশ ৬<small>সিলেবাস খ.৪</small></p>
      <div class="body">
        <h2>যোগ, বিয়োগ, গুণ, ভাগ</h2>
        <h3 class="sub"><span>৬.১</span>বাইনারি যোগ</h3>
        <p class="prose">যোগফল ১-এর বেশি হলেই বাড়তিটুকু ক্যারি হয়ে বাঁয়ের ঘরে যায়।</p>
        <table class="truth">
          <thead><tr><th>যোগ</th><th>যোগফল</th><th>ক্যারি</th></tr></thead>
          <tbody><tr><td>0 + 0</td><td>0</td><td>0</td></tr><tr><td>0 + 1</td><td>1</td><td>0</td></tr><tr><td>1 + 1</td><td>0</td><td>1</td></tr><tr><td>1 + 1 + 1</td><td>1</td><td>1</td></tr></tbody>
        </table>
        <div class="bcalc">
          <code>  1011</code><span>১১</span>
          <code class="add">+ 1101</code><span>১৩</span>
          <code class="res"> 11000</code><span>= <b>২৪</b></span>
        </div>
        <p class="tip"><b>“১ + ১ = ১ আবার ১ + ১ = ১০” কীভাবে:</b> বুলিয়ান অ্যালজেবরায় + মানে যৌক্তিক যোগ (OR): সত্য অথবা সত্য = সত্য, তাই ১ + ১ = ১। আর বাইনারি গাণিতিক যোগে ১ + ১ = দুই, যা বাইনারিতে লেখা হয় 10 (যোগফল ০, ক্যারি ১)।</p>

        <h3 class="sub"><span>৬.২</span>বাইনারি বিয়োগ</h3>
        <p class="prose">০ থেকে ১ বিয়োগ করতে হলে বাঁয়ের ঘর থেকে ১ ধার নিতে হয়; ধার করা সেই ১-এর মান এই ঘরে ২, তাই ২ − ১ = ১ বসে। নিয়ম: 0 − 0 = 0, 1 − 0 = 1, 1 − 1 = 0, 0 − 1 = 1 (ধার ১)।</p>
        <div class="bcalc">
          <code>  1101</code><span>১৩</span>
          <code class="add">−  101</code><span>৫</span>
          <code class="res">  1000</code><span>= <b>৮</b></span>
        </div>

        <h3 class="sub"><span>৬.৩</span>বাইনারি গুণ ও ভাগ</h3>
        <p class="prose">নিয়ম দশমিকের মতোই, শুধু ঘরের নামতা ছোট: ০ × ০ = ০, ০ × ১ = ০, ১ × ১ = ১। গুণকের প্রতিটি ১-এর জন্য গুণ্যকে এক ঘর করে বাঁয়ে সরিয়ে লিখে যোগ করুন।</p>
        <div class="bcalc">
          <code>      11011</code><span>২৭</span>
          <code class="add">×       101</code><span>৫</span>
          <code>      11011</code><span>১-এর জন্য</span>
          <code>     00000 </code><span>০-এর জন্য, এক ঘর সরে</span>
          <code class="add">+  11011  </code><span>১-এর জন্য, দুই ঘর সরে</span>
          <code class="res">   10000111</code><span>= <b>১৩৫</b> = (207)<sub>8</sub></span>
        </div>
        <p class="prose">ভাগে দশমিকের মতোই লম্বা ভাগ: ভাজকটি যতবার “ঢোকে” ততবার ১, না ঢুকলে ০।</p>
        <p class="expand"><span>(11001)<sub>2</sub> ÷ (101)<sub>2</sub></span> = (<b>101</b>)<sub>2</sub>, ভাগশেষ ০ &nbsp;অর্থাৎ ২৫ ÷ ৫ = ৫</p>
        <p class="expand"><span>(11)<sub>2</sub> × (10)<sub>2</sub></span> = (<b>110</b>)<sub>2</sub> &nbsp;অর্থাৎ ৩ × ২ = ৬; বাইনারিতে 10 দিয়ে গুণ মানে ডানে একটি শূন্য বসানো</p>

        <h3 class="sub"><span>৬.৪</span>অক্টাল ও হেক্সায় যোগ-বিয়োগ</h3>
        <p class="prose">ঘরের যোগফল ভিত্তির সমান বা বেশি হলে ভিত্তি বাদ দিয়ে বাকিটা বসান, আর ১ হাতে নিন। বিয়োগে ধার নিলে সেই ঘরে ভিত্তির সমান (৮ বা ১৬) যোগ হয়।</p>
        <p class="expand"><span>(17)<sub>8</sub> + (36)<sub>8</sub></span> : 7 + 6 = 13 = 8 + 5, বসে 5, হাতে 1; তারপর 1 + 3 + 1 = 5 → (<b>55</b>)<sub>8</sub></p>
        <h4 class="sub-h" id="oct-add"><span>অক্টাল যোগ</span><span>ধাপে ধাপে</span></h4>
        <p class="prose">ডান থেকে ঘর ধরে যোগ করুন, হিসাবটা দশমিকেই। যোগফল ৮ বা তার বেশি হলে ৮ বাদ দিয়ে বাকিটা বসান, আর হাতে ১ নিয়ে বাঁয়ের ঘরে যোগ করুন। এক ঘরে সর্বোচ্চ ৭ + ৭ + ১ = ১৫, তাই হাতে কখনো ১-এর বেশি যায় না।</p>
        <div class="bcalc">
          <code class="cy">111 </code><span>হাতে</span>
          <code>657</code><span>(657)<sub>8</sub> = ৪৩১</span>
          <code class="add">+ 476</code><span>(476)<sub>8</sub> = ৩১৮</span>
          <code class="res">1355</code><span>যোগফল</span>
        </div>
        <table class="truth cols">
          <thead><tr><th>ঘর (ডান থেকে)</th><th>যোগ</th><th>বসে</th><th>হাতে</th></tr></thead>
          <tbody><tr><td>১</td><td>7 + 6 = 13 = 8 + 5</td><td>5</td><td>1</td></tr><tr><td>২</td><td>5 + 7 + 1 = 13 = 8 + 5</td><td>5</td><td>1</td></tr><tr><td>৩</td><td>6 + 4 + 1 = 11 = 8 + 3</td><td>3</td><td>1</td></tr></tbody>
        </table>
        <p class="final"><b>উত্তর</b>(657)<sub>8</sub> + (476)<sub>8</sub> = (1355)<sub>8</sub></p>
        <p class="prose">যাচাই: ৪৩১ + ৩১৮ = ৭৪৯; (1355)<sub>8</sub> = ১ × ৫১২ + ৩ × ৬৪ + ৫ × ৮ + ৫ = ৭৪৯। ভগ্নাংশসহ পরীক্ষার রূপে পুরো উদাহরণ আছে <a href="#/note/number-system/n8-3o2">৮ম পরীক্ষার প্রশ্ন ৩-এ</a>: (753.26)<sub>8</sub> + (265.75)<sub>8</sub> = (1241.23)<sub>8</sub>।</p>
        <h4 class="sub-h" id="oct-sub"><span>অক্টাল বিয়োগ</span><span>ধার নিয়ে</span></h4>
        <p class="prose">ওপরের অঙ্ক ছোট হলে বাঁয়ের ঘর থেকে ১ ধার নিন। ধারের মান এই ঘরে ৮ (অক্টালের ভিত্তি), তাই অঙ্কটির সঙ্গে ৮ যোগ করে তারপর বিয়োগ। যে ঘর ধার দিল, সেখানে ১ কমে যায়; সেখানে 0 থাকলে সেটিও আবার বাঁ থেকে ধার নেয়, যেমন নিচের তৃতীয় ঘরে।</p>
        <div class="bcalc">
          <code>5034</code><span>(5034)<sub>8</sub> = ২৫৮৮</span>
          <code class="add">− 1767</code><span>(1767)<sub>8</sub> = ১০১৫</span>
          <code class="res">3045</code><span>বিয়োগফল</span>
        </div>
        <table class="truth cols">
          <thead><tr><th>ঘর (ডান থেকে)</th><th>বিয়োগ</th><th>বসে</th><th>ধার নিল</th></tr></thead>
          <tbody><tr><td>১</td><td>4 − 7 → ধার: 4 + 8 = 12, 12 − 7 = 5</td><td>5</td><td>হ্যাঁ</td></tr><tr><td>২</td><td>3 − 1 (ধার) − 6 → ধার: 2 + 8 = 10, 10 − 6 = 4</td><td>4</td><td>হ্যাঁ</td></tr><tr><td>৩</td><td>0 − 1 (ধার) − 7 → ধার: −1 + 8 = 7, 7 − 7 = 0</td><td>0</td><td>হ্যাঁ</td></tr><tr><td>৪</td><td>5 − 1 (ধার) − 1 = 3</td><td>3</td><td>না</td></tr></tbody>
        </table>
        <p class="final"><b>উত্তর</b>(5034)<sub>8</sub> − (1767)<sub>8</sub> = (3045)<sub>8</sub></p>
        <p class="prose">যাচাই: ২৫৮৮ − ১০১৫ = ১৫৭৩; উল্টো দিকে যোগ করেও মেলে: (3045)<sub>8</sub> + (1767)<sub>8</sub> = (5034)<sub>8</sub>।</p>
        <h4 class="sub-h" id="hex-sub"><span>হেক্সা বিয়োগ</span><span>ধার নিয়ে</span></h4>
        <p class="prose">একই নিয়ম, শুধু ধারের মান ১৬। অক্ষরগুলো আগে মানে বদলে নিন: A = ১০ … F = ১৫।</p>
        <div class="bcalc">
          <code>A3C</code><span>(A3C)<sub>16</sub> = ২৬২০</span>
          <code class="add">− 5E7</code><span>(5E7)<sub>16</sub> = ১৫১১</span>
          <code class="res">455</code><span>বিয়োগফল</span>
        </div>
        <table class="truth cols">
          <thead><tr><th>ঘর (ডান থেকে)</th><th>বিয়োগ</th><th>বসে</th><th>ধার নিল</th></tr></thead>
          <tbody><tr><td>১</td><td>C − 7 (12 − 7) = 5</td><td>5</td><td>না</td></tr><tr><td>২</td><td>3 − E (3 − 14) → ধার: 3 + 16 = 19, 19 − 14 = 5</td><td>5</td><td>হ্যাঁ</td></tr><tr><td>৩</td><td>A − 1 (ধার) − 5 (10 − 1 − 5) = 4</td><td>4</td><td>না</td></tr></tbody>
        </table>
        <p class="final"><b>উত্তর</b>(A3C)<sub>16</sub> − (5E7)<sub>16</sub> = (455)<sub>16</sub></p>
        <p class="prose">যাচাই: ২৬২০ − ১৫১১ = ১১০৯। হেক্সা যোগের পুরো উদাহরণ আছে <a href="#/note/number-system/n10-3o-k">১০ম পরীক্ষায়</a> (6F.A + 7D.B) আর <a href="#/note/number-system/n4-2">৪র্থ পরীক্ষায়</a> (ABC + DEF); ধার ছাড়া হেক্সা বিয়োগ <a href="#/note/number-system/n8-6">৮ম পরীক্ষায়</a>।</p>
        <p class="tip"><b>ধারের মান মনে রাখুন:</b> বাইনারিতে ২, অক্টালে ৮, দশমিকে ১০, হেক্সায় ১৬; যে পদ্ধতি, ধারের মান তার ভিত্তি। যোগে হাতের ১-ও একই নিয়মে আসে: যোগফল ভিত্তি ছুঁলেই হাতে ১।</p>

        <h3 class="sub"><span>৬.৫</span>ভিন্ন পদ্ধতির দুটি সংখ্যা</h3>
        <p class="prose">আগে দুটিকে একই পদ্ধতিতে আনুন (প্রশ্নে যে পদ্ধতিতে ফল চাওয়া, সেটিতে বা বাইনারিতে), তারপর যোগ বা বিয়োগ করুন। যেমন (BF)<sub>16</sub> + (55)<sub>8</sub>, ফল হেক্সায় (১৭তম পরীক্ষা):</p>
        <p class="expand"><span>(55)<sub>8</sub></span> = 101 101 = 0010 1101 = (2D)<sub>16</sub></p>
        <div class="bcalc">
          <code>  BF</code><span>(BF)<sub>16</sub> = ১৯১</span>
          <code class="add">+ 2D</code><span>(55)<sub>8</sub> = ৪৫</span>
          <code class="res">  EC</code><span>F + D = ২৮ = ১৬ + ১২, বসে C, হাতে ১; B + 2 + 1 = ১৪ = E → (<b>EC</b>)<sub>16</sub> = ২৩৬</span>
        </div>
        <p class="prose">ভগ্নাংশসহ হেক্সা ও দশমিকের যোগের পুরো সমাধান: <a href="#/written/18-school/q8">১৮তম লিখিত প্রশ্ন ৮</a>।</p>

        <div data-prev="arith"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="115-119,122,130-141" data-name="গাণিতিক কাজ">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch02/q115">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>যাচাই করুন</b>পরীক্ষায় সময় থাকলে উত্তরটি দশমিকে নিয়ে মিলিয়ে নিন: ১১ + ১৩ = ২৪, ২৭ × ৫ = ১৩৫।</p>
        <p><b>সবচেয়ে বেশি আসে</b>ভগ্নাংশসহ দুটি বাইনারি সংখ্যার যোগ-বিয়োগ, আর ভিন্ন পদ্ধতির দুটি সংখ্যা যোগ করে তৃতীয় পদ্ধতিতে প্রকাশ।</p>
      </aside>
    </section>

    <section class="blk" id="complement" data-topic="comp" data-short="পরিপূরক">
      <p class="blk-no">অংশ ৭<small>সিলেবাস খ.৪</small></p>
      <div class="body">
        <h2>পরিপূরক</h2>
        <p class="prose">কোনো বাইনারি সংখ্যার সব বিট উল্টে দিলে (০-র জায়গায় ১, ১-এর জায়গায় ০) পাওয়া যায় <em>১-এর পরিপূরক</em>। তার সঙ্গে ১ যোগ করলে হয় <em>২-এর পরিপূরক</em>। কম্পিউটার ঋণাত্মক সংখ্যা রাখে ২-এর পরিপূরকে।</p>
        <div class="handsum" role="img" aria-label="+১২ হলো 00001100। সব বিট উল্টালে 11110011। ১ যোগ করলে 11110100, যা −১২।">
          <code>0000 1100</code><span>+১২ (৮ বিটে)</span>
          <code>1111 0011</code><span>সব বিট উল্টে (১-এর পরিপূরক)</span>
          <code class="plus">+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1</code><span>১ যোগ</span>
          <code class="tot">1111 0100</code><span><b>−১২</b> (২-এর পরিপূরক)</span>
        </div>
        <p class="prose">সবচেয়ে বাঁয়ের বিটটি <em>চিহ্ন বিট</em>: ০ হলে সংখ্যা ধনাত্মক, ১ হলে ঋণাত্মক।</p>

        <h3 class="sub"><span>৭.১</span>২-এর পরিপূরকের শর্টকাট</h3>
        <p class="prose">“সব বিট উল্টে ১ যোগ” দুই ধাপের বদলে এক ধাপে, যোগ বা ক্যারি ছাড়াই: <em>ডান দিক থেকে পড়ুন; প্রথম 1 পর্যন্ত (সেটিসহ) বিটগুলো হুবহু লিখুন, তারপর বাঁয়ের বাকি সব বিট উল্টে দিন।</em></p>
        <div class="bcalc">
          <code>0000 1<span class="cp">100</span></code><span>+১২; ডান থেকে প্রথম 1 পর্যন্ত দাগ দেওয়া অংশ হুবহু</span>
          <code class="res">1111 0<span class="cp">100</span></code><span>বাঁয়ের বাকিটা উল্টে: <b>−১২</b></span>
        </div>
        <p class="prose">ওপরের দুই ধাপের উত্তর 1111 0100-ই এল। আরও কয়েকটি:</p>
        <p class="expand"><span>+১৫</span> 0000 111<span class="cp">1</span> → 1111 000<span class="cp">1</span> = <b>−১৫</b></p>
        <p class="expand"><span>+২০</span> 0001 0<span class="cp">100</span> → 1110 1<span class="cp">100</span> = <b>−২০</b></p>
        <p class="expand"><span>+১৩</span> 0000 110<span class="cp">1</span> → 1111 001<span class="cp">1</span> = <b>−১৩</b></p>
        <p class="prose">যাচাই: সংখ্যা আর তার ২-এর পরিপূরক যোগ করলে ৮ বিটে সব ০ আসে, শুধু শেষে একটি ক্যারি: 0000 1100 + 1111 0100 = 1 0000 0000। কোনো 1 না থাকলে (শূন্য) কিছুই উল্টায় না; 0000 0000-এর পরিপূরক 0000 0000-ই, তাই শূন্যের রূপ একটিই।</p>
        <p class="tip"><b>পরীক্ষার খাতায়:</b> প্রশ্নে “২-এর পরিপূরক নির্ণয় করুন” থাকলে দুই ধাপের নিয়মটি লিখে দেখান, পাশে এই শর্টকাটে মিলিয়ে নিন। MCQ-তে সরাসরি শর্টকাট।</p>

        <h3 class="sub"><span>৭.২</span>২-এর পরিপূরকে বিয়োগ</h3>
        <p class="prose">যে সংখ্যা বিয়োগ করতে হবে, তার ২-এর পরিপূরক নিয়ে <em>যোগ</em> করুন। শেষে বাড়তি একটি ক্যারি এলে সেটি বাদ যায়। যেমন (২৫) থেকে (১৫) বিয়োগ (১৬তম পরীক্ষা):</p>
        <div class="bcalc">
          <code>  0001 1001</code><span>+২৫</span>
          <code class="add">+ 1111 0001</code><span>−১৫ (১৫-এর ২-এর পরিপূরক)</span>
          <code class="res"><i class="carry" title="শেষ ক্যারি">1</i> 0000 1010</code><span>শেষ ক্যারি <i class="carry">1</i> বাদ দিলে <b>0000 1010</b> = ১০</span>
        </div>
        <p class="prose">ফলের চিহ্ন বিট ১ হলে ফল ঋণাত্মক; তখন আবার ২-এর পরিপূরক নিলে তার মান পাওয়া যায়। যেমন (−১৩) থেকে (৯) বিয়োগ, অর্থাৎ (−১৩) + (−৯) (১৭তম পরীক্ষা):</p>
        <div class="bcalc">
          <code>  1111 0011</code><span>−১৩</span>
          <code class="add">+ 1111 0111</code><span>−৯</span>
          <code class="res"><i class="carry" title="শেষ ক্যারি">1</i> 1110 1010</code><span>ক্যারি বাদ; চিহ্ন বিট ১, তাই ঋণাত্মক</span>
        </div>
        <p class="prose">1110 1010-এর ২-এর পরিপূরক 0001 0110 = ২২, তাই উত্তর <b>−২২</b>। আরেকটি পুরো উদাহরণ আছে <a href="#/written/18-school/q5">১৮তম লিখিত পরীক্ষার ৫ নম্বর প্রশ্নে</a>।</p>

        <table class="rt rng">
          <thead><tr><th></th><th>৪ বিট</th><th>৮ বিট</th><th>n বিট</th></tr></thead>
          <tbody>
            <tr><td>চিহ্নহীন</td><td>০ থেকে ১৫</td><td>০ থেকে ২৫৫</td><td class="m">0 … 2<sup>n</sup> − 1</td></tr>
            <tr><td>২-এর পরিপূরক</td><td>−৮ থেকে +৭</td><td>−১২৮ থেকে +১২৭</td><td class="m">−2<sup>n−1</sup> … 2<sup>n−1</sup> − 1</td></tr>
          </tbody>
        </table>

        <div data-prev="comp"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="85-91,120,121,126,128,129,142-145" data-name="পরিপূরক">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch02/q85">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>কেন ২-এর পরিপূরক</b>যোগ আর বিয়োগ একই সার্কিটে হয়, আর শূন্যের রূপ একটিই থাকে; ১-এর পরিপূরকে +০ ও −০ দুটি রূপ হয়। এ কারণেই বলা হয়, “কম্পিউটার যোগের মাধ্যমেই সব কাজ করে”।</p>
        <p><b>প্রথম লাইনেই</b>কত বিট ধরছেন লিখে দিন (সাধারণত ৮ বিট)।</p>
        <p><b>ফাঁদ</b>৮ বিটে ঋণাত্মক দিকে একটি সংখ্যা বেশি: −১২৮ আছে, কিন্তু +১২৮ নেই।</p>
      </aside>
    </section>

    <section class="blk" id="past">
      <p class="blk-no">অংশ ৮<small>১০ম–৩য় পরীক্ষা</small></p>
      <div class="body">
        <h2>বিগত পরীক্ষার অঙ্ক, সমাধানসহ</h2>
        <p class="prose">১১তম থেকে ১৮তম পরীক্ষার এই অধ্যায়ের প্রতিটি প্রশ্নের পূর্ণ নমুনা উত্তর আছে লিখিত উত্তর অংশে (প্রতিটি অংশের “পরীক্ষায় যেভাবে এসেছে” তালিকায় লিংক)। এখানে তার আগের পরীক্ষাগুলোর সব অঙ্ক, নতুন থেকে পুরোনো। প্রতিটির শেষে দশমিকে যাচাই; ভগ্নাংশ শেষ না হলে বাইনারিতে ৮ ঘর, অক্টাল ও হেক্সায় ৪ ঘর পর্যন্ত নেওয়া হয়েছে।</p>
<!--PAST-BATCHES-->
        <h3 class="sub"><span>৮.১</span>১০ম পরীক্ষা (২০১৪)</h3>
        <h4 class="sub-h" id="n10-3k"><span>প্রশ্ন ৩ ক</span><span>5G কোন ধরনের সংখ্যা?</span></h4>
        <p class="prose">চারটি প্রচলিত পদ্ধতির কোনোটিতেই G অঙ্ক নেই: বাইনারিতে শুধু 0 ও 1, অক্টালে 0–7, দশমিকে 0–9, আর হেক্সাডেসিমালে 0–9 ও A–F (F-এর মান ১৫)। তাই 5G বাইনারি, অক্টাল, দশমিক বা হেক্সাডেসিমাল, কোনো পদ্ধতিরই বৈধ সংখ্যা নয়, আর এর সমকক্ষ বাইনারি, অক্টাল বা দশমিক মানও বের করা যায় না।</p>
        <p class="final"><b>উত্তর</b>5G কোনো প্রচলিত সংখ্যা পদ্ধতির বৈধ সংখ্যা নয়।</p>
        <p class="tip"><b>খাতায় যা লিখবেন:</b> আগে কারণসহ লিখুন যে সংখ্যাটি অবৈধ। চাইলে যোগ করুন: অঙ্কের ক্রম ধরে G-এর মান ১৬ নিলে এটি ১৭ বা তার বেশি ভিত্তির সংখ্যা হতে পারে, যেমন (5G)<sub>17</sub> = 5 × 17 + 16 = ১০১। “কোন ধরনের সংখ্যা” চেনার নিয়ম আছে <a href="#/note/number-system/systems">অংশ ২-এ</a>।</p>
        <h4 class="sub-h" id="n10-3kh"><span>প্রশ্ন ৩ খ</span><span>(101100.1)<sub>2</sub> ও (11011.101)<sub>2</sub> যোগ</span></h4>
        <p class="prose">বিন্দু বরাবর সাজিয়ে ভগ্নাংশের ফাঁকা ঘরে ০ বসাই, তারপর ডান থেকে যোগ। ১ + ১ = ১০: বসে ০, হাতে ১; ১ + ১ + ১ = ১১: বসে ১, হাতে ১। ওপরের সারিতে হাতের ১গুলো।</p>
        <div class="bcalc">
          <code class="cy">1111111    </code><span>হাতে</span>
          <code>101100.100</code><span>(101100.1)<sub>2</sub> = ৪৪.৫</span>
          <code class="add">+  11011.101</code><span>(11011.101)<sub>2</sub> = ২৭.৬২৫</span>
          <code class="res">1001000.001</code><span>যোগফল</span>
        </div>
        <p class="final"><b>উত্তর</b>(101100.1)<sub>2</sub> + (11011.101)<sub>2</sub> = (1001000.001)<sub>2</sub></p>
        <p class="prose">যাচাই: ৪৪.৫ + ২৭.৬২৫ = ৭২.১২৫; আর (1001000.001)<sub>2</sub> = ৬৪ + ৮ + ০.১২৫ = ৭২.১২৫।</p>
        <h4 class="sub-h" id="n10-3o-k"><span>প্রশ্ন ৩ (অথবা) ক</span><span>(6F.A)<sub>16</sub> ও (7D.B)<sub>16</sub> যোগ, ফল বাইনারিতে</span></h4>
        <p class="prose">হেক্সায় সরাসরি যোগ করি: কোনো ঘরের যোগফল ১৬ বা বেশি হলে ১৬ বাদ দিয়ে বাকিটা বসে, হাতে ১। মনে রাখুন A = ১০, B = ১১, C = ১২, D = ১৩, E = ১৪, F = ১৫।</p>
        <div class="bcalc">
          <code class="cy">11  </code><span>হাতে</span>
          <code>6F.A</code><span>(6F.A)<sub>16</sub> = ১১১.৬২৫</span>
          <code class="add">+ 7D.B</code><span>(7D.B)<sub>16</sub> = ১২৫.৬৮৭৫</span>
          <code class="res">ED.5</code><span>যোগফল</span>
        </div>
        <table class="truth cols">
          <thead><tr><th>ঘর (ডান থেকে)</th><th>যোগ</th><th>বসে</th><th>হাতে</th></tr></thead>
          <tbody><tr><td>১</td><td>A + B = 10 + 11 = 21 = 16 + 5</td><td>5</td><td>1</td></tr><tr><td>২</td><td>F + D + 1 = 15 + 13 + 1 = 29 = 16 + 13</td><td>D</td><td>1</td></tr><tr><td>৩</td><td>6 + 7 + 1 = 14</td><td>E</td><td>০</td></tr></tbody>
        </table>
        <p class="expand"><span>বাইনারিতে</span> প্রতিটি হেক্সা অঙ্ক ৪ বিটে: E D 5 → 1110 1101 . 0101 = (<b>11101101.0101</b>)<sub>2</sub></p>
        <p class="final"><b>উত্তর</b>(6F.A)<sub>16</sub> + (7D.B)<sub>16</sub> = (ED.5)<sub>16</sub> = (11101101.0101)<sub>2</sub></p>
        <p class="prose">যাচাই: ১১১.৬২৫ + ১২৫.৬৮৭৫ = ২৩৭.৩১২৫।</p>
        <h4 class="sub-h" id="n10-3o-kh"><span>প্রশ্ন ৩ (অথবা) খ</span><span>(3015.86)<sub>10</sub> থেকে হেক্সাডেসিমাল</span></h4>
        <p class="prose">পূর্ণ অংশ ১৬ দিয়ে বারবার ভাগ, ভগ্নাংশ ১৬ দিয়ে বারবার গুণ। ভাগশেষ বা পূর্ণ অংশ ১০ থেকে ১৫ হলে A থেকে F লিখুন।</p>
        <div class="work">
          <div class="ladder" role="img" aria-label="৩০১৫-কে ১৬ দিয়ে বারবার ভাগ। ভাগশেষ 7, C, B। নিচ থেকে পড়লে BC7।">
            <span class="dv">16</span><span class="qt">3015</span><span class="rm">7</span>
            <span class="dv">16</span><span class="qt">188</span><span class="rm">12 (C)</span>
            <span class="dv">16</span><span class="qt">11</span><span class="rm">11 (B)</span>
            <span class="dv"></span><span class="qt end">0</span><span class="rm"></span>
          </div>
          <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 146 V8 M5 15 L12 6 L19 15"/></svg><span>নিচ থেকে পড়ুন</span></div>
          <p class="work-res">(3015)<sub>10</sub> = (<b>BC7</b>)<sub>16</sub></p>
        </div>
        <div class="work">
          <table class="truth trace">
            <thead><tr><th>ভগ্নাংশ × ১৬</th><th>পূর্ণ অংশ</th></tr></thead>
            <tbody><tr><td>0.86 × 16 = 13.76</td><td>13 (D)</td></tr><tr><td>0.76 × 16 = 12.16</td><td>12 (C)</td></tr><tr><td>0.16 × 16 = 2.56</td><td>2</td></tr><tr><td>0.56 × 16 = 8.96</td><td>8</td></tr></tbody>
          </table>
          <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 4 V142 M5 135 L12 144 L19 135"/></svg><span>ওপর থেকে পড়ুন</span></div>
          <p class="work-res">(0.86)<sub>10</sub> ≈ (<b>0.DC28</b>)<sub>16</sub></p>
        </div>
        <p class="final"><b>উত্তর</b>(3015.86)<sub>10</sub> ≈ (BC7.DC28)<sub>16</sub></p>
        <p class="prose">ভগ্নাংশটি ৪ ঘরে শেষ হয়নি, তাই ৪ ঘর পর্যন্ত নেওয়া হলো। যাচাই: (BC7.DC28)<sub>16</sub> = ৩০১৫.৮৫৯৯৮৫… ≈ ৩০১৫.৮৬।</p>
        <h4 class="sub-h" id="n10-4"><span>প্রশ্ন ৪</span><span>(45.35)<sub>10</sub> থেকে বাইনারি, অক্টাল ও হেক্সাডেসিমাল</span></h4>
        <p class="prose"><b>ধাপ ১, বাইনারি:</b> পূর্ণ অংশ ২ দিয়ে বারবার ভাগ, ভগ্নাংশ ২ দিয়ে বারবার গুণ।</p>
        <div class="work">
          <div class="ladder" role="img" aria-label="৪৫-কে ২ দিয়ে বারবার ভাগ। ভাগশেষ 1, 0, 1, 1, 0, 1। নিচ থেকে পড়লে 101101।">
            <span class="dv">2</span><span class="qt">45</span><span class="rm">1</span>
            <span class="dv">2</span><span class="qt">22</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">11</span><span class="rm">1</span>
            <span class="dv">2</span><span class="qt">5</span><span class="rm">1</span>
            <span class="dv">2</span><span class="qt">2</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">1</span><span class="rm">1</span>
            <span class="dv"></span><span class="qt end">0</span><span class="rm"></span>
          </div>
          <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 146 V8 M5 15 L12 6 L19 15"/></svg><span>নিচ থেকে পড়ুন</span></div>
          <p class="work-res">(45)<sub>10</sub> = (<b>101101</b>)<sub>2</sub></p>
        </div>
        <div class="work">
          <table class="truth trace">
            <thead><tr><th>ভগ্নাংশ × ২</th><th>পূর্ণ অংশ</th></tr></thead>
            <tbody><tr><td>0.35 × 2 = 0.70</td><td>0</td></tr><tr><td>0.70 × 2 = 1.40</td><td>1</td></tr><tr><td>0.40 × 2 = 0.80</td><td>0</td></tr><tr><td>0.80 × 2 = 1.60</td><td>1</td></tr><tr><td>0.60 × 2 = 1.20</td><td>1</td></tr><tr><td>0.20 × 2 = 0.40</td><td>0</td></tr><tr><td>0.40 × 2 = 0.80</td><td>0</td></tr><tr><td>0.80 × 2 = 1.60</td><td>1</td></tr></tbody>
          </table>
          <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 4 V142 M5 135 L12 144 L19 135"/></svg><span>ওপর থেকে পড়ুন</span></div>
          <p class="work-res">(0.35)<sub>10</sub> ≈ (<b>0.01011001</b>)<sub>2</sub></p>
        </div>
        <p class="prose">৩ নম্বর ধাপের ভগ্নাংশ ৭ নম্বর ধাপে আবার এসেছে, তাই এখান থেকে 0110 অংশটি বারবার ফিরে আসবে; ভগ্নাংশটি কখনো শেষ হয় না। ৮ ঘর পর্যন্ত নেওয়া হলো।</p>
        <p class="prose"><b>ধাপ ২, অক্টাল:</b> পূর্ণ অংশ বাইনারি থেকে ডান দিক থেকে ৩ বিটের দল করে; ভগ্নাংশ সরাসরি ৮ দিয়ে গুণ করে, কারণ বাইনারি ভগ্নাংশটি ছাঁটা, তা থেকে দল করলে শেষ অঙ্ক ভুল আসতে পারে।</p>
        <p class="expand"><span>পূর্ণ অংশ</span> 101101 → 101 101 = (<b>55</b>)<sub>8</sub></p>
        <div class="work">
          <table class="truth trace">
            <thead><tr><th>ভগ্নাংশ × ৮</th><th>পূর্ণ অংশ</th></tr></thead>
            <tbody><tr><td>0.35 × 8 = 2.80</td><td>2</td></tr><tr><td>0.80 × 8 = 6.40</td><td>6</td></tr><tr><td>0.40 × 8 = 3.20</td><td>3</td></tr><tr><td>0.20 × 8 = 1.60</td><td>1</td></tr></tbody>
          </table>
          <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 4 V142 M5 135 L12 144 L19 135"/></svg><span>ওপর থেকে পড়ুন</span></div>
          <p class="work-res">(0.35)<sub>10</sub> ≈ (<b>0.2631</b>)<sub>8</sub></p>
        </div>
        <p class="prose"><b>ধাপ ৩, হেক্সাডেসিমাল:</b> একইভাবে, পূর্ণ অংশ ৪ বিটের দলে, ভগ্নাংশ ১৬ দিয়ে গুণ করে।</p>
        <p class="expand"><span>পূর্ণ অংশ</span> 101101 → 0010 1101 = (<b>2D</b>)<sub>16</sub></p>
        <div class="work">
          <table class="truth trace">
            <thead><tr><th>ভগ্নাংশ × ১৬</th><th>পূর্ণ অংশ</th></tr></thead>
            <tbody><tr><td>0.35 × 16 = 5.60</td><td>5</td></tr><tr><td>0.60 × 16 = 9.60</td><td>9</td></tr><tr><td>0.60 × 16 = 9.60</td><td>9</td></tr><tr><td>0.60 × 16 = 9.60</td><td>9</td></tr></tbody>
          </table>
          <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 4 V142 M5 135 L12 144 L19 135"/></svg><span>ওপর থেকে পড়ুন</span></div>
          <p class="work-res">(0.35)<sub>10</sub> ≈ (<b>0.5999</b>)<sub>16</sub></p>
        </div>
        <p class="prose">২ নম্বর ধাপের ভগ্নাংশ ৩ নম্বর ধাপে আবার এসেছে, তাই এখান থেকে 9 অংশটি বারবার ফিরে আসবে; ভগ্নাংশটি কখনো শেষ হয় না। ৪ ঘর পর্যন্ত নেওয়া হলো।</p>
        <p class="final"><b>উত্তর</b>(45.35)<sub>10</sub> ≈ (101101.01011001)<sub>2</sub> ≈ (55.2631)<sub>8</sub> ≈ (2D.5999)<sub>16</sub></p>
        <p class="prose">যাচাই: (101101.01011001)<sub>2</sub> = ৪৫.৩৪৭৬৫৬২৫, (55.2631)<sub>8</sub> = ৪৫.৩৪৯৮৫৩…, (2D.5999)<sub>16</sub> = ৪৫.৩৪৯৯৯০…; তিনটিই ≈ ৪৫.৩৫।</p>
        <h4 class="sub-h" id="n10-10o"><span>প্রশ্ন ১০ (অথবা)</span><span>(BCD)<sub>16</sub> থেকে অক্টাল</span></h4>
        <p class="prose">এখানে BCD কোনো কোড নয়: ভিত্তি ১৬ দেওয়া আছে, তাই B, C, D তিনটি হেক্সা অঙ্ক (মান ১১, ১২, ১৩)। হেক্সা থেকে অক্টালে সরাসরি যাওয়া যায় না; বাইনারির মাধ্যমে যাই। ফাঁদটির কথা আছে <a href="#/note/data-representation/code">অধ্যায় ৩ · কোড ও BCD</a>-তেও।</p>
        <p class="expand"><span>বাইনারিতে</span> B C D → 1011 1100 1101</p>
        <p class="expand"><span>অক্টালে</span> ডান থেকে ৩ বিটের দল: 101 111 001 101 = (<b>5715</b>)<sub>8</sub></p>
        <p class="final"><b>উত্তর</b>(BCD)<sub>16</sub> = (5715)<sub>8</sub></p>
        <p class="prose">যাচাই: (BCD)<sub>16</sub> = ১১ × ২৫৬ + ১২ × ১৬ + ১৩ = ৩০২১; (5715)<sub>8</sub> = ৫ × ৫১২ + ৭ × ৬৪ + ১ × ৮ + ৫ = ৩০২১।</p>
        <h3 class="sub"><span>৮.২</span>৯ম পরীক্ষা (২০১৩)</h3>
        <h4 class="sub-h" id="n9-3"><span>প্রশ্ন ৩</span><span>প্রকারভেদ; ০ থেকে ১৬-এর বাইনারি ও অক্টাল তালিকা</span></h4>
        <p class="prose">প্রকারভেদের আলোচনার জন্য দেখুন <a href="#/note/number-system/systems">অংশ ২ · চার পদ্ধতি</a>। তালিকাটি:</p>
        <table class="truth"><thead><tr><th>দশমিক</th><th>বাইনারি</th><th>অক্টাল</th></tr></thead><tbody><tr><td>০</td><td>0</td><td>0</td></tr><tr><td>১</td><td>1</td><td>1</td></tr><tr><td>২</td><td>10</td><td>2</td></tr><tr><td>৩</td><td>11</td><td>3</td></tr><tr><td>৪</td><td>100</td><td>4</td></tr><tr><td>৫</td><td>101</td><td>5</td></tr><tr><td>৬</td><td>110</td><td>6</td></tr><tr><td>৭</td><td>111</td><td>7</td></tr><tr><td>৮</td><td>1000</td><td>10</td></tr><tr><td>৯</td><td>1001</td><td>11</td></tr><tr><td>১০</td><td>1010</td><td>12</td></tr><tr><td>১১</td><td>1011</td><td>13</td></tr><tr><td>১২</td><td>1100</td><td>14</td></tr><tr><td>১৩</td><td>1101</td><td>15</td></tr><tr><td>১৪</td><td>1110</td><td>16</td></tr><tr><td>১৫</td><td>1111</td><td>17</td></tr><tr><td>১৬</td><td>10000</td><td>20</td></tr></tbody></table>
        <p class="prose">লক্ষ করুন: অক্টালে ৭-এর পরে 10 (আট), বাইনারিতে ১৬ = 10000, অক্টালে ১৬ = 20।</p>
        <h4 class="sub-h" id="n9-3o"><span>প্রশ্ন ৩ (অথবা)</span><span>বাইনারি যোগ, বিয়োগ ও গুণ</span></h4>
        <p class="prose"><b>ক. যোগ:</b> (1011.1010)<sub>2</sub> + (10101.001)<sub>2</sub></p>
        <div class="bcalc">
          <code class="cy">11111   1  </code><span>হাতে</span>
          <code> 1011.1010</code><span>(1011.1010)<sub>2</sub> = ১১.৬২৫</span>
          <code class="add">+ 10101.0010</code><span>(10101.001)<sub>2</sub> = ২১.১২৫</span>
          <code class="res">100000.1100</code><span>যোগফল</span>
        </div>
        <p class="final"><b>উত্তর</b>(1011.1010)<sub>2</sub> + (10101.001)<sub>2</sub> = (100000.11)<sub>2</sub></p>
        <p class="prose">যাচাই: ১১.৬২৫ + ২১.১২৫ = ৩২.৭৫।</p>
        <p class="prose"><b>খ. বিয়োগ:</b> (11010.110)<sub>2</sub> − (1010.101)<sub>2</sub>। ০ থেকে ১ বিয়োগ করতে বাঁয়ের ঘর থেকে ১ ধার নিই; ধারের মান এই ঘরে ২, তাই ২ − ১ = ১। যে ঘর ধার দিল, সেখানে ১ কমে যায়।</p>
        <div class="bcalc">
          <code>11010.110</code><span>(11010.110)<sub>2</sub> = ২৬.৭৫</span>
          <code class="add">−  1010.101</code><span>(1010.101)<sub>2</sub> = ১০.৬২৫</span>
          <code class="res">10000.001</code><span>বিয়োগফল</span>
        </div>
        <table class="truth cols">
          <thead><tr><th>ঘর (ডান থেকে)</th><th>বিয়োগ</th><th>বসে</th><th>ধার নিল</th></tr></thead>
          <tbody><tr><td>১</td><td>0 − 1 → ধার: 0 + 2 = 2, 2 − 1 = 1</td><td>1</td><td>হ্যাঁ</td></tr><tr><td>২</td><td>1 − 1 (ধার) − 0 = 0</td><td>0</td><td>না</td></tr><tr><td>৩</td><td>1 − 1 = 0</td><td>0</td><td>না</td></tr><tr><td>৪</td><td>0 − 0 = 0</td><td>0</td><td>না</td></tr><tr><td>৫</td><td>1 − 1 = 0</td><td>0</td><td>না</td></tr><tr><td>৬</td><td>0 − 0 = 0</td><td>0</td><td>না</td></tr><tr><td>৭</td><td>1 − 1 = 0</td><td>0</td><td>না</td></tr><tr><td>৮</td><td>1 − 0 = 1</td><td>1</td><td>না</td></tr></tbody>
        </table>
        <p class="final"><b>উত্তর</b>(11010.110)<sub>2</sub> − (1010.101)<sub>2</sub> = (10000.001)<sub>2</sub></p>
        <p class="prose">যাচাই: ২৬.৭৫ − ১০.৬২৫ = ১৬.১২৫।</p>
        <p class="prose"><b>গ. গুণ:</b> (1010)<sub>2</sub> × (101)<sub>2</sub>। গুণকের প্রতিটি অঙ্কের জন্য একটি সারি, প্রতিবার এক ঘর বাঁয়ে সরে; তারপর যোগ।</p>
        <div class="bcalc">
          <code>    1010</code><span>(1010)<sub>2</sub> = ১০</span>
          <code class="add">   × 101</code><span>(101)<sub>2</sub> = ৫</span>
          <code>    1010</code><span>গুণকের ১ম অঙ্ক 1</span>
          <code>   0000 </code><span>0, ১ ঘর সরিয়ে</span>
          <code class="add">+ 1010  </code><span>২ ঘর সরিয়ে</span>
          <code class="res">  110010</code><span>গুণফল</span>
        </div>
        <p class="final"><b>উত্তর</b>(1010)<sub>2</sub> × (101)<sub>2</sub> = (110010)<sub>2</sub></p>
        <p class="prose">যাচাই: ১০ × ৫ = ৫০ = ৩২ + ১৬ + ২।</p>
        <h4 class="sub-h" id="n9-10o"><span>প্রশ্ন ১০ (অথবা)</span><span>(A9BD.EF)<sub>16</sub> থেকে বাইনারি</span></h4>
        <p class="prose">প্রতিটি হেক্সা অঙ্কের জায়গায় তার ৪ বিট বসাই; বিন্দু যেখানে ছিল সেখানেই থাকে।</p>
        <p class="expand"><span>প্রতি অঙ্কে ৪ বিট</span> A 9 B D . E F → 1010 1001 1011 1101 . 1110 1111</p>
        <p class="final"><b>উত্তর</b>(A9BD.EF)<sub>16</sub> = (1010100110111101.11101111)<sub>2</sub></p>
        <p class="prose">যাচাই: দুটির মানই ৪৩৪৫৩.৯৩৩৫৯৩৭৫।</p>
        <h3 class="sub"><span>৮.৩</span>৮ম পরীক্ষা (২০১২)</h3>
        <h4 class="sub-h" id="n8-3"><span>প্রশ্ন ৩</span><span>বাইনারি যোগ ও বিয়োগের নিয়ম</span></h4>
        <table class="truth"><thead><tr><th>যোগ</th><th>যোগফল</th><th>হাতে</th></tr></thead><tbody><tr><td>0 + 0</td><td>0</td><td>0</td></tr><tr><td>0 + 1</td><td>1</td><td>0</td></tr><tr><td>1 + 0</td><td>1</td><td>0</td></tr><tr><td>1 + 1</td><td>0</td><td>1</td></tr><tr><td>1 + 1 + 1</td><td>1</td><td>1</td></tr></tbody></table>
        <table class="truth"><thead><tr><th>বিয়োগ</th><th>বিয়োগফল</th><th>ধার</th></tr></thead><tbody><tr><td>0 − 0</td><td>0</td><td>0</td></tr><tr><td>1 − 0</td><td>1</td><td>0</td></tr><tr><td>1 − 1</td><td>0</td><td>0</td></tr><tr><td>0 − 1</td><td>1</td><td>1</td></tr></tbody></table>
        <p class="prose">১ + ১ = দুই, যা বাইনারিতে 10: বসে ০, হাতে ১। আর ০ − ১-এ বাঁয়ের ঘর থেকে ১ ধার নিলে এ ঘরে মান হয় ২, তাই ২ − ১ = ১। একই প্রশ্নের বাকি দুই অংশ (মৌলিক গেট দিয়ে NOR, XOR-এর প্রতীক ও সারণি) আছে <a href="#/note/logic-gates/nor">অধ্যায় ৪ · NOR ও যৌগিক গেট</a>-এ।</p>
        <h4 class="sub-h" id="n8-3o"><span>প্রশ্ন ৩ (অথবা)</span><span>ABC কোন ধরনের সংখ্যা? দশমিক মান</span></h4>
        <p class="prose">সংখ্যায় A, B, C আছে, আর এই অঙ্কগুলো শুধু হেক্সাডেসিমালেই আছে; তাই ABC একটি হেক্সাডেসিমাল সংখ্যা। দশমিক মান অবস্থানগত মান যোগ করে:</p>
        <p class="expand"><span>(ABC)<sub>16</sub></span> = 10×16<sup>2</sup> + 11×16<sup>1</sup> + 12×16<sup>0</sup> = 2560 + 176 + 12 = (<b>2748</b>)<sub>10</sub></p>
        <p class="final"><b>উত্তর</b>ABC হেক্সাডেসিমাল সংখ্যা; (ABC)<sub>16</sub> = (2748)<sub>10</sub></p>
        <p class="prose">একই প্রশ্নের ASCII অংশ আছে <a href="#/note/data-representation/ascii">অধ্যায় ৩</a>-এ, আর লজিক সার্কিটটি <a href="#/note/logic-gates/pp8-3">অধ্যায় ৪ · ৬.৫</a>-এ।</p>
        <h4 class="sub-h" id="n8-3o2"><span>প্রশ্ন ৩ (দ্বিতীয় অথবা)</span><span>(753.26)<sub>8</sub> ও (265.75)<sub>8</sub> যোগ, ফল হেক্সাডেসিমালে</span></h4>
        <p class="prose">অক্টালে সরাসরি যোগ: কোনো ঘরের যোগফল ৮ বা বেশি হলে ৮ বাদ দিয়ে বাকিটা বসে, হাতে ১।</p>
        <div class="bcalc">
          <code class="cy">1111 1 </code><span>হাতে</span>
          <code>753.26</code><span>(753.26)<sub>8</sub> = ৪৯১.৩৪৩৭৫</span>
          <code class="add">+ 265.75</code><span>(265.75)<sub>8</sub> = ১৮১.৯৫৩১২৫</span>
          <code class="res">1241.23</code><span>যোগফল</span>
        </div>
        <table class="truth cols">
          <thead><tr><th>ঘর (ডান থেকে)</th><th>যোগ</th><th>বসে</th><th>হাতে</th></tr></thead>
          <tbody><tr><td>১</td><td>6 + 5 = 11 = 8 + 3</td><td>3</td><td>1</td></tr><tr><td>২</td><td>2 + 7 + 1 = 10 = 8 + 2</td><td>2</td><td>1</td></tr><tr><td>৩</td><td>3 + 5 + 1 = 9 = 8 + 1</td><td>1</td><td>1</td></tr><tr><td>৪</td><td>5 + 6 + 1 = 12 = 8 + 4</td><td>4</td><td>1</td></tr><tr><td>৫</td><td>7 + 2 + 1 = 10 = 8 + 2</td><td>2</td><td>1</td></tr></tbody>
        </table>
        <p class="expand"><span>বাইনারিতে</span> প্রতিটি অক্টাল অঙ্ক ৩ বিটে: 001 010 100 001 . 010 011</p>
        <p class="expand"><span>হেক্সায়</span> বিন্দু থেকে দুই দিকে ৪ বিটের দল: 0010 1010 0001 . 0100 1100 = (<b>2A1.4C</b>)<sub>16</sub></p>
        <p class="final"><b>উত্তর</b>(753.26)<sub>8</sub> + (265.75)<sub>8</sub> = (1241.23)<sub>8</sub> = (2A1.4C)<sub>16</sub></p>
        <p class="prose">যাচাই: ৪৯১.৩৪৩৭৫ + ১৮১.৯৫৩১২৫ = ৬৭৩.২৯৬৮৭৫; (2A1.4C)<sub>16</sub>-এর মানও ৬৭৩.২৯৬৮৭৫।</p>
        <h4 class="sub-h" id="n8-6"><span>প্রশ্ন ৬</span><span>(ABF)<sub>16</sub> থেকে (2AB)<sub>16</sub> বিয়োগ, ফল অক্টালে</span></h4>
        <p class="prose">হেক্সায় সরাসরি বিয়োগ; কোনো ঘরে ওপরের অঙ্ক ছোট হলে বাঁ থেকে ধার নিতে হতো (ধারের মান ১৬)। এখানে কোনো ঘরেই ধার লাগেনি।</p>
        <div class="bcalc">
          <code>ABF</code><span>(ABF)<sub>16</sub> = ২৭৫১</span>
          <code class="add">− 2AB</code><span>(2AB)<sub>16</sub> = ৬৮৩</span>
          <code class="res">814</code><span>বিয়োগফল</span>
        </div>
        <table class="truth cols">
          <thead><tr><th>ঘর (ডান থেকে)</th><th>বিয়োগ</th><th>বসে</th><th>ধার নিল</th></tr></thead>
          <tbody><tr><td>১</td><td>F − B (15 − 11) = 4</td><td>4</td><td>না</td></tr><tr><td>২</td><td>B − A (11 − 10) = 1</td><td>1</td><td>না</td></tr><tr><td>৩</td><td>A − 2 (10 − 2) = 8</td><td>8</td><td>না</td></tr></tbody>
        </table>
        <p class="expand"><span>অক্টালে</span> 8 1 4 → 1000 0001 0100 → ডান থেকে ৩ বিটের দল: 100 000 010 100 = (<b>4024</b>)<sub>8</sub></p>
        <p class="final"><b>উত্তর</b>(ABF)<sub>16</sub> − (2AB)<sub>16</sub> = (814)<sub>16</sub> = (4024)<sub>8</sub></p>
        <p class="prose">যাচাই: ২৭৫১ − ৬৮৩ = ২০৬৮; (4024)<sub>8</sub> = ৪ × ৫১২ + ০ + ২ × ৮ + ৪ = ২০৬৮।</p>
        <h4 class="sub-h" id="n8-9o"><span>প্রশ্ন ৯ (অথবা)</span><span>ভিত্তি; (11101.101)<sub>2</sub> ও (10011.011)<sub>2</sub> যোগ</span></h4>
        <p class="prose"><b>ভিত্তি:</b> কোনো সংখ্যা পদ্ধতিতে মোট যতটি মৌলিক অঙ্ক ব্যবহার হয়, সেই সংখ্যাই তার ভিত্তি (base বা radix): বাইনারির ২, অক্টালের ৮, দশমিকের ১০, হেক্সাডেসিমালের ১৬। বিস্তারিত <a href="#/note/number-system/idea">অংশ ১</a>-এ।</p>
        <div class="bcalc">
          <code class="cy">111111 11 </code><span>হাতে</span>
          <code>11101.101</code><span>(11101.101)<sub>2</sub> = ২৯.৬২৫</span>
          <code class="add">+ 10011.011</code><span>(10011.011)<sub>2</sub> = ১৯.৩৭৫</span>
          <code class="res">110001.000</code><span>যোগফল</span>
        </div>
        <p class="final"><b>উত্তর</b>(11101.101)<sub>2</sub> + (10011.011)<sub>2</sub> = (110001)<sub>2</sub></p>
        <p class="prose">যাচাই: ২৯.৬২৫ + ১৯.৩৭৫ = ৪৯। ভগ্নাংশের ঘরগুলো যোগ করে ০ হয়ে গেছে, তাই ফল পূর্ণসংখ্যা।</p>
        <h3 class="sub"><span>৮.৪</span>৭ম পরীক্ষা (২০১১)</h3>
        <h4 class="sub-h" id="n7-1o"><span>প্রশ্ন ১ (অথবা)</span><span>(23.625)<sub>10</sub> থেকে বাইনারি; (10101.01)<sub>2</sub> থেকে দশমিক</span></h4>
        <p class="prose">বিভিন্ন সংখ্যা পদ্ধতির বর্ণনা আছে <a href="#/note/number-system/systems">অংশ ২</a>-এ। অঙ্ক দুটি:</p>
        <div class="work">
          <div class="ladder" role="img" aria-label="২৩-কে ২ দিয়ে বারবার ভাগ। ভাগশেষ 1, 1, 1, 0, 1। নিচ থেকে পড়লে 10111।">
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
            <tbody><tr><td>0.625 × 2 = 1.250</td><td>1</td></tr><tr><td>0.250 × 2 = 0.500</td><td>0</td></tr><tr><td>0.500 × 2 = 1.000</td><td>1</td></tr></tbody>
          </table>
          <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 4 V142 M5 135 L12 144 L19 135"/></svg><span>ওপর থেকে পড়ুন</span></div>
          <p class="work-res">(0.625)<sub>10</sub> = (<b>0.101</b>)<sub>2</sub></p>
        </div>
        <p class="final"><b>উত্তর</b>(23.625)<sub>10</sub> = (10111.101)<sub>2</sub></p>
        <p class="prose">৩টি ধাপে ভগ্নাংশ ০ হয়েছে, তাই মান হুবহু মিলেছে।</p>
        <p class="expand"><span>(10101.01)<sub>2</sub></span> = 1×2<sup>4</sup> + 0×2<sup>3</sup> + 1×2<sup>2</sup> + 0×2<sup>1</sup> + 1×2<sup>0</sup> + 0×2<sup>-1</sup> + 1×2<sup>-2</sup> = 16 + 4 + 1 + 0.25 = (<b>21.25</b>)<sub>10</sub></p>
        <p class="final"><b>উত্তর</b>(10101.01)<sub>2</sub> = (21.25)<sub>10</sub></p>
        <h4 class="sub-h" id="n7-2o"><span>প্রশ্ন ২ (অথবা)</span><span>কম্পিউটারে কেন বাইনারি; 2CD কী সংখ্যা</span></h4>
        <p class="prose">বাইনারি ব্যবহারের কারণ আছে <a href="#/note/number-system/idea">অংশ ১ · ১.৩</a>-এ: ইলেকট্রনিক যন্ত্রাংশের দুটি অবস্থা (চালু/বন্ধ) সহজে, নির্ভুলভাবে আলাদা করা যায়।</p>
        <p class="prose">2CD-তে C ও D আছে, যা শুধু হেক্সাডেসিমালের অঙ্ক; তাই এটি হেক্সাডেসিমাল সংখ্যা।</p>
        <p class="expand"><span>দশমিকে</span> (2CD)<sub>16</sub> = 2×16<sup>2</sup> + 12×16<sup>1</sup> + 13×16<sup>0</sup> = 512 + 192 + 13 = (<b>717</b>)<sub>10</sub></p>
        <p class="expand"><span>বাইনারিতে</span> 2 C D → 0010 1100 1101 = (<b>1011001101</b>)<sub>2</sub></p>
        <p class="final"><b>উত্তর</b>(2CD)<sub>16</sub> = (717)<sub>10</sub> = (1011001101)<sub>2</sub></p>
        <h4 class="sub-h" id="n7-3o"><span>প্রশ্ন ৩ (অথবা)</span><span>(10101.101)<sub>2</sub> ও (1011.01)<sub>2</sub> যোগ</span></h4>
        <div class="bcalc">
          <code class="cy">11111     </code><span>হাতে</span>
          <code>10101.101</code><span>(10101.101)<sub>2</sub> = ২১.৬২৫</span>
          <code class="add">+  1011.010</code><span>(1011.01)<sub>2</sub> = ১১.২৫</span>
          <code class="res">100000.111</code><span>যোগফল</span>
        </div>
        <p class="final"><b>উত্তর</b>(10101.101)<sub>2</sub> + (1011.01)<sub>2</sub> = (100000.111)<sub>2</sub></p>
        <p class="prose">যাচাই: ২১.৬২৫ + ১১.২৫ = ৩২.৮৭৫। একই প্রশ্নের NOT ও NOR অংশ আছে <a href="#/note/logic-gates/univ">অধ্যায় ৪ · সার্বজনীন গেট</a>-এ।</p>
        <h4 class="sub-h" id="n7-9o"><span>প্রশ্ন ৯ (অথবা)</span><span>(2F.3C) ও (75.64)<sub>8</sub> যোগ, ফল বাইনারিতে</span></h4>
        <p class="prose">ছাপায় প্রথম সংখ্যাটির ভিত্তি ১০, কিন্তু দশমিকে F বা C অঙ্ক নেই; অঙ্কগুলো হেক্সাডেসিমালের, তাই ভিত্তি ১৬ ধরা হলো। খাতায় শুরুতে এই কথাটি এক লাইনে লিখে দিন। দুই পদ্ধতির সংখ্যা সরাসরি যোগ করা যায় না, তাই আগে দুটিকেই বাইনারিতে আনি।</p>
        <p class="expand"><span>(2F.3C)<sub>16</sub></span> = 2 F . 3 C → 0010 1111 . 0011 1100 = (<b>101111.001111</b>)<sub>2</sub></p>
        <p class="expand"><span>(75.64)<sub>8</sub></span> = 7 5 . 6 4 → 111 101 . 110 100 = (<b>111101.1101</b>)<sub>2</sub></p>
        <div class="bcalc">
          <code class="cy">1111111 111   </code><span>হাতে</span>
          <code>101111.001111</code><span>(2F.3C)<sub>16</sub> = ৪৭.২৩৪৩৭৫</span>
          <code class="add">+ 111101.110100</code><span>(75.64)<sub>8</sub> = ৬১.৮১২৫</span>
          <code class="res">1101101.000011</code><span>যোগফল</span>
        </div>
        <p class="final"><b>উত্তর</b>(2F.3C)<sub>16</sub> + (75.64)<sub>8</sub> = (1101101.000011)<sub>2</sub></p>
        <p class="prose">যাচাই: ৪৭.২৩৪৩৭৫ + ৬১.৮১২৫ = ১০৯.০৪৬৮৭৫।</p>
        <h3 class="sub"><span>৮.৫</span>৬ষ্ঠ পরীক্ষা (২০০৯)</h3>
        <h4 class="sub-h" id="n6-1o"><span>প্রশ্ন ১ (অথবা)</span><span>(75.35)<sub>10</sub> থেকে বাইনারি</span></h4>
        <p class="prose">একই প্রশ্নের শিক্ষায় কম্পিউটারের ব্যবহার এবং হার্ডওয়্যার-সফটওয়্যারের পার্থক্য আছে <a href="#/note/computer-basics/sw">অধ্যায় ১</a>-এ। অঙ্কটি:</p>
        <div class="work">
          <div class="ladder" role="img" aria-label="৭৫-কে ২ দিয়ে বারবার ভাগ। ভাগশেষ 1, 1, 0, 1, 0, 0, 1। নিচ থেকে পড়লে 1001011।">
            <span class="dv">2</span><span class="qt">75</span><span class="rm">1</span>
            <span class="dv">2</span><span class="qt">37</span><span class="rm">1</span>
            <span class="dv">2</span><span class="qt">18</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">9</span><span class="rm">1</span>
            <span class="dv">2</span><span class="qt">4</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">2</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">1</span><span class="rm">1</span>
            <span class="dv"></span><span class="qt end">0</span><span class="rm"></span>
          </div>
          <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 146 V8 M5 15 L12 6 L19 15"/></svg><span>নিচ থেকে পড়ুন</span></div>
          <p class="work-res">(75)<sub>10</sub> = (<b>1001011</b>)<sub>2</sub></p>
        </div>
        <div class="work">
          <table class="truth trace">
            <thead><tr><th>ভগ্নাংশ × ২</th><th>পূর্ণ অংশ</th></tr></thead>
            <tbody><tr><td>0.35 × 2 = 0.70</td><td>0</td></tr><tr><td>0.70 × 2 = 1.40</td><td>1</td></tr><tr><td>0.40 × 2 = 0.80</td><td>0</td></tr><tr><td>0.80 × 2 = 1.60</td><td>1</td></tr><tr><td>0.60 × 2 = 1.20</td><td>1</td></tr><tr><td>0.20 × 2 = 0.40</td><td>0</td></tr><tr><td>0.40 × 2 = 0.80</td><td>0</td></tr><tr><td>0.80 × 2 = 1.60</td><td>1</td></tr></tbody>
          </table>
          <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 4 V142 M5 135 L12 144 L19 135"/></svg><span>ওপর থেকে পড়ুন</span></div>
          <p class="work-res">(0.35)<sub>10</sub> ≈ (<b>0.01011001</b>)<sub>2</sub></p>
        </div>
        <p class="final"><b>উত্তর</b>(75.35)<sub>10</sub> ≈ (1001011.01011001)<sub>2</sub></p>
        <p class="prose">৩ নম্বর ধাপের ভগ্নাংশ ৭ নম্বর ধাপে আবার এসেছে, তাই এখান থেকে 0110 অংশটি বারবার ফিরে আসবে; ভগ্নাংশটি কখনো শেষ হয় না। ৮ ঘর পর্যন্ত নেওয়া হলো। যাচাই: (1001011.01011001)<sub>2</sub> = ৭৫.৩৪৭৬৫৬২৫ ≈ ৭৫.৩৫।</p>
        <h4 class="sub-h" id="n6-2"><span>প্রশ্ন ২</span><span>০ থেকে ১৫-এর বাইনারি ও অক্টাল; হেক্সা ও অক্টাল সংখ্যার যোগ</span></h4>
        <p class="prose">সংখ্যা পদ্ধতির সংজ্ঞা আছে <a href="#/note/number-system/idea">অংশ ১</a>-এ। তালিকাটি:</p>
        <table class="truth"><thead><tr><th>দশমিক</th><th>বাইনারি</th><th>অক্টাল</th></tr></thead><tbody><tr><td>০</td><td>0</td><td>0</td></tr><tr><td>১</td><td>1</td><td>1</td></tr><tr><td>২</td><td>10</td><td>2</td></tr><tr><td>৩</td><td>11</td><td>3</td></tr><tr><td>৪</td><td>100</td><td>4</td></tr><tr><td>৫</td><td>101</td><td>5</td></tr><tr><td>৬</td><td>110</td><td>6</td></tr><tr><td>৭</td><td>111</td><td>7</td></tr><tr><td>৮</td><td>1000</td><td>10</td></tr><tr><td>৯</td><td>1001</td><td>11</td></tr><tr><td>১০</td><td>1010</td><td>12</td></tr><tr><td>১১</td><td>1011</td><td>13</td></tr><tr><td>১২</td><td>1100</td><td>14</td></tr><tr><td>১৩</td><td>1101</td><td>15</td></tr><tr><td>১৪</td><td>1110</td><td>16</td></tr><tr><td>১৫</td><td>1111</td><td>17</td></tr></tbody></table>
        <p class="prose"><b>(6F.5B)<sub>16</sub> ও (57.25)<sub>8</sub> যোগ, যোগফল হেক্সায়:</b> দুই পদ্ধতির সংখ্যা সরাসরি যোগ হয় না; অক্টাল সংখ্যাটিকে আগে বাইনারির মাধ্যমে হেক্সায় আনি।</p>
        <p class="expand"><span>(57.25)<sub>8</sub></span> → 101 111 . 010 101 → ৪ বিটের দল: 0010 1111 . 0101 0100 = (<b>2F.54</b>)<sub>16</sub></p>
        <div class="bcalc">
          <code class="cy">1    </code><span>হাতে</span>
          <code>6F.5B</code><span>(6F.5B)<sub>16</sub> = ১১১.৩৫৫৪৬৮৭৫</span>
          <code class="add">+ 2F.54</code><span>(57.25)<sub>8</sub> = (2F.54)<sub>16</sub> = ৪৭.৩২৮১২৫</span>
          <code class="res">9E.AF</code><span>যোগফল</span>
        </div>
        <table class="truth cols">
          <thead><tr><th>ঘর (ডান থেকে)</th><th>যোগ</th><th>বসে</th><th>হাতে</th></tr></thead>
          <tbody><tr><td>১</td><td>B + 4 = 11 + 4 = 15</td><td>F</td><td>০</td></tr><tr><td>২</td><td>5 + 5 = 10</td><td>A</td><td>০</td></tr><tr><td>৩</td><td>F + F = 15 + 15 = 30 = 16 + 14</td><td>E</td><td>1</td></tr><tr><td>৪</td><td>6 + 2 + 1 = 9</td><td>9</td><td>০</td></tr></tbody>
        </table>
        <p class="final"><b>উত্তর</b>(6F.5B)<sub>16</sub> + (57.25)<sub>8</sub> = (9E.AF)<sub>16</sub></p>
        <p class="prose">যাচাই: ১১১.৩৫৫৪৬৮৭৫ + ৪৭.৩২৮১২৫ = ১৫৮.৬৮৩৫৯৩৭৫।</p>
        <h4 class="sub-h" id="n6-2o"><span>প্রশ্ন ২ (অথবা)</span><span>ভিত্তি ও মৌলিক অঙ্ক; BA.2B কোন ধরনের সংখ্যা</span></h4>
        <p class="prose">কোনো সংখ্যা পদ্ধতিতে মোট যতটি মৌলিক অঙ্ক থাকে, সেটিই তার ভিত্তি:</p>
        <table class="rt cmp"><thead><tr><th>পদ্ধতি</th><th>ভিত্তি</th><th>মৌলিক অঙ্ক</th></tr></thead><tbody>
          <tr><td>বাইনারি</td><td>২</td><td class="m">0, 1</td></tr>
          <tr><td>অক্টাল</td><td>৮</td><td class="m">0–7</td></tr>
          <tr><td>দশমিক</td><td>১০</td><td class="m">0–9</td></tr>
          <tr><td>হেক্সাডেসিমাল</td><td>১৬</td><td class="m">0–9, A–F</td></tr>
        </tbody></table>
        <p class="prose">BA.2B-তে B ও A আছে, যা শুধু হেক্সাডেসিমালের অঙ্ক; তাই এটি হেক্সাডেসিমাল সংখ্যা।</p>
        <p class="expand"><span>বাইনারিতে</span> B A . 2 B → 1011 1010 . 0010 1011 = (<b>10111010.00101011</b>)<sub>2</sub></p>
        <p class="expand"><span>অক্টালে</span> বিন্দু থেকে দুই দিকে ৩ বিটের দল: 010 111 010 . 001 010 110 = (<b>272.126</b>)<sub>8</sub></p>
        <p class="final"><b>উত্তর</b>(BA.2B)<sub>16</sub> = (10111010.00101011)<sub>2</sub> = (272.126)<sub>8</sub></p>
        <p class="prose">যাচাই: তিনটির মানই ১৮৬.১৬৭৯৬৮৭৫।</p>
        <h4 class="sub-h" id="n6-4o"><span>প্রশ্ন ৪ (অথবা)</span><span>(110.10)<sub>2</sub> ও (100.01)<sub>2</sub>: যোগ, আর বড়টি থেকে ছোটটি বিয়োগ</span></h4>
        <p class="prose">যোগ:</p>
        <div class="bcalc">
          <code class="cy">1      </code><span>হাতে</span>
          <code>110.10</code><span>(110.10)<sub>2</sub> = ৬.৫</span>
          <code class="add">+ 100.01</code><span>(100.01)<sub>2</sub> = ৪.২৫</span>
          <code class="res">1010.11</code><span>যোগফল</span>
        </div>
        <p class="final"><b>উত্তর</b>(110.10)<sub>2</sub> + (100.01)<sub>2</sub> = (1010.11)<sub>2</sub></p>
        <p class="prose">বড় সংখ্যা (110.10)<sub>2</sub> (= ৬.৫), ছোট (100.01)<sub>2</sub> (= ৪.২৫):</p>
        <div class="bcalc">
          <code>110.10</code><span>(110.10)<sub>2</sub> = ৬.৫</span>
          <code class="add">− 100.01</code><span>(100.01)<sub>2</sub> = ৪.২৫</span>
          <code class="res">010.01</code><span>বিয়োগফল</span>
        </div>
        <table class="truth cols">
          <thead><tr><th>ঘর (ডান থেকে)</th><th>বিয়োগ</th><th>বসে</th><th>ধার নিল</th></tr></thead>
          <tbody><tr><td>১</td><td>0 − 1 → ধার: 0 + 2 = 2, 2 − 1 = 1</td><td>1</td><td>হ্যাঁ</td></tr><tr><td>২</td><td>1 − 1 (ধার) − 0 = 0</td><td>0</td><td>না</td></tr><tr><td>৩</td><td>0 − 0 = 0</td><td>0</td><td>না</td></tr><tr><td>৪</td><td>1 − 0 = 1</td><td>1</td><td>না</td></tr><tr><td>৫</td><td>1 − 1 = 0</td><td>0</td><td>না</td></tr></tbody>
        </table>
        <p class="final"><b>উত্তর</b>(110.10)<sub>2</sub> − (100.01)<sub>2</sub> = (10.01)<sub>2</sub></p>
        <p class="prose">যাচাই: ৬.৫ + ৪.২৫ = ১০.৭৫; ৬.৫ − ৪.২৫ = ২.২৫। একই প্রশ্নের যুক্তিবর্তনী আছে <a href="#/note/logic-gates/pp6-4">অধ্যায় ৪ · ৬.৫</a>-এ, স্মৃতির পার্থক্য <a href="#/note/computer-basics/mem">অধ্যায় ১</a>-এ।</p>
        <h4 class="sub-h" id="n6-5o"><span>প্রশ্ন ৫ (অথবা)</span><span>(FF.AB)<sub>16</sub> থেকে বাইনারি, অক্টাল ও দশমিক</span></h4>
        <p class="expand"><span>বাইনারিতে</span> F F . A B → 1111 1111 . 1010 1011 = (<b>11111111.10101011</b>)<sub>2</sub></p>
        <p class="expand"><span>অক্টালে</span> ৩ বিটের দল: 011 111 111 . 101 010 110 = (<b>377.526</b>)<sub>8</sub></p>
        <p class="expand"><span>দশমিকে</span> 15×16<sup>1</sup> + 15×16<sup>0</sup> + 10×16<sup>-1</sup> + 11×16<sup>-2</sup> = 240 + 15 + 0.625 + 0.04296875 = (<b>255.66796875</b>)<sub>10</sub></p>
        <p class="final"><b>উত্তর</b>(FF.AB)<sub>16</sub> = (11111111.10101011)<sub>2</sub> = (377.526)<sub>8</sub> = (255.66796875)<sub>10</sub></p>
        <p class="prose">যুক্তিবর্তনীর অংশটি আছে <a href="#/note/logic-gates/pp6-5">অধ্যায় ৪ · ৬.৫</a>-এ।</p>
        <h4 class="sub-h" id="n6-9o"><span>প্রশ্ন ৯ (অথবা)</span><span>(1101)<sub>2</sub>-কে (101)<sub>2</sub> দিয়ে ভাগ</span></h4>
        <p class="prose">দশমিকের মতো লম্বা ভাগ: ভাজ্যের বাঁ থেকে যতটুকু নিলে ভাজক বসে ততটুকু নিই; বসলে ভাগফলে 1, না বসলে 0, তারপর পরের অঙ্ক নামাই।</p>
        <table class="truth cols">
          <thead><tr><th>ধাপ</th><th>নেওয়া অংশ</th><th>101 বসে?</th><th>ভাগফলে</th><th>বাকি</th></tr></thead>
          <tbody><tr><td>১</td><td>110<small>বাঁ থেকে ৩ অঙ্ক</small></td><td>হ্যাঁ</td><td>1</td><td>110 − 101 = 1</td></tr><tr><td>২</td><td>11<small>পরের অঙ্ক নামিয়ে</small></td><td>না</td><td>0</td><td>11</td></tr></tbody>
        </table>
        <p class="final"><b>উত্তর</b>(1101)<sub>2</sub> ÷ (101)<sub>2</sub> = (10)<sub>2</sub>, ভাগশেষ (11)<sub>2</sub></p>
        <p class="prose">যাচাই: ১৩ ÷ ৫ = ২, ভাগশেষ ৩। ভগ্নাংশ পর্যন্ত চালালে ভাগফল ২.৬ ≈ (10.10011001)<sub>2</sub>। ফার্মওয়্যার আছে <a href="#/note/computer-basics/sw">অধ্যায় ১</a>-এ।</p>
        <h3 class="sub"><span>৮.৬</span>৫ম পরীক্ষা (২০০৮)</h3>
        <h4 class="sub-h" id="n5-2"><span>প্রশ্ন ২</span><span>(73.125)<sub>10</sub> থেকে বাইনারি; (925)<sub>10</sub> থেকে BCD</span></h4>
        <p class="prose">সংখ্যা পদ্ধতির সংজ্ঞা, প্রকার ও মৌলিক চিহ্ন আছে <a href="#/note/number-system/systems">অংশ ২</a>-এ (ছকটি ওপরে ৬ষ্ঠ পরীক্ষার প্রশ্ন ২-এর অথবা-তেও)।</p>
        <div class="work">
          <div class="ladder" role="img" aria-label="৭৩-কে ২ দিয়ে বারবার ভাগ। ভাগশেষ 1, 0, 0, 1, 0, 0, 1। নিচ থেকে পড়লে 1001001।">
            <span class="dv">2</span><span class="qt">73</span><span class="rm">1</span>
            <span class="dv">2</span><span class="qt">36</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">18</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">9</span><span class="rm">1</span>
            <span class="dv">2</span><span class="qt">4</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">2</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">1</span><span class="rm">1</span>
            <span class="dv"></span><span class="qt end">0</span><span class="rm"></span>
          </div>
          <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 146 V8 M5 15 L12 6 L19 15"/></svg><span>নিচ থেকে পড়ুন</span></div>
          <p class="work-res">(73)<sub>10</sub> = (<b>1001001</b>)<sub>2</sub></p>
        </div>
        <div class="work">
          <table class="truth trace">
            <thead><tr><th>ভগ্নাংশ × ২</th><th>পূর্ণ অংশ</th></tr></thead>
            <tbody><tr><td>0.125 × 2 = 0.250</td><td>0</td></tr><tr><td>0.250 × 2 = 0.500</td><td>0</td></tr><tr><td>0.500 × 2 = 1.000</td><td>1</td></tr></tbody>
          </table>
          <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 4 V142 M5 135 L12 144 L19 135"/></svg><span>ওপর থেকে পড়ুন</span></div>
          <p class="work-res">(0.125)<sub>10</sub> = (<b>0.001</b>)<sub>2</sub></p>
        </div>
        <p class="final"><b>উত্তর</b>(73.125)<sub>10</sub> = (1001001.001)<sub>2</sub></p>
        <p class="prose">৩টি ধাপে ভগ্নাংশ ০ হয়েছে, তাই মান হুবহু মিলেছে।</p>
        <p class="prose"><b>(925)<sub>10</sub> থেকে BCD:</b> প্রতিটি দশমিক অঙ্ক আলাদা ৪ বিটে: 9 → 1001, 2 → 0010, 5 → 0101। BCD ও বাইনারির পার্থক্য আছে <a href="#/note/data-representation/code">অধ্যায় ৩ · কোড ও BCD</a>-এ।</p>
        <p class="final"><b>উত্তর</b>(925)<sub>10</sub> = (1001 0010 0101)<sub>BCD</sub></p>
        <h4 class="sub-h" id="n5-2o"><span>প্রশ্ন ২ (অথবা)</span><span>(11101.01)<sub>2</sub> ও (1101.11)<sub>2</sub>: যোগ ও বিয়োগ; বাইনারি থেকে দশমিকের পদ্ধতি</span></h4>
        <div class="bcalc">
          <code class="cy">111 11 1 </code><span>হাতে</span>
          <code>11101.01</code><span>(11101.01)<sub>2</sub> = ২৯.২৫</span>
          <code class="add">+  1101.11</code><span>(1101.11)<sub>2</sub> = ১৩.৭৫</span>
          <code class="res">101011.00</code><span>যোগফল</span>
        </div>
        <p class="final"><b>উত্তর</b>(11101.01)<sub>2</sub> + (1101.11)<sub>2</sub> = (101011)<sub>2</sub></p>
        <div class="bcalc">
          <code>11101.01</code><span>(11101.01)<sub>2</sub> = ২৯.২৫</span>
          <code class="add">−  1101.11</code><span>(1101.11)<sub>2</sub> = ১৩.৭৫</span>
          <code class="res">01111.10</code><span>বিয়োগফল</span>
        </div>
        <table class="truth cols">
          <thead><tr><th>ঘর (ডান থেকে)</th><th>বিয়োগ</th><th>বসে</th><th>ধার নিল</th></tr></thead>
          <tbody><tr><td>১</td><td>1 − 1 = 0</td><td>0</td><td>না</td></tr><tr><td>২</td><td>0 − 1 → ধার: 0 + 2 = 2, 2 − 1 = 1</td><td>1</td><td>হ্যাঁ</td></tr><tr><td>৩</td><td>1 − 1 (ধার) − 1 → ধার: 0 + 2 = 2, 2 − 1 = 1</td><td>1</td><td>হ্যাঁ</td></tr><tr><td>৪</td><td>0 − 1 (ধার) − 0 → ধার: −1 + 2 = 1, 1 − 0 = 1</td><td>1</td><td>হ্যাঁ</td></tr><tr><td>৫</td><td>1 − 1 (ধার) − 1 → ধার: 0 + 2 = 2, 2 − 1 = 1</td><td>1</td><td>হ্যাঁ</td></tr><tr><td>৬</td><td>1 − 1 (ধার) − 1 → ধার: 0 + 2 = 2, 2 − 1 = 1</td><td>1</td><td>হ্যাঁ</td></tr><tr><td>৭</td><td>1 − 1 (ধার) − 0 = 0</td><td>0</td><td>না</td></tr></tbody>
        </table>
        <p class="final"><b>উত্তর</b>(11101.01)<sub>2</sub> − (1101.11)<sub>2</sub> = (1111.1)<sub>2</sub></p>
        <p class="prose">যাচাই: ২৯.২৫ + ১৩.৭৫ = ৪৩; ২৯.২৫ − ১৩.৭৫ = ১৫.৫।</p>
        <p class="prose"><b>বাইনারি থেকে দশমিকের পদ্ধতি:</b> প্রতিটি অঙ্ককে তার অবস্থানের মান দিয়ে গুণ করে যোগ করুন। বিন্দুর বাঁয়ে ডান থেকে মানগুলো ২<sup>0</sup>, ২<sup>1</sup>, ২<sup>2</sup> …, ডানে ২<sup>−1</sup>, ২<sup>−2</sup> …; যেমন (101.1)<sub>2</sub> = ৪ + ০ + ১ + ০.৫ = ৫.৫। উদাহরণসহ বিস্তারিত <a href="#/note/number-system/todec">অংশ ৩</a>-এ; স্মৃতির প্রকারভেদ <a href="#/note/computer-basics/mem">অধ্যায় ১</a>-এ।</p>
        <h4 class="sub-h" id="n5-4o"><span>প্রশ্ন ৪ (অথবা)</span><span>(FF.AB) কোন ধরনের সংখ্যা; দশমিক, বাইনারি ও অক্টাল মান</span></h4>
        <p class="prose">F, A, B শুধু হেক্সাডেসিমালের অঙ্ক, তাই FF.AB হেক্সাডেসিমাল সংখ্যা। রূপান্তর হুবহু ৬ষ্ঠ পরীক্ষার প্রশ্ন ৫-এর (অথবা) মতো: <a href="#/note/number-system/n6-5o">ওপরে দেখুন</a>।</p>
        <p class="final"><b>উত্তর</b>(FF.AB)<sub>16</sub> = (255.66796875)<sub>10</sub> = (11111111.10101011)<sub>2</sub> = (377.526)<sub>8</sub></p>
        <h4 class="sub-h" id="n5-10"><span>প্রশ্ন ১০</span><span>(11110.01)<sub>2</sub> থেকে দশমিক, অক্টাল ও হেক্সাডেসিমাল</span></h4>
        <p class="expand"><span>দশমিকে</span> 1×2<sup>4</sup> + 1×2<sup>3</sup> + 1×2<sup>2</sup> + 1×2<sup>1</sup> + 0×2<sup>0</sup> + 0×2<sup>-1</sup> + 1×2<sup>-2</sup> = 16 + 8 + 4 + 2 + 0.25 = (<b>30.25</b>)<sub>10</sub></p>
        <p class="expand"><span>অক্টালে</span> বিন্দু থেকে দুই দিকে ৩ বিটের দল: 011 110 . 010 = (<b>36.2</b>)<sub>8</sub></p>
        <p class="expand"><span>হেক্সায়</span> ৪ বিটের দল: 0001 1110 . 0100 = (<b>1E.4</b>)<sub>16</sub></p>
        <p class="final"><b>উত্তর</b>(11110.01)<sub>2</sub> = (30.25)<sub>10</sub> = (36.2)<sub>8</sub> = (1E.4)<sub>16</sub></p>
        <p class="prose">ভগ্নাংশে দল করার সময় শূন্য বসে ডানে: .01 → 010 (অক্টালে 2), → 0100 (হেক্সায় 4)।</p>
        <h3 class="sub"><span>৮.৭</span>৪র্থ পরীক্ষা (২০০৭)</h3>
        <h4 class="sub-h" id="n4-1"><span>প্রশ্ন ১</span><span>০ থেকে ১৬-এর বাইনারি, অক্টাল ও হেক্সাডেসিমাল</span></h4>
        <p class="prose">একই প্রশ্নের অন্য অংশগুলো (বৈশিষ্ট্য, অ্যাবাকাস, সফটওয়্যার-ফার্মওয়্যার) আছে <a href="#/note/computer-basics/def">অধ্যায় ১</a>-এ। তালিকাটি:</p>
        <table class="truth"><thead><tr><th>দশমিক</th><th>বাইনারি</th><th>অক্টাল</th><th>হেক্সা</th></tr></thead><tbody><tr><td>০</td><td>0</td><td>0</td><td>0</td></tr><tr><td>১</td><td>1</td><td>1</td><td>1</td></tr><tr><td>২</td><td>10</td><td>2</td><td>2</td></tr><tr><td>৩</td><td>11</td><td>3</td><td>3</td></tr><tr><td>৪</td><td>100</td><td>4</td><td>4</td></tr><tr><td>৫</td><td>101</td><td>5</td><td>5</td></tr><tr><td>৬</td><td>110</td><td>6</td><td>6</td></tr><tr><td>৭</td><td>111</td><td>7</td><td>7</td></tr><tr><td>৮</td><td>1000</td><td>10</td><td>8</td></tr><tr><td>৯</td><td>1001</td><td>11</td><td>9</td></tr><tr><td>১০</td><td>1010</td><td>12</td><td>A</td></tr><tr><td>১১</td><td>1011</td><td>13</td><td>B</td></tr><tr><td>১২</td><td>1100</td><td>14</td><td>C</td></tr><tr><td>১৩</td><td>1101</td><td>15</td><td>D</td></tr><tr><td>১৪</td><td>1110</td><td>16</td><td>E</td></tr><tr><td>১৫</td><td>1111</td><td>17</td><td>F</td></tr><tr><td>১৬</td><td>10000</td><td>20</td><td>10</td></tr></tbody></table>
        <h4 class="sub-h" id="n4-1o"><span>প্রশ্ন ১ (অথবা)</span><span>5A কোন ধরনের সংখ্যা; বাইনারি, অক্টাল ও দশমিক মান</span></h4>
        <p class="prose">A শুধু হেক্সাডেসিমালের অঙ্ক, তাই 5A হেক্সাডেসিমাল সংখ্যা। (১০ম পরীক্ষার 5G-র সঙ্গে তুলনা করুন: <a href="#/note/number-system/n10-3k">G কোনো পদ্ধতির অঙ্ক নয়</a>।)</p>
        <p class="expand"><span>বাইনারিতে</span> 5 A → 0101 1010 = (<b>1011010</b>)<sub>2</sub></p>
        <p class="expand"><span>অক্টালে</span> ডান থেকে ৩ বিটের দল: 001 011 010 = (<b>132</b>)<sub>8</sub></p>
        <p class="expand"><span>দশমিকে</span> 5×16<sup>1</sup> + 10×16<sup>0</sup> = 80 + 10 = (<b>90</b>)<sub>10</sub></p>
        <p class="final"><b>উত্তর</b>(5A)<sub>16</sub> = (1011010)<sub>2</sub> = (132)<sub>8</sub> = (90)<sub>10</sub></p>
        <h4 class="sub-h" id="n4-2"><span>প্রশ্ন ২</span><span>ভিত্তি; (ABC + DEF)-এর যোগফল; (129)<sub>10</sub> থেকে BCD</span></h4>
        <p class="prose">ভিত্তির আলোচনা <a href="#/note/number-system/idea">অংশ ১</a>-এ। ছাপায় ভিত্তি দেওয়া নেই, কিন্তু A থেকে F অঙ্কগুলো শুধু হেক্সাডেসিমালে আছে, তাই দুটিকেই হেক্সা ধরে যোগ:</p>
        <div class="bcalc">
          <code class="cy">111 </code><span>হাতে</span>
          <code>ABC</code><span>(ABC)<sub>16</sub> = ২৭৪৮</span>
          <code class="add">+ DEF</code><span>(DEF)<sub>16</sub> = ৩৫৬৭</span>
          <code class="res">18AB</code><span>যোগফল</span>
        </div>
        <table class="truth cols">
          <thead><tr><th>ঘর (ডান থেকে)</th><th>যোগ</th><th>বসে</th><th>হাতে</th></tr></thead>
          <tbody><tr><td>১</td><td>C + F = 12 + 15 = 27 = 16 + 11</td><td>B</td><td>1</td></tr><tr><td>২</td><td>B + E + 1 = 11 + 14 + 1 = 26 = 16 + 10</td><td>A</td><td>1</td></tr><tr><td>৩</td><td>A + D + 1 = 10 + 13 + 1 = 24 = 16 + 8</td><td>8</td><td>1</td></tr></tbody>
        </table>
        <p class="final"><b>উত্তর</b>(ABC)<sub>16</sub> + (DEF)<sub>16</sub> = (18AB)<sub>16</sub></p>
        <p class="prose">যাচাই: ২৭৪৮ + ৩৫৬৭ = ৬৩১৫।</p>
        <p class="prose"><b>(129)<sub>10</sub> থেকে BCD:</b> 1 → 0001, 2 → 0010, 9 → 1001। BCD কোডের আলোচনা <a href="#/note/data-representation/code">অধ্যায় ৩</a>-এ।</p>
        <p class="final"><b>উত্তর</b>(129)<sub>10</sub> = (0001 0010 1001)<sub>BCD</sub></p>
        <h4 class="sub-h" id="n4-2o"><span>প্রশ্ন ২ (অথবা)</span><span>(101.01)<sub>2</sub>-কে (11.1)<sub>2</sub> দিয়ে ভাগ</span></h4>
        <p class="prose">ভাজকে ভগ্নাংশ থাকলে আগে দুটিকেই ২ দিয়ে একই সংখ্যকবার গুণ করে (বিন্দু সমান ঘর ডানে সরিয়ে) ভাজককে পূর্ণসংখ্যা বানাই; ভাগফল বদলায় না। দুই ঘর সরালে: 101.01 → 10101, 11.1 → 1110।</p>
        <table class="truth cols">
          <thead><tr><th>ধাপ</th><th>নেওয়া অংশ</th><th>1110 বসে?</th><th>ভাগফলে</th><th>বাকি</th></tr></thead>
          <tbody><tr><td>১</td><td>10101<small>বাঁ থেকে ৫ অঙ্ক</small></td><td>হ্যাঁ</td><td>1</td><td>10101 − 1110 = 111</td></tr><tr><td>২</td><td>1110<small>0 নামিয়ে</small></td><td>হ্যাঁ</td><td>1</td><td>1110 − 1110 = 0</td></tr></tbody>
        </table>
        <p class="final"><b>উত্তর</b>(101.01)<sub>2</sub> ÷ (11.1)<sub>2</sub> = (1.1)<sub>2</sub></p>
        <p class="prose">যাচাই: ৫.২৫ ÷ ৩.৫ = ১.৫ = (1.1)<sub>2</sub>। একই প্রশ্নের CPU-র সংগঠন আছে <a href="#/note/computer-basics/org">অধ্যায় ১</a>-এ।</p>
        <h4 class="sub-h" id="n4-7o"><span>প্রশ্ন ৭ (অথবা)</span><span>(37.25)<sub>10</sub> থেকে বাইনারি</span></h4>
        <div class="work">
          <div class="ladder" role="img" aria-label="৩৭-কে ২ দিয়ে বারবার ভাগ। ভাগশেষ 1, 0, 1, 0, 0, 1। নিচ থেকে পড়লে 100101।">
            <span class="dv">2</span><span class="qt">37</span><span class="rm">1</span>
            <span class="dv">2</span><span class="qt">18</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">9</span><span class="rm">1</span>
            <span class="dv">2</span><span class="qt">4</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">2</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">1</span><span class="rm">1</span>
            <span class="dv"></span><span class="qt end">0</span><span class="rm"></span>
          </div>
          <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 146 V8 M5 15 L12 6 L19 15"/></svg><span>নিচ থেকে পড়ুন</span></div>
          <p class="work-res">(37)<sub>10</sub> = (<b>100101</b>)<sub>2</sub></p>
        </div>
        <div class="work">
          <table class="truth trace">
            <thead><tr><th>ভগ্নাংশ × ২</th><th>পূর্ণ অংশ</th></tr></thead>
            <tbody><tr><td>0.25 × 2 = 0.50</td><td>0</td></tr><tr><td>0.50 × 2 = 1.00</td><td>1</td></tr></tbody>
          </table>
          <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 4 V142 M5 135 L12 144 L19 135"/></svg><span>ওপর থেকে পড়ুন</span></div>
          <p class="work-res">(0.25)<sub>10</sub> = (<b>0.01</b>)<sub>2</sub></p>
        </div>
        <p class="final"><b>উত্তর</b>(37.25)<sub>10</sub> = (100101.01)<sub>2</sub></p>
        <p class="prose">২টি ধাপে ভগ্নাংশ ০ হয়েছে, তাই মান হুবহু মিলেছে। যাচাই: ৩২ + ৪ + ১ + ০.২৫ = ৩৭.২৫।</p>
        <h3 class="sub"><span>৮.৮</span>৩য় পরীক্ষা (২০০৬)</h3>
        <h4 class="sub-h" id="n3-2"><span>প্রশ্ন ২</span><span>(129.75)<sub>10</sub> থেকে বাইনারি, অক্টাল ও হেক্সাডেসিমাল</span></h4>
        <p class="prose">পজিশনাল ও নন-পজিশনাল পদ্ধতির আলোচনা <a href="#/note/number-system/idea">অংশ ১</a>-এ। অঙ্কটি:</p>
        <div class="work">
          <div class="ladder" role="img" aria-label="১২৯-কে ২ দিয়ে বারবার ভাগ। ভাগশেষ 1, 0, 0, 0, 0, 0, 0, 1। নিচ থেকে পড়লে 10000001।">
            <span class="dv">2</span><span class="qt">129</span><span class="rm">1</span>
            <span class="dv">2</span><span class="qt">64</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">32</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">16</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">8</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">4</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">2</span><span class="rm">0</span>
            <span class="dv">2</span><span class="qt">1</span><span class="rm">1</span>
            <span class="dv"></span><span class="qt end">0</span><span class="rm"></span>
          </div>
          <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 146 V8 M5 15 L12 6 L19 15"/></svg><span>নিচ থেকে পড়ুন</span></div>
          <p class="work-res">(129)<sub>10</sub> = (<b>10000001</b>)<sub>2</sub></p>
        </div>
        <div class="work">
          <table class="truth trace">
            <thead><tr><th>ভগ্নাংশ × ২</th><th>পূর্ণ অংশ</th></tr></thead>
            <tbody><tr><td>0.75 × 2 = 1.50</td><td>1</td></tr><tr><td>0.50 × 2 = 1.00</td><td>1</td></tr></tbody>
          </table>
          <div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 4 V142 M5 135 L12 144 L19 135"/></svg><span>ওপর থেকে পড়ুন</span></div>
          <p class="work-res">(0.75)<sub>10</sub> = (<b>0.11</b>)<sub>2</sub></p>
        </div>
        <p class="expand"><span>অক্টালে</span> পূর্ণ অংশ ৩ বিটের দলে: 010 000 001 = 201; ভগ্নাংশ ০.৭৫ × ৮ = ৬.০০ → 6; ফল (<b>201.6</b>)<sub>8</sub></p>
        <p class="expand"><span>হেক্সায়</span> পূর্ণ অংশ ৪ বিটের দলে: 1000 0001 = 81; ভগ্নাংশ ০.৭৫ × ১৬ = ১২.০০ → C; ফল (<b>81.C</b>)<sub>16</sub></p>
        <p class="final"><b>উত্তর</b>(129.75)<sub>10</sub> = (10000001.11)<sub>2</sub> = (201.6)<sub>8</sub> = (81.C)<sub>16</sub></p>
        <p class="prose">এখানে ভগ্নাংশ দুই ধাপেই ০ হয়ে গেছে, তাই তিনটি উত্তরই হুবহু (≈ লাগেনি)।</p>
        <h4 class="sub-h" id="n3-2o"><span>প্রশ্ন ২ (অথবা)</span><span>FF কোন ধরনের সংখ্যা; আগের ও পরের সংখ্যা; অন্য পদ্ধতিতে মান</span></h4>
        <p class="prose">F শুধু হেক্সাডেসিমালের অঙ্ক, তাই FF হেক্সাডেসিমাল সংখ্যা। আগের সংখ্যা: শেষ অঙ্ক থেকে ১ কমিয়ে FE। পরের সংখ্যা: F + 1 = ১৬ = 10, অর্থাৎ বসে 0, হাতে 1; আবার F + 1 = 10, তাই FF + 1 = 100 (দশমিকে ৯৯ + ১ = ১০০-এর মতো)।</p>
        <p class="expand"><span>সমকক্ষ মান</span> (FF)<sub>16</sub> = ১৫ × ১৬ + ১৫ = (<b>255</b>)<sub>10</sub> = 1111 1111 = (<b>11111111</b>)<sub>2</sub> = 011 111 111 = (<b>377</b>)<sub>8</sub></p>
        <p class="final"><b>উত্তর</b>FF হেক্সাডেসিমাল; আগের সংখ্যা (FE)<sub>16</sub> = ২৫৪, পরের (100)<sub>16</sub> = ২৫৬; (FF)<sub>16</sub> = (255)<sub>10</sub> = (11111111)<sub>2</sub> = (377)<sub>8</sub></p>
        <p class="prose">দশমিক বাদে অন্য পদ্ধতিগুলোর ভিত্তি ও মৌলিক চিহ্ন:</p>
        <table class="rt cmp"><thead><tr><th>পদ্ধতি</th><th>ভিত্তি</th><th>মৌলিক অঙ্ক</th></tr></thead><tbody>
          <tr><td>বাইনারি</td><td>২</td><td class="m">0, 1</td></tr>
          <tr><td>অক্টাল</td><td>৮</td><td class="m">0–7</td></tr>
          <tr><td>হেক্সাডেসিমাল</td><td>১৬</td><td class="m">0–9, A–F</td></tr>
        </tbody></table>
        <h4 class="sub-h" id="n3-3"><span>প্রশ্ন ৩</span><span>(1011.01)<sub>2</sub> ও (111)<sub>2</sub>: যোগফল ও গুণফল</span></h4>
        <div class="bcalc">
          <code class="cy">1111    </code><span>হাতে</span>
          <code>1011.01</code><span>(1011.01)<sub>2</sub> = ১১.২৫</span>
          <code class="add">+  111.00</code><span>(111)<sub>2</sub> = ৭</span>
          <code class="res">10010.01</code><span>যোগফল</span>
        </div>
        <p class="final"><b>উত্তর</b>(1011.01)<sub>2</sub> + (111)<sub>2</sub> = (10010.01)<sub>2</sub></p>
        <p class="prose"><b>গুণ:</b> বিন্দু বাদ দিয়ে পূর্ণসংখ্যার মতো গুণ করি; গুণ্যে বিন্দুর পরে দুটি অঙ্ক ছিল, তাই শেষে গুণফলের ডান থেকে দুই ঘর বাদে বিন্দু বসাই।</p>
        <div class="bcalc">
          <code>     101101</code><span>101101 (বিন্দু বাদে, ৪৫)</span>
          <code class="add">      × 111</code><span>111 (৭)</span>
          <code>     101101</code><span>গুণকের ১ম অঙ্ক 1</span>
          <code>    101101 </code><span>১ ঘর সরিয়ে</span>
          <code class="add"> + 101101  </code><span>২ ঘর সরিয়ে</span>
          <code class="res">  100111011</code><span>গুণফল</span>
        </div>
        <p class="final"><b>উত্তর</b>(1011.01)<sub>2</sub> × (111)<sub>2</sub> = (1001110.11)<sub>2</sub></p>
        <p class="prose">যাচাই: ১১.২৫ + ৭ = ১৮.২৫; ১১.২৫ × ৭ = ৭৮.৭৫। কম্পিউটারের ভেতরে কেন বাইনারি, তা আছে <a href="#/note/number-system/idea">অংশ ১ · ১.৩</a>-এ; সফটওয়্যারের অংশ <a href="#/note/computer-basics/sw">অধ্যায় ১</a>-এ।</p>
        <h4 class="sub-h" id="n3-3o"><span>প্রশ্ন ৩ (অথবা)</span><span>(11101.01)<sub>2</sub> ও (101)<sub>2</sub>: বিয়োগফল ও ভাগফল; যোগ দিয়েই সব কাজ</span></h4>
        <p class="prose">বড় সংখ্যা (11101.01)<sub>2</sub> (= ২৯.২৫), ছোট (101)<sub>2</sub> (= ৫)।</p>
        <div class="bcalc">
          <code>11101.01</code><span>(11101.01)<sub>2</sub> = ২৯.২৫</span>
          <code class="add">−   101.00</code><span>(101)<sub>2</sub> = ৫</span>
          <code class="res">11000.01</code><span>বিয়োগফল</span>
        </div>
        <table class="truth cols">
          <thead><tr><th>ঘর (ডান থেকে)</th><th>বিয়োগ</th><th>বসে</th><th>ধার নিল</th></tr></thead>
          <tbody><tr><td>১</td><td>1 − 0 = 1</td><td>1</td><td>না</td></tr><tr><td>২</td><td>0 − 0 = 0</td><td>0</td><td>না</td></tr><tr><td>৩</td><td>1 − 1 = 0</td><td>0</td><td>না</td></tr><tr><td>৪</td><td>0 − 0 = 0</td><td>0</td><td>না</td></tr><tr><td>৫</td><td>1 − 1 = 0</td><td>0</td><td>না</td></tr><tr><td>৬</td><td>1 − 0 = 1</td><td>1</td><td>না</td></tr><tr><td>৭</td><td>1 − 0 = 1</td><td>1</td><td>না</td></tr></tbody>
        </table>
        <p class="final"><b>উত্তর</b>(11101.01)<sub>2</sub> − (101)<sub>2</sub> = (11000.01)<sub>2</sub></p>
        <p class="prose"><b>ভাগ:</b> ভাজক পূর্ণসংখ্যা, তাই সরাসরি লম্বা ভাগ; বিন্দু পেরোলে ভাগফলেও বিন্দু বসে। ভাগ শেষ হয় না, তাই ভগ্নাংশে ৮ ঘর পর্যন্ত:</p>
        <table class="truth cols">
          <thead><tr><th>ধাপ</th><th>নেওয়া অংশ</th><th>101 বসে?</th><th>ভাগফলে</th><th>বাকি</th></tr></thead>
          <tbody><tr><td>১</td><td>111<small>বাঁ থেকে ৩ অঙ্ক</small></td><td>হ্যাঁ</td><td>1</td><td>111 − 101 = 10</td></tr><tr><td>২</td><td>100<small>পরের অঙ্ক নামিয়ে</small></td><td>না</td><td>0</td><td>100</td></tr><tr><td>৩</td><td>1001<small>পরের অঙ্ক নামিয়ে</small></td><td>হ্যাঁ</td><td>1</td><td>1001 − 101 = 100</td></tr><tr><td>৪</td><td>1000<small>বিন্দুর পরের অঙ্ক নামিয়ে</small></td><td>হ্যাঁ</td><td>1</td><td>1000 − 101 = 11</td></tr><tr><td>৫</td><td>111<small>বিন্দুর পরের অঙ্ক নামিয়ে</small></td><td>হ্যাঁ</td><td>1</td><td>111 − 101 = 10</td></tr><tr><td>৬</td><td>100<small>0 নামিয়ে</small></td><td>না</td><td>0</td><td>100</td></tr><tr><td>৭</td><td>1000<small>0 নামিয়ে</small></td><td>হ্যাঁ</td><td>1</td><td>1000 − 101 = 11</td></tr><tr><td>৮</td><td>110<small>0 নামিয়ে</small></td><td>হ্যাঁ</td><td>1</td><td>110 − 101 = 1</td></tr><tr><td>৯</td><td>10<small>0 নামিয়ে</small></td><td>না</td><td>0</td><td>10</td></tr><tr><td>১০</td><td>100<small>0 নামিয়ে</small></td><td>না</td><td>0</td><td>100</td></tr><tr><td>১১</td><td>1000<small>0 নামিয়ে</small></td><td>হ্যাঁ</td><td>1</td><td>1000 − 101 = 11</td></tr></tbody>
        </table>
        <p class="final"><b>উত্তর</b>(11101.01)<sub>2</sub> ÷ (101)<sub>2</sub> ≈ (101.11011001)<sub>2</sub></p>
        <p class="prose">যাচাই: ২৯.২৫ − ৫ = ২৪.২৫; ২৯.২৫ ÷ ৫ = ৫.৮৫, আর (101.11011001)<sub>2</sub> = ৫.৮৪৭৬৫৬২৫ ≈ ৫.৮৫।</p>
        <p class="prose"><b>“কম্পিউটার যোগের মাধ্যমে সকল কাজ সম্পাদন করতে পারে”:</b> বিয়োগ হয় ২-এর পরিপূরক যোগ করে (A − B = A + B-এর ২-এর পরিপূরক); গুণ হয় বারবার যোগ ও এক ঘর করে সরানো দিয়ে (ওপরের গুণের মতো); আর ভাগ হয় বারবার বিয়োগ দিয়ে, যা আবার পরিপূরক যোগ। তাই ALU-তে একটি যোগকারী বর্তনী দিয়েই চারটি কাজ হয়; উক্তিটি যথার্থ। পরিপূরকে বিয়োগ আছে <a href="#/note/number-system/complement">অংশ ৭</a>-এ। অন্য ইলেকট্রনিক যন্ত্রের সঙ্গে পার্থক্য <a href="#/note/computer-basics/def">অধ্যায় ১</a>-এ।</p>
<!--/PAST-BATCHES-->
      </div>
      <aside class="side">
        <p><b>নম্বর পেতে</b>প্রতিটি অঙ্কের শেষে দশমিকে যাচাই লিখুন। নিজের ভুল ধরা পড়ে, আর পরীক্ষকও দেখেন উত্তরটি নিশ্চিত।</p>
        <p><b>ভগ্নাংশ না ফুরালে</b>বাইনারিতে ৮ ঘর, অক্টাল ও হেক্সায় ৪ ঘর পর্যন্ত নিয়ে ≈ চিহ্ন দিন, আর কত ঘর নিলেন লিখে দিন।</p>
        <p><b>ছাপার ভুল</b>প্রশ্নে অবৈধ অঙ্ক বা ভুল ভিত্তি থাকলে শুরুতে এক লাইনে লিখুন কীভাবে পড়েছেন, তারপর সমাধান।</p>
      </aside>
    </section>

    <section class="blk" id="conv">
      <p class="blk-no">যন্ত্র<small>নিজে যাচাই</small></p>
      <div class="body">
        <h2>ধাপসহ রূপান্তর: নিজে করে মিলিয়ে নিন</h2>
        <p class="prose">যেকোনো সংখ্যা লিখুন, সংখ্যাটি কোন পদ্ধতির আর কোন পদ্ধতিতে নেবেন বাছুন; পুরো হিসাব ধাপে ধাপে দেখাবে, পরীক্ষার খাতার মতো করে। আগে নিজে খাতায় করুন, তারপর এখানে মিলিয়ে দেখুন কোন ধাপে আটকেছেন।</p>
        <form class="conv" id="conv-form" autocomplete="off" novalidate>
          <div class="fsec" role="group" aria-labelledby="cv1">
            <p class="fsec-l" id="cv1"><span>১</span>সংখ্যা<small>অঙ্ক 0–9, A–F আর একটি বিন্দু; বাংলা অঙ্কেও লেখা যায়</small></p>
            <div class="gate-field conv-field"><input id="conv-num" name="cvnum" type="text" inputmode="text" spellcheck="false" autocapitalize="characters" autocorrect="off" maxlength="24" placeholder="যেমন 45.35" aria-labelledby="cv1" aria-describedby="conv-err"></div>
          </div>
          <div class="fsec" role="group" aria-labelledby="cv2">
            <p class="fsec-l" id="cv2"><span>২</span>সংখ্যাটি যে পদ্ধতির</p>
            <div class="pick">
            <label><input type="radio" name="cvfrom" value="2"><i class="bub">২</i>বাইনারি</label>
            <label><input type="radio" name="cvfrom" value="8"><i class="bub">৮</i>অক্টাল</label>
            <label><input type="radio" name="cvfrom" value="10" checked><i class="bub">১০</i>দশমিক</label>
            <label><input type="radio" name="cvfrom" value="16"><i class="bub">১৬</i>হেক্সা</label>
            </div>
          </div>
          <div class="fsec" role="group" aria-labelledby="cv3">
            <p class="fsec-l" id="cv3"><span>৩</span>যে পদ্ধতিতে নেবেন</p>
            <div class="pick">
            <label><input type="radio" name="cvto" value="2" checked><i class="bub">২</i>বাইনারি</label>
            <label><input type="radio" name="cvto" value="8"><i class="bub">৮</i>অক্টাল</label>
            <label><input type="radio" name="cvto" value="10"><i class="bub">১০</i>দশমিক</label>
            <label><input type="radio" name="cvto" value="16"><i class="bub">১৬</i>হেক্সা</label>
            </div>
          </div>
          <p class="conv-acts"><button class="btn" type="submit">ধাপসহ দেখুন <span aria-hidden="true">→</span></button></p>
          <p class="gate-err" id="conv-err" role="alert" hidden></p>
          <p class="conv-ex">উদাহরণ:
            <button type="button" class="tbtn" data-ex="45.35,10,2">45.35 · ১০ → ২</button>
            <button type="button" class="tbtn" data-ex="3015.86,10,16">3015.86 · ১০ → ১৬</button>
            <button type="button" class="tbtn" data-ex="BFE,16,8">BFE · ১৬ → ৮</button>
            <button type="button" class="tbtn" data-ex="10111.101,2,10">10111.101 · ২ → ১০</button>
            <button type="button" class="tbtn" data-ex="753.26,8,16">753.26 · ৮ → ১৬</button>
          </p>
        </form>
        <div class="conv-out" id="conv-out" aria-live="polite"></div>
      </div>
      <aside class="side">
        <p><b>কীভাবে ব্যবহার করবেন</b>আগে খাতায় নিজে করুন, তারপর এখানে মিলিয়ে নিন; না মিললে কোন ধাপে আলাদা হলো, সেটি দেখুন।</p>
        <p><b>সীমা</b>পূর্ণ অংশে ১২টি আর ভগ্নাংশে ৬টি অঙ্ক পর্যন্ত। ভগ্নাংশ শেষ না হলে বাইনারিতে ৮ ঘর, অক্টাল ও হেক্সায় ৪ ঘর পর্যন্ত নেওয়া হয়, বিগত অঙ্কগুলোর মতোই।</p>
      </aside>
    </section>

    <section class="blk" id="mistakes">
      <p class="blk-no">শেষে</p>
      <div class="body">
        <h2>যেসব ভুল হয়</h2>
        <div class="fixes">
          <div class="fix"><p class="was">(10)<sub>2</sub> = দশ</p><p class="is">(10)<sub>2</sub> = দুই</p><p class="why">বাইনারিতে 10 মানে ১ × ২ + ০।</p></div>
          <div class="fix"><p class="was">অক্টালে ৭-এর পরে 8</p><p class="is">অক্টালে ৭-এর পরে 10</p><p class="why">অক্টালে 8 ও 9 নামে কোনো অঙ্কই নেই।</p></div>
          <div class="fix"><p class="was">হেক্সায় দশ লেখা হয় 10</p><p class="is">হেক্সায় দশ লেখা হয় A</p><p class="why">(10)<sub>16</sub> আসলে ষোলো।</p></div>
          <div class="fix"><p class="was">২-এর পরিপূরক = সব বিট উল্টানো</p><p class="is">সব বিট উল্টে, তার সঙ্গে ১ যোগ</p><p class="why">শুধু উল্টালে হয় ১-এর পরিপূরক।</p></div>
          <div class="fix"><p class="was">ভাগশেষ ওপর থেকে নিচে পড়া</p><p class="is">ভাগশেষ নিচ থেকে ওপরে পড়া</p><p class="why">২৫-কে 10011 লিখলে উত্তর দাঁড়ায় ১৯।</p></div>
          <div class="fix"><p class="was">.1 = হেক্সায় .1</p><p class="is">.1 = .1000 = হেক্সায় .8</p><p class="why">ভগ্নাংশে শূন্য বসে ডানে, বাঁয়ে নয়।</p></div>
          <div class="fix"><p class="was">ভিন্ন পদ্ধতির সংখ্যা সরাসরি যোগ</p><p class="is">আগে একই পদ্ধতিতে এনে তারপর যোগ</p><p class="why">(55)<sub>8</sub> আর (55)<sub>16</sub>-এর মান আলাদা: ৪৫ আর ৮৫।</p></div>
          <div class="fix"><p class="was">11010 → বাঁ থেকে দল: 110 10</p><p class="is">ডান থেকে দল: 011 010 = (32)<sub>8</sub></p><p class="why">দল শুরু হয় বিন্দু থেকে (বিন্দু না থাকলে ডান প্রান্ত থেকে); কম পড়লে 0 বসে বাইরের দিকে।</p></div>
          <div class="fix"><p class="was">(17)<sub>16</sub> = (17)<sub>8</sub></p><p class="is">(17)<sub>16</sub> = 0001 0111 = 010 111 = (27)<sub>8</sub></p><p class="why">অঙ্ক হুবহু রাখা যায় না; বাইনারি সেতু হয়ে যান। দুটির মানই ২৩।</p></div>
          <div class="fix"><p class="was">হেক্সা বা অক্টাল বিয়োগে ধার নিলে ১০ যোগ</p><p class="is">ধার নিলে ভিত্তির সমান যোগ: হেক্সায় ১৬, অক্টালে ৮</p><p class="why">(A3C)<sub>16</sub> − (5E7)<sub>16</sub>-এর মাঝের ঘরে 3 + 16 = 19, তারপর 19 − 14 = 5।</p></div>
        </div>
      </div>
    </section>

    <section class="blk" id="practice">
      <p class="blk-no">অনুশীলন</p>
      <div class="body">
        <h2>এবার নিজে করুন</h2>
        <p class="prose">এই অধ্যায়ের সব MCQ উত্তর ও ব্যাখ্যাসহ পড়ুন, অথবা সময় ধরে পরীক্ষা দিন। ওপরের প্রতিটি অংশের বিগত প্রশ্ন থেকে প্রতিদিন দুটি অঙ্ক খাতায় করুন।</p>
        <p class="note-acts"><a class="btn" href="#/mcq/ch02">অধ্যায়ের MCQ পড়ুন <span aria-hidden="true">→</span></a><a class="btn line" href="#/setup/ch02">এই অধ্যায়ে পরীক্ষা দিন</a></p>
        <ul class="note-links">
          <li><a href="#/written/18-school/q5">২-এর পরিপূরকে (−১৫) থেকে (+১১) বিয়োগ</a><span>১৮তম লিখিত · প্রশ্ন ৫</span></li>
          <li><a href="#/written/18-school/q7">BCD ও বাইনারি কোড, তিনভিত্তিক সংখ্যা পদ্ধতি</a><span>১৮তম লিখিত · প্রশ্ন ৭</span></li>
          <li><a href="#/written/18-school/q8">হেক্সা ও দশমিক সংখ্যার যোগ, ফল বাইনারিতে</a><span>১৮তম লিখিত · প্রশ্ন ৮</span></li>
        </ul>
      </div>
    </section>

  </div>
</article>
`;
