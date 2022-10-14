import React from "react";
import styles from './AttributesBar.module.css'

const SwatchBar = (props) => {
  console.log(props.attr);
  return (
    <div className={styles.wrap}>
      <p>{props.attr.name}: </p>
      <div className={styles.colorsDiv}>
          {props.attr.items.map((el) => {
            return (
              <input
                key={el.id}
                type="button"
                className={styles.color}
                name={el.name}
                style={{ backgroundColor: el.value }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SwatchBar;
