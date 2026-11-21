/* ICT মাস্টার. Plain JavaScript with no build step; open index.html directly or host the folder.
   The part of the address after "#" picks the screen:
     #/                      home (chapters, past papers, written papers)
     #/mcq/<chapter>[/q<n>]  a chapter's MCQs with answers, optionally scrolled to one question
     #/note/<id>[/<section>] a chapter's note, optionally scrolled to one section
     #/written/<paper>[/q<n>] a written paper with model answers
     #/setup[/<chapter>]     build an exam, optionally on one chapter
     #/exam                  the exam itself
     #/result                the last result
   MCQs come from mcq/*.js; papers, written answers and the sample note from demo-data.js. */
"use strict";

const D = window.KHATA_DEMO;
const view = document.getElementById("view");
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];

const BN = "০১২৩৪৫৬৭৮৯";
const bn = v => String(v).replace(/\d/g, d => BN[d]);
const pad2 = n => String(n).padStart(2, "0");
const LETTER = ["ক", "খ", "গ", "ঘ"];
const ORD = { 1: "ম", 2: "য়", 3: "য়", 4: "র্থ", 5: "ম", 6: "ষ্ঠ", 7: "ম", 8: "ম", 9: "ম", 10: "ম" };
const ord = n => bn(n) + (ORD[n] || "তম");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
/* Chapter-wise MCQs. Each chapter is one file in mcq/ that adds itself to window.ICT_MCQ (see mcq/ch01.js).
   Every question gets an id "<chapter>-<number in the chapter>"; exams, results and the practice record keep ids,
   so adding chapters later never mixes up questions. The answer letter (ক–ঘ) becomes an option index. */
const CH = (window.ICT_MCQ || []).slice().sort((x, y) => x.no - y.no);
const QS = CH.flatMap(ch => ch.questions.map((q, i) =>
  ({ ...q, id: `${ch.id}-${i + 1}`, n: i + 1, c: ch.id, a: typeof q.a === "string" ? LETTER.indexOf(q.a) : q.a })));
const QBY = Object.fromEntries(QS.map(q => [q.id, q]));
const chapterOf = id => CH.find(c => c.id === id);
// Every chapter of the syllabus (mcq/chapters.js), in order, whether or not its questions are in yet.
// A chapter file missing from that list still counts.
const allChapters = () => {
  const list = (window.ICT_CHAPTERS || []).slice();
  CH.forEach(ch => { if (!list.some(c => c.id === ch.id)) list.push(ch); });
  return list.sort((x, y) => x.no - y.no);
};
const inExam = q => !q.noExam;                     // a question with two correct options is read, not tested
/* A digital signal drawn as a square wave, one step per bit (1 = high), for questions that ask to read one. */
const wave = bits => {
  const w = 26, hi = 6, lo = 30; let d = "", y = null;
  [...bits].forEach((b, i) => { const ny = b === "1" ? hi : lo; d += y === null ? `M${4} ${ny}` : ny !== y ? `V${ny}` : ""; d += `H${4 + (i + 1) * w}`; y = ny; });
  return `<svg class="wave" viewBox="0 0 ${bits.length * w + 8} 36" width="${bits.length * w + 8}" height="36" role="img" aria-label="${bits.length} ধাপের একটি ডিজিটাল সিগন্যালের চিত্র"><path d="M4 30.5H${4 + bits.length * w}" class="wave-base"/><path d="${d}"/></svg>`;
};
const qText = q => q.q + (q.t ? ` <span class="xt">${esc(q.t)}</span>` : "");
const explain = q => q.x + (q.warn ? ` <span class="warn"><b>মতভেদ</b>${q.warn}</span>` : "");
const marksText = x => (x < 0 ? "−" : "") + bn(Number.isInteger(x) ? Math.abs(x) : Math.abs(x).toFixed(2));
const CHECK = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4.5 10.5l3.5 3.5 7.5-8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* Saved in this browser only. Every key starts with "khata_" so it never mixes with the other sites on the same address. */
const store = {
  get(k, fallback) { try { const v = localStorage.getItem("khata_" + k); return v === null ? fallback : JSON.parse(v); } catch (e) { return fallback; } },
  set(k, v) { try { localStorage.setItem("khata_" + k, JSON.stringify(v)); } catch (e) {} },
  del(k) { try { localStorage.removeItem("khata_" + k); } catch (e) {} }
};

function mount(id) { view.replaceChildren(document.getElementById(id).content.cloneNode(true)); }

/* A yes/no box in the site's own style, instead of the browser's grey confirm box
   (which looks out of place and behaves unevenly inside the Messenger and Facebook browsers).
   ask("…?", "Yes label", "No label") gives a promise of true or false. Esc, the backdrop and the No button all mean false. */
let asking = null;
function ask(message, yes, no = "ফিরে যান") {
  if (asking) asking(false);
  const box = $("#modal"), back = document.activeElement;
  $("#modalMsg").textContent = message; $("#modalYes").textContent = yes; $("#modalNo").textContent = no;
  box.hidden = false;
  setTimeout(() => $("#modalYes").focus(), 30);
  return new Promise(resolve => {
    asking = answer => { box.hidden = true; asking = null; if (back && back.isConnected && back.focus) back.focus(); resolve(answer); };
  });
}
$("#modalYes").onclick = () => asking && asking(true);
$("#modalNo").onclick = () => asking && asking(false);
$("#modal").addEventListener("click", e => { if (e.target.id === "modal" && asking) asking(false); });
document.addEventListener("keydown", e => {
  if (!asking) return;
  if (e.key === "Escape") { e.preventDefault(); asking(false); }
  else if (e.key === "Tab") {                       // keep the keyboard inside the box
    const b = [$("#modalNo"), $("#modalYes")], i = b.indexOf(document.activeElement);
    e.preventDefault(); b[(i + 1) % 2].focus();        // two buttons: Tab and Shift+Tab both move to the other one
  }
}, true);

let toastTimer = 0;
function toast(msg, ms = 2800) {
  const t = $("#toast");
  t.textContent = msg; t.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => (t.hidden = true), ms);
}

/* C code colouring: keywords, strings, comments, preprocessor lines. */
function highlight(code) {
  const re = /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|("(?:\\.|[^"\\])*")|(#\w+)|\b(int|void|return|char|float|double|for|while|if|else|unsigned|long)\b/g;
  let out = "", last = 0, m;
  while ((m = re.exec(code))) {
    out += esc(code.slice(last, m.index));
    out += `<span class="${m[1] ? "c" : m[2] ? "s" : m[3] ? "p" : "k"}">${esc(m[0])}</span>`;
    last = re.lastIndex;
  }
  return out + esc(code.slice(last));
}



/* ================= HOME ================= */
function home() {
  mount("t-home");
  document.title = "ICT মাস্টার · শিক্ষক নিবন্ধন প্রস্তুতি";

  // Every chapter of the syllabus, in order (mcq/chapters.js). An added chapter links to its MCQs, with its
  // question count and a dot for how much of it has come up in exams; the rest show "শিগগির".
  const stats = getStats();
  const list = allChapters();
  const left = list.length - list.filter(c => chapterOf(c.id)).length;
  $("#tocLede").textContent = `শিক্ষক নিবন্ধন, সহকারী শিক্ষক (আইসিটি), বিষয় কোড ৩১৩-এর সিলেবাস ধরে ${bn(list.length)}টি অধ্যায়। ` +
    (CH.length ? `এখন পর্যন্ত ${bn(CH.length)}টি অধ্যায়ে মোট ${bn(QS.length)}টি প্রশ্ন, উত্তর ও ব্যাখ্যাসহ${left ? `; বাকি ${bn(left)}টি একে একে যোগ হবে` : ""}।` : "প্রশ্ন একে একে যোগ হবে।");
  const row = c => {
    const ch = chapterOf(c.id), name = `<span class="t">${bn(c.no)}. ${esc(c.name)}${c.topics ? `<small>${esc(c.topics)}</small>` : ""}</span><span class="lead" aria-hidden="true"></span>`;
    if (!ch) return `<li class="soon"><div class="row"><i class="dot" aria-hidden="true"></i>${name}<span class="c">${c.note ? "MCQ শিগগির" : "শিগগির"}</span></div>${c.note ? `<a class="nl" href="${c.note}">নোট</a>` : ""}</li>`;
    const qs = QS.filter(q => q.c === ch.id), tested = qs.filter(inExam), seen = tested.filter(q => stats[q.id]).length;
    return `<li><a class="row" href="#/mcq/${ch.id}"><i class="dot ${seen === 0 ? "" : seen === tested.length ? "full" : "half"}" aria-hidden="true"></i>` +
      `${name}<span class="c">${bn(qs.length)} প্রশ্ন</span></a>${ch.note ? `<a class="nl" href="${ch.note}">নোট</a>` : ""}</li>`;
  };
  // Two columns on wide screens: the first half down the left, the rest down the right.
  const half = Math.ceil(list.length / 2);
  $("#toc").innerHTML = list.length ? `<ol>${list.slice(0, half).map(row).join("")}</ol><ol start="${half + 1}">${list.slice(half).map(row).join("")}</ol>` : "";

  // Written papers (school level only), newest first: one row per exam, with how many answers are written so far.
  const W = D.written || {}, keys = Object.keys(W).sort((a, b) => parseInt(b) - parseInt(a));
  $("#wledger").innerHTML = `<thead><tr><th>পরীক্ষা</th><th>প্রশ্নপত্র</th><th>নমুনা উত্তর</th></tr></thead><tbody>` +
    keys.map(k => {
      const w = W[k], ready = w.questions.filter(q => writtenAnswer(k, q.n)).length, n = w.questions.length;
      return `<tr><th>${ord(parseInt(k))}<small>${bn(w.year)}</small></th>` +
        `<td><a href="#/written/${k}">${esc(w.subject)}</a><span class="wl-n">${bn(n)}টি প্রশ্ন · কোড ${w.code}</span></td>` +
        `<td class="wl-st">${ready ? `<span class="wl-ok">${ready === n ? "তৈরি" : `${bn(ready)}/${bn(n)}`}</span>` : `<span class="na">আসছে</span>`}</td></tr>`;
    }).join("") + "</tbody>";
  // A click anywhere in a row opens that paper. The title stays the row's one real link, for keyboards and screen readers;
  // a click that ends a text selection doesn't navigate.
  $("#wledger").onclick = e => {
    const a = e.target.closest("tbody tr")?.querySelector("a");
    if (!a || e.target.closest("a") || String(getSelection())) return;
    location.hash = a.getAttribute("href");
  };
}


/* ================= NOTE ================= */
/* Each chapter's note is a template in index.html; this table says which. */
const NOTES = {
  "computer-basics": { tpl: "t-note-ch01", ch: "ch01" },
  "number-system": { tpl: "t-note", ch: "ch02" },
  "data-representation": { tpl: "t-note-ch03", ch: "ch03" },
  "logic-gates": { tpl: "t-note-ch04", ch: "ch04" }
};

function note(id, section) {
  const key = NOTES[id] ? id : "number-system", n = NOTES[key];
  // A chapter can have its note before its MCQs; its name then comes from the chapter list.
  const ch = chapterOf(n.ch) || (window.ICT_CHAPTERS || []).find(c => c.id === n.ch) || { name: "নোট" };
  mount(n.tpl);
  document.title = `${ch.name} · ICT মাস্টার`;

  // 0–15 in all four forms (number-system note).
  if ($("#g16")) $("#g16").innerHTML = Array.from({ length: 16 }, (_, k) =>
    `<div><b>${bn(k)}</b><code>${k.toString(2).padStart(4, "0")}</code><code>${k.toString(8)}</code><code class="hx">${k.toString(16).toUpperCase()}</code></div>`).join("");
  $$("[data-hl]").forEach(el => (el.innerHTML = highlight(el.textContent)));
  if ($("#noteMcq")) $("#noteMcq").textContent = bn(QS.filter(q => q.c === n.ch).length);
  renderPrev(n.ch);
  if ($("#conv-form")) setupConverter();

  // "এই অংশের MCQ অনুশীলন": a timed exam on just the questions a section lists (data-practice="1,31-40").
  const practiceIds = b => b.dataset.practice.split(",")
    .flatMap(r => { const [a, z = a] = r.split("-").map(Number); return Array.from({ length: z - a + 1 }, (_, i) => a + i); })
    .map(k => `${n.ch}-${k}`).filter(qid => QBY[qid] && inExam(QBY[qid]));
  $$("[data-practice]").forEach(b => { const k = practiceIds(b).length; $("span", b).textContent = `${bn(k)}টি প্রশ্ন · ${bn(autoMins(k))} মিনিট`; b.disabled = !k; });
  $(".note").addEventListener("click", async e => {
    const b = e.target.closest("[data-practice]");
    if (b) {
      const ids = practiceIds(b);
      if (!ids.length || !(await okToReplace())) return;
      startExam({ only: ids, count: ids.length, mins: "auto", neg: 0.25, title: `${ch.name} · ${b.dataset.name}` });
      return;
    }
    // Links to another part of this note scroll there instead of redrawing it.
    const a = e.target.closest(`a[href^="#/note/${key}/"]`);
    if (a && !a.closest("#secnav") && scrollToLink(a)) e.preventDefault();
  });

  // At the end: the chapters before and after this one. A chapter whose note isn't written yet opens its MCQs;
  // one with neither shows "শিগগির" and isn't a link.
  const chs = allChapters(), at = chs.findIndex(c => c.id === n.ch);
  const noteOf = id => Object.keys(NOTES).find(k => NOTES[k].ch === id);
  const side = (c, next) => {
    if (!c) return "";
    const k = noteOf(c.id), href = k ? `#/note/${k}` : chapterOf(c.id) ? `#/mcq/${c.id}` : "";
    const inner = `<small>${next ? "পরের অধ্যায় →" : "← আগের অধ্যায়"}</small><b>${bn(c.no)}. ${esc(c.name)}</b>` +
      `<span>${k ? "নোট" : href ? "MCQ · নোট শিগগির" : "শিগগির"}</span>`;
    const cls = `chp${next ? " nx" : ""}`;
    return href ? `<a class="${cls}" href="${href}">${inner}</a>` : `<span class="${cls} soon">${inner}</span>`;
  };
  if (at >= 0) $(".note .doc").insertAdjacentHTML("beforeend", `<nav class="blk chnav" aria-label="অধ্যায় বদলান">
    <p class="blk-no">অধ্যায়</p><div class="body chpager">${side(chs[at - 1], false)}${side(chs[at + 1], true)}</div></nav>`);
  setupSectionBar();
  if (section && document.getElementById(section)) scrollOnOpen(section);
}

