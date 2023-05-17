import React from "react";
import { useState } from "react";
import hookahLogo from "../img/hookah-logo.png";
import iconCross from "../img/icons-cross.png";
import iconsBasket from "../img/icons-basket.png";
import { Link } from "react-router-dom";
const HeaderNavList = () => {
  const [isOpenList, setIsOpenList] = useState(false);
  const toggleDropdown = () => setIsOpenList(!isOpenList);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleDropdownMenu = () => setIsOpenMenu(!isOpenMenu);

  return (
    <div>
      {isOpenMenu && (
        <div className="dropdown-header-menu">
          <ul className="dropdown-header-menu-list">
            <div className="flex-button-dropdown-header">
              <button
                className="button-header-list-li"
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
                <Link to="/#bottom" className="link-dropdown-header-menu-list">
                  Головна
                </Link>
              </button>
              <Link to="/aboutUs" className="link-dropdown-header-menu-list">
                Про нас
              </Link>
              <Link to="/products" className="link-dropdown-header-menu-list">
                Наша продукція
              </Link>
              <Link to="/#end" className="link-dropdown-header-menu-list">
                Контакти
              </Link>
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

          <Link to="/" className="header-list-li">
            Головна
          </Link>
          <Link to="/aboutUs" className="header-list-li">
            Про нас
          </Link>

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
                  <Link
                    to="/products#top"
                    className="link-dropdown-menu-list rounded-corners-dropdown-top"
                  >
                    Burley
                  </Link>
                  <Link
                    to="/products"
                    className="link-dropdown-menu-list rounded-corners-dropdown-down"
                  >
                    Oriental
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <Link to="/#end" className="header-list-li">
            Контакти
          </Link>

          <a href="#buy-product" className="href-header-buy-product">
            {" "}
            <button className="button-header button-header-desktop ">
              Купити
            </button>
            <button className="button-header-mobile-basket">
              <Link to="/products">
                {" "}
                <img src={iconsBasket}></img>
              </Link>
            </button>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default HeaderNavList;
