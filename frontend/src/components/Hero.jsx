import React from "react";
import FadeInOnScroll from "./FadeInOnScroll";

const Hero = () => {
  return (
    <section className="section hero">
      <h1 className="hero__title">Posuňte výkon svého webu na další úroveň</h1>
      <FadeInOnScroll className="section-description">
        <p className="hero__text">
          Testujte a analyzujte optimalizační techniky. Objevte, jak zlepšit
          Core Web Vitals a vytvořit rychlé a uživatelsky přívětivé aplikace.
        </p>
      </FadeInOnScroll>
    </section>
  );
};

export default Hero;
