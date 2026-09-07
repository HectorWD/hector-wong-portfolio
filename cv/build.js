#!/usr/bin/env node
/**
 * Builds Hector Wong's CV in both languages from a single data source.
 *
 *   node build.js            -> HTML + PDF for every language
 *   node build.js --html     -> HTML only (skip Chrome)
 *
 * Output lands in ./dist. The PDF is produced by headless Chrome, so no
 * LaTeX toolchain is required; the Computer Modern faces in ./fonts give it
 * the classic serif look.
 */

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = __dirname;
const DIST = path.join(ROOT, "dist");
const DATA = JSON.parse(fs.readFileSync(path.join(ROOT, "cv-data.json"), "utf8"));

const LANGS = ["en", "es"];
const FILENAME = { en: "Hector-Wong-CV-EN", es: "Hector-Wong-CV-ES" };

const CHROME_CANDIDATES = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/** Inline the woff faces as data URIs so the HTML is a single portable file. */
function fontFaces() {
  const faces = [
    ["cmunrm", "normal", "normal"],
    ["cmunbx", "bold", "normal"],
    ["cmunti", "normal", "italic"],
    ["cmunbi", "bold", "italic"],
  ];
  return faces
    .map(([file, weight, style]) => {
      const b64 = fs.readFileSync(path.join(ROOT, "fonts", `${file}.woff`)).toString("base64");
      return `@font-face{font-family:'Computer Modern Serif';src:url(data:font/woff;base64,${b64}) format('woff');font-weight:${weight};font-style:${style};font-display:block}`;
    })
    .join("\n");
}

function styles() {
  return `
${fontFaces()}

@page { size: letter; margin: 0.55in 0.7in; }

* { box-sizing: border-box; }

html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }

body {
  font-family: 'Computer Modern Serif', 'Cambria', Georgia, serif;
  font-size: 10.1pt;
  line-height: 1.36;
  color: #14161a;
  margin: 0;
  text-rendering: geometricPrecision;
}

/* ---- header ------------------------------------------------------ */

header { text-align: center; margin-bottom: 10pt; }

h1 {
  font-size: 23pt;
  font-weight: normal;
  letter-spacing: 0.05em;
  margin: 0 0 3pt;
  line-height: 1.1;
}

.headline {
  font-style: italic;
  font-size: 10.9pt;
  color: #333840;
  margin-bottom: 6pt;
}

.contact {
  font-size: 9.3pt;
  color: #2b3038;
  line-height: 1.6;
}

.contact .sep { color: #9aa1ac; padding: 0 5pt; }

/* ---- sections ---------------------------------------------------- */

section { margin-bottom: 9pt; }

/* The trailing margin is invisible on screen but still occupies the print box,
   which is enough to spill a just-fitting CV onto a second page. */
section:last-of-type { margin-bottom: 0; }
body > *:last-child { margin-bottom: 0; }
.skill-row:last-child { margin-bottom: 0; }

/* Letter-spacing above ~0.12em makes some PDF text extractors split words
   ("E D U C AT I O N"), which breaks ATS section detection. Keep it modest. */
h2 {
  font-size: 10pt;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #14161a;
  margin: 0 0 4pt;
  padding-bottom: 2.5pt;
  border-bottom: 0.6pt solid #14161a;
}

p { margin: 0 0 6pt; }

.profile { text-align: justify; hyphens: auto; }

/* ---- entries ----------------------------------------------------- */

.entry { margin-bottom: 7pt; }
.entry:last-child { margin-bottom: 0; }

.entry-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12pt;
  margin-bottom: 1pt;
}

.role { font-weight: bold; font-size: 11pt; }

.dates {
  font-style: italic;
  font-size: 9.6pt;
  color: #333840;
  white-space: nowrap;
}

.org {
  font-style: italic;
  font-size: 10.2pt;
  color: #24282f;
  margin-bottom: 4pt;
}

.context {
  font-size: 9.5pt;
  color: #3d434c;
  text-align: justify;
  hyphens: auto;
  margin-bottom: 5pt;
  padding-left: 10pt;
  border-left: 0.6pt solid #ccd1d8;
}

ul { margin: 0; padding-left: 15pt; }

li { margin-bottom: 2pt; text-align: justify; hyphens: auto; }

li::marker { color: #6b727d; }

/* ---- skills ------------------------------------------------------ */

/* Deliberately NOT flex: flex items are emitted as separate text runs, so
   extractors pull every label out first and then every value, producing
   "Languages Frameworks Testing" followed by an orphaned list of values.
   A hanging indent keeps each row a single run of text while still aligning. */
.skill-row {
  margin: 0 0 3pt;
  padding-left: 84pt;
  text-indent: -84pt;
}

.skill-label { font-weight: bold; }

.note { font-size: 9.4pt; font-style: italic; color: #3d434c; }

/* Keep an entry from splitting across a page break. */
.entry, .skill-row { break-inside: avoid; page-break-inside: avoid; }
h2 { break-after: avoid; page-break-after: avoid; }
`;
}

