import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProductImages = ({ images, style, showThumbs = "true" }) => {
  const productImages = images?.map((el) => (
    <div key={el}>
      <img src={el} alt="product pictures" />
    </div>
  ));

  return (
    <div>
      <Carousel
        showIndicators={false}
        showThumbs={showThumbs}
        infiniteLoop
        className={style}
      >
        {productImages}
      </Carousel>
    </div>
  );
};

export default ProductImages;
