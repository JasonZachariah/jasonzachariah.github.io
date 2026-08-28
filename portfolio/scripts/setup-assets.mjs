import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "../..");
const pub = path.join(root, "portfolio/public");

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

fs.mkdirSync(pub, { recursive: true });
for (const file of ["jzlogdark.png", "jzlogodark-favicon.svg"]) {
  fs.copyFileSync(path.join(root, file), path.join(pub, file));
}
copyDir(path.join(root, "fonts"), path.join(pub, "fonts"));
copyDir(path.join(root, "images"), path.join(pub, "images"));

const styles = fs
  .readFileSync(path.join(root, "jasonzachariah/css/styles.css"), "utf8")
  .replace(/url\(["']\.\.\/\.\.\/fonts\//g, 'url("/fonts/')
  .replace(/url\(["']\.\.\/\.\.\/jzlogdark\.png["']\)/g, "url('/jzlogdark.png')")
  .replace(/url\(["']\.\.\/\.\.\/images\//g, 'url("/images/');

fs.writeFileSync(
  path.join(root, "portfolio/app/globals.css"),
  '@import "tailwindcss";\n\n' + styles,
);

let main = fs.readFileSync(path.join(root, "main.js"), "utf8");
main = main.replace(/async function initRoughNotations[\s\S]*?^}/m, "");
main = main.replace(/async function initH4LinkRoughHover[\s\S]*?^}/m, "");
main = main.replace(/function initMobileNav[\s\S]*?^}/m, "");
main = main.replace(/initMobileNav\(\);\s*/g, "");
main = main.replace(/initRoughNotations\(\);\s*/g, "");
main = main.replace(/initH4LinkRoughHover\(\);\s*/g, "");
main = main.replace(/document\.addEventListener\('DOMContentLoaded', init\);[\s\S]*$/, "");
main = main.replace(/if \(document\.readyState[\s\S]*?init\(\);\s*}/, "");
main = main.replace(/window\.addEventListener\('pageshow'[\s\S]*?\}\);/, "");
main = `export function initSiteEffects() {\n${main}\n  init();\n}\n`;

fs.mkdirSync(path.join(root, "portfolio/lib"), { recursive: true });
fs.writeFileSync(path.join(root, "portfolio/lib/site-effects.js"), main);

let archive = fs
  .readFileSync(path.join(root, "archive-grid.js"), "utf8")
  .replace(/src: "images\//g, 'src: "/images/');
archive = `export function initArchiveGrid() {\n${archive}\n}\n`;
fs.writeFileSync(path.join(root, "portfolio/lib/archive-grid.js"), archive);

console.log("setup complete");
