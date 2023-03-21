import React, { lazy } from "react";
import Logo from "./Logo/Logo";
import "./Header.scss";
import AsideHeader from "../Aside/AsideHeader";
const NavbarList = lazy(() => import("./NavbarList/NavbarList"));
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <NavbarList burger={true} />
          <AsideHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
