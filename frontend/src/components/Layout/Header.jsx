import React from "react";
import { Link } from "react-router-dom";
import Logo from "../UI/Logo";
import Menu from "../Navigation/Menu";

const Header = ({ siteName = "Web Optimizer" }) => {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <Logo />
        <span className="header__text">
          <strong>{siteName.split(" ")[0]}</strong> {siteName.split(" ")[1]}
        </span>
      </Link>
      <Menu />
    </header>
  );
};

export default Header;
