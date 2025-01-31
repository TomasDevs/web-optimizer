import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import FadeInOnScroll from "../FadeInOnScroll";

const features = [
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
    title: "Optimalizace API",
    description: "Zlepšete výkon vašeho API a zrychlete odpovědi.",
    link: "/api-optimization",
  },
  {
    title: "Využití CDN",
    description: "Zrychlete načítání webu díky distribuovaným serverům CDN.",
    link: "optimalizace/cdn",
  },
  {
    title: "Bezpečné načítání",
    description: "Použijte bezpečné techniky načítání pro zajištění dat.",
    link: "/secure-loading",
  },
];

const OptimizationCards = () => {
  return (
    <section className="section optimization-cards">
      <FadeInOnScroll className="section-description">
        <h2 className="section-subtitle">
          Techniky{" "}
          <Link to={"/optimalizace"} className="highlight-link">
            {" "}
            optimalizace webu
          </Link>
        </h2>

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
      </FadeInOnScroll>
    </section>
  );
};

export default OptimizationCards;
