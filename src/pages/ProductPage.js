import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ShowProducts from "../components/Products/ShowProducts";
import { GET_CATEGORIESDYNAMIC } from "../GraphQL/Queries";
import styles from './ProductPage.module.css'

const ProductPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_CATEGORIESDYNAMIC, {
    variables: { name: id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;
  console.log(data);
  // console.log(id);

  let products = data.category.products.map((product) => (
    //console.log(product)
    <ShowProducts key={product.id} product={product} />
  ));

  return (
    <Layout>
      <h2>{id}</h2>
      
      <div className={styles.wrap}>{products}</div>
    </Layout>
  );
};

export default ProductPage;
