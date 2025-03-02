import React from "react";

const AdditionalSection = ({ title, children, className = "" }) => {
  return (
    <div className={`additional__section ${className}`}>
      <h3 className="additional__title">{title}</h3>
      {children}
    </div>
  );
};

export default AdditionalSection;
