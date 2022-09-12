import React from "react";
import styles from "../ProductInformation.module.css";

const ProductSize = (props) => {
  console.log(props.attr);
  return (
    <div key={props.attr.name} className={styles.wrap}>
      <p>{props.attr.name}: </p>
      <div className={styles.colorsDiv}>
        {props.attr.sizes.map((el) => {
          return (
            <div key={el.id}>
              {el.displayValue}
              <input
                type="radio"
                className={styles.sizeInfo}
                style={{ backgroundColor: el.value }}
                value={el.value}
                name={props.attr.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSize;
