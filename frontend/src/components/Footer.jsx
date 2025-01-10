const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        {" "}
        &copy; {currentYear} Web Optimizer | All Rights Reserved
      </p>
      <p className="footer__text">
        <span role="img" aria-label="Idea">
          💡
        </span>{" "}
        by Tomáš Štveráček
      </p>
    </footer>
  );
};

export default Footer;
