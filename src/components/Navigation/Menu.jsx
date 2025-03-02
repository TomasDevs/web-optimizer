import { useState, useRef, useEffect, useCallback } from "react";
import MenuToggle from "./MenuToggle";
import MenuItems from "./MenuItems";

const Menu = () => {
  // State pro otevření/zavření menu
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Funkce pro zavření menu po kliknutí na odkaz
  const handleLinkClick = () => setIsOpen(false);

  // Funkce pro zavření menu po kliknutí mimo něj
  const handleClickOutside = useCallback((event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !event.target.closest(".menu__toggle")
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    // Přidání posluchače události pro zavření menu
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <>
      <MenuToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

      {isOpen && (
        <div className="menu__overlay" onClick={() => setIsOpen(false)}></div>
      )}

      <nav className={`menu ${isOpen ? "menu--open" : ""}`} ref={menuRef}>
        <MenuItems onClick={handleLinkClick} />
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
