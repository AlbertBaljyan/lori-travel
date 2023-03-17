import React, { lazy } from "react";
import Logo from "./Logo/Logo";
import TopHeader from "../TopHeader/TopHeader";
import "./Header.scss";
const NavbarList = lazy(() => import("./NavbarList/NavbarList"));
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <TopHeader />
          <div className="sub__header">
            <Logo />
            <NavbarList burger={true} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
