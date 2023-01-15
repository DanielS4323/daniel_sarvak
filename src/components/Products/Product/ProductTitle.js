import React from "react";
import formatCurrency from "../../../utilities/formatCurrency";
import styles from "./ProductTitle.module.css";

const ProductTitle = ({ brand, name, price }) => {
  return (
    <div className={styles.title}>
      <h3>{brand}</h3>
      <h4>{name}</h4>
      <h4>{formatCurrency(price)}</h4>
    </div>
  );
};

export default ProductTitle;
