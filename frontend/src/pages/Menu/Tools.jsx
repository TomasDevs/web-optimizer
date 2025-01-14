import React from "react";

const Tools = () => {
  return (
    <div className="tools-page">
      <section className="section-page">
        <h1 className="subpage-title">Nástroje pro měření výkonu</h1>
        <p className="section-text">
          Rychlejší web je na dosah. Objevte nástroje, které vám s tím pomohou.
        </p>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle">Bez čeho se neobejdete</h2>
        <ul className="tools-list">
          <li>
            <a
              href="https://pagespeed.web.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              PageSpeed Insights
            </a>
            <p className="section-text">
              Zjistěte, co zpomaluje váš web, a získejte konkrétní doporučení.
            </p>
          </li>

          <li>
            <a
              href="https://developers.google.com/web/tools/lighthouse"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              Google Lighthouse
            </a>
            <p className="section-text">
              Podrobná analýza výkonu, přístupnosti a SEO.
            </p>
          </li>

          <li>
            <a
              href="https://gtmetrix.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              GTmetrix
            </a>
            <p className="section-text">
              Detailní přehled o rychlosti a Core Web Vitals.
            </p>
          </li>

          <li>
            <a
              href="https://webpagetest.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              WebPageTest
            </a>
            <p className="section-text">
              Simulace výkonu v různých podmínkách a lokalitách.
            </p>
          </li>

          <li>
            <a
              href="https://tools.pingdom.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              Pingdom Tools
            </a>
            <p className="section-text">
              Sledování rychlosti a dostupnosti vašeho webu.
            </p>
          </li>
          <li>
            <a
              href="https://pagespeed.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              PageSpeed.cz Tester
            </a>
            <p className="section-text">
              Český nástroj pro testování rychlosti založený na Lighthouse.
            </p>
          </li>

          <li>
            <a
              href="https://analytics.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              Google Analytics
            </a>
            <p className="section-text">
              Data o návštěvnících a jejich chování na vašem webu.
            </p>
          </li>

          <li>
            <a
              href="https://developer.chrome.com/docs/devtools/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              Chrome DevTools
            </a>
            <p className="section-text">
              Ladění a analýza výkonu přímo v prohlížeči.
            </p>
          </li>

          <li>
            <a
              href="https://speedcurve.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              SpeedCurve
            </a>
            <p className="section-text">
              Syntetická data i skutečný uživatelský zážitek na jednom místě.
            </p>
          </li>
        </ul>
      </section>

      <section className="section-page">
        <h2 className="section-subtitle">Záleží na rychlosti?</h2>
        <p className="section-text">
          Opravdu rychlost rozhoduje? Tady najdete odpověď.
        </p>
        <ul className="tools-list">
          <li>
            <a
              href="https://www.ilincev.com/rychlost-webu"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              9 možností, jak zrychlit web a zvýšit tím konverze
            </a>
          </li>
          <br />
          <li>
            <a
              href="https://docs.pagespeed.cz/docs/why-page-speed"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              Proč optimalizovat rychlost webu?
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Tools;
