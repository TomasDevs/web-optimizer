import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, link }) => {
  return (
    <article className="card">
      <Link to={link} className="card__link">
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{description}</p>
      </Link>
    </article>
  );
};

export default Card;
