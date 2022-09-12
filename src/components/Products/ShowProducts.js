import React from "react";
import styles from "./ShowProducts.module.css";
import { Link } from "react-router-dom";
import OutOfStock from "../UI/OutOfStockCard/OutOfStock";
import Product from "./Product";

const ShowProducts = (props) => {
  const product = props.product;
  const inStock = product.inStock
  console.log(product.inStock);

  return (
    // <Link to={`/detail/${product.id}`} className={styles.container}>
    //   <img
    //     className={styles.productImage}
    //     alt="Product Picture"
    //     src={product?.gallery[0]}
    //   />
    //   <div className={styles.shade}></div>
    //   <p>{product?.name}</p>
    //   <p>${product?.prices[0].amount}</p>
    // </Link>
    <Product product={product} />
  );
};

export default ShowProducts;
