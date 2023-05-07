import React, { Component } from "react";
import ModalProductDescription from "./ModalProductDescription";
import arrows from "../img/arrows.png";
import imageBurley from "../img/img-burley.jpg";
import imageOriental from "../img/img-oriental.jpg";
// import op from "../img/op.png"
class Main extends Component {
  state = {
    firstModalOpen: false,
    secondModalOpen: false,
  };

  toggleFirstModal = () => {
    this.setState({
      firstModalOpen: !this.state.firstModalOpen,
      secondModalOpen: false,
    });
  };

  toggleSecondModal = () => {
    this.setState({
      secondModalOpen: !this.state.secondModalOpen,
      firstModalOpen: false,
    });
  };

  render() {
    return (
      <div className="main">
        <div className="main-header">100% Крафтовий</div>
        <div className="main-header">тютюн</div>
        <a name="buy-product"></a>
        <div className="product-main">
          <div className="berli-block">
            <img src={imageBurley} alt="#" className="image-product"></img>
            <div className="content-block">
              <h3 className="head-product-block">Burley</h3>
              <div className="text-product-block">
                Цей тютюн відрізняється особливим, насиченим горіховим смаком.
                Колір тютюну – коричневий, з матовим відтінком. Має середню
                міцність
              </div>
              <button
                onClick={this.toggleFirstModal}
                className="button-main-description-burley"
              >
                <img src={arrows} alt="#" className="arrow-content-block"></img>
              </button>
            </div>
          </div>
          {this.state.firstModalOpen && (
            <div>
              <ModalProductDescription
                header="BURLEY"
                closeButton={true}
                text="Тютюн Берлі - один з найбільш популярних сортів тютюну, який використовується в курильних сумішах. Висота рослини близько 150 см. Цей тютюн відрізняється особливим, насиченим горіховим смаком. Колір тютюну – коричневий, з матовим відтінком. Вміст нікотину в цьому тютюні коливається від 1,5 до 4 відсотків, а ось цукру в тютюні цього сорту практично немає.
                Витримка в соусі з українського меду, з натуральних спецій та прянощів"
                onClose={this.toggleFirstModal}
              />
            </div>
          )}
          {this.state.secondModalOpen && (
            <ModalProductDescription
              header ="ORIENTAL"
              closeButton={true}
              text="Тютюн сорту Орієнтал відрізняється невеликим розміром листя, що робить його збирання доволі трудомістким. Має особливий аромат, що посилюється в процесі просушування на сонці.
              Має високу міцність. 
              Для виготовлення тютюнових сумішей використовуємо верхній ярус куща, тобто кращє з кращого і тільки так. Витримка в соусі з українського меду, та додаванням натуральних спецій та прянощів. Для поціновувачів міцних тютюнів."
              onClose={this.toggleSecondModal}
            />
          )}
          <div className="oriental-block ">
            <img src={imageOriental} alt="#" className="image-product"></img>
            <div className="content-block">
              <h3 className="head-product-block head-product-block-oriental">
                Oriental
              </h3>
              <div className="text-product-block text-product-block-oriental">
                Відрізняється невеликим розміром листя, що робить його збирання
                доволі трудомістким. Має особливий аромат, що посилюється в
                процесі просушування на сонці. Має високу міцність
              </div>
              <button
                onClick={this.toggleSecondModal}
                className="button-main-description-oriental"
              >
                <img src={arrows} alt="#" className="arrow-content-block"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
