import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import FadeInOnScroll from "../FadeInOnScroll";

const tests = [
  {
    title: "CLS Test",
    description: "Otestujte vizuální stabilitu svého webu.",
    link: "/testovani/cls-testing",
  },
  {
    title: "LCP Test",
    description: "Zjistěte, jak optimalizovat hlavní obsah stránky.",
    link: "/testovani/lcp-testing",
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
    title: "Minifikace kódu",
    description: "Otestujte dopad minifikace kódu na výkon webu.",
    link: "/testovani/minifikace-kodu",
  },
  {
    title: "Všechny testy",
    description: "Spusťte všechny testy najednou pro komplexní analýzu.",
    link: "/testovani/vse",
  },
];

const TestingCards = () => {
  return (
    <section className="section testing-cards">
      <FadeInOnScroll className="section-description">
        <h2 className="section-subtitle">
          Nastal čas{" "}
          <Link to={"/testovani"} className="highlight-link">
            testování
          </Link>
        </h2>

        <div className="cards__container">
          {tests.map((test, index) => (
            <Card
              key={index}
              title={test.title}
              description={test.description}
              link={test.link}
            />
          ))}
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default TestingCards;
