import React, { Component } from "react";
import { useState } from "react";
import imgHeader from "../img/tabak2.jpg";
import hookahLogo from "../img/hookah-logo.png";
import imgGutzul from "../img/img-gutzul.jpg";
import iconCross from "../img/icons-cross.png";
import iconsBasket from "../img/icons-basket.png";
const Header = () => {
  const [isOpenList, setIsOpenList] = useState(false);
  const toggleDropdown = () => setIsOpenList(!isOpenList);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleDropdownMenu = () => setIsOpenMenu(!isOpenMenu);
  return (
    <div className="header">
      {isOpenMenu && (
        <div className="dropdown-header-menu">
          <ul className="dropdown-header-menu-list">
            <div className="flex-button-dropdown-header">
              <button
                className=" button-header-list-li"
                onClick={toggleDropdownMenu}
              >
                {" "}
                <img
                  src={hookahLogo}
                  alt="icon"
                  className="icon-dropdown-header"
                ></img>
              </button>
              <button
                className="button-header-list-li "
                onClick={toggleDropdownMenu}
              >
                <img src={iconCross} alt="#"></img>
              </button>
            </div>
            <div className="flex-link-dropdown-header-menu-list">
              <button
                className="button-header-list-li "
                onClick={toggleDropdownMenu}
              >
                {" "}
                <a href="#" className="link-dropdown-header-menu-list">
                  Головна
                </a>
              </button>
              <a href="#" className="link-dropdown-header-menu-list">
                Про нас
              </a>
              <a href="#" className="link-dropdown-header-menu-list">
                Наша продукція
              </a>
              <a href="#" className="link-dropdown-header-menu-list">
                Контакти
              </a>
            </div>
          </ul>
        </div>
      )}

      <div className="header-list">
        <ul className="flex-header-list">
          <button
            className=" button-header-list-li"
            onClick={toggleDropdownMenu}
          >
            {" "}
            <img src={hookahLogo} alt="icon"></img>
          </button>

          <li className="header-list-li">Головна</li>
          <li className="header-list-li">Про нас</li>
          <div className="dropdown-header">
            <li className="header-list-li">
              {" "}
              <button
                className=" button-header-list-li"
                onClick={toggleDropdown}
              >
                Наша продукція
              </button>
            </li>
            {isOpenList && (
              <div className="drop-down-menu-header-list">
                <div id="triangle"></div>
                <ul className="dropdown-menu-list">
                  <a
                    href="#"
                    className="link-dropdown-menu-list rounded-corners-dropdown-top"
                  >
                    Burley
                  </a>
                  <a
                    href="#"
                    className="link-dropdown-menu-list rounded-corners-dropdown-down"
                  >
                    Oriental
                  </a>
                </ul>
              </div>
            )}
          </div>
          <li className="header-list-li">Контакт</li>

          <a href="#buy-product" className="href-header-buy-product">
            {" "}
            <button className="button-header button-header-desktop ">
              Купити
            </button>
            <button className="button-header-mobile-basket">
              <img src={iconsBasket}></img>
            </button>
          </a>
        </ul>
      </div>

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