/* Previous written questions (mcq/written-prev.js) for one chapter's note:
   - #prevGrid: a map of topics × exams, drawn as an answer sheet: a filled bubble where that year's paper asked the topic;
   - every [data-prev="<topic>"] list: the questions themselves, newest first, with the exam, marks and "অথবা". */
/* An item that points into a paper (n, o, l) gets its text, marks and model-answer link from that paper. */
function prevItem(x) {
  if (!x.n) return x;
  const key = `${x.e}-school`, p = D.written[key], q = p && p.questions.find(y => y.n === x.n);
  if (!q) return null;
  const src = x.o ? wAlts(q)[x.o - 1] : (q.parts || q.q);
  if (!src) return null;
  const parts = typeof src === "string" ? null : x.l ? src.filter(pt => pt.l === x.l) : src;
  const text = parts ? parts.map(pt => (x.l ? "" : `${pt.l}. `) + pt.q).join(" ") : src;
  const m = parts && x.l && parts[0] && parts[0].m ? parts[0].m : marksTotal(q.marks);
  return { ...x, q: text, m, alt: x.o ? 1 : 0, ans: writtenAnswer(key, x.n) ? `#/written/${key}/q${x.n}` : x.ans };
}

function renderPrev(chId) {
  const P = window.ICT_PREV; if (!P) return;
  const items = P.items.filter(x => x.c === chId).map(prevItem).filter(Boolean), tag = no => `${ord(no)} · ${bn((P.exams.find(x => x.no === no) || {}).year || "")}`;
  if ($("#prevCount")) $("#prevCount").textContent = bn(items.length);

  // The five most recent show; older ones fold under "আরও …", so a long list doesn't bury the next section.
  const SHOW = 5, li = x => `<li><p>${x.q}</p><p class="prev-m"><span class="xt">${tag(x.e)}</span><span>${x.m} নম্বর</span>${x.alt ? "<span>অথবা</span>" : ""}${x.ans ? `<a href="${x.ans}">নমুনা উত্তর →</a>` : ""}</p></li>`;
  $$("[data-prev]").forEach(box => {
    const list = items.filter(x => x.t.includes(box.dataset.prev)), more = list.slice(SHOW);
    const year = no => bn((P.exams.find(x => x.no === no) || {}).year || "");
    box.innerHTML = list.length ? `<p class="prev-h">পরীক্ষায় যেভাবে এসেছে <span>${bn(new Set(list.map(x => x.e)).size)}টি পরীক্ষায় · ${bn(list.length)}টি প্রশ্ন</span></p>
      <ol class="prev">${list.slice(0, SHOW).map(li).join("")}</ol>` +
      (more.length ? `<details class="prev-more"><summary>আরও ${bn(more.length)}টি প্রশ্ন <span>${year(more[more.length - 1].e)}–${year(more[0].e)}</span></summary><ol class="prev">${more.map(li).join("")}</ol></details>` : "") : "";
  });

  const grid = $("#prevGrid"); if (!grid) return;
  const rows = $$("[data-topic]").map(s => ({ id: s.dataset.topic, name: s.dataset.short, sec: s.id }));
  const hits = (t, no) => items.filter(x => x.e === no && x.t.includes(t));
  const counted = rows.map(r => ({ ...r, n: P.exams.filter(ex => hits(r.id, ex.no).length).length }));
  grid.innerHTML = `<table class="omrgrid">
    <caption class="sr">কোন অংশ থেকে কোন পরীক্ষায় লিখিত প্রশ্ন এসেছে</caption>
    <thead><tr><th scope="col">অংশ</th><th scope="col" class="n">মোট</th>${P.exams.map(ex => `<th scope="col"><b>${bn(ex.no)}</b><small>${bn(String(ex.year).slice(2))}</small></th>`).join("")}</tr></thead>
    <tbody>${counted.map(r => `<tr><th scope="row"><a href="#/note/${Object.keys(NOTES).find(k => NOTES[k].ch === chId)}/${r.sec}">${esc(r.name)}</a></th>` +
      `<td class="n">${bn(r.n)}<small>/${bn(P.exams.length)}</small></td>` +
      P.exams.map(ex => { const h = hits(r.id, ex.no); return h.length
        ? `<td class="hit"><button type="button" class="bub on" data-t="${esc(r.id)}" data-e="${ex.no}" aria-label="${esc(tag(ex.no))}: ${esc(r.name)}"` +
          ` title="${esc(tag(ex.no))}: ${esc(h.map(x => x.q.replace(/<[^>]+>/g, "")).join(" | "))}"></button></td>`
        : `<td><i class="bub" aria-label="আসেনি"></i></td>`; }).join("") +
      `</tr>`).join("")}</tbody></table>`;
  const top = counted.slice().sort((a, b) => b.n - a.n).slice(0, 3);
  if ($("#prevTop")) $("#prevTop").innerHTML = top.map(r => `<b>${esc(r.name)}</b> (${bn(r.n)}টি পরীক্ষায়)`).join(", ");

  // A tap on a filled bubble (anywhere in its cell, as the bubbles are small on a phone) shows that exam's
  // questions on this part just under the map. Hovering with a mouse still shows them as a tooltip too.
  const fig = grid.closest("figure") || grid;
  fig.insertAdjacentHTML("afterend", `<div class="omr-read" id="prevRead" aria-live="polite" hidden></div>`);
  const read = $("#prevRead");
  grid.onclick = e => {
    const b = e.target.closest("td.hit")?.querySelector("button"); if (!b) return;
    const r = counted.find(x => x.id === b.dataset.t), no = Number(b.dataset.e);
    const year = bn((P.exams.find(x => x.no === no) || {}).year || "");
    $$(".bub.sel", grid).forEach(x => x.classList.remove("sel"));
    b.classList.add("sel");
    read.innerHTML = `<p class="prev-h">${ord(no)} পরীক্ষা, ${year} <span>${esc(r.name)}</span></p><ol class="prev">${hits(r.id, no).map(li).join("")}</ol>`;
    read.hidden = false;
    read.scrollIntoView({ block: "nearest", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };
}

/* "উত্তর লুকান": answers stay hidden until each one is revealed. Remembered between visits. */
function setupHideAnswers(root) {
  const box = $("#hideAns");
  const apply = on => { root.classList.toggle("hide-ans", on); if (!on) $$(".shown", root).forEach(x => x.classList.remove("shown")); };
  box.checked = !!store.get("hide", false); apply(box.checked);
  box.onchange = () => { store.set("hide", box.checked); apply(box.checked); };
  root.addEventListener("click", e => { const b = e.target.closest(".reveal"); if (b) b.closest(".pq,.pp,.wq").classList.add("shown"); });
}

/* Links to a part of the same page ("#/note/number-system/convert", "#/written/18-school/q5") scroll there
   without redrawing the page; the address is updated so the link can be shared or reloaded. */
function scrollToLink(a) {
  const el = document.getElementById(a.getAttribute("href").split("/").pop());
  if (!el) return false;
  el.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  history.replaceState(null, "", a.getAttribute("href"));
  return true;
}

/* Opening a link to one part of a page (#/written/18-school/q6): jump there now, and once more after the
   web fonts have loaded, because the text above changes height when they arrive. If the reader has touched
   the page in the meantime (wheel, touch, key, click), the second jump is skipped so it never fights them. */
function scrollOnOpen(id) {
  let touched = false;
  const events = ["wheel", "touchstart", "keydown", "mousedown"], stop = () => (touched = true);
  events.forEach(t => addEventListener(t, stop, { once: true, passive: true }));
  const go = () => { const el = document.getElementById(id); if (el) el.scrollIntoView(); };
  requestAnimationFrame(go);
  const again = () => requestAnimationFrame(() => {
    if (!touched) go();
    events.forEach(t => removeEventListener(t, stop));
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(again); else setTimeout(again, 800);
}

/* Set by the current page's sticky bar; one listener for the whole app. */
let onBarScroll = null;
addEventListener("scroll", () => onBarScroll && onBarScroll(), { passive: true });

/* The sticky bar: links scroll without reloading the page, and the section on screen is underlined.
   The bar slides sideways to keep the underlined link in sight. It moves only its own scroll position:
   scrollIntoView() here would also count as a new page scroll and cancel the smooth scroll a tap started. */
function setupSectionBar(sections = ".blk") {
  const nav = $("#secnav"), links = $$("a", nav);
  links[0].classList.add("on");
  // A tapped link stays marked while its scroll runs (and if the page can't scroll it all the way up).
  let held = null, heldTimer = 0;
  links.forEach(a => (a.onclick = e => {
    if (!scrollToLink(a)) return;
    e.preventDefault();
    mark(a); held = a;
    clearTimeout(heldTimer); heldTimer = setTimeout(() => (held = null), 1500);
  }));
  const keepInBar = a => {
    const n = nav.getBoundingClientRect(), r = a.getBoundingClientRect();
    if (r.left < n.left + 8) nav.scrollLeft -= n.left + 8 - r.left;
    else if (r.right > n.right - 32) nav.scrollLeft += r.right - (n.right - 32);   // clear of the fade at the right edge
  };
  const mark = a => { links.forEach(x => x.classList.toggle("on", x === a)); keepInBar(a); };
  // At the very bottom the last sections can't reach the reading line, so the last link is the current one.
  const atBottom = () => innerHeight + scrollY >= document.documentElement.scrollHeight - 4;
  onBarScroll = () => { if (!nav.isConnected) onBarScroll = null; else if (!held && atBottom()) mark(links[links.length - 1]); };
  const spy = new IntersectionObserver(entries => {
    if (held) return;
    if (atBottom()) return mark(links[links.length - 1]);
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const a = links.find(x => x.getAttribute("href").endsWith("/" + en.target.id));
      if (a) mark(a);
    });
  }, { rootMargin: "-30% 0px -60% 0px" });
  $$(sections).filter(s => s.id).forEach(s => spy.observe(s));   // only parts the bar links to (not the chapter links at the end)
}


/* ================= STEP-BY-STEP CONVERTER (chapter ২ note, #conv) ================= */
/* The reader types a number, picks the base it is written in and the base to convert to, and the page writes out the
   working the same way the worked answers do: the division ladder, the fraction × base table, bit groups, the four-step
   binary bridge, or the place-value expansion. Values are exact fractions (BigInt), and the answer is checked against
   the number typed before anything is shown. */
const CV = {
  DIG: "0123456789ABCDEF",
  NAME: { 2: "বাইনারি", 8: "অক্টাল", 10: "দশমিক", 16: "হেক্সাডেসিমাল" },
  HAS: { 2: "শুধু 0 ও 1", 8: "0 থেকে 7", 10: "0 থেকে 9", 16: "0–9 আর A–F" },
  PLACES: { 2: 8, 8: 4, 16: 4 },     // how far a never-ending fraction is taken, as in the worked answers
  UP: `<div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 146 V8 M5 15 L12 6 L19 15"/></svg><span>নিচ থেকে পড়ুন</span></div>`,
  DOWN: `<div class="readup" aria-hidden="true"><svg viewBox="0 0 24 150" preserveAspectRatio="none"><path d="M12 4 V142 M5 135 L12 144 L19 135"/></svg><span>ওপর থেকে পড়ুন</span></div>`
};
// Exact fractions {n, d} with BigInt.
const cvGcd = (a, b) => { a = a < 0n ? -a : a; b = b < 0n ? -b : b; while (b) [a, b] = [b, a % b]; return a; };
const cvQ = (n, d = 1n) => { const g = cvGcd(n, d) || 1n; return { n: n / g, d: d / g }; };
const cvAdd = (a, b) => cvQ(a.n * b.d + b.n * a.d, a.d * b.d);
const cvSub = (a, b) => cvQ(a.n * b.d - b.n * a.d, a.d * b.d);
const cvMul = (a, b) => cvQ(a.n * b.n, a.d * b.d);
const cvEq = (a, b) => a.n === b.n && a.d === b.d;
function cvValue(int, frac, base) {
  const B = BigInt(base); let v = cvQ(0n), p = cvQ(1n);
  for (const c of int) v = cvAdd(cvMul(v, cvQ(B)), cvQ(BigInt(CV.DIG.indexOf(c))));
  for (const c of frac) { p = cvMul(p, cvQ(1n, B)); v = cvAdd(v, cvMul(p, cvQ(BigInt(CV.DIG.indexOf(c))))); }
  return v;
}
function cvDec(q, max = 30) {      // exact decimal string, "…" if it goes on past max places
  let s = (q.n / q.d).toString(), r = q.n % q.d;
  if (!r) return s;
  let f = "";
  for (let i = 0; i < max && r; i++) { r *= 10n; f += (r / q.d).toString(); r %= q.d; }
  return s + "." + f + (r ? "…" : "");
}
const cvN = (s, b) => `(${s})<sub>${b}</sub>`;
const cvDg = (v, base) => (base === 16 && v >= 10 ? `${v} (${CV.DIG[v]})` : `${v}`);
const cvJoin = (int, frac) => (int.replace(/^0+(?=.)/, "") || "0") + (frac.replace(/0+$/, "") ? "." + frac.replace(/0+$/, "") : "");

// What was typed: Bengali digits allowed, lower-case letters allowed, spaces ignored.
function cvParse(raw, base) {
  const s = raw.replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d)).replace(/\s+/g, "").toUpperCase();
  if (!s) return { err: "একটি সংখ্যা লিখুন।" };
  if (/^[-−]/.test(s)) return { err: "ঋণাত্মক সংখ্যা এখানে নয়; সেগুলো লেখা হয় ২-এর পরিপূরকে (অংশ ৭)।" };
  const beyond = s.match(/[G-Z]/);
  if (beyond) return { err: `${beyond[0]} কোনো প্রচলিত সংখ্যা পদ্ধতির অঙ্ক নয়; সবচেয়ে বড় অঙ্ক হেক্সাডেসিমালের F (= ১৫)। তাই সংখ্যাটি বৈধ নয়।` };
  if (!/^[0-9A-F]*\.?[0-9A-F]*$/.test(s) || s === ".") return { err: "শুধু অঙ্ক 0–9, A–F আর সর্বোচ্চ একটি বিন্দু লেখা যায়।" };
  const bad = [...s].find(c => c !== "." && CV.DIG.indexOf(c) >= base);
  if (bad) return { err: `${CV.NAME[base]} পদ্ধতিতে ${bad} অঙ্কটি নেই; এতে আছে ${CV.HAS[base]}। সংখ্যাটি কোন পদ্ধতির, সেটি ঠিক করে বাছুন।` };
  const [i, f = ""] = s.split(".");
  const int = i.replace(/^0+(?=.)/, "") || "0", frac = f.replace(/0+$/, "");
  if (int.length > 12 || frac.length > 6) return { err: "পূর্ণ অংশে ১২টি আর ভগ্নাংশে ৬টি অঙ্ক পর্যন্ত লিখুন।" };
  return { int, frac, text: cvJoin(int, frac) };
}

