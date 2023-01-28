import React, { useState } from "react";
import styles from "./ShowProducts.module.css";
import { Link } from "react-router-dom";
import formatCurrency from "../../utilities/formatCurrency";
import HoveringCartButton from "../UI/HoverCartButton/HoveringCartButton";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/CartSlice";
import formatAttributes from "../../utilities/formatAttributes";
import findCurrency from "../../utilities/findCurrency";

const Product = ({ product, id }) => {
  const [displayBtn, setDisplayBtn] = useState("hide");
  const dispatch = useDispatch();
  const selectedCurrency = useSelector((state) => state.cart.currency);
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
    const attributes = formatAttributes(product.attributes);
    dispatch(
      cartActions.addToCart({
        ...product,
        image: product.gallery,
        chosenAttributes: attributes,
      })
    );
    // console.log(product);
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
          <p>
            {formatCurrency(
              findCurrency(product.prices, selectedCurrency),
              selectedCurrency
            )}
          </p>
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
