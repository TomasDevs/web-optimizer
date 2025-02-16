import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import Additional from "./Additional/Additional";

const Layout = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // Add minification only to testing pages
  const isTestingPage =
    location.pathname === "/testovani/minifikace-kodu" ||
    location.pathname === "/testovani/komplexni-analyza";

  const isMinified = searchParams.get("minified") !== "false";

  return (
    <>
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
