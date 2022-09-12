import React from "react";
import styles from "../ProductInformation.module.css";

const ProductTouchID = (props) => {
  const attr = props.attr;
  return (
    <div key={attr.name} className={styles.wrap}>
      <p>{attr.name}: </p>
      <div className={styles.colorsDiv}>
        {attr.sizes.map((el) => {
          return (
            <div
              key={el.id}
              className={styles.sizeInfo}
              style={{ backgroundColor: el.value }}
              aria-label={el.id}
            >
              {el.displayValue}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductTouchID;
