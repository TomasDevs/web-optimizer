import fsExtra from "fs-extra";
const { copySync, removeSync, readFileSync, writeFileSync } = fsExtra;

// Cílový adresář pro výsledný build
const distDir = "dist";

// Smazání existujícího `dist`, pokud existuje
removeSync(distDir);

// Kopírování minifikované verze jako hlavní build
copySync("dist-minified", distDir);

// Přidání neminifikované verze pouze pro testovací podstránky
copySync("dist-unminified", distDir);

// Smazání pomocných složek
removeSync("dist-minified");
removeSync("dist-unminified");

// Úprava `index.html`
const indexPath = `${distDir}/index.html`;
let indexContent = readFileSync(indexPath, "utf8");

// Odstranění odkazů na `unminified` soubory
indexContent = indexContent.replace(
  /<script.*?src="\/unminified-index.js".*?><\/script>/g,
  `<script type="module" src="/minified-index.js"></script>`
);
indexContent = indexContent.replace(
  /<link.*?href="\/unminified-index.css".*?>/g,
  `<link rel="stylesheet" href="/minified-index.css">`
);

// Zajištění, že `index.html` má vždy minifikované soubory
writeFileSync(indexPath, indexContent, "utf8");

console.log("Soubory úspěšně sloučeny do dist/ a index.html opraven!");
