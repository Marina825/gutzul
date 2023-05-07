
import React, { Component } from "react";
import Header from "./Component/Header";
import Main from "./Component/Main";
import Section from "./Component/Section";
// import Modal from "./Component/AgeCheckModal";
import Footer from "./Component/Footer";
// import Test from "./Component/Dropdown";
import "./style/reset.scss"
import "./style/normalize.scss";
import "./style/styleHeader.scss";
import "./style/styleMain.scss";
import "./style/styleSection.scss";
import "./style/styleFooter.scss";
import "./style/modal.scss";
class App extends Component {
  render() {
    return (
      <div>
        {/* <Modal/> */}
        <Header />
      
        <Main />
        <Section />
        <Footer />
      </div>
    );
  }
}
export default App;
