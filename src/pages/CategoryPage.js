import { useQuery } from "@apollo/client";
import React from "react";
import Layout from "../components/Layout/Layout";
import { GET_ALL_PRODUCTS } from "../GraphQL/Queries";

const CategoryPage = () => {
  const {data, loading, error} = useQuery(GET_ALL_PRODUCTS)
  console.log(data)
  return <Layout>
    <h1>all</h1>


  </Layout>;
};

export default CategoryPage;
