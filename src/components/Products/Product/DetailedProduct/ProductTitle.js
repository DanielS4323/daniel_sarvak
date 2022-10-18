import React from "react";
import styles from './ProductTitle.module.css'

const ProductTitle = (props) => {
  return (
    <div className={styles.title}>
      <h3>{props.brand}</h3>
      <h4>{props.name}</h4>
      <h4>${props.price}</h4>
    </div>
  );
};

export default ProductTitle;
