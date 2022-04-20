import React from 'react'

export default function Product(props) {
  return (
    <>
    <div className="product">
      <p className="picture_home">{props.product.pic_one}</p>
      <p className="title_home">{props.product.title}</p>
    </div>
    </>
  )
}
