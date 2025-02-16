import fsExtra from "fs-extra";
const { copySync, removeSync } = fsExtra;

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

console.log("Soubory úspěšně sloučeny do dist/");
