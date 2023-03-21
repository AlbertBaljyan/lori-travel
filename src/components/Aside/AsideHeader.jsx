import React from "react";
import Auth from "../Header/Auth/Auth";
import ChangeLanguage from "../Header/ChangeLanguage/ChangeLanguage";
import './AsideHeader.scss'

const AsideHeader = () => {
  return (
    <div className="aside__header">
      <Auth />
      <ChangeLanguage />
    </div>
  );
};

export default AsideHeader;
