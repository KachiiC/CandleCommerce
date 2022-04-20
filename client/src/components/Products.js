import Product from './Product'
import React from 'react'

export default function Products(props) {

  return (
    <div className='products'>
      {props.products.map(product => {
          return <Product key={product._id} product={product} />
        })
      }
    </div>
  )
}
