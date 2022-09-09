import React from "react";
import { useParams } from "react-router-dom";
import { GET_PRODUCT_BY_ID } from "../../../GraphQL/Queries";
import Layout from "../../Layout/Layout";
import { useQuery } from "@apollo/client";
import ProductImages from "./ProductImages";
import ProductInformation from "./ProductInformation";
import styles from "./DetailProduct.module.css"

const DetailProduct = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;
  console.log(data.product);
  return (
    <Layout>
      <section className={styles.wrap}>
        <ProductImages images={data.product.gallery} />
        <ProductInformation
          brand={data.product.brand}
          name={data.product.name}
          price={data.product.prices[0].amount}
          attributes={data.product.attributes}
        />
      </section>
    </Layout>
  );
};

export default DetailProduct;
