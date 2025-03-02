import React from "react";
import AdditionalSection from "./AdditionalSection";

const links = [
  { name: "PageSpeed Insights", url: "https://pagespeed.web.dev/" },
  { name: "GTmetrix", url: "https://gtmetrix.com/" },
  { name: "WebPageTest", url: "https://webpagetest.org/" },
  { name: "Pingdom Tools", url: "https://tools.pingdom.com/" },
  { name: "PageSpeed.cz Tester", url: "https://pagespeed.cz/" },
  { name: "SpeedCurve", url: "https://www.speedcurve.com/" },
];

const QuickLinks = () => {
  return (
    <AdditionalSection title="Změřte si váš web" className="-quick-links">
      <ul className="additional__list">
        {links.map((link, index) => (
          <li key={index} className="additional__list-item">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="additional__link">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </AdditionalSection>
  );
};

export default QuickLinks;