function renderEntry(e) {
  const orgBits = [e.company, e.location].filter(Boolean).join(" — ");
  return `
      <div class="entry">
        <div class="entry-head">
          <span class="role">${esc(e.role)}</span>
          <span class="dates">${esc(e.dates)}</span>
        </div>
        ${orgBits ? `<div class="org">${esc(orgBits)}</div>` : ""}
        ${e.context ? `<div class="context">${esc(e.context)}</div>` : ""}
        <ul>
${e.bullets.map((b) => `          <li>${esc(b)}</li>`).join("\n")}
        </ul>
      </div>`;
}

function renderEducation(e) {
  return `
      <div class="entry">
        <div class="entry-head">
          <span class="role">${esc(e.degree)}</span>
          <span class="dates">${esc(e.dates)}</span>
        </div>
        <div class="org">${esc(e.school)}${e.note ? ` <span class="note">— ${esc(e.note)}</span>` : ""}</div>
      </div>`;
}

function renderHTML(lang) {
  const c = DATA.contact;
  const d = DATA[lang];
  const s = d.sections;
  const sep = '<span class="sep">·</span>';

  const contactLine = [esc(c.email), esc(c.phone), esc(c.location)].join(sep);
  const linksLine = [esc(c.github), esc(c.linkedin)].join(sep);

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<title>${esc(c.name)} — ${esc(d.headline)}</title>
<style>${styles()}</style>
</head>
<body>
  <header>
    <h1>${esc(c.name)}</h1>
    <div class="headline">${esc(d.headline)}</div>
    <div class="contact">
      ${contactLine}<br>
      ${linksLine}
    </div>
  </header>

  <section>
    <h2>${esc(s.profile)}</h2>
    <p class="profile">${esc(d.profile)}</p>
  </section>

  <section>
    <h2>${esc(s.experience)}</h2>
${d.experience.map(renderEntry).join("\n")}
  </section>

  <section>
    <h2>${esc(s.education)}</h2>
${d.education.map(renderEducation).join("\n")}
  </section>

  <section>
    <h2>${esc(s.skills)}</h2>
${d.skills
  .map(
    (k) =>
      `    <p class="skill-row"><span class="skill-label">${esc(k.label)}</span>&nbsp;&nbsp;${esc(k.items)}</p>`
  )
  .join("\n")}
  </section>
</body>
</html>
`;
}

function findChrome() {
  return CHROME_CANDIDATES.find((p) => fs.existsSync(p)) || null;
}

/**
 * Count pages by looking for page objects in the raw PDF. Chrome writes these
 * uncompressed, so a scan is enough and keeps the build dependency-free.
 * A CV that silently grows to two pages is the failure mode worth catching.
 */
function countPages(pdfPath) {
  const raw = fs.readFileSync(pdfPath, "latin1");
  const matches = raw.match(/\/Type\s*\/Page[^s]/g);
  return matches ? matches.length : 0;
}

function toPDF(chrome, htmlPath, pdfPath) {
  const profile = fs.mkdtempSync(path.join(require("os").tmpdir(), "cvchrome-"));
  try {
    execFileSync(
      chrome,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--no-first-run",
        `--user-data-dir=${profile}`,
        "--virtual-time-budget=10000",
        "--no-pdf-header-footer",
        `--print-to-pdf=${pdfPath}`,
        "file:///" + htmlPath.replace(/\\/g, "/"),
      ],
      { stdio: "pipe", timeout: 120000 }
    );
  } finally {
    fs.rmSync(profile, { recursive: true, force: true });
  }
}

function main() {
  const htmlOnly = process.argv.includes("--html");
  fs.mkdirSync(DIST, { recursive: true });

  const chrome = htmlOnly ? null : findChrome();
  if (!htmlOnly && !chrome) {
    console.error("Chrome/Edge not found — writing HTML only. Print to PDF manually.");
  }

  for (const lang of LANGS) {
    const base = FILENAME[lang];
    const htmlPath = path.join(DIST, `${base}.html`);
    fs.writeFileSync(htmlPath, renderHTML(lang), "utf8");
    console.log(`html  ${path.relative(ROOT, htmlPath)}`);

    if (chrome) {
      const pdfPath = path.join(DIST, `${base}.pdf`);
      toPDF(chrome, htmlPath, pdfPath);
      const kb = (fs.statSync(pdfPath).size / 1024).toFixed(0);
      const pages = countPages(pdfPath);
      console.log(`pdf   ${path.relative(ROOT, pdfPath)}  (${kb} KB, ${pages} page${pages === 1 ? "" : "s"})`);
      if (pages !== 1) {
        console.warn(
          `      WARNING: ${base} is ${pages} pages. Trim cv-data.json or tighten spacing in styles().`
        );
        process.exitCode = 1;
      }
    }
  }
}

main();
