import fsExtra from "fs-extra";
const { copySync, removeSync, readFileSync, writeFileSync } = fsExtra;

// Cílový adresář pro výsledný build
const distDir = "dist";

// Smaž existující dist, pokud existuje
removeSync(distDir);

// Zkopíruj oba buildy do dist/
copySync("dist-minified", distDir);
copySync("dist-unminified", distDir);

// Smazání pomocných složek
removeSync("dist-minified");
removeSync("dist-unminified");

// Oprava index.html – odstranění pevně vložených CSS a JS souborů
const indexPath = `${distDir}/index.html`;
let indexContent = readFileSync(indexPath, "utf8");

// Odebrání linků na unminified soubory
indexContent = indexContent.replace(
  /<script.*?src="\/unminified-index.js".*?><\/script>/g,
  ""
);
indexContent = indexContent.replace(
  /<link.*?href="\/unminified-index.css".*?>/g,
  ""
);

// Uložit upravený index.html
writeFileSync(indexPath, indexContent, "utf8");

console.log("Soubory úspěšně sloučeny do dist/ a index.html opraven!");
