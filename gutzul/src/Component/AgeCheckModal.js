import React from "react";

class AgeCheckModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
    };
    this.handleYes = this.handleYes.bind(this);
    this.handleNo = this.handleNo.bind(this);
  }

  handleYes() {
    this.setState({ showModal: false });
  }

  handleNo() {
    window.location.href = "https://www.google.com/";
  }

  render() {
    const { showModal } = this.state;
    if (!showModal) {
      return null;
    }

    return (
      <div className="modal-overlay">
        <div className="modal modal-ageCheck">
          <div className="modal__content-header modal__content-header-ageCheck">
            <h2 className="modal-header modal-header-ageCheck">Увага!</h2>
          </div>
          <div className="modal__content-main modal__content-main-ageCheck">
            <h3 className="modal__content-main-text">
              Згідно з антитютюновим законом, з 1.06.14 зображення тютюнових
              виробів мають демонструватися на вимогу покупця. Вибираючи перший
              пункт, Ви підтверджуєте своє повноліття.
            </h3>
            <div className=" modal-btn-flex">
              <button
                onClick={this.handleYes}
                className="button-card button-card-ageCheck"
              >
                Так,я старше 18 років
              </button>
              <button
                onClick={this.handleNo}
                className="button-card button-card-ageCheck"
              >
                Ні,мені не має 18 років
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AgeCheckModal;
