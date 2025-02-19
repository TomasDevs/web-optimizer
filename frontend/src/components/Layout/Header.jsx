import { Link } from "react-router-dom";
import Logo from "../UI/Logo";
import Menu from "../Navigation/Menu";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <Logo />
        <strong className="header__text">
          <strong className="header__text--strong">Web</strong> Optimizer
        </strong>
      </Link>
      <Menu />
    </header>
  );
};

export default Header;