// Whole number: divide by the base again and again; read the remainders upwards.
function cvLadder(n, base) {
  const B = BigInt(base), rows = [];
  for (let x = n; x > 0n; x /= B) rows.push([x, Number(x % B)]);
  const digits = rows.map(r => CV.DIG[r[1]]).reverse().join("");
  return { digits, html: `<div class="work"><div class="ladder" role="img" aria-label="${bn(n)}-কে ${bn(base)} দিয়ে বারবার ভাগ; ভাগশেষগুলো নিচ থেকে পড়লে ${digits}।">` +
    rows.map(([q, r]) => `<span class="dv">${base}</span><span class="qt">${q}</span><span class="rm">${cvDg(r, base)}</span>`).join("") +
    `<span class="dv"></span><span class="qt end">0</span><span class="rm"></span></div>${CV.UP}<p class="work-res">${cvN(n, 10)} = (<b>${digits}</b>)<sub>${base}</sub></p></div>` };
}
// Decimal fraction: multiply by the base again and again; read the whole parts downwards.
function cvFrac(fd, base) {
  const places = CV.PLACES[base], k = fd.length, T = 10n ** BigInt(k), B = BigInt(base);
  const show = q => { const s = (q.n * T) / q.d; return `${s / T}.${(s % T).toString().padStart(k, "0")}`; };
  let f = cvQ(BigInt(fd), T), digits = "", cycle = null;
  const rows = [], seen = new Map();
  for (let i = 0; i < places && f.n !== 0n; i++) {
    const key = `${f.n}/${f.d}`;
    if (seen.has(key) && !cycle) cycle = [seen.get(key), i];
    if (!seen.has(key)) seen.set(key, i);
    const v = cvMul(f, cvQ(B)), ip = Number(v.n / v.d);
    rows.push(`<tr><td>${show(f)} × ${base} = ${show(v)}</td><td>${cvDg(ip, base)}</td></tr>`);
    digits += CV.DIG[ip]; f = cvSub(v, cvQ(BigInt(ip)));
  }
  const exact = f.n === 0n;
  if (!exact && !cycle && seen.has(`${f.n}/${f.d}`)) cycle = [seen.get(`${f.n}/${f.d}`), rows.length];
  const note = exact ? `${bn(rows.length)}টি ধাপে ভগ্নাংশ ০ হয়েছে, তাই উত্তর হুবহু।`
    : cycle ? `${bn(cycle[0] + 1)} নম্বর ধাপের ভগ্নাংশ ${bn(cycle[1] + 1)} নম্বর ধাপে আবার এসেছে, তাই ${digits.slice(cycle[0], cycle[1])} অংশটি বারবার ফিরে আসবে; ভগ্নাংশটি শেষ হয় না। ${bn(places)} ঘর পর্যন্ত নেওয়া হলো।`
    : `ভগ্নাংশটি ${bn(places)} ঘরে শেষ হয়নি, তাই ${bn(places)} ঘর পর্যন্ত নেওয়া হলো।`;
  return { digits, exact, note, html: `<div class="work"><table class="truth trace"><thead><tr><th>ভগ্নাংশ × ${bn(base)}</th><th>পূর্ণ অংশ</th></tr></thead><tbody>${rows.join("")}</tbody></table>${CV.DOWN}<p class="work-res">(0.${fd})<sub>10</sub> ${exact ? "=" : "≈"} (<b>0.${digits}</b>)<sub>${base}</sub></p></div>` };
}
// Binary digits -> groups of n from the point, zeros added at the outer ends.
function cvGroups(int, frac, n) {
  int = int.replace(/^0+(?=.)/, ""); int = "0".repeat((n - (int.length % n)) % n) + int;
  frac += "0".repeat(frac ? (n - (frac.length % n)) % n : 0);
  const g = s => s.match(new RegExp(`.{${n}}`, "g")) || [];
  return { int: g(int), frac: g(frac) };
}
// Bit groups drawn as in section ৫ (each group over the digit it makes), or digits over their bits.
const cvGroupFig = (gr, label, res) => `<div class="groups" role="img" aria-label="${label}">` +
  gr.int.map(([bits, d]) => `<span><code>${bits}</code><b>${d}</b></span>`).join("") +
  (gr.frac.length ? `<span class="gpt"><code>.</code></span>` + gr.frac.map(([bits, d]) => `<span><code>${bits}</code><b>${d}</b></span>`).join("") : "") +
  `<p class="work-res">${res}</p></div>`;
// The 8421 picture: each weight over a bubble, filled for 1.
function cvWeights(int, frac) {
  const w = (k) => (k >= 0 ? String(2 ** k) : String(2 ** k).replace(/^0/, ""));
  const cell = (b, k) => `<span><small>${w(k)}</small><i class="bub${b === "1" ? " on" : ""}">${b}</i></span>`;
  const used = [...int].map((b, i) => [b, int.length - 1 - i]).concat([...frac].map((b, i) => [b, -(i + 1)])).filter(([b]) => b === "1").map(([, k]) => w(k));
  return `<div class="wrow" role="img" aria-label="প্রতিটি ঘরের ওজনের নিচে বিট; যেখানে 1, সেই ওজনগুলো যোগ">` + [...int].map((b, i) => cell(b, int.length - 1 - i)).join("") +
    (frac ? `<span class="wpt"><small>&nbsp;</small><b>.</b></span>` + [...frac].map((b, i) => cell(b, -(i + 1))).join("") : "") + `</div>` +
    `<p class="work-res">${used.length ? used.join(" + ") : "0"}</p>`;
}

