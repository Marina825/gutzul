import React, { Component } from "react";
import iconInstagram from "../img/icons-instagram.png";
import iconsTelegram from "../img/icons-telegram.png";
import imgGutzul from "../img/img-gutzul.jpg";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="footer-description-gutzul">
          
           <img src={imgGutzul} alt="logo-gutzul" className="image-header-gutzul"></img>
          </div>
         
          <div className="contact-gutzul">

          <div className="flex-img-section-footer flex-icons-footer">
            <div className="rectangle rectangle-for-icons-contact"></div>
            <a href="https://www.instagram.com/gutzul_ua/" className="href-contacts"> 
              {" "}
              <img
                src={iconInstagram}
                alt="logo-instagram"
                className="icon-contact-gutzul"
              ></img>
            </a>
            </div>
            <div className="flex-img-section-footer flex-icons-footer">
            <div className="rectangle rectangle-for-icons-contact"></div>
            <a href="https://t.me/gutzul_ua" className="href-contacts">
              {" "}
              <img
                src={iconsTelegram}
                alt="logo-telegram"
                className="icon-contact-gutzul"
              ></img>
            </a>
          </div>
          </div>
        </div>
        <div className="bottom-line-footer"></div>
        <div className="footer-bottom">
          © 2023 - Gutzul. All Rights Reserved.{" "}
        </div>
      </div>
    );
  }
}
export default Footer;
