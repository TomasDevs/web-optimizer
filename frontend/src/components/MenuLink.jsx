const MenuLink = ({ href, children }) => {
  return (
    <a href={href} className="menu__link">
      {children}
    </a>
  );
};

export default MenuLink;
