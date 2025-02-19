import React from "react";

const Footer = ({ author = "Tomáš Štveráček", year }) => {
  const currentYear = year || new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        &copy; {currentYear} Web Optimizer | All Rights Reserved
      </p>
      <p className="footer__text">
        <span role="img" aria-label="Idea">
          💡
        </span>{" "}
        by {author}
      </p>
    </footer>
  );
};

export default Footer;
