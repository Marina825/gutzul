import React from "react";
import { Link } from "react-router-dom";
class ModalProductDescription extends React.Component {
  render() {
    const { header, closeButton, text, onClose } = this.props;
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal">
          <div className="modal__content-header">
            <h3 className="modal-header">{header}</h3>
            {closeButton && (
              <button className="button-modal" onClick={onClose}>
                X
              </button>
            )}
          </div>
          <div className="modal__content-main">
            <p className=" modal__content-main-text">{text}</p>
            <div className="  modal-btn-flex">
              <button className="button-modal">
              <Link to="/products#top" className="href-main-product">
                  
                
                  Перейти до продукції
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalProductDescription;
