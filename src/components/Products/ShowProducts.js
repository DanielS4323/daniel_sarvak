import React from "react";
import Product from "./Product";

const ShowProducts = (props) => {
  const product = props.product;

  return <Product product={product} />;
};

export default ShowProducts;
