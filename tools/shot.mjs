// Opens the site in headless Google Chrome, unlocks it for today, and takes screenshots or runs a check in the page.
// Start a local server first, from the project folder:  python3 -m http.server 8765 --bind 127.0.0.1
//
//   node tools/shot.mjs <#route> <out-prefix> [width] [light|dark] [what] [js]
//     what: "full" (whole page, the default), "none", or CSS selectors separated by commas (one image per match)
//     js:   an expression to evaluate in the page after it loads; its value is printed (it may be async)
//   e.g. node tools/shot.mjs "#/note/internet" /tmp/net 390 dark "#topology ~ figure.flow"
//        node tools/shot.mjs "#/" /tmp/x 390 light none 'document.querySelector("#tocLede").textContent'
// It always prints the page width, so a phone layout wider than the screen shows up, plus any page errors.
// SITE=http://… changes the address (default http://127.0.0.1:8765/).
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const [hash = "#/", out = path.join(os.tmpdir(), "shot"), width = "390", theme = "light", what = "full", probe] = process.argv.slice(2);
const base = process.env.SITE || "http://127.0.0.1:8765/";
const port = 9300 + Math.floor(Math.random() * 500);
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "shot-chrome-"));
const chrome = spawn("google-chrome", ["--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${dir}`, "--no-first-run", "--hide-scrollbars", "about:blank"], { stdio: "ignore" });
const sleep = ms => new Promise(r => setTimeout(r, ms));

let ws;
for (let i = 0; i < 50 && !ws; i++) {
  try { const p = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find(t => t.type === "page"); if (p) ws = new WebSocket(p.webSocketDebuggerUrl); } catch (e) {}
  if (!ws) await sleep(150);
}
await new Promise(r => ws.addEventListener("open", r));
let id = 0; const pend = new Map(), logs = [];
ws.addEventListener("message", e => {
  const m = JSON.parse(e.data);
  if (m.id && pend.has(m.id)) { pend.get(m.id)(m); pend.delete(m.id); }
  else if (m.method === "Runtime.exceptionThrown") logs.push("ERROR " + (m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text));
  else if (m.method === "Runtime.consoleAPICalled" && /error|warn/.test(m.params.type)) logs.push(m.params.type + " " + m.params.args.map(a => a.value || a.description).join(" "));
});
const send = (method, params = {}) => new Promise(r => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async expr => (await send("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true })).result?.result?.value;

await send("Runtime.enable"); await send("Page.enable");
const W = +width, phone = W < 600;
await send("Emulation.setDeviceMetricsOverride", { width: W, height: phone ? 844 : 900, deviceScaleFactor: phone ? 2 : 1, mobile: phone });
await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-color-scheme", value: theme }] });
await send("Page.navigate", { url: base }); await sleep(800);
await ev(`localStorage.setItem("khata_open_day", khataToday()); localStorage.setItem("khata_theme", "${theme}");`);   // today's unlock
await send("Page.navigate", { url: base + "?r=" + Date.now() + hash }); await sleep(1500);

if (probe) console.log(JSON.stringify(await ev(probe), null, 1));
const shot = async (file, clip) => {
  const r = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: !!clip, ...(clip ? { clip: { ...clip, scale: 1 } } : {}) });
  fs.writeFileSync(file, Buffer.from(r.result.data, "base64"));
};
if (what === "full") {
  const h = await ev("document.documentElement.scrollHeight");
  await shot(`${out}.png`, { x: 0, y: 0, width: W, height: Math.min(h, 16000) });
} else if (what !== "none") {
  let k = 0;
  for (const sel of what.split(",")) {
    const rs = await ev(`[...document.querySelectorAll(${JSON.stringify(sel)})].map(e => { const b = e.getBoundingClientRect(); return { x: 0, y: b.top + scrollY - 8, width: ${W}, height: b.height + 16 }; })`);
    if (!rs || !rs.length) { console.log("no element", sel); continue; }
    for (const r of rs) await shot(`${out}-${String(++k).padStart(2, "0")}.png`, r);
  }
}
console.log("page width", await ev("document.documentElement.scrollWidth"), "of", W, logs.length ? "\n" + logs.join("\n") : "");
ws.close(); chrome.kill(); await sleep(300); fs.rmSync(dir, { recursive: true, force: true });
