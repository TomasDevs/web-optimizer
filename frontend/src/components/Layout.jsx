import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Cards from "./Cards";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          {children}
          <Hero />
          <Cards />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
