import React from "react";
import HeaderNavList from "./HeaderNavList";
import "../style/styleForPartners.scss";
import iconInsagram from "../img/icon-intagram.png";
export const ForPartners = () => (
  <div className="head-forPartners">
    <HeaderNavList />
    <div className="content-forPartners">
      <div className="header-aboutUs">Для партнерів</div>
      <div className="text-content-forPartners">
        <ul>
          <li className="text-content-forPartners">
            Мінімальний опт замовлення, від 1кг, в асортименті.
          </li>
          <li className="text-content-forPartners">
            Оптова ціна складає для лінійки берлі - 170грн. 250грн.
          </li>
          <li className="text-content-forPartners">
            {" "}
            Оптова ціна складає для лінійки орієнтал - 400грн. 500грн
          </li>
          <li className="text-content-forPartners">
            Інстаграм акаунти наших існуючих партнерів:
          </li>
          <div className="instagram-partners">
            {" "}
            <img src={iconInsagram}></img>{" "}
            <li>
              <a
                href="https://www.instagram.com/mollaua/"
                className="list-partners"
              >
                mollaua
              </a>
            </li>
          </div>
          <div className="instagram-partners">
            {" "}
            <img src={iconInsagram}></img>{" "}
            <li>
              <a
                href="https://www.instagram.com/tabak.kh/"
                className="list-partners"
              >
                {" "}
                tabak.kh
              </a>
            </li>
          </div>
          <div className="instagram-partners">
            {" "}
            <img src={iconInsagram}></img>{" "}
            <li>
              <a
                href="https://www.instagram.com/duman.com.ua/"
                className="list-partners"
              >
                duman.com.ua
              </a>
            </li>
          </div>
          <div className="instagram-partners">
            {" "}
            <img src={iconInsagram}></img>{" "}
            <li>
              <a
                href="https://www.instagram.com/haze_time_ua/"
                className="list-partners"
              >
                haze_time_ua
              </a>
            </li>
          </div>
          <div className="instagram-partners">
            {" "}
            <img src={iconInsagram}></img>{" "}
            <li>
              <a
                href="https://www.instagram.com/7_sky_hookah/"
                className="list-partners"
              >
                7_sky_hookah
              </a>
            </li>
          </div>
          <div className="instagram-partners">
            {" "}
            <img src={iconInsagram}></img>{" "}
            <li>
              <a
                href="https://www.instagram.com/_smoke_house_drahovo/"
                className="list-partners"
              >
                _smoke_house_drahovo
              </a>
            </li>
          </div>
          <div className="instagram-partners">
            {" "}
            <img src={iconInsagram}></img>{" "}
            <li>
              <a
                href="https://www.instagram.com/hookah.nb/"
                className="list-partners"
              >
                hookah.nb
              </a>
            </li>
          </div>
          <div className="instagram-partners">
            {" "}
            <img src={iconInsagram}></img>{" "}
            <li>
              <a
                href="https://www.instagram.com/vantablack_ua/"
                className="list-partners"
              >
                vantablack_ua
              </a>
            </li>
          </div>
          <div className="instagram-partners">
            {" "}
            <img src={iconInsagram}></img>{" "}
            <li>
              <a
                href="https://www.instagram.com/darkspace_sumy/"
                className="list-partners"
              >
                darkspace_sumy
              </a>
            </li>
          </div>
          <div className="instagram-partners">
            {" "}
            <img src={iconInsagram}></img>{" "}
            <li>
              <a href="#" className="list-partners">
                daly_ua
              </a>
            </li>
          </div>
          <div className="instagram-partners">
            {" "}
            <img src={iconInsagram}></img>{" "}
            <li>
              <a
                href="https://www.instagram.com/shishka_shop_zp/"
                className="list-partners"
              >
                shishka_shop_zp
              </a>
            </li>
          </div>
          <div className="instagram-partners">
            {" "}
            <img src={iconInsagram}></img>{" "}
            <li>
              <a
                href="https://www.instagram.com/fimin_dum/"
                className="list-partners"
              >
                fimin_dum
              </a>
            </li>
          </div>
          <div className="instagram-partners">
            {" "}
            <img src={iconInsagram}></img>{" "}
            <li>
              <a
                href="https://www.instagram.com/wetsmoke_plt/"
                className="list-partners"
              >
                wetsmoke_plt
              </a>
            </li>
          </div>
          <div className="instagram-partners">
            {" "}
            <img src={iconInsagram}></img>{" "}
            <li>
              <a
                href="https://www.instagram.com/vdykhay_chill/"
                className="list-partners"
              >
                vdykhay_chill
              </a>
            </li>
          </div>
          <div className="instagram-partners">
            {" "}
            <img src={iconInsagram}></img>{" "}
            <li>
              <a
                href="https://www.instagram.com/toomanhookah_nik/"
                className="list-partners"
              >
                toomanhookah_nik
              </a>
            </li>
          </div>
          <div className="instagram-partners">
            {" "}
            <img src={iconInsagram}></img>{" "}
            <li>
              <a
                href="https://www.instagram.com/garmata_shisha_club/"
                className="list-partners"
              >
                garmata_shisha_club
              </a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </div>
);
