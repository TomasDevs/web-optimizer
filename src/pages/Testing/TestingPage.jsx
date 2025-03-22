import React from "react";
import { Helmet } from "react-helmet";
import TestingCards from "../../components/Card/TestingCards";
import FadeInOnScroll from "../../components/UI/FadeInOnScroll";

const TestingPage = () => {
  return (
    <div className="testing-page">
      <Helmet>
        <title>Testování výkonu | Web Optimizer</title>
      </Helmet>

      <FadeInOnScroll className="section-page">
        <h1 className="subpage-title">Testování webové výkonnosti</h1>

        <p className="section-text">
          Zjisti, jak si web vede z hlediska výkonu a uživatelského zážitku.
          Otestuj klíčové metriky, jako je stabilita layoutu (CLS), rychlost
          načtení hlavního obsahu (LCP), interaktivita (INP) a další metriky.
        </p>
      </FadeInOnScroll>

      <TestingCards />
    </div>
  );
};

export default TestingPage;
