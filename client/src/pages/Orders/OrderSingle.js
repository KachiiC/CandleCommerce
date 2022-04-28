import OrderProducts from "./OrderProducts"
import { updateOrder } from "../../services/orderService"
import { MomentFunc } from "../../helpers"

const OrderSingle = (props) => {

  const { order, resolve, setResolve } = props
  const {
    date,
    user,
    _id,
    resolved,
    totalCost
  } = order

  const resolveOrder = () => {
    //call put request from service
    updateOrder(order._id)
    setResolve(!resolve)
  }

  const moment = MomentFunc(date)

  const adminButton = <button onClick={resolveOrder} className="order_button">Complete order</button>
  const adminLogic = user.isAdmin && adminButton

  return (
    <div className='order_element_container'>
      <div className="order_name">
        {resolved ? <h3 >Order has been shipped</h3> : <h3> Order has been placed</h3>}
        {resolved ? <p> Shipped on: {moment} </p> : <p> Placed on: {moment} </p>}
      </div>
      <div className="order_format">
        {<OrderProducts orderProducts={order.products} />}
      </div>
      <div className="order_name">
        <p className='basket_name'>Ordered by: {user}</p>
        <p className='basket_name'>Order id: {_id}</p>
        <p className='basket_name'>Total: {totalCost}</p>
      </div>
      {adminLogic}
    </div>
  )
}

export default OrderSingle 
