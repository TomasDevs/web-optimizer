import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import FadeInOnScroll from "../FadeInOnScroll";

const CardList = ({ title, highlightText, link, items, className }) => {
  return (
    <section className={`section ${className}`}>
      <FadeInOnScroll className="section-description">
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
    </section>
  );
};

export default CardList;
