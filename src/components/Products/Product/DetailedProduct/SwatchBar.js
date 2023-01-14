import React from "react";
import styles from "./AttributesBar.module.css";

const SwatchBar = ({ attr, setSelectedSwatchBar }) => {
  const onClickHandle = (e) => {
    
    setSelectedSwatchBar({[attr.name]: e.target.value});
    e.target.style.border = '2px solid red'
  };
  
  return (
    <div className={styles.wrap}>
      <p>{attr.name}: </p>
      <div className={styles.colorsDiv}>
        {attr.items.map((el) => {
          return (
            <input
              key={el.id}
              type="button"
              className={styles.color}
              name={el.name}
              style={{ backgroundColor: el.value }}
              value={el.displayValue}
              onClick={onClickHandle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SwatchBar;
