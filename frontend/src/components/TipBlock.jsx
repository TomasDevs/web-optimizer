import React from "react";
import { Link } from "react-router-dom";
import FadeInOnScroll from "./FadeInOnScroll";

const TipBlock = ({ title, content, link, linkText }) => (
  <FadeInOnScroll className="tip-block">
    <h3>{title}</h3>
    {content.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
    <p>
      <Link to={link} className="highlight-link">
        {linkText}
      </Link>
    </p>
  </FadeInOnScroll>
);

export default TipBlock;
