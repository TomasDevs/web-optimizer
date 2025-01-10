import React from "react";

const Tools = () => {
  return (
    <div className="tools-page">
      <section className="section-page">
        <h1 className="subpage-title">Nástroje pro měření výkonu</h1>
        <p className="section-text">
          Pro analýzu a optimalizaci výkonu webových aplikací je k dispozici
          široká škála nástrojů. Níže naleznete přehled klíčových nástrojů spolu
          s jejich možnostmi a odkazem na podrobnosti.
        </p>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle">Klíčové nástroje</h2>
        <ul className="tools-list">
          <li>
            <a
              href="https://pagespeed.web.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link">
              PageSpeed Insights
            </a>
            <p className="section-text">
              Nástroj od Googlu zaměřený na analýzu výkonu a doporučení pro
              zlepšení rychlosti načítání webových stránek.
            </p>
          </li>
          <li>
            <a
              href="https://developers.google.com/web/tools/lighthouse"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link">
              Google Lighthouse
            </a>
            <p className="section-text">
              Vývojářský nástroj integrovaný v prohlížeči Chrome, který
              poskytuje detailní audit výkonnosti, přístupnosti a SEO.
            </p>
          </li>
          <li>
            <a
              href="https://gtmetrix.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link">
              GTmetrix
            </a>
            <p className="section-text">
              Populární nástroj, který kombinuje analýzu výkonu s doporučeními
              na základě metrik jako Core Web Vitals.
            </p>
          </li>
          <li>
            <a
              href="https://webpagetest.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link">
              WebPageTest
            </a>
            <p className="section-text">
              Nabízí podrobné testování rychlosti načítání stránek s možností
              simulace různých podmínek.
            </p>
          </li>
          <li>
            <a
              href="https://tools.pingdom.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link">
              Pingdom Tools
            </a>
            <p className="section-text">
              Nástroj zaměřený na monitorování dostupnosti a rychlosti načítání
              webových aplikací.
            </p>
          </li>
        </ul>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle">Další nástroje</h2>
        <ul className="tools-list">
          <li>
            <a
              href="https://pagespeed.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link">
              PageSpeed.cz Tester
            </a>
            <p className="section-text">
              Český nástroj postavený na Google Lighthouse pro podrobnou analýzu
              rychlosti webových stránek.
            </p>
          </li>
          <li>
            <a
              href="https://analytics.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link">
              Google Analytics
            </a>
            <p className="section-text">
              Analytický nástroj pro sledování návštěvnosti a chování uživatelů
              s možností sledování technických parametrů.
            </p>
          </li>
          <li>
            <a
              href="https://developer.chrome.com/docs/devtools/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link">
              Chrome DevTools
            </a>
            <p className="section-text">
              Integrovaný nástroj v Chrome pro analýzu výkonu, ladění a simulaci
              podmínek načítání.
            </p>
          </li>
          <li>
            <a
              href="https://speedcurve.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link">
              SpeedCurve
            </a>
            <p className="section-text">
              Nástroj pro kontinuální monitorování a analýzu rychlosti stránek,
              včetně metrik Core Web Vitals.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Tools;
