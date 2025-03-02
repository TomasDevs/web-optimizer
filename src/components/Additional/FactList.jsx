import React from "react";

const FactList = ({ facts, source }) => {
  return (
    <>
      <ul className="additional__list">
        {facts.map((fact, index) => (
          <li key={index} className="additional__list-item">
            {fact.url ? (
              <a
                href={fact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="additional__link">
                {fact.text}
              </a>
            ) : (
              <blockquote className="additional__quote">{fact.text}</blockquote>
            )}
          </li>
        ))}
      </ul>
      {source && (
        <cite className="additional__cite">
          Potvrzeno{" "}
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="additional__cite-link">
            {source.text}
          </a>
        </cite>
      )}
    </>
  );
};

export default FactList;
