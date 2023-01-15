import React from "react";
import Product from "./Product";

const ShowProducts = ({ product, id }) => {
  return <Product id={id} product={product} />;
};

export default ShowProducts;
