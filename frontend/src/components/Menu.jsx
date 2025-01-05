import MenuLink from "./MenuLink";

const Menu = () => {
  const menuItems = [
    { href: "/minifikace-kodu", label: "Minifikace kódu" },
    { href: "/optimalizace-obrazku", label: "Optimalizace obrázků" },
    { href: "/testovani-api", label: "Testování API" },
  ];

  return (
    <nav className="menu">
      <ul className="menu__list">
        {menuItems.map((item, index) => (
          <li className="menu__item" key={index}>
            <MenuLink href={item.href}>{item.label}</MenuLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
