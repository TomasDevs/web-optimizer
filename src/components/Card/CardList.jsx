import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import FadeInOnScroll from "../UI/FadeInOnScroll";

const CardList = ({ title, highlightText, link, items, className }) => {
  return (
    <FadeInOnScroll className={`section-lg ${className}`}>
      <h2 className="section-subtitle">
        {title}{" "}
        <Link to={link} className="highlight-link">
          {highlightText}
        </Link>
      </h2>

      <div className="cards__container">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </FadeInOnScroll>
  );
};

export default CardList;
