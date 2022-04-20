import Product from './Product'
import React from 'react'

export default function Products(props) {
  
  return (
   props.products.map(product => {
     return <Product key={product._id} product={product} />
   })
  )
}
