import React, { useState } from "react";
import styles from "./ShowProducts.module.css";
import { Link } from "react-router-dom";
import formatCurrency from "../../utilities/formatCurrency";
import HoveringCartButton from "../UI/HoverCartButton/HoveringCartButton";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/CartSlice";

const Product = ({ product, id }) => {
  const [displayBtn, setDisplayBtn] = useState("hide");
  const dispatch = useDispatch();
  const OutOfStock = !product.inStock ? (
    <p className={styles.inStock}>Out of Stock</p>
  ) : (
    ""
  );
  const showButton = (e) => {
    e.preventDefault();
    setDisplayBtn("display");
  };
  const hideButton = (e) => {
    e.preventDefault();
    setDisplayBtn("hide");
  };
  const cartButtonHandler = (e) => {
    e.preventDefault();
    dispatch(
      cartActions.addToCart({ ...product, price: product.prices[0].amount,image: product.gallery })
    );
    console.log(product);
  };

  return (
    <React.Fragment>
      <Link
        onMouseEnter={(e) => showButton(e)}
        onMouseLeave={(e) => hideButton(e)}
        to={`/product/${id}/${product.id}`}
        className={styles.container}
      >
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
        {product.inStock && (
          <HoveringCartButton
            onClick={cartButtonHandler}
            className={displayBtn}
          />
        )}
      </Link>
    </React.Fragment>
  );
};

export default Product;
