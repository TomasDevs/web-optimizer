import React from "react";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";
import { Helmet } from "react-helmet";
import TestButton from "../../components/UI/TestButton";

const CacheOptimization = () => {
  return (
    <>
      <Helmet>
        <title>Cache | Web Optimizer</title>
      </Helmet>
      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">Cache (Mezipaměť)</h1>

        <p className="section-text">
          <strong>Cache</strong> je dočasné úložiště dat, které slouží ke
          zrychlení přístupu k často používaným informacím. Místo opakovaného
          stahování stejných dat ze serveru se použije lokální kopie, což
          výrazně snižuje latenci a zatížení serveru.
        </p>

        <h2 className="section-subtitle">Jak funguje cache?</h2>
        <p className="section-text">
          Když prohlížeč požádá o zdroj (obrázek, skript, API data), server může
          spolu s odpovědí poslat instrukce pro cachování. Při dalším požadavku
          prohlížeč nejprve zkontroluje svou cache a použije uloženou verzi,
          pokud je stále platná.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Typy cache</h2>
        <ul className="section-text">
          <li>
            <strong>Browser Cache</strong> - lokální úložiště v prohlížeči pro
            webové zdroje
          </li>
          <li>
            <strong>Memory Cache</strong> - rychlá cache v RAM pro často
            používaná data
          </li>
          <li>
            <strong>Service Worker Cache</strong> - programovatelná cache pro
            offline funkcionalitu
          </li>
          <li>
            <strong>CDN Cache</strong> - cache na úrovni distribuční sítě
          </li>
          <li>
            <strong>Server-side Cache</strong> - cache na straně serveru pro
            snížení zátěže databáze
          </li>
        </ul>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Cache-Control hlavičky</h2>
        <p className="section-text">
          HTTP hlavička Cache-Control určuje, jak se má s obsahem zacházet z
          pohledu cachování. Nejčastější direktivy:
        </p>

        <ul className="section-text">
          <li>
            <strong>max-age=N</strong> - Doba v sekundách, po kterou lze obsah
            považovat za čerstvý
          </li>
          <li>
            <strong>no-cache</strong> - Obsah musí být ověřen na serveru před
            použitím z cache
          </li>
          <li>
            <strong>no-store</strong> - Obsah nesmí být cachován
          </li>
          <li>
            <strong>private</strong> - Obsah může být cachován pouze v
            prohlížeči
          </li>
          <li>
            <strong>public</strong> - Obsah může být cachován kdekoliv (CDN,
            proxy)
          </li>
        </ul>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Validační mechanismy</h2>

        <h3 className="section-subtitle -small">ETag</h3>
        <p className="section-text">
          <strong>ETag</strong> je unikátní identifikátor verze zdroje. Pokud se
          obsah změní, změní se i ETag. Prohlížeč může poslat If-None-Match
          hlavičku s ETagem, a pokud se obsah nezměnil, server vrátí 304 Not
          Modified.
        </p>

        <h3 className="section-subtitle -small">Last-Modified</h3>
        <p className="section-text">
          <strong>Last-Modified</strong> používá časové razítko poslední změny.
          Prohlížeč pošle If-Modified-Since hlavičku a server rozhodne, zda je
          obsah stále platný.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Best Practices</h2>
        <ul className="section-text">
          <li>
            <strong>Vhodné TTL</strong> - Nastavte přiměřenou dobu platnosti
            cache podle typu obsahu
          </li>
          <li>
            <strong>Verzování</strong> - Přidejte verzi do URL statických
            souborů pro vynucení aktualizace
          </li>
          <li>
            <strong>Immutable obsah</strong> - Pro neměnný obsah použijte
            immutable flag
          </li>
          <li>
            <strong>Vary hlavička</strong> - Správně specifikujte podmínky pro
            různé verze odpovědi
          </li>
        </ul>
      </FadeInOnScroll>
      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Testování CDN</h2>
        <p className="section-text">
          Testování CDN z různých CDN poskytovatelů může pomoci zjistit, který
          poskytovatel nabízí nejlepší výkon a dostupnost pro vaše webové
          stránky.
        </p>

        <TestButton
          to="/testovani/cdn"
          label="Testování CDN"
          className="-bottom"
        />
      </FadeInOnScroll>
    </>
  );
};

export default CacheOptimization;
