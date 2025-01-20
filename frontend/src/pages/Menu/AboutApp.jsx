import React from "react";
import FadeInOnScroll from "../../components/FadeInOnScroll";

const AboutApp = () => {
  return (
    <div className="about-app">
      <section className="section-page">
        <FadeInOnScroll className="section-description">
          <h1 className="subpage-title">O aplikaci</h1>
          <p className="section-text">
            <strong>Web Optimizer</strong> je nástroj pro testování výkonu a
            optimalizaci webů, vyvinutý jako součást bakalářské práce na{" "}
            <a
              href="https://www.vspj.cz/cs/"
              className="highlight-link -external"
              target="_blank"
              rel="noopener noreferrer">
              Vysoké škole polytechnické Jihlava
            </a>
            . Pomáhá zlepšit rychlost a uživatelský zážitek webových aplikací.
          </p>
        </FadeInOnScroll>
      </section>
      <section className="section-page">
        <FadeInOnScroll className="section-description">
          <h2 className="section-subtitle">Informace o práci</h2>
          <ul className="section-text">
            <li>
              <strong>Název:</strong> Optimalizační techniky a jejich dopad na
              výkon webových aplikací
            </li>
            <li>
              <strong>Autor:</strong> Tomáš Štveráček
            </li>
            <li>
              <strong>Vedoucí práce:</strong> PaedDr. František Smrčka, Ph.D.
            </li>
            <li>
              <strong>Zadání:</strong> Cílem práce je vytvořit platformu pro
              testování optimalizačních technik s důrazem na výkon a metriky
              Core Web Vitals. Bude probíhat porovnání nástrojů pro měření
              výkonu a analýza vlivu na mobilní i desktopové zařízení.
            </li>
          </ul>
        </FadeInOnScroll>
      </section>

      <section className="section-page">
        <FadeInOnScroll className="section-description">
          <h2 className="section-subtitle">
            Proč je to důležité a jak to funguje?
          </h2>
          <p className="section-text">
            Weby musí být rychlé a plynulé, jinak ztrácí uživatele. Tento
            projekt se zaměřuje na testování a implementaci technik jako
            minifikace kódu, optimalizace obrázků a lazy loading, které mohou
            výrazně zlepšit výkon aplikací.
          </p>
          <p className="section-text">
            Aplikace <strong>Web Optimizer</strong> umožňuje porovnat výkon
            tohoto webu před a po optimalizaci pomocí metrik Core Web Vitals. K
            analýze výkonu používá nástroje jako PageSpeed Insights, GTmetrix a
            WebPageTest a pomáhá identifikovat oblasti pro zlepšení.
          </p>
        </FadeInOnScroll>
      </section>

      <section className="section-page">
        <FadeInOnScroll className="section-description">
          <h2 className="section-subtitle">Kontakt</h2>
          <p className="section-text">
            Máte dotazy nebo připomínky? Kontaktujte mě na{" "}
            <a
              className="highlight-link"
              href="mailto:stveracek.work@gmail.com">
              stveracek.work@gmail.com
            </a>
            .
          </p>
        </FadeInOnScroll>
      </section>
    </div>
  );
};

export default AboutApp;
