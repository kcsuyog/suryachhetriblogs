import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
const files = readdirSync("dist", { recursive: true }).filter((file) =>
  file.endsWith(".html"),
);
assert(files.length > 0, "Run npm run build first");
const articles = files.filter((file) =>
  /^blog\/[^/]+\/index\.html$/.test(file),
);
assert(articles.length > 0, "No articles generated");
const rss = readFileSync("dist/rss.xml", "utf8");
const sitemap = readFileSync("dist/sitemap-0.xml", "utf8");
assert.equal(
  (rss.match(/<item>/g) || []).length,
  articles.length,
  "RSS must include every published article",
);
for (const file of files) {
  const html = readFileSync(join("dist", file), "utf8");
  assert.match(html, /<html lang="ne">/, `${file}: missing Nepali language`);
  assert.match(html, /<h1[ >]/, `${file}: missing main heading`);
  for (const [, raw] of html.matchAll(/(?:href|src)="(\/[^"\s]*)"/g)) {
    if (raw.startsWith("//")) continue;
    const path = decodeURIComponent(raw.split(/[?#]/)[0]);
    const target = join("dist", path, path.endsWith("/") ? "index.html" : "");
    assert(existsSync(target), `${file}: broken link or asset ${path}`);
  }
}
for (const file of articles) {
  const path = "/" + file.replace("index.html", "");
  assert(rss.includes(path), `Article missing from RSS: ${path}`);
  assert(sitemap.includes(path), `Article missing from sitemap: ${path}`);
}
for (const category of ["learning", "travel", "experience"]) {
  const html = readFileSync(`dist/category/${category}/index.html`, "utf8");
  assert.match(html, /class="post-card"/, `Empty category ${category}`);
}
console.log(
  `Passed: ${files.length} pages, ${articles.length} articles, internal links, images, categories, RSS and sitemap.`,
);
