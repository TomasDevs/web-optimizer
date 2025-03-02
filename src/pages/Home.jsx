import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Layout/Hero";
import TestingCards from "../components/Card/TestingCards";
import OptimizationCards from "../components/Card/OptimizationCards";
import CoreWebVitalsCards from "../components/Card/CoreWebVitalsCards";

const Home = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Web Optimizer | Optimalizace a testování webu</title>
      </Helmet>
      <Hero />
      <OptimizationCards />
      <CoreWebVitalsCards />
      <TestingCards />
    </div>
  );
};

export default Home;
