import React from "react";
import Card from "./Card";

const coreWebVitalsFeatures = [
  {
    title: "Largest Contentful Paint (LCP)",
    description: "Zlepšete rychlost načítání hlavního obsahu.",
    link: "/core-web-vitals/lcp",
  },
  {
    title: "Cumulative Layout Shift (CLS)",
    description: "Minimalizujte posuny rozložení stránky.",
    link: "/core-web-vitals/cls",
  },
  {
    title: "Interaction to Next Paint (INP)",
    description: "Zlepšete rychlost interakce na stránce.",
    link: "/core-web-vitals/inp",
  },
];

const CoreWebVitalsCards = () => {
  return (
    <section className="section core-web-vitals-cards">
      <h2 className="section-subtitle">Porozumění Core Web Vitals</h2>

      <div className="cards__container">
        {coreWebVitalsFeatures.map((feature, index) => (
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

export default CoreWebVitalsCards;
