import React from "react";
import { useSelector } from "react-redux";
import formatCurrency from "../../utilities/formatCurrency";
import CartItem from "./CartItem";
import styles from "./CartItems.module.css";

const CartItems = () => {
  const { myCart, totalPrice } = useSelector((state) => state.cart);

  const items = myCart.map((item) => <CartItem key={item.id} {...item} />);

  return (
    <React.Fragment>
      <ul className={styles.list}>{items}</ul>
      {totalPrice > 0 && (
        <p className={styles.totalPrice}>Total: {formatCurrency(totalPrice)}</p>
      )}
    </React.Fragment>
  );
};

export default CartItems;
