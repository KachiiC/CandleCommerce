import OrderProducts from "./OrderProducts"

export default function OrderSingle(props) {
  console.log('all orders', props.order)
  return (
    <>
     {props.order.resolved ? <p>Shipped</p> : <p>Order has been placed</p>}
     {<OrderProducts orderProducts={props.order.products}/>}
    <p>{props.order.totalCost}</p>
    </>
  )
}
