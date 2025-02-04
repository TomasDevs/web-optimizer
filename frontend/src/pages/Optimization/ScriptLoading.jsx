import React from "react";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ScriptLoading = () => {
  const pageTitle = "Optimalizace načítání skriptů | Web Optimizer";
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">Optimalizace načítání skriptů</h1>

        <p className="section-text">
          Skripty mohou významně ovlivnit výkon webové stránky. Je důležité
          správně zvolit metodu jejich načítání, aby se minimalizovalo blokování
          vykreslování stránky a zlepšily se metriky jako <strong>FCP</strong>{" "}
          (First Contentful Paint), <strong>LCP</strong> (Largest Contentful
          Paint) a <strong>TBT</strong> (Total Blocking Time).
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Typy načítání skriptů</h2>
        <p className="section-text">
          <strong>Bez atributu (synchronní skript)</strong>
          <br />
          <code className="inline-code">
            &lt;script src="script.js"&gt;&lt;/script&gt;
          </code>
          <br />
          Skript se načítá a provádí okamžitě, blokuje zpracování HTML.
        </p>

        <p className="section-text">
          <strong>Async (asynchronní načítání)</strong>
          <br />
          <code className="inline-code">
            &lt;script async src="script.js"&gt;&lt;/script&gt;
          </code>
          <br />
          Skript se načítá paralelně s HTML, ale provede se hned po stažení, což
          může přerušit vykreslování.
        </p>

        <p className="section-text">
          <strong>Defer (odložené vykonání)</strong>
          <br />
          <code className="inline-code">
            &lt;script defer src="script.js"&gt;&lt;/script&gt;
          </code>
          <br />
          Skript se načítá paralelně s HTML, ale provede se až po načtení celého
          DOM.
        </p>

        <p className="section-text">
          <strong>Type="module" (moderní ES6 skripty)</strong>
          <br />
          <code className="inline-code">
            &lt;script type="module" src="script.js"&gt;&lt;/script&gt;
          </code>
          <br />
          Skript se chová jako <code>defer</code>, podporuje importy a není
          proveden vícekrát.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Dopad na metriky výkonu</h2>
        <p className="section-text">
          Správné načítání skriptů ovlivňuje metriky Core Web Vitals:
        </p>
        <ul>
          <li>
            <strong>FCP (First Contentful Paint)</strong> – async může blokovat
            vykreslování prvního obsahu.
          </li>
          <li>
            <strong>LCP (Largest Contentful Paint)</strong> – blokující skripty
            mohou zhoršit dobu načítání hlavního obsahu.
          </li>
          <li>
            <strong>TBT (Total Blocking Time)</strong> – synchronní skripty
            blokují hlavní vlákno delší dobu.
          </li>
        </ul>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">
          Kdy použít async, defer nebo module?
        </h2>
        <p className="section-text">
          <strong>✅ Použít async:</strong> pokud skript není závislý na DOM
          (např. analytické skripty, reklamy, widgety třetích stran).
        </p>
        <p className="section-text">
          <strong>✅ Použít defer:</strong> pokud skript potřebuje DOM (např.
          JavaScript aplikace, interaktivní prvky).
        </p>
        <p className="section-text">
          <strong>✅ Použít module:</strong> pokud používáš moderní ES6 kód s
          importy.
        </p>
        <p className="section-text">
          <strong>❌ Nepoužívat synchronní načítání</strong>, pokud skript není
          kritický pro inicializaci stránky.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Praktické využití</h2>
        <p className="section-text">
          Různé typy skriptů se hodí pro různé scénáře:
        </p>

        <h3 className="section-subtitle -small">
          ✅ Příklady použití <code className="inline-code">async</code>
        </h3>
        <pre className="code-block">
          {`<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js"></script>

<!-- Reklamní skripty -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<!-- Social media tlačítka -->
<script async src="https://platform.twitter.com/widgets.js"></script>`}
        </pre>

        <h3 className="section-subtitle -small">
          ✅ Příklady použití <code className="inline-code">defer</code>
        </h3>
        <pre className="code-block">
          {`<!-- Hlavní logika aplikace -->
<script defer src="app.js"></script>

<!-- UI komponenty -->
<script defer src="carousel.js"></script>
<script defer src="menu.js"></script>

<!-- API calls -->
<script defer src="api-client.js"></script>`}
        </pre>

        <h3 className="section-subtitle -small">🔹 Konkrétní scénáře:</h3>
        <h4>E-shop:</h4>
        <pre className="code-block">
          {`<!-- Analytika -->
<script async src="analytics.js"></script>

<!-- Košík a platební brána -->
<script defer src="shopping-cart.js"></script>
<script defer src="payment-gateway.js"></script>`}
        </pre>

        <h4>Blog:</h4>
        <pre className="code-block">
          {`<!-- Počítadlo zobrazení stránek -->
<script async src="page-views.js"></script>

<!-- Komentáře -->
<script defer src="comments.js"></script>`}
        </pre>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Testování různých metod načítání</h2>
        <p className="section-text">
          Chcete-li otestovat vliv jednotlivých metod načítání skriptů na výkon
          stránky, přejděte na testovací stránku.
        </p>
        <Link to="/testovani/nacitani-skriptu" className="button -bottom">
          Testování načítání skriptů
        </Link>
      </FadeInOnScroll>
    </>
  );
};

export default ScriptLoading;
