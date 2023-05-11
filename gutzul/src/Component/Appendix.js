import Main from "./Main";
import Section from "./Section";
// import Modal from "./Component/AgeCheckModal";
import Footer from "./Footer";
import Header from "./Header";
// import ProductPage from "./Component/ProductPage";
// import Arrow from "./Component/Arroy";
import "../style/normalize.scss";
import "../style/normalize.scss";
import "../style/styleHeader.scss";
import "../style/styleMain.scss";
import "../style/styleSection.scss";
import "../style/styleFooter.scss";
import "../style/modal.scss";
import "../style/styleCard.scss";
function Appendix() {
  return (
    <div>
      <Header />
      {/* <Modal /> */}
      <Main />
      <Section />
      <Footer />
      {/* <ProductPage /> */}
      {/* <Arrow/> */}
    </div>
  );
}

export default Appendix;
