import React from "react";
import { Link } from "react-router-dom";

const ImproveNow = () => {
  return (
    <div className="additional__section -improve">
      <h3 className="additional__title">Zlepšete svůj web ještě dnes!</h3>
      <p className="additional__text">
        Rychlý a hladký web je cesta k úspěchu.
        <br />
        Optimalizujte a zlepšete spokojenost uživatelů i výsledky!
      </p>
      <Link to="/nastroje" className="additional__button">
        Začněte optimalizovat
      </Link>
    </div>
  );
};

export default ImproveNow;
