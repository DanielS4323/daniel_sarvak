import React from "react";
import styles from "./ShowProducts.module.css";
import { Link } from "react-router-dom";
import formatCurrency from "../../utilities/formatCurrency";

const Product = ({ product, id }) => {
  const OutOfStock = !product.inStock ? (
    <p className={styles.inStock}>Out of Stock</p>
  ) : (
    ""
  );

  return (
    <Link to={`/product/${id}/${product.id}`} className={styles.container}>
      <div className={!product.inStock ? styles.shade : ""}>{OutOfStock}</div>
      <img
        className={styles.productImage}
        alt="Product"
        src={product?.gallery[0]}
      />
      <div className={styles.text}>
        <p>{product?.name}</p>
        <p>{formatCurrency(product?.prices[0].amount)}</p>
      </div>
    </Link>
  );
};

export default Product;
