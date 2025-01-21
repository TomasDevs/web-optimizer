import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TestPageSpeed from "../../components/testing/TestPageSpeed";

const CodeMinification = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.has("minified")) {
      setSearchParams({ minified: "false" }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const isMinifiedPage = searchParams.get("minified") === "true";

  const [isCodeMinified, setIsCodeMinified] = useState(false);

  const unminifiedCode = `
    function add(a, b) {
      // Přičte dvě čísla
      console.log("Výpočet:", a + b);
      return a + b;
    }

    function subtract(a, b) {
      // Odečte dvě čísla
      console.log("Výpočet:", a - b);
      return a - b;
    }
  `;

  const minifiedCode = `function add(a,b){console.log("Výpočet:",a+b);return a+b;}function subtract(a,b){console.log("Výpočet:",a-b);return a-b;}`;

  const handleLocalMinification = () => {
    setIsCodeMinified(!isCodeMinified);
  };

  const handlePageMinificationToggle = () => {
    setSearchParams({ minified: !isMinifiedPage });
  };

  return (
    <section className="code-minification section-page">
      <h1 className="subpage-title">Minifikace kódu</h1>

      <p className="section-text">
        Minifikace je proces, který zmenšuje velikost kódu odstraněním
        nadbytečných znaků, jako jsou mezery, komentáře nebo nepotřebné znaky.
        Neovlivňuje funkčnost kódu a zlepšuje rychlost načítání.
      </p>

      <section className="code-minification__example section-page">
        <h2 className="section-subtitle -small">Příklad kódu</h2>
        <button
          onClick={handleLocalMinification}
          className="button button -bottom">
          {isCodeMinified
            ? "Zobrazit neminifikovaný kód"
            : "Zobrazit minifikovaný kód"}
        </button>
        <pre className="code-block">
          {isCodeMinified ? minifiedCode : unminifiedCode}
        </pre>
      </section>

      <section className="code-minification__benefits section-page">
        <h2 className="section-subtitle -small">Výhody minifikace</h2>
        <ul className="code-minification__list section-text">
          <li className="code-minification__list-item">
            🚀 Rychlejší načítání stránky
          </li>
          <li className="code-minification__list-item">
            📉 Snížení velikosti souborů až o 30–50 %
          </li>
          <li className="code-minification__list-item">
            ⚙️ Lepší skóre Core Web Vitals
          </li>
        </ul>
      </section>

      <section className="code-minification__page-toggle section-page">
        <h2 className="section-subtitle -small">Minifikace stránky</h2>
        <p className="section-text">
          Stránka využívá <strong>query parametry</strong> v URL pro přepínání
          mezi minifikovanou a neminifikovanou verzí. Pokud je parametr{" "}
          <code className="inline-code">?minified=true</code>, stránka se načte
          v minifikovaném stavu. Pro neminifikovaný stav použijte{" "}
          <code className="inline-code">?minified=false</code>.
        </p>
        <p className="status-text">
          Aktuálně je stránka v{" "}
          <strong>
            {isMinifiedPage ? "minifikovaném" : "neminifikovaném"} stavu
          </strong>
          .
        </p>
        <button
          onClick={handlePageMinificationToggle}
          className="button -margin">
          {isMinifiedPage
            ? "Přepnout na neminifikovanou stránku"
            : "Přepnout na minifikovanou stránku"}
        </button>
      </section>

      <section className="code-minification__notes section-page">
        <TestPageSpeed />
      </section>
    </section>
  );
};

export default CodeMinification;
