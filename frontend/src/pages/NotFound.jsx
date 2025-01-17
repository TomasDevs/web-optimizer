import React from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const queryParams = location.search;

  return (
    <section className="section-page not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Oops! Tady jste špatně.</p>
      <p className="not-found__text">
        Stránku <code>{location.pathname + queryParams}</code> jsme nenašli.
        Možná jste zadali špatnou adresu, nebo už neexistuje.
      </p>
      <p className="not-found__text">
        Ale nezoufejte, <strong>všechno napravíme!</strong>
      </p>
      <Link to="/" className="not-found__link">
        🌟 Zpátky domů 🌟
      </Link>
    </section>
  );
};

export default NotFound;
