import * as React from "react";
import { Link } from "gatsby";
import * as headerStyles from "./header.module.css";

const Header = ({ children, size = "medium" }) => {
  let header = <Link to="/">{children}</Link>;

  if (size === "large") {
    const largeHeader = <h1 className="main-heading">{header}</h1>;
    header = largeHeader;
  }

  return <header className={headerStyles.header}>{header}</header>;
};

export default Header;
