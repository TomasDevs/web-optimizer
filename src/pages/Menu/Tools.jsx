import React from "react";
import { Helmet } from "react-helmet";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";

const Tools = () => {
  return (
    <div className="tools-page">
      <Helmet>
        <title>Nástroje pro měření výkonu | Web Optimizer</title>
      </Helmet>
      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">Nástroje pro měření výkonu</h1>
        <p className="section-text">
          Rychlejší web je na dosah. Objevte nástroje, které vám s tím pomohou.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Bez čeho se neobejdete</h2>
        <ul className="tools-list">
          <li>
            <a
              href="https://pagespeed.web.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external"
              aria-label="Otevřít PageSpeed Insights v novém okně">
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
              className="highlight-link -external"
              aria-label="Otevřít Google Lighthouse v novém okně">
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
              className="highlight-link -external"
              aria-label="Otevřít GTmetrix v novém okně">
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
              className="highlight-link -external"
              aria-label="Otevřít WebPageTest v novém okně">
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
              className="highlight-link -external"
              aria-label="Otevřít Pingdom Tools v novém okně">
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
              className="highlight-link -external"
              aria-label="Otevřít PageSpeed.cz Tester v novém okně">
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
              className="highlight-link -external"
              aria-label="Otevřít Google Analytics v novém okně">
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
              className="highlight-link -external"
              aria-label="Otevřít Chrome DevTools v novém okně">
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
              className="highlight-link -external"
              aria-label="Otevřít SpeedCurve v novém okně">
              SpeedCurve
            </a>
            <p className="section-text">
              Syntetická data i skutečný uživatelský zážitek na jednom místě.
            </p>
          </li>
        </ul>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
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
              className="highlight-link -external"
              aria-label="Otevřít článek 9 možností, jak zrychlit web a zvýšit tím konverze v novém okně">
              9 možností, jak zrychlit web a zvýšit tím konverze
            </a>
          </li>
          <br />
          <li>
            <a
              href="https://docs.pagespeed.cz/docs/why-page-speed"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external"
              aria-label="Otevřít článek Proč optimalizovat rychlost webu? v novém okně">
              Proč optimalizovat rychlost webu?
            </a>
          </li>
          <br />
          <li>
            <a
              href="https://unifer.cz/nova-metrika-google-inp/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external"
              aria-label="Otevřít článek Google INP: Co je to a proč na tom záleží v novém okně">
              Googlu na tom záleží
            </a>
          </li>
        </ul>
      </FadeInOnScroll>
    </div>
  );
};

export default Tools;
