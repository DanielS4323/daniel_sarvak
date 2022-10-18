import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./ProductImages.module.css";

const ProductImages = (props) => {
  const images = props.images.map((el) => (
    <div key={el}>
      <img src={el} alt="product image" />
    </div>
  ));
  return (
    <div>
      <Carousel infiniteLoop className={styles.carousel}>
        {images}
      </Carousel>
    </div>
  );
};

export default ProductImages;
