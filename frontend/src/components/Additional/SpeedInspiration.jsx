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
            href="https://web.dev/case-studies/vodafone"
            target="_blank"
            rel="noopener noreferrer"
            className="additional__link">
            Vodafone zlepšil LCP o 31 %, což vedlo k 8% nárůstu prodeje.
          </a>
        </li>
        <li className="additional__list-item">
          <a
            href="https://engineeringblog.yelp.com/2021/01/boosting-user-conversion-with-ux-performance-wins.html"
            target="_blank"
            rel="noopener noreferrer"
            className="additional__link">
            Yelp snížil FCP o 45 % a zvýšil míru konverze o 15 %.
          </a>
        </li>
        <li className="additional__list-item">
          <a
            href="https://www.creativebloq.com/features/how-the-bbc-builds-websites-that-scale"
            target="_blank"
            rel="noopener noreferrer"
            className="additional__link">
            BBC zjistilo, že za každou další sekundu načítání ztrácí 10 %
            uživatelů.
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SpeedInspiration;
