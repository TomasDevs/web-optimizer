import React from "react";

const DidYouKnow = () => {
  return (
    <div className="additional__section -did-you-know">
      <h3 className="additional__title">Věděli jste, že...</h3>
      <ul className="additional__list">
        <li className="additional__list-item">
          <blockquote className="additional__quote">
            Stránka, která se načítá do 2 sekund, má o 15 % nižší míru odchodů.
          </blockquote>
        </li>
        <li className="additional__list-item">
          <blockquote className="additional__quote">
            Google penalizuje pomalé stránky ve vyhledávání.
          </blockquote>
        </li>
        <li className="additional__list-item">
          <blockquote className="additional__quote">
            Většina uživatelů opustí web po 3 sekundách čekání.
          </blockquote>
        </li>
        <li className="additional__list-item">
          <blockquote className="additional__quote">
            "Rychle načtené stránky zlepšují konverze o 20 %."
            <cite className="additional__cite"> Studie Google</cite>
          </blockquote>
        </li>
      </ul>
    </div>
  );
};

export default DidYouKnow;
