import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, link }) => {
  return (
    <article className="card">
      <Link to={link} className="card__link">
        <h2 className="card__title">{title}</h2>
        <p className="card__text">{description}</p>
      </Link>
    </article>
  );
};

export default Card;
