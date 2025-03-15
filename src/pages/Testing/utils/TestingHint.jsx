import React from "react";

const TestingHint = () => {
  return (
    <p className="hints">
      <svg
        className="hints__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
      Pro lepší výsledky testu doporučuji přepnout okno/kartu v prohlížeči a
      vrátit se zpět, případně mezi testy aktualizovat stránku (F5). Pro úplné
      obnovení všech zdrojů použijte Ctrl+F5. Knihovna web-vitals měří metriky
      nejpřesněji při novém načtení stránky, protože potřebuje zachytit celý
      proces vykreslování od začátku.
    </p>
  );
};

export default TestingHint;
