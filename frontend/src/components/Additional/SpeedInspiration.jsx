import React from "react";

const SpeedInspiration = () => {
  return (
    <div className="additional__section -speed">
      <h3 className="additional__title">Inspirace pro rychlost</h3>
      <ul className="additional__list">
        <li className="additional__list-item">
          <a
            href="https://www.medresponsive.com/blog/lazy-loading-bad-seo/"
            target="_blank"
            rel="noopener noreferrer"
            className="additional__link">
            Pinterest snížil dobu načítání o 40 % implementací lazy loadingu.
          </a>
        </li>
        <li className="additional__list-item">
          <a
            href="https://www.ilincev.com/rychlost-webu"
            target="_blank"
            rel="noopener noreferrer"
            className="additional__link">
            9 možností, jak zrychlit web a zvýšit tím konverze
          </a>
        </li>
        <li className="additional__list-item">
          <a
            href="https://portent.com/blog/analytics/research-site-speed-hurting-everyones-revenue.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="additional__link">
            Rychlejší načítání stránek může zvýšit konverzní poměr až o 40 %.
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SpeedInspiration;
