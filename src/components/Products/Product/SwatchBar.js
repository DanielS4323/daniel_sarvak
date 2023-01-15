import React, { useState } from "react";
import styles from "./AttributesBar.module.css";

const SwatchBar = ({ attr, setSelectedSwatchBar }) => {
  const [active, setActive] = useState("Green");
  const onClickHandle = (e) => {
    setSelectedSwatchBar({ [attr.name]: e.target.value });
    setActive(e.target.id);
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
              className={active === el.id ? styles.active : ""}
              name={el.name}
              style={{ backgroundColor: el.value }}
              value={el.displayValue}
              onClick={onClickHandle}
              id={el.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SwatchBar;
