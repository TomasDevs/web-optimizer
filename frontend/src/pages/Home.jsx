import React from "react";
import Hero from "../components/Hero";
import TestingCards from "../components/Card/TestingCards";
import OptimizationCards from "../components/Card/OptimizationCards";
import CoreWebVitalsCards from "../components/Card/CoreWebVitalsCards";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <OptimizationCards />
      <CoreWebVitalsCards />
      <TestingCards />
    </div>
  );
};

export default Home;
