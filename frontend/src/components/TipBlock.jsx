import React from "react";
import { Link } from "react-router-dom";
import FadeInOnScroll from "./FadeInOnScroll";

const TipBlock = ({ title, content, link, linkText }) => (
  <FadeInOnScroll className="tip-block">
    <h3 className="tip-block__title">{title}</h3>
    {content.map((paragraph, index) => (
      <p className="tip-block__text" key={index}>
        {paragraph}
      </p>
    ))}
    <p className="tip-block__link">
      <Link to={link} className="highlight-link">
        {linkText}
      </Link>
    </p>
  </FadeInOnScroll>
);

export default TipBlock;
