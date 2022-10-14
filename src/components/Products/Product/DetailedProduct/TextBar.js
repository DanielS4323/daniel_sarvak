import React from "react";
import styles from './AttributesBar.module.css'

const TextBar = (props) => {
  console.log(props.attr);
  return (
    <div key={props.attr.name}>
      <p>{props.attr.name}: </p>
      <div className={styles.colorsDiv}>
        {props.attr.items.map((el) => {
          return (
            <input
              key={el.id}
              type="button"
              className={styles.text}
              value={el.value}
              name={el.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TextBar;
