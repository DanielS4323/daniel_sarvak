import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ShowProducts.module.css'

const ShowProducts = (props) => {
  const product = props.product
  return (
    <Link to={`/detail/${product.id}`} className={styles.container}>
      <img className={styles.productImage} alt='Product Picture' src={product?.gallery[0]}/>
      <p>{product?.name}</p>
      <p>${product?.prices[0].amount}</p>
    </Link>
  )
}

export default ShowProducts