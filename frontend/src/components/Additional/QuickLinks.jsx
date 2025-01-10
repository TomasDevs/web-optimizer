import React from "react";

const QuickLinks = () => {
  return (
    <div className="additional__section">
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
            href="https://web.dev/measure/"
            target="_blank"
            rel="noopener noreferrer"
            className="additional__link">
            Web.dev Measure
          </a>
        </li>
        <li className="additional__list-item">
          <a
            href="https://developer.chrome.com/docs/devtools/"
            target="_blank"
            rel="noopener noreferrer"
            className="additional__link">
            Chrome DevTools
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
