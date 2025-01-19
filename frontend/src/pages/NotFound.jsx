import React from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const queryParams = location.search;

  return (
    <section className="section-page not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">
        Ups, tahle stránka se rozhodla <strong>zmizet na dovolenou!</strong> 🏖️
      </p>
      <p className="not-found__text">
        Stránku <code>{location.pathname + queryParams}</code> jsme nenašli.
        Možná se někde <strong>vyhřívá na slunci.</strong>
      </p>
      <p className="not-found__text">
        Ale nemusíte zoufat, <strong>my vám pomůžeme</strong> najít cestu zpět.
      </p>
      <Link to="/" className="not-found__link">
        Návrat domů
      </Link>
    </section>
  );
};

export default NotFound;
