import React from "react";
import ProductColorCapacity from "./DetailedProduct/ProductColor&Capacity";
import styles from "./ProductInformation.module.css";
import ProductSize from "./DetailedProduct/ProductSize";
import ProductTouchID from "./DetailedProduct/ProductTouchID";
const ProductInformation = (props) => {
  const attributes = props.attributes.map((el, i) => {
    const sizes = el.items;
    const name = el.name;
    return {
      name,
      sizes,
    };
  });

  let render = attributes.map(
    (attr) =>
      attr.name === "Size" && <ProductSize key={Math.random()} attr={attr} />
  );
  let render1 = attributes.map((attr) => {
    return (
      (attr.name === "Capacity" || attr.name === "Color") && (
        <ProductColorCapacity key={attr.name} attr={attr} />
      )
    );
  });

  let render3 = attributes.map((attr) => {
    return (
      (attr.name === "With USB 3 ports" ||
        attr.name === "Touch ID in keyboard") && (
        <ProductTouchID key={attr.name} attr={attr} />
      )
    );
  });



  return (
    <div>
      <div className={styles.brandName}>
        <h3>{props.brand}</h3>
        <h4>{props.name}</h4>
      </div>
     {render}
     {render1}
     {render3}
    </div>
  );
};

export default ProductInformation;
