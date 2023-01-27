import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GET_PRODUCT_BY_ID } from "../../../GraphQL/Queries";
import Layout from "../../Layout/Layout";
import { useQuery } from "@apollo/client";
import ProductImages from "../ProductImages";
import styles from "./DetailProduct.module.css";
import ProductTitle from "../ProductTitle";
import AttributesBar from "../AttributesBar";
import AddToCartBtn from "../../UI/AddToCartButton/AddToCartBtn";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/CartSlice";
import carouselStyle from "./Carousel.module.css";
import formatAttributes from "../../../utilities/formatAttributes";

const DetailProduct = () => {
  const [selectedTextBar, setSelectedTextBar] = useState(null);
  const [selectedSwatchBar, setSelectedSwatchBar] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id },
  });

  const attributes = data?.product?.attributes;
  const inStock = data?.product?.inStock;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;

  const onClickAddToCart = () => {
    const addedItem = {
      brand: data.product.brand,
      name: data.product.name,
      price: data.product.prices[0].amount,
      image: data.product.gallery,
      id: `${data.product.id}`,
      chosenAttributes: formatAttributes(data.product.attributes, [
        selectedTextBar,
        selectedSwatchBar,
      ]),
      attributes: [...attributes],
    };
    // console.log(addedItem)
    dispatch(cartActions.addToCart(addedItem));
  };

  return (
    <Layout>
      <section className={styles.wrap}>
        <ProductImages
          images={data.product.gallery}
          inStock={inStock}
          style={carouselStyle.carousel}
        />
        <div className={styles["detail-bar"]}>
          <ProductTitle
            brand={data.product.brand}
            name={data.product.name}
            price={data.product.prices[0].amount}
          />
          <AttributesBar
            attributes={attributes}
            setSelectedSwatchBar={setSelectedSwatchBar}
            setSelectedTextBar={setSelectedTextBar}
          />
          {inStock && <AddToCartBtn onClick={onClickAddToCart} />}
          {!inStock && <p>We are sorry, product is currently out of stock.</p>}

          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data.product.description }}
          ></p>
        </div>
      </section>
    </Layout>
  );
};

export default DetailProduct;
