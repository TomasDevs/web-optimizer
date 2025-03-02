const MenuToggle = ({ isOpen, onClick }) => (
  <button
    className={`menu__toggle ${isOpen ? "menu__toggle--open" : ""}`}
    onClick={onClick}
    aria-label="Toggle menu"
    aria-expanded={isOpen}>
    <span className="menu__bar"></span>
    <span className="menu__bar"></span>
    <span className="menu__bar"></span>
  </button>
);

export default MenuToggle;
