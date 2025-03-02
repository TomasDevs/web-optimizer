import React from "react";
import CardList from "./CardList";

// Seznam funkcí Core Web Vitals
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

const CoreWebVitalsCards = () => (
  <CardList
    title="Porozumění"
    highlightText="Core Web Vitals"
    link="/core-web-vitals"
    items={coreWebVitalsFeatures}
    className="core-web-vitals-cards"
  />
);

export default CoreWebVitalsCards;
