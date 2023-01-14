import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GET_PRODUCT_BY_ID } from "../../../../GraphQL/Queries";
import Layout from "../../../Layout/Layout";
import { useQuery } from "@apollo/client";
import ProductImages from "./ProductImages";
import styles from "./DetailProduct.module.css";
import ProductTitle from "./ProductTitle";
import AttributesBar from "./AttributesBar";
import AddToCartBtn from "../../../UI/AddToCartBtn";

const DetailProduct = () => {
  const [selectedTextBar, setSelectedTextBar] = useState();
  const [selectedSwatchBar, setSelectedSwatchBar] = useState();
  const { id } = useParams();
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
      attributes: [selectedTextBar?? 'No options', selectedSwatchBar ?? 'No options'],
    };
    console.log(addedItem);
  };

  return (
    <Layout>
      <section className={styles.wrap}>
        <ProductImages images={data.product.gallery} inStock={inStock} />
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
