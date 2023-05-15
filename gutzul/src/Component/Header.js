import React from "react";
import imgHeader from "../img/tabak2.jpg";
import imgGutzul from "../img/img-gutzul.jpg";
import HeaderNavList from "./HeaderNavList";
const Header = () => {

  return (
    <div className="header">
      <HeaderNavList/>
      <div className="header-main">
        <img src={imgGutzul} alt="#" className="image-header-gutzul"></img>
        <div className="link-header">
          <button className="button-head">Для партнерів</button>
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
