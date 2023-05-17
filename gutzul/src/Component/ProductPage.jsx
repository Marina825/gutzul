import React, { useState } from "react";
import { productsBurley } from "../productBurley";
import Card from "./Card";
import Star from "./Star";
import Button from "./Button";
import { productsOriental } from "../productOriental";
import { arrayProductBurley } from "../arrayProductBurley";
import { arrayProductOriental } from "../arrayProductOriental";
import ModalProductPurchase from "./ModalProductPurchase";
import HeaderNavList from "./HeaderNavList";
import FooterProductPage from "./FooterProductPage";
import "../style/stylePageProduct.scss";
import "../style/styleFooter.scss";
const ProductPage = () => {
  const [toggleStateModalBurley, setToggleStateModalBurley] = useState(false);
  const [toggleStateModalOriental, setToggleStateModalOriental] =
    useState(false);
  const [selectedProductBurley, setSelectedProductBurley] = useState(null);
  const [selectedProductOriental, setSelectedProductOriental] = useState(null);

  const handleBuyClickBurley = (product) => {
    setSelectedProductBurley(product);
    setToggleStateModalBurley(true);
  };
  const handleBuyClickOriental = (product) => {
    setSelectedProductOriental(product);
    setToggleStateModalOriental(true);
  };
  const closeModal = () => {
    setToggleStateModalBurley(false);
    setToggleStateModalOriental(false);
  };

  const selectedTextBurley = selectedProductBurley
    ? arrayProductBurley.find((t) => t.id === selectedProductBurley.id)?.text ||
      ""
    : "";

  const selectedTextOriental = selectedProductOriental
    ? arrayProductOriental.find((t) => t.id === selectedProductOriental.id)
        ?.text || ""
    : "";

  return (
    <div className="product-page">
      <HeaderNavList />
      <div className="product-section-name">Burley</div>
      <div id="top"></div>
      <div className="cards-content">
        <div className="cards">
          {toggleStateModalBurley && (
            <ModalProductPurchase
              header={selectedProductBurley.name}
              text={selectedTextBurley}
              onClick={closeModal}
            />
          )}
          {productsBurley.map((product, index) => (
            <div key={product.id}>
              <Card
                image={
                  <img
                    src={product.image}
                    className="img-cards"
                    alt="img"
                  ></img>
                }
                name={product.name}
                nameTranslation={product.nameTranslation}
                star={<Star id={product.id} />}
                price={product.price}
                button={
                  <Button
                    className="button-card"
                    onClick={() => handleBuyClickBurley(product)}
                    text="Buy"
                  />
                }
              >
                {" "}
              </Card>
              {index === productsBurley.length - 1 && (
                <style>{`.cards > div:last-child { height:2px;visibility: hidden}`}</style>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="product-section-name">Oriental</div>
      <div className="cards-content cards-content-oriental">
        <div className="cards cards-Oriental">
          {toggleStateModalOriental && (
            <ModalProductPurchase
              header={selectedProductOriental.name}
              text={selectedTextOriental}
              onClick={closeModal}
            />
          )}
          {productsOriental.map((product, index) => (
            <div key={product.id}>
              <Card
                image={
                  <img
                    src={product.image}
                    className="img-cards"
                    alt="img"
                  ></img>
                }
                name={product.name}
                nameTranslation={product.nameTranslation}
                star={<Star id={product.id} />}
                price={product.price}
                button={
                  <Button
                    className="button-card"
                    onClick={() => handleBuyClickOriental(product)}
                    text="Buy"
                  />
                }
              ></Card>
              {(index === productsOriental.length - 1 ||
                index === productsOriental.length - 2) && (
                <style>{`.cards-Oriental > div:nth-last-child(-n+3) {height:2px;visibility: hidden}`}</style>
              )}
            </div>
          ))}
        </div>
      </div>
      <FooterProductPage />
    </div>
  );
};
export default ProductPage;
