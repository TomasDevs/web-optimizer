import React from "react";

const QuickLinks = () => {
  return (
    <div className="additional__section -quick-links">
      <h3 className="additional__title">Změřte si váš web</h3>
      <ul className="additional__list">
        <li className="additional__list-item">
          <a
            href="https://pagespeed.web.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="additional__link">
            PageSpeed Insights
          </a>
        </li>
        <li className="additional__list-item">
          <a
            href="https://gtmetrix.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="additional__link">
            GTmetrix
          </a>
        </li>
        <li className="additional__list-item">
          <a
            href="https://webpagetest.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="additional__link">
            WebPageTest
          </a>
        </li>
        <li className="additional__list-item">
          <a
            href="https://tools.pingdom.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="additional__link">
            Pingdom Tools
          </a>
        </li>
        <li className="additional__list-item">
          <a
            href="https://pagespeed.cz/"
            target="_blank"
            rel="noopener noreferrer"
            className="additional__link">
            PageSpeed.cz Tester
          </a>
        </li>
        <li className="additional__list-item">
          <a
            href="https://www.speedcurve.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="additional__link">
            SpeedCurve
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
