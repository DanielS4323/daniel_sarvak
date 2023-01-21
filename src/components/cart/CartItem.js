import React from "react";
import formatCurrency from "../../utilities/formatCurrency";
import styles from "./CartItem.module.css";

const CartItem = ({ brand, name, price, image }) => {
  return (
    <div className={styles.wrap}>
      <li className={styles.listItem}>
        <p>{brand}</p>
        <p>{name}</p>
        <p>{formatCurrency(price)}</p>
      </li>
      <img className={styles.image} src={image} alt="product" />
    </div>
  );
};

export default CartItem;
