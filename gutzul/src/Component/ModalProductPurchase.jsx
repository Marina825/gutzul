import React from "react";

class ModalProductPurchase extends React.Component {
  render() {
    const { header, text, onClick } = this.props;
    return (
      <div className="modal-overlay" onClick={onClick}>
        <div className="modal modalProductPurchase">
          <div className="modal__content-header headermodalProductPurchase">
            <h2 className="header-modalProductPurchase">{header}</h2>
            <button className="button-modal" onClick={onClick}>
              X
            </button>
          </div>
          <div className="modal__content-main content-main-ProductPurchase">
            <p className=" modal__content-main-text main-text-modalProductPurchase"> {text}</p>
            <div className="modal-btn-flex btn-flex-ProductPurchase">
            <button className="button-modal" onClick={onClick}>
              Додати до кошика
            </button>
          </div>
          </div>
         
        </div>
      </div>
    );
  }
}

export default ModalProductPurchase;
