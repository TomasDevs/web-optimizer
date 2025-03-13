import React from "react";
import { Helmet } from "react-helmet";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";

const AboutApp = () => {
  return (
    <div className="about-app">
      <Helmet>
        <title>O aplikaci | Web Optimizer</title>
      </Helmet>

      <FadeInOnScroll className="section-page">
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

      <FadeInOnScroll className="section-page">
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
            testování optimalizačních technik s důrazem na výkon a metriky Core
            Web Vitals. Bude probíhat porovnání nástrojů pro měření výkonu a
            analýza vlivu na mobilní i desktopové zařízení.
          </li>
          <li>
            <strong>Rok zpracování:</strong> 2025
          </li>
        </ul>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">
          Proč je to důležité a jak to funguje?
        </h2>
        <p className="section-text">
          Weby musí být rychlé a plynulé, jinak ztrácí uživatele. Tento projekt
          se zaměřuje například na testování a implementaci technik jako
          minifikace kódu, optimalizace obrázků a lazy loading, které mohou
          výrazně zlepšit výkon aplikací.
        </p>
        <p className="section-text">
          Aplikace <strong>Web Optimizer</strong> umožňuje porovnat výkon
          jednotlivých stránek webu před a po optimalizaci pomocí metrik Core
          Web Vitals prostřednictvím PageSpeed Insights API a knihovny
          web-vitals. Doporučeno je také použít specializované nástroje pro
          měření výkonu, které poskytují komplexnější analýzu, více na stránce{" "}
          <a href="/nastroje" className="highlight-link">
            Nástroje
          </a>
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Technologie a hosting</h2>
        <p className="section-text">
          <strong>Web Optimizer</strong> je postaven na moderních webových
          technologiích. Používá{" "}
          <a
            href="https://react.dev/"
            className="highlight-link -external"
            target="_blank"
            rel="noopener noreferrer">
            React
          </a>{" "}
          pro frontend,{" "}
          <a
            href="https://vitejs.dev/"
            className="highlight-link -external"
            target="_blank"
            rel="noopener noreferrer">
            Vite
          </a>{" "}
          pro rychlou vývojovou konfiguraci a{" "}
          <a
            href="https://sass-lang.com/"
            className="highlight-link -external"
            target="_blank"
            rel="noopener noreferrer">
            SCSS
          </a>{" "}
          pro stylování.
        </p>
        <p className="section-text">
          Měření výkonu a Core Web Vitals metrik je implementováno pomocí{" "}
          <a
            href="https://web.dev/articles/vitals"
            className="highlight-link -external"
            target="_blank"
            rel="noopener noreferrer">
            web-vitals
          </a>{" "}
          knihovny pro měření v reálném čase přímo na stránce a{" "}
          <a
            href="https://developers.google.com/speed/pagespeed/insights/"
            className="highlight-link -external"
            target="_blank"
            rel="noopener noreferrer">
            Google PageSpeed Insights API
          </a>{" "}
          pro komplexnější analýzu a doporučení. Pro nejpřesnější výsledky je
          doporučeno provést testování pomocí specializovaných online nástrojů,
          jejichž přehled najdete na stránce{" "}
          <a href="/nastroje" className="highlight-link">
            Nástroje
          </a>
          .
        </p>
        <p className="section-text">
          Aplikace je hostována na{" "}
          <a
            href="https://www.netlify.com/"
            className="highlight-link -external"
            target="_blank"
            rel="noopener noreferrer">
            Netlify
          </a>
          , což umožňuje automatické nasazování, continuous deployment a rychlou
          dostupnost díky globální CDN síti.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Zdrojový kód</h2>
        <p className="section-text">
          Celý projekt je veřejně dostupný na GitHubu:{" "}
          <a
            href="https://github.com/tomasdevs/web-optimizer"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link -external">
            GitHub – Web Optimizer
          </a>
          .<br></br>
          <strong>Upozornění:</strong> Projekt je určen pro akadamické účely a
          nemá veřejnou licenci.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Použité zdroje</h2>
        <p className="section-text">
          Obrázky použité v této aplikaci pocházejí z{" "}
          <a
            href="https://unsplash.com"
            className="highlight-link -external"
            target="_blank"
            rel="noopener noreferrer">
            Unsplash
          </a>
          . <br></br>
          Při vývoji aplikace byly využity informace a doporučení z{" "}
          <a
            href="https://web.dev/"
            className="highlight-link -external"
            target="_blank"
            rel="noopener noreferrer">
            web.dev
          </a>{" "}
          a{" "}
          <a
            href="https://developer.mozilla.org/en-US/"
            className="highlight-link -external"
            target="_blank"
            rel="noopener noreferrer">
            MDN Web Docs
          </a>
          .
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Kontakt</h2>
        <p className="section-text">
          Máte dotazy nebo připomínky? Kontaktujte mě na{" "}
          <a className="highlight-link" href="mailto:stveracek.work@gmail.com">
            stveracek.work@gmail.com
          </a>
          .
        </p>
      </FadeInOnScroll>
    </div>
  );
};

export default AboutApp;
