import React from "react";
import formatCurrency from "../../utilities/formatCurrency";
import styles from "./ProductTitle.module.css";

const ProductTitle = ({ brand, name, price }) => {
  return (
    <div className={styles.wrap}>
      <p className={styles.productBrand}>{brand}</p>
      <p className={styles.productName}>{name}</p>
      <p className={styles.productPrice}>{formatCurrency(price)}</p>
    </div>
  );
};

export default ProductTitle;
