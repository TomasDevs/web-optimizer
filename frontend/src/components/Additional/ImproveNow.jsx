import React from "react";
import { Link } from "react-router-dom";
import AdditionalSection from "./AdditionalSection";

const ImproveNow = () => {
  return (
    <AdditionalSection
      title="Zlepšete svůj web ještě dnes!"
      className="-improve">
      <p className="additional__text">
        Rychlý a hladký web je cesta k úspěchu.
        <br />
        Optimalizujte a zlepšete spokojenost uživatelů i výsledky!
      </p>
      <Link to="/nastroje" className="additional__button">
        Začněte optimalizovat
      </Link>
    </AdditionalSection>
  );
};

export default ImproveNow;
