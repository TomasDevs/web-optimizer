import React from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const queryParams = location.search;

  return (
    <section className="section not-found">
      <h1 className="not-found__title">404 - Stránka nenalezena</h1>
      <p className="not-found__text">
        Omlouváme se, ale požadovaná stránka{" "}
        <code>{location.pathname + queryParams}</code> neexistuje.
      </p>
      <p className="not-found__text">
        Možná jste zadali nesprávnou URL nebo se stránka přesunula.
      </p>
      <Link to="/" className="not-found__link">
        Návrat na domovskou stránku
      </Link>
    </section>
  );
};

export default NotFound;