function cvSolve(p, from, to) {
  const v = cvValue(p.int, p.frac, from), parts = [];
  const pr = s => parts.push(`<p class="prose">${s}</p>`), ex = (l, s) => parts.push(`<p class="expand"><span>${l}</span> ${s}</p>`);
  let out, approx = false;
  if (to === 10) {
    if (from === 2) { pr("৮৪২১ নিয়মে: যে ঘরে 1, শুধু সেই ঘরের ওজন যোগ করুন।"); parts.push(cvWeights(p.int, p.frac)); }
    out = cvDec(v);
    const terms = [...p.int].map((c, i) => [c, p.int.length - 1 - i]).concat([...p.frac].map((c, i) => [c, -(i + 1)]));
    const t1 = terms.map(([c, k]) => `${CV.DIG.indexOf(c)}×${from}<sup>${k}</sup>`).join(" + ");
    const t2 = terms.filter(([c]) => c !== "0").map(([c, k]) => cvDec(cvMul(cvQ(BigInt(CV.DIG.indexOf(c))), k >= 0 ? cvQ(BigInt(from) ** BigInt(k)) : cvQ(1n, BigInt(from) ** BigInt(-k))))).join(" + ") || "0";
    pr(`${from === 2 ? "ঘাতের রূপে লিখলে" : "প্রতিটি অঙ্ককে তার স্থানীয় মান, অর্থাৎ ভিত্তির ঘাত দিয়ে গুণ করে যোগ"}:`);
    ex(cvN(p.text, from), `= ${t1} = ${t2} = (<b>${out}</b>)<sub>10</sub>`);
    if (p.int.length > 1) {
      let r = 0n; const steps = [...p.int].map((c, i) => { const d = BigInt(CV.DIG.indexOf(c)); const s = i ? `${r} × ${from} + ${d} = ${r * BigInt(from) + d}` : `${d}`; r = r * BigInt(from) + d; return s; });
      ex("গুণ করে যোগ (পূর্ণ অংশ)", steps.join(" → "));
    }
  } else if (from === 10) {
    pr(`পূর্ণ অংশ ${bn(to)} দিয়ে বারবার ভাগ${p.frac ? `, ভগ্নাংশ ${bn(to)} দিয়ে বারবার গুণ` : ""}।`);
    let oi = "0";
    if (p.int !== "0") { const l = cvLadder(BigInt(p.int), to); parts.push(l.html); oi = l.digits; } else pr("পূর্ণ অংশ ০, তাই ভাগের দরকার নেই।");
    let of = "";
    if (p.frac) { const f = cvFrac(p.frac, to); parts.push(f.html); pr(f.note); of = f.digits; approx = !f.exact; }
    out = cvJoin(oi, of);
    if (to !== 2 && p.frac) pr("অক্টাল বা হেক্সায় চাইলে আগে বাইনারিতে নিয়ে দল করেও পারেন; তবে ভগ্নাংশ শেষ না হলে সরাসরি গুণ করাই নিরাপদ।");
  } else if (from === 2) {
    const n = to === 8 ? 3 : 4, gr = cvGroups(p.int, p.frac, n), rd = g => g.map(b => [b, CV.DIG[parseInt(b, 2)]]);
    out = cvJoin(gr.int.map(b => CV.DIG[parseInt(b, 2)]).join(""), gr.frac.map(b => CV.DIG[parseInt(b, 2)]).join(""));
    pr(`বিন্দু থেকে দুই দিকে ${bn(n)} বিটের দল করুন (কম পড়লে বাইরের দিকে 0), তারপর প্রতিটি দল ${n === 3 ? "৪২১" : "৮৪২১"} ওজনে পড়ুন:`);
    parts.push(cvGroupFig({ int: rd(gr.int), frac: rd(gr.frac) }, `${n} বিটের দল`, `${cvN(p.text, 2)} = (<b>${out}</b>)<sub>${to}</sub>`));
  } else if (to === 2) {
    const n = from === 16 ? 4 : 3, bits = c => CV.DIG.indexOf(c).toString(2).padStart(n, "0");
    out = cvJoin([...p.int].map(bits).join(""), [...p.frac].map(bits).join(""));
    pr(`প্রতিটি ${CV.NAME[from]} অঙ্কের জায়গায় তার ${bn(n)} বিট লিখুন (${n === 4 ? "৮৪২১" : "৪২১"} ওজনে); তারপর একেবারে বাঁয়ের আর ডানের বাড়তি 0 বাদ।`);
    parts.push(cvGroupFig({ int: [...p.int].map(c => [bits(c), c]), frac: [...p.frac].map(c => [bits(c), c]) }, "প্রতিটি অঙ্কের ওপরে তার বিট", `${cvN(p.text, from)} = (<b>${out}</b>)<sub>2</sub>`));
  } else {
    const n1 = from === 16 ? 4 : 3, n2 = to === 16 ? 4 : 3;
    const vals = s => [...s].map(c => CV.DIG.indexOf(c)).join(" ");
    const bits = s => [...s].map(c => CV.DIG.indexOf(c).toString(2).padStart(n1, "0")).join(" ");
    const gr = cvGroups([...p.int].map(c => CV.DIG.indexOf(c).toString(2).padStart(n1, "0")).join(""), [...p.frac].map(c => CV.DIG.indexOf(c).toString(2).padStart(n1, "0")).join(""), n2);
    const show = g => g.int.join(" ") + (g.frac.length ? " . " + g.frac.join(" ") : "");
    out = cvJoin(gr.int.map(b => CV.DIG[parseInt(b, 2)]).join(""), gr.frac.map(b => CV.DIG[parseInt(b, 2)]).join(""));
    pr(`${CV.NAME[from]} থেকে ${CV.NAME[to]}ে সরাসরি যাওয়া যায় না; বাইনারি সেতু হয়ে চার ধাপে:`);
    parts.push(`<table class="rt cmp eqtab"><thead><tr><th>ধাপ</th><th>কী করবেন</th><th>এই সংখ্যায়</th></tr></thead><tbody>
      <tr><td>১</td><td>প্রতিটি অঙ্কের মান লিখুন</td><td class="m">${vals(p.int)}${p.frac ? " . " + vals(p.frac) : ""}</td></tr>
      <tr><td>২</td><td>প্রতিটি মান ${bn(n1)} বিটে (${n1 === 4 ? "৮৪২১" : "৪২১"})</td><td class="m">${bits(p.int)}${p.frac ? " . " + bits(p.frac) : ""}</td></tr>
      <tr><td>৩</td><td>বিন্দু থেকে দুই দিকে ${bn(n2)} বিটের দল; কম পড়লে বাইরের দিকে 0</td><td class="m">${show(gr)}</td></tr>
      <tr><td>৪</td><td>প্রতিটি দল ${n2 === 4 ? "৮৪২১" : "৪২১"} ওজনে পড়ুন</td><td class="m">${[...out].join(" ")}</td></tr></tbody></table>`);
  }
  // Check the answer exactly (or within the last kept place, if the fraction was cut short) before showing it.
  const [oi, of = ""] = out.split("."), ov = cvValue(oi, of, to), diff = cvSub(v, ov);
  const fine = approx ? diff.n >= 0n && diff.n * BigInt(to) ** BigInt(CV.PLACES[to]) < diff.d : cvEq(v, ov);
  if (!fine) return `<p class="gate-err">দুঃখিত, এই সংখ্যার হিসাবে একটি গোলমাল হয়েছে। অন্য একটি সংখ্যা দিয়ে চেষ্টা করুন।</p>`;
  parts.push(`<p class="final"><b>উত্তর</b>${cvN(p.text, from)} ${approx ? "≈" : "="} ${cvN(out, to)}</p>`);
  parts.push(`<p class="prose">যাচাই: ${approx ? `${cvN(out, to)} = ${bn(cvDec(ov, 10))} ≈ ${bn(cvDec(v, 10))}` : `দুটিরই দশমিক মান ${bn(cvDec(v, 12))}`}।</p>`);
  return parts.join("\n");
}

function setupConverter() {
  const form = $("#conv-form"), num = $("#conv-num"), out = $("#conv-out"), err = $("#conv-err");
  const fail = m => { err.textContent = m; err.hidden = false; out.innerHTML = ""; };
  const run = () => {
    const from = Number(form.cvfrom.value), to = Number(form.cvto.value);
    err.hidden = true;
    if (from === to) return fail("দুটি পদ্ধতি একই; যে পদ্ধতিতে নেবেন, সেটি আলাদা বাছুন।");
    const p = cvParse(num.value, from);
    if (p.err) return fail(p.err);
    if (p.int === "0" && !p.frac) { out.innerHTML = `<p class="final"><b>উত্তর</b>${cvN("0", from)} = ${cvN("0", to)}</p>`; return; }
    out.innerHTML = cvSolve(p, from, to);
  };
  form.onsubmit = e => { e.preventDefault(); run(); };
  // Changing a base redraws the working, once something has been shown.
  form.addEventListener("change", e => { if (/^cv(from|to)$/.test(e.target.name) && (out.innerHTML || !err.hidden)) run(); });
  $$("[data-ex]", form).forEach(b => (b.onclick = () => {
    const [n, f, t] = b.dataset.ex.split(",");
    num.value = n; form.cvfrom.value = f; form.cvto.value = t; run();
    out.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  }));
}


/* ================= WRITTEN PAPER WITH MODEL ANSWERS ================= */
/* #/written/<paper>[/q<n>]: the question paper on top, then every question with its model answer.
   Questions come from KHATA_DEMO.written; each answer is a <template id="wa-<paper>-<n>"> in index.html.
   A question without one shows "উত্তর তৈরি হচ্ছে". */
/* A model answer is a <template id="wa-<paper>-<n>"> in index.html (the ১৮তম paper), or a string in
   answers/<paper>.js, which adds itself to window.ICT_ANSWERS (later papers, one file each). */
const ansCache = new Map();
const writtenAnswer = (paper, n) => {
  const t = document.getElementById(`wa-${paper}-${n}`);
  if (t) return t;
  const html = ((window.ICT_ANSWERS || {})[paper] || {})[n];
  if (!html) return null;
  const k = `${paper}-${n}`;
  if (!ansCache.has(k)) { const tpl = document.createElement("template"); tpl.innerHTML = html; ansCache.set(k, tpl); }
  return ansCache.get(k);
};
/* <div data-include="wa-18-school-2" data-part="2"></div> inside an answer is replaced by that answer's body,
   or by just its n-th part, so an answer asked again in a later year is written once. */
/* <div data-include="wa-18-school-2" data-part="2" data-inner>: an earlier answer to the same question, reused.
   data-part picks one part, else the whole body. data-inner: the slot already sits under its own heading, so each
   borrowed part drops its heading; when several parts come, each heading turns into a sub-heading with its marks. */
function fillIncludes(box, depth = 0) {
  const slots = $$("[data-include]", box);
  if (!slots.length || depth > 3) return;
  slots.forEach(slot => {
    const m = slot.dataset.include.match(/^wa-(.*)-(\d+)$/);
    const src = m && writtenAnswer(m[1], Number(m[2])), body = src && src.content.querySelector(".ans-body");
    if (!body) return slot.remove();
    let parts = [...body.querySelectorAll(":scope > .part")];
    if (slot.dataset.part) parts = [parts[slot.dataset.part - 1]].filter(Boolean);
    if (!("inner" in slot.dataset)) return slot.replaceWith(...(slot.dataset.part ? parts : [...body.children]).map(x => x.cloneNode(true)));
    slot.replaceWith(...parts.flatMap(p => {
      const kids = [...p.children].map(x => x.cloneNode(true)), h = kids[0] && kids[0].matches(".part-h") ? kids.shift() : null;
      if (h && parts.length > 1) {
        const s = document.createElement("h4"), mk = h.querySelector(".mk");
        s.className = "sub-h";
        s.innerHTML = `<span>${mk ? mk.textContent + " নম্বর" : ""}</span><span>${h.querySelector("span").innerHTML}</span>`; // one span: a flex row would split <sub> etc. apart
        kids.unshift(s);
      }
      return kids;
    }));
  });
  fillIncludes(box, depth + 1);   // a reused answer may itself reuse another one
}
/* A written question as printed: plain text, or parts (ক, খ …) with their own marks; then its "অথবা" choice(s). */
const wParts = x => typeof x === "string" ? `<p>${x}</p>`
  : `<ol class="wparts">${x.map(pt => `<li><b>${pt.l}.</b><span>${pt.q}</span>${pt.m ? `<i>${pt.m}</i>` : ""}</li>`).join("")}</ol>`;
const wAlts = q => q.alts || (q.alt ? [q.alt] : []);
const wBody = q => wParts(q.parts || q.q) + wAlts(q).map(a => `<p class="wor">অথবা</p>${wParts(a)}`).join("");
const wPlain = x => typeof x === "string" ? x : x.map(pt => `${pt.l}. ${pt.q}`).join(" ");
const wShort = q => wPlain(q.parts || q.q) + (wAlts(q).length ? `<span class="qp-or">অথবা: ${wAlts(q).map(wPlain).join(" | অথবা: ")}</span>` : "");
const marksTotal = m => (m.includes("=") ? m.split("=").pop() : m);
const numOf = t => Number(String(t).replace(/[০-৯]/g, d => "০১২৩৪৫৬৭৮৯".indexOf(d))) || 0;

