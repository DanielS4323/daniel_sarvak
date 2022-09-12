import React from "react";
import styles from "./OutOfStock.module.css";
const OutOfStock = (props) => {
  return <div className={styles.frame}>{props.children}</div>;
};

export default OutOfStock;
