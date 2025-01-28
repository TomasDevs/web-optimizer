import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import TestingPage from "./pages/Testing/TestingPage";
import Optimization from "./pages/Optimization/Optimization";
import CodeMinification from "./pages/Optimization/CodeMinification";
import LazyLoading from "./pages/Optimization/LazyLoading";
import ImageFormatOptimization from "./pages/Optimization/ImageFormatOptimization";
import ImageSizeOptimization from "./pages/Optimization/ImageSizeOptimization";
import ImageDisplayComparison from "./pages/Optimization/ImageDisplayComparison";
import FontOptimization from "./pages/Optimization/FontOptimization";
import ScriptLoading from "./pages/Optimization/ScriptLoading";
import CoreWebVitals from "./pages/CoreWebVitals/CoreWebVitals";
import LCPDetail from "./pages/CoreWebVitals/LCPDetail";
import CLSDetail from "./pages/CoreWebVitals/CLSDetail";
import INPDetail from "./pages/CoreWebVitals/INPDetail";

// Testing Optimization
import CodeMinificationTest from "./pages/Testing/CodeMinificationTesting";
import LazyLoadingTest from "./pages/Testing/LazyLoadingTesting";
import FontOptimizationTest from "./pages/Testing/FontOptimizationTesting";

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
          <Route path="/" element={<Home />} />
          <Route path="/o-aplikaci" element={<AboutApp />} />
          <Route path="/nastroje" element={<Tools />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testovani" element={<TestingPage />} />
          <Route path="/optimalizace" element={<Optimization />} />
          <Route path="/core-web-vitals" element={<CoreWebVitals />} />
          <Route path="/core-web-vitals/lcp" element={<LCPDetail />} />
          <Route path="/core-web-vitals/cls" element={<CLSDetail />} />
          <Route path="/core-web-vitals/inp" element={<INPDetail />} />
          <Route
            path="/optimalizace/minifikace-kodu"
            element={<CodeMinification />}
          />
          <Route path="/optimalizace/lazy-loading" element={<LazyLoading />} />
          <Route
            path="/optimalizace/optimalizace-obrazku"
            element={<ImageFormatOptimization />}
          />
          <Route
            path="/optimalizace/velikost-obrazku"
            element={<ImageSizeOptimization />}
          />
          <Route
            path="/optimalizace/zobrazeni-obrazku"
            element={<ImageDisplayComparison />}
          />
          <Route path="/optimalizace/fonty" element={<FontOptimization />} />
          <Route
            path="/optimalizace/nacitani-skriptu"
            element={<ScriptLoading />}
          />
          <Route path="/testovani/lcp-testing" element={<LCPTesting />} />
          <Route path="/testovani/cls-testing" element={<ClsTesting />} />
          <Route path="/testovani/inp-testing" element={<InpTesting />} />
          <Route
            path="/testovani/minifikace-kodu"
            element={<CodeMinificationTest />}
          />
          <Route path="/testovani/lazy-loading" element={<LazyLoadingTest />} />

          <Route path="/testovani/fonty" element={<FontOptimizationTest />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
