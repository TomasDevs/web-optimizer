import React from "react";
import { Link } from "react-router-dom";
import TipBlock from "../../components/TipBlock";
import FadeInOnScroll from "../../components/FadeInOnScroll";

const Optimization = () => {
  return (
    <div className="section-page">
      <h1 className="subpage-title">Optimalizace webu: Rychlost a výkon</h1>

      <FadeInOnScroll className="section-description">
        <p className="section-text">
          Rychlý web je základem skvělé uživatelské zkušenosti a lepších
          konverzí. Podle{" "}
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
      </FadeInOnScroll>

      <TipBlock
        title="Minifikace kódu"
        content={[
          <>
            <strong>Proč je to důležité?</strong> Každý zbytečný znak v HTML,
            CSS či JavaScriptu zvětšuje velikost souborů a tím zpomaluje
            načítání. Minifikace odstraní mezery, komentáře a další nepotřebné
            prvky, aniž by změnila funkčnost.
          </>,
          <>
            <strong>Jak na to?</strong> Použijte buildovací nástroje (např.
            Vite, Webpack, Parcel) nebo online minifikátory. Moderní frameworky
            (React, Vue, Next.js) mají minifikaci nastavenou v produkčním režimu
            automaticky.
          </>,
        ]}
        link="/optimalizace/minifikace-kodu"
        linkText="Více o minifikaci kódu"
      />

      <TipBlock
        title="Optimalizace obrázků"
        content={[
          <>
            <strong>Proč je to důležité?</strong> Obrázky často tvoří většinu
            dat načítaných na stránce. Pokud jsou příliš velké nebo ve
            neefektivních formátech (JPEG, PNG), může to dramaticky zpomalit
            celý web.
          </>,
          <>
            <strong>Jak na to?</strong> Využijte moderní formáty ({" "}
            <code>WebP</code>, <code>AVIF</code>) a kompresi (např. pomocí
            nástrojů jako <code>ImageOptim</code> nebo <code>imagemin</code>
            ). Nastavte správné rozměry (tzv. <em>responsive images</em>) a
            vkládejte jen tak velká data, jaká skutečně potřebujete.
          </>,
        ]}
        link="/optimalizace/optimalizace-obrazku"
        linkText="Více o optimalizaci obrázků"
      />

      <TipBlock
        title="Využití CDN a efektivní cache"
        content={[
          <>
            <strong>Proč je to důležité?</strong> CDN (Content Delivery Network)
            umožňuje distribuovat váš obsah na servery po celém světě.
            Uživatelům se pak soubory načítají z geograficky bližších míst, což
            zkracuje dobu odezvy.
          </>,
          <>
            <strong>Jak na to?</strong> Zvažte poskytovatele jako{" "}
            <code>Cloudflare</code>, <code>Fastly</code> nebo{" "}
            <code>Amazon CloudFront</code>. Nastavte si dlouhou expiraci cache
            pro statické soubory (CSS, JS, obrázky), abyste zabránili
            opakovanému stahování při dalších návštěvách uživatele.
          </>,
        ]}
        link="/optimalizace/cdn-optimization"
        linkText="Více o CDN a cachování"
      />

      <TipBlock
        title="Lazy loading"
        content={[
          <>
            <strong>Proč je to důležité?</strong> Na stránkách s mnoha obrázky
            nebo videi se stahuje ohromné množství dat. Lazy loading zajistí, že
            se média načtou až ve chvíli, kdy k nim uživatel skutečně
            doscroluje.
          </>,
          <>
            <strong>Jak na to?</strong> Můžete použít nativní atribut{" "}
            <code>loading="lazy"</code> pro obrázky (moderní prohlížeče) nebo
            knihovny třetích stran (Intersection Observer).
          </>,
        ]}
        link="/optimalizace/lazy-loading"
        linkText="Více o lazy loadingu"
      />

      <TipBlock
        title="Core Web Vitals"
        content={[
          <>
            <strong>Proč je to důležité?</strong> Google klade stále větší důraz
            na metriky jako <em>Largest Contentful Paint (LCP)</em>,{" "}
            <em>Cumulative Layout Shift (CLS)</em> a{" "}
            <em>Interaction to Next Paint (INP)</em>. Tyto metriky měří, jak
            rychle uživatel opravdu vidí hlavní obsah, zda se stránka zbytečně
            neposouvá při načítání, a jak rychle reaguje na vstup.
          </>,
          <>
            <strong>Jak na to?</strong> Testujte pomocí{" "}
            <code>PageSpeed Insights</code>, <code>WebPageTest</code> nebo
            integrovaného <code>Lighthouse</code> v Chrome DevTools. Zaměřte se
            na optimalizaci klíčových prvků v layoutu (např. obrázků nad ohybem)
            a minimalizaci blokujících skriptů.
          </>,
        ]}
        link="/core-web-vitals"
        linkText="Více o Core Web Vitals"
      />

      <TipBlock
        title="API optimalizace, bundling a další"
        content={[
          <>
            <strong>Proč je to důležité?</strong> Rychlá stránka není jen o
            statických souborech, ale také o tom, jak rychle server vrací data
            (API) a zda nejsou skripty zbytečně „rozkouskované“.
          </>,
          <>
            <strong>Jak na to?</strong> Zvažte sloučení (bundling) menších JS
            souborů, nebo naopak <em>code splitting</em> pro načítání jen toho,
            co je nezbytné. Pro serverová API používejte cachování odpovědí a
            minimalizujte latenci (např. pomocí regionálního nasazení serveru).
          </>,
        ]}
        link="/optimalizace/api-optimalizace"
        linkText="Více o optimalizaci API"
      />

      <FadeInOnScroll className="section-description">
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
      </FadeInOnScroll>
    </div>
  );
};

export default Optimization;
