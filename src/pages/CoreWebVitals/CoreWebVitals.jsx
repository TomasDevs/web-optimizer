import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import TipBlock from "../../components/UI/TipBlock";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";

const CoreWebVitals = () => {
  return (
    <div className="corewebvitals-page">
      <Helmet>
        <title>Core Web Vitals | Web Optimizer</title>
      </Helmet>

      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">Core Web Vitals</h1>
        <p className="section-text">
          Core Web Vitals jsou hlavní metriky od Googlu, které hodnotí rychlost,
          stabilitu a interaktivitu webových stránek. Jejich význam neustále
          roste – ovlivňují spokojenost uživatelů i pozici ve vyhledávání. Níže
          zjistíte, jak jednotlivé metriky fungují a proč je důležité je
          optimalizovat.
        </p>
      </FadeInOnScroll>

      <TipBlock
        title="Largest Contentful Paint (LCP)"
        content={[
          <>
            <strong>Co měří:</strong> LCP určuje, jak rychle se načte největší
            viditelný prvek (např. hlavní obrázek či velký nadpis) na stránce.
            Čím dříve se tento element zobrazí, tím lépe.
          </>,
          <>
            <strong>Proč je to důležité:</strong> Uživatelé vnímají web jako
            rychlý, když se klíčový obsah vykreslí během 2–2,5 vteřin. Pomalé
            LCP může vyvolat pocit, že je stránka „těžká“ a neoptimalizovaná.
          </>,
          <>
            <strong>Jak na optimalizaci:</strong> Minimalizujte načítání velkých
            obrázků, využijte formáty (WebP, AVIF) a dbejte na rychlou odezvu
            serveru.
          </>,
        ]}
        link="/core-web-vitals/lcp"
        linkText="Více o LCP"
      />

      <TipBlock
        title="Cumulative Layout Shift (CLS)"
        content={[
          <>
            <strong>Co měří:</strong> CLS sleduje, jak často a jak výrazně se
            posouvá rozložení (layout) stránky při načítání. Pokud se prvky
            hýbou a uživatel nečekaně klikne mimo, máte vysoké CLS.
          </>,
          <>
            <strong>Proč je to důležité:</strong> Vizuální posuny jsou pro
            uživatele frustrující. Pokud se stránka „přeskupuje“ během čtení
            nebo při interakci, snižuje to důvěru i spokojenost.
          </>,
          <>
            <strong>Jak na optimalizaci:</strong> Rezervujte si místo pro
            obrázky (width a height), nenačítejte vnořené bannery „nad text“ a
            používejte stabilní layout (např. grid/flex box, definované
            rozměry).
          </>,
        ]}
        link="/core-web-vitals/cls"
        linkText="Více o CLS"
      />

      <TipBlock
        title="Interaction to Next Paint (INP)"
        content={[
          <>
            <strong>Co měří:</strong> INP (dříve FID – First Input Delay)
            vyhodnocuje, jak rychle dokáže stránka reagovat na uživatelskou akci
            (klik, scroll, klávesnice).
          </>,
          <>
            <strong>Proč je to důležité:</strong> Okamžitá odezva na klik či
            jiné vstupy je klíčová pro dobré UX. Pokud uživatel čeká, než se
            stránka „probere“, pravděpodobně ji opustí.
          </>,
          <>
            <strong>Jak na optimalizaci:</strong> Omezte blokující JavaScript,
            využijte <em>code splitting</em>, odložte načítání nepotřebných
            skriptů a hlavně udržujte hlavní vlákno (main thread) co
            nejprázdnější.
          </>,
        ]}
        link="/core-web-vitals/inp"
        linkText="Více o INP"
      />

      <TipBlock
        title="Ostatní Web Vitals metriky"
        content={[
          <>
            Zatímco výše zmíněné <strong>Core Web Vitals</strong> jsou klíčové
            metriky pro dobrý uživatelský zážitek, existují i{" "}
            <strong>další podpůrné metriky</strong>, které mohou sloužit jako
            doplňkové ukazatele nebo pomoci s diagnostikou konkrétních problémů.
          </>,
          <>
            <strong>Time to First Byte (TTFB)</strong> a{" "}
            <strong>First Contentful Paint (FCP)</strong> jsou důležitými částmi
            procesu načítání a často napoví, zda je problém v{" "}
            <em>pomalé odezvě serveru</em> či <em>blokujících zdrojích</em>, což
            může přímo ovlivnit LCP.
          </>,
          <>
            <strong>Total Blocking Time (TBT)</strong> je zase skvělá lab
            metrika pro odhalení potenciálních problémů s interaktivitou (které
            pak mají vliv na INP). Přesto se neřadí mezi Core Web Vitals,
            protože ji nelze měřit přímo v reálném provozu (field data), a není
            tak přímo uživatelsky orientovaná.
          </>,
          <>
            Tyto metriky se mohou časem vyvíjet. Google občas provádí{" "}
            <strong>změny ve Web Vitals</strong> související s novými poznatky o
            chování uživatelů. Proto se vyplatí sledovat oficiální zdroje (např.{" "}
            <a
              href="https://web.dev/vitals/"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-link -external">
              web.dev/vitals
            </a>
            ).
          </>,
        ]}
      />
      <FadeInOnScroll className="section-description">
        <p className="section-text">
          Chcete zjistit, <strong>jak konkrétně měřit</strong> tyto metriky?
          Podívejte se na stránku{" "}
          <Link to="/nastroje" className="highlight-link">
            nástroje
          </Link>
          , kde najdete tipy na praktické testování. A jestli hledáte tipy, jak
          web zrychlit, mrkněte na{" "}
          <Link to="/optimalizace" className="highlight-link">
            optimalizaci
          </Link>
          .
        </p>
      </FadeInOnScroll>
    </div>
  );
};

export default CoreWebVitals;
