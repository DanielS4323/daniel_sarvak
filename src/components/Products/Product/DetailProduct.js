import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_PRODUCT_BY_ID } from '../../../GraphQL/Queries';
import Layout from '../../Layout/Layout'
import { useQuery } from '@apollo/client';
import ProductImages from './ProductImages';

const DetailProduct = () => {
    const { id } = useParams();
    const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
      variables: { id },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: </p>;
    console.log(data)
  return (
   <Layout>
    <section>
          <ProductImages images={data.product.gallery}/>
    </section>
   </Layout>
  )
}

export default DetailProduct