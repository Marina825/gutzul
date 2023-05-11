import React from "react";
class Card extends React.Component {
  render() {
    const { image, name, star, price, button } = this.props;
    return (
      <div className="card">
       <div>{image}</div>
        <div className="op">
        <div className="card-header">
        <p className="product-name">{name}</p>
        <div>{star}</div>
        </div>
        <div className="card-header">
        <p className="card-price">{price} грн</p>
        <div>{button}</div>
        </div>
        </div>
      </div>
    );
  }
}


export default Card;