import React from "react";
import FadeInOnScroll from "../UI/FadeInOnScroll";

const Hero = () => {
  return (
    <section className="section hero">
      <FadeInOnScroll className="section-description">
        <h1 className="hero__title">
          Posuňte výkon svého webu na další úroveň
        </h1>
        <p className="hero__text">
          Testujte a analyzujte optimalizační techniky. Objevte, jak zlepšit
          Core Web Vitals a vytvořit rychlé a uživatelsky přívětivé aplikace.
        </p>
      </FadeInOnScroll>
    </section>
  );
};

export default Hero;
