import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Additional from "../Additional/Additional";

const Layout = () => {
  const { pathname, search } = useLocation(); // Získání aktuální URL
  const searchParams = new URLSearchParams(search);

  // Kontrola, zda se jedná o testovací stránku
  const isTestingPage = [
    "/testovani/minifikace-kodu",
    "/testovani/komplexni-analyza",
  ].includes(pathname);

  // Kontrola, zda je stránka minifikovaná
  const isMinified = searchParams.get("minified") !== "false";

  return (
    <>
      {/* Pokud jde o testovací stránku, dynamicky nastaví odpovídající CSS a JS */}
      {isTestingPage && (
        <Helmet>
          <link
            rel="stylesheet"
            href={isMinified ? "/minified-index.css" : "/unminified-index.css"}
          />
          <script
            type="module"
            src={isMinified ? "/minified-index.js" : "/unminified-index.js"}
          />
        </Helmet>
      )}

      <div className="container">
        <Header />
        <main>
          <Outlet />
        </main>
        <Additional />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
