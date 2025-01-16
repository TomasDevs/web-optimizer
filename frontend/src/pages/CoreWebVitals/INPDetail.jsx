import React from "react";
import { Link } from "react-router-dom";

const INPDetail = () => {
  return (
    <div className="page inp-detail-page">
      <h1 className="subpage-title">Interaction to Next Paint (INP)</h1>

      <p className="section-text">
        Metrika <strong>Interaction to Next Paint (INP)</strong> měří odezvu
        stránky na uživatelské akce, jako je kliknutí, stisk klávesy nebo dotyk.
        INP hodnotí celkovou dobu od uživatelovy interakce po vykreslení
        odpovědi na obrazovce. <strong>Hodnota pod 200 ms</strong> je považována
        za dobrou, protože zajišťuje plynulé UX.
      </p>

      <p className="section-text">
        Níže najdete tipy, jak INP optimalizovat, a konkrétní příklady kódu.
        Další informace můžete prozkoumat v odkazech na konci stránky.
      </p>

      <div className="tip-block">
        <h3>Minimalizace zpoždění v JavaScriptu</h3>
        <p>
          Zdlouhavé úkoly v hlavním vlákně mohou prodloužit INP. Rozdělte velké
          bloky kódu pomocí <code>setTimeout</code> nebo
          <code>requestIdleCallback</code> pro rozložení zátěže:
        </p>
        <pre>
          {`setTimeout(() => {
  // Zpracování dlouhého úkolu
}, 0);`}
        </pre>
        <p>
          Použití <strong>Web Workers</strong> může také přesunout náročné
          operace mimo hlavní vlákno.
        </p>
      </div>

      <div className="tip-block">
        <h3>Optimalizace animací a přechodů</h3>
        <p>
          Zajistěte, aby animace byly hardwarově akcelerované pomocí vlastností
          jako
          <code>transform</code> a <code>opacity</code>. Vyhněte se animaci
          vlastností, jako jsou <code>width</code> a <code>height</code>, které
          mohou způsobovat přepočty layoutu.
        </p>
      </div>

      <div className="tip-block">
        <h3>Předcházení blokujícím skriptům</h3>
        <p>
          Eliminujte nebo odložte načítání nepotřebných skriptů pomocí atributu{" "}
          <code>defer</code>
          nebo <code>async</code>:
        </p>
        <pre>{`<script src="analytics.js" defer></script>`}</pre>
        <p>
          Pro kód, který není kritický pro první vykreslení, použijte lazy
          loading.
        </p>
      </div>

      <div className="tip-block">
        <h3>Další doporučení</h3>
        <p>
          Snižte velikost JavaScriptu pomocí minifikace a odstranění
          nepoužívaného kódu.
        </p>
        <p>Optimalizujte datové struktury a algoritmy pro rychlé vykreslení.</p>
        <p>
          Sledujte metriky pomocí nástrojů jako <code>PerformanceObserver</code>
          .
        </p>
      </div>

      <div className="section-text">
        <h2>Další zdroje o INP</h2>
        <p>
          Více informací najdete v článcích na{" "}
          <a
            href="https://docs.pagespeed.cz/docs/inp-optimisation"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link -external">
            docs.pagespeed.cz
          </a>{" "}
          nebo na{" "}
          <a
            href="https://web.dev/inp/"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight-link -external">
            web.dev
          </a>
          .
        </p>
        <p>
          Chcete zjistit, jak měřit INP? Navštivte stránku{" "}
          <Link to="/nastroje" className="highlight-link">
            nástroje
          </Link>
          .
        </p>
      </div>

      <p className="section-text">
        <strong>Tip:</strong> Více o metrikách zjistíte na stránkách{" "}
        <Link to="/core-web-vitals" className="highlight-link">
          Core Web Vitals
        </Link>{" "}
        nebo{" "}
        <Link to="/optimalizace" className="highlight-link">
          optimalizace webu
        </Link>
        .
      </p>
    </div>
  );
};

export default INPDetail;
