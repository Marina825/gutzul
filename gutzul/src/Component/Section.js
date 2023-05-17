import React, { Component } from "react";
import imgSection from "../img/tobacco.jpg";
import iconBusiness from "../img/icon-business.png";
import iconHookah from "../img/icon-hookah.png";
import iconLeaves from "../img/icon-leaves.png";
import { Link } from "react-router-dom";
class Section extends Component {
  render() {
    return (
      <div className="section">
        <div className="main-header section-header">Як ми з'явились?</div>
        <div className="section-main">
          <div className="section-img">
            <div className="rectangles"></div>
            <img src={imgSection} alt="#" className="img-section"></img>
          </div>
          <div className="section-main-left">
            <div className="text-section">
              <div className="text-section-left">
                Гуцули - горний народ в українських Карпатах. Вони полюбляють
                коптити овочі та рибу, м'ясо, сири.
              </div>{" "}
              <br></br>
              <div className="text-section-left">
                Подорожуючи Україною ми познайомились з цими людьми та прожили
                разом із ними декілька тижнів. Виявилося, що в їх коренях є
                тютюнопаління. Істинне. Люлькове. Автентичне.
              </div>
              <br></br>
              <div className="text-section-left">
                Через деякий час, поспілкувавшись, було прийнято рішення
                спробувати готувати тютюновий лист так, як вони готують свій
                фірмовий копчений сир Будз. Ця технологія дуже близька до
                приготування Латакії і Кавендіша. Це люлькові сорти тютюну
                (технологія) при якій лист піддається вогняній сушці.
              </div>
              <br></br>
              <div className="text-section-left">
                Саме так з'явився перший смак "Smoked Plum" та народився бренд
                Gutzul tobacco.
              </div>
            </div>
            <button className="button-header"> Дізнатися більше</button>
          </div>
        </div>

        <div className="section-left-mobile">
          <div className="imageInRectangle-mobile">
            <div className="rectangles"></div>
            <img src={imgSection} alt="#" className="image-section"></img>
          </div>
          <div className="section-main-left">
            <div className="text-section">
              <div className="text-section-left">
                Гуцули - горний народ в українських Карпатах. Вони полюбляють
                коптити овочі та рибу, м'ясо, сири.
              </div>{" "}
              <br></br>
              <div className="text-section-left">
                Подорожуючи Україною ми познайомились з цими людьми та прожили
                разом із ними декілька тижнів. Виявилося, що в їх коренях є
                тютюнопаління. Істинне. Люлькове. Автентичне.
              </div>
              <br></br>
              <div className="text-section-left">
                Через деякий час, поспілкувавшись, було прийнято рішення
                спробувати готувати тютюновий лист так, як вони готують свій
                фірмовий копчений сир Будз. Ця технологія дуже близька до
                приготування Латакії і Кавендіша. Це люлькові сорти тютюну
                (технологія) при якій лист піддається вогняній сушці.
              </div>
              <br></br>
              <div className="text-section-left">
                Саме так з'явився перший смак "Smoked Plum" та народився бренд
                Gutzul tobacco.
              </div>
            </div>
            <button className="button-header">
              {" "}
              <Link to="/aboutUs#top" className="href-header-buy-product">
                Дізнатися більше{" "}
              </Link>{" "}
            </button>
          </div>
        </div>

        <div className="section-footer">
          <div className="block-section-footer">
            <div className="flex-img-section-footer">
              <div className="rectangle"></div>
              <img
                src={iconBusiness}
                alt="icon-business"
                className="img-block-section-footer img-block-section-footer-resize"
              ></img>
            </div>
            <h3 className="header-block-section-footer">1</h3>
            <div className="text-block-section-footer">
              рік ми працюємо над крафтовим продуктом
            </div>
          </div>

          <div className="block-section-footer">
            <div className="flex-img-section-footer">
              <div className="rectangle"></div>
              <img
                src={iconLeaves}
                alt="icon-hookah"
                className="img-block-section-footer"
              ></img>
            </div>
            <h3 className="header-block-section-footer">500кг</h3>
            <div className="text-block-section-footer">
              тютюну ми зробили за весь час нашого виробництва
            </div>
          </div>

          <div className="block-section-footer">
            <div className="flex-img-section-footer">
              <div className="rectangle"></div>
              <img
                src={iconHookah}
                alt="icon-leaves"
                className="img-block-section-footer img-block-section-footer-resize"
              ></img>
            </div>
            <h3 className="header-block-section-footer">5000</h3>
            <div className="text-block-section-footer">
              пачок тютюну ми продали за весь час нашої праці
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
