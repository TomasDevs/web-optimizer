import React from "react";
import Hero from "../components/Hero";
import OptimizationCards from "../components/Card/OptimizationCards";
import CoreWebVitalsCards from "../components/Card/CoreWebVitalsCards";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <OptimizationCards />
      <CoreWebVitalsCards />
    </div>
  );
};

export default Home;
