import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appendix from "./Component/Appendix";
import { AboutUs } from "./Component/AboutUs";
import ProductPage from "./Component/ProductPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/gutzul" element={<Appendix />} />
        <Route index element={<Appendix />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="products" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
