import React from "react";
import { useSelector } from "react-redux";
import formatCurrency from "../../utilities/formatCurrency";
import CartItem from "./CartItem";
import styles from "./CartItems.module.css";

const CartItems = () => {
  const myCart = useSelector((state) => state.cart.myCart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  // const items = myCart.map((item) => <CartItem key={item.id} {...item} />);

  console.log(123, myCart)

  return (
    <>
      {/* <ul className={styles.list}>{items}</ul> */}
      <span className={styles.totalPrice}>
        Total: {formatCurrency(totalPrice)}
      </span>
    </>
  );
};

export default CartItems;
