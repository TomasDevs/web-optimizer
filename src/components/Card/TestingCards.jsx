import React from "react";
import CardList from "./CardList";

// Seznam testovacích funkcí
const testFeatures = [
  {
    title: "LCP Test",
    description: "Zjistěte, jak optimalizovat hlavní obsah stránky.",
    link: "/testovani/lcp-testing",
  },
  {
    title: "CLS Test",
    description: "Otestujte vizuální stabilitu svého webu.",
    link: "/testovani/cls-testing",
  },
  {
    title: "INP Test",
    description: "Otestujte rychlost reakce na interakci.",
    link: "/testovani/inp-testing",
  },
  {
    title: "Lazy Loading",
    description: "Ověřte efektivitu načítání obsahu na vyžádání.",
    link: "/testovani/lazy-loading",
  },
  {
    title: "Optimalizace obrázků",
    description: "Zjistěte, jak optimalizovat načítání obrázků.",
    link: "/testovani/optimalizace-obrazku",
  },
  {
    title: "Zobrazení obrázků",
    description: "Otestujte různé způsoby zobrazení obrázků.",
    link: "/testovani/zobrazeni-obrazku",
  },
  {
    title: "Fonty",
    description: "Otestujte rychlost načítání webových fontů.",
    link: "/testovani/fonty",
  },
  {
    title: "Načítání skriptů",
    description: "Zjistěte, jak efektivně načítat skripty.",
    link: "/testovani/nacitani-skriptu",
  },
  {
    title: "CDN Test",
    description:
      "Porovnejte rychlost načítání knihoven z různých CDN a vlastního hostingu.",
    link: "/testovani/cdn",
  },
  {
    title: "API Test",
    description:
      "Porovnejte výkon optimalizovaného a neoptimalizovaného API (cache, komprese).",
    link: "/testovani/api",
  },
  {
    title: "Minifikace kódu",
    description: "Otestujte dopad minifikace kódu na výkon webu.",
    link: "/testovani/minifikace-kodu",
  },
  {
    title: "Komplexní analýza",
    description: "Porovnejte výkon neoptimalizovaného a optimalizovaného webu.",
    link: "/testovani/komplexni-analyza",
  },
];

const TestingCards = () => (
  <CardList
    title="Nastal čas"
    highlightText="testování"
    link="/testovani"
    items={testFeatures}
    className="testing-cards"
  />
);

export default TestingCards;
