import React, { Component, Fragment } from "react";
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
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
