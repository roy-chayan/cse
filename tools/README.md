# tools

Helper scripts for building and checking the site. The site never loads them; they only run on your computer, with Node.js, from the project folder (`cd` into it first).

## check-site.mjs: check everything

```
node tools/check-site.mjs
```

Run this after adding MCQs, past questions or links. It changes nothing, it only reports:

- every MCQ has four different options, an answer letter (ক খ গ ঘ) and an explanation, and no bare `<` in its text
- every chapter note's practice sets name real MCQs, and every MCQ of the chapter is in some set
- every past written question in `mcq/written-prev.js` points to a real paper, question, অথবা and part
- every answer link (`ans`) lands on a real note section or written paper
- every part of an earlier answer that a model answer reuses (`data-include`) exists
- every ask of every written paper falls into a theme of the "বারবার আসা প্রশ্ন" page (`mcq/written-themes.js`), and each theme's note link works

It ends with "No problems found." or a list of what to fix.

## answers/build-NN-school.mjs: model answers for the older papers

```
node tools/answers/build-9-school.mjs
```

Each script writes one file, `answers/<no>-school.js`, so edit the script and rebuild rather than the output. Worked blocks (calculations, circuits, flowcharts) are copied from the chapter notes in `index.html` when the script runs, so rerun it after changing one of those blocks. A question that an earlier paper already asked reuses that answer instead of repeating it. Every number is checked against a computation before the file is written, and the build stops with "check failed" if a check or a reused part doesn't match. `answers/lib.mjs` holds the shared pieces (`ok`, `bn`, `part`, `include`, `side`, `writeAnswers` and so on). When only a piece of an earlier answer fits (a reuse always brings the whole part), `fromAnswer` copies just that piece at build time, as the ৮ম script does for the dot-matrix printer. `seriesSum` runs a series such as 1 + 2 + … + 50 and draws its flowchart and trace table from the same run. `sopCircuit` draws a sum-of-products circuit exactly as printed (used where a paper's overbars didn't print), and `fromSection` lifts a whole note sub-section, smaller headings included.

Every paper from ৩য় to ১৮তম now has full model answers in `answers/<no>-school.js`: ১১তম–১৮তম written by hand, ৩য়–১০ম made by these scripts. After changing a note block that a script lifts, rerun the scripts for ৩য়–১০ম and then `node tools/check-site.mjs`.

## answers/bundle.mjs: what the site actually loads

```
node tools/answers/bundle.mjs
```

The site never loads `answers/<no>-school.js` directly. Every visit loads only `answers/index.js` (which questions have answers, under 1 KB). Opening a paper loads one bundle, `answers/paper/<no>-school.js`: that paper's answers plus exactly the earlier answers it reuses. Both are generated from the answer files; every build script regenerates them, but after editing a hand-written answer file (১১তম–১৮তম) run `bundle.mjs` yourself. `check-site.mjs` reports when they are out of date.

To find an earlier answer to reuse, list every part of every model answer, optionally filtered by words:

```
node tools/answer-index.mjs ফ্লোচার্ট
```

## mcq/gen-chNN-mcq.mjs: how the site's own MCQs were made

Each chapter file starts with the book's questions, in the book's order; the ones after them were written for this site. These scripts are the record of how the chapter ২, ৩, ৪ and ৫ ones were made: the questions, and the calculation behind every answer (sums, codes, gate counts checked with truth tables).

```
node tools/mcq/gen-ch05-mcq.mjs mcq/ch05.js --check
```

`--check` recomputes every answer and confirms the chapter file still holds exactly these questions. Without `--check` the script would add them, and it refuses (with "check failed") once they are already there, so it can't add them twice.

The scripts for chapters ৬ and ৭, and the ones that wrote the chapter ৫–৭ notes, were lost before this folder existed. Those notes are now edited directly in `index.html`.

## shot.mjs: look at a page

```
python3 -m http.server 8765 --bind 127.0.0.1      # in one terminal: serve the site
node tools/shot.mjs "#/note/internet" /tmp/net 390 dark "#topology ~ figure.flow"
```

Opens the site in headless Google Chrome (unlocked for today), at a phone (390) or desktop (1280) width, in light or dark, and saves screenshots of the whole page or of the elements you name. It also prints the page width, so a phone layout wider than the screen shows up, and any errors from the page. Details are at the top of the file.
