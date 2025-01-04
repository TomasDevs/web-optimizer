import Logo from "./Logo";

const Header = () => {
  return (
    <header className="header">
      <span className="logo-container flex">
        <Logo />
        <strong className="logo-text">
          <strong>Web</strong> Optimizer
        </strong>
      </span>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/minifikace-kodu">Minifikace kódu</a>
          </li>
          <li className="nav-item">
            <a href="/optimalizace-obrazku">Optimalizace obrázků</a>
          </li>
          <li className="nav-item">
            <a href="/testovani-api">Testování API</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
