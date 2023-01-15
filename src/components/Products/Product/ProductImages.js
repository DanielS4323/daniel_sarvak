import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./ProductImages.module.css";

const ProductImages = ({ images }) => {
  const productImages = images.map((el) => (
    <div key={el}>
      <img src={el} alt="product pictures" />
    </div>
  ));
  return (
    <div>
      <Carousel infiniteLoop className={styles.carousel}>
        {productImages}
      </Carousel>
    </div>
  );
};

export default ProductImages;
