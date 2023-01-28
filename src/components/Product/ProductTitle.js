import React from "react";
import { useSelector } from "react-redux";
import formatCurrency from "../../utilities/formatCurrency";
import findCurrency from "../../utilities/findCurrency";
import styles from "./ProductTitle.module.css";

const ProductTitle = ({ brand, name, prices }) => {
  const selectedCurrency = useSelector((state) => state.cart.currency);

  return (
    <div className={styles.wrap}>
      <p className={styles.productBrand}>{brand}</p>
      <p className={styles.productName}>{name}</p>
      <p className={styles.productPrice}>
        {formatCurrency(
          findCurrency(prices, selectedCurrency),
          selectedCurrency
        )}
      </p>
    </div>
  );
};

export default ProductTitle;
