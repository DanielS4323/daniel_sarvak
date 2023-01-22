import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DetailProduct from "./components/Product/DetailedProduct/DetailProduct";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/product/all" />} />
        <Route path="/product">
          <Route path=":categories" element={<ProductPage />} />
          <Route path=":categories/:id" element={<DetailProduct />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