function written(id, section) {
  const key = D.written[id] ? id : "18-school", W = D.written[key], qs = W.questions, total = qs.length;
  const sections = qs.some(q => q.sec), secName = { "ক": "ক বিভাগ", "খ": "খ বিভাগ" };
  mount("t-written");
  document.title = `লিখিত উত্তর · ${W.exam} · ${W.level} · ICT মাস্টার`;
  const has = n => !!writtenAnswer(key, n), ready = qs.filter(q => has(q.n)).length;
  // Time per question follows its marks (a ১৫-mark question gets three times a ৫-mark one).
  const fullMarks = qs.reduce((t, q) => t + numOf(marksTotal(q.marks)), 0) || total;
  const paceOf = q => Math.round(W.mins * (numOf(marksTotal(q.marks)) || 1) / fullMarks), pace = Math.round(W.mins / total);

  $("#wCrumb").textContent = `${W.exam} · ${W.level}`;
  $("#wTitle").textContent = W.subject;
  $("#wLede").textContent = ready ? `${W.post} পদের লিখিত পরীক্ষার প্রশ্ন, আর নম্বর বণ্টন মেনে সাজানো নমুনা উত্তর।`
    : `${W.post} পদের লিখিত পরীক্ষার প্রশ্ন, মূল প্রশ্নপত্রের ক্রমে। নমুনা উত্তর পরে যোগ হবে।`;
  $("#wMeta").innerHTML = [["বিষয় কোড", W.code], ["সময়", W.time], ["পূর্ণমান", W.full], ["পরীক্ষা", W.date], ready ? ["উত্তর তৈরি", `${bn(ready)}/${bn(total)}`] : ["প্রশ্ন", bn(total)]]
    .map(([k, v]) => `<span>${k} <b>${v}</b></span>`).join("");
  // Tips under the title. A paper with no answers yet has no answer-marks to point at, and nothing to hide.
  const mins = m => bn(Math.round(W.mins * m / fullMarks));
  const tips = [
    sections ? `সময় ভাগ: ১৫ নম্বরের প্রশ্নে প্রায় <b>${mins(15)} মিনিট</b>, ৫ নম্বরে <b>${mins(5)} মিনিট</b>` : `প্রতি প্রশ্নে গড়ে <b>${bn(pace)} মিনিট</b>`,
    qs.some(q => q.alt || q.alts) ? "প্রতিটি প্রশ্নে মূল প্রশ্ন বা “অথবা”, যেকোনো একটির উত্তর দিন" : "",
    ready ? "উত্তর ভাগ করুন নম্বর বণ্টন মেনে; প্রতিটি অংশের নম্বর বৃত্তে দেওয়া" : "",
    "চিত্র, ছক আর একটি উদাহরণ নম্বর বাড়ায়"].filter(Boolean);
  $("#wTips").innerHTML = tips.map(t => `<li><span>${t}</span></li>`).join("");
  if (!ready) $(".wbar .switch").style.display = "none";

  // Sticky bar: one bubble per question, filled when its answer is written.
  $("#secnav").innerHTML = qs.map(q => `<a href="#/written/${key}/q${q.n}" aria-label="প্রশ্ন ${bn(q.n)}${has(q.n) ? "" : ", উত্তর আসছে"}"><i class="bub${has(q.n) ? " on" : ""}">${bn(q.n)}</i></a>`).join("");

  // The question paper as printed, each line leading to its answer.
  $("#qp").innerHTML = `
    <header class="qp-h"><div><p class="qp-pre">প্রশ্নপত্র · বিষয় কোড ${W.code}</p><p class="qp-t">${esc(W.post)}</p></div>
      <p class="qp-st">${ready ? `<span><i class="bub on" aria-hidden="true"></i>${ready === total ? "সব" : bn(ready) + "টি"} উত্তর তৈরি</span>${ready < total ? `<span><i class="bub" aria-hidden="true"></i>${bn(total - ready)}টি আসছে</span>` : ""}` : `<span>${esc(W.subject)} · শুধু প্রশ্ন</span>`}</p></header>
    <p class="qp-rule"><b>দ্রষ্টব্য:</b> ${esc(W.rule)}</p>
    ${W.paperNote ? `<p class="qp-rule qp-warn">${W.paperNote}</p>` : ""}
    <ol class="qp-list">${qs.map((q, i) => `${q.sec && q.sec !== (qs[i - 1] || {}).sec ? `<li class="qp-sec">${secName[q.sec] || q.sec}</li>` : ""}<li><a class="qp-row${has(q.n) ? "" : " wip"}" href="#/written/${key}/q${q.n}">
      <span class="qp-n">${bn(q.n)}</span><span class="qp-q">${wShort(q)}</span><span class="qp-m">${q.marks}</span>
      <span class="qp-s">${has(q.n) ? "উত্তর পড়ুন →" : ready ? "উত্তর আসছে" : "প্রশ্ন দেখুন"}</span></a></li>`).join("")}</ol>`;

  // Every question, with its answer next to the answer script's margin.
  $("#wlist").innerHTML = qs.map((q, i) => `
    <section class="wq" id="q${q.n}">
      <div class="wq-m"><span class="wq-no">${bn(pad2(q.n))}</span><span class="wq-meta">${q.sec ? `${secName[q.sec] || q.sec}<br>` : ""}${marksTotal(q.marks)} নম্বর<br>প্রায় ${bn(paceOf(q))} মিনিট</span></div>
      <div class="wq-main">
        <div class="wq-q"><div class="wq-text">${wBody(q)}${q.note ? `<p class="wq-note">${q.note}</p>` : ""}</div><span class="wq-marks">${q.marks}</span></div>
        <div class="wq-ans"></div>
        <p class="wq-foot">${i < total - 1 ? `<a href="#/written/${key}/q${qs[i + 1].n}">পরের প্রশ্ন ${bn(qs[i + 1].n)} →</a>` : `<a href="#/written/${key}/qp">প্রশ্নপত্রে ফিরুন ↑</a>`}</p>
      </div>
    </section>`).join("");
  qs.forEach(q => {
    const box = $(`#q${q.n}`), ans = $(".wq-ans", box), tpl = writtenAnswer(key, q.n);
    if (!tpl) {
      box.classList.add("wip");
      ans.innerHTML = ready ? `<p class="wq-wip"><i class="bub" aria-hidden="true"></i><span><b>উত্তর তৈরি হচ্ছে</b>এই প্রশ্নের নমুনা উত্তর এখনো লেখা হয়নি। প্রশ্নটি পড়ে নিজে একবার খাতায় লিখে রাখুন।</span></p>` : "";
      return;
    }
    const part = tpl.content.cloneNode(true), side = part.querySelector("aside.side");
    ans.appendChild(part.querySelector(".ans-body"));
    fillIncludes(ans);
    if (side) { side.classList.add("wq-side"); box.appendChild(side); }
    $(".wq-q", box).insertAdjacentHTML("afterend", '<button class="btn line sm reveal" type="button">উত্তর দেখুন</button>');
  });

  setupHideAnswers($(".written"));
  setupSectionBar(".wq");
  $(".written").addEventListener("click", e => {
    const a = e.target.closest('a[href^="#/written/"]');
    if (a && !a.closest("#secnav") && scrollToLink(a)) e.preventDefault();
  });
  if (section && document.getElementById(section)) scrollOnOpen(section);
}


/* ================= CHAPTER MCQs ================= */
/* #/mcq/<chapter>[/q<n>]: every question of a chapter, laid out like a printed question paper, with the answer
   ringed in green and a short explanation. "উত্তর লুকান" hides them; each question can then be revealed alone. */
function mcq(arg, sub) {
  const ch = chapterOf(arg) || CH[0];
  if (!ch) { toast("অধ্যায়ভিত্তিক প্রশ্ন এখনো যোগ হয়নি।"); return location.replace("#/"); }
  const qs = QS.filter(q => q.c === ch.id), at = CH.indexOf(ch), prev = CH[at - 1], next = CH[at + 1];
  const debated = qs.filter(q => q.warn).length, testable = qs.filter(inExam).length;
  // Blocks of 20, each read like a printed page: down the left column, then down the right.
  const PER = 20, blocks = Array.from({ length: Math.ceil(qs.length / PER) }, (_, b) => qs.slice(b * PER, b * PER + PER));
  const range = blk => `${bn(blk[0].n)}–${bn(blk[blk.length - 1].n)}`;
  const item = q => `
        <div class="pp${q.warn ? " debated" : ""}" id="q${q.n}">
          <p class="pp-q"><b>${bn(q.n)}.</b><span>${qText(q)}</span></p>
          ${q.wave ? wave(q.wave) : ""}
          ${q.code ? `<pre class="code">${highlight(q.code)}</pre>` : ""}
          <ol>${q.o.map((o, j) => `<li${j === q.a ? ' class="ok"' : ""}><i>${LETTER[j]}</i><span>${o}</span></li>`).join("")}</ol>
          <p class="x"><b>উত্তর ${LETTER[q.a]}।</b> ${explain(q)}</p>
          <button class="btn line sm reveal" type="button">উত্তর দেখুন</button>
        </div>`;
  document.title = `${ch.name} · MCQ · ICT মাস্টার`;
  view.innerHTML = `
  <div class="wrap">
    <article class="paper">
      <header class="paper-head">
        <p class="pre">অধ্যায়ভিত্তিক MCQ · অধ্যায় ${bn(ch.no)}</p>
        <h1>${esc(ch.name)}</h1>
        <div class="paper-facts"><span>প্রশ্ন: ${bn(qs.length)}</span><span>পুরো অধ্যায়ের পরীক্ষা: ${bn(autoMins(testable))} মিনিট</span><span>উত্তরে মতভেদ: ${debated ? `${bn(debated)}টি` : "নেই"}</span></div>
      </header>
      <div class="paper-tools">
        <label class="switch"><input type="checkbox" id="hideAns"><span class="track" aria-hidden="true"></span><span>উত্তর লুকান</span></label>
        <span class="paper-acts">${ch.note ? `<a class="tbtn" href="${ch.note}">অধ্যায়ের নোট পড়ুন</a>` : ""}<a class="btn sm" href="#/setup/${ch.id}">এই অধ্যায়ে পরীক্ষা দিন <span aria-hidden="true">→</span></a></span>
      </div>
      <div class="secbar in-paper"><div class="in"><nav aria-label="প্রশ্নের ভাগ" id="secnav">${blocks.map((blk, b) =>
        `<a href="#/mcq/${ch.id}/b${b + 1}">${range(blk)}</a>`).join("")}</nav></div></div>
      ${blocks.map((blk, b) => `
      <section class="pp-blk" id="b${b + 1}" aria-label="প্রশ্ন ${range(blk)}">
        <h2 class="pp-sec">প্রশ্ন ${range(blk)}</h2>
        <div class="paper-cols">${blk.map(item).join("")}</div>
      </section>`).join("")}
      ${testable < qs.length ? `<p class="paper-end">${bn(qs.length - testable)}টি প্রশ্নে একাধিক সঠিক বিকল্প আছে, তাই সেগুলো পরীক্ষায় আসে না।</p>` : ""}
      ${CH.length > 1 ? `<nav class="ch-nav" aria-label="অধ্যায়">${prev ? `<a href="#/mcq/${prev.id}">← ${esc(prev.name)}</a>` : "<span></span>"}${next ? `<a href="#/mcq/${next.id}">${esc(next.name)} →</a>` : ""}</nav>` : ""}
    </article>
  </div>`;
  setupHideAnswers($(".paper"));
  setupSectionBar(".pp-blk");
  if (sub && document.getElementById(sub)) scrollOnOpen(sub);
}


/* ================= EXAM SETUP ================= */
function setup(arg) {
  mount("t-setup");
  document.title = "পরীক্ষা দিন · ICT মাস্টার";
  $$("[data-autonext]", view).forEach(i => (i.checked = autoNext()));   // the remembered auto-next choice
  const fromCh = chapterOf(arg) ? arg : "";   // came from a chapter's "এই অধ্যায়ে পরীক্ষা দিন"
  $("#pickCh").innerHTML = CH.map(ch =>
    `<label><input type="checkbox" name="ch" value="${ch.id}"${!fromCh || fromCh === ch.id ? " checked" : ""}><span class="box">${CHECK}</span>${bn(ch.no)}. ${esc(ch.name)}</label>`).join("");

  const form = $("#setupForm");
  let mins = 12, minsTouched = false;
  const get = name => (form.querySelector(`input[name="${name}"]:checked`) || {}).value;
  const chapters = () => $$('input[name="ch"]:checked', form).map(i => i.value);
  const available = () => QS.filter(q => inExam(q) && chapters().includes(q.c)).length;
  const wrongNow = mistakeList().length;
  const MODE_HINT = { random: "", fresh: "যেসব প্রশ্ন কম দেখেছেন, সেগুলো আগে আসবে।",
    mistakes: wrongNow ? `আগের পরীক্ষায় যেগুলো ভুল বা ফাঁকা ছিল, শুধু সেগুলো: এখন ${bn(wrongNow)}টি।` : "এখনো কোনো ভুল জমা হয়নি। একটি পরীক্ষা দিলে এখানে আসবে।" };

  function refresh() {
    const have = available(), count = Math.min(Number(get("count")), have), neg = Number(get("neg"));
    if (!minsTouched) mins = autoMins(count);
    $("#minsOut").innerHTML = [...bn(pad2(mins))].map(d => `<i>${d}</i>`).join("");
    $("#minsHint").textContent = minsTouched ? "" : "আসল পরীক্ষার হারে";
    $("#modeHint").textContent = MODE_HINT[get("mode")];
    $("#countNote").textContent = `বাছাই করা অধ্যায়ে পরীক্ষার প্রশ্ন আছে ${bn(have)}টি।`;
    const chs = chapters().length;
    $("#sumLine").innerHTML = chs
      ? `${bn(count)}টি প্রশ্ন · ${bn(mins)} মিনিট · ${neg ? `ভুলে −${marksText(neg)}` : "নেগেটিভ নেই"} <span>· ${bn(chs)}টি অধ্যায় থেকে</span>`
      : "<span>অন্তত একটি অধ্যায় বাছুন</span>";
    form.querySelector('[type="submit"]').disabled = !chs || !have;
  }
  form.onchange = e => {
    if (e.target.name === "ch" && !chapters().length) e.target.checked = true;  // keep at least one chapter
    if (e.target.name === "count" || e.target.name === "ch") minsTouched = false;
    refresh();
  };
  form.onclick = e => {
    const step = e.target.closest("[data-step]");
    if (step) { mins = Math.min(180, Math.max(1, mins + Number(step.dataset.step))); minsTouched = true; refresh(); }
  };
  // An exam left with Back is still running: offer to continue it instead of losing it silently.
  const running = store.get("exam", null);
  if (isRunning(running)) {
    const done = running.ans.filter(a => a !== null).length, left = Math.max(1, Math.round((running.end - Date.now()) / 60000));
    $("#running").innerHTML = `<p><b>একটি পরীক্ষা চলছে</b><span>${esc(running.title)} · ${bn(done)}/${bn(running.order.length)} উত্তর · প্রায় ${bn(left)} মিনিট বাকি</span></p>` +
      `<a class="btn sm" href="#/exam">চালিয়ে যান <span aria-hidden="true">→</span></a>`;
    $("#running").hidden = false;
  }
  form.onsubmit = async e => {
    e.preventDefault();
    if (!(await okToReplace())) return;
    const chs = chapters();
    const title = chs.length === 1 ? chapterOf(chs[0]).name : chs.length === CH.length ? "সব অধ্যায়" : `${bn(chs.length)}টি অধ্যায় থেকে`;
    startExam({ count: Number(get("count")), mins, neg: Number(get("neg")), chapters: chs, title, mode: get("mode") });
  };
  refresh();

  // One-tap presets, listed like the options of a question (ক, খ, গ …). A chapter you came from comes first.
  const presets = [], all = QS.filter(inExam).length;
  if (fromCh) {
    const ch = chapterOf(fromCh), n = QS.filter(q => q.c === ch.id && inExam(q)).length;
    presets.push(
      { id: "chapter", title: `${ch.name}: পুরো অধ্যায়`, meta: `${bn(n)}টি প্রশ্ন, এলোমেলো ক্রমে · ${bn(autoMins(n))} মিনিট · ভুলে −০.২৫`,
        opts: { count: n, mins: "auto", neg: 0.25, chapters: [ch.id], title: `${ch.name} · পুরো অধ্যায়` } },
      { id: "chapter20", title: `${ch.name}: দ্রুত ২০`, meta: "২০ প্রশ্ন · ১২ মিনিট · ভুলে −০.২৫ · শুধু এই অধ্যায় থেকে",
        opts: { count: 20, mins: 12, neg: 0.25, chapters: [ch.id], title: `${ch.name} · দ্রুত ২০` } });
  }
  presets.push(
    { id: "full", title: "পূর্ণ মডেল টেস্ট", meta: `${bn(Math.min(100, all))} প্রশ্ন · ${bn(autoMins(Math.min(100, all)))} মিনিট · ভুলে −০.২৫ · আসল পরীক্ষার মতো`,
      opts: { count: 100, mins: "auto", neg: 0.25, title: "পূর্ণ মডেল টেস্ট" } },
    { id: "quick", title: "দ্রুত ২০", meta: "২০ প্রশ্ন · ১২ মিনিট · ভুলে −০.২৫ · সব অধ্যায় থেকে",
      opts: { count: 20, mins: 12, neg: 0.25, title: "দ্রুত ২০" } },
    { id: "mistakes", title: "শুধু আমার ভুল",
      meta: wrongNow ? `${bn(wrongNow)}টি প্রশ্ন: আগের পরীক্ষাগুলোতে ভুল বা ফাঁকা · ${bn(autoMins(wrongNow))} মিনিট` : "এখনো কোনো ভুল জমা হয়নি। একটি পরীক্ষা দিলে এখানে আসবে।",
      off: !wrongNow, opts: { count: 100, mins: "auto", neg: 0.25, mode: "mistakes", title: "শুধু আমার ভুল" } });
  $("#quickList").innerHTML = presets.map((p, i) => `<li><button type="button" class="opt quick-opt" data-preset="${p.id}"${p.off ? " disabled" : ""}>
      <i class="bub">${"কখগঘঙচ"[i]}</i><span class="otext"><b>${esc(p.title)}</b><small>${esc(p.meta)}</small></span><span class="go" aria-hidden="true">→</span></button></li>`).join("") +
    (all < 100 ? `<li class="quick-note">এখন পর্যন্ত পরীক্ষার প্রশ্ন আছে ${bn(all)}টি, তাই পূর্ণ মডেল টেস্টও ${bn(all)}টিতে থামবে।</li>` : "");
  $("#quickList").onclick = async e => {
    const b = e.target.closest("[data-preset]"); if (!b || b.disabled) return;
    const p = presets.find(x => x.id === b.dataset.preset);
    if (!(await okToReplace())) return;
    $$(".quick-opt", $("#quickList")).forEach(x => { x.classList.remove("on"); $(".bub", x).classList.remove("on", "pop"); });
    b.classList.add("on"); $(".bub", b).classList.add("on", "pop");   // the chosen bubble fills, then the exam starts
    setTimeout(() => startExam(p.opts), 240);
  };
}

