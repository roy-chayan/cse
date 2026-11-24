/* অধ্যায় ৪ · লজিক সার্কিট ও লজিক গেট — the chapter note (#/note/logic-gates), loaded only when the note is opened.
   The text between the backticks is plain HTML: edit it as HTML. Never type a backtick or a dollar sign followed by {
   inside it; String.raw keeps every backslash (the DOS paths) as written.
   The syllabus (ঘ) names only OR, AND, NOT and NOR, but the past papers also ask NAND, XOR, Boolean algebra and
   simplification almost every year, so those sections are here too and say so. Gate drawings reuse the answers' shapes. */
(window.ICT_NOTES = window.ICT_NOTES || {}).ch04 = String.raw`
<article class="note">
  <header class="doc-head wrap">
    <p class="crumb"><a href="#/">সূচিপত্র</a><i aria-hidden="true">/</i>অধ্যায় ৪</p>
    <h1>লজিক সার্কিট ও লজিক গেট</h1>
    <p class="doc-lede">লজিক গেট, সত্যক সারণি, সার্বজনীন গেট, বুলিয়ান অ্যালজেবরা, আর সমীকরণ সরল করে লজিক সার্কিট আঁকা। প্রতিটি অংশের সঙ্গে ২০০৬ থেকে ২০২৪ পর্যন্ত লিখিত পরীক্ষায় সেই অংশ থেকে আসা সব প্রশ্ন।</p>
    <p class="doc-meta"><span>অংশ <b>৬</b></span><span>বিগত লিখিত প্রশ্ন <b id="prevCount"></b></span><span>MCQ <b id="noteMcq"></b></span><span>পড়তে <b>৩০ মিনিট</b></span></p>
  </header>

  <div class="secbar"><div class="wrap">
    <nav aria-label="এই নোটের অংশ" id="secnav">
      <a href="#/note/logic-gates/map">মানচিত্র</a>
      <a href="#/note/logic-gates/gates">মৌলিক গেট</a>
      <a href="#/note/logic-gates/truth">সত্যক সারণি</a>
      <a href="#/note/logic-gates/nor">NOR ও যৌগিক গেট</a>
      <a href="#/note/logic-gates/univ">সার্বজনীন গেট</a>
      <a href="#/note/logic-gates/bool">বুলিয়ান অ্যালজেবরা</a>
      <a href="#/note/logic-gates/circ">সরলীকরণ ও সার্কিট</a>
      <a href="#/note/logic-gates/mistakes">ভুল এড়ান</a>
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
        <p class="tip"><b>সবচেয়ে বেশি এসেছে:</b> <span id="prevTop"></span>। ১৬টি প্রশ্নপত্রের প্রতিটিতেই এই অধ্যায় থেকে প্রশ্ন ছিল। সিলেবাসে শুধু OR, AND, NOT ও NOR লেখা থাকলেও NAND, XOR, বুলিয়ান অ্যালজেবরা আর সরলীকরণ প্রায় প্রতি বছর আসে; তাই ছয়টি অংশই পড়ুন।</p>
      </div>
      <aside class="side">
        <p><b>এই অধ্যায়ের MCQ</b>প্রতিটি অংশের শেষে সেই অংশের MCQ অনুশীলন; পুরো অধ্যায়ের প্রশ্ন উত্তর ও ব্যাখ্যাসহ <a href="#/mcq/ch04">তালিকায়</a>।</p>
        <p><b>সিলেবাস ঘ</b>“লজিক সার্কিট/বর্তনী। লজিক গেটস: অর গেট, এন্ড গেট, নট গেট, নর গেট।” বাকি অংশগুলো এই চারটি গেট বুঝতে ও কাজে লাগাতেই দরকার হয়।</p>
      </aside>
    </section>

    <section class="blk" id="gates" data-topic="gates" data-short="মৌলিক গেট">
      <p class="blk-no">অংশ ১<small>সিলেবাস ঘ</small></p>
      <div class="body">
        <h2>লজিক গেট ও মৌলিক গেট</h2>
        <p class="defn"><b>লজিক গেট</b>যে ইলেকট্রনিক বর্তনী এক বা একাধিক ইনপুট সংকেত (০ বা ১) নিয়ে একটি নির্দিষ্ট যৌক্তিক নিয়মে একটি আউটপুট (০ বা ১) দেয়, তাকে লজিক গেট বলে। প্রতিটি গেট বুলিয়ান অ্যালজেবরার একটি অপারেশন বাস্তবে করে; কম্পিউটারের প্রতিটি হিসাব আর সিদ্ধান্ত শেষ পর্যন্ত অসংখ্য গেটের কাজ।</p>
        <p class="prose">ডিজিটাল বর্তনীতে অবস্থা মাত্র দুটি। High ভোল্টেজ (সাধারণত +২ থেকে +৫ ভোল্ট) মানে <b>১</b>, সত্য (True); Low ভোল্টেজ (০ থেকে প্রায় +০.৮ ভোল্ট) মানে <b>০</b>, মিথ্যা (False)। High-কে ১ ধরার এই নিয়মকে ধনাত্মক লজিক বলে।</p>
        <p class="defn"><b>মৌলিক গেট</b>যে গেটগুলো দিয়ে বাকি সব গেট ও বর্তনী তৈরি করা যায়, সেগুলো মৌলিক গেট। মৌলিক গেট তিনটি: AND, OR ও NOT। এরা বুলিয়ান অ্যালজেবরার তিনটি মৌলিক অপারেশন, যৌক্তিক গুণ, যৌক্তিক যোগ ও পূরক, করে।</p>

        <h3 class="sub"><span>১.১</span>তিনটি মৌলিক গেট এক নজরে</h3>
        <table class="rt cmp eqtab">
          <thead><tr><th>গেট</th><th>কাজ</th><th>সমীকরণ</th><th>আউটপুট ১ কখন</th></tr></thead>
          <tbody>
            <tr><td>AND</td><td>যৌক্তিক গুণ</td><td class="m">Y = A·B</td><td>সব ইনপুট ১ হলে</td></tr>
            <tr><td>OR</td><td>যৌক্তিক যোগ</td><td class="m">Y = A + B</td><td>অন্তত একটি ইনপুট ১ হলে</td></tr>
            <tr><td>NOT</td><td>পূরক (ইনভার্টার)</td><td class="m">Y = <span class="ov">A</span></td><td>ইনপুট ০ হলে</td></tr>
          </tbody>
        </table>

        <h3 class="sub"><span>১.২</span>AND গেট</h3>
        <p class="prose">দুই বা ততোধিক ইনপুট, একটি আউটপুট। সব ইনপুট ১ হলে তবেই আউটপুট ১; একটিও ০ হলে আউটপুট ০। প্রতীকটি দেখতে ইংরেজি D অক্ষরের মতো।</p>
        <div class="gates">
          <figure class="fig gate-sym"><svg viewBox="0 0 150 64" role="img" aria-label="AND গেটের প্রতীক"><text x="0" y="24" text-anchor="start">A</text><path class="w" d="M12 20 L40 20"/><text x="0" y="44" text-anchor="start">B</text><path class="w" d="M12 40 L40 40"/><path class="gb" d="M40 10H58A20 20 0 0 1 58 50H40Z"/><path class="w" d="M78 30 L118 30"/><text x="122" y="34" text-anchor="start">Y</text></svg><figcaption>AND: Y = A·B</figcaption></figure>
          <table class="truth"><thead><tr><th>A</th><th>B</th><th>Y</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td></tr></tbody></table>
        </div>

        <h3 class="sub"><span>১.৩</span>OR গেট</h3>
        <p class="prose">যেকোনো একটি ইনপুট ১ হলেই আউটপুট ১; সব ইনপুট ০ হলে তবেই আউটপুট ০। প্রতীকের পেছনটা ভেতরে বাঁকা, সামনেটা সুচালো।</p>
        <div class="gates">
          <figure class="fig gate-sym"><svg viewBox="0 0 150 64" role="img" aria-label="OR গেটের প্রতীক"><text x="0" y="24" text-anchor="start">A</text><path class="w" d="M12 20 L45 20"/><text x="0" y="44" text-anchor="start">B</text><path class="w" d="M12 40 L45 40"/><path class="gb" d="M40 10Q54 30 40 50Q66 50 78 30Q66 10 40 10Z"/><path class="w" d="M78 30 L118 30"/><text x="122" y="34" text-anchor="start">Y</text></svg><figcaption>OR: Y = A + B</figcaption></figure>
          <table class="truth"><thead><tr><th>A</th><th>B</th><th>Y</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td></tr></tbody></table>
        </div>

        <h3 class="sub"><span>১.৪</span>NOT গেট</h3>
        <p class="prose">একটি ইনপুট, একটি আউটপুট; আউটপুট সবসময় ইনপুটের উল্টো, তাই একে ইনভার্টারও বলে। প্রতীক একটি ত্রিভুজ, মাথায় ছোট বৃত্ত (বাবল)। যেকোনো গেটের প্রতীকে এই বাবল মানেই “উল্টে দেওয়া”।</p>
        <div class="gates">
          <figure class="fig gate-sym"><svg viewBox="0 0 150 64" role="img" aria-label="NOT গেটের প্রতীক"><text x="0" y="34" text-anchor="start">A</text><path class="w" d="M12 30 L40 30"/><path class="gb" d="M40 12L72 30L40 48Z"/><circle class="gb" cx="76" cy="30" r="4"/><path class="w" d="M80 30 L118 30"/><text x="122" y="34" text-anchor="start">Y</text></svg><figcaption>NOT: Y = <span class="ov">A</span></figcaption></figure>
          <table class="truth"><thead><tr><th>A</th><th>Y</th></tr></thead><tbody><tr><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td></tr></tbody></table>
        </div>

        <h3 class="sub"><span>১.৫</span>সুইচ দিয়ে বৈদ্যুতিক বর্তনী</h3>
        <p class="prose">সুইচ বন্ধ (চাপা) মানে ১, খোলা মানে ০; বাতি জ্বললে আউটপুট ১। AND-এ সুইচ দুটি সিরিজে, OR-এ প্যারালালে, আর NOT-এ সুইচটি বাতির সমান্তরালে থাকে।</p>
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

        <h3 class="sub"><span>১.৬</span>তিন ইনপুটের AND ও OR</h3>
        <p class="prose">তিন চলকে সারি ২<sup>৩</sup> = ৮টি। Y = A·B·C শুধু শেষ সারিতে (১, ১, ১) ১; Y = A + B + C শুধু প্রথম সারিতে (০, ০, ০) ০। চার বা আরও বেশি ইনপুটেও নিয়ম একই।</p>
        <div class="gates">
          <figure class="fig gate-sym"><svg viewBox="0 0 150 70" role="img" aria-label="তিন ইনপুটের AND গেটের প্রতীক"><text x="0" y="22" text-anchor="start">A</text><path class="w" d="M12 18H40"/><text x="0" y="39" text-anchor="start">B</text><path class="w" d="M12 35H40"/><text x="0" y="56" text-anchor="start">C</text><path class="w" d="M12 52H40"/><path class="gb" d="M40 8H58A27 27 0 0 1 58 62H40Z"/><path class="w" d="M85 35H118"/><text x="122" y="39" text-anchor="start">Y</text></svg><figcaption>তিন ইনপুটের AND</figcaption></figure>
          <figure class="fig gate-sym"><svg viewBox="0 0 150 70" role="img" aria-label="তিন ইনপুটের OR গেটের প্রতীক"><text x="0" y="22" text-anchor="start">A</text><path class="w" d="M12 18H46"/><text x="0" y="39" text-anchor="start">B</text><path class="w" d="M12 35H49"/><text x="0" y="56" text-anchor="start">C</text><path class="w" d="M12 52H46"/><path class="gb" d="M40 8Q56 35 40 62Q72 62 85 35Q72 8 40 8Z"/><path class="w" d="M85 35H118"/><text x="122" y="39" text-anchor="start">Y</text></svg><figcaption>তিন ইনপুটের OR</figcaption></figure>
          <table class="truth"><thead><tr><th>A</th><th>B</th><th>C</th><th>A·B·C</th><th>A+B+C</th></tr></thead><tbody>
            <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td></tr>
            <tr><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
            <tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td></tr>
            <tr><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
          </tbody></table>
        </div>
        <p class="prose">প্রতীক, সমীকরণ, সত্যক সারণি ও বৈদ্যুতিক বর্তনী একসঙ্গে আছে <a href="#/written/12-school/q5">১২তম লিখিত প্রশ্ন ৫-এর (অথবা) উত্তরে</a>; তিন চলকের AND ও OR আছে <a href="#/written/11-school/q4">১১তম প্রশ্ন ৪-এর (অথবা) উত্তরে</a>।</p>

        <div data-prev="gates"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="1-10,12-20,31-34,37,41,45,48,49,56,64,91,93,94,102" data-name="মৌলিক গেট">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch04/q1">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>নম্বর পেতে</b>“মৌলিক গেট বর্ণনা করুন” প্রশ্নে প্রতিটি গেটের চারটি জিনিস দিন: সংজ্ঞা, প্রতীক, সমীকরণ ও সত্যক সারণি। বৈদ্যুতিক বর্তনী চাইলে সুইচ আর বাতি দিয়ে আঁকুন।</p>
        <p><b>বারবার এসেছে</b>১১টি পরীক্ষায় মৌলিক গেটের প্রতীক, সমীকরণ বা সত্যক সারণি চাওয়া হয়েছে।</p>
      </aside>
    </section>

    <section class="blk" id="truth" data-topic="truth" data-short="সত্যক সারণি">
      <p class="blk-no">অংশ ২<small>সিলেবাস ঘ</small></p>
      <div class="body">
        <h2>সত্যক সারণি</h2>
        <p class="defn"><b>সংজ্ঞা</b>কোনো লজিক গেট বা বুলিয়ান সমীকরণের সম্ভাব্য সব ইনপুট-বিন্যাসে আউটপুট কী হয়, তা যে সারণিতে দেখানো হয়, তাকে সত্যক সারণি (Truth Table) বলে।</p>

        <h3 class="sub"><span>২.১</span>সারি কয়টি, কীভাবে লিখবেন</h3>
        <p class="prose">n টি ইনপুট চলক থাকলে সারি ২<sup>n</sup>টি: দুই চলকে ৪, তিন চলকে ৮, চার চলকে ১৬। ইনপুটগুলো ০ থেকে বাইনারিতে গুনে গুনে লিখুন। তিন চলকে সবচেয়ে ডানের কলামে ০ ও ১ পালাক্রমে, মাঝেরটিতে দুটি করে, আর বাঁয়েরটিতে চারটি করে বসে। তাহলে কোনো বিন্যাস বাদ পড়ে না, দুবারও আসে না।</p>

        <h3 class="sub"><span>২.২</span>একটি সমীকরণের সত্যক সারণি</h3>
        <p class="prose">উদাহরণ: Y = AB + BC + CA। মাঝের পদগুলোর (AB, BC, CA) কলাম আগে বের করে নিলে ভুল কম হয়; শেষে সেগুলোর যোগফল (OR) থেকে Y।</p>
        <table class="truth"><thead><tr><th>A</th><th>B</th><th>C</th><th>AB</th><th>BC</th><th>CA</th><th>Y</th></tr></thead><tbody>
          <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td></tr>
          <tr><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
          <tr><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr>
          <tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
        </tbody></table>
        <p class="prose">তিনটির মধ্যে অন্তত দুটি ইনপুট ১ হলেই Y = ১; একে সংখ্যাগরিষ্ঠ (majority) ফাংশন বলে। এই রাশিটিই ১৮তম পরীক্ষার ১০ নম্বর প্রশ্নের সরল রূপ (অংশ ৬)।</p>

        <h3 class="sub"><span>২.৩</span>সত্যক সারণি দিয়ে প্রমাণ</h3>
        <p class="prose">সমতার দুই পাশের রাশির জন্য আলাদা কলাম বানান। প্রতিটি সারিতে কলাম দুটি মিলে গেলে সমতাটি প্রমাণিত; একটি সারিতেও না মিললে সমতাটি ভুল। এভাবেই ডি মরগানের সূত্র প্রমাণ করা হয় (অংশ ৫)।</p>

        <div data-prev="truth"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="16-18,20,27,28,34,36,45,86,91,114-119" data-name="সত্যক সারণি">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch04/q36">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>নম্বর পেতে</b>“সত্যক সারণি কী? উদাহরণসহ” প্রশ্নে সংজ্ঞা, ২<sup>n</sup> সারির নিয়ম আর একটি গেটের পূর্ণ সারণি দিন। প্রমাণের প্রশ্নে শেষে লিখুন: “সব সারিতে কলাম দুটি সমান, তাই প্রমাণিত।”</p>
        <p><b>বারবার এসেছে</b>৮টি পরীক্ষায় সত্যক সারণি আলাদা করে চাওয়া হয়েছে।</p>
      </aside>
    </section>

    <section class="blk" id="nor" data-topic="nor" data-short="NOR ও যৌগিক গেট">
      <p class="blk-no">অংশ ৩<small>সিলেবাস ঘ · NOR</small></p>
      <div class="body">
        <h2>NOR ও অন্যান্য যৌগিক গেট</h2>
        <p class="defn"><b>যৌগিক গেট</b>একাধিক মৌলিক গেট জুড়ে যে গেট তৈরি হয়, তাকে যৌগিক গেট বলে। যেমন: NOR, NAND, XOR ও XNOR।</p>

        <h3 class="sub"><span>৩.১</span>NOR গেট</h3>
        <p class="prose">OR গেটের আউটপুটকে NOT দিয়ে উল্টালে NOR (NOT-OR) গেট হয়: <span class="m">Y = <span class="ov">A + B</span></span>। এটি OR-এর ঠিক উল্টো: সব ইনপুট ০ হলে তবেই আউটপুট ১, একটিও ১ হলে ০। প্রতীক: OR-এর মুখে একটি বাবল।</p>
        <div class="gates">
          <figure class="fig gate-sym"><svg viewBox="0 0 150 64" role="img" aria-label="NOR গেটের প্রতীক"><text x="0" y="24" text-anchor="start">A</text><path class="w" d="M12 20 L45 20"/><text x="0" y="44" text-anchor="start">B</text><path class="w" d="M12 40 L45 40"/><path class="gb" d="M40 10Q54 30 40 50Q66 50 78 30Q66 10 40 10Z"/><circle class="gb" cx="82" cy="30" r="4"/><path class="w" d="M86 30 L118 30"/><text x="122" y="34" text-anchor="start">Y</text></svg><figcaption>NOR: Y = <span class="ov">A + B</span></figcaption></figure>
          <table class="truth"><thead><tr><th>A</th><th>B</th><th>A+B</th><th>Y</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td><td>0</td></tr></tbody></table>
        </div>
        <p class="prose"><b>মৌলিক গেট দিয়ে NOR:</b> একটি OR গেট, তার আউটপুট একটি NOT গেটে।</p>
        <figure class="fig gate-sym duo"><svg viewBox="0 0 260 64" role="img" aria-label="মৌলিক গেট দিয়ে NOR: A ও B একটি OR গেটে গিয়ে A যোগ B হয়, তারপর একটি NOT গেটে গিয়ে Y দেয়।"><text x="0" y="24" text-anchor="start">A</text><path class="w" d="M12 20 L45 20"/><text x="0" y="44" text-anchor="start">B</text><path class="w" d="M12 40 L45 40"/><path class="gb" d="M40 10Q54 30 40 50Q66 50 78 30Q66 10 40 10Z"/><path class="w" d="M78 30 L112 30"/><text x="82" y="22" text-anchor="start">A+B</text><path class="gb" d="M112 16L140 30L112 44Z"/><circle class="gb" cx="144" cy="30" r="4"/><path class="w" d="M148 30 L176 30"/><text x="182" y="34" text-anchor="start">Y = <tspan text-decoration="overline">A+B</tspan></text></svg><figcaption>OR-এর পরে NOT = NOR</figcaption></figure>

        <h3 class="sub"><span>৩.২</span>NAND গেট</h3>
        <p class="prose">AND-এর পরে NOT: <span class="m">Y = <span class="ov">A·B</span></span>। সব ইনপুট ১ হলে তবেই আউটপুট ০; বাকি সব ক্ষেত্রে ১। প্রতীক: AND-এর মুখে একটি বাবল।</p>
        <div class="gates">
          <figure class="fig gate-sym"><svg viewBox="0 0 150 64" role="img" aria-label="NAND গেটের প্রতীক"><text x="0" y="24" text-anchor="start">A</text><path class="w" d="M12 20 L40 20"/><text x="0" y="44" text-anchor="start">B</text><path class="w" d="M12 40 L40 40"/><path class="gb" d="M40 10H58A20 20 0 0 1 58 50H40Z"/><circle class="gb" cx="82" cy="30" r="4"/><path class="w" d="M86 30 L118 30"/><text x="122" y="34" text-anchor="start">Y</text></svg><figcaption>NAND: Y = <span class="ov">A·B</span></figcaption></figure>
          <table class="truth"><thead><tr><th>A</th><th>B</th><th>A·B</th><th>Y</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>0</td></tr></tbody></table>
        </div>

        <h3 class="sub"><span>৩.৩</span>XOR ও XNOR গেট</h3>
        <p class="prose">XOR (Exclusive-OR): দুই ইনপুট ভিন্ন হলে আউটপুট ১, একই হলে ০। <span class="m">Y = <span class="ov">A</span>B + A<span class="ov">B</span> = A ⊕ B</span>। তিন বা বেশি ইনপুটে নিয়মটি দাঁড়ায়: ইনপুটে বিজোড় সংখ্যক ১ থাকলে আউটপুট ১; তাই তিন ইনপুটের XOR ১ দেয় শুধু 001, 010, 100 ও 111 সারিতে। প্রতীক: OR-এর পেছনে একটি বাড়তি বাঁকা রেখা।</p>
        <div class="gates">
          <figure class="fig gate-sym"><svg viewBox="0 0 150 64" role="img" aria-label="XOR গেটের প্রতীক: OR-এর পেছনে একটি বাড়তি বাঁকা রেখা"><text x="0" y="24" text-anchor="start">A</text><path class="w" d="M12 20 L38 20"/><text x="0" y="44" text-anchor="start">B</text><path class="w" d="M12 40 L38 40"/><path class="w" d="M33 10Q47 30 33 50"/><path class="gb" d="M40 10Q54 30 40 50Q66 50 78 30Q66 10 40 10Z"/><path class="w" d="M78 30 L118 30"/><text x="122" y="34" text-anchor="start">Y</text></svg><figcaption>XOR: Y = A ⊕ B</figcaption></figure>
          <table class="truth"><thead><tr><th>A</th><th>B</th><th>Y</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td></tr></tbody></table>
        </div>
        <p class="prose"><b>মৌলিক গেট দিয়ে XOR:</b> সমীকরণের দুটি বার দেওয়া চলকের জন্য দুটি NOT, দুটি গুণফল পদের জন্য দুটি AND, আর যোগের জন্য একটি OR।</p>
        <figure class="fig wide mid">
          <svg viewBox="0 0 540 214" role="img" aria-label="XOR বাস্তবায়ন: A একটি NOT গেটে A-বার হয়ে B-এর সঙ্গে প্রথম AND গেটে যায়; B একটি NOT গেটে B-বার হয়ে A-এর সঙ্গে দ্বিতীয় AND গেটে যায়; দুই AND-এর আউটপুট একটি OR গেটে গিয়ে Y দেয়।">
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
          <figcaption>চিত্র: মৌলিক গেট দিয়ে XOR, Y = <span class="ov">A</span>B + A<span class="ov">B</span></figcaption>
        </figure>
        <p class="prose">XNOR (Exclusive-NOR) হলো XOR-এর উল্টো: <span class="m">Y = <span class="ov">A ⊕ B</span> = <span class="ov">A</span>·<span class="ov">B</span> + AB</span>; ইনপুট দুটি সমান হলে আউটপুট ১। তাই একে সমতা (equality) গেটও বলে। চিহ্নে লেখা হয় A ⊙ B (বৃত্তের ভেতরে বিন্দু)। প্রতীক: XOR-এর মুখে বাবল।</p>

        <h3 class="sub"><span>৩.৪</span>সাতটি গেট এক ছকে</h3>
        <table class="rt cmp eqtab">
          <thead><tr><th>গেট</th><th>সমীকরণ</th><th>আউটপুট ১ কখন</th><th>ধরন</th></tr></thead>
          <tbody>
            <tr><td>AND</td><td class="m">A·B</td><td>সব ইনপুট ১</td><td>মৌলিক</td></tr>
            <tr><td>OR</td><td class="m">A + B</td><td>অন্তত একটি ১</td><td>মৌলিক</td></tr>
            <tr><td>NOT</td><td class="m"><span class="ov">A</span></td><td>ইনপুট ০</td><td>মৌলিক</td></tr>
            <tr><td>NAND</td><td class="m"><span class="ov">A·B</span></td><td>অন্তত একটি ০</td><td>যৌগিক, সার্বজনীন</td></tr>
            <tr><td>NOR</td><td class="m"><span class="ov">A + B</span></td><td>সব ইনপুট ০</td><td>যৌগিক, সার্বজনীন</td></tr>
            <tr><td>XOR</td><td class="m">A ⊕ B</td><td>ইনপুট ভিন্ন (বিজোড় সংখ্যক ১)</td><td>যৌগিক</td></tr>
            <tr><td>XNOR</td><td class="m"><span class="ov">A ⊕ B</span></td><td>ইনপুট সমান</td><td>যৌগিক</td></tr>
          </tbody>
        </table>

        <div data-prev="nor"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="11,21-29,42,44,47,69,80,89,90" data-name="NOR ও যৌগিক গেট">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch04/q21">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>নম্বর পেতে</b>“মৌলিক গেট দিয়ে NOR বাস্তবায়ন” মানে OR-এর পরে NOT বসানো। চিত্রের সঙ্গে সত্যক সারণিতে A + B আর NOR-এর কলাম পাশাপাশি দিন।</p>
        <p><b>মনে রাখুন</b>বাবল মানেই উল্টানো: AND + বাবল = NAND, OR + বাবল = NOR। XOR চেনার উপায় OR-এর পেছনের বাড়তি বাঁকা রেখা।</p>
        <p><b>বারবার এসেছে</b>৯টি পরীক্ষায়। NOR-এর সত্যক সারণি ও মৌলিক গেট দিয়ে বাস্তবায়ন এসেছে ১০ম, ৮ম, ৬ষ্ঠ, ৫ম ও ৪র্থ পরীক্ষায়; XOR এসেছে ১৬তম, ১৩তম, ৯ম, ৮ম ও ৩য়-তে।</p>
      </aside>
    </section>

    <section class="blk" id="univ" data-topic="univ" data-short="সার্বজনীন গেট">
      <p class="blk-no">অংশ ৪<small>সিলেবাস ঘ · NOR</small></p>
      <div class="body">
        <h2>সার্বজনীন গেট</h2>
        <p class="defn"><b>সংজ্ঞা</b>যে গেট দিয়ে তিনটি মৌলিক গেট, AND, OR ও NOT, সবই তৈরি করা যায় (তাই যেকোনো লজিক বর্তনীও), তাকে সার্বজনীন গেট (Universal Gate) বলে। NAND ও NOR, এই দুটি সার্বজনীন গেট। কারখানায় এক ধরনের গেট বানিয়েই পুরো চিপ তৈরি করা যায়, তাই খরচ ও জটিলতা কমে।</p>

        <h3 class="sub"><span>৪.১</span>কোনটি বানাতে কয়টি গেট লাগে</h3>
        <table class="rt cmp">
          <thead><tr><th>যা বানাতে চাই</th><th>NAND লাগে</th><th>NOR লাগে</th></tr></thead>
          <tbody>
            <tr><td>NOT</td><td>১</td><td>১</td></tr>
            <tr><td>AND</td><td>২</td><td>৩</td></tr>
            <tr><td>OR</td><td>৩</td><td>২</td></tr>
            <tr><td>XOR</td><td>৪</td><td>৫</td></tr>
            <tr><td>XNOR</td><td>৫</td><td>৪</td></tr>
          </tbody>
        </table>
        <p class="tip"><b>মনে রাখার কৌশল:</b> গেটগুলো এই ক্রমে লিখুন: NOT, AND, OR, XOR, XNOR (আদ্যক্ষর N, A, O, X, X)। NAND-এর কলামে ওপর থেকে সোজা ১, ২, ৩, ৪, ৫। NOR-এর কলামে ১ একই থাকে, বাকিগুলো জোড়ায় জোড়ায় অদলবদল: AND ও OR-এ ৩ আর ২, XOR ও XNOR-এ ৫ আর ৪।</p>
        <p class="prose">কয়টি গেট লাগে জানলে সাজানোর ধরনও জানা। নিচে প্রতিটি বৃত্ত একটি NAND (বা NOR) গেট:</p>
        <figure class="fig wide tight">
          <svg viewBox="0 0 340 300" role="img" aria-label="গেট সাজানোর চার ধরন। ২টি: এক সারিতে, প্রথমটির ফল দ্বিতীয়টিতে। ৩টি: সামনে দুটি, একটিতে A ও একটিতে B, পেছনে একটি দুটির ফল জোড়ে। ৪টি: হীরার মতো, সামনে একটি A ও B নেয়, মাঝে ওপরে একটি A ও প্রথমটির ফল, নিচে একটি B ও প্রথমটির ফল, পেছনে একটি মাঝের দুটির ফল জোড়ে। ৫টি: সেই হীরা, তার পরে আরও একটি।">
            <g>
              <text class="cap" x="6" y="16" text-anchor="start">২টি: এক সারিতে</text>
              <text x="4" y="52" text-anchor="start">A</text><text x="4" y="96" text-anchor="start">B</text>
              <path class="w" d="M18 48H44L70 70M18 92H44L70 70M70 70H120M120 70H148"/>
              <circle class="gb" cx="70" cy="70" r="9"/><circle class="gb" cx="120" cy="70" r="9"/>
              <text x="151" y="74" text-anchor="start">Y</text>
              <text x="4" y="132" text-anchor="start">NAND→AND</text><text x="96" y="132" text-anchor="start">NOR→OR</text>
            </g>
            <g transform="translate(170 0)">
              <text class="cap" x="6" y="16" text-anchor="start">৩টি: সামনে দুই, পেছনে এক</text>
              <text x="4" y="52" text-anchor="start">A</text><text x="4" y="96" text-anchor="start">B</text>
              <path class="w" d="M18 48H60M18 92H60M60 48H86L115 70M60 92H86L115 70M115 70H148"/>
              <circle class="gb" cx="60" cy="48" r="9"/><circle class="gb" cx="60" cy="92" r="9"/><circle class="gb" cx="115" cy="70" r="9"/>
              <text x="151" y="74" text-anchor="start">Y</text>
              <text x="4" y="132" text-anchor="start">NAND→OR</text><text x="96" y="132" text-anchor="start">NOR→AND</text>
            </g>
            <g transform="translate(0 160)">
              <text class="cap" x="6" y="16" text-anchor="start">৪টি: হীরার মতো</text>
              <text x="4" y="42" text-anchor="start">A</text><text x="4" y="110" text-anchor="start">B</text>
              <path class="w" d="M18 38H32L95 42M32 38L55 72M18 106H32L95 102M32 106L55 72M55 72L95 42M55 72L95 102M95 42L135 72M95 102L135 72M135 72H150"/>
              <circle class="j" cx="32" cy="38" r="2.6"/><circle class="j" cx="32" cy="106" r="2.6"/>
              <circle class="gb" cx="55" cy="72" r="9"/><circle class="gb" cx="95" cy="42" r="9"/><circle class="gb" cx="95" cy="102" r="9"/><circle class="gb" cx="135" cy="72" r="9"/>
              <text x="153" y="76" text-anchor="start">Y</text>
              <text x="4" y="134" text-anchor="start">NAND→XOR</text><text x="88" y="134" text-anchor="start">NOR→XNOR</text>
            </g>
            <g transform="translate(170 160)">
              <text class="cap" x="6" y="16" text-anchor="start">৫টি: হীরা, তারপর আরও এক</text>
              <text x="4" y="42" text-anchor="start">A</text><text x="4" y="110" text-anchor="start">B</text>
              <path class="w" d="M18 38H30L76 44M30 38L44 72M18 106H30L76 100M30 106L44 72M44 72L76 44M44 72L76 100M76 44L108 72M76 100L108 72M108 72H138M138 72H150"/>
              <circle class="j" cx="30" cy="38" r="2.6"/><circle class="j" cx="30" cy="106" r="2.6"/>
              <circle class="gb" cx="44" cy="72" r="9"/><circle class="gb" cx="76" cy="44" r="9"/><circle class="gb" cx="76" cy="100" r="9"/><circle class="gb" cx="108" cy="72" r="9"/><circle class="gb" cx="138" cy="72" r="9"/>
              <text x="153" y="76" text-anchor="start">Y</text>
              <text x="4" y="134" text-anchor="start">NAND→XNOR</text><text x="96" y="134" text-anchor="start">NOR→XOR</text>
            </g>
          </svg>
          <figcaption>চিত্র: গেটের সংখ্যা অনুযায়ী সাজানোর চার ধরন (প্রতিটি বৃত্ত একটি NAND বা NOR)</figcaption>
        </figure>
        <ul class="pts">
          <li><b>২টি, এক সারিতে:</b> প্রথম গেটটি কাজ করে, দ্বিতীয়টি (দুই ইনপুট জোড়া দিয়ে) ফল উল্টে দেয়। NAND দিয়ে AND, NOR দিয়ে OR।</li>
          <li><b>৩টি, সামনে দুই পেছনে এক:</b> সামনের দুটি গেট A ও B-কে আলাদা করে উল্টায়, পেছনেরটি দুটিকে জোড়ে। NAND দিয়ে OR, NOR দিয়ে AND।</li>
          <li><b>৪টি, হীরার মতো:</b> সামনের গেট নেয় A ও B; মাঝের ওপরের গেট নেয় A আর প্রথমটির ফল, নিচেরটি নেয় B আর প্রথমটির ফল; পেছনের গেট মাঝের দুটির ফল জোড়ে। NAND দিয়ে XOR, NOR দিয়ে XNOR।</li>
          <li><b>৫টি, হীরা আর এক:</b> ৪টির হীরা, তার পরে আরেকটি গেট (দুই ইনপুট জোড়া) ফল উল্টে দেয়। NAND দিয়ে XNOR, NOR দিয়ে XOR।</li>
        </ul>
        <p class="prose">ছকে নেই, তবে জেনে রাখুন: NAND দিয়ে NOR, বা NOR দিয়ে NAND বানাতেও ৪টি গেট লাগে, কিন্তু হীরার মতো নয়। ৩টির নকশা (সামনে দুই, পেছনে এক), তার পরে আরেকটি গেট ফল উল্টায়। শুধু NAND ও শুধু NOR দিয়ে পাঁচটি করে গেট, প্রতিটির পূর্ণ রাশি ও ধাপসহ, আছে নিচের ৪.২ ও ৪.৩-এ।</p>

        <h3 class="sub"><span>৪.২</span>শুধু NAND দিয়ে পাঁচটি গেট</h3>
        <p class="prose">ছকের ক্রমে NOT, AND, OR, XOR ও XNOR; গেট লাগে ১, ২, ৩, ৪ ও ৫টি। প্রতিটি চিত্রে গেটের আউটপুটে তার পূর্ণ রাশি, তারপর ধাপে ধাপে সরল রূপ। “NAND-এর সার্বজনীনতা প্রমাণ করুন” প্রশ্নে প্রথম তিনটি (ক, খ, গ) আঁকলেই চলে।</p>
        <h4 class="sub-h"><span>ক</span>NOT: ১টি NAND</h4>
        <p class="prose">দুই ইনপুট জুড়ে দিলে NAND শুধু উল্টানোর কাজ করে।</p>
        <figure class="fig eqfig">
          <svg viewBox="0 0 240 80" width="276" role="img" aria-label="একটি NAND গেটের দুই ইনপুটেই A; আউটপুট Y।">
            <text x="4" y="44" text-anchor="start">A</text>
            <path class="w" d="M16 40H40M40 40V30H61M40 40V50H61"/>
            <circle class="j" cx="40" cy="40" r="2.6"/>
            <path class="gb" d="M60 20H78A20 20 0 0 1 78 60H60Z"/><circle class="gb" cx="102" cy="40" r="4"/>
            <path class="w" d="M106 40H140"/>
            <foreignObject x="146" y="30" width="90" height="22" overflow="visible"><div class="flab">Y = <span class="ov">A·A</span></div></foreignObject>
          </svg>
        </figure>
        <ul class="eqs">
          <li><span>Y = <span class="ov">A·A</span></span><small>গেটের আউটপুট</small></li>
          <li><span>= <span class="ov">A</span></span><small>A·A = A</small></li>
        </ul>
        <p class="final"><b>ফল</b>Y = <span class="ov">A</span> (NOT)</p>
        <h4 class="sub-h"><span>খ</span>AND: ২টি NAND</h4>
        <p class="prose">প্রথম NAND-এর ফল দ্বিতীয়টি (দুই ইনপুট জোড়া) উল্টে দেয়: এক সারিতে দুটি।</p>
        <figure class="fig eqfig">
          <svg viewBox="0 0 305 80" width="351" role="img" aria-label="দুটি NAND এক সারিতে: প্রথমটিতে A ও B; তার ফল দ্বিতীয়টির দুই ইনপুটে; আউটপুট Y।">
            <text x="4" y="34" text-anchor="start">A</text>
            <text x="4" y="54" text-anchor="start">B</text>
            <path class="w" d="M16 30H41M16 50H41"/>
            <path class="gb" d="M40 20H58A20 20 0 0 1 58 60H40Z"/><circle class="gb" cx="82" cy="40" r="4"/>
            <path class="w" d="M86 40H100M100 40V30H121M100 40V50H121"/>
            <circle class="j" cx="100" cy="40" r="2.6"/>
            <path class="gb" d="M120 20H138A20 20 0 0 1 138 60H120Z"/><circle class="gb" cx="162" cy="40" r="4"/>
            <path class="w" d="M166 40H190"/>
            <foreignObject x="84" y="3" width="50" height="22" overflow="visible"><div class="flab"><span class="ov">A·B</span></div></foreignObject>
            <foreignObject x="196" y="27" width="107" height="30" overflow="visible"><div class="flab">Y = <span class="ov"><span class="ov">A·B</span> · <span class="ov">A·B</span></span></div></foreignObject>
          </svg>
        </figure>
        <ul class="eqs">
          <li><span>Y = <span class="ov"><span class="ov">A·B</span> · <span class="ov">A·B</span></span></span><small>দ্বিতীয় গেটের আউটপুট</small></li>
          <li><span>= <span class="ov"><span class="ov">A·B</span></span></span><small>X·X = X</small></li>
          <li><span>= A·B</span><small>দ্বৈত পূরক: <span class="ov"><span class="ov">X</span></span> = X</small></li>
        </ul>
        <p class="final"><b>ফল</b>Y = A·B (AND)</p>
        <h4 class="sub-h"><span>গ</span>OR: ৩টি NAND</h4>
        <p class="prose">সামনের দুটি NAND A ও B-কে আলাদা করে উল্টায়, পেছনেরটি দুটিকে জোড়ে: সামনে দুই, পেছনে এক।</p>
        <figure class="fig eqfig">
          <svg viewBox="0 0 335 152" width="385" role="img" aria-label="তিনটি NAND: সামনের একটির দুই ইনপুটে A, অন্যটির দুই ইনপুটে B; দুটির ফল পেছনের গেটে; আউটপুট Y।">
            <text x="4" y="44" text-anchor="start">A</text>
            <path class="w" d="M16 40H30M30 40V30H49M30 40V50H49"/>
            <circle class="j" cx="30" cy="40" r="2.6"/>
            <text x="4" y="124" text-anchor="start">B</text>
            <path class="w" d="M16 120H30M30 120V110H49M30 120V130H49"/>
            <circle class="j" cx="30" cy="120" r="2.6"/>
            <path class="gb" d="M48 20H66A20 20 0 0 1 66 60H48Z"/><circle class="gb" cx="90" cy="40" r="4"/>
            <path class="gb" d="M48 100H66A20 20 0 0 1 66 140H48Z"/><circle class="gb" cx="90" cy="120" r="4"/>
            <path class="w" d="M94 40H120V70H151M94 120H120V90H151"/>
            <path class="gb" d="M150 60H168A20 20 0 0 1 168 100H150Z"/><circle class="gb" cx="192" cy="80" r="4"/>
            <path class="w" d="M196 80H220"/>
            <foreignObject x="98" y="13" width="60" height="22" overflow="visible"><div class="flab"><span class="ov">A·A</span></div></foreignObject>
            <foreignObject x="98" y="126" width="60" height="22" overflow="visible"><div class="flab"><span class="ov">B·B</span></div></foreignObject>
            <foreignObject x="226" y="66" width="107" height="30" overflow="visible"><div class="flab">Y = <span class="ov"><span class="ov">A·A</span> · <span class="ov">B·B</span></span></div></foreignObject>
          </svg>
        </figure>
        <ul class="eqs">
          <li><span>Y = <span class="ov"><span class="ov">A·A</span> · <span class="ov">B·B</span></span></span><small>তৃতীয় গেটের আউটপুট</small></li>
          <li><span>= <span class="ov"><span class="ov">A</span>·<span class="ov">B</span></span></span><small>A·A = A</small></li>
          <li><span>= <span class="ov"><span class="ov">A</span></span> + <span class="ov"><span class="ov">B</span></span></span><small>ডি মরগান: <span class="ov">X·Z</span> = <span class="ov">X</span> + <span class="ov">Z</span></small></li>
          <li><span>= A + B</span><small>দ্বৈত পূরক: <span class="ov"><span class="ov">X</span></span> = X</small></li>
        </ul>
        <p class="final"><b>ফল</b>Y = A + B (OR)</p>
        <h4 class="sub-h"><span>ঘ</span>XOR: ৪টি NAND</h4>
        <p class="prose">হীরার নকশা: প্রথম গেট নেয় A ও B; ওপরের গেট নেয় A আর প্রথমটির ফল; নিচেরটি নেয় B আর প্রথমটির ফল; চতুর্থটি দুটির ফল জোড়ে।</p>
        <figure class="fig eqfig">
          <svg viewBox="0 0 355 232" width="408" role="img" aria-label="চারটি NAND দিয়ে XOR: প্রথম গেটে A ও B; ওপরের গেটে A ও প্রথমটির ফল; নিচের গেটে B ও প্রথমটির ফল; চতুর্থ গেটে ওপর ও নিচের ফল, যা Y।">
            <text x="4" y="72" text-anchor="start">A</text>
            <text x="4" y="186" text-anchor="start">B</text>
            <path class="w" d="M16 68H141M30 68V115H57M16 182H141M30 182V135H57"/>
            <path class="w" d="M102 125H114M114 125V88H141M114 125V162H141"/>
            <path class="w" d="M186 78H204V115H221M186 172H204V135H221"/>
            <path class="w" d="M266 125H300"/>
            <circle class="j" cx="30" cy="68" r="2.6"/>
            <circle class="j" cx="30" cy="182" r="2.6"/>
            <circle class="j" cx="114" cy="125" r="2.6"/>
            <path class="gb" d="M56 105H74A20 20 0 0 1 74 145H56Z"/><circle class="gb" cx="98" cy="125" r="4"/>
            <path class="gb" d="M140 58H158A20 20 0 0 1 158 98H140Z"/><circle class="gb" cx="182" cy="78" r="4"/>
            <path class="gb" d="M140 152H158A20 20 0 0 1 158 192H140Z"/><circle class="gb" cx="182" cy="172" r="4"/>
            <path class="gb" d="M220 105H238A20 20 0 0 1 238 145H220Z"/><circle class="gb" cx="262" cy="125" r="4"/>
            <foreignObject x="117" y="102" width="44" height="22" overflow="visible"><div class="flab"><span class="ov">A·B</span></div></foreignObject>
            <foreignObject x="150" y="24" width="110" height="30" overflow="visible"><div class="flab"><span class="ov">A·<span class="ov">A·B</span></span></div></foreignObject>
            <foreignObject x="150" y="196" width="110" height="30" overflow="visible"><div class="flab"><span class="ov">B·<span class="ov">A·B</span></span></div></foreignObject>
            <foreignObject x="272" y="102" width="30" height="22" overflow="visible"><div class="flab">Y</div></foreignObject>
            <foreignObject x="214" y="150" width="139" height="36" overflow="visible"><div class="flab">Y = <span class="ov"><span class="ov">A·<span class="ov">A·B</span></span> · <span class="ov">B·<span class="ov">A·B</span></span></span></div></foreignObject>
          </svg>
        </figure>
        <ul class="eqs">
          <li><span>Y = <span class="ov"><span class="ov">A·<span class="ov">A·B</span></span> · <span class="ov">B·<span class="ov">A·B</span></span></span></span><small>চতুর্থ গেটের আউটপুট</small></li>
          <li><span>= <span class="ov"><span class="ov">A·<span class="ov">A·B</span></span></span> + <span class="ov"><span class="ov">B·<span class="ov">A·B</span></span></span></span><small>ডি মরগান: <span class="ov">X·Z</span> = <span class="ov">X</span> + <span class="ov">Z</span></small></li>
          <li><span>= A·<span class="ov">A·B</span> + B·<span class="ov">A·B</span></span><small>দ্বৈত পূরক: <span class="ov"><span class="ov">X</span></span> = X</small></li>
          <li><span>= A(<span class="ov">A</span> + <span class="ov">B</span>) + B(<span class="ov">A</span> + <span class="ov">B</span>)</span><small>ডি মরগান: <span class="ov">A·B</span> = <span class="ov">A</span> + <span class="ov">B</span></small></li>
          <li><span>= A<span class="ov">A</span> + A<span class="ov">B</span> + <span class="ov">A</span>B + B<span class="ov">B</span></span><small>গুণ ছড়িয়ে</small></li>
          <li><span>= A<span class="ov">B</span> + <span class="ov">A</span>B</span><small>X·<span class="ov">X</span> = 0</small></li>
        </ul>
        <p class="final"><b>ফল</b>Y = <span class="ov">A</span>B + A<span class="ov">B</span> = A ⊕ B (XOR)</p>
        <p class="prose">পরীক্ষার উত্তরের রূপে, প্রতীকসহ পুরো চিত্র আছে <a href="#/written/13-school/q4">১৩তম লিখিত প্রশ্ন ৪-এর (অথবা) উত্তরে</a>।</p>
        <h4 class="sub-h"><span>ঙ</span>XNOR: ৫টি NAND</h4>
        <p class="prose">(ঘ)-এর হীরার আউটপুটকে এখানে P বলা হলো (P = A ⊕ B); পঞ্চম গেট (দুই ইনপুট জোড়া) সেটি উল্টে দেয়।</p>
        <figure class="fig wide labels">
          <svg viewBox="0 0 440 232" role="img" aria-label="পাঁচটি NAND দিয়ে XNOR: প্রথম গেটে A ও B; ওপরের গেটে A ও প্রথমটির ফল; নিচের গেটে B ও প্রথমটির ফল; চতুর্থ গেটে ওপর ও নিচের ফল, যার নাম P; শেষে দুই ইনপুট জোড়া পঞ্চম গেট P-কে উল্টে Y দেয়।">
            <text x="4" y="72" text-anchor="start">A</text>
            <text x="4" y="186" text-anchor="start">B</text>
            <path class="w" d="M16 68H141M30 68V115H57M16 182H141M30 182V135H57"/>
            <path class="w" d="M102 125H114M114 125V88H141M114 125V162H141"/>
            <path class="w" d="M186 78H204V115H221M186 172H204V135H221"/>
            <path class="w" d="M266 125H306M306 125V115H321M306 125V135H321M366 125H390"/>
            <circle class="j" cx="30" cy="68" r="2.6"/>
            <circle class="j" cx="30" cy="182" r="2.6"/>
            <circle class="j" cx="114" cy="125" r="2.6"/>
            <circle class="j" cx="306" cy="125" r="2.6"/>
            <path class="gb" d="M56 105H74A20 20 0 0 1 74 145H56Z"/><circle class="gb" cx="98" cy="125" r="4"/>
            <path class="gb" d="M140 58H158A20 20 0 0 1 158 98H140Z"/><circle class="gb" cx="182" cy="78" r="4"/>
            <path class="gb" d="M140 152H158A20 20 0 0 1 158 192H140Z"/><circle class="gb" cx="182" cy="172" r="4"/>
            <path class="gb" d="M220 105H238A20 20 0 0 1 238 145H220Z"/><circle class="gb" cx="262" cy="125" r="4"/>
            <path class="gb" d="M320 105H338A20 20 0 0 1 338 145H320Z"/><circle class="gb" cx="362" cy="125" r="4"/>
            <foreignObject x="117" y="102" width="44" height="22" overflow="visible"><div class="flab"><span class="ov">A·B</span></div></foreignObject>
            <foreignObject x="150" y="24" width="110" height="30" overflow="visible"><div class="flab"><span class="ov">A·<span class="ov">A·B</span></span></div></foreignObject>
            <foreignObject x="150" y="196" width="110" height="30" overflow="visible"><div class="flab"><span class="ov">B·<span class="ov">A·B</span></span></div></foreignObject>
            <foreignObject x="272" y="102" width="30" height="22" overflow="visible"><div class="flab">P</div></foreignObject>
            <foreignObject x="214" y="150" width="215" height="36" overflow="visible"><div class="flab">P = <span class="ov"><span class="ov">A·<span class="ov">A·B</span></span> · <span class="ov">B·<span class="ov">A·B</span></span></span></div></foreignObject>
            <foreignObject x="368" y="100" width="70" height="22" overflow="visible"><div class="flab">Y = <span class="ov">P·P</span></div></foreignObject>
          </svg>
        </figure>
        <ul class="eqs">
          <li><span>Y = <span class="ov">P·P</span></span><small>পঞ্চম গেটের আউটপুট</small></li>
          <li><span>= <span class="ov">P</span></span><small>X·X = X</small></li>
          <li><span>= <span class="ov"><span class="ov">A</span>B + A<span class="ov">B</span></span></span><small>(ঘ) থেকে P = <span class="ov">A</span>B + A<span class="ov">B</span></small></li>
          <li><span>= <span class="ov"><span class="ov">A</span>B</span> · <span class="ov">A<span class="ov">B</span></span></span><small>ডি মরগান: <span class="ov">X + Z</span> = <span class="ov">X</span>·<span class="ov">Z</span></small></li>
          <li><span>= (A + <span class="ov">B</span>)(<span class="ov">A</span> + B)</span><small>ডি মরগান, দ্বৈত পূরক</small></li>
          <li><span>= A<span class="ov">A</span> + AB + <span class="ov">A</span>·<span class="ov">B</span> + B<span class="ov">B</span></span><small>গুণ ছড়িয়ে</small></li>
          <li><span>= AB + <span class="ov">A</span>·<span class="ov">B</span></span><small>X·<span class="ov">X</span> = 0</small></li>
        </ul>
        <p class="final"><b>ফল</b>Y = AB + <span class="ov">A</span>·<span class="ov">B</span> = A ⊙ B (XNOR)</p>

        <h3 class="sub"><span>৪.৩</span>শুধু NOR দিয়ে পাঁচটি গেট</h3>
        <p class="prose">NOR-এর ক্রম NOT, OR, AND, XNOR ও XOR; গেট লাগে ১, ২, ৩, ৪ ও ৫টি। “NOR-এর সার্বজনীনতা প্রমাণ করুন” প্রশ্নে প্রথম তিনটি (ক, খ, গ) আঁকলেই চলে।</p>
        <h4 class="sub-h"><span>ক</span>NOT: ১টি NOR</h4>
        <p class="prose">দুই ইনপুট জুড়ে দিলে NOR শুধু উল্টানোর কাজ করে।</p>
        <figure class="fig eqfig">
          <svg viewBox="0 0 240 80" width="276" role="img" aria-label="একটি NOR গেটের দুই ইনপুটেই A; আউটপুট Y।">
            <text x="4" y="44" text-anchor="start">A</text>
            <path class="w" d="M16 40H40M40 40V30H66M40 40V50H66"/>
            <circle class="j" cx="40" cy="40" r="2.6"/>
            <path class="gb" d="M60 20Q74 40 60 60Q86 60 98 40Q86 20 60 20Z"/><circle class="gb" cx="102" cy="40" r="4"/>
            <path class="w" d="M106 40H140"/>
            <foreignObject x="146" y="30" width="90" height="22" overflow="visible"><div class="flab">Y = <span class="ov">A+A</span></div></foreignObject>
          </svg>
        </figure>
        <ul class="eqs">
          <li><span>Y = <span class="ov">A + A</span></span><small>গেটের আউটপুট</small></li>
          <li><span>= <span class="ov">A</span></span><small>A + A = A</small></li>
        </ul>
        <p class="final"><b>ফল</b>Y = <span class="ov">A</span> (NOT)</p>
        <h4 class="sub-h"><span>খ</span>OR: ২টি NOR</h4>
        <p class="prose">প্রথম NOR-এর ফল দ্বিতীয়টি (দুই ইনপুট জোড়া) উল্টে দেয়: এক সারিতে দুটি।</p>
        <figure class="fig eqfig">
          <svg viewBox="0 0 305 80" width="351" role="img" aria-label="দুটি NOR এক সারিতে: প্রথমটিতে A ও B; তার ফল দ্বিতীয়টির দুই ইনপুটে; আউটপুট Y।">
            <text x="4" y="34" text-anchor="start">A</text>
            <text x="4" y="54" text-anchor="start">B</text>
            <path class="w" d="M16 30H46M16 50H46"/>
            <path class="gb" d="M40 20Q54 40 40 60Q66 60 78 40Q66 20 40 20Z"/><circle class="gb" cx="82" cy="40" r="4"/>
            <path class="w" d="M86 40H100M100 40V30H126M100 40V50H126"/>
            <circle class="j" cx="100" cy="40" r="2.6"/>
            <path class="gb" d="M120 20Q134 40 120 60Q146 60 158 40Q146 20 120 20Z"/><circle class="gb" cx="162" cy="40" r="4"/>
            <path class="w" d="M166 40H190"/>
            <foreignObject x="84" y="3" width="50" height="22" overflow="visible"><div class="flab"><span class="ov">A+B</span></div></foreignObject>
            <foreignObject x="196" y="27" width="107" height="30" overflow="visible"><div class="flab">Y = <span class="ov"><span class="ov">A+B</span> + <span class="ov">A+B</span></span></div></foreignObject>
          </svg>
        </figure>
        <ul class="eqs">
          <li><span>Y = <span class="ov"><span class="ov">A + B</span> + <span class="ov">A + B</span></span></span><small>দ্বিতীয় গেটের আউটপুট</small></li>
          <li><span>= <span class="ov"><span class="ov">A + B</span></span></span><small>X + X = X</small></li>
          <li><span>= A + B</span><small>দ্বৈত পূরক: <span class="ov"><span class="ov">X</span></span> = X</small></li>
        </ul>
        <p class="final"><b>ফল</b>Y = A + B (OR)</p>
        <h4 class="sub-h"><span>গ</span>AND: ৩টি NOR</h4>
        <p class="prose">সামনের দুটি NOR A ও B-কে আলাদা করে উল্টায়, পেছনেরটি দুটিকে জোড়ে: সামনে দুই, পেছনে এক।</p>
        <figure class="fig eqfig">
          <svg viewBox="0 0 335 152" width="385" role="img" aria-label="তিনটি NOR: সামনের একটির দুই ইনপুটে A, অন্যটির দুই ইনপুটে B; দুটির ফল পেছনের গেটে; আউটপুট Y।">
            <text x="4" y="44" text-anchor="start">A</text>
            <path class="w" d="M16 40H30M30 40V30H54M30 40V50H54"/>
            <circle class="j" cx="30" cy="40" r="2.6"/>
            <text x="4" y="124" text-anchor="start">B</text>
            <path class="w" d="M16 120H30M30 120V110H54M30 120V130H54"/>
            <circle class="j" cx="30" cy="120" r="2.6"/>
            <path class="gb" d="M48 20Q62 40 48 60Q74 60 86 40Q74 20 48 20Z"/><circle class="gb" cx="90" cy="40" r="4"/>
            <path class="gb" d="M48 100Q62 120 48 140Q74 140 86 120Q74 100 48 100Z"/><circle class="gb" cx="90" cy="120" r="4"/>
            <path class="w" d="M94 40H120V70H156M94 120H120V90H156"/>
            <path class="gb" d="M150 60Q164 80 150 100Q176 100 188 80Q176 60 150 60Z"/><circle class="gb" cx="192" cy="80" r="4"/>
            <path class="w" d="M196 80H220"/>
            <foreignObject x="98" y="13" width="60" height="22" overflow="visible"><div class="flab"><span class="ov">A+A</span></div></foreignObject>
            <foreignObject x="98" y="126" width="60" height="22" overflow="visible"><div class="flab"><span class="ov">B+B</span></div></foreignObject>
            <foreignObject x="226" y="66" width="107" height="30" overflow="visible"><div class="flab">Y = <span class="ov"><span class="ov">A+A</span> + <span class="ov">B+B</span></span></div></foreignObject>
          </svg>
        </figure>
        <ul class="eqs">
          <li><span>Y = <span class="ov"><span class="ov">A + A</span> + <span class="ov">B + B</span></span></span><small>তৃতীয় গেটের আউটপুট</small></li>
          <li><span>= <span class="ov"><span class="ov">A</span> + <span class="ov">B</span></span></span><small>A + A = A</small></li>
          <li><span>= <span class="ov"><span class="ov">A</span></span>·<span class="ov"><span class="ov">B</span></span></span><small>ডি মরগান: <span class="ov">X + Z</span> = <span class="ov">X</span>·<span class="ov">Z</span></small></li>
          <li><span>= A·B</span><small>দ্বৈত পূরক: <span class="ov"><span class="ov">X</span></span> = X</small></li>
        </ul>
        <p class="final"><b>ফল</b>Y = A·B (AND)</p>
        <h4 class="sub-h"><span>ঘ</span>XNOR: ৪টি NOR</h4>
        <p class="prose">হীরার নকশা: প্রথম গেট নেয় A ও B; ওপরের গেট নেয় A আর প্রথমটির ফল; নিচেরটি নেয় B আর প্রথমটির ফল; চতুর্থটি দুটির ফল জোড়ে।</p>
        <figure class="fig eqfig">
          <svg viewBox="0 0 355 232" width="408" role="img" aria-label="চারটি NOR দিয়ে XNOR: প্রথম গেটে A ও B; ওপরের গেটে A ও প্রথমটির ফল; নিচের গেটে B ও প্রথমটির ফল; চতুর্থ গেটে ওপর ও নিচের ফল, যা Y।">
            <text x="4" y="72" text-anchor="start">A</text>
            <text x="4" y="186" text-anchor="start">B</text>
            <path class="w" d="M16 68H146M30 68V115H62M16 182H146M30 182V135H62"/>
            <path class="w" d="M102 125H114M114 125V88H146M114 125V162H146"/>
            <path class="w" d="M186 78H204V115H226M186 172H204V135H226"/>
            <path class="w" d="M266 125H300"/>
            <circle class="j" cx="30" cy="68" r="2.6"/>
            <circle class="j" cx="30" cy="182" r="2.6"/>
            <circle class="j" cx="114" cy="125" r="2.6"/>
            <path class="gb" d="M56 105Q70 125 56 145Q82 145 94 125Q82 105 56 105Z"/><circle class="gb" cx="98" cy="125" r="4"/>
            <path class="gb" d="M140 58Q154 78 140 98Q166 98 178 78Q166 58 140 58Z"/><circle class="gb" cx="182" cy="78" r="4"/>
            <path class="gb" d="M140 152Q154 172 140 192Q166 192 178 172Q166 152 140 152Z"/><circle class="gb" cx="182" cy="172" r="4"/>
            <path class="gb" d="M220 105Q234 125 220 145Q246 145 258 125Q246 105 220 105Z"/><circle class="gb" cx="262" cy="125" r="4"/>
            <foreignObject x="117" y="102" width="44" height="22" overflow="visible"><div class="flab"><span class="ov">A+B</span></div></foreignObject>
            <foreignObject x="150" y="24" width="110" height="30" overflow="visible"><div class="flab"><span class="ov">A+<span class="ov">A+B</span></span></div></foreignObject>
            <foreignObject x="150" y="196" width="110" height="30" overflow="visible"><div class="flab"><span class="ov">B+<span class="ov">A+B</span></span></div></foreignObject>
            <foreignObject x="272" y="102" width="30" height="22" overflow="visible"><div class="flab">Y</div></foreignObject>
            <foreignObject x="214" y="150" width="139" height="36" overflow="visible"><div class="flab">Y = <span class="ov"><span class="ov">A+<span class="ov">A+B</span></span> + <span class="ov">B+<span class="ov">A+B</span></span></span></div></foreignObject>
          </svg>
        </figure>
        <ul class="eqs">
          <li><span>Y = <span class="ov"><span class="ov">A + <span class="ov">A + B</span></span> + <span class="ov">B + <span class="ov">A + B</span></span></span></span><small>চতুর্থ গেটের আউটপুট</small></li>
          <li><span>= <span class="ov"><span class="ov">A + <span class="ov">A + B</span></span></span> · <span class="ov"><span class="ov">B + <span class="ov">A + B</span></span></span></span><small>ডি মরগান: <span class="ov">X + Z</span> = <span class="ov">X</span>·<span class="ov">Z</span></small></li>
          <li><span>= (A + <span class="ov">A + B</span>) · (B + <span class="ov">A + B</span>)</span><small>দ্বৈত পূরক: <span class="ov"><span class="ov">X</span></span> = X</small></li>
          <li><span>= (A + <span class="ov">A</span>·<span class="ov">B</span>) · (B + <span class="ov">A</span>·<span class="ov">B</span>)</span><small>ডি মরগান: <span class="ov">A + B</span> = <span class="ov">A</span>·<span class="ov">B</span></small></li>
          <li><span>= (A + <span class="ov">A</span>)(A + <span class="ov">B</span>) · (B + <span class="ov">A</span>)(B + <span class="ov">B</span>)</span><small>বিভাজন: X + YZ = (X + Y)(X + Z)</small></li>
          <li><span>= (A + <span class="ov">B</span>)(B + <span class="ov">A</span>)</span><small>A + <span class="ov">A</span> = 1, B + <span class="ov">B</span> = 1</small></li>
          <li><span>= AB + A<span class="ov">A</span> + <span class="ov">B</span>B + <span class="ov">B</span>·<span class="ov">A</span></span><small>গুণ ছড়িয়ে</small></li>
          <li><span>= AB + <span class="ov">A</span>·<span class="ov">B</span></span><small>X·<span class="ov">X</span> = 0</small></li>
        </ul>
        <p class="final"><b>ফল</b>Y = AB + <span class="ov">A</span>·<span class="ov">B</span> = A ⊙ B (XNOR)</p>
        <p class="prose">যাচাই: A = B = 0 হলে Y = 0 + 1·1 = 1; A = 1, B = 0 হলে Y = 0 + 0·1 = 0। ইনপুট সমান হলে ১, ভিন্ন হলে ০, তাই XNOR।</p>
        <p class="tip"><b>সংক্ষেপে:</b> মাঝের দুই গেট আগে আলাদা করে সরল করলে পাওয়া যায় <span class="ov">A</span>B ও A<span class="ov">B</span>; তখন Y = <span class="ov"><span class="ov">A</span>B + A<span class="ov">B</span></span> = A ⊙ B, তিন লাইনেই।</p>
        <h4 class="sub-h"><span>ঙ</span>XOR: ৫টি NOR</h4>
        <p class="prose">(ঘ)-এর হীরার আউটপুটকে এখানে P বলা হলো (P = A ⊙ B); পঞ্চম গেট (দুই ইনপুট জোড়া) সেটি উল্টে দেয়।</p>
        <figure class="fig wide labels">
          <svg viewBox="0 0 440 232" role="img" aria-label="পাঁচটি NOR দিয়ে XOR: প্রথম গেটে A ও B; ওপরের গেটে A ও প্রথমটির ফল; নিচের গেটে B ও প্রথমটির ফল; চতুর্থ গেটে ওপর ও নিচের ফল, যার নাম P; শেষে দুই ইনপুট জোড়া পঞ্চম গেট P-কে উল্টে Y দেয়।">
            <text x="4" y="72" text-anchor="start">A</text>
            <text x="4" y="186" text-anchor="start">B</text>
            <path class="w" d="M16 68H146M30 68V115H62M16 182H146M30 182V135H62"/>
            <path class="w" d="M102 125H114M114 125V88H146M114 125V162H146"/>
            <path class="w" d="M186 78H204V115H226M186 172H204V135H226"/>
            <path class="w" d="M266 125H306M306 125V115H326M306 125V135H326M366 125H390"/>
            <circle class="j" cx="30" cy="68" r="2.6"/>
            <circle class="j" cx="30" cy="182" r="2.6"/>
            <circle class="j" cx="114" cy="125" r="2.6"/>
            <circle class="j" cx="306" cy="125" r="2.6"/>
            <path class="gb" d="M56 105Q70 125 56 145Q82 145 94 125Q82 105 56 105Z"/><circle class="gb" cx="98" cy="125" r="4"/>
            <path class="gb" d="M140 58Q154 78 140 98Q166 98 178 78Q166 58 140 58Z"/><circle class="gb" cx="182" cy="78" r="4"/>
            <path class="gb" d="M140 152Q154 172 140 192Q166 192 178 172Q166 152 140 152Z"/><circle class="gb" cx="182" cy="172" r="4"/>
            <path class="gb" d="M220 105Q234 125 220 145Q246 145 258 125Q246 105 220 105Z"/><circle class="gb" cx="262" cy="125" r="4"/>
            <path class="gb" d="M320 105Q334 125 320 145Q346 145 358 125Q346 105 320 105Z"/><circle class="gb" cx="362" cy="125" r="4"/>
            <foreignObject x="117" y="102" width="44" height="22" overflow="visible"><div class="flab"><span class="ov">A+B</span></div></foreignObject>
            <foreignObject x="150" y="24" width="110" height="30" overflow="visible"><div class="flab"><span class="ov">A+<span class="ov">A+B</span></span></div></foreignObject>
            <foreignObject x="150" y="196" width="110" height="30" overflow="visible"><div class="flab"><span class="ov">B+<span class="ov">A+B</span></span></div></foreignObject>
            <foreignObject x="272" y="102" width="30" height="22" overflow="visible"><div class="flab">P</div></foreignObject>
            <foreignObject x="214" y="150" width="215" height="36" overflow="visible"><div class="flab">P = <span class="ov"><span class="ov">A+<span class="ov">A+B</span></span> + <span class="ov">B+<span class="ov">A+B</span></span></span></div></foreignObject>
            <foreignObject x="368" y="100" width="70" height="22" overflow="visible"><div class="flab">Y = <span class="ov">P+P</span></div></foreignObject>
          </svg>
        </figure>
        <ul class="eqs">
          <li><span>Y = <span class="ov">P + P</span></span><small>পঞ্চম গেটের আউটপুট</small></li>
          <li><span>= <span class="ov">P</span></span><small>X + X = X</small></li>
          <li><span>= <span class="ov">AB + <span class="ov">A</span>·<span class="ov">B</span></span></span><small>(ঘ) থেকে P = AB + <span class="ov">A</span>·<span class="ov">B</span></small></li>
          <li><span>= <span class="ov">AB</span> · <span class="ov"><span class="ov">A</span>·<span class="ov">B</span></span></span><small>ডি মরগান: <span class="ov">X + Z</span> = <span class="ov">X</span>·<span class="ov">Z</span></small></li>
          <li><span>= (<span class="ov">A</span> + <span class="ov">B</span>)(A + B)</span><small>ডি মরগান, দ্বৈত পূরক</small></li>
          <li><span>= <span class="ov">A</span>A + <span class="ov">A</span>B + A<span class="ov">B</span> + B<span class="ov">B</span></span><small>গুণ ছড়িয়ে</small></li>
          <li><span>= <span class="ov">A</span>B + A<span class="ov">B</span></span><small>X·<span class="ov">X</span> = 0</small></li>
        </ul>
        <p class="final"><b>ফল</b>Y = <span class="ov">A</span>B + A<span class="ov">B</span> = A ⊕ B (XOR)</p>
        <p class="prose">তাই ছকের নিয়মমতো NOR দিয়ে XNOR-এ ৪টি, XOR-এ ৫টি গেট; NAND-এ ঠিক উল্টো, XOR-এ ৪টি, XNOR-এ ৫টি।</p>
        <p class="tip"><b>চিহ্ন গুলিয়ে ফেলবেন না:</b> ⊕ (বৃত্তের ভেতরে যোগ) হলো XOR; XNOR-এর চিহ্ন ⊙ (বৃত্তের ভেতরে বিন্দু), অথবা A ⊕ B-এর ওপর বার। তাই AB + <span class="ov">A</span>·<span class="ov">B</span> = A ⊙ B, কখনো A ⊕ B নয়।</p>


        <h3 class="sub"><span>৪.৪</span>পুরো সমীকরণ শুধু NAND বা NOR দিয়ে</h3>
        <p class="prose">রাশিটি গুণফলের যোগফল (যেমন AB + BC + CA) রূপে থাকলে প্রতিটি AND আর শেষের OR-কে NAND দিয়ে বদলে দিন; বর্তনীর আকার একই থাকে, ফলও একই। NOR দিয়ে করতে হলে রাশিটিকে যোগফলের গুণফল রূপে আনুন, যেমন (A + B)(B + C)(C + A), তারপর প্রতিটি OR আর শেষের AND-কে NOR দিয়ে বদলান। দুটি চিত্রই আছে <a href="#/written/18-school/q10">১৮তম লিখিত প্রশ্ন ১০-এর উত্তরে</a>।</p>

        <div data-prev="univ"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="30,35,61,66,88,101,103-113" data-name="সার্বজনীন গেট">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch04/q30">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>নম্বর পেতে</b>“সার্বজনীনতা প্রমাণ করুন” প্রশ্নে তিনটি চিত্র (NOT, AND, OR) আঁকতেই হবে, প্রতিটির নিচে সমীকরণসহ। শেষে এক লাইনে সিদ্ধান্ত লিখুন।</p>
        <p><b>বারবার এসেছে</b>৯টি পরীক্ষায়; ১১তম থেকে ১৮তমের মধ্যে ছয়বার।</p>
      </aside>
    </section>

    <section class="blk" id="bool" data-topic="bool" data-short="বুলিয়ান অ্যালজেবরা">
      <p class="blk-no">অংশ ৫<small>সিলেবাসের বাইরে, নিয়মিত আসে</small></p>
      <div class="body">
        <h2>বুলিয়ান অ্যালজেবরা ও ডি মরগানের সূত্র</h2>
        <p class="defn"><b>সংজ্ঞা</b>যে বীজগণিতে চলকের মান মাত্র দুটি, ০ (মিথ্যা) ও ১ (সত্য), আর অপারেশন তিনটি, যৌক্তিক যোগ (OR, +), যৌক্তিক গুণ (AND, ·) ও পূরক (NOT, বার চিহ্ন), তাকে বুলিয়ান অ্যালজেবরা বলে। ১৮৫৪ সালে ইংরেজ গণিতবিদ জর্জ বুল এর প্রবর্তন করেন; ১৯৩৮ সালে ক্লড শ্যানন একে সুইচিং বর্তনীতে কাজে লাগান।</p>

        <h3 class="sub"><span>৫.১</span>যৌক্তিক যোগ ও গুণের নিয়ম</h3>
        <table class="rt cmp">
          <thead><tr><th>যৌক্তিক যোগ (OR)</th><th>যৌক্তিক গুণ (AND)</th><th>পূরক (NOT)</th></tr></thead>
          <tbody>
            <tr><td class="m">0 + 0 = 0</td><td class="m">0 · 0 = 0</td><td class="m"><span class="ov">0</span> = 1</td></tr>
            <tr><td class="m">0 + 1 = 1</td><td class="m">0 · 1 = 0</td><td class="m"><span class="ov">1</span> = 0</td></tr>
            <tr><td class="m">1 + 0 = 1</td><td class="m">1 · 0 = 0</td><td></td></tr>
            <tr><td class="m">1 + 1 = 1</td><td class="m">1 · 1 = 1</td><td></td></tr>
          </tbody>
        </table>
        <p class="tip"><b>সাবধান:</b> বুলিয়ান যোগে 1 + 1 = 1 (অন্তত একটি সত্য হলেই সত্য); বাইনারি যোগে 1 + 1 = 10 (দুই)। কোন যুক্তিতে দুটিই ঠিক, এই প্রশ্নই এসেছিল ১৭তম পরীক্ষায়।</p>

        <h3 class="sub"><span>৫.২</span>মূল উপপাদ্য</h3>
        <p class="prose">প্রতিটি সারিতে ওপরে যোগের রূপ, নিচে গুণের রূপ।</p>
        <table class="rt cmp">
          <thead><tr><th>নাম</th><th>সূত্র</th></tr></thead>
          <tbody>
            <tr><td>০ ও ১-এর নিয়ম</td><td class="m">A + 0 = A, A + 1 = 1<br>A · 1 = A, A · 0 = 0</td></tr>
            <tr><td>অভিন্নতা</td><td class="m">A + A = A<br>A · A = A</td></tr>
            <tr><td>পূরক</td><td class="m">A + <span class="ov">A</span> = 1<br>A · <span class="ov">A</span> = 0</td></tr>
            <tr><td>দ্বৈত পূরক</td><td class="m"><span class="ov"><span class="ov">A</span></span> = A</td></tr>
            <tr><td>বিনিময়</td><td class="m">A + B = B + A<br>AB = BA</td></tr>
            <tr><td>সংযোগ</td><td class="m">(A&nbsp;+&nbsp;B)&nbsp;+&nbsp;C = A&nbsp;+&nbsp;(B&nbsp;+&nbsp;C)<br>(AB)C = A(BC)</td></tr>
            <tr><td>বিভাজন</td><td class="m">A&nbsp;+&nbsp;BC = (A&nbsp;+&nbsp;B)(A&nbsp;+&nbsp;C)<br>A(B&nbsp;+&nbsp;C) = AB&nbsp;+&nbsp;AC</td></tr>
            <tr><td>শোষণ</td><td class="m">A + AB = A<br>A(A + B) = A</td></tr>
            <tr><td>বাড়তি পদ বাদ</td><td class="m">A + <span class="ov">A</span>B = A + B<br>A(<span class="ov">A</span> + B) = AB</td></tr>
          </tbody>
        </table>
        <p class="prose"><b>দ্বৈততা (Duality):</b> কোনো সত্য সূত্রে + ও · অদলবদল করলে, আর 0 ও 1 অদলবদল করলে যে সূত্র পাওয়া যায়, সেটিও সত্য। তাই ওপরের ছকের প্রতিটি সারির দুটি সূত্র একে অপরের দ্বৈত রূপ: একটি মনে রাখলে অন্যটি লিখে ফেলা যায়।</p>

        <h3 class="sub"><span>৫.৩</span>ডি মরগানের দুটি সূত্র</h3>
        <p class="defn"><b>প্রথম সূত্র</b>যোগফলের পূরক = পূরকগুলোর গুণফল: <span class="m"><span class="ov">A + B</span> = <span class="ov">A</span>·<span class="ov">B</span></span></p>
        <p class="defn"><b>দ্বিতীয় সূত্র</b>গুণফলের পূরক = পূরকগুলোর যোগফল: <span class="m"><span class="ov">A·B</span> = <span class="ov">A</span> + <span class="ov">B</span></span></p>
        <p class="prose">মনে রাখার কৌশল: বার ভাঙুন, চিহ্ন বদলান। যত চলকই থাকুক, সূত্র একই: <span class="m"><span class="ov">X + Y + Z</span> = <span class="ov">X</span>·<span class="ov">Y</span>·<span class="ov">Z</span></span>। সত্যক সারণিতে প্রমাণ:</p>
        <table class="truth"><thead><tr><th>X</th><th>Y</th><th>Z</th><th>X+Y+Z</th><th><span class="ov">X+Y+Z</span></th><th><span class="ov">X</span>·<span class="ov">Y</span>·<span class="ov">Z</span></th></tr></thead><tbody>
          <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
          <tr><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
          <tr><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
          <tr><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
          <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
          <tr><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
          <tr><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
          <tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
        </tbody></table>
        <p class="prose">শেষ দুই কলাম প্রতিটি সারিতে সমান, তাই সূত্রটি প্রমাণিত। খাতায় <span class="ov">X</span>, <span class="ov">Y</span>, <span class="ov">Z</span>-এর তিনটি কলামও আলাদা করে দিন। দুটি সূত্রের পুরো প্রমাণ আছে <a href="#/written/16-school/q5">১৬তম লিখিত প্রশ্ন ৫-এর উত্তরে</a>।</p>

        <h3 class="sub"><span>৫.৪</span>বীজগণিত দিয়ে প্রমাণ</h3>
        <p class="prose">উদাহরণ (১৫তম, প্রশ্ন ৯): প্রমাণ করুন (x + y)(x + z) = x + yz।</p>
        <ul class="eqs">
          <li><span>(x + y)(x + z) = x·x + x·z + y·x + y·z</span><small>গুণ ছড়িয়ে</small></li>
          <li><span>= x + xz + xy + yz</span><small>x·x = x</small></li>
          <li><span>= x(1 + z + y) + yz</span><small>সাধারণ উৎপাদক x</small></li>
          <li><span>= x·1 + yz = x + yz</span><small>1 + যেকোনো কিছু = 1</small></li>
        </ul>
        <p class="final"><b>প্রমাণিত</b>(x + y)(x + z) = x + yz</p>
        <p class="prose">এটিই বিভাজন সূত্রের যোগের রূপ। আরেকটি চেনা প্রশ্ন, F·<span class="ov">F</span> = 0: F যত বড় রাশিই হোক, কোনো কিছু আর তার পূরকের গুণফল সবসময় ০ (পূরকের সূত্র)।</p>

        <div data-prev="bool"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="38-40,58,59,62,68,73-79,81-85,87,92,95,97-100" data-name="বুলিয়ান অ্যালজেবরা">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch04/q38">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>নম্বর পেতে</b>প্রমাণের প্রতিটি ধাপের পাশে সূত্রের নাম লিখুন (যেমন: শোষণ সূত্র)। পরীক্ষক বোঝেন আপনি নিয়ম জেনে করছেন।</p>
        <p><b>বারবার এসেছে</b>৭টি পরীক্ষায়; ডি মরগানের সূত্রের প্রমাণ এসেছে ১৪তম, ১৫তম ও ১৬তম, পরপর তিনটি পরীক্ষায়।</p>
      </aside>
    </section>

    <section class="blk" id="circ" data-topic="circ" data-short="সরলীকরণ ও সার্কিট">
      <p class="blk-no">অংশ ৬<small>সিলেবাস ঘ · লজিক সার্কিট</small></p>
      <div class="body">
        <h2>সরলীকরণ ও লজিক সার্কিট</h2>
        <p class="prose">এই অধ্যায়ের সবচেয়ে বেশি আসা প্রশ্ন: একটি সমীকরণ দিয়ে বলা হয়, সরল করুন এবং লজিক সার্কিট আঁকুন। সরল রূপে গেট কম লাগে, বর্তনী সস্তা ও দ্রুত হয়; তাই দুটি কাজ একসঙ্গে চাওয়া হয়। দুটি অংশেই নম্বর থাকে, তাই চিত্রটি বাদ দেবেন না।</p>

        <h3 class="sub"><span>৬.১</span>সরল করার ধাপ</h3>
        <ol class="algo">
          <li><b>বার ভাঙুন:</b> বড় বারের নিচের রাশিতে ডি মরগান খাটান, যতক্ষণ না বার শুধু একক চলকের ওপর থাকে।</li>
          <li><b>বন্ধনী খুলুন:</b> গুণ ছড়িয়ে রাশিটিকে গুণফলের যোগফল রূপে আনুন।</li>
          <li><b>সাধারণ উৎপাদক নিন:</b> যে পদগুলোতে একই চলক আছে, সেগুলো একসঙ্গে নিন।</li>
          <li><b>সূত্র খাটান:</b> A + <span class="ov">A</span> = 1, A·<span class="ov">A</span> = 0, A + AB = A, A + <span class="ov">A</span>B = A + B।</li>
          <li><b>দরকারে পদ দুবার লিখুন:</b> A = A + A, তাই একটি পদ একাধিক জোড়ায় কাজে লাগানো যায় (নিচের উদাহরণ ১)।</li>
          <li><b>যাচাই করুন:</b> দুই-একটি ইনপুট বসিয়ে মূল ও সরল রূপের মান মিলিয়ে দেখুন।</li>
        </ol>

        <h3 class="sub" id="ex-majority"><span>৬.২</span>উদাহরণ ১: চার পদ থেকে তিন পদ</h3>
        <p class="prose">১৮তম পরীক্ষার প্রশ্ন ১০ (৫ম পরীক্ষায় প্রমাণ হিসেবে): X = <span class="ov">A</span>BC + A<span class="ov">B</span>C + AB<span class="ov">C</span> + ABC। ABC পদটি তিনটি পদের প্রতিটির সঙ্গে জোড়া লাগে, তাই একে তিনবার লিখি (ABC + ABC + ABC = ABC):</p>
        <ul class="eqs">
          <li><span>X = (<span class="ov">A</span>BC + ABC) + (A<span class="ov">B</span>C + ABC) + (AB<span class="ov">C</span> + ABC)</span><small>ABC তিনবার</small></li>
          <li><span>= BC(<span class="ov">A</span> + A) + AC(<span class="ov">B</span> + B) + AB(<span class="ov">C</span> + C)</span><small>সাধারণ উৎপাদক</small></li>
          <li><span>= BC·1 + AC·1 + AB·1</span><small><span class="ov">A</span> + A = 1</small></li>
          <li><span>= AB + BC + CA</span></li>
        </ul>
        <p class="final"><b>সরলীকৃত মান</b>X = AB + BC + CA</p>
        <p class="prose">সার্কিট: তিনটি গুণফল পদের জন্য তিনটি AND, যোগের জন্য একটি তিন ইনপুটের OR। মূল রাশিতে লাগত তিনটি NOT, চারটি তিন-ইনপুট AND আর একটি চার-ইনপুট OR।</p>
        <figure class="fig wide tight">
          <svg viewBox="126 0 340 222" role="img" aria-label="লজিক সার্কিট: A ও B একটি AND-এ, B ও C আরেকটি AND-এ, C ও A তৃতীয় AND-এ; তিন AND-এর আউটপুট একটি OR গেটে গিয়ে X দেয়।">
            <text x="136" y="26" text-anchor="start">A</text><path class="w" d="M150 22H200"/>
            <text x="136" y="52" text-anchor="start">B</text><path class="w" d="M150 48H200"/>
            <text x="136" y="91" text-anchor="start">B</text><path class="w" d="M150 87H200"/>
            <text x="136" y="117" text-anchor="start">C</text><path class="w" d="M150 113H200"/>
            <text x="136" y="156" text-anchor="start">C</text><path class="w" d="M150 152H200"/>
            <text x="136" y="182" text-anchor="start">A</text><path class="w" d="M150 178H200"/>
            <path class="w" d="M245 35H300V70H337"/><text x="250" y="28" text-anchor="start">AB</text>
            <path class="w" d="M245 100H342"/><text x="250" y="93" text-anchor="start">BC</text>
            <path class="w" d="M245 165H300V130H337"/><text x="250" y="158" text-anchor="start">CA</text>
            <path class="w" d="M390 100H440"/><text x="446" y="104" text-anchor="start">X</text>
            <path class="gb" d="M200 10H220A25 25 0 0 1 220 60H200Z"/>
            <path class="gb" d="M200 75H220A25 25 0 0 1 220 125H200Z"/>
            <path class="gb" d="M200 140H220A25 25 0 0 1 220 190H200Z"/>
            <path class="gb" d="M330 55Q350 100 330 145Q370 145 390 100Q370 55 330 55Z"/>
            <text class="cap" x="222" y="212" text-anchor="middle">AND</text><text class="cap" x="360" y="212" text-anchor="middle">OR</text>
          </svg>
          <figcaption>চিত্র: X = AB + BC + CA-এর লজিক সার্কিট</figcaption>
        </figure>

        <h3 class="sub"><span>৬.৩</span>উদাহরণ ২: সাধারণ উৎপাদক বের করে</h3>
        <p class="prose">১৬তম পরীক্ষার প্রশ্ন ৫ (খ): Y = <span class="ov">A</span>BC + A<span class="ov">B</span>C + ABC।</p>
        <ul class="eqs">
          <li><span>Y = (<span class="ov">A</span>BC + ABC) + (A<span class="ov">B</span>C + ABC)</span><small>ABC দুবার</small></li>
          <li><span>= BC(<span class="ov">A</span> + A) + AC(<span class="ov">B</span> + B)</span><small>সাধারণ উৎপাদক</small></li>
          <li><span>= BC + AC = C(A + B)</span><small><span class="ov">A</span> + A = 1</small></li>
        </ul>
        <p class="final"><b>সরলীকৃত মান</b>Y = C(A + B)</p>
        <figure class="fig gate-sym duo"><svg viewBox="0 0 300 84" role="img" aria-label="লজিক সার্কিট: A ও B একটি OR গেটে গিয়ে A যোগ B হয়; সেটি ও C একটি AND গেটে গিয়ে Y দেয়।"><text x="0" y="24" text-anchor="start">A</text><path class="w" d="M12 20H45"/><text x="0" y="44" text-anchor="start">B</text><path class="w" d="M12 40H45"/><text x="0" y="66" text-anchor="start">C</text><path class="w" d="M12 62H130"/><path class="w" d="M78 30H100V42H130"/><text x="82" y="22" text-anchor="start">A+B</text><path class="gb" d="M40 10Q54 30 40 50Q66 50 78 30Q66 10 40 10Z"/><path class="gb" d="M130 32H148A20 20 0 0 1 148 72H130Z"/><path class="w" d="M168 52H196"/><text x="202" y="56" text-anchor="start">Y = C(A+B)</text></svg><figcaption>দুটি গেটেই কাজ শেষ: OR, তারপর AND</figcaption></figure>

        <h3 class="sub"><span>৬.৪</span>সমীকরণ থেকে সার্কিট আঁকার নিয়ম</h3>
        <ul class="pts">
          <li><b>বার দেওয়া চলক</b> (<span class="ov">A</span>): একটি NOT গেট। একই চলকের বার কয়েক জায়গায় লাগলেও একটি NOT-ই যথেষ্ট; তার আউটপুট ভাগ করে দিন।</li>
          <li><b>গুণফল পদ</b> (যেমন ABC): একটি AND গেট, যত চলক তত ইনপুট।</li>
          <li><b>পদগুলোর যোগ:</b> শেষে একটি OR গেট, যত পদ তত ইনপুট।</li>
          <li><b>পুরো পদের ওপর বার</b> (যেমন <span class="ov">AB</span>): AND-এর জায়গায় NAND; যোগের ওপর বার হলে OR-এর জায়গায় NOR।</li>
          <li><b>বাঁ থেকে ডানে আঁকুন:</b> ইনপুট, NOT, AND, OR, আউটপুট। প্রতিটি তারের পাশে তার রাশিটি লিখুন।</li>
        </ul>
        <p class="prose">গেট গোনার MCQ-ও এখান থেকে আসে: Y = <span class="ov">A</span>B + C-এর জন্য একটি NOT, একটি AND ও একটি OR, মোট ৩টি গেট।</p>
        <p class="tip"><b>ছাপার ভুল:</b> ৬ষ্ঠ থেকে ১১তম পরীক্ষার কয়েকটি ছাপা প্রশ্নে সমীকরণের বার চিহ্ন দেখা যায় না (যেমন ১১তম প্রশ্ন ৫-এর চারটি পদই ABC)। পরীক্ষার হলে এমন হলে শুরুতে এক লাইনে লিখে দিন সমীকরণটি আপনি কীভাবে পড়েছেন, তারপর সমাধান করুন।</p>

        <h3 class="sub"><span>৬.৫</span>বিগত পরীক্ষার সমীকরণ: ১০ম থেকে ৩য়</h3>
        <p class="prose">১১তম থেকে ১৮তম পরীক্ষার এ ধরনের প্রতিটি প্রশ্নের পূর্ণ নমুনা উত্তর আছে লিখিত উত্তর অংশে (নিচের “পরীক্ষায় যেভাবে এসেছে” তালিকায় লিংক)। এখানে আগের পরীক্ষাগুলোর সব সমীকরণ। প্রশ্নে শুধু “সার্কিট অঙ্কন করুন” বলা থাকলে সমীকরণটি যেমন আছে তেমনই আঁকা হয়েছে, তারপর ধাপে ধাপে সরল রূপ; “সরল করুন” বলা থাকলে আগে সরল রূপ, তারপর তার সার্কিট।</p>
        <h4 class="sub-h" id="pp10-4"><span>১০ম · ২০১৪</span><span>প্রশ্ন ৪ (অথবা) খ: (<span class="ov">A</span>B + C)A<span class="ov">B</span></span></h4>
        <p class="prose">চাওয়া হয়েছে: সমীকরণটির লজিক সার্কিট। যেমন আছে তেমন আঁকলে লাগে দুটি NOT, একটি দুই-ইনপুট AND, একটি OR আর একটি তিন-ইনপুট AND।</p>
        <figure class="fig eqfig">
          <svg viewBox="0 0 432 160" width="497" role="img" aria-label="লজিক সার্কিট: A একটি NOT দিয়ে A-বার, B-এর সঙ্গে AND-এ; তার ফল ও C একটি OR-এ; সেই ফল, A এবং NOT দিয়ে উল্টানো B একটি তিন-ইনপুট AND-এ গিয়ে Y দেয়।">
            <text x="26" y="12" text-anchor="start">A</text>
            <text x="42" y="12" text-anchor="start">B</text>
            <text x="58" y="12" text-anchor="start">C</text>
            <path class="w" d="M30 18V100M46 18V140M62 18V70M30 30H90M46 50H151M62 70H236.3M46 140H90M30 100H321M124 30H151M188 40H210V50H236.3M268 60H290V83H321M124 140H300V117H321M365 100H388"/>
            <path class="gb" d="M90 18L116 30L90 42Z"/><circle class="gb" cx="120" cy="30" r="4"/>
            <path class="gb" d="M150 20H168A20 20 0 0 1 168 60H150Z"/>
            <path class="gb" d="M230 40Q244 60 230 80Q255.8 80 268 60Q255.8 40 230 40Z"/>
            <path class="gb" d="M90 128L116 140L90 152Z"/><circle class="gb" cx="120" cy="140" r="4"/>
            <path class="gb" d="M320 73H338A27 27 0 0 1 338 127H320Z"/>
            <circle class="j" cx="30" cy="30" r="2.6"/>
            <circle class="j" cx="46" cy="50" r="2.6"/>
            <circle class="j" cx="62" cy="70" r="2.6"/>
            <circle class="j" cx="46" cy="140" r="2.6"/>
            <circle class="j" cx="30" cy="100" r="2.6"/>
            <foreignObject x="127" y="12" width="30" height="34" overflow="visible"><div class="flab"><span class="ov">A</span></div></foreignObject>
            <foreignObject x="190" y="22" width="40" height="34" overflow="visible"><div class="flab"><span class="ov">A</span>B</div></foreignObject>
            <foreignObject x="270" y="42" width="60" height="34" overflow="visible"><div class="flab"><span class="ov">A</span>B+C</div></foreignObject>
            <foreignObject x="127" y="122" width="30" height="34" overflow="visible"><div class="flab"><span class="ov">B</span></div></foreignObject>
            <foreignObject x="369" y="82" width="20" height="34" overflow="visible"><div class="flab">Y</div></foreignObject>
            <foreignObject x="310" y="128" width="120" height="34" overflow="visible"><div class="flab">Y = (<span class="ov">A</span>B+C)·A·<span class="ov">B</span></div></foreignObject>
          </svg>
        </figure>
        <ul class="eqs">
          <li><span>Y = (<span class="ov">A</span>B + C)·A<span class="ov">B</span></span><small>সার্কিটের আউটপুট</small></li>
          <li><span>= <span class="ov">A</span>B·A<span class="ov">B</span> + C·A<span class="ov">B</span></span><small>গুণ ছড়িয়ে</small></li>
          <li><span>= (<span class="ov">A</span>A)(B<span class="ov">B</span>) + A<span class="ov">B</span>C</span><small>বিনিময়</small></li>
          <li><span>= 0 + A<span class="ov">B</span>C = A<span class="ov">B</span>C</span><small>X·<span class="ov">X</span> = 0</small></li>
        </ul>
        <p class="final"><b>সরল রূপ</b>Y = A<span class="ov">B</span>C</p>
        <p class="prose">উত্তরে আগে প্রশ্নের সমীকরণের সার্কিট দিন; সরল রূপ দেখালে বাড়তি সুবিধা: A<span class="ov">B</span>C-তে লাগে মাত্র একটি NOT আর একটি তিন-ইনপুট AND।</p>
        <h4 class="sub-h" id="pp9-4"><span>৯ম · ২০১৩</span><span>প্রশ্ন ৪: Y = <span class="ov">A + <span class="ov">B + C</span></span></span></h4>
        <p class="prose">চাওয়া হয়েছে: লজিক সার্কিট। ভেতরের বার B + C-এর ওপর, বাইরের বার পুরো রাশির ওপর: দুটিই OR-এর পরে NOT, অর্থাৎ দুটি NOR গেট।</p>
        <figure class="fig eqfig">
          <svg viewBox="0 0 305 120" width="351" role="img" aria-label="লজিক সার্কিট: B ও C একটি NOR-এ; তার ফল ও A আরেকটি NOR-এ গিয়ে Y দেয়।">
            <text x="4" y="44" text-anchor="start">A</text>
            <text x="4" y="84" text-anchor="start">B</text>
            <text x="4" y="104" text-anchor="start">C</text>
            <path class="w" d="M16 40H166.3M16 80H66.3M16 100H66.3M106 90H130V60H166.3M206 50H230"/>
            <path class="gb" d="M60 70Q74 90 60 110Q85.8 110 98 90Q85.8 70 60 70Z"/><circle class="gb" cx="102" cy="90" r="4"/>
            <path class="gb" d="M160 30Q174 50 160 70Q185.8 70 198 50Q185.8 30 160 30Z"/><circle class="gb" cx="202" cy="50" r="4"/>
            <foreignObject x="108" y="96" width="40" height="34" overflow="visible"><div class="flab"><span class="ov">B+C</span></div></foreignObject>
            <foreignObject x="236" y="35" width="67" height="34" overflow="visible"><div class="flab">Y = <span class="ov">A+<span class="ov">B+C</span></span></div></foreignObject>
          </svg>
        </figure>
        <ul class="eqs">
          <li><span>Y = <span class="ov">A + <span class="ov">B + C</span></span></span><small>সার্কিটের আউটপুট</small></li>
          <li><span>= <span class="ov">A</span>·<span class="ov"><span class="ov">B + C</span></span></span><small>ডি মরগান: <span class="ov">X + Z</span> = <span class="ov">X</span>·<span class="ov">Z</span></small></li>
          <li><span>= <span class="ov">A</span>(B + C) = <span class="ov">A</span>B + <span class="ov">A</span>C</span><small>দ্বৈত পূরক, গুণ ছড়িয়ে</small></li>
        </ul>
        <p class="final"><b>সরল রূপ</b>Y = <span class="ov">A</span>(B + C)</p>
        <p class="prose">মৌলিক গেট দিয়ে আঁকতে চাইলে প্রতিটি NOR-এর জায়গায় একটি OR, তার পরে একটি NOT বসান।</p>
        <h4 class="sub-h" id="pp8-3"><span>৮ম · ২০১২</span><span>প্রশ্ন ৩ (অথবা): X = AB + ABC + ABC</span></h4>
        <p class="prose">ছাপা প্রশ্নে পদগুলোর ওপরের বার দেখা যায় না, তাই যেভাবে ছাপা সেভাবেই সমাধান। খাতায় শুরুতে এক লাইনে লিখে দিন যে সমীকরণটি ছাপা রূপে পড়েছেন।</p>
        <ul class="eqs">
          <li><span>X = AB + ABC + ABC</span><small>প্রশ্নের সমীকরণ</small></li>
          <li><span>= AB + ABC</span><small>X + X = X</small></li>
          <li><span>= AB(1 + C) = AB</span><small>1 + C = 1 (শোষণ সূত্র)</small></li>
        </ul>
        <p class="final"><b>ফল</b>X = AB</p>
        <figure class="fig eqfig">
          <svg viewBox="0 0 200 70" width="230" role="img" aria-label="লজিক সার্কিট: A ও B একটি AND গেটে গিয়ে X দেয়।">
            <text x="4" y="34" text-anchor="start">A</text>
            <text x="4" y="54" text-anchor="start">B</text>
            <path class="w" d="M16 30H61M16 50H61M98 40H124"/>
            <path class="gb" d="M60 20H78A20 20 0 0 1 78 60H60Z"/>
            <foreignObject x="130" y="31" width="60" height="34" overflow="visible"><div class="flab">X = AB</div></foreignObject>
          </svg>
        </figure>
        <h4 class="sub-h" id="pp8-7"><span>৮ম · ২০১২</span><span>প্রশ্ন ৭: F = (AB + C)(BC + B)</span></h4>
        <p class="prose">চাওয়া হয়েছে: ফাংশনটি ব্যবহার করে লজিক সার্কিট। যেমন আছে তেমন আঁকলে লাগে তিনটি AND আর দুটি OR।</p>
        <figure class="fig eqfig">
          <svg viewBox="0 0 390 175" width="448" role="img" aria-label="লজিক সার্কিট: A ও B একটি AND-এ, তার ফল ও C একটি OR-এ; B ও C আরেকটি AND-এ, তার ফল ও B আরেকটি OR-এ; দুই OR-এর ফল শেষ AND-এ গিয়ে F দেয়।">
            <text x="26" y="12" text-anchor="start">A</text>
            <text x="42" y="12" text-anchor="start">B</text>
            <text x="58" y="12" text-anchor="start">C</text>
            <path class="w" d="M30 18V30M46 18V160M62 18V130M30 30H101M46 50H101M62 70H186.3M46 110H101M62 130H101M46 160H186.3M138 40H160V50H186.3M138 120H160V140H186.3M218 60H240V95H271M218 150H240V115H271M308 105H330"/>
            <path class="gb" d="M100 20H118A20 20 0 0 1 118 60H100Z"/>
            <path class="gb" d="M180 40Q194 60 180 80Q205.8 80 218 60Q205.8 40 180 40Z"/>
            <path class="gb" d="M100 100H118A20 20 0 0 1 118 140H100Z"/>
            <path class="gb" d="M180 130Q194 150 180 170Q205.8 170 218 150Q205.8 130 180 130Z"/>
            <path class="gb" d="M270 85H288A20 20 0 0 1 288 125H270Z"/>
            <circle class="j" cx="30" cy="30" r="2.6"/>
            <circle class="j" cx="46" cy="50" r="2.6"/>
            <circle class="j" cx="62" cy="70" r="2.6"/>
            <circle class="j" cx="46" cy="110" r="2.6"/>
            <circle class="j" cx="62" cy="130" r="2.6"/>
            <circle class="j" cx="46" cy="160" r="2.6"/>
            <foreignObject x="141" y="22" width="30" height="34" overflow="visible"><div class="flab">AB</div></foreignObject>
            <foreignObject x="220" y="42" width="50" height="34" overflow="visible"><div class="flab">AB+C</div></foreignObject>
            <foreignObject x="141" y="102" width="30" height="34" overflow="visible"><div class="flab">BC</div></foreignObject>
            <foreignObject x="220" y="154" width="50" height="34" overflow="visible"><div class="flab">BC+B</div></foreignObject>
            <foreignObject x="312" y="87" width="20" height="34" overflow="visible"><div class="flab">F</div></foreignObject>
            <foreignObject x="262" y="126" width="126" height="34" overflow="visible"><div class="flab">F = (AB+C)(BC+B)</div></foreignObject>
          </svg>
        </figure>
        <ul class="eqs">
          <li><span>F = (AB + C)(BC + B)</span><small>সার্কিটের আউটপুট</small></li>
          <li><span>= (AB + C)·B(C + 1)</span><small>সাধারণ উৎপাদক B</small></li>
          <li><span>= (AB + C)·B</span><small>C + 1 = 1</small></li>
          <li><span>= AB·B + BC = AB + BC</span><small>গুণ ছড়িয়ে, B·B = B</small></li>
          <li><span>= B(A + C)</span><small>সাধারণ উৎপাদক B</small></li>
        </ul>
        <p class="final"><b>সরল রূপ</b>F = B(A + C)</p>
        <p class="prose">সরল রূপে মাত্র দুটি গেট: A ও C একটি OR-এ, তার ফল ও B একটি AND-এ।</p>
        <h4 class="sub-h" id="pp7-9"><span>৭ম · ২০১১</span><span>প্রশ্ন ৯: F = AB + AB + AC</span></h4>
        <p class="prose">ছাপা প্রশ্নে বার দেখা যায় না; যেভাবে ছাপা সেভাবে পড়লে প্রথম দুটি পদ একই, তাই আগে সরল করে তারপর সার্কিট।</p>
        <ul class="eqs">
          <li><span>F = AB + AB + AC</span><small>প্রশ্নের সমীকরণ</small></li>
          <li><span>= AB + AC</span><small>X + X = X</small></li>
          <li><span>= A(B + C)</span><small>সাধারণ উৎপাদক A</small></li>
        </ul>
        <p class="final"><b>ফল</b>F = A(B + C)</p>
        <figure class="fig eqfig">
          <svg viewBox="0 0 300 100" width="345" role="img" aria-label="লজিক সার্কিট: B ও C একটি OR-এ; তার ফল ও A একটি AND-এ গিয়ে F দেয়।">
            <text x="4" y="34" text-anchor="start">A</text>
            <text x="4" y="64" text-anchor="start">B</text>
            <text x="4" y="84" text-anchor="start">C</text>
            <path class="w" d="M16 30H151M16 60H66.3M16 80H66.3M98 70H120V50H151M188 40H210"/>
            <path class="gb" d="M60 50Q74 70 60 90Q85.8 90 98 70Q85.8 50 60 50Z"/>
            <path class="gb" d="M150 20H168A20 20 0 0 1 168 60H150Z"/>
            <foreignObject x="100" y="76" width="40" height="34" overflow="visible"><div class="flab">B+C</div></foreignObject>
            <foreignObject x="216" y="31" width="80" height="34" overflow="visible"><div class="flab">F = A(B+C)</div></foreignObject>
          </svg>
        </figure>
        <h4 class="sub-h" id="pp6-4"><span>৬ষ্ঠ · ২০০৯</span><span>প্রশ্ন ৪ (অথবা): A + B + C − BC</span></h4>
        <p class="prose">বুলিয়ান অ্যালজেবরায় বিয়োগ বলে কিছু নেই, তাই ছাপা “−” চিহ্নটি ছাপার ভুল। বাকি সব চিহ্ন যোগ বলে এটিকেও যোগ ধরা হলো: Y = A + B + C + BC। খাতায় শুরুতে এই কথাটি এক লাইনে লিখে দিন।</p>
        <figure class="fig eqfig">
          <svg viewBox="0 0 300 150" width="345" role="img" aria-label="লজিক সার্কিট: B ও C একটি AND-এ; A, B, C ও সেই ফল একটি চার-ইনপুট OR-এ গিয়ে Y দেয়।">
            <text x="26" y="12" text-anchor="start">A</text>
            <text x="42" y="12" text-anchor="start">B</text>
            <text x="58" y="12" text-anchor="start">C</text>
            <path class="w" d="M30 18V36M46 18V110M62 18V130M30 36H187M46 52H192.2M62 68H192.2M46 110H91M62 130H91M128 120H150V84H187M232 60H256"/>
            <path class="gb" d="M90 100H108A20 20 0 0 1 108 140H90Z"/>
            <path class="gb" d="M180 26Q203.8 60 180 94Q215.4 94 232 60Q215.4 26 180 26Z"/>
            <circle class="j" cx="30" cy="36" r="2.6"/>
            <circle class="j" cx="46" cy="52" r="2.6"/>
            <circle class="j" cx="62" cy="68" r="2.6"/>
            <circle class="j" cx="46" cy="110" r="2.6"/>
            <circle class="j" cx="62" cy="130" r="2.6"/>
            <foreignObject x="130" y="102" width="30" height="34" overflow="visible"><div class="flab">BC</div></foreignObject>
            <foreignObject x="238" y="42" width="20" height="34" overflow="visible"><div class="flab">Y</div></foreignObject>
            <foreignObject x="186" y="98" width="110" height="34" overflow="visible"><div class="flab">Y = A+B+C+BC</div></foreignObject>
          </svg>
        </figure>
        <ul class="eqs">
          <li><span>Y = A + B + C + BC</span><small>সার্কিটের আউটপুট</small></li>
          <li><span>= A + B + C(1 + B)</span><small>সাধারণ উৎপাদক C</small></li>
          <li><span>= A + B + C</span><small>1 + B = 1</small></li>
        </ul>
        <p class="final"><b>সরল রূপ</b>Y = A + B + C</p>
        <p class="prose">সরল রূপে একটি তিন-ইনপুট OR-ই যথেষ্ট। আর “−”-কে গুণ (·) ধরলে: A + B + C·BC = A + B + BC = A + B(1 + C) = A + B।</p>
        <h4 class="sub-h" id="pp6-5"><span>৬ষ্ঠ · ২০০৯</span><span>প্রশ্ন ৫ (অথবা): ABC + ABC + ABC + ABC</span></h4>
        <p class="prose">ছাপায় চারটি পদের কোনোটির ওপর বার দেখা যায় না। যেভাবে ছাপা সেভাবে পড়লে:</p>
        <ul class="eqs">
          <li><span>Y = ABC + ABC + ABC + ABC</span><small>প্রশ্নের সমীকরণ</small></li>
          <li><span>= ABC</span><small>X + X = X</small></li>
        </ul>
        <p class="final"><b>ফল</b>Y = ABC</p>
        <figure class="fig eqfig">
          <svg viewBox="0 0 210 78" width="241" role="img" aria-label="লজিক সার্কিট: A, B, C একটি তিন-ইনপুট AND গেটে গিয়ে Y দেয়।">
            <text x="4" y="27" text-anchor="start">A</text>
            <text x="4" y="44" text-anchor="start">B</text>
            <text x="4" y="61" text-anchor="start">C</text>
            <path class="w" d="M16 23H61M16 40H61M16 57H61M105 40H130"/>
            <path class="gb" d="M60 13H78A27 27 0 0 1 78 67H60Z"/>
            <foreignObject x="136" y="31" width="70" height="34" overflow="visible"><div class="flab">Y = ABC</div></foreignObject>
          </svg>
        </figure>
        <p class="prose">বারসহ এ প্রশ্নের প্রচলিত রূপ <span class="ov">A</span>BC + A<span class="ov">B</span>C + AB<span class="ov">C</span> + ABC হলে উত্তর AB + BC + CA; পুরো সমাধান ও সার্কিট ওপরের <a href="#/note/logic-gates/ex-majority">৬.২-এ</a>।</p>
        <h4 class="sub-h" id="pp5-3"><span>৫ম · ২০০৮</span><span>প্রশ্ন ৩: X = <span class="ov">A + B + <span class="ov">C</span></span>·(<span class="ov">B</span>C)</span></h4>
        <p class="prose">চাওয়া হয়েছে: সরল করে বর্তনী। ছাপায় শুরুর X-এর পরে “=” নেই, আর বন্ধনী এলোমেলো; রাশিটি X = <span class="ov">A + B + <span class="ov">C</span></span>·<span class="ov">B</span>C ধরা হলো। ৪র্থ পরীক্ষায় (প্রশ্ন ৪, অথবা) এই রাশিটিই <span class="ov">A</span>·<span class="ov">B</span>·C-এর সমান, তা সত্যক সারণিতে প্রমাণ করতে বলা হয়েছিল।</p>
        <ul class="eqs">
          <li><span>X = <span class="ov">A + B + <span class="ov">C</span></span>·<span class="ov">B</span>C</span><small>প্রশ্নের সমীকরণ</small></li>
          <li><span>= <span class="ov">A</span>·<span class="ov">B</span>·<span class="ov"><span class="ov">C</span></span>·<span class="ov">B</span>C</span><small>ডি মরগান: <span class="ov">X + Y + Z</span> = <span class="ov">X</span>·<span class="ov">Y</span>·<span class="ov">Z</span></small></li>
          <li><span>= <span class="ov">A</span>·<span class="ov">B</span>·C·<span class="ov">B</span>·C</span><small>দ্বৈত পূরক</small></li>
          <li><span>= <span class="ov">A</span>·<span class="ov">B</span>·C</span><small>X·X = X</small></li>
        </ul>
        <p class="final"><b>ফল</b>X = <span class="ov">A</span>·<span class="ov">B</span>·C</p>
        <figure class="fig eqfig">
          <svg viewBox="0 0 300 125" width="345" role="img" aria-label="লজিক সার্কিট: A একটি NOT দিয়ে A-বার, B একটি NOT দিয়ে B-বার; A-বার, B-বার ও C একটি তিন-ইনপুট AND-এ গিয়ে X দেয়।">
            <text x="4" y="34" text-anchor="start">A</text>
            <text x="4" y="74" text-anchor="start">B</text>
            <text x="4" y="114" text-anchor="start">C</text>
            <path class="w" d="M16 30H40M16 70H40M74 30H110V53H151M74 70H151M16 110H110V87H151M195 70H215"/>
            <path class="gb" d="M40 18L66 30L40 42Z"/><circle class="gb" cx="70" cy="30" r="4"/>
            <path class="gb" d="M40 58L66 70L40 82Z"/><circle class="gb" cx="70" cy="70" r="4"/>
            <path class="gb" d="M150 43H168A27 27 0 0 1 168 97H150Z"/>
            <foreignObject x="77" y="12" width="30" height="34" overflow="visible"><div class="flab"><span class="ov">A</span></div></foreignObject>
            <foreignObject x="77" y="52" width="30" height="34" overflow="visible"><div class="flab"><span class="ov">B</span></div></foreignObject>
            <foreignObject x="221" y="61" width="76" height="34" overflow="visible"><div class="flab">X = <span class="ov">A</span>·<span class="ov">B</span>·C</div></foreignObject>
          </svg>
        </figure>
        <p class="prose">সত্যক সারণিতে প্রমাণ (৪র্থ পরীক্ষা): শেষ দুই কলাম প্রতিটি সারিতে সমান।</p>
        <table class="truth"><thead><tr><th>A</th><th>B</th><th>C</th><th><span class="ov">A+B+<span class="ov">C</span></span></th><th><span class="ov">B</span>C</th><th>বাম</th><th><span class="ov">A</span>·<span class="ov">B</span>·C</th></tr></thead><tbody>
          <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
          <tr><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
          <tr><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
        </tbody></table>
        <h4 class="sub-h" id="pp5-3o"><span>৫ম · ২০০৮</span><span>প্রশ্ন ৩ (অথবা) ক: দুটি সরলীকরণ</span></h4>
        <p class="prose">চাওয়া হয়েছে শুধু বুলিয়ান অ্যালজেবরায় সরল করা, সার্কিট নয়।</p>
        <p class="prose">(i) <span class="ov">(M + <span class="ov">N</span>)(<span class="ov">M</span> + N)</span></p>
        <ul class="eqs">
          <li><span>Y = <span class="ov">(M + <span class="ov">N</span>)(<span class="ov">M</span> + N)</span></span><small>প্রশ্নের সমীকরণ</small></li>
          <li><span>= <span class="ov">M + <span class="ov">N</span></span> + <span class="ov"><span class="ov">M</span> + N</span></span><small>ডি মরগান: <span class="ov">X·Z</span> = <span class="ov">X</span> + <span class="ov">Z</span></small></li>
          <li><span>= <span class="ov">M</span>·N + M·<span class="ov">N</span></span><small>ডি মরগান, দ্বৈত পূরক</small></li>
        </ul>
        <p class="final"><b>ফল</b>Y = <span class="ov">M</span>N + M<span class="ov">N</span> = M ⊕ N (XOR)</p>
        <p class="prose">(ii) <span class="ov">(<span class="ov">A</span> + C)(B + <span class="ov">D</span>)</span></p>
        <ul class="eqs">
          <li><span>Y = <span class="ov">(<span class="ov">A</span> + C)(B + <span class="ov">D</span>)</span></span><small>প্রশ্নের সমীকরণ</small></li>
          <li><span>= <span class="ov"><span class="ov">A</span> + C</span> + <span class="ov">B + <span class="ov">D</span></span></span><small>ডি মরগান: <span class="ov">X·Z</span> = <span class="ov">X</span> + <span class="ov">Z</span></small></li>
          <li><span>= A·<span class="ov">C</span> + <span class="ov">B</span>·D</span><small>ডি মরগান, দ্বৈত পূরক</small></li>
        </ul>
        <p class="final"><b>ফল</b>Y = A<span class="ov">C</span> + <span class="ov">B</span>D</p>
        <h4 class="sub-h" id="pp5-4"><span>৫ম · ২০০৮</span><span>প্রশ্ন ৪: প্রমাণ <span class="ov">A</span>BC + A<span class="ov">B</span>C + AB<span class="ov">C</span> + ABC = AB + BC + CA</span></h4>
        <p class="prose">হুবহু ১৮তম পরীক্ষার ১০ নম্বর প্রশ্নের রাশি; ধাপে ধাপে প্রমাণ ওপরের <a href="#/note/logic-gates/ex-majority">৬.২-এ</a>। প্রমাণের প্রশ্নে শেষ লাইনে লিখুন: “বাম পক্ষ = ডান পক্ষ, প্রমাণিত।”</p>
        <h4 class="sub-h" id="pp4-4"><span>৪র্থ · ২০০৭</span><span>প্রশ্ন ৪: <span class="ov">A + <span class="ov">A</span>·<span class="ov">B</span></span>·AB + C</span></h4>
        <p class="prose">চাওয়া হয়েছে: বর্তনী। ছাপায় বন্ধনী মেলে না; বার A + <span class="ov">A</span>·<span class="ov">B</span>-এর ওপর ধরে রাশিটি Y = <span class="ov">A + <span class="ov">A</span>·<span class="ov">B</span></span>·AB + C পড়া হলো। বারসহ OR-এর জায়গায় একটি NOR গেট বসানো হয়েছে।</p>
        <figure class="fig wide labels">
          <svg viewBox="0 0 460 205" role="img" aria-label="লজিক সার্কিট: A ও B দুটি NOT দিয়ে উল্টে একটি AND-এ; সেই ফল ও A একটি NOR-এ; NOR-এর ফল, A ও B একটি তিন-ইনপুট AND-এ; তার ফল ও C একটি OR-এ গিয়ে Y দেয়।">
            <text x="26" y="12" text-anchor="start">A</text>
            <text x="42" y="12" text-anchor="start">B</text>
            <text x="58" y="12" text-anchor="start">C</text>
            <path class="w" d="M30 18V110M46 18V127M62 18V170M30 44H90M46 84H90M30 20H236.3M30 110H311M46 127H311M62 170H380M124 44H136V54H151M124 84H136V74H151M188 64H206V40H236.3M276 30H292V93H311M355 110H396.3M380 170V130H396.3M428 120H448"/>
            <path class="gb" d="M90 32L116 44L90 56Z"/><circle class="gb" cx="120" cy="44" r="4"/>
            <path class="gb" d="M90 72L116 84L90 96Z"/><circle class="gb" cx="120" cy="84" r="4"/>
            <path class="gb" d="M150 44H168A20 20 0 0 1 168 84H150Z"/>
            <path class="gb" d="M230 10Q244 30 230 50Q255.8 50 268 30Q255.8 10 230 10Z"/><circle class="gb" cx="272" cy="30" r="4"/>
            <path class="gb" d="M310 83H328A27 27 0 0 1 328 137H310Z"/>
            <path class="gb" d="M390 100Q404 120 390 140Q415.8 140 428 120Q415.8 100 390 100Z"/>
            <circle class="j" cx="30" cy="44" r="2.6"/>
            <circle class="j" cx="46" cy="84" r="2.6"/>
            <circle class="j" cx="30" cy="20" r="2.6"/>
            <circle class="j" cx="30" cy="110" r="2.6"/>
            <circle class="j" cx="46" cy="127" r="2.6"/>
            <circle class="j" cx="62" cy="170" r="2.6"/>
            <foreignObject x="126" y="24" width="30" height="34" overflow="visible"><div class="flab"><span class="ov">A</span></div></foreignObject>
            <foreignObject x="126" y="88" width="30" height="34" overflow="visible"><div class="flab"><span class="ov">B</span></div></foreignObject>
            <foreignObject x="190" y="68" width="40" height="34" overflow="visible"><div class="flab"><span class="ov">A</span>·<span class="ov">B</span></div></foreignObject>
            <foreignObject x="280" y="0" width="70" height="34" overflow="visible"><div class="flab"><span class="ov">A+<span class="ov">A</span>·<span class="ov">B</span></span></div></foreignObject>
            <foreignObject x="296" y="140" width="80" height="34" overflow="visible"><div class="flab"><span class="ov">A+<span class="ov">A</span>·<span class="ov">B</span></span>·AB</div></foreignObject>
            <foreignObject x="432" y="100" width="20" height="34" overflow="visible"><div class="flab">Y</div></foreignObject>
            <foreignObject x="250" y="176" width="160" height="34" overflow="visible"><div class="flab">Y = <span class="ov">A+<span class="ov">A</span>·<span class="ov">B</span></span>·AB + C</div></foreignObject>
          </svg>
        </figure>
        <ul class="eqs">
          <li><span>Y = <span class="ov">A + <span class="ov">A</span>·<span class="ov">B</span></span>·AB + C</span><small>সার্কিটের আউটপুট</small></li>
          <li><span>= <span class="ov">A</span>·<span class="ov"><span class="ov">A</span>·<span class="ov">B</span></span>·AB + C</span><small>ডি মরগান: <span class="ov">X + Z</span> = <span class="ov">X</span>·<span class="ov">Z</span></small></li>
          <li><span>= (<span class="ov">A</span>·A)·<span class="ov"><span class="ov">A</span>·<span class="ov">B</span></span>·B + C</span><small>বিনিময়</small></li>
          <li><span>= 0 + C = C</span><small>X·<span class="ov">X</span> = 0</small></li>
        </ul>
        <p class="final"><b>সরল রূপ</b>Y = C</p>
        <p class="prose">সার্কিটের বাঁয়ের পুরো অংশের ফল সবসময় ০, কারণ সেখানে <span class="ov">A</span> আর A একসঙ্গে গুণ হয়। তাই আউটপুট শুধু C; সরল রূপে কোনো গেটই লাগে না, C-ই আউটপুট।</p>
        <h4 class="sub-h" id="pp3-4"><span>৩য় · ২০০৬</span><span>প্রশ্ন ৪: (A + B)<span class="ov">C</span> + <span class="ov">A</span>C</span></h4>
        <p class="prose">চাওয়া হয়েছে: লজিক গেট দিয়ে বাস্তবায়ন। লাগে দুটি NOT, দুটি OR আর দুটি AND।</p>
        <figure class="fig eqfig">
          <svg viewBox="0 0 410 160" width="471" role="img" aria-label="লজিক সার্কিট: A ও B একটি OR-এ, তার ফল ও NOT দিয়ে উল্টানো C একটি AND-এ; NOT দিয়ে উল্টানো A ও C আরেকটি AND-এ; দুই AND-এর ফল শেষ OR-এ গিয়ে Y দেয়।">
            <text x="26" y="12" text-anchor="start">A</text>
            <text x="42" y="12" text-anchor="start">B</text>
            <text x="58" y="12" text-anchor="start">C</text>
            <path class="w" d="M30 18V120M46 18V40M62 18V140M30 20H116.3M46 40H116.3M62 80H110M30 120H110M62 140H201M148 30H170V40H201M144 80H170V60H201M144 120H201M238 50H260V80H296.3M238 130H260V100H296.3M328 90H350"/>
            <path class="gb" d="M110 10Q124 30 110 50Q135.8 50 148 30Q135.8 10 110 10Z"/>
            <path class="gb" d="M110 68L136 80L110 92Z"/><circle class="gb" cx="140" cy="80" r="4"/>
            <path class="gb" d="M200 30H218A20 20 0 0 1 218 70H200Z"/>
            <path class="gb" d="M110 108L136 120L110 132Z"/><circle class="gb" cx="140" cy="120" r="4"/>
            <path class="gb" d="M200 110H218A20 20 0 0 1 218 150H200Z"/>
            <path class="gb" d="M290 70Q304 90 290 110Q315.8 110 328 90Q315.8 70 290 70Z"/>
            <circle class="j" cx="30" cy="20" r="2.6"/>
            <circle class="j" cx="46" cy="40" r="2.6"/>
            <circle class="j" cx="62" cy="80" r="2.6"/>
            <circle class="j" cx="30" cy="120" r="2.6"/>
            <circle class="j" cx="62" cy="140" r="2.6"/>
            <foreignObject x="150" y="12" width="40" height="34" overflow="visible"><div class="flab">A+B</div></foreignObject>
            <foreignObject x="147" y="62" width="30" height="34" overflow="visible"><div class="flab"><span class="ov">C</span></div></foreignObject>
            <foreignObject x="240" y="32" width="60" height="34" overflow="visible"><div class="flab">(A+B)<span class="ov">C</span></div></foreignObject>
            <foreignObject x="147" y="102" width="30" height="34" overflow="visible"><div class="flab"><span class="ov">A</span></div></foreignObject>
            <foreignObject x="242" y="136" width="30" height="34" overflow="visible"><div class="flab"><span class="ov">A</span>C</div></foreignObject>
            <foreignObject x="334" y="72" width="20" height="34" overflow="visible"><div class="flab">Y</div></foreignObject>
            <foreignObject x="290" y="116" width="118" height="34" overflow="visible"><div class="flab">Y = (A+B)<span class="ov">C</span> + <span class="ov">A</span>C</div></foreignObject>
          </svg>
        </figure>
        <ul class="eqs">
          <li><span>Y = (A + B)<span class="ov">C</span> + <span class="ov">A</span>C</span><small>সার্কিটের আউটপুট</small></li>
          <li><span>= A<span class="ov">C</span> + B<span class="ov">C</span> + <span class="ov">A</span>C</span><small>গুণ ছড়িয়ে</small></li>
          <li><span>= (A ⊕ C) + B<span class="ov">C</span></span><small>A<span class="ov">C</span> + <span class="ov">A</span>C = A ⊕ C</small></li>
        </ul>
        <p class="final"><b>বিস্তৃত রূপ</b>Y = A<span class="ov">C</span> + B<span class="ov">C</span> + <span class="ov">A</span>C</p>
        <p class="prose">এর চেয়ে কম পদে লেখা যায় না; প্রশ্নে শুধু বাস্তবায়ন চাওয়া, তাই সার্কিটটিই মূল উত্তর।</p>

        <h3 class="sub"><span>৬.৬</span>হাফ অ্যাডার ও ফুল অ্যাডার</h3>
        <p class="prose">কম্পিউটার যোগ করে লজিক গেট দিয়ে তৈরি যোগকারী বর্তনীতে। দুটি বিট যোগ করলে দুটি ফল আসে: যোগফল (Sum, S) আর হাতে থাকা (Carry)। যেমন বাইনারিতে 1 + 1 = 10: যোগফল 0, হাতে 1।</p>
        <h4 class="sub-h" id="half-adder"><span>ক</span>হাফ অ্যাডার (অর্ধযোগকারী)</h4>
        <p class="prose">দুটি বিট A ও B যোগ করে। যোগফল ১ হয় ঠিক একটি ইনপুট ১ হলে, তাই S = A ⊕ B; হাতে ১ থাকে দুটিই ১ হলে, তাই C = A·B। লাগে একটি XOR আর একটি AND।</p>
        <figure class="fig eqfig">
          <svg viewBox="0 0 250 140" width="288" role="img" aria-label="হাফ অ্যাডার: A ও B একটি XOR গেটে গিয়ে যোগফল S দেয়, আর একটি AND গেটে গিয়ে ক্যারি C দেয়।">
            <text x="26" y="12" text-anchor="start">A</text>
            <text x="42" y="12" text-anchor="start">B</text>
            <path class="w" d="M30 18V100M46 18V120M30 30H99.3M46 50H99.3M30 100H101M46 120H101M138 40H160M138 110H160"/>
            <path class="w" d="M93 20Q107 40 93 60"/><path class="gb" d="M100 20Q114 40 100 60Q125.8 60 138 40Q125.8 20 100 20Z"/>
            <path class="gb" d="M100 90H118A20 20 0 0 1 118 130H100Z"/>
            <circle class="j" cx="30" cy="30" r="2.6"/>
            <circle class="j" cx="46" cy="50" r="2.6"/>
            <circle class="j" cx="30" cy="100" r="2.6"/>
            <circle class="j" cx="46" cy="120" r="2.6"/>
            <foreignObject x="166" y="31" width="80" height="34" overflow="visible"><div class="flab">S = A⊕B</div></foreignObject>
            <foreignObject x="166" y="101" width="80" height="34" overflow="visible"><div class="flab">C = AB</div></foreignObject>
          </svg>
        </figure>
        <table class="truth"><thead><tr><th>A</th><th>B</th><th>S</th><th>C</th></tr></thead><tbody>
          <tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>0</td><td>1</td><td>1</td><td>0</td></tr>
          <tr><td>1</td><td>0</td><td>1</td><td>0</td></tr>
          <tr><td>1</td><td>1</td><td>0</td><td>1</td></tr>
        </tbody></table>
        <p class="prose">শেষ সারিতে 1 + 1 = 10: S = 0, C = 1। হাফ অ্যাডার আগের ঘর থেকে আসা ক্যারি নিতে পারে না, তাই একে “অর্ধেক” যোগকারী বলে।</p>
        <h4 class="sub-h" id="full-adder"><span>খ</span>ফুল অ্যাডার (পূর্ণযোগকারী)</h4>
        <p class="prose">তিনটি বিট যোগ করে: A, B আর আগের ঘর থেকে আসা ক্যারি C<sub>in</sub>। দুটি হাফ অ্যাডার আর একটি OR দিয়ে তৈরি: প্রথমটি A ও B যোগ করে, দ্বিতীয়টি তার যোগফলের সঙ্গে C<sub>in</sub> যোগ করে, আর দুটির ক্যারি OR-এ গিয়ে C<sub>out</sub> হয়। মোট দুটি XOR, দুটি AND আর একটি OR।</p>
        <figure class="fig wide labels">
          <svg viewBox="0 0 455 185" role="img" aria-label="ফুল অ্যাডার: A ও B একটি XOR-এ; তার ফল ও C-in দ্বিতীয় XOR-এ গিয়ে যোগফল S দেয়; প্রথম XOR-এর ফল ও C-in একটি AND-এ, A ও B আরেকটি AND-এ; দুই AND-এর ফল একটি OR-এ গিয়ে C-out দেয়।">
            <text x="26" y="12" text-anchor="start">A</text>
            <text x="42" y="12" text-anchor="start">B</text>
            <path class="w" d="M30 18V150M46 18V170M62 18V120M30 20H99.3M46 40H99.3M62 70H209.3M62 120H211M30 150H101M46 170H101M138 30H170V100H211M170 50H209.3M248 60H270M248 110H275V125H306.3M138 160H275V145H306.3M338 135H360"/>
            <path class="w" d="M93 10Q107 30 93 50"/><path class="gb" d="M100 10Q114 30 100 50Q125.8 50 138 30Q125.8 10 100 10Z"/>
            <path class="w" d="M203 40Q217 60 203 80"/><path class="gb" d="M210 40Q224 60 210 80Q235.8 80 248 60Q235.8 40 210 40Z"/>
            <path class="gb" d="M210 90H228A20 20 0 0 1 228 130H210Z"/>
            <path class="gb" d="M100 140H118A20 20 0 0 1 118 180H100Z"/>
            <path class="gb" d="M300 115Q314 135 300 155Q325.8 155 338 135Q325.8 115 300 115Z"/>
            <circle class="j" cx="30" cy="20" r="2.6"/>
            <circle class="j" cx="46" cy="40" r="2.6"/>
            <circle class="j" cx="62" cy="70" r="2.6"/>
            <circle class="j" cx="62" cy="120" r="2.6"/>
            <circle class="j" cx="30" cy="150" r="2.6"/>
            <circle class="j" cx="46" cy="170" r="2.6"/>
            <circle class="j" cx="170" cy="50" r="2.6"/>
            <foreignObject x="55" y="0" width="40" height="34" overflow="visible"><div class="flab">C<sub>in</sub></div></foreignObject>
            <foreignObject x="140" y="12" width="40" height="34" overflow="visible"><div class="flab">A⊕B</div></foreignObject>
            <foreignObject x="276" y="51" width="110" height="34" overflow="visible"><div class="flab">S = A⊕B⊕C<sub>in</sub></div></foreignObject>
            <foreignObject x="250" y="90" width="70" height="34" overflow="visible"><div class="flab">C<sub>in</sub>(A⊕B)</div></foreignObject>
            <foreignObject x="141" y="164" width="30" height="34" overflow="visible"><div class="flab">AB</div></foreignObject>
            <foreignObject x="342" y="116" width="40" height="34" overflow="visible"><div class="flab">C<sub>out</sub></div></foreignObject>
            <foreignObject x="290" y="158" width="160" height="34" overflow="visible"><div class="flab">C<sub>out</sub> = AB + C<sub>in</sub>(A⊕B)</div></foreignObject>
          </svg>
        </figure>
        <table class="truth"><thead><tr><th>A</th><th>B</th><th>C<sub>in</sub></th><th>S</th><th>C<sub>out</sub></th></tr></thead><tbody>
          <tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
          <tr><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
          <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
          <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>
          <tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td></tr>
          <tr><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td></tr>
          <tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
        </tbody></table>
        <p class="prose">S = ১ হয় বিজোড় সংখ্যক ইনপুট ১ হলে; C<sub>out</sub> = ১ হয় অন্তত দুটি ইনপুট ১ হলে। তাই C<sub>out</sub> = AB + BC<sub>in</sub> + C<sub>in</sub>A, যা ৬.২-এর সংখ্যাগরিষ্ঠ রাশি AB + BC + CA-ই (C-এর জায়গায় C<sub>in</sub>)।</p>
        <p class="prose">কম্পিউটারের ALU-র যোগের অংশে এমন ফুল অ্যাডার পরপর জোড়া থাকে: ৮ বিট যোগে ৮টি, প্রতিটির C<sub>out</sub> পরেরটির C<sub>in</sub>। ALU-র কাজ দেখুন <a href="#/note/computer-basics/org">অধ্যায় ১ · সংগঠন, CPU ও ALU</a> অংশে।</p>
        <p class="tip"><b>MCQ-তে মনে রাখুন:</b> হাফ অ্যাডারে একটি XOR ও একটি AND; ফুল অ্যাডারে দুটি হাফ অ্যাডার ও একটি OR। যোগফলের জন্য XOR, ক্যারির জন্য AND।</p>


        <h3 class="sub"><span>৬.৭</span>এনকোডার, ডিকোডার ও ফ্লিপ-ফ্লপ</h3>
        <p class="prose">লিখিত প্রশ্নে আসেনি, তবে MCQ-তে নিয়মিত আসে।</p>
        <table class="rt cmp">
          <thead><tr><th>বর্তনী</th><th>কাজ</th><th>ইনপুট ও আউটপুট</th></tr></thead>
          <tbody>
            <tr><td>এনকোডার</td><td>দশমিক অঙ্ক বা বর্ণকে বাইনারি কোডে রূপান্তর করে; OR গেট দিয়ে তৈরি</td><td>২<sup>n</sup>টি ইনপুট, nটি আউটপুট (১৬ থেকে ৪, ৮ থেকে ৩)</td></tr>
            <tr><td>ডিকোডার</td><td>এনকোডারের উল্টো: বাইনারি কোডকে চেনা রূপে ফেরায়</td><td>nটি ইনপুট, ২<sup>n</sup>টি আউটপুট (৪ থেকে ১৬, ৫ থেকে ৩২)</td></tr>
            <tr><td>ফ্লিপ-ফ্লপ</td><td>এক বিট মনে রাখে; ডিজিটাল সিস্টেমের মৌলিক স্মৃতি উপাদান</td><td>আউটপুট ০ বা ১, নতুন সংকেত না আসা পর্যন্ত থাকে</td></tr>
            <tr><td>শিফট রেজিস্টার</td><td>পরপর জোড়া ফ্লিপ-ফ্লপ; প্রতিটি ক্লক পালসে বিট এক ঘর সরে</td><td>এক ফ্লিপ-ফ্লপের আউটপুট পরেরটির ইনপুট</td></tr>
          </tbody>
        </table>

        <div data-prev="circ"></div>
        <p class="practice"><button class="btn line sm" type="button" data-practice="43,46,50-55,57,60,63,65,67,70-72,96,120-129" data-name="সরলীকরণ ও সার্কিট">এই অংশের MCQ অনুশীলন <span></span></button><a href="#/mcq/ch04/q43">তালিকায় পড়ুন →</a></p>
      </div>
      <aside class="side">
        <p><b>নম্বর পেতে</b>সরল রূপটি আলাদা করে বক্সে লিখুন, তারপর চিত্র। চিত্রে প্রতিটি গেটের নাম আর প্রতিটি তারের রাশি লিখলে চিত্রের পুরো নম্বর মেলে।</p>
        <p><b>বারবার এসেছে</b>১৬টির মধ্যে ১৪টি পরীক্ষায়: এই অধ্যায়ের সবচেয়ে নিশ্চিত প্রশ্ন।</p>
      </aside>
    </section>

    <section class="blk" id="mistakes">
      <p class="blk-no">শেষে</p>
      <div class="body">
        <h2>যেসব ভুল হয়</h2>
        <div class="fixes">
          <div class="fix"><p class="was">বুলিয়ান যোগে 1 + 1 = 10</p><p class="is">বুলিয়ান যোগে 1 + 1 = 1</p><p class="why">10 হয় বাইনারি যোগে; বুলিয়ান যোগ মানে OR।</p></div>
          <div class="fix"><p class="was"><span class="ov">A + B</span> = <span class="ov">A</span> + <span class="ov">B</span></p><p class="is"><span class="ov">A + B</span> = <span class="ov">A</span>·<span class="ov">B</span></p><p class="why">বার ভাঙলে চিহ্নও বদলায় (ডি মরগান)।</p></div>
          <div class="fix"><p class="was"><span class="ov">AB</span> = <span class="ov">A</span>·<span class="ov">B</span></p><p class="is"><span class="ov">AB</span> = <span class="ov">A</span> + <span class="ov">B</span></p><p class="why">A = 1, B = 0 বসান: বাঁ পাশ ১, কিন্তু <span class="ov">A</span>·<span class="ov">B</span> = ০।</p></div>
          <div class="fix"><p class="was">NOR একটি মৌলিক গেট</p><p class="is">NOR যৌগিক গেট (OR + NOT), তবে সার্বজনীন</p><p class="why">মৌলিক গেট মাত্র তিনটি: AND, OR ও NOT।</p></div>
          <div class="fix"><p class="was">তিন চলকে সত্যক সারণির সারি ৬টি</p><p class="is">২<sup>৩</sup> = ৮টি</p><p class="why">সারির সংখ্যা ২<sup>n</sup>, ২n নয়।</p></div>
          <div class="fix"><p class="was">A + AB = AB</p><p class="is">A + AB = A</p><p class="why">A(1 + B) = A·1 = A (শোষণ সূত্র)।</p></div>
          <div class="fix"><p class="was">XOR-এ দুই ইনপুট ১ হলে আউটপুট ১</p><p class="is">দুটিই ১ হলে আউটপুট ০</p><p class="why">XOR ১ দেয় শুধু ইনপুট ভিন্ন হলে।</p></div>
          <div class="fix"><p class="was">AB + <span class="ov">A</span>·<span class="ov">B</span> = A ⊕ B</p><p class="is">AB + <span class="ov">A</span>·<span class="ov">B</span> = A ⊙ B (XNOR)</p><p class="why">⊕ হলো XOR-এর চিহ্ন; XNOR লিখতে ⊙, বা A ⊕ B-এর ওপর বার।</p></div>
        </div>
      </div>
    </section>

    <section class="blk" id="practice">
      <p class="blk-no">অনুশীলন</p>
      <div class="body">
        <h2>এবার নিজে করুন</h2>
        <p class="prose">এই অধ্যায়ের সব MCQ উত্তর ও ব্যাখ্যাসহ পড়ুন, অথবা সময় ধরে পরীক্ষা দিন। লিখিত অংশের জন্য প্রতিদিন ওপরের তালিকা থেকে একটি সমীকরণ সরল করে তার সার্কিট আঁকুন, আর মৌলিক ও সার্বজনীন গেটের চিত্রগুলো না দেখে আঁকার অভ্যাস করুন।</p>
        <p class="note-acts"><a class="btn" href="#/mcq/ch04">অধ্যায়ের MCQ পড়ুন <span aria-hidden="true">→</span></a><a class="btn line" href="#/setup/ch04">এই অধ্যায়ে পরীক্ষা দিন</a></p>
        <ul class="note-links">
          <li><a href="#/written/18-school/q4">মৌলিক গেট, NAND ও NOR-এর সার্বজনীনতা</a><span>১৮তম লিখিত · প্রশ্ন ৪</span></li>
          <li><a href="#/written/18-school/q10">সমীকরণ সরল করে NAND ও NOR দিয়ে বাস্তবায়ন</a><span>১৮তম লিখিত · প্রশ্ন ১০</span></li>
          <li><a href="#/written/17-school/q5">মৌলিক গেট ও সত্যক সারণি; NOR দিয়ে মৌলিক গেট</a><span>১৭তম লিখিত · প্রশ্ন ৫</span></li>
          <li><a href="#/written/16-school/q5">ডি মরগানের সূত্রের প্রমাণ; মৌলিক গেট দিয়ে XOR</a><span>১৬তম লিখিত · প্রশ্ন ৫</span></li>
        </ul>
      </div>
    </section>

  </div>
</article>
`;
