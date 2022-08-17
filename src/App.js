import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import GetGraph from "./components/GetGraph";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";

export class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<CategoryPage />} />
          {/* <Route path="/products" element={<ProductPage/>}/> */}
        </Routes>
      </Router>
    );
  }
}

export default App;
