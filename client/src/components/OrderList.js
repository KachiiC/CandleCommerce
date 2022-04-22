import OrderSingle from './OrderSingle'


export default function OrderList(props) {

  return (
    props.orders.map(order => <OrderSingle key={order._id} order={order} />)
  )
}
