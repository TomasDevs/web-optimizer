import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import Additional from "./Additional/Additional";

const Layout = () => {
  const location = useLocation();

  // Add minification only to testing pages
  const isTestingPage =
    location.pathname === "/testovani/minifikace-kodu" ||
    location.pathname === "/testovani/komplexni-analyza";

  return (
    <>
      {isTestingPage && (
        <Helmet>
          <link
            rel="stylesheet"
            href={
              new URLSearchParams(location.search).get("minified") !== "false"
                ? "/minified-index.css"
                : "/unminified-index.css"
            }
          />
          <script
            type="module"
            src={
              new URLSearchParams(location.search).get("minified") !== "false"
                ? "/minified-index.js"
                : "/unminified-index.js"
            }
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
