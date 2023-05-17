import React from "react";
import { Link } from "react-router-dom";
import imgHeader from "../img/img-tobacco-header.jpg";
import imgGutzul from "../img/logo-gutzul.png";
import HeaderNavList from "./HeaderNavList";
const Header = () => {

  return (
    <div className="header">
      <HeaderNavList/>
      <div className="header-main">
        <img src={imgGutzul} alt="#" className="image-header-gutzul"></img>
        <div className="link-header">
          <button className="button-head"><Link to="/partners#top" className="href-header-partners">Для партнерів</Link></button>
        </div>
        <div className="flex-text-heder">
          <img src={imgHeader} alt="tobacco" className="img-tobacco"></img>
          <div className="text-header">
            Крафтовий продукт зі справжнім украЇнським характером, унікальними
            смаками та власною технологіею виробництва
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
