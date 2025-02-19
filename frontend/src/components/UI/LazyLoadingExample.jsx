import React, { useState } from "react";

const LazyLoadingExample = () => {
  const lazyLoadingExample = `
    <img src="/assets/images/image1.jpg" loading="lazy" alt="Obrázek 1" />
    <img src="/assets/images/image2.jpg" loading="lazy" alt="Obrázek 2" />
    <img src="/assets/images/image3.jpg" loading="lazy" alt="Obrázek 3" />
  `;

  const eagerLoadingExample = `
    <img src="/assets/images/image1.jpg" loading="eager" alt="Obrázek 1" />
    <img src="/assets/images/image2.jpg" loading="eager" alt="Obrázek 2" />
    <img src="/assets/images/image3.jpg" loading="eager" alt="Obrázek 3" />
  `;

  const [showLazyCode, setShowLazyCode] = useState(true);

  return (
    <div>
      <button
        onClick={() => setShowLazyCode(!showLazyCode)}
        className="button button -bottom">
        {showLazyCode ? "Zobrazit eager loading" : "Zobrazit lazy loading"}
      </button>

      <pre className="code-block">
        {showLazyCode ? lazyLoadingExample : eagerLoadingExample}
      </pre>
    </div>
  );
};

export default LazyLoadingExample;