/* Starting a new exam while one is still running replaces it, so ask first. */
// A saved exam counts only if every question in it still exists (an exam from the old demo questions does not).
const validRecord = r => !!(r && Array.isArray(r.order) && r.order.length && r.order.every(id => QBY[id]));
const isRunning = r => validRecord(r) && Date.now() < r.end;
async function okToReplace() {
  return !isRunning(store.get("exam", null)) || ask("একটি পরীক্ষা এখনো চলছে। সেটি বাদ দিয়ে নতুন পরীক্ষা শুরু করবেন?", "নতুন শুরু করুন");
}


/* ================= EXAM ================= */
let exam = null, clock = 0;
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

/* What this browser remembers about each question, by question id:
   { "ch01-12": { s: times seen, l: last result "r" | "w" | "u" } }. */
const getStats = () => {
  const s = store.get("stats", {});
  if (!s || typeof s !== "object") return {};
  Object.keys(s).forEach(k => { if (/^\d+$/.test(k)) delete s[k]; });   // records left by the old demo questions
  return s;
};
const mistakeList = () => { const s = getStats(); return QS.filter(q => inExam(q) && s[q.id] && (s[q.id].l === "w" || s[q.id].l === "u")).map(q => q.id); };
const autoMins = n => Math.max(1, Math.round(n * 0.6));   // the real exam's pace: 36 seconds a question

/* mode: "random" | "fresh" (least-seen first) | "mistakes" (last time wrong or skipped).
   only: a fixed list of questions (retrying a result's mistakes). keepOrder: the paper's own order. mins: a number or "auto". */
function newExam({ count = 20, mins = 12, neg = 0.25, chapters = CH.map(c => c.id), title = "দ্রুত ২০",
  mode = "random", only = null, keepOrder = false } = {}) {
  let pool = (only || QS.filter(inExam).map(q => q.id)).filter(id => QBY[id] && chapters.includes(QBY[id].c));
  if (mode === "mistakes") { const m = new Set(mistakeList()); pool = pool.filter(i => m.has(i)); }
  let order = keepOrder ? pool.slice() : shuffle(pool);
  if (mode === "fresh") { const s = getStats(); order.sort((a, b) => ((s[a] || {}).s || 0) - ((s[b] || {}).s || 0)); }  // stable: shuffled among equals
  order = order.slice(0, count);
  const m = mins === "auto" ? autoMins(order.length) : mins, now = Date.now();
  return { title, mode, order, ans: order.map(() => null), flag: order.map(() => false), cur: 0, neg, mins: m, start: now, end: now + m * 60000 };
}
function startExam(opts) {
  const e = newExam(opts);
  if (!e.order.length) {
    toast(opts.mode === "mistakes" ? "আগের পরীক্ষাগুলোতে কোনো ভুল বা ফাঁকা প্রশ্ন নেই।" : "এই বাছাইয়ে কোনো প্রশ্ন পাওয়া যায়নি।");
    return false;
  }
  exam = e; store.set("exam", exam); location.hash = "#/exam";
  return true;
}
const saveExam = () => store.set("exam", exam);

function examView(arg) {
  exam = exam || store.get("exam", null);
  // Nothing running (e.g. Back from a result): go to the setup form instead of starting an exam nobody asked for.
  if (!validRecord(exam)) {
    exam = null; store.del("exam"); toast("এখন কোনো পরীক্ষা চলছে না। নতুন পরীক্ষা সাজান।");
    return location.replace("#/setup");
  }
  if (Date.now() >= exam.end) return finish(true);
  document.title = "পরীক্ষা চলছে · ICT মাস্টার";
  const n = exam.order.length;
  view.innerHTML = `
  <div class="exam">
    <h1 class="sr">পরীক্ষা: ${esc(exam.title)}</h1>
    <div class="ebar">
      <div class="wrap">
        <div class="ebar-l"><span class="ebar-title">${esc(exam.title)}</span><span class="ebar-q">প্রশ্ন <b id="qNo"></b> / ${bn(n)}</span></div>
        <div class="ebar-t"><span class="clock-l">সময় বাকি</span><span class="clock" id="clock"></span></div>
        <button class="btn sm" type="button" id="submitBtn">জমা দিন</button>
      </div>
      <div class="eprog"><span id="eprog"></span></div>
    </div>
    <div class="wrap ebody">
      <article class="qpane" id="qpane"></article>
      <aside class="sheet" id="sheet" aria-label="উত্তরপত্র">
        <div class="sheet-h"><b>উত্তরপত্র</b><span id="sheetCount"></span></div>
        <p class="sheet-note">সঠিক উত্তরের বৃত্তটি সম্পূর্ণ ভরাট করুন। নম্বরে চাপলে সেই প্রশ্নে যাবে।</p>
        <div class="omr" id="omr"></div>
        <p class="sheet-key"><span><i class="bub on"></i>উত্তর দেওয়া</span><span><i class="fl"></i>পরে দেখব</span></p>
      </aside>
    </div>
    <div class="scrim" id="scrim" hidden></div>
    <nav class="ebot" aria-label="প্রশ্ন বদলান">
      <button class="tbtn" type="button" data-go="-1">← আগের</button>
      <button class="sheetbtn" type="button" id="sheetBtn" aria-expanded="false">উত্তরপত্র <b id="sheetBtnCount"></b></button>
      <button class="tbtn" type="button" data-go="1" id="ebNext">পরের →</button>
    </nav>
  </div>`;

  const per = 10, cols = Math.ceil(n / per);
  $("#omr").style.setProperty("--cols", Math.min(cols, 2));
  $("#omr").innerHTML = Array.from({ length: cols }, (_, c) => `<div class="omr-col">` +
    exam.order.slice(c * per, c * per + per).map((_, k) => {
      const i = c * per + k;
      return `<div class="omr-row" data-row="${i}"><button type="button" class="omr-n" data-jump="${i}" aria-label="প্রশ্ন ${bn(i + 1)}-এ যান">${bn(pad2(i + 1))}</button>` +
        LETTER.map((l, j) => `<button type="button" class="bub sm" data-q="${i}" data-i="${j}" aria-label="প্রশ্ন ${bn(i + 1)}, উত্তর ${l}">${l}</button>`).join("") + "</div>";
    }).join("") + "</div>").join("");

  renderQuestion();
  clearInterval(clock); clock = setInterval(tick, 500); tick();
}

function renderQuestion(popIndex) {
  const q = QBY[exam.order[exam.cur]], chosen = exam.ans[exam.cur], n = exam.order.length, last = exam.cur === n - 1;
  $("#qNo").textContent = bn(exam.cur + 1);
  $("#qpane").innerHTML = `
    <div class="qhead"><span class="qno">${bn(pad2(exam.cur + 1))}</span><span class="qsubj">${esc(chapterOf(q.c).name)}</span>${exam.flag[exam.cur] ? '<span class="qflag">পরে দেখবেন</span>' : ""}</div>
    <h2 class="qtext">${qText(q)}</h2>
    ${q.wave ? wave(q.wave) : ""}
    ${q.code ? `<pre class="code">${highlight(q.code)}</pre>` : ""}
    <ol class="opts">${q.o.map((o, i) => `<li><button type="button" class="opt${chosen === i ? " on" : ""}" data-opt="${i}" aria-pressed="${chosen === i}">
      <i class="bub${chosen === i ? " on" : ""}${popIndex === i ? " pop" : ""}">${LETTER[i]}</i><span class="otext">${o}</span><kbd>${i + 1}</kbd></button></li>`).join("")}</ol>
    <div class="qact">
      <button class="btn line sm prev" type="button" data-go="-1"${exam.cur === 0 ? " disabled" : ""}>← আগের</button>
      <button class="tbtn" type="button" data-flag>${exam.flag[exam.cur] ? "চিহ্ন তুলে দিন" : "পরে দেখব"}</button>
      ${last ? `<button class="btn sm next" type="button" data-submit>জমা দিন</button>` : `<button class="btn sm next" type="button" data-go="1">পরের →</button>`}
    </div>
    <div class="qquit">${autoSwitch()}<button class="tbtn" type="button" data-quit>পরীক্ষা বাতিল করুন</button></div>`;
  // On the last question, "পরের" (here and in the phone's bottom bar) becomes "জমা দিন".
  $(".ebot [data-go='-1']").disabled = exam.cur === 0;
  const fwd = $("#ebNext");
  fwd.textContent = last ? "জমা দিন" : "পরের →";
  fwd.toggleAttribute("data-submit", last);
  renderSheet();
}

function renderSheet() {
  const done = exam.ans.filter(a => a !== null).length, flagged = exam.flag.filter(Boolean).length;
  $$("#omr .omr-row").forEach(r => {
    const i = Number(r.dataset.row);
    r.classList.toggle("cur", i === exam.cur);
    r.classList.toggle("flag", exam.flag[i]);
    $$(".bub", r).forEach(b => b.classList.toggle("on", exam.ans[i] === Number(b.dataset.i)));
  });
  $("#sheetCount").textContent = `${bn(done)} / ${bn(exam.order.length)} ভরাট` + (flagged ? ` · ${bn(flagged)} পরে দেখবেন` : "");
  $("#sheetBtnCount").textContent = `${bn(done)}/${bn(exam.order.length)}`;
  $("#eprog").style.width = (done / exam.order.length) * 100 + "%";
  showCurrentRow();
}

/* A long answer sheet (100 questions) scrolls inside itself; keep the current question's row in view. */
function showCurrentRow() {
  const sheet = $("#sheet"), row = $("#omr .omr-row.cur");
  if (!sheet || !row || sheet.scrollHeight <= sheet.clientHeight) return;
  const top = row.offsetTop, bottom = top + row.offsetHeight;
  if (top < sheet.scrollTop + 90) sheet.scrollTop = top - 90;
  else if (bottom > sheet.scrollTop + sheet.clientHeight - 40) sheet.scrollTop = bottom - sheet.clientHeight + 40;
}

/* Auto-next: a choice this browser remembers, switched on the exam page or under any question. When it is on,
   answering the question on screen moves to the next one after a short pause, so the filled bubble is seen first.
   Clearing an answer, or filling a bubble on the answer sheet, doesn't move; moving by hand during the pause wins. */
