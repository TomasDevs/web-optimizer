import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CodeMinification from "./pages/Optimization/CodeMinification";
import AboutApp from "./pages/Menu/AboutApp";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/o-aplikaci" element={<AboutApp />} />
          <Route path="/minifikace-kodu" element={<CodeMinification />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
