import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/CartSlice";
import formatCurrency from "../../utilities/formatCurrency";
import ProductImages from "../Product/ProductImages";
import styles from "./CartItem.module.css";
import carouselCartStyle from "./CarouselCart.module.css";
import findCurrency from "../../utilities/findCurrency";

const CartItem = ({ brand, name, prices, image, quantity, id }) => {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.cart.currency);
  const removeFromCartHanlder = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  // console.log(12,prices);
  return (
    <div className={styles.wrap}>
      <li className={styles.listItem}>
        <p>{brand}</p>
        <p>{name}</p>
        <p>
          {formatCurrency(
            findCurrency(prices, selectedCurrency),
            selectedCurrency
          )}
          <span> x {quantity}</span>
        </p>
      </li>
      <ProductImages
        showThumbs={false}
        style={carouselCartStyle.carousel}
        images={image}
      />

      <button className={styles.removeBtn} onClick={removeFromCartHanlder}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
