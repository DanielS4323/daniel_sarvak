import React from "react";
import styles from "./OutOfStock.module.css";
const OutOfStock = ({ children }) => {
  return <div className={styles.frame}>{children}</div>;
};

export default OutOfStock;
