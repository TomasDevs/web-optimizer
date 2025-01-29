import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import TestingPage from "./pages/Testing/TestingPage";
import Optimization from "./pages/Optimization/Optimization";
import CodeMinification from "./pages/Optimization/CodeMinification";
import LazyLoading from "./pages/Optimization/LazyLoading";
import ImageDisplayTesting from "./pages/Testing/ImageDisplayTesting";
import ImageOptimization from "./pages/Optimization/ImageOptimization";

import FontOptimization from "./pages/Optimization/FontOptimization";
import ScriptLoading from "./pages/Optimization/ScriptLoading";
import CoreWebVitals from "./pages/CoreWebVitals/CoreWebVitals";
import LCPDetail from "./pages/CoreWebVitals/LCPDetail";
import CLSDetail from "./pages/CoreWebVitals/CLSDetail";
import INPDetail from "./pages/CoreWebVitals/INPDetail";

// Testing Optimization
import CodeMinificationTesting from "./pages/Testing/CodeMinificationTesting";
import ImageOptimizationTesting from "./pages/Testing/ImageOptimizationTesting";
import LazyLoadingTesting from "./pages/Testing/LazyLoadingTesting";
import FontOptimizationTesting from "./pages/Testing/FontOptimizationTesting";
import ScriptLoadingTesting from "./pages/Testing/ScriptLoadingTesting";

// Testing Core Web Vitals
import LCPTesting from "./pages/Testing/LCPTesting";
import ClsTesting from "./pages/Testing/CLSTesting";
import InpTesting from "./pages/Testing/INPTesting";

import AboutApp from "./pages/Menu/AboutApp";
import Tools from "./pages/Menu/Tools";
import FAQ from "./pages/Menu/FAQ";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          {/* Menu */}
          <Route path="/" element={<Home />} />
          <Route path="/o-aplikaci" element={<AboutApp />} />
          <Route path="/nastroje" element={<Tools />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testovani" element={<TestingPage />} />
          <Route path="/optimalizace" element={<Optimization />} />
          <Route path="/core-web-vitals" element={<CoreWebVitals />} />

          {/* Core Web Vitals */}
          <Route path="/core-web-vitals/lcp" element={<LCPDetail />} />
          <Route path="/core-web-vitals/cls" element={<CLSDetail />} />
          <Route path="/core-web-vitals/inp" element={<INPDetail />} />

          {/* Optimization */}
          <Route
            path="/optimalizace/minifikace-kodu"
            element={<CodeMinification />}
          />
          <Route path="/optimalizace/lazy-loading" element={<LazyLoading />} />
          <Route path="/optimalizace/fonty" element={<FontOptimization />} />
          <Route
            path="/optimalizace/nacitani-skriptu"
            element={<ScriptLoading />}
          />
          <Route
            path="/optimalizace/optimalizace-obrazku"
            element={<ImageOptimization />}
          />

          {/* Testing Core Web Vitals */}
          <Route path="/testovani/lcp-testing" element={<LCPTesting />} />
          <Route path="/testovani/cls-testing" element={<ClsTesting />} />
          <Route path="/testovani/inp-testing" element={<InpTesting />} />

          {/* Testing Optimization */}
          <Route
            path="/testovani/minifikace-kodu"
            element={<CodeMinificationTesting />}
          />
          <Route
            path="/testovani/optimalizace-obrazku"
            element={<ImageOptimizationTesting />}
          />
          <Route
            path="/testovani/lazy-loading"
            element={<LazyLoadingTesting />}
          />
          <Route
            path="/testovani/zobrazeni-obrazku"
            element={<ImageDisplayTesting />}
          />
          <Route
            path="/testovani/fonty"
            element={<FontOptimizationTesting />}
          />
          <Route
            path="/testovani/nacitani-skriptu"
            element={<ScriptLoadingTesting />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