let autoTimer = 0;
const autoNext = () => store.get("autonext", false) === true;
const autoSwitch = () => `<label class="switch"><input type="checkbox" data-autonext${autoNext() ? " checked" : ""}>` +
  `<span class="track" aria-hidden="true"></span><span>উত্তর দিলেই পরের প্রশ্নে যান</span></label>`;
document.addEventListener("change", e => {
  if (!e.target.matches("[data-autonext]")) return;
  store.set("autonext", e.target.checked);
  if (!e.target.checked) clearTimeout(autoTimer);
});

function choose(qi, opt, onScreen) {
  clearTimeout(autoTimer);
  exam.ans[qi] = exam.ans[qi] === opt ? null : opt;   // tapping the filled bubble again clears it
  saveExam();
  if (qi === exam.cur) renderQuestion(exam.ans[qi] === null ? undefined : opt); else renderSheet();
  if (!onScreen || !autoNext() || qi !== exam.cur || exam.ans[qi] === null) return;
  if (qi === exam.order.length - 1) return toast("এটিই শেষ প্রশ্ন। উত্তরপত্র দেখে নিয়ে “জমা দিন” চাপুন।");
  autoTimer = setTimeout(() => { if (exam && document.body.dataset.screen === "exam" && exam.cur === qi) go(1); }, 350);
}
function go(step) {
  clearTimeout(autoTimer);
  const c = (turn ? turn.to : exam.cur) + step;   // pressed again mid-turn: count from where it is heading
  if (c >= 0 && c < exam.order.length) turnTo(c, step);
}
function jump(i) { clearTimeout(autoTimer); toggleSheet(false); if (i !== exam.cur) turnTo(i, i > exam.cur ? 1 : -1); }

/* Turning to another question reads as a page turn, not a jump: the question on screen fades out sliding one way,
   the page goes to the top while it is blank, and the new one fades in from the other side (forward ← , back →).
   The pane takes no taps and the answer keys wait while it is blank. Reduced motion: an instant swap. */
let turn = null;
function turnTo(c, dir) {
  const pane = $("#qpane");
  if (turn) clearTimeout(turn.timer);
  const show = () => {
    turn = null;
    if (!exam || !$("#qpane")) return;
    exam.cur = c; saveExam(); renderQuestion(); window.scrollTo(0, 0);
    pane.classList.remove("q-out", "q-out-back", "q-in", "q-in-back");
    void pane.offsetWidth;                         // restart the entry animation
    pane.classList.add(dir < 0 ? "q-in-back" : "q-in");
  };
  if (!pane || matchMedia("(prefers-reduced-motion: reduce)").matches) return show();
  pane.classList.remove("q-in", "q-in-back");
  pane.classList.add(dir < 0 ? "q-out-back" : "q-out");
  turn = { to: c, timer: setTimeout(show, 130) };
}
function toggleSheet(open) {
  const s = $("#sheet"); if (!s) return;
  s.classList.toggle("open", open); $("#scrim").hidden = !open; $("#sheetBtn").setAttribute("aria-expanded", open);
  if (open) showCurrentRow();
}

function tick() {
  if (!exam || !$("#clock")) return clearInterval(clock);
  const left = Math.max(0, Math.round((exam.end - Date.now()) / 1000));
  $("#clock").innerHTML = [...bn(`${pad2(Math.floor(left / 60))}:${pad2(left % 60)}`)]
    .map(c => (c === ":" ? '<span class="colon">:</span>' : `<span class="d">${c}</span>`)).join("");
  $("#clock").classList.toggle("low", left <= Math.min(300, exam.mins * 12));
  if (left <= 0) return finish(true);
  timeWarning(left);
}

/* A warning at 5 minutes left and again at 1 minute: a message, and a short buzz on phones that allow it.
   Each comes once per exam (remembered with the exam, so a reload doesn't repeat it), and only in an exam at least
   twice that long: a 6-minute exam gets no "5 minutes left". Coming back to an exam after both marks have passed
   shows only the later one, with the real minutes left. */
const WARN_AT = [300, 60];
function timeWarning(left) {
  const due = WARN_AT.filter(s => left <= s && exam.mins * 60 >= s * 2 && !(exam.warned || []).includes(s));
  if (!due.length) return;
  exam.warned = [...(exam.warned || []), ...due]; saveExam();
  const mins = bn(Math.max(1, Math.ceil(left / 60)));
  toast(left <= 60 ? `আর ${mins} মিনিট বাকি। সময় শেষ হলে উত্তরপত্র নিজে থেকেই জমা হয়ে যাবে।` : `আর ${mins} মিনিট বাকি।`, 6000);
  // A phone may buzz only after the page has been tapped; asking earlier just logs an error.
  try { if (navigator.vibrate && navigator.userActivation?.hasBeenActive !== false) navigator.vibrate(200); } catch (e) {}
}

let finishing = false;
/* alwaysAsk: the "জমা দিন" that replaces "পরের" on the last question asks even when every question is answered,
   because a reader tapping "পরের" through the paper could otherwise hand it in by mistake. */
async function finish(timeUp, alwaysAsk = false) {
  if (!exam) return;
  if (timeUp && asking) asking(false);              // time ran out while the "submit anyway?" box was open
  if (!timeUp) {
    if (finishing) return;
    const empty = exam.ans.filter(a => a === null).length, flagged = exam.flag.filter(Boolean).length;
    const msg = [empty && `${bn(empty)}টি প্রশ্নের উত্তর দেননি`, flagged && `${bn(flagged)}টি “পরে দেখব” চিহ্নিত`].filter(Boolean).join(", ");
    if (msg || alwaysAsk) {
      finishing = true;
      const ok = await ask(msg ? `${msg}। তবুও জমা দেবেন?` : "সব প্রশ্নের উত্তর দিয়েছেন। এখন জমা দেবেন?", "জমা দিন", "ফিরে যান");
      finishing = false;
      if (!ok || !exam) return;
    }
  }
  clearInterval(clock);
  // Remember how each question went, for "শুধু আমার ভুল" and "আগে না-দেখা".
  const stats = getStats();
  exam.order.forEach((id, k) => {
    const a = exam.ans[k], rec = stats[id] || { s: 0 };
    rec.s = (rec.s || 0) + 1; rec.l = a === null ? "u" : a === QBY[id].a ? "r" : "w";
    stats[id] = rec;
  });
  store.set("stats", stats);
  store.set("last", { title: exam.title, order: exam.order, ans: exam.ans, flag: exam.flag, neg: exam.neg, mins: exam.mins,
    secs: Math.round((Math.min(Date.now(), exam.end) - exam.start) / 1000) });
  exam = null; store.del("exam");
  clearTimeout(toastTimer); $("#toast").hidden = true;   // a time warning doesn't follow onto the result
  location.replace("#/result");                      // the result takes the exam's place, so Back doesn't return to it
}

/* One listener for the whole exam screen. */
view.addEventListener("click", e => {
  if (!exam || document.body.dataset.screen !== "exam") return;
  const t = e.target;
  const opt = t.closest("[data-opt]"); if (opt) return choose(exam.cur, Number(opt.dataset.opt), true);
  const bub = t.closest("#omr .bub"); if (bub) return choose(Number(bub.dataset.q), Number(bub.dataset.i));
  const j = t.closest("[data-jump]"); if (j) return jump(Number(j.dataset.jump));
  if (t.closest("[data-submit]")) return finish(false, true);   // the last question's "জমা দিন" (it sits where "পরের" was)
  const g = t.closest("[data-go]"); if (g) return go(Number(g.dataset.go));
  if (t.closest("[data-flag]")) { exam.flag[exam.cur] = !exam.flag[exam.cur]; saveExam(); return renderQuestion(); }
  if (t.closest("#submitBtn")) return finish(false);
  if (t.closest("#sheetBtn")) return toggleSheet(!$("#sheet").classList.contains("open"));
  if (t.closest("#scrim")) return toggleSheet(false);
  if (t.closest("[data-quit]")) {
    ask("পরীক্ষা বাতিল করবেন? এর কিছুই সংরক্ষণ হবে না।", "বাতিল করুন", "চালিয়ে যান").then(ok => {
      if (ok && exam) { clearInterval(clock); exam = null; store.del("exam"); location.replace("#/"); }
    });
  }
});

/* Keys: 1–4, ১–৪ or A–D answer; ← → move; F marks for later. */
document.addEventListener("keydown", e => {
  if (asking || !exam || document.body.dataset.screen !== "exam" || e.ctrlKey || e.metaKey || e.altKey) return;
  const k = e.key.toLowerCase();
  const i = "1234".indexOf(k) >= 0 ? Number(k) - 1 : "১২৩৪".indexOf(k) >= 0 ? "১২৩৪".indexOf(k) : "abcd".indexOf(k);
  if (i >= 0) { if (!turn) choose(exam.cur, i, true); }   // not while the old question is fading out
  else if (k === "arrowright") go(1);
  else if (k === "arrowleft") go(-1);
  else if (k === "f") { exam.flag[exam.cur] = !exam.flag[exam.cur]; saveExam(); renderQuestion(); }
  else if (k === "escape") toggleSheet(false);
  else return;
  e.preventDefault();
});


/* ================= RESULT ================= */
function result() {
  const r = store.get("last", null);
  if (!validRecord(r)) {
    toast("এখনো কোনো পরীক্ষা দেননি। একটি পরীক্ষা দিলে ফল এখানে দেখাবে।");
    return location.replace("#/setup");
  }
  document.title = "ফলাফল · ICT মাস্টার";
  const qs = r.order.map(id => QBY[id]);
  const st = qs.map((q, i) => (r.ans[i] === null ? "u" : r.ans[i] === q.a ? "r" : "w"));
  const right = st.filter(x => x === "r").length, wrong = st.filter(x => x === "w").length, skip = st.length - right - wrong;
  const marks = right - wrong * r.neg;
  const retry = r.order.filter((qi, k) => st[k] !== "r");   // this exam's wrong and skipped questions
  const time = `${bn(pad2(Math.floor(r.secs / 60)))}:${bn(pad2(r.secs % 60))}`;

  const rows = CH.map(ch => {
    const idx = qs.map((q, i) => (q.c === ch.id ? i : -1)).filter(i => i >= 0);
    if (!idx.length) return "";
    const ok = idx.filter(i => st[i] === "r").length;
    return `<tr><th>${esc(ch.name)}</th><td><span class="strip">${idx.map(i => `<i class="${st[i]}" title="প্রশ্ন ${bn(i + 1)}"></i>`).join("")}</span></td>
      <td class="num">${bn(ok)}/${bn(idx.length)}</td><td class="num pc">${bn(Math.round((ok / idx.length) * 100))}%</td></tr>`;
  }).join("");

  view.innerHTML = `
  <div class="wrap">
    <section class="res-head">
      <div>
        <p class="score-l">প্রাপ্ত নম্বর</p>
        <div class="score">
          <svg viewBox="0 0 300 150" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M 58 22 C 132 -2, 262 4, 290 58 C 314 104, 228 146, 140 144 C 52 142, 4 112, 12 70 C 18 40, 56 20, 110 12"/></svg>
          <span class="score-n">${marksText(marks)}</span><span class="score-of">/ ${bn(qs.length)}</span>
        </div>
      </div>
      <div>
        <h1 class="res-title">${esc(r.title)}</h1>
        <p class="res-sub">${bn(Math.round((right / qs.length) * 100))}% সঠিক${r.neg ? ` · প্রতি ভুলে −${marksText(r.neg)}` : ""}</p>
        <dl class="tally">
          <div><dt>সঠিক</dt><dd class="r">${bn(right)}</dd></div>
          <div><dt>ভুল</dt><dd class="w">${bn(wrong)}</dd></div>
          <div><dt>ফাঁকা</dt><dd>${bn(skip)}</dd></div>
          <div><dt>কাটা গেছে</dt><dd>${r.neg && wrong ? marksText(-wrong * r.neg) : "০"}</dd></div>
          <div><dt>সময় (${bn(r.mins)} মিনিটের)</dt><dd>${time}</dd></div>
        </dl>
        <div class="res-acts">
          ${retry.length
            ? `<button class="btn" type="button" id="retryBtn">ভুলগুলো আবার দিন <span class="cnt">${bn(retry.length)}টি প্রশ্ন</span></button>
               <a class="tbtn" href="#/setup">নতুন পরীক্ষা</a>`
            : `<p class="allright">সব উত্তর ঠিক।</p><a class="btn" href="#/setup">নতুন পরীক্ষা দিন</a>`}
        </div>
      </div>
    </section>

    <section class="sec">
      <header class="sec-h"><span class="sec-no">১</span><h2>অধ্যায়ভিত্তিক</h2><p>প্রতিটি বৃত্ত একটি প্রশ্ন, পরীক্ষার ক্রমে।</p></header>
      <table class="bysub"><thead><tr><th>অধ্যায়</th><th>প্রশ্ন</th><th class="num">সঠিক</th><th class="num pc">হার</th></tr></thead><tbody>${rows}</tbody></table>
      <p class="strip-key"><span><i class="r"></i>সঠিক</span><span><i class="w"></i>ভুল</span><span><i></i>ফাঁকা</span></p>
    </section>

    <section class="sec">
      <header class="sec-h"><span class="sec-no">২</span><h2>উত্তর মিলিয়ে দেখুন</h2><p>সবুজ বৃত্ত সঠিক উত্তর, কাটা বৃত্ত আপনার ভুল উত্তর।</p></header>
      <div class="filters" id="filters"></div>
      <div id="review"></div>
    </section>
    <div class="res-foot"><a class="btn line" href="#/setup">নতুন পরীক্ষা দিন</a><a class="tbtn" href="#/">সূচিতে ফিরুন</a></div>
  </div>`;

  const FILTERS = [["all", "সব"], ["w", "ভুল"], ["u", "ফাঁকা"], ["f", "পরে দেখব"]];
  const match = (k, i) => k === "all" || (k === "f" ? r.flag[i] : st[i] === k);
  let filter = wrong ? "w" : "all";
  function renderReview() {
    $("#filters").innerHTML = FILTERS.map(([k, label]) =>
      `<button type="button" data-f="${k}" aria-pressed="${k === filter}">${label}<span>${bn(qs.filter((_, i) => match(k, i)).length)}</span></button>`).join("");
    const items = qs.map((q, i) => {
      if (!match(filter, i)) return "";
      const you = r.ans[i];
      return `<article class="rv">
        <span class="rv-n">${bn(pad2(i + 1))}</span>
        <div>
          <p class="rv-meta"><span>${esc(chapterOf(q.c).name)} · প্রশ্ন ${bn(q.n)}</span><span class="rv-st ${st[i]}">${{ r: "সঠিক", w: "ভুল", u: "ফাঁকা" }[st[i]]}</span>${r.flag[i] ? "<span>পরে দেখব চিহ্নিত</span>" : ""}</p>
          <p class="rv-q">${qText(q)}</p>
          ${q.wave ? wave(q.wave) : ""}
          ${q.code ? `<pre class="code">${highlight(q.code)}</pre>` : ""}
          <ol class="rv-o">${q.o.map((o, j) => {
            const cls = [j === q.a ? "right" : "", j === you ? "you" : "", j === you && j !== q.a ? "w" : ""].filter(Boolean).join(" ");
            const tag = j === q.a && j === you ? "আপনার উত্তর, সঠিক" : j === q.a ? "সঠিক উত্তর" : j === you ? "আপনার উত্তর" : "";
            return `<li class="${cls}"><i class="bub">${LETTER[j]}</i><span>${o}${tag ? ` <em>${tag}</em>` : ""}</span></li>`;
          }).join("")}</ol>
        </div>
        <div class="rv-x"><p>${explain(q)}</p><a href="#/mcq/${q.c}/q${q.n}">অধ্যায়ের তালিকায় দেখুন →</a></div>
      </article>`;
    }).join("");
    $("#review").innerHTML = items || '<p class="empty">এখানে কিছু নেই।</p>';
  }
  $("#filters").onclick = e => { const b = e.target.closest("[data-f]"); if (b) { filter = b.dataset.f; renderReview(); } };
  // Retest only this exam's wrong and skipped questions, at the real exam's pace.
  if ($("#retryBtn")) $("#retryBtn").onclick = async () => {
    if (!(await okToReplace())) return;
    startExam({ only: retry, count: retry.length, mins: "auto", neg: r.neg, title: `ভুলগুলো আবার · ${r.title}`, mode: "retry" });
  };
  renderReview();
}


