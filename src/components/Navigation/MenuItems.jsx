import { useLocation } from "react-router-dom";
import MenuLink from "./MenuLink";

const menuItems = [
  { href: "/o-aplikaci", label: "O aplikaci" },
  { href: "/optimalizace", label: "Optimalizace" },
  { href: "/core-web-vitals", label: "Core Web Vitals" },
  { href: "/testovani", label: "Testování" },
  { href: "/vysledky", label: "Výsledky" },
  { href: "/faq", label: "FAQ" },
];

const MenuItems = ({ onClick }) => {
  const location = useLocation();

  return (
    <ul className="menu__list">
      {menuItems.map(({ href, label }) => (
        <li
          className={`menu__item ${
            location.pathname.startsWith(href) ? "menu__item--active" : ""
          }`}
          key={href}>
          <MenuLink href={href} onClick={onClick}>
            {label}
          </MenuLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
