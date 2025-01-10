import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Additional from "./Additional/Additional";

const Layout = () => {
  return (
    <>
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
