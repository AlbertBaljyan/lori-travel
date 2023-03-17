import React from "react";
import Auth from "../Header/Auth/Auth";
import ChangeLanguage from "../Header/ChangeLanguage/ChangeLanguage";
import './TopHeader.scss'

const TopHeader = () => {
  return (
    <div className="top__header">
      <Auth />
      <ChangeLanguage />
    </div>
  );
};

export default TopHeader;
