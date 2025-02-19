import React, { useState } from "react";

const FontExampleToggle = ({ googleFontsExample, localFontsExample }) => {
  const [showFontExample, setShowFontExample] = useState(false);

  return (
    <div className="font-example-toggle">
      <button
        onClick={() => setShowFontExample(!showFontExample)}
        className="button -bottom">
        {showFontExample ? "Zobrazit Google Fonts" : "Zobrazit lokální fonty"}
      </button>
      <pre className="code-block">
        {showFontExample ? localFontsExample : googleFontsExample}
      </pre>
    </div>
  );
};

export default FontExampleToggle;
