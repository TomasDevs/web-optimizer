import React from "react";
import Card from "./Card";

const features = [
  {
    title: "Minifikace kódu",
    description: "Odstraňte zbytečnosti a zrychlete svůj web.",
    link: "/minifikace-kodu",
  },
  {
    title: "Optimalizace obrázků",
    description: "Zjistěte, jak zlepšit rychlost načítání obrázků.",
    link: "/image-optimization",
  },
  {
    title: "Optimalizace fontů",
    description: "Naučte se, jak rychle načítat webové fonty.",
    link: "/font-optimization",
  },
  {
    title: "Optimalizace API",
    description: "Zlepšete výkon vašeho API a zrychlete odpovědi.",
    link: "/api-optimization",
  },
  {
    title: "Lazy Loading",
    description: "Naučte se, jak načítat obsah efektivně.",
    link: "/lazy-loading",
  },

  {
    title: "Využití CDN",
    description: "Zjistěte, jak CDN zlepší výkon vašeho webu.",
    link: "/cdn-optimization",
  },
  {
    title: "Bezpečné načítání",
    description: "Použijte bezpečné techniky načítání pro zajištění dat.",
    link: "/secure-loading",
  },
  {
    title: "Redukce JavaScriptu",
    description: "Minimalizujte nepotřebný JavaScript pro rychlejší načítání.",
    link: "/js-reduction",
  },
];

const OptimizationCards = () => {
  return (
    <section className="section optimization-cards">
      <h2 className="section-subtitle">Techniky optimalizace webu</h2>

      <div className="cards__container">
        {features.map((feature, index) => (
          <Card
            key={index}
            title={feature.title}
            description={feature.description}
            link={feature.link}
          />
        ))}
      </div>
    </section>
  );
};

export default OptimizationCards;
