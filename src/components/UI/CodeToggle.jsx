import React, { useState } from "react";

const CodeToggle = ({ unminifiedCode, minifiedCode }) => {
  const [isCodeMinified, setIsCodeMinified] = useState(false);

  return (
    <div className="code-toggle">
      <button
        onClick={() => setIsCodeMinified(!isCodeMinified)}
        className="button -bottom">
        {isCodeMinified
          ? "Zobrazit neminifikovaný kód"
          : "Zobrazit minifikovaný kód"}
      </button>
      <pre className="code-block">
        {isCodeMinified ? minifiedCode : unminifiedCode}
      </pre>
    </div>
  );
};

export default CodeToggle;
