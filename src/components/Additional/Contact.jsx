import React from "react";
import AdditionalSection from "./AdditionalSection";

const Contact = () => {
  return (
    <AdditionalSection title="Zeptejte se mě" className="-contact">
      <p className="additional__text">
        Máte otázky? Napište mi na e-mail:{" "}
        <a href="mailto:stveracek.work@gmail.com" className="additional__link">
          stveracek.work@gmail.com
        </a>
        .
      </p>
    </AdditionalSection>
  );
};

export default Contact;
