import { useState, useRef, useEffect } from "react";
import MenuLink from "./MenuLink";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { href: "/o-aplikaci", label: "O aplikaci" },
    { href: "/nastroje", label: "Nástroje" },
    { href: "/optimalizace", label: "Optimalizace" },
    { href: "/core-web-vitals", label: "Core Web Vitals" },
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

      <nav className={`menu ${isOpen ? "menu--open" : ""}`} ref={menuRef}>
        <ul className="menu__list">
          {menuItems.map((item, index) => (
            <li className="menu__item" key={index}>
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
          <strong class="menu__footer--text">
            <strong class="menu__footer--strong">Web</strong> Optimizer
          </strong>
        </div>
      </nav>
    </>
  );
};

export default Menu;