/* ================= ROUTER ================= */
const ROUTES = { "": home, mcq, note, written, setup, exam: examView, result };
function route() {
  if (document.documentElement.classList.contains("locked")) return;   // nothing is drawn behind the password screen
  const [name = "", arg, sub] = location.hash.replace(/^#\/?/, "").split("/");
  const screen = Object.prototype.hasOwnProperty.call(ROUTES, name) ? name : "";
  if (screen !== "exam") { clearInterval(clock); }
  document.body.dataset.screen = screen || "home";
  ROUTES[screen](arg && decodeURIComponent(arg), sub);
  // Top links (computers, tablets) and the bottom tab bar (phones) mark the same section. A note belongs to সূচি.
  const section = { "": "home", note: "home", mcq: "mcq", written: "mcq", setup: "setup", exam: "setup", result: "setup" }[screen];
  $$(".nav a, .tabbar a").forEach(a => a.toggleAttribute("aria-current", a.dataset.nav === section));
  if (!sub) window.scrollTo(0, 0);
  // Floating shortcuts: home everywhere but home; lifted over the exam form's sticky summary.
  $("#toHome").hidden = screen === "";
  const sum = $("#view .summary");
  $("#fab").style.setProperty("--fab-lift", sum ? `${sum.offsetHeight + 12}px` : "0px");
  syncFab();
}
addEventListener("hashchange", route);

/* "Up" shows once the page has scrolled most of a screen. It takes keyboard focus back to the top too. */
function syncFab() { $("#fab").classList.toggle("up", scrollY > Math.min(600, innerHeight * 0.75)); }
addEventListener("scroll", syncFab, { passive: true });
$("#toTop").onclick = () => {
  scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  $(".top .brand").focus({ preventScroll: true });
};

/* Links to things not added yet. */
document.addEventListener("click", e => {
  const soon = e.target.closest("[data-soon]");
  if (soon) { e.preventDefault(); toast("এটি এখনো যোগ হয়নি।"); }
});

/* Light/dark. The phone's browser bar follows the top bar's blue. */
const ROOT = document.documentElement;
function syncChrome() {
  const bar = getComputedStyle(ROOT).getPropertyValue("--bar").trim();
  $$('meta[name="theme-color"]').forEach(m => (m.content = bar));
}
$("#themeBtn").onclick = () => {
  const now = ROOT.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  ROOT.dataset.theme = now === "dark" ? "light" : "dark";
  try { localStorage.setItem("khata_theme", ROOT.dataset.theme); } catch (e) {}
  syncChrome();
};
syncChrome();


/* ================= DAILY PASSWORD ================= */
/* Nothing is drawn until today's password is given. It's asked once per day in each browser;
   when the date changes (Bangladesh time) it's asked again, even if the page was left open.
   The password is "chayan" + today's day of the month (chayan1 … chayan31). Only a fingerprint of
   each of the 31 passwords is kept here (SHA-256 of "khata:" + password, first 32 characters), not the
   passwords. This keeps casual visitors out; someone who knows how to read a site's files can still
   get past a lock that runs in the browser. */
const PASS = ["6d93742c03cbcea6a9a45c4a7bb5f232", "480a356501e2e59dcd52f9aa6b88bb98", "17f3ebcdbfd8a36d5eb114ccbf76a3f7",
  "c5cdf442e07b0551ce59c96b1bc285d9", "0e479a6177e53e263e5d21145e2f88d3", "cd4cf625aa0fb0945c0b1f313b235d39", "1700a30ca2fb0ffc5433696428fc7d3b",
  "6e91bc5660cf8f42e8fac1e8da4f4aff", "efe839fbca7917ad4963c6f587d5b4f4", "d3bc256507f614bb40b0755707b4df87", "b6fec29156c7842d1c120a2d8ae8013e",
  "6335535c805bacdc9ba01c622d499d06", "d642efb4965c137928dcccc25509b208", "5195dad5d783d0ac23b60ebc3290bd97", "e312af8b659d53b666bf41bbe2578ab8",
  "2bff4ba3a6c93dbe198aeb7d4b27ae51", "cf75d0d75e74395ab87bdce04c3bc929", "3d490e1a72fdd96e6b89b528f0d33748", "eb9677470729102c87c3a691de64f503",
  "4f8853a8b8eeaf87aa18808e172e9c35", "44ae56a219a283936892329358fc5bff", "0cb50f15d5359a6d05de4bef623573c3", "804bafcad3fb16da394c18ef912e153d",
  "bf61999a1e1b330ce957cd2a2550c95b", "b3988ed1f5b726626251162cb261d4a8", "8004d5c141eeb63c03ec573bdec24c6a", "1414dd72a937eb24283812af3e2ee437",
  "9afb53d06a2ae709ca238fd0bc71b13e", "103b755b3813c61caf063e34540b46ae", "6282c633f49b6210651897443d61e4b4", "fa1706ecb19ac8320e41dd1f8897c8dd"];
const OPEN_KEY = "khata_open_day";
let openDay = null;   // remembered here too, for browsers that block saving (some private windows)

/* SHA-256 of plain English text, written out so it works even where the browser's own crypto isn't
   available (a page opened over plain http, e.g. on a phone over Wi-Fi). Returns "" for other scripts. */
function sha256(ascii) {
  const rr = (v, a) => (v >>> a) | (v << (32 - a)), max = 2 ** 32, words = [], bits = ascii.length * 8;
  let hash = [], k = [], n = 0; const comp = {};
  for (let c = 2; n < 64; c++) if (!comp[c]) { for (let i = 0; i < 313; i += c) comp[i] = c; hash[n] = (c ** .5 * max) | 0; k[n++] = (c ** (1 / 3) * max) | 0; }
  hash = hash.slice(0, 8); ascii += "\x80";
  while (ascii.length % 64 - 56) ascii += "\x00";
  for (let i = 0; i < ascii.length; i++) { const j = ascii.charCodeAt(i); if (j >> 8) return ""; words[i >> 2] |= j << ((3 - i) % 4) * 8; }
  words[words.length] = (bits / max) | 0; words[words.length] = bits;
  for (let j = 0; j < words.length;) {
    const w = words.slice(j, (j += 16)), old = hash; hash = hash.slice(0, 8);
    for (let i = 0; i < 64; i++) {
      const w15 = w[i - 15], w2 = w[i - 2], a = hash[0], e = hash[4];
      const t1 = hash[7] + (rr(e, 6) ^ rr(e, 11) ^ rr(e, 25)) + ((e & hash[5]) ^ (~e & hash[6])) + k[i] +
        (w[i] = i < 16 ? w[i] : (w[i - 16] + (rr(w15, 7) ^ rr(w15, 18) ^ (w15 >>> 3)) + w[i - 7] + (rr(w2, 17) ^ rr(w2, 19) ^ (w2 >>> 10))) | 0);
      const t2 = (rr(a, 2) ^ rr(a, 13) ^ rr(a, 22)) + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
      hash = [(t1 + t2) | 0].concat(hash); hash[4] = (hash[4] + t1) | 0;
    }
    for (let i = 0; i < 8; i++) hash[i] = (hash[i] + old[i]) | 0;
  }
  let out = ""; for (let i = 0; i < 8; i++) for (let j = 3; j + 1; j--) { const b = (hash[i] >> (j * 8)) & 255; out += (b < 16 ? "0" : "") + b.toString(16); }
  return out;
}

function openToday() {
  const today = khataToday();
  if (openDay === today) return true;
  try { return localStorage.getItem(OPEN_KEY) === today; } catch (e) { return false; }
}

function lock() {
  if (asking) asking(false);             // a yes/no box left open closes as "no"
  clearInterval(clock);                  // a running exam keeps its saved answers and end time
  ROOT.classList.add("locked");
  document.body.dataset.screen = "locked";   // so the exam's answer keys do nothing
  view.replaceChildren();                // nothing stays on the page behind the lock
  document.title = "ICT মাস্টার";
  const input = $("#gatePass");
  input.value = ""; input.type = "password"; $("#gateShow").textContent = "দেখান"; $("#gateErr").hidden = true;
  setTimeout(() => input.focus(), 60);
}

function unlock() {
  openDay = khataToday();
  try { localStorage.setItem(OPEN_KEY, openDay); } catch (e) {}
  ROOT.classList.remove("locked");
  route();
}

$("#gateForm").onsubmit = e => {
  e.preventDefault();
  const input = $("#gatePass"), err = $("#gateErr"), card = $("#gateForm");
  const value = input.value.trim(), day = Number(khataToday().slice(8));
  if (!value) { err.textContent = "পাসওয়ার্ড লিখুন।"; err.hidden = false; input.focus(); return; }
  if (sha256("khata:" + value).slice(0, 32) === PASS[day - 1]) return unlock();
  err.textContent = "পাসওয়ার্ড মেলেনি। আবার চেষ্টা করুন।"; err.hidden = false;
  card.classList.remove("shake"); void card.offsetWidth; card.classList.add("shake");
  input.select();
};
$("#gateShow").onclick = () => {
  const input = $("#gatePass"), show = input.type === "password";
  input.type = show ? "text" : "password";
  $("#gateShow").textContent = show ? "লুকান" : "দেখান";
  input.focus();
};

/* Ask again when the date changes while the page is open: checked every half minute and whenever the tab comes back. */
function watchDay() { if (!ROOT.classList.contains("locked") && !openToday()) lock(); }
setInterval(watchDay, 30000);
document.addEventListener("visibilitychange", () => { if (!document.hidden) watchDay(); });
addEventListener("focus", watchDay);
addEventListener("pageshow", watchDay);

if (openToday()) { ROOT.classList.remove("locked"); route(); } else lock();
