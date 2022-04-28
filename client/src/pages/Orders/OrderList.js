import OrderSingle from './OrderSingle'

const OrderList = (props) => {

  const { orders, resolve, setResolve, user } = props

  const displayOrderList = orders.map(order => {
    return (
      <OrderSingle
        key={order._id}
        order={order}
        user={user}
        resolve={resolve}
        setResolve={setResolve}
      />
    )
  })

  return displayOrderList

}

export default OrderList