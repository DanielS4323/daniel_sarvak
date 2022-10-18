import React from "react";
import Product from "./Product";

const ShowProducts = (props) => {
  const product = props.product;
  const id = props.id

  return <Product id={id} product={product} />;
};

export default ShowProducts;
