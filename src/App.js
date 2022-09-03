import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import GetGraph from "./components/GetGraph";
import NavBar from "./components/UI/NavBar";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to='/product/all'/>}/>
        {/* <Route path="/product/all" element={<CategoryPage />} /> */}
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
