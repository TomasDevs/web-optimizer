import React from "react";
import { Helmet } from "react-helmet";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const { pathname, search } = useLocation();

  return (
    <section className="section-page not-found">
      <Helmet>
        <title>Stránka nenalezena | Web Optimizer</title>
      </Helmet>
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">
        Ups, tahle stránka se rozhodla <strong>zmizet na dovolenou!</strong>
      </p>
      <p className="not-found__text">
        Stránku <code>{pathname + search}</code> jsme nenašli. Možná se někde{" "}
        <strong>vyhřívá na slunci.</strong>
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
