import { Link } from "react-router-dom";

const MenuLink = ({ href, children }) => {
  return (
    <Link to={href} className="menu__link">
      {children}
    </Link>
  );
};

export default MenuLink;
