import React from 'react'

export default function OrderSingle(props) {
  console.log('all orders', props.order)
  return (
    <>
     {props.order.resolved ? <p>Shipped</p> : <p>Order has been placed</p>}
     {/* <p>{props.order.products}</p> this is an array need to extract the info I need*/}
    <p>{props.order.totalCost}</p>
    </>
  )
}
