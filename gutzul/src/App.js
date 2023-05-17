import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Appendix from "./Component/Appendix";
import { AboutUs } from "./Component/AboutUs";
import ProductPage from "./Component/ProductPage";
import { ForPartners } from "./Component/ForPartners";
function App() {
  return (
    <Router>
    <Routes>
        <Route path="/gutzul" element={<Appendix />} />
        <Route index element={<Appendix />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/partners" element={<ForPartners/>}/>
        </Routes>
    </Router>
  );
}

export default App;
