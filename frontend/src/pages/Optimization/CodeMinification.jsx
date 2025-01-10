import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import TestPageSpeed from "../../components/testing/TestPageSpeed";

const CodeMinification = () => {
  const [searchParams, setSearchParams] = useSearchParams();
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
    <section className="code-minification">
      <h1 className="subpage-title">Minifikace kódu</h1>

      <p className="section-text">
        Minifikace je proces, který zmenšuje velikost kódu odstraněním
        nadbytečných znaků, neovlivňuje funkčnost kódu a zlepšuje rychlost
        načítání. Níže naleznete příklad neminifikovaného kódu a možnost
        přepnout na minifikovanou verzi.
      </p>

      <div className="code-minification__benefits">
        <h2 className="code-minification__subtitle">Výhody minifikace</h2>
        <ul className="code-minification__list">
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
      </div>

      <div className="code-minification__example">
        <h2 className="section-subtitle">Příklad kódu</h2>
        <pre className="code-minification__code-block">
          {isCodeMinified ? minifiedCode : unminifiedCode}
        </pre>
        <button onClick={handleLocalMinification} className="button">
          {isCodeMinified
            ? "Zobrazit neminifikovaný kód"
            : "Zobrazit minifikovaný kód"}
        </button>
      </div>

      <div className="code-minification__page-toggle">
        <h2 className="section-subtitle">Minifikace stránky</h2>
        <p className="code-minification__process">
          Stránka využívá <strong>query parametry</strong> v URL pro přepínání
          mezi minifikovanou a neminifikovanou verzí. Pokud je parametr{" "}
          <code>?minified=true</code>, stránka se načte v minifikovaném stavu.
          Pro neminifikovaný stav použijte <code>?minified=false</code>.
        </p>
        <p>
          Aktuálně je stránka v{" "}
          <strong>
            {isMinifiedPage ? "minifikovaném" : "neminifikovaném"} stavu
          </strong>
          .
        </p>
        <button onClick={handlePageMinificationToggle} className="button">
          {isMinifiedPage
            ? "Přepnout na neminifikovanou stránku"
            : "Přepnout na minifikovanou stránku"}
        </button>
      </div>

      <div className="code-minification__notes">
        <h2 className="section-subtitle">Automatizované testování výkonu</h2>
        <p>
          Pro efektivní testování doporučujeme použít nástroje jako{" "}
          <a
            href="https://pagespeed.web.dev/"
            target="_blank"
            rel="noopener noreferrer">
            PageSpeed Insights
          </a>{" "}
          nebo{" "}
          <a
            href="https://web.dev/measure/"
            target="_blank"
            rel="noopener noreferrer">
            web.dev Measure
          </a>
          .
        </p>
        <TestPageSpeed />
      </div>
    </section>
  );
};

export default CodeMinification;
