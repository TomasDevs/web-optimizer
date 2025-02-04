import React from "react";
import FadeInOnScroll from "../../components/FadeInOnScroll";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const CDNOptimization = () => {
  const pageTitle = "CDN | Web Optimizer";
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">CDN (Content Delivery Network)</h1>

        <p className="section-text">
          <strong>Content Delivery Network (CDN)</strong> je síť geograficky
          distribuovaných serverů, které slouží k doručování{" "}
          <strong>statických i dynamických souborů</strong> uživatelům na
          základě jejich geografické polohy. Cílem je{" "}
          <strong>minimalizovat latenci</strong> a zlepšit výkon webových
          aplikací.
        </p>

        <h2 className="section-subtitle">Jak funguje CDN?</h2>
        <p className="section-text">
          CDN ukládá kopie souborů na více serverech po celém světě a
          přesměrovává uživatele na nejbližší dostupný server. Tento princip
          umožňuje <strong>rychlejší načítání obsahu </strong>a optimalizaci
          šířky pásma.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Výhody využití CDN</h2>
        <ul className="section-text">
          <li>
            <strong>Zlepšení doby načítání</strong> díky geograficky
            distribuovaným serverům
          </li>
          <li>
            <strong>Snížení zátěže</strong> původního serveru
          </li>
          <li>
            <strong>Větší dostupnost</strong> a odolnost proti výpadkům
          </li>
          <li>
            <strong>Ochrana proti DDoS útokům</strong> a bezpečnostní vylepšení
          </li>
          <li>
            <strong>Optimalizace šířky pásma</strong> a snížení nákladů na
            hosting
          </li>
        </ul>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">CDN vs. tradiční hosting</h2>
        <p className="section-text">
          <strong>Tradiční hosting</strong> obvykle využívá jediný server, což
          znamená vyšší latenci pro uživatele vzdálené od tohoto serveru. Naopak
          CDN umožňuje distribuovat obsah mezi více uzlů, čímž{" "}
          <strong>snižuje dobu načítání</strong> a zvyšuje spolehlivost.
        </p>
        <ul className="section-text">
          <li>
            <strong>Uložení všech souborů</strong> na jediném serveru (např.
            sdílený hosting, VPS, dedikovaný server).
          </li>
          <li>
            <strong>Načítání souborů</strong> přímo z tohoto serveru bez
            geografické optimalizace.
          </li>
          <li>
            <strong>Vyšší latence</strong> při vzdáleném přístupu.
          </li>
        </ul>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">
          Kdy použít CDN a kdy tradiční hosting?
        </h2>

        <ul className="section-text">
          <li>
            <strong>Weby s globální návštěvností</strong>, kde je potřeba
            minimalizovat latenci.
          </li>
          <li>
            <strong>Načítání knihoven a statických souborů</strong> (CSS, JS,
            obrázky, fonty) z veřejných CDN.
          </li>
          <li>
            <strong>Vysokou dostupnost a škálovatelnost</strong> při velké
            návštěvnosti.
          </li>
        </ul>

        <h3 className="section-subtitle -small">
          <strong>Naopak, vlastní hosting souborů</strong> se může vyplatit:
        </h3>

        <ul className="section-text">
          <li>
            <strong>Pokud potřebujete úplnou kontrolu</strong> nad verzemi
            souborů a závislostmi.
          </li>
          <li>
            <strong>V případě citlivých dat</strong>, kdy nechcete záviset na
            třetích stranách.
          </li>
          <li>
            <strong>Při vývoji offline</strong> nebo na testovacím prostředí.
          </li>
        </ul>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Srovnání poskytovatelů CDN</h2>

        <ul className="section-text">
          <li>
            <strong>Cloudflare</strong> – nabízí nejen CDN, ale také pokročilou
            ochranu proti DDoS útokům a optimalizaci výkonu.
          </li>
          <li>
            <strong>Amazon CloudFront</strong> – součást AWS ekosystému,
            poskytuje výbornou integraci s dalšími cloudovými službami.
          </li>
          <li>
            <strong>Google Cloud CDN</strong> – optimalizované pro služby Google
            Cloud Platform s nízkou latencí.
          </li>
          <li>
            <strong>Fastly</strong> – populární mezi moderními webovými
            aplikacemi, umožňuje rychlé změny obsahu díky edge computingu.
          </li>
          <li>
            <strong>Azure CDN</strong> – cloudová řešení od Microsoftu s
            integrací do Azure služeb.
          </li>
          <li>
            <strong>cdnjs</strong> – veřejná CDN s širokou nabídkou
            JavaScriptových knihoven a CSS frameworků.
          </li>
          <li>
            <strong>jsDelivr</strong> – CDN zaměřená na open-source knihovny s
            podporou NPM, GitHub a WordPress pluginů.
          </li>
        </ul>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Testování CDN</h2>
        <p className="section-text">
          Na této stránce můžete <strong>otestovat rychlost načítání</strong>{" "}
          stejného souboru z různých CDN poskytovatelů a porovnat jejich výkon.
        </p>

        <Link to="/testovani/cdn" className="button -bottom">
          Testování CDN
        </Link>
      </FadeInOnScroll>
    </>
  );
};

export default CDNOptimization;
