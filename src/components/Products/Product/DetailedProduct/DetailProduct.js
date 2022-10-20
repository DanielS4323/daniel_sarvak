import React from "react";
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
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id },
  });
  const attributes = data?.product?.attributes;
  const inStock = data?.product?.inStock;
  console.log(inStock);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;
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
          <AttributesBar attributes={attributes} />
          {inStock && <AddToCartBtn />}
          <p className={styles.description} dangerouslySetInnerHTML={{ __html: data.product.description }}></p>
        </div>
      </section>
    </Layout>
  );
};

export default DetailProduct;
