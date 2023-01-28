import { useQuery } from "@apollo/client";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ShowProducts from "../components/Products/ShowProducts";
import { GET_CATEGORIESDYNAMIC } from "../GraphQL/Queries";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const { categories } = useParams();
  const { data, loading, error } = useQuery(GET_CATEGORIESDYNAMIC, {
    variables: { name: categories },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;

  let products = data.category.products.map((product) => (
    <ShowProducts key={product.id} product={product} id={categories} />
  ));

  return (
    <Layout>
      <h2>{categories}</h2>
      <div className={styles.wrap}>{products}</div>
    </Layout>
  );
};

export default ProductPage;
