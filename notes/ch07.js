/* অধ্যায় ৭ · ইন্টারনেট — the chapter note (#/note/internet), loaded only when the note is opened.
   The text between the backticks is plain HTML: edit it as HTML. Never type a backtick or a dollar sign followed by {
   inside it; String.raw keeps every backslash (the DOS paths) as written.
   First built by a generator (since lost; edit this file directly). The intranet drawing and the e-mail path are the model answers' own. */
(window.ICT_NOTES = window.ICT_NOTES || {}).ch07 = String.raw`
<article class="note">
  <header class="doc-head wrap">
    <p class="crumb"><a href="#/">সূচিপত্র</a><i aria-hidden="true">/</i>অধ্যায় ৭</p>
    <h1>ইন্টারনেট</h1>
    <p class="doc-lede">ইন্টারনেট কী ও কীভাবে কাজ করে, নেটওয়ার্ক ও টপোলজি, ব্যবহার ও সুফল-কুফল, ই-কমার্স ও সার্চ ইঞ্জিন; ই-মেইলের ঠিকানা ও আদান-প্রদান; ওয়ার্ল্ড ওয়াইড ওয়েব, URL ও HTML; ওয়েব ব্রাউজার; আর প্রোটোকল ও পূর্ণরূপ। প্রতিটি অংশের সঙ্গে ২০০৬ থেকে ২০২৪ পর্যন্ত লিখিত পরীক্ষায় সেই অংশ থেকে আসা সব প্রশ্ন।</p>
    <p class="doc-meta"><span>অংশ <b>৬</b></span><span>বিগত লিখিত প্রশ্ন <b id="prevCount"></b></span><span>MCQ <b id="noteMcq"></b></span><span>পড়তে <b>৩০ মিনিট</b></span></p>
  </header>

  <div class="secbar"><div class="wrap">
    <nav aria-label="এই নোটের অংশ" id="secnav">
      <a href="#/note/internet/map">মানচিত্র</a>
      <a href="#/note/internet/net">ইন্টারনেট ও নেটওয়ার্ক</a>
      <a href="#/note/internet/use">ব্যবহার ও সেবা</a>
      <a href="#/note/internet/mail">ই-মেইল</a>
      <a href="#/note/internet/web">WWW ও ওয়েবপেজ</a>
      <a href="#/note/internet/browser">ওয়েব ব্রাউজার</a>
      <a href="#/note/internet/terms">প্রোটোকল ও পূর্ণরূপ</a>
      <a href="#/note/internet/mistakes">ভুল এড়ান</a>
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
        <p class="tip"><b>সবচেয়ে বেশি এসেছে:</b> <span id="prevTop"></span>। ১৬টির মধ্যে ১৫টি প্রশ্নপত্রে এই অধ্যায় থেকে প্রশ্ন ছিল; শুধু ১৮তম-তে ছিল না। প্রশ্নগুলো বেশিরভাগ ৫ নম্বরের: সংজ্ঞা, একটি তালিকা বা একটি ছক।</p>
      </div>
      <aside class="side">
        <p><b>এই অধ্যায়ের MCQ</b>প্রতিটি অংশের শেষে সেই অংশের MCQ অনুশীলন; সব প্রশ্ন উত্তর ও ব্যাখ্যাসহ <a href="#/mcq/ch07">তালিকায়</a>।</p>
        <p><b>সিলেবাস ছ</b>“ইন্টারনেট: ১. সংজ্ঞা ২. ই-মেইল (Email) ৩. ওয়ার্ল্ড ওয়াইড ওয়েব ব্রাউজার।” অংশ ১–২ প্রথম বিষয়, অংশ ৩ ই-মেইল, অংশ ৪–৫ ওয়েব ও ব্রাউজার।</p>
      </aside>
    </section>

    <section class="blk" id="net" data-topic="net" data-short="ইন্টারনেট ও নেটওয়ার্ক">
      <p class="blk-no">অংশ ১<small>সিলেবাস ছ.১</small></p>
      <div class="body">
        <h2>ইন্টারনেট ও নেটওয়ার্ক</h2>
        <p class="defn"><b>সংজ্ঞা</b>বিশ্বজুড়ে কোটি কোটি কম্পিউটার ও নেটওয়ার্ক TCP/IP প্রোটোকলে পরস্পর যুক্ত হয়ে যে উন্মুক্ত নেটওয়ার্ক তৈরি করেছে, তাকে ইন্টারনেট বলে। একে “নেটওয়ার্কের নেটওয়ার্ক” বলা হয়; এর একক কোনো মালিক নেই।</p>
        <p class="prose">১৯৬৯ সালে যুক্তরাষ্ট্রের প্রতিরক্ষা বিভাগের গবেষণা প্রকল্প ARPANET-এ চারটি কম্পিউটার যুক্ত করে এর শুরু। ১৯৮৩ সালে ARPANET TCP/IP প্রোটোকল গ্রহণ করে, যা আজও ইন্টারনেটের ভিত্তি; ১৯৯১ সালে ওয়ার্ল্ড ওয়াইড ওয়েব সবার জন্য খুলে দেওয়ার পর ইন্টারনেট ঘরে ঘরে পৌঁছায়। বাংলাদেশে ১৯৯৬ সালে VSAT-এর মাধ্যমে অনলাইন ইন্টারনেট চালু হয়, আর ২০০৬ সালে দেশ সাবমেরিন ক্যাবল SEA-ME-WE 4-এ যুক্ত হয়।</p>
        <h3 class="sub" id="how"><span>১.১</span>ইন্টারনেট কীভাবে কাজ করে</h3>
        <ol class="chain" aria-label="আপনার কম্পিউটার থেকে মডেম বা রাউটার, তারপর ইন্টারনেট সেবাদাতা, তারপর ইন্টারনেট, তারপর ওয়েব সার্ভার">
          <li><b>আপনার যন্ত্র</b><small>কম্পিউটার, মোবাইল</small></li>
          <li><b>মডেম / রাউটার</b><small>সংকেত রূপান্তর</small></li>
          <li><b>ISP</b><small>ইন্টারনেট সেবাদাতা</small></li>
          <li><b>সার্ভার</b><small>যেখানে তথ্য থাকে</small></li>
        </ol>
        <ul class="pts">
          <li><b>ISP (Internet Service Provider):</b> যে প্রতিষ্ঠান টাকার বিনিময়ে ইন্টারনেট সংযোগ দেয়; মোবাইল অপারেটর ও ব্রডব্যান্ড কোম্পানিগুলো ISP।</li>
          <li><b>মডেম (Modulator-Demodulator):</b> কম্পিউটারের ডিজিটাল সংকেতকে টেলিফোন বা ক্যাবলের উপযোগী অ্যানালগ সংকেতে রূপান্তর করে (মডুলেশন), আর ফিরতি সংকেতকে আবার ডিজিটালে আনে (ডিমডুলেশন)।</li>
          <li><b>রাউটার:</b> ঘর বা অফিসের ছোট নেটওয়ার্ক (LAN)-কে বড় নেটওয়ার্ক (WAN, ইন্টারনেট)-এর সঙ্গে যুক্ত করে এবং প্রতিটি প্যাকেট সঠিক পথে পাঠায়।</li>
          <li><b>TCP/IP:</b> পাঠানো তথ্য ছোট ছোট প্যাকেটে ভাগ হয়; IP প্রতিটি প্যাকেটে ঠিকানা বসিয়ে পথ দেখায়, TCP সব প্যাকেট ঠিকমতো পৌঁছাল কি না দেখে আবার সাজিয়ে জোড়া দেয়।</li>
          <li><b>IP ঠিকানা:</b> ইন্টারনেটে যুক্ত প্রতিটি যন্ত্রের সংখ্যাভিত্তিক ঠিকানা। IPv4-এ ৩২ বিট, ০–২৫৫-এর চারটি সংখ্যা (যেমন <span class="m">192.168.1.1</span>); IPv6-এ ১২৮ বিট।</li>
          <li><b>ডোমেইন নাম ও DNS:</b> সংখ্যার ঠিকানা মনে রাখা কঠিন, তাই নাম ব্যবহার হয় (<span class="m">www.google.com</span>)। DNS (Domain Name System) সার্ভার নামটিকে IP ঠিকানায় অনুবাদ করে, ঠিক যেমন ফোনবুক নাম থেকে নম্বর বের করে।</li>
        </ul>
        <p class="prose">IPv4-এ মোট ঠিকানা ২<sup>৩২</sup> = ৪২৯,৪৯,৬৭,২৯৬ (প্রায় ৪৩০ কোটি), যা এখন কম পড়ছে; তাই IPv6 এসেছে।</p>
        <table class="rt cmp">
          <thead><tr><th>টপ লেভেল ডোমেইন</th><th>অর্থ</th></tr></thead>
          <tbody>
            <tr><td><span class="m">.com</span></td><td>বাণিজ্যিক</td></tr>
            <tr><td><span class="m">.org</span></td><td>সংগঠন</td></tr>
            <tr><td><span class="m">.net</span></td><td>নেটওয়ার্ক প্রতিষ্ঠান</td></tr>
            <tr><td><span class="m">.edu</span></td><td>শিক্ষাপ্রতিষ্ঠান</td></tr>
            <tr><td><span class="m">.gov</span></td><td>সরকারি</td></tr>
            <tr><td><span class="m">.bd</span></td><td>বাংলাদেশ (দেশের কোড); যেমন .gov.bd, .ac.bd</td></tr>
          </tbody>
        </table>
        <h3 class="sub"><span>১.২</span>সংযোগের উপায়</h3>
        <ul class="pts">
          <li><b>ডায়াল-আপ:</b> টেলিফোন লাইন ও মডেম দিয়ে; খুব ধীর, এখন প্রায় নেই।</li>
          <li><b>ব্রডব্যান্ড:</b> DSL, ক্যাবল বা ফাইবার অপটিক দিয়ে দ্রুত ও সবসময় চালু সংযোগ।</li>
          <li><b>মোবাইল ডেটা:</b> 3G, 4G, 5G মোবাইল নেটওয়ার্কে।</li>
          <li><b>Wi-Fi:</b> রাউটার থেকে তারবিহীনভাবে কাছাকাছি (কয়েক দশ মিটার) যন্ত্রে।</li>
          <li><b>Wi-MAX ও স্যাটেলাইট:</b> Wi-MAX অনেক দূর পর্যন্ত তারবিহীন ব্রডব্যান্ড; স্যাটেলাইট দুর্গম এলাকায় (বাংলাদেশে শুরুতে VSAT)।</li>
        </ul>
        <h3 class="sub"><span>১.৩</span>নেটওয়ার্কের ধরন</h3>
        <table class="rt cmp">
          <thead><tr><th>ধরন</th><th>পরিধি</th><th>উদাহরণ</th></tr></thead>
          <tbody>
            <tr><td>PAN (Personal Area Network)</td><td>এক ব্যক্তির চারপাশে কয়েক মিটার</td><td>ব্লুটুথে মোবাইল ও হেডফোন; ব্লুটুথ নেটওয়ার্ককে পিকোনেট বলে</td></tr>
            <tr><td>LAN (Local Area Network)</td><td>একটি ঘর, অফিস বা ভবন</td><td>স্কুলের কম্পিউটার ল্যাব</td></tr>
            <tr><td>MAN (Metropolitan Area Network)</td><td>একটি শহর</td><td>শহরজুড়ে ক্যাবল টিভি বা ব্যাংকের শাখাগুলো</td></tr>
            <tr><td>WAN (Wide Area Network)</td><td>দেশ বা পুরো পৃথিবী</td><td>ইন্টারনেট, সবচেয়ে বড় WAN</td></tr>
          </tbody>
        </table>
        <h3 class="sub" id="topology"><span>১.৪</span>নেটওয়ার্ক টপোলজি</h3>
        <p class="defn"><b>সংজ্ঞা</b>নেটওয়ার্কে কম্পিউটারগুলো কোন নকশায় পরস্পর যুক্ত থাকে, তাকে নেটওয়ার্ক টপোলজি বলে। প্রধান টপোলজি: বাস, রিং, স্টার, মেশ, আর এদের মিশ্রণে ট্রি ও হাইব্রিড।</p>
        <figure class="fig flow">
          <svg viewBox="0 0 400 356" role="img" aria-label="চারটি টপোলজি। বাস: একটি প্রধান তারে সব কম্পিউটার যুক্ত। রিং: প্রতিটি কম্পিউটার পাশের দুটির সঙ্গে যুক্ত হয়ে একটি বৃত্ত। স্টার: সব কম্পিউটার মাঝের একটি হাবের সঙ্গে যুক্ত। মেশ: প্রতিটি কম্পিউটার বাকি সবার সঙ্গে সরাসরি যুক্ত।">
            <rect class="cpu" x="6" y="6" width="190" height="168"/><path class="busl" d="M20 78H182"/><path class="fa" d="M36 47L36 78"/><rect class="fs" x="22" y="29" width="28" height="18"/><path class="fa" d="M76 109L76 78"/><rect class="fs" x="62" y="109" width="28" height="18"/><path class="fa" d="M116 47L116 78"/><rect class="fs" x="102" y="29" width="28" height="18"/><path class="fa" d="M156 109L156 78"/><rect class="fs" x="142" y="109" width="28" height="18"/><text class="sm" x="101" y="160">বাস</text>
            <rect class="cpu" x="204" y="6" width="190" height="168"/><path class="fa" d="M299 24L348 60"/><path class="fa" d="M348 60L330 118"/><path class="fa" d="M330 118L268 118"/><path class="fa" d="M268 118L250 60"/><path class="fa" d="M250 60L299 24"/><rect class="fs" x="285" y="15" width="28" height="18"/><rect class="fs" x="334" y="51" width="28" height="18"/><rect class="fs" x="316" y="109" width="28" height="18"/><rect class="fs" x="254" y="109" width="28" height="18"/><rect class="fs" x="236" y="51" width="28" height="18"/><text class="sm" x="299" y="160">রিং</text>
            <rect class="cpu" x="6" y="182" width="190" height="168"/><path class="fa" d="M101 252L101 196"/><path class="fa" d="M101 252L154 235"/><path class="fa" d="M101 252L134 297"/><path class="fa" d="M101 252L68 297"/><path class="fa" d="M101 252L48 235"/><rect class="fs" x="87" y="187" width="28" height="18"/><rect class="fs" x="140" y="226" width="28" height="18"/><rect class="fs" x="120" y="288" width="28" height="18"/><rect class="fs" x="54" y="288" width="28" height="18"/><rect class="fs" x="34" y="226" width="28" height="18"/><rect class="fs fd" x="81" y="241" width="40" height="22"/><text class="sm" x="101" y="253">হাব</text><text class="sm" x="101" y="336">স্টার</text>
            <rect class="cpu" x="204" y="182" width="190" height="168"/><path class="fa" d="M249 210L349 210"/><path class="fa" d="M249 210L349 294"/><path class="fa" d="M249 210L249 294"/><path class="fa" d="M349 210L349 294"/><path class="fa" d="M349 210L249 294"/><path class="fa" d="M349 294L249 294"/><rect class="fs" x="235" y="201" width="28" height="18"/><rect class="fs" x="335" y="201" width="28" height="18"/><rect class="fs" x="335" y="285" width="28" height="18"/><rect class="fs" x="235" y="285" width="28" height="18"/><text class="sm" x="299" y="336">মেশ</text>
          </svg>
          <figcaption>চিত্র: চার ধরনের নেটওয়ার্ক টপোলজি</figcaption>
        </figure>
        <table class="rt cmp">
          <thead><tr><th>টপোলজি</th><th>গঠন</th><th>সুবিধা</th><th>অসুবিধা</th></tr></thead>
          <tbody>
            <tr><td>বাস</td><td>একটি প্রধান তার (ব্যাকবোন), দুই প্রান্তে টার্মিনেটর; সব কম্পিউটার এতে যুক্ত</td><td>কম তার, সস্তা, সহজে নতুন কম্পিউটার যোগ</td><td>প্রধান তার কাটলে পুরো নেটওয়ার্ক বন্ধ; কম্পিউটার বাড়লে গতি কমে</td></tr>
            <tr><td>রিং</td><td>প্রতিটি কম্পিউটার পাশের দুটির সঙ্গে যুক্ত হয়ে বৃত্ত; তথ্য এক দিকে ঘোরে</td><td>প্রত্যেকে পালা করে পাঠায়, তাই সংঘর্ষ নেই</td><td>একটি কম্পিউটার বা তার নষ্ট হলে পুরো রিং বন্ধ; ত্রুটি খোঁজা কঠিন</td></tr>
            <tr><td>স্টার</td><td>সব কম্পিউটার মাঝের একটি হাব বা সুইচের সঙ্গে আলাদা তারে</td><td>একটি নষ্ট হলে বাকিরা চলে; ত্রুটি খোঁজা সহজ</td><td>হাব নষ্ট হলে সব বন্ধ; তার বেশি লাগে</td></tr>
            <tr><td>মেশ</td><td>প্রতিটি কম্পিউটার বাকি সবার সঙ্গে সরাসরি</td><td>খুব নির্ভরযোগ্য; একটি পথ বন্ধ হলে অন্য পথে</td><td>তার ও খরচ সবচেয়ে বেশি; n টি কম্পিউটারে n(n − 1) ÷ 2 টি সংযোগ</td></tr>
          </tbody>
        </table>
        <h3 class="sub" id="intranet"><span>১.৫</span>ইন্টারনেট, ইন্ট্রানেট ও এক্সট্রানেট</h3>
        <ul class="pts">
          <li><b>ইন্ট্রানেট:</b> একটি প্রতিষ্ঠানের ভেতরের ব্যক্তিগত নেটওয়ার্ক, যা ইন্টারনেটের প্রযুক্তি (TCP/IP, ওয়েবপেজ, ব্রাউজার, ই-মেইল) ব্যবহার করে, কিন্তু শুধু ঐ প্রতিষ্ঠানের কর্মীরা ঢুকতে পারেন।</li>
          <li><b>এক্সট্রানেট:</b> ইন্ট্রানেটের যে অংশে প্রতিষ্ঠানের বাইরের নির্দিষ্ট অংশীদার (সরবরাহকারী, ডিলার, গ্রাহক) পাসওয়ার্ড দিয়ে নিয়ন্ত্রিতভাবে ঢুকতে পারেন।</li>
        </ul>
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
        <div data-prev="net"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="1,6-8,31-34,58-64,83-92" data-name="ইন্টারনেট ও নেটওয়ার্ক">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch07/q1">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>MCQ-তে মনে রাখুন</b>মডেম ডিজিটাল ↔ অ্যানালগ; রাউটার LAN-কে WAN-এ জোড়ে; DNS নাম থেকে IP ঠিকানা; ব্লুটুথ নেটওয়ার্ক পিকোনেট।</p>
        <p><b>বারবার এসেছে</b>৫টি পরীক্ষায়: ইন্টারনেটের সংজ্ঞা, ইন্ট্রানেট-এক্সট্রানেট আর ৯ম পরীক্ষায় বাস ও রিং টপোলজি।</p>
      </aside>
    </section>

    <section class="blk" id="use" data-topic="use" data-short="ব্যবহার ও সেবা">
      <p class="blk-no">অংশ ২<small>সিলেবাস ছ.১</small></p>
      <div class="body">
        <h2>ইন্টারনেটের ব্যবহার, সুফল-কুফল ও সেবা</h2>
        <h3 class="sub" id="use-list"><span>২.১</span>আধুনিক জীবনে ইন্টারনেটের প্রয়োগ</h3>
        <ul class="pts">
          <li><b>যোগাযোগ:</b> ই-মেইল, মেসেঞ্জার, ভিডিও কল; মুহূর্তে বিশ্বের যেকোনো প্রান্তে বার্তা।</li>
          <li><b>শিক্ষা:</b> অনলাইন ক্লাস, ই-বুক, শিক্ষামূলক ভিডিও, পরীক্ষার ফল প্রকাশ ও ভর্তি আবেদন।</li>
          <li><b>ব্যবসা ও কেনাকাটা:</b> ই-কমার্স, অনলাইন বিজ্ঞাপন, ঘরে বসে কেনাকাটা।</li>
          <li><b>ব্যাংকিং:</b> অনলাইন ও মোবাইল ব্যাংকিং, বিল পরিশোধ।</li>
          <li><b>স্বাস্থ্য:</b> টেলিমেডিসিন, অনলাইনে ডাক্তারের সময় নেওয়া।</li>
          <li><b>সরকারি সেবা (ই-গভর্ন্যান্স):</b> অনলাইনে জন্মনিবন্ধন, পাসপোর্ট ও চাকরির আবেদন।</li>
          <li><b>বিনোদন ও সংবাদ:</b> অনলাইন পত্রিকা, ভিডিও, গান, সামাজিক যোগাযোগমাধ্যম।</li>
          <li><b>কর্মসংস্থান:</b> ফ্রিল্যান্সিং, ঘরে বসে অফিসের কাজ, অনলাইনে চাকরি খোঁজা।</li>
        </ul>
        <h3 class="sub" id="use-pro"><span>২.২</span>সুবিধা (সুফল) ও অসুবিধা (কুফল)</h3>
        <table class="rt cmp">
          <thead><tr><th>সুবিধা বা সুফল</th><th>অসুবিধা বা কুফল</th></tr></thead>
          <tbody>
            <tr><td>মুহূর্তে ও কম খরচে বিশ্বজুড়ে যোগাযোগ</td><td>সাইবার অপরাধ: হ্যাকিং, প্রতারণা, তথ্য চুরি</td></tr>
            <tr><td>যেকোনো বিষয়ে বিপুল তথ্য হাতের কাছে</td><td>ভাইরাস ও ম্যালওয়্যারের আক্রমণ</td></tr>
            <tr><td>ঘরে বসে শিক্ষা, কেনাকাটা, ব্যাংকিং ও সরকারি সেবা</td><td>ভুয়া খবর ও গুজব দ্রুত ছড়ায়</td></tr>
            <tr><td>ব্যবসার প্রসার ও নতুন কর্মসংস্থান (ফ্রিল্যান্সিং)</td><td>ব্যক্তিগত তথ্যের গোপনীয়তা নষ্টের ঝুঁকি</td></tr>
            <tr><td>সময় ও যাতায়াতের খরচ বাঁচে</td><td>আসক্তি; পড়াশোনা ও শরীরের ক্ষতি, সামাজিক বিচ্ছিন্নতা</td></tr>
            <tr><td>বিনোদন ও সংবাদ সহজলভ্য</td><td>অশ্লীল ও ক্ষতিকর বিষয়বস্তু, বিশেষ করে শিশুদের জন্য</td></tr>
          </tbody>
        </table>
        <p class="tip"><b>সুফল-কুফলের প্রশ্নে:</b> দুই কলামের ছকে অন্তত পাঁচটি করে লিখুন, আর শেষে এক লাইনে বলুন: সচেতনভাবে ব্যবহার করলে ইন্টারনেটের সুফলই বেশি।</p>
        <h3 class="sub" id="search"><span>২.৩</span>সার্চ ইঞ্জিন</h3>
        <p class="defn"><b>সংজ্ঞা</b>যে ওয়েবভিত্তিক সফটওয়্যার ব্যবহারকারীর দেওয়া শব্দ (কি-ওয়ার্ড) দিয়ে ইন্টারনেটের কোটি কোটি ওয়েবপেজ থেকে প্রাসঙ্গিক পেজগুলোর তালিকা দেয়, তাকে সার্চ ইঞ্জিন বলে। যেমন Google, Bing, Yahoo, DuckDuckGo।</p>
        <ol class="algo">
          <li><b>ক্রলিং:</b> ক্রলার বা স্পাইডার নামের প্রোগ্রাম লিংক ধরে ধরে ওয়েবপেজ ঘুরে পড়ে।</li>
          <li><b>ইনডেক্সিং:</b> পড়া পেজের শব্দগুলো একটি বিশাল সূচিতে (ইনডেক্স) সাজিয়ে রাখে, যেমন বইয়ের শেষের নির্ঘণ্ট।</li>
          <li><b>খোঁজা ও সাজানো:</b> ব্যবহারকারী শব্দ লিখলে সূচি থেকে মিলে যাওয়া পেজ বের করে, প্রাসঙ্গিকতা অনুযায়ী সাজিয়ে তালিকা দেখায়।</li>
        </ol>
        <h3 class="sub" id="ecom"><span>২.৪</span>ই-কমার্স</h3>
        <p class="defn"><b>সংজ্ঞা</b>ইন্টারনেটের মাধ্যমে পণ্য ও সেবা কেনাবেচা এবং লেনদেনকে ই-কমার্স (Electronic Commerce) বলে। যেমন Daraz, Amazon, Alibaba।</p>
        <table class="rt cmp">
          <thead><tr><th>ধরন</th><th>কে কার কাছে বিক্রি করে</th><th>উদাহরণ</th></tr></thead>
          <tbody>
            <tr><td>B2C</td><td>ব্যবসা থেকে ভোক্তা</td><td>Daraz, Amazon</td></tr>
            <tr><td>B2B</td><td>ব্যবসা থেকে ব্যবসা</td><td>Alibaba (পাইকারি)</td></tr>
            <tr><td>C2C</td><td>ভোক্তা থেকে ভোক্তা</td><td>Bikroy, পুরোনো জিনিস বিক্রির সাইট</td></tr>
            <tr><td>B2G</td><td>ব্যবসা থেকে সরকার</td><td>সরকারি অনলাইন টেন্ডার (ই-জিপি)</td></tr>
          </tbody>
        </table>
        <ul class="pts">
          <li><b>সুবিধা:</b> দিনরাত ২৪ ঘণ্টা খোলা, বিশ্বজুড়ে ক্রেতা; দোকান ভাড়া লাগে না; দাম তুলনা করা সহজ; ঘরে পৌঁছে দেওয়া।</li>
          <li><b>অসুবিধা:</b> কেনার আগে পণ্য ছুঁয়ে দেখা যায় না; প্রতারণা ও নিম্নমানের পণ্যের ঝুঁকি; অনলাইন লেনদেনের নিরাপত্তা; ইন্টারনেট ও ডিজিটাল জ্ঞান লাগে।</li>
        </ul>
        <h3 class="sub" id="bbs"><span>২.৫</span>বুলেটিন বোর্ড</h3>
        <p class="defn"><b>সংজ্ঞা</b>বুলেটিন বোর্ড সিস্টেম (BBS) হলো এমন একটি কম্পিউটার ব্যবস্থা, যেখানে ব্যবহারকারীরা মডেম বা নেটওয়ার্কের মাধ্যমে যুক্ত হয়ে নির্দিষ্ট বিষয়ে বার্তা লিখতে, অন্যের বার্তা পড়তে, ফাইল আদান-প্রদান করতে ও আলোচনা করতে পারেন; ঠিক যেমন দেয়ালের নোটিশ বোর্ডে সবাই কাগজ টাঙায় ও পড়ে।</p>
        <ul class="pts">
          <li><b>কাজ:</b> বিষয়ভিত্তিক আলোচনা ও প্রশ্নোত্তর, নোটিশ ও খবর প্রকাশ, ফাইল ও সফটওয়্যার ডাউনলোড, সদস্যদের মধ্যে বার্তা বিনিময়।</li>
          <li><b>ইতিহাস:</b> প্রথম BBS (CBBS) চালু হয় ১৯৭৮ সালে শিকাগোতে; ইন্টারনেট সবার হাতে আসার আগে এটিই ছিল অনলাইন আলোচনার প্রধান মাধ্যম।</li>
          <li><b>আজকের রূপ:</b> অনলাইন ফোরাম, নিউজগ্রুপ, প্রশ্নোত্তর সাইট আর সামাজিক মাধ্যমের গ্রুপ বুলেটিন বোর্ডেরই আধুনিক রূপ।</li>
        </ul>
        <div data-prev="use"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="3-5,9-14,17,18,70-72" data-name="ব্যবহার ও সেবা">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch07/q3">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>নম্বর পেতে</b>“সুবিধা-অসুবিধা”, “সুফল-কুফল”, “সুযোগ-সুবিধা”, “প্রয়োগ”: একই প্রশ্নের নানা রূপ; ২.১ ও ২.২ মিলিয়ে লিখুন।</p>
        <p><b>বারবার এসেছে</b>৭টি পরীক্ষায়: সুফল-কুফলের প্রশ্নই পাঁচবার; বুলেটিন বোর্ড দুবার।</p>
      </aside>
    </section>

    <section class="blk" id="mail" data-topic="mail" data-short="ই-মেইল">
      <p class="blk-no">অংশ ৩<small>সিলেবাস ছ.২</small></p>
      <div class="body">
        <h2>ই-মেইল</h2>
        <p class="defn"><b>সংজ্ঞা</b>ই-মেইল (Electronic Mail) হলো ইন্টারনেটের মাধ্যমে এক কম্পিউটার বা মোবাইল থেকে আরেকটিতে লেখা, ছবি ও ফাইল পাঠানোর ইলেকট্রনিক ডাক ব্যবস্থা। পাঠাতে SMTP, আর পেতে POP3 বা IMAP প্রোটোকল ব্যবহৃত হয়।</p>
        <p class="prose">১৯৭১ সালে রে টমলিনসন ARPANET-এ প্রথম দুটি কম্পিউটারের মধ্যে ই-মেইল পাঠান এবং ব্যবহারকারী ও কম্পিউটারের নাম আলাদা করতে @ চিহ্নটি বেছে নেন। জনপ্রিয় ই-মেইল সেবা: Gmail, Outlook, Yahoo Mail।</p>
        <h3 class="sub" id="mail-addr"><span>৩.১</span>ই-মেইল ঠিকানার গঠন</h3>
        <p class="prose">প্রতিটি ই-মেইল ঠিকানা পৃথিবীতে অনন্য। এর তিনটি অংশ, যেমন <span class="m">rahim.cse@gmail.com</span>:</p>
        <table class="rt cmp">
          <thead><tr><th>অংশ</th><th>উদাহরণে</th><th>অর্থ</th></tr></thead>
          <tbody>
            <tr><td>ইউজার নাম</td><td><span class="m">rahim.cse</span></td><td>ব্যবহারকারীর নিজস্ব নাম; একই ডোমেইনে দুজনের এক নাম হয় না</td></tr>
            <tr><td>@ (অ্যাট) চিহ্ন</td><td><span class="m">@</span></td><td>ইউজার নাম আর ডোমেইনকে আলাদা করে; প্রতিটি ঠিকানায় অবশ্যই একটি</td></tr>
            <tr><td>ডোমেইন নাম</td><td><span class="m">gmail.com</span></td><td>মেইল সার্ভারের নাম (gmail) আর টপ লেভেল ডোমেইন (.com)</td></tr>
          </tbody>
        </table>
        <p class="prose">প্রতিষ্ঠানের ঠিকানায় ডোমেইন আরও ভাগ থাকে: <span class="m">info@du.ac.bd</span>-তে du মানে ঢাকা বিশ্ববিদ্যালয়, ac মানে শিক্ষাপ্রতিষ্ঠান (academic), bd মানে বাংলাদেশ। ঠিকানায় ফাঁকা স্থান চলে না, আর সাধারণত ছোট-বড় হাতের অক্ষরে পার্থক্য হয় না।</p>
        <h3 class="sub" id="mail-flow"><span>৩.২</span>ই-মেইল আদান-প্রদানের পদ্ধতি</h3>
        <ol class="chain" aria-label="প্রেরক থেকে প্রেরকের সার্ভার, তারপর প্রাপকের সার্ভার, তারপর প্রাপক">
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
        <table class="rt cmp">
          <thead><tr><th>প্রোটোকল</th><th>কাজ</th></tr></thead>
          <tbody>
            <tr><td>SMTP</td><td>মেইল পাঠানো: প্রেরক থেকে সার্ভারে, এক সার্ভার থেকে আরেক সার্ভারে</td></tr>
            <tr><td>POP3</td><td>মেইল নামানো; সাধারণত নামানোর পর সার্ভার থেকে মুছে যায়, এক যন্ত্রে পড়ার উপযোগী</td></tr>
            <tr><td>IMAP</td><td>মেইল সার্ভারেই থাকে; মোবাইল, ল্যাপটপ সব যন্ত্রে একই মেইলবক্স দেখা যায়</td></tr>
          </tbody>
        </table>
        <h3 class="sub"><span>৩.৩</span>ই-মেইলের অংশ ও অপশন</h3>
        <ul class="pts">
          <li><b>To:</b> মূল প্রাপকের ঠিকানা।</li>
          <li><b>CC (Carbon Copy):</b> অনুলিপি; সব প্রাপক দেখতে পান কাকে কাকে পাঠানো হয়েছে।</li>
          <li><b>BCC (Blind Carbon Copy):</b> গোপন অনুলিপি; BCC-র প্রাপকের নাম অন্যরা দেখতে পান না।</li>
          <li><b>Subject:</b> বিষয়, এক লাইনে।</li>
          <li><b>Body ও Attachment:</b> মূল বার্তা; সঙ্গে ছবি, ডকুমেন্ট বা অন্য ফাইল সংযুক্ত করা যায়।</li>
          <li><b>ফোল্ডার:</b> Inbox (আসা মেইল), Sent (পাঠানো), Drafts (অসমাপ্ত), Spam বা Junk (অযাচিত), Trash (মোছা)।</li>
          <li><b>Reply, Reply All, Forward:</b> প্রেরককে উত্তর; সব প্রাপককে উত্তর; অন্য কাউকে বার্তাটি পাঠানো।</li>
        </ul>
        <h3 class="sub"><span>৩.৪</span>সুবিধা ও অসুবিধা</h3>
        <table class="rt cmp">
          <thead><tr><th>সুবিধা</th><th>অসুবিধা</th></tr></thead>
          <tbody>
            <tr><td>মুহূর্তে বিশ্বের যেকোনো জায়গায় পৌঁছায়</td><td>ইন্টারনেট সংযোগ ও যন্ত্র লাগে</td></tr>
            <tr><td>খরচ প্রায় নেই; কাগজ ও ডাকটিকিট লাগে না</td><td>স্প্যাম ও অযাচিত বিজ্ঞাপন</td></tr>
            <tr><td>একসঙ্গে অনেককে পাঠানো যায়</td><td>ভাইরাসযুক্ত সংযুক্তি ও প্রতারণামূলক (ফিশিং) মেইল</td></tr>
            <tr><td>ফাইল সংযুক্ত করা যায়; সংরক্ষণ ও খোঁজা সহজ</td><td>পাসওয়ার্ড চুরি হলে ব্যক্তিগত তথ্য ফাঁস</td></tr>
          </tbody>
        </table>
        <div data-prev="mail"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="2,23-28,65-69" data-name="ই-মেইল">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch07/q2">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>নম্বর পেতে</b>ঠিকানার গঠনে একটি উদাহরণ ঠিকানা লিখে তিনটি অংশ তীর দিয়ে দেখান; আদান-প্রদানে চার ধাপের পথ আর SMTP, POP3, IMAP-এর নাম।</p>
        <p><b>বারবার এসেছে</b>৯টি পরীক্ষায়: এই অধ্যায়ের সবচেয়ে বেশি আসা অংশ।</p>
      </aside>
    </section>

    <section class="blk" id="web" data-topic="web" data-short="WWW ও ওয়েবপেজ">
      <p class="blk-no">অংশ ৪<small>সিলেবাস ছ.৩</small></p>
      <div class="body">
        <h2>ওয়ার্ল্ড ওয়াইড ওয়েব (WWW)</h2>
        <p class="defn"><b>সংজ্ঞা</b>WWW (World Wide Web) হলো ইন্টারনেটে রাখা কোটি কোটি ওয়েবপেজের এমন একটি ব্যবস্থা, যেখানে পেজগুলো হাইপারলিংক দিয়ে একে অন্যের সঙ্গে যুক্ত এবং যেকোনো পেজ তার ঠিকানা (URL) দিয়ে ব্রাউজারে খোলা যায়। পেজগুলো HTML-এ লেখা হয় এবং HTTP প্রোটোকলে আসে।</p>
        <p class="prose">১৯৮৯ সালে সুইজারল্যান্ডের গবেষণাগার CERN-এ টিম বার্নার্স-লি ওয়েবের প্রস্তাব দেন; ১৯৯০ সালে প্রথম ওয়েব সার্ভার, ব্রাউজার ও ওয়েবপেজ তৈরি করেন, আর ১৯৯১ সালে ওয়েব সবার জন্য খুলে দেওয়া হয়। তাঁকে ওয়েবের জনক বলা হয়।</p>
        <h3 class="sub"><span>৪.১</span>ইন্টারনেট ও WWW এক নয়</h3>
        <table class="rt cmp">
          <thead><tr><th>বিষয়</th><th>ইন্টারনেট</th><th>WWW</th></tr></thead>
          <tbody>
            <tr><td>কী</td><td>কম্পিউটারের বিশ্বজোড়া নেটওয়ার্ক (তার, রাউটার, যন্ত্র)</td><td>সেই নেটওয়ার্কের ওপর চলা ওয়েবপেজের ব্যবস্থা</td></tr>
            <tr><td>সম্পর্ক</td><td>ভিত্তি; ওয়েব ছাড়াও ই-মেইল, FTP, ভিডিও কল চলে</td><td>ইন্টারনেটের একটি সেবা মাত্র</td></tr>
            <tr><td>প্রোটোকল</td><td>TCP/IP</td><td>HTTP, HTTPS</td></tr>
            <tr><td>শুরু</td><td>১৯৬৯ (ARPANET)</td><td>১৯৮৯–৯১ (টিম বার্নার্স-লি)</td></tr>
          </tbody>
        </table>
        <h3 class="sub" id="web-site"><span>৪.২</span>ওয়েবপেজ, ওয়েবসাইট ও হোমপেজ</h3>
        <ul class="pts">
          <li><b>ওয়েবপেজ:</b> ওয়েবের একটি একক ডকুমেন্ট (HTML পাতা), যাতে লেখা, ছবি, ভিডিও ও লিংক থাকে।</li>
          <li><b>ওয়েবসাইট:</b> একই ডোমেইনের অধীনে পরস্পর লিংক করা অনেক ওয়েবপেজের সমষ্টি; যেমন <span class="m">www.bangladesh.gov.bd</span>।</li>
          <li><b>হোমপেজ:</b> ওয়েবসাইটের প্রথম বা প্রধান পাতা; এখান থেকে বাকি পাতায় যাওয়া যায়।</li>
          <li><b>হাইপারলিংক:</b> পেজের যে লেখা বা ছবিতে ক্লিক করলে অন্য পেজে যাওয়া যায়।</li>
          <li><b>ওয়েব সার্ভার:</b> যে কম্পিউটারে ওয়েবসাইটের ফাইল রাখা থাকে এবং যা ব্রাউজারের অনুরোধে পেজ পাঠায়।</li>
        </ul>
        <table class="rt cmp">
          <thead><tr><th>বিষয়</th><th>ওয়েবপেজ</th><th>ওয়েবসাইট</th></tr></thead>
          <tbody>
            <tr><td>সংজ্ঞা</td><td>ওয়েবের একটি একক ডকুমেন্ট</td><td>পরস্পর লিংক করা অনেক ওয়েবপেজের সমষ্টি</td></tr>
            <tr><td>ঠিকানা</td><td>প্রতিটি পেজের নিজস্ব URL</td><td>একটি ডোমেইন নাম</td></tr>
            <tr><td>সম্পর্ক</td><td>ওয়েবসাইটের একটি অংশ</td><td>অনেক ওয়েবপেজ নিয়ে গঠিত</td></tr>
            <tr><td>হোমপেজ</td><td>নিজে হোমপেজ নাও হতে পারে</td><td>প্রথম পাতাটি হোমপেজ</td></tr>
            <tr><td>উদাহরণ</td><td>সংবাদপত্রের একটি খবরের পাতা</td><td>পুরো সংবাদপত্রের সাইট</td></tr>
          </tbody>
        </table>
        <h3 class="sub" id="url"><span>৪.৩</span>URL-এর গঠন</h3>
        <p class="defn"><b>URL (Uniform Resource Locator)</b>ইন্টারনেটে কোনো ওয়েবপেজ বা ফাইলের পূর্ণ ও অনন্য ঠিকানা। যেমন <span class="m">https://<wbr>www.bangladesh.gov.bd/<wbr>site/<wbr>page/<wbr>about.html</span></p>
        <table class="rt cmp">
          <thead><tr><th>অংশ</th><th>উদাহরণে</th><th>অর্থ</th></tr></thead>
          <tbody>
            <tr><td>প্রোটোকল</td><td><span class="m">https://</span></td><td>কোন নিয়মে পেজটি আসবে; s মানে নিরাপদ (এনক্রিপ্ট করা)</td></tr>
            <tr><td>সাবডোমেইন</td><td><span class="m">www</span></td><td>সাইটের ওয়েব অংশ</td></tr>
            <tr><td>ডোমেইন নাম</td><td><span class="m">bangladesh.gov.bd</span></td><td>প্রতিষ্ঠানের নাম, ধরন (gov) ও দেশ (bd)</td></tr>
            <tr><td>পাথ ও ফাইল</td><td><span class="m">/site/<wbr>page/<wbr>about.html</span></td><td>সার্ভারের কোন ফোল্ডারের কোন ফাইল</td></tr>
          </tbody>
        </table>
        <h3 class="sub" id="html"><span>৪.৪</span>HTML</h3>
        <p class="defn"><b>সংজ্ঞা</b>HTML (HyperText Markup Language) হলো ওয়েবপেজ তৈরির মার্কআপ ভাষা। ট্যাগ (&lt; &gt; চিহ্নের ভেতরের নির্দেশ) দিয়ে বলে দেওয়া হয় কোনটি শিরোনাম, কোনটি অনুচ্ছেদ, কোথায় ছবি বা লিংক; ব্রাউজার সেই অনুযায়ী পেজ সাজিয়ে দেখায়। এটি প্রোগ্রামিং ভাষা নয়।</p>
        <pre class="code">&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;My School&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Welcome&lt;/h1&gt;
  &lt;p&gt;Read the
    &lt;a href="n.html"&gt;notice&lt;/a&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
        <p class="prose">এখানে h1 শিরোনাম, p অনুচ্ছেদ, আর a একটি হাইপারলিংক; প্রায় প্রতিটি ট্যাগের একটি শুরুর ও একটি শেষের (/ চিহ্নসহ) রূপ থাকে। পেজের চেহারা সাজাতে CSS আর চলাফেরা বা হিসাব যোগ করতে JavaScript ব্যবহার হয়।</p>
        <h3 class="sub" id="web-role"><span>৪.৫</span>শিক্ষা ও ব্যবসায় WWW-এর ভূমিকা</h3>
        <ul class="pts">
          <li><b>শিক্ষা:</b> অনলাইন ক্লাস ও কোর্স (যেমন শিক্ষক বাতায়ন, কিশোর বাতায়ন), ই-বুক ও ডিজিটাল লাইব্রেরি, গবেষণাপত্র, ভর্তি ও পরীক্ষার ফল, শিক্ষামূলক ভিডিও; দূরের শিক্ষার্থীও ভালো শিক্ষকের কাছে পৌঁছায়।</li>
          <li><b>ব্যবসা:</b> প্রতিষ্ঠানের ওয়েবসাইটে পণ্যের প্রচার, অনলাইন বিক্রি (ই-কমার্স), গ্রাহকসেবা, অনলাইন বিজ্ঞাপন, বাজার গবেষণা, অনলাইন লেনদেন; ছোট উদ্যোক্তাও সারা দেশে বা বিদেশে বিক্রি করতে পারেন।</li>
        </ul>
        <div data-prev="web"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="15,22,29,35-44" data-name="WWW ও ওয়েবপেজ">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch07/q15">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>MCQ-তে মনে রাখুন</b>WWW-এর জনক টিম বার্নার্স-লি; ওয়েবপেজ লেখার ভাষা HTML; ওয়েবপেজ আনার প্রোটোকল HTTP; পূর্ণ ঠিকানা URL।</p>
        <p><b>বারবার এসেছে</b>৬টি পরীক্ষায়: WWW কী, ওয়েবসাইট-ওয়েবপেজ, আর শিক্ষা ও ব্যবসায় ভূমিকা।</p>
      </aside>
    </section>

    <section class="blk" id="browser" data-topic="browser" data-short="ওয়েব ব্রাউজার">
      <p class="blk-no">অংশ ৫<small>সিলেবাস ছ.৩</small></p>
      <div class="body">
        <h2>ওয়েব ব্রাউজার</h2>
        <p class="defn"><b>সংজ্ঞা</b>যে অ্যাপ্লিকেশন সফটওয়্যার দিয়ে ইন্টারনেটের ওয়ার্ল্ড ওয়াইড ওয়েবে থাকা ওয়েবপেজ খুঁজে, এনে পর্দায় দেখা যায়, তাকে ওয়েব ব্রাউজার বলে। এটি WWW-তে ঢোকার দরজা।</p>
        <h3 class="sub" id="browser-names"><span>৫.১</span>কয়েকটি ব্রাউজার</h3>
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
        <p class="prose">পুরোনো ব্রাউজার: WorldWideWeb (১৯৯০, টিম বার্নার্স-লির তৈরি প্রথম ব্রাউজার), Mosaic (১৯৯৩, প্রথম জনপ্রিয় চিত্রভিত্তিক ব্রাউজার), Netscape Navigator ও Internet Explorer। মনে রাখুন: Google একটি সার্চ ইঞ্জিন, Gmail ই-মেইল সেবা, আর MS Word ওয়ার্ড প্রসেসর; এগুলো ব্রাউজার নয়।</p>
        <h3 class="sub" id="browser-role"><span>৫.২</span>ব্রাউজারের কাজ ও ভূমিকা</h3>
        <ul class="pts">
          <li><b>পেজ আনা:</b> ব্যবহারকারী URL লিখলে বা লিংকে ক্লিক করলে HTTP অনুরোধ পাঠিয়ে ওয়েব সার্ভার থেকে পেজ আনে।</li>
          <li><b>পেজ দেখানো:</b> HTML, CSS ও JavaScript পড়ে লেখা, ছবি, ভিডিও সাজিয়ে পর্দায় দেখায়।</li>
          <li><b>চলাচল:</b> লিংক, পেছনে-সামনে যাওয়া, একাধিক ট্যাব, বুকমার্ক ও হিস্টোরি দিয়ে সহজে পেজ থেকে পেজে যাওয়া।</li>
          <li><b>অনুসন্ধান ও ডাউনলোড:</b> ঠিকানা বার থেকেই সার্চ ইঞ্জিনে খোঁজা; ফাইল নামানো।</li>
          <li><b>নিরাপত্তা:</b> HTTPS-এ এনক্রিপ্ট করা সংযোগ (ঠিকানা বারে তালার চিহ্ন), ক্ষতিকর সাইটের সতর্কবার্তা।</li>
        </ul>
        <h3 class="sub"><span>৫.৩</span>ঠিকানা লিখলে পেজ কীভাবে আসে</h3>
        <ol class="algo">
          <li>ব্যবহারকারী ঠিকানা বারে URL লেখেন, যেমন <span class="m">www.bangladesh.gov.bd</span>, আর Enter চাপেন।</li>
          <li>ব্রাউজার DNS সার্ভার থেকে ডোমেইন নামটির IP ঠিকানা জেনে নেয়।</li>
          <li>সেই IP ঠিকানার ওয়েব সার্ভারের সঙ্গে সংযোগ করে HTTP বা HTTPS অনুরোধ পাঠায়।</li>
          <li>সার্ভার পেজের HTML ফাইল, ছবি ও অন্যান্য ফাইল পাঠায়।</li>
          <li>ব্রাউজার ফাইলগুলো পড়ে পেজটি সাজিয়ে পর্দায় দেখায়; লিংকে ক্লিক করলে আবার একই ধাপ।</li>
        </ol>
        <h3 class="sub"><span>৫.৪</span>ব্রাউজার উইন্ডোর অংশ</h3>
        <ul class="pts">
          <li><b>ঠিকানা বার:</b> URL লেখা ও দেখা; এখান থেকে সার্চও করা যায়।</li>
          <li><b>ট্যাব:</b> একই উইন্ডোতে একাধিক পেজ।</li>
          <li><b>Back, Forward, Refresh:</b> আগের পেজ, পরের পেজ, পেজ আবার লোড।</li>
          <li><b>বুকমার্ক:</b> পছন্দের পেজের ঠিকানা সংরক্ষণ।</li>
          <li><b>হিস্টোরি:</b> আগে দেখা পেজের তালিকা।</li>
        </ul>
        <div data-prev="browser"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="19-21,45-50,73-77" data-name="ওয়েব ব্রাউজার">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch07/q19">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>নম্বর পেতে</b>সংজ্ঞার পরে কাজগুলো বুলেটে, শেষে অন্তত চারটি ব্রাউজারের নাম ও প্রতিষ্ঠান।</p>
        <p><b>বারবার এসেছে</b>৭টি পরীক্ষায়: “ওয়েব ব্রাউজার কী? কয়েকটির নাম লিখুন” প্রায় হুবহু বারবার।</p>
      </aside>
    </section>

    <section class="blk" id="terms" data-topic="terms" data-short="প্রোটোকল ও পূর্ণরূপ">
      <p class="blk-no">অংশ ৬</p>
      <div class="body">
        <h2>প্রোটোকল ও পূর্ণরূপ</h2>
        <h3 class="sub" id="protocol"><span>৬.১</span>প্রোটোকল</h3>
        <p class="defn"><b>সংজ্ঞা</b>নেটওয়ার্কে যুক্ত কম্পিউটারগুলো কীভাবে উপাত্ত পাঠাবে, গ্রহণ করবে ও বুঝবে, সেই সর্বসম্মত নিয়মের সমষ্টিকে প্রোটোকল বলে; যেমন দুজন মানুষের কথা বলতে একটি সাধারণ ভাষা লাগে।</p>
        <table class="rt cmp">
          <thead><tr><th>প্রোটোকল</th><th>কাজ</th></tr></thead>
          <tbody>
            <tr><td>TCP/IP</td><td>ইন্টারনেটের মূল প্রোটোকল; উপাত্ত প্যাকেটে ভাগ করে ঠিকানামতো পৌঁছায়</td></tr>
            <tr><td>HTTP / HTTPS</td><td>ওয়েব সার্ভার থেকে ব্রাউজারে ওয়েবপেজ আনা; HTTPS নিরাপদ (এনক্রিপ্ট করা)</td></tr>
            <tr><td>FTP</td><td>নেটওয়ার্কে এক কম্পিউটার থেকে আরেকটিতে ফাইল আদান-প্রদান</td></tr>
            <tr><td>SMTP</td><td>ই-মেইল পাঠানো</td></tr>
            <tr><td>POP3 / IMAP</td><td>ই-মেইল নামানো ও পড়া</td></tr>
            <tr><td>Telnet</td><td>দূরের কম্পিউটারে লগইন করে কাজ করা</td></tr>
          </tbody>
        </table>
        <p class="prose">ইন্টারনেটে ব্যবহৃত “দুটি প্রোটোকলের নাম” চাইলে TCP/IP আর HTTP লিখুন, পাশে এক লাইনে কাজ। FTP (File Transfer Protocol) দিয়ে ওয়েবসাইটের ফাইল সার্ভারে তোলা বা বড় ফাইল নামানো হয়।</p>
        <h3 class="sub" id="full-forms"><span>৬.২</span>যে পূর্ণরূপগুলো বারবার আসে</h3>
        <table class="rt cmp">
          <thead><tr><th>সংক্ষেপ</th><th>পূর্ণরূপ</th></tr></thead>
          <tbody>
            <tr><td>WWW</td><td>World Wide Web</td></tr>
            <tr><td>URL</td><td>Uniform Resource Locator</td></tr>
            <tr><td>HTTP</td><td>HyperText Transfer Protocol</td></tr>
            <tr><td>HTTPS</td><td>HyperText Transfer Protocol Secure</td></tr>
            <tr><td>HTML</td><td>HyperText Markup Language</td></tr>
            <tr><td>FTP</td><td>File Transfer Protocol</td></tr>
            <tr><td>TCP/IP</td><td>Transmission Control Protocol / Internet Protocol</td></tr>
            <tr><td>SMTP</td><td>Simple Mail Transfer Protocol</td></tr>
            <tr><td>POP</td><td>Post Office Protocol</td></tr>
            <tr><td>IMAP</td><td>Internet Message Access Protocol</td></tr>
            <tr><td>DNS</td><td>Domain Name System</td></tr>
            <tr><td>ISP</td><td>Internet Service Provider</td></tr>
            <tr><td>ARPANET</td><td>Advanced Research Projects Agency Network</td></tr>
            <tr><td>E-mail</td><td>Electronic Mail</td></tr>
            <tr><td>CC / BCC</td><td>Carbon Copy / Blind Carbon Copy</td></tr>
            <tr><td>MODEM</td><td>Modulator-Demodulator</td></tr>
            <tr><td>LAN / MAN / WAN</td><td>Local / Metropolitan / Wide Area Network</td></tr>
            <tr><td>PAN</td><td>Personal Area Network</td></tr>
            <tr><td>BBS</td><td>Bulletin Board System</td></tr>
            <tr><td>VoIP</td><td>Voice over Internet Protocol</td></tr>
            <tr><td>Wi-MAX</td><td>Worldwide Interoperability for Microwave Access</td></tr>
            <tr><td>Wi-Fi</td><td>Wireless Fidelity (প্রচলিত পূর্ণরূপ; নামটি আসলে একটি ব্র্যান্ড)</td></tr>
          </tbody>
        </table>
        <p class="prose">ছোট প্রশ্নে কম্পিউটারের অন্য পূর্ণরূপও (ENIAC, UNIVAC, EPROM, ALU, BCD, CD) মিশিয়ে আসে; সেগুলো আছে <a href="#/note/computer-basics/hist">অধ্যায় ১ · যে পূর্ণরূপগুলো বারবার আসে</a> অংশে।</p>
        <div data-prev="terms"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="16,30,51-57,78-82" data-name="প্রোটোকল ও পূর্ণরূপ">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch07/q16">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>নম্বর পেতে</b>পূর্ণরূপের প্রশ্নে শুধু পূর্ণরূপ নয়, এক লাইনে কাজটিও লিখুন; বানান ঠিক রাখুন।</p>
        <p><b>বারবার এসেছে</b>৫টি পরীক্ষায়: পাঁচটি পূর্ণরূপের ছোট প্রশ্ন, আর প্রোটোকলের নাম।</p>
      </aside>
    </section>

    <section class="blk" id="mistakes">
      <p class="blk-no">শেষে</p>
      <div class="body">
        <h2>যেসব ভুল হয়</h2>
        <div class="fixes">
          <div class="fix"><p class="was">ইন্টারনেট আর WWW একই</p><p class="is">WWW ইন্টারনেটের একটি সেবা</p><p class="why">ই-মেইল, FTP, ভিডিও কলও ইন্টারনেটে চলে, ওয়েব ছাড়াই।</p></div>
          <div class="fix"><p class="was">Google একটি ব্রাউজার</p><p class="is">Google সার্চ ইঞ্জিন; Chrome ব্রাউজার</p><p class="why">ব্রাউজার পেজ দেখায়; সার্চ ইঞ্জিন পেজ খুঁজে দেয়।</p></div>
          <div class="fix"><p class="was">ওয়েবসাইট মানে একটি পেজ</p><p class="is">ওয়েবসাইট অনেক ওয়েবপেজের সমষ্টি</p><p class="why">প্রথম পাতাটি হোমপেজ।</p></div>
          <div class="fix"><p class="was">POP3 দিয়ে মেইল পাঠানো হয়</p><p class="is">পাঠাতে SMTP; নামাতে POP3 বা IMAP</p><p class="why">S মনে রাখুন: Send-এর SMTP।</p></div>
          <div class="fix"><p class="was">CC-র প্রাপক লুকানো থাকে</p><p class="is">লুকানো থাকে BCC-র প্রাপক</p><p class="why">B মানে Blind।</p></div>
          <div class="fix"><p class="was">HTML একটি প্রোগ্রামিং ভাষা</p><p class="is">HTML মার্কআপ ভাষা</p><p class="why">এতে হিসাব বা সিদ্ধান্ত নেই; শুধু পেজের গঠন বলে দেয়।</p></div>
          <div class="fix"><p class="was">URL = Universal Resource Locator</p><p class="is">URL = Uniform Resource Locator</p><p class="why">প্রথম শব্দটি Uniform।</p></div>
          <div class="fix"><p class="was">ই-মেইল ঠিকানায় একাধিক @</p><p class="is">ঠিক একটি @</p><p class="why">@ ইউজার নাম আর ডোমেইনকে আলাদা করে।</p></div>
        </div>
      </div>
    </section>

    <section class="blk" id="practice">
      <p class="blk-no">অনুশীলন</p>
      <div class="body">
        <h2>এবার নিজে করুন</h2>
        <p class="prose">এই অধ্যায়ের সব MCQ উত্তর ও ব্যাখ্যাসহ পড়ুন, অথবা সময় ধরে পরীক্ষা দিন। লিখিত অংশের প্রশ্নগুলো ছোট; প্রতিদিন একটি সংজ্ঞা, একটি তালিকা আর পাঁচটি পূর্ণরূপ না দেখে লিখে মিলিয়ে নিন।</p>
        <p class="note-acts"><a class="btn" href="#/mcq/ch07">অধ্যায়ের MCQ পড়ুন <span aria-hidden="true">→</span></a><a class="btn line" href="#/setup/ch07">এই অধ্যায়ে পরীক্ষা দিন</a></p>
        <ul class="note-links">
          <li><a href="#/written/17-school/q8">ই-মেইল ও ই-মেইল ঠিকানার গঠন</a><span>১৭তম লিখিত · প্রশ্ন ৮</span></li>
          <li><a href="#/written/16-school/q8">ওয়েব ব্রাউজার ও কয়েকটির নাম</a><span>১৬তম লিখিত · প্রশ্ন ৮ (অথবা)</span></li>
          <li><a href="#/written/15-school/q10">ই-মেইলের মাধ্যমে তথ্য আদান-প্রদান</a><span>১৫তম লিখিত · প্রশ্ন ১০</span></li>
          <li><a href="#/written/14-school/q10">WWW ও ওয়েব ব্রাউজারের ভূমিকা</a><span>১৪তম লিখিত · প্রশ্ন ১০</span></li>
          <li><a href="#/written/13-school/q5">ইন্টারনেট, ইন্ট্রানেট ও এক্সট্রানেট</a><span>১৩তম লিখিত · প্রশ্ন ৫</span></li>
        </ul>
      </div>
    </section>

  </div>
</article>
`;
