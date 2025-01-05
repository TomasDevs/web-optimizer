import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container flex">
        <Logo />
        <strong className="logo-text">
          <strong>Web</strong> Optimizer
        </strong>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
