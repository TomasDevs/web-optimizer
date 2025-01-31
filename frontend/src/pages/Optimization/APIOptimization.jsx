import React from "react";
import { Link } from "react-router-dom";
import FadeInOnScroll from "../../components/FadeInOnScroll";

const APIOptimization = () => {
  return (
    <>
      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">
          API (Application Programming Interface)
        </h1>
        <p className="section-text">
          <strong>API (Application Programming Interface)</strong> je sada
          pravidel a protokolů, které umožňují různým softwarovým aplikacím
          vzájemně komunikovat. V kontextu webu se nejčastěji setkáváme s{" "}
          <strong>REST API</strong>, které používá HTTP protokol pro výměnu dat
          mezi klientem a serverem.
        </p>

        <h2 className="section-subtitle">Jak funguje API?</h2>
        <p className="section-text">
          API funguje na principu požadavek-odpověď. Klient (například webový
          prohlížeč) posílá požadavek na server, který zpracuje požadavek a
          vrátí odpověď. Komunikace probíhá nejčastěji ve formátu JSON a používá
          standardní HTTP metody (GET, POST, PUT, DELETE).
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Výhody použití API</h2>
        <ul className="section-text">
          <li>
            <strong>Oddělení frontend a backend logiky</strong> - umožňuje
            nezávislý vývoj a škálování
          </li>
          <li>
            <strong>Znovupoužitelnost</strong> - stejné API může sloužit různým
            klientům (web, mobil, desktop)
          </li>
          <li>
            <strong>Standardizace</strong> - použití běžných protokolů a formátů
            usnadňuje integraci
          </li>
          <li>
            <strong>Škálovatelnost</strong> - možnost rozdělení zátěže mezi více
            serverů
          </li>
          <li>
            <strong>Bezpečnost</strong> - centralizovaná správa přístupu a
            autentizace
          </li>
        </ul>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Typy API architektury</h2>
        <p className="section-text">
          V moderním vývoji se setkáváme s různými typy API architektur, každá
          má své specifické využití a výhody.
        </p>

        <h3 className="section-subtitle -small">REST API</h3>
        <ul className="section-text">
          <li>
            <strong>Nejrozšířenější typ</strong> - používá standardní HTTP
            metody
          </li>
          <li>
            <strong>Bezstavové</strong> - každý požadavek obsahuje všechny
            potřebné informace
          </li>
          <li>
            <strong>Cachování</strong> - efektivní využití cache pro
            optimalizaci
          </li>
          <li>
            <strong>Jednoduché použití</strong> - snadná implementace a
            testování
          </li>
        </ul>

        <h3 className="section-subtitle -small">GraphQL</h3>
        <ul className="section-text">
          <li>
            <strong>Flexibilní dotazování</strong> - klient specifikuje přesně
            data, která potřebuje
          </li>
          <li>
            <strong>Jeden endpoint</strong> - veškerá komunikace přes jediný
            koncový bod
          </li>
          <li>
            <strong>Omezení over-fetchingu</strong> - stahují se jen potřebná
            data
          </li>
        </ul>

        <h3 className="section-subtitle -small">WebSocket</h3>
        <ul className="section-text">
          <li>
            <strong>Obousměrná komunikace</strong> - real-time aktualizace
          </li>
          <li>
            <strong>Stálé spojení</strong> - nižší latence pro časté aktualizace
          </li>
          <li>
            <strong>Vhodné pro chat, notifikace</strong> a real-time aplikace
          </li>
        </ul>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Optimalizace API výkonu</h2>
        <p className="section-text">
          Výkon API ovlivňuje několik faktorů. Správná optimalizace API může
          výrazně zlepšit rychlost a uživatelský zážitek.
        </p>
        <ul className="section-text">
          <li>
            <strong>Cachování odpovědí</strong> – Použití HTTP cache hlaviček
            (max-age, ETag) může snížit zátěž na serveru.
          </li>
          <li>
            <strong>Komprese odpovědí</strong> – Gzip, Brotli nebo Deflate mohou
            snížit velikost přenášených dat a zrychlit přenos.
          </li>
          <li>
            <strong>Použití vhodných formátů</strong> – JSON je běžný formát,
            ale v některých případech může být efektivnější binární formát jako
            Protocol Buffers.
          </li>
          <li>
            <strong>Minimalizace odpovědí</strong> – Omezte množství přenášených
            dat pomocí filtrů, stránkování a selektivního výběru polí.
          </li>
        </ul>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Optimalizace API</h2>

        <h3 className="section-subtitle -small">Cachování</h3>
        <ul className="section-text">
          <li>
            <strong>Browser cache</strong> - ukládání odpovědí v prohlížeči
          </li>
          <li>
            <strong>Server cache</strong> - cachování na úrovni serveru
          </li>
          <li>
            <strong>CDN cache</strong> - využití distribuované sítě pro statická
            data
          </li>
        </ul>

        <h3 className="section-subtitle -small">Komprese dat</h3>
        <ul className="section-text">
          <li>
            <strong>GZIP/Brotli</strong> - komprese přenášených dat
          </li>
          <li>
            <strong>Minifikace</strong> - odstranění nadbytečných znaků
          </li>
          <li>
            <strong>Optimalizace payload</strong> - přenos pouze potřebných dat
          </li>
        </ul>

        <h3 className="section-subtitle -small">Výkon</h3>
        <ul className="section-text">
          <li>
            <strong>Pagination</strong> - stránkování velkých datových sad
          </li>
          <li>
            <strong>Batching</strong> - spojování více požadavků do jednoho
          </li>
          <li>
            <strong>Rate limiting</strong> - omezení počtu požadavků
          </li>
        </ul>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Veřejné API vs. vlastní backend</h2>
        <p className="section-text">
          Veřejná API jsou skvělá pro testování, ale pro produkční aplikace je
          často lepší mít vlastní backend.
        </p>
        <ul className="section-text">
          <li>
            <strong>Veřejné API</strong> – Omezené kvóty, závislost na třetích
            stranách, možné výpadky.
          </li>
          <li>
            <strong>Vlastní backend</strong> – Plná kontrola nad daty, možnost
            optimalizace na míru, bezpečnost.
          </li>
        </ul>
      </FadeInOnScroll>

      <FadeInOnScroll className="section-page">
        <h2 className="section-subtitle">Testování API</h2>
        <p className="section-text">
          Na této stránce můžete <strong>otestovat výkon API</strong> a porovnat
          různé optimalizační techniky jako cache a kompresi. Dále lze porovnat
          veřejné API s vlastním backendem.
        </p>

        <Link to="/testovani/api" className="button -bottom">
          Testování API
        </Link>
      </FadeInOnScroll>
    </>
  );
};

export default APIOptimization;
