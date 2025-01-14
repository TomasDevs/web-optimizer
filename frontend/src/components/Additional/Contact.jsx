import React from "react";

const Contact = () => {
  return (
    <div className="additional__section -contact">
      <h3 className="additional__title">Zeptejte se mě</h3>
      <p className="additional__text">
        Máte otázky? Napište mi na e-mail:{" "}
        <a href="mailto:stveracek.work@gmail.com" className="additional__link">
          stveracek.work@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default Contact;
