import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import TipBlock from "../../components/UI/TipBlock";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";

const Optimization = () => {
  const pageTitle = "Optimalizace webu | Web Optimizer";
  return (
    <div className="section-page">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <FadeInOnScroll className="section-description">
        <h1 className="subpage-title">Optimalizace webu: Rychlost a výkon</h1>

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
        title="Optimalizace fontů"
        content={[
          <>
            <strong>Proč je to důležité?</strong> Fonty tvoří nezanedbatelnou
            část přenášených dat na webových stránkách. Špatná optimalizace může
            zpomalit načítání stránky, ovlivnit uživatelskou zkušenost a zhoršit
            důležité metriky jako <em>Largest Contentful Paint (LCP)</em>.
          </>,
          <>
            <strong>Jak na to?</strong> Použijte moderní formáty fontů jako{" "}
            <code className="inline-code">WOFF2</code> pro lepší kompresi,
            hostujte fonty lokálně nebo z rychlého CDN a zvažte subsetting,
            abyste zahrnuli pouze potřebné znaky (např.{" "}
            <code className="inline-code">latin</code> nebo{" "}
            <code className="inline-code">latin-ext</code>). Nastavte{" "}
            <code className="inline-code">font-display: swap</code>, aby byl
            text viditelný během načítání fontů.
          </>,
        ]}
        link="/optimalizace/fonty"
        linkText="Více o optimalizaci fontů"
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
        title="Optimalizace načítání skriptů"
        content={[
          <>
            <strong>Proč je to důležité?</strong> Nesprávně načítané skripty
            mohou blokovat vykreslování stránky, zhoršovat metriky jako{" "}
            <em>First Contentful Paint (FCP)</em> a{" "}
            <em>Total Blocking Time (TBT) </em>a zpomalovat interaktivitu.
          </>,
          <>
            <strong>Jak na to?</strong> Používejte{" "}
            <code className="inline-code">async</code> pro nezávislé skripty
            (např. analytiku), <code className="inline-code">defer</code> pro
            skripty závislé na DOM a <code className="inline-code">module</code>{" "}
            pro ES6 moduly. Minimalizujte počet externích skriptů a zkombinujte
            soubory, kde je to možné.
          </>,
        ]}
        link="/optimalizace/nacitani-skriptu"
        linkText="Více o načítání skriptů"
      />

      <TipBlock
        title="CDN vs. vlastní hosting"
        content={[
          <>
            <strong>Proč je to důležité?</strong> Načítání JavaScriptových
            knihoven z CDN může urychlit vykreslování stránky, protože soubory
            mohou být kešovány v prohlížeči uživatele nebo blízkém serveru. Na
            druhou stranu, vlastní hosting může být rychlejší, pokud server běží
            blízko uživatelů a minimalizuje latenci.
          </>,
          <>
            <strong>Jak na to?</strong> Pro kritické skripty zvažte jejich
            vlastní hostování, abyste měli plnou kontrolu nad verzemi a
            dostupností. U často používaných knihoven může být výhodné využít
            CDN jako jsDelivr nebo cdnjs, které distribuují soubory globálně a
            optimalizují výkon.
          </>,
        ]}
        link="/optimalizace/cdn"
        linkText="Více o CDN"
      />

      <TipBlock
        title="Optimalizace API"
        content={[
          <>
            <strong>Proč je to důležité?</strong> Neoptimalizované API může
            výrazně zpomalit aplikaci přenosem zbytečných dat, vysokou latencí a
            opakovaným stahováním stejných informací. Špatně navržené API může
            také zatěžovat server a zvyšovat náklady na provoz.
          </>,
          <>
            <strong>Jak na to?</strong> Implementujte <code>paginaci</code> pro
            velké datasety, povolte <code>gzip/brotli kompresi</code> pro menší
            přenosy a nastavte správné <code>cache hlavičky</code>. Využijte
            techniky jako batch requesty pro spojení více požadavků a GraphQL
            pro přesnou specifikaci potřebných dat. Pro často čtená data zvažte
            použití CDN nebo Redis cache.
          </>,
        ]}
        link="/optimalizace/api"
        linkText="Více o optimalizaci API"
      />

      <TipBlock
        title="Využití cache"
        content={[
          <>
            <strong>Proč je to důležité?</strong> Bez správného cachování musí
            prohlížeč opakovaně stahovat stejná data ze serveru, což způsobuje
            zbytečné zpoždění a zvýšenou zátěž sítě i serveru. U statických
            zdrojů jako jsou obrázky, skripty a styly může cache dramaticky
            zrychlit načítání a snížit množství přenesených dat.
          </>,
          <>
            <strong>Jak na to?</strong> Nastavte správné{" "}
            <code>Cache-Control</code> hlavičky podle typu obsahu - pro statické
            soubory použijte delší TTL (např. <code>max-age=31536000</code>),
            pro dynamická data <code>no-cache</code> s validací pomocí ETag.
            Využijte Service Worker pro offline přístup a implementujte
            verzování souborů pro vynucení aktualizace při změnách. U API zvažte
            kombinaci browser cache a server-side cache pro optimální výkon.
          </>,
        ]}
        link="/optimalizace/cache"
        linkText="Více o využití cache"
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
