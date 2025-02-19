import React, { useState } from "react";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CodeMinification = () => {
  const pageTitle = "Minifikace kódu | Web Optimizer";
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

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">Minifikace kódu</h1>

        <p className="section-text">
          Minifikace je technika, která slouží ke zmenšení velikosti kódu
          odstraněním nepotřebných znaků, jako jsou mezery a komentáře. Díky
          tomu se zrychluje načítání webových stránek a šetří přenos dat.
        </p>

        <h2 className="section-subtitle">Moderní nástroje pro minifikaci</h2>
        <p className="section-text">
          Dnes se k minifikaci používají buildovací nástroje jako{" "}
          <strong>Vite</strong>, <strong>Webpack</strong> nebo{" "}
          <strong>Esbuild</strong>. Tyto nástroje postupně nahrazují starší task
          runners jako Gulp a Grunt a dokáží nejen minimalizovat velikost
          souborů, ale i optimalizovat načítání skriptů.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Příklad kódu</h2>
        <button onClick={handleLocalMinification} className="button -bottom">
          {isCodeMinified
            ? "Zobrazit neminifikovaný kód"
            : "Zobrazit minifikovaný kód"}
        </button>
        <pre className="code-block">
          {isCodeMinified ? minifiedCode : unminifiedCode}
        </pre>
      </FadeInOnScroll>
      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle"> Testování minifikace</h2>
        <p className="section-text">
          Zde můžete vyzkoušet, jak minifikace ovlivňuje velikost kódu a
          rychlost načítání stránky.
        </p>

        <Link to="/testovani/minifikace-kodu" className="button -bottom">
          Testování minifikace
        </Link>
      </FadeInOnScroll>
    </>
  );
};

export default CodeMinification;
