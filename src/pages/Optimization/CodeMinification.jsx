import React, { useState } from "react";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import { Helmet } from "react-helmet";
import TestButton from "../../components/UI/TestButton";
import CodeToggle from "../../components/UI/CodeToggle";

const CodeMinification = () => {
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

  return (
    <>
      <Helmet>
        <title>Minifikace kódu | Web Optimizer</title>
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
        <CodeToggle
          unminifiedCode={unminifiedCode}
          minifiedCode={minifiedCode}
        />
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle"> Testování minifikace</h2>
        <p className="section-text">
          Zde můžete vyzkoušet, jak minifikace ovlivňuje velikost kódu a
          rychlost načítání stránky.
        </p>

        <TestButton
          to="/testovani/minifikace-kodu"
          label="Testování minifikace"
          className="-bottom"
        />
      </FadeInOnScroll>
    </>
  );
};

export default CodeMinification;
