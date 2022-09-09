import React from "react";
import ProductColorCapacity from "./ProductColor&Capacity";
import styles from "./ProductInformation.module.css";
import ProductSize from "./ProductSize";
import ProductTouchID from "./ProductTouchID";
const ProductInformation = (props) => {

  const sizeValue = props.attributes.map((el) => el.items);
  const attributes = props.attributes.map((el, i) => {
    const sizes = el.items;
    const name = el.name;
    return {
      name,
      sizes,
    };
  });

  let show1 = [];
  let render = attributes.map(
    (attr) =>
      attr.name === "Size" && <ProductSize key={Math.random()} attr={attr} />
  );
  let render1 = attributes.map((attr) => {
    return(
    (attr.name === "Capacity" || attr.name === "Color")  && (
        <ProductColorCapacity key={attr.name} attr={attr} />
      ));
  });

  let render3 = attributes.map((attr) => {
    return (
      (attr.name === "With USB 3 ports" ||
      attr.name === "Touch ID in keyboard") && (
        <ProductTouchID key={attr.name} attr={attr}/>
      )
    )
  })

  
  attributes.map((attr) => {
    if (attr.name === "Size") {
      show1.push(
        <div key={attr.name} className={styles.wrap}>
          <p>{attr.name}: </p>
          <div className={styles.colorsDiv}>
            {attr.sizes.map((el) => {
              return (
                <div key={el.id}>
                  {el.displayValue}
                  <input
                    type="radio"
                    className={styles.sizeInfo}
                    style={{ backgroundColor: el.value }}
                    value={el.value}
                    name={attr.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    } else if (attr.name === "Color" || attr.name === "Capacity") {
      show1.push(
        <div key={attr.name} className={styles.wrap}>
          <p>{attr.name}: </p>
          <div className={styles.colorsDiv}>
            {attr.sizes.map((el) => {
              if (attr.name === "Color") {
                return (
                  <div
                    key={el.id}
                    className={styles.colorInfo}
                    style={{ backgroundColor: el.value }}
                    aria-label={el.id}
                  ></div>
                );
              } else {
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
              }
            })}
          </div>
        </div>
      );
    } else if (
      attr.name === "With USB 3 ports" ||
      attr.name === "Touch ID in keyboard"
    ) {
      show1.push(
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
    }
  });
  // console.log(attributes);
  console.log(render1)
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
