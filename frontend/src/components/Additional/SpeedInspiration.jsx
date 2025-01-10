import React from "react";

const SpeedInspiration = () => {
  return (
    <div className="additional__section">
      <h3 className="additional__title">Inspirace pro rychlost</h3>
      <ul className="additional__list">
        <li className="additional__list-item">
          <a
            href="https://example.com/case-study-lazy-loading"
            target="_blank"
            rel="noopener noreferrer"
            className="additional__link">
            Jak lazy loading zvýšil rychlost o 40 % na [web X].
          </a>
        </li>
        <li className="additional__list-item">
          <a
            href="https://example.com/case-study-image-optimization"
            target="_blank"
            rel="noopener noreferrer"
            className="additional__link">
            Optimalizace obrázků přinesla [firmě Y] o 30 % vyšší konverze.
          </a>
        </li>
        <li className="additional__list-item">
          <a
            href="https://example.com/case-study-seo-performance"
            target="_blank"
            rel="noopener noreferrer"
            className="additional__link">
            Jak zlepšit SEO díky rychlejšímu načítání.
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SpeedInspiration;
