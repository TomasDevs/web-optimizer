import React from "react";
import { Link } from "react-router-dom";

const Optimization = () => {
  return (
    <div className="section-page">
      <h1 className="subpage-title">Optimalizace webu: Rychlost a výkon</h1>

      <p className="section-text">
        Rychlý web je základem skvělé uživatelské zkušenosti a lepších konverzí.
        Podle{" "}
        <a
          href="https://docs.pagespeed.cz/docs/why-page-speed"
          target="_blank"
          rel="noopener noreferrer"
          className="highlight-link -external">
          průvodce na docs.pagespeed.cz
        </a>{" "}
        může pomalé načítání způsobit nejen ztráty na tržbách, ale také snížit
        spokojenost uživatelů a poškodit vaši reputaci.
      </p>
      <p className="section-text">
        Níže najdete několik klíčových bodů, které se v různých návodech a{" "}
        <a
          href="https://pagespeed.cz/blog/checklist-2021"
          target="_blank"
          rel="noopener noreferrer"
          className="highlight-link -external">
          checklistech
        </a>{" "}
        (zejména od <strong>Pagespeed.cz</strong>) ukazují jako zásadní. Každý
        tip doplňujeme krátkým vysvětlením, proč ho neopomenout.
      </p>

      <div className="tip-block">
        <h3>Minifikace kódu</h3>
        <p>
          <strong>Proč je to důležité?</strong> Každý zbytečný znak v HTML, CSS
          či JavaScriptu zvětšuje velikost souborů a tím zpomaluje načítání.
          Minifikace odstraní mezery, komentáře a další nepotřebné prvky, aniž
          by změnila funkčnost.
        </p>
        <p>
          <strong>Jak na to?</strong> Použijte buildovací nástroje (např. Vite,
          Webpack, Parcel) nebo online minifikátory. Moderní frameworky (React,
          Vue, Next.js) mají minifikaci nastavenou v produkčním režimu
          automaticky.
        </p>
        <p>
          <Link to="/optimalizace/minifikace-kodu" className="highlight-link">
            Více o minifikaci kódu
          </Link>
        </p>
      </div>

      <div className="tip-block">
        <h3>Optimalizace obrázků</h3>
        <p>
          <strong>Proč je to důležité?</strong> Obrázky často tvoří většinu dat
          načítaných na stránce. Pokud jsou příliš velké nebo ve neefektivních
          formátech (JPEG, PNG), může to dramaticky zpomalit celý web.
        </p>
        <p>
          <strong>Jak na to?</strong> Využijte moderní formáty (
          <code>WebP</code>, <code>AVIF</code>) a kompresi (např. pomocí
          nástrojů jako <code>ImageOptim</code> nebo
          <code>imagemin</code>). Nastavte správné rozměry (tzv.
          <em>responsive images</em>) a vkládejte jen tak velká data, jaká
          skutečně potřebujete.
        </p>
        <p>
          <Link
            to="/optimalizace/optimalizace-obrazku"
            className="highlight-link">
            Více o optimalizaci obrázků
          </Link>
        </p>
      </div>

      <div className="tip-block">
        <h3>Využití CDN a efektivní cache</h3>
        <p>
          <strong>Proč je to důležité?</strong> CDN (Content Delivery Network)
          umožňuje distribuovat váš obsah na servery po celém světě. Uživatelům
          se pak soubory načítají z geograficky bližších míst, což zkracuje dobu
          odezvy.
        </p>
        <p>
          <strong>Jak na to?</strong> Zvažte poskytovatele jako
          <code>Cloudflare</code>, <code>Fastly</code> nebo{" "}
          <code>Amazon CloudFront</code>. Nastavte si dlouhou expiraci cache pro
          statické soubory (CSS, JS, obrázky), abyste zabránili opakovanému
          stahování při dalších návštěvách uživatele.
        </p>
        <p>
          <Link to="/optimalizace/cdn-optimization" className="highlight-link">
            Více o CDN a cachování
          </Link>
        </p>
      </div>

      <div className="tip-block">
        <h3>Lazy loading</h3>
        <p>
          <strong>Proč je to důležité?</strong> Na stránkách s mnoha obrázky
          nebo videi se stahuje ohromné množství dat. Lazy loading zajistí, že
          se média načtou až ve chvíli, kdy k nim uživatel skutečně doscroluje.
        </p>
        <p>
          <strong>Jak na to?</strong> Můžete použít nativní atribut
          <code>loading="lazy"</code> pro obrázky (moderní prohlížeče) nebo
          knihovny třetích stran (Intersection Observer).
        </p>
        <p>
          <Link to="/optimalizace/lazy-loading" className="highlight-link">
            Více o lazy loadingu
          </Link>
        </p>
      </div>

      <div className="tip-block">
        <h3>Core Web Vitals</h3>
        <p>
          <strong>Proč je to důležité?</strong> Google klade stále větší důraz
          na metriky jako <em>Largest Contentful Paint (LCP)</em>,
          <em>Cumulative Layout Shift (CLS)</em> a{" "}
          <em>Interaction to Next Paint (INP)</em>. Tyto metriky měří, jak
          rychle uživatel opravdu vidí hlavní obsah, zda se stránka zbytečně
          neposouvá při načítání, a jak rychle reaguje na vstup.
        </p>
        <p>
          <strong>Jak na to?</strong> Testujte pomocí
          <code>PageSpeed Insights</code>, <code>WebPageTest</code> nebo
          integrovaného <code>Lighthouse</code> v Chrome DevTools. Zaměřte se na
          optimalizaci klíčových prvků v layoutu (např. obrázků nad ohybem) a
          minimalizaci blokujících skriptů.
        </p>
        <p>
          <Link to="/core-web-vitals" className="highlight-link">
            Více o Core Web Vitals
          </Link>
        </p>
      </div>

      <div className="tip-block">
        <h3>API optimalizace, bundling a další</h3>
        <p>
          <strong>Proč je to důležité?</strong> Rychlá stránka není jen o
          statických souborech, ale také o tom, jak rychle server vrací data
          (API) a zda nejsou skripty zbytečně „rozkouskované“.
        </p>
        <p>
          <strong>Jak na to?</strong> Zvažte sloučení (bundling) menších JS
          souborů, nebo naopak <em>code splitting</em> pro načítání jen toho, co
          je nezbytné. Pro serverová API používejte cachování odpovědí a
          minimalizujte latenci (např. pomocí regionálního nasazení serveru).
        </p>
        <p>
          <Link to="/optimalizace/api-optimalizace" className="highlight-link">
            Více o optimalizaci API
          </Link>
        </p>
      </div>

      <p className="section-text">
        Více užitečných tipů, například o prioritním načítání zdrojů nebo
        optimalizaci fontů, najdete také v{" "}
        <a
          href="https://www.vzhurudolu.cz/prirucka/jak-zrychlit-web"
          target="_blank"
          rel="noopener noreferrer"
          className="highlight-link -external">
          příručce na VzhůruDolů.cz
        </a>
        .
      </p>

      <p className="section-text">
        Zajímá vás, jak Google posuzuje rychlost? Přečtěte si{" "}
        <Link to="/core-web-vitals" className="highlight-link">
          Core Web Vitals
        </Link>
        .
      </p>
    </div>
  );
};

export default Optimization;
