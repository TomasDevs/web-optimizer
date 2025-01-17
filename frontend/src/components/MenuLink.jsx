import { Link } from "react-router-dom";

const MenuLink = ({ href, children, onClick }) => {
  return (
    <Link to={href} className="menu__link" onClick={onClick}>
      {children}
    </Link>
  );
};

export default MenuLink;
