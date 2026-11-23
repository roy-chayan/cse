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

It ends with "No problems found." or a list of what to fix.

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
