import React from "react";
import { useSelector } from "react-redux";
import formatCurrency from "../../utilities/formatCurrency";
import CartItem from "./CartItem";
import styles from "./CartItems.module.css";
import getTotalAmountCart from "../../utilities/getTotalAmountCart";

const CartItems = () => {
  const { myCart, currency } = useSelector((state) => state.cart);

  const items = myCart.map((item) => <CartItem key={item.id} {...item} />);

  // console.log(items[0]);

  // console.log(12,findCurrency(items.prices, currency))

  return (
    <React.Fragment>
      <ul className={styles.list}>{items}</ul>
      {myCart.length > 0 && (
        <p className={styles.totalPrice}>
          Total:{" "}
          {formatCurrency(getTotalAmountCart(myCart, currency), currency)}
        </p>
      )}
    </React.Fragment>
  );
};

export default CartItems;
