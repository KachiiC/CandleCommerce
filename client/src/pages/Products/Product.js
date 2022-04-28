import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {

  const {
    _id,
    pic_one,
    title
  } = product

  return (
    <Link className="product-link-style product" to={`/product/${_id}`} >
      <img src={pic_one} className="picture_home" alt="each_candle" />
      <p className="title_home" >{title}</p>
    </Link>
  )
}

export default Product