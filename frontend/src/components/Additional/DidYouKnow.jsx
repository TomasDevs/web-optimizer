import React from "react";

const DidYouKnow = () => {
  return (
    <div className="additional__section -did-you-know">
      <h3 className="additional__title">Věděli jste, že...</h3>
      <ul className="additional__list">
        <li className="additional__list-item">
          <blockquote className="additional__quote">
            Až 53 % uživatelů opustí stránku, pokud se načítá déle než 3
            sekundy.
          </blockquote>
        </li>
        <li className="additional__list-item">
          <blockquote className="additional__quote">
            Pravděpodobnost opuštění stránky vzroste o 32 %, pokud načítání trvá
            3 sekundy místo 1.
          </blockquote>
        </li>
        <li className="additional__list-item">
          <blockquote className="additional__quote">
            79 % zákazníků, kteří jsou nespokojeni s výkonem webu, zvažuje, že z
            něj znovu nenakoupí.
          </blockquote>
        </li>
      </ul>
      <cite className="additional__cite">
        Potvrzeno{" "}
        <a
          href="https://www.thinkwithgoogle.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="additional__cite-link">
          Studií Google
        </a>
      </cite>
    </div>
  );
};

export default DidYouKnow;
