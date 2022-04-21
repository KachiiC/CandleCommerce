import React from 'react'

export default function BasketElements(props) {
  return (
    props.basket.map(el => {
      return (
        <>
          <p>{el.title}</p>
          <p>{el.price}</p>
          <p>{el.colour}</p>
          <p>{el.scent}</p>
        </>
      )
    })
  )
}
