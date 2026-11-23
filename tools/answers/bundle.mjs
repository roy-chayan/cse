// Rewrites what the site loads from the answer files: answers/index.js (which questions have answers) and one
// bundle per paper in answers/paper/ (its answers plus exactly the earlier answers it reuses).
//   node tools/answers/bundle.mjs
// Every build-N-school.mjs already does this; run it by hand after editing a hand-written answer file
// (answers/11-school.js to 18-school.js). tools/check-site.mjs reports when the bundles are out of date.
import { writeSiteAnswers } from "./lib.mjs";
writeSiteAnswers();
