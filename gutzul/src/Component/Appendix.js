import Main from "./Main";
import Section from "./Section";
// import AgeCheckModal from "./AgeCheckModal";
import Footer from "./Footer";
import Header from "./Header";
import "../style/normalize.scss";
import "../style/normalize.scss";
import "../style/styleHeader.scss";
import "../style/styleMain.scss";
import "../style/styleSection.scss";
import "../style/styleFooter.scss";
import "../style/modal.scss";
import "../style/styleCard.scss";
import "../style/styleModalProductPurchase.scss";
function Appendix() {
  return (
    <div>
      <Header />
      {/* <AgeCheckModal /> */}
      <Main />
      <Section />
      <Footer />
    </div>
  );
}

export default Appendix;
