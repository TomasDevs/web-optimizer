import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MenuLink from "./MenuLink";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const menuItems = [
    { href: "/o-aplikaci", label: "O aplikaci" },
    { href: "/optimalizace", label: "Optimalizace" },
    { href: "/core-web-vitals", label: "Core Web Vitals" },
    { href: "/testovani", label: "Testování" },
    { href: "/vysledky", label: "Výsledky" },
    { href: "/faq", label: "FAQ" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".menu__toggle")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <button
        className={`menu__toggle ${isOpen ? "menu__toggle--open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu">
        <span className="menu__bar"></span>
        <span className="menu__bar"></span>
        <span className="menu__bar"></span>
      </button>

      {isOpen && (
        <div className="menu__overlay" onClick={() => setIsOpen(false)}></div>
      )}

      <nav className={`menu ${isOpen ? "menu--open" : ""}`} ref={menuRef}>
        <ul className="menu__list">
          {menuItems.map((item, index) => (
            <li
              className={`menu__item ${
                location.pathname.startsWith(item.href)
                  ? "menu__item--active"
                  : ""
              }`}
              key={index}>
              <MenuLink href={item.href} onClick={handleLinkClick}>
                {item.label}
              </MenuLink>
            </li>
          ))}
        </ul>
        <div className="menu__footer">
          <img
            src="/assets/logo-white.svg"
            alt="Logo"
            width={30}
            height={34}
            className="menu__logo"
          />
          <strong className="menu__footer--text">
            <strong className="menu__footer--strong">Web</strong> Optimizer
          </strong>
        </div>
      </nav>
    </>
  );
};

export default Menu;
