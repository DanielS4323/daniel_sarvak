import React from 'react'
import styles from "../ProductInformation.module.css";

const ProductColorCapacity = (props) => {
    console.log('radi')
    const attr = props.attr
    console.log(attr)
  return (
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
  )
}

export default ProductColorCapacity