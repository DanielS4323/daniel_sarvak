import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import DetailProduct from "./components/Products/Product/DetailedProduct/DetailProduct";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/product/all" />} />
        <Route path="/product/:categories" element={<ProductPage />} />
        <Route path="product/:categories/:id" element={<DetailProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
