import React from "react";

const AboutApp = () => {
  return (
    <div className="about-app">
      <section className="section-page">
        <h1 className="subpage-title">O aplikaci</h1>
        <p className="section-text">
          <strong>Web Optimizer</strong> je moderní platforma vyvinutá jako
          součást bakalářské práce na{" "}
          <a
            href="https://www.vspj.cz/cs/"
            className="highlight-link"
            target="_blank"
            rel="noopener noreferrer">
            Vysoké škole polytechnické Jihlava
          </a>
          . Aplikace umožňuje testování různých technik optimalizace webových
          aplikací s cílem zlepšit jejich výkon a uživatelskou zkušenost.
        </p>
      </section>
      <section className="section-page">
        <h2 className="section-subtitle">Informace o práci</h2>
        <ul className="section-text">
          <li>
            <strong>Autor:</strong> Tomáš Štveráček
          </li>
          <li>
            <strong>Vedoucí práce:</strong> PaedDr. František Smrčka, Ph.D.
          </li>
          <li>
            <strong>Zadání:</strong> Vytvořit webovou aplikaci pro testování
            optimalizačních technik, měření výkonu pomocí metrik Core Web Vitals
            a analýzu jejich dopadu na výkonnost aplikací.
          </li>
        </ul>
      </section>
      <section className="section-page">
        <h2 className="section-subtitle">Úvod do problematiky</h2>
        <p className="section-text">
          S rostoucím významem webových technologií a jejich každodenním
          využíváním na různých zařízeních jsou uživatelé stále náročnější na
          rychlost a plynulost aplikací. I malé zpoždění při načítání stránky
          může ovlivnit spokojenost uživatele a vést ke ztrátě zájmu. V
          konkurenčním prostředí, jako je e&#8209;commerce, je optimalizace
          výkonu zásadní nejen pro udržení zákazníků, ale také pro zlepšení
          viditelnosti ve vyhledávačích (SEO). Tento projekt se zaměřuje na
          analýzu a testování optimalizačních technik, které mohou výrazně
          ovlivnit uživatelský zážitek a výkonnost webových aplikací na různých
          zařízeních.
        </p>
      </section>
      <section className="section-page">
        <h2 className="section-subtitle">Popis aplikace</h2>
        <p className="section-text">
          Web Optimizer umožňuje testování technik, jako je minifikace kódu,
          optimalizace obrázků nebo lazy loading. Aplikace poskytuje přehledný
          způsob, jak porovnat výkon mezi optimalizovanými a neoptimalizovanými
          verzemi pomocí metrik Core Web Vitals, což uživatelům pomáhá lépe
          pochopit přínos jednotlivých technik.
        </p>
        <p className="section-text">
          Aplikace využívá populární nástroje pro měření výkonu, jako jsou
          PageSpeed Insights, GTmetrix, WebPageTest, Pingdom Tools a Chrome
          DevTools. Tyto nástroje poskytují detailní pohled na výkon aplikace a
          pomáhají identifikovat oblasti pro zlepšení.
        </p>
      </section>
      <section className="section-page">
        <h2 className="section-subtitle">Kontakt a poděkování</h2>
        <p className="section-text">
          Děkuji všem, kteří přispěli k realizaci tohoto projektu svou odbornou
          radou, podporou nebo zpětnou vazbou.
        </p>
        <p className="section-text">
          <strong>Máte dotazy nebo připomínky?</strong> Neváhejte mě kontaktovat
          na e-mailu:{" "}
          <a className="highlight-link" href="mailto:stveracek.work@gmail.com">
            stveracek.work@gmail.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default AboutApp;
