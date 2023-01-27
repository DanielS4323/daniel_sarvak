import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/CartSlice";
import formatCurrency from "../../utilities/formatCurrency";
import ProductImages from "../Product/ProductImages";
import styles from "./CartItem.module.css";
import carouselCartStyle from "./CarouselCart.module.css";

const CartItem = ({ brand, name, price, image, quantity, id }) => {
  const dispatch = useDispatch();

  const removeFromCartHanlder = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <div className={styles.wrap}>
      <li className={styles.listItem}>
        <p>{brand}</p>
        <p>{name}</p>
        <p>
          {formatCurrency(price)}
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
