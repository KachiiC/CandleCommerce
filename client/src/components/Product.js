import React from 'react'

export default function Product(props) {
  return (
    <>
    <p>{props.product.pic_one}</p>
    <p>{props.product.title}</p>
    </>
  )
}
