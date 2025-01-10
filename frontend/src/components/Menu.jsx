import MenuLink from "./MenuLink";

const Menu = () => {
  const menuItems = [
    { href: "/o-aplikaci", label: "O aplikaci" },
    { href: "/nastroje", label: "Nástroje" },
    { href: "/vysledky", label: "Výsledky" },
    { href: "/faq", label: "FAQ" },
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
