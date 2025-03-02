import React from "react";
import CardList from "./CardList";

const optimizationFeatures = [
  {
    title: "Minifikace kódu",
    description: "Odstraňte zbytečnosti a zrychlete svůj web.",
    link: "optimalizace/minifikace-kodu",
  },
  {
    title: "Lazy Loading",
    description: "Naučte se, jak načítat obsah efektivně.",
    link: "optimalizace/lazy-loading",
  },
  {
    title: "Optimalizace obrázků",
    description: "Zjistěte, jak zlepšit rychlost načítání obrázků.",
    link: "optimalizace/optimalizace-obrazku",
  },
  {
    title: "Optimalizace fontů",
    description: "Naučte se, jak rychle načítat webové fonty.",
    link: "optimalizace/fonty",
  },
  {
    title: "Načítání skriptů",
    description: "Optimalizujte výkon pomocí async, defer a dalších metod.",
    link: "optimalizace/nacitani-skriptu",
  },
  {
    title: "Využití CDN",
    description: "Zrychlete načítání webu díky distribuovaným serverům CDN.",
    link: "optimalizace/cdn",
  },
  {
    title: "Optimalizace API",
    description: "Zlepšete výkon vašeho API a zrychlete odpovědi.",
    link: "optimalizace/api",
  },
  {
    title: "Využití cache",
    description:
      "Zrychlete aplikaci pomocí browser cache, HTTP cache a validace.",
    link: "optimalizace/cache",
  },
];

const OptimizationCards = () => (
  <CardList
    title="Techniky"
    highlightText="optimalizace webu"
    link="/optimalizace"
    items={optimizationFeatures}
    className="optimization-cards"
  />
);

export default OptimizationCards;
