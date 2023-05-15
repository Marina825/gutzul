import React from "react";
class Card extends React.Component {
  render() {
    const { image, name,nameTranslation, star, price, button } = this.props;
    return (
      <div className="card">
       <div>{image}</div>
        <div className="description-card">
        <div className="card-header">
          <div className="product-name-card">
        <p className="product-name">{name}</p>
        <p className="product-name product-nameTranslation">{nameTranslation}</p>
        </div>
        <div>{star}</div>
        </div>
        <div className="bottom-card">
        <p className="card-price">{price} грн</p>
        <div>{button}</div>
        </div>
        </div>
      </div>
    );
  }
}


export default Card;