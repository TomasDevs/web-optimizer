import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Optimization from "./pages/Optimization/Optimization";
import CodeMinification from "./pages/Optimization/CodeMinification";
import CoreWebVitals from "./pages/CoreWebVitals/CoreWebVitals";
import LCPDetail from "./pages/CoreWebVitals/LCPDetail";
import CLSDetail from "./pages/CoreWebVitals/CLSDetail";
import INPDetail from "./pages/CoreWebVitals/INPDetail";
import AboutApp from "./pages/Menu/AboutApp";
import Tools from "./pages/Menu/Tools";
import FAQ from "./pages/Menu/FAQ";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/o-aplikaci" element={<AboutApp />} />
          <Route path="/nastroje" element={<Tools />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/optimalizace" element={<Optimization />} />
          <Route path="/core-web-vitals" element={<CoreWebVitals />} />
          <Route path="/core-web-vitals/lcp" element={<LCPDetail />} />
          <Route path="/core-web-vitals/cls" element={<CLSDetail />} />
          <Route path="/core-web-vitals/inp" element={<INPDetail />} />
          <Route
            path="/optimalizace/minifikace-kodu"
            element={<CodeMinification />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
