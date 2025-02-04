import React, { useState } from "react";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const FontOptimization = () => {
  const pageTitle = "Optimalizace fontů | Web Optimizer";

  const googleFontsExample = `
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Roboto:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">
  `;

  const localFontsExample = `
    <link rel="stylesheet" href="/assets/fonts/fonts.css" />

    @font-face {
        font-display: swap; 
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        src: url("/assets/fonts/roboto-v47-latin_latin-ext-regular.woff2") format("woff2");
    }
  `;

  const [showFontExample, setShowFontExample] = useState(false);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">Optimalizace fontů</h1>
        <p className="section-text">
          Optimalizace fontů hraje zásadní roli při zajištění rychlého načítání
          stránek a zlepšení uživatelské zkušenosti. Fonty často tvoří významnou
          část přenesených dat, což může způsobit zpoždění při načítání stránky,
          pokud nejsou správně optimalizovány.
        </p>
      </FadeInOnScroll>
      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">
          Proč je optimalizace fontů důležitá?
        </h2>
        <p className="section-text">
          Rychlejší načítání stránek pozitivně ovlivňuje nejen uživatelskou
          zkušenost, ale také hodnocení ve vyhledávačích, jako je Google.
          Neoptimalizované fonty mohou způsobit zpoždění a přispět ke špatnému
          skóre metriky{" "}
          <code className="inline-code">Largest Contentful Paint (LCP)</code>.
        </p>
      </FadeInOnScroll>
      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Hlavní techniky optimalizace fontů</h2>
        <p className="section-text">
          <strong>1. Lokální hostování fontů:</strong> Namísto načítání fontů z
          externích zdrojů, jako je Google Fonts, lze fonty uložit na váš
          server. Tím se zkracuje doba načítání a zajišťuje větší kontrola nad
          obsahem.
        </p>
        <p className="section-text">
          <strong>2. Subsetting fontů:</strong> Odstraněním nepotřebných znaků z
          fontů se sníží jejich velikost. Například, pokud se v projektu
          nepoužívají speciální znaky nebo cizí abecedy, lze je z fontu vyřadit.
          Například subsety jako "latin", "latin-ext" nebo "cyrillic" mohou být
          použity k omezení znaků pouze na ty, které jsou potřebné.
        </p>
        <p className="section-text">
          <strong>3. Moderní formáty:</strong> Použití formátu{" "}
          <code className="inline-code">WOFF2</code>
          nabízí lepší kompresi a menší velikost souboru ve srovnání s formáty
          jako
          <code className="inline-code">TTF</code> nebo{" "}
          <code className="inline-code">OTF</code>.
        </p>
        <p className="section-text">
          <strong>
            4. Atribut <code className="inline-code">font-display</code>:
          </strong>{" "}
          Použití hodnoty <code className="inline-code">swap</code> zajišťuje,
          že text bude viditelný s fallback fontem, dokud se nenahraje zvolený
          font.
        </p>
      </FadeInOnScroll>
      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Příklad kódu</h2>
        <p className="section-text">
          Následující příklad ukazuje, jak implementovat lokální fonty a Google
          Fonts pomocí HTML. Všimněte si, že{" "}
          <code className="inline-code">preconnect</code> urychluje připojení k
          externím zdrojům.
        </p>
        <button
          onClick={() => setShowFontExample(!showFontExample)}
          className="button button -bottom">
          {showFontExample ? "Zobrazit Google Fonts" : "Zobrazit lokální fonty"}
        </button>
        <pre className="code-block">
          {showFontExample ? localFontsExample : googleFontsExample}
        </pre>
      </FadeInOnScroll>
      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Výhody lokálních fontů</h2>
        <p className="section-text">
          Použití lokálních fontů snižuje závislost na třetích stranách a
          zajišťuje konzistentní výkon. To je zvláště důležité v případě výpadků
          služby, jako je Google Fonts, nebo při použití offline aplikací.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Testování fontů</h2>
        <p className="section-text">
          Otestujte rozdíly mezi lokálními fonty a Google Fonts na testovací
          stránce.
        </p>
        <Link to="/testovani/fonty" className="button -bottom">
          Testování fontů
        </Link>
      </FadeInOnScroll>
    </>
  );
};

export default FontOptimization;
