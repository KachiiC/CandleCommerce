import { useState, useEffect } from 'react'
import { getOrders, getUserOrders } from '../../services/orderService'
import OrderList from "./OrderList";
import { Compare } from "../../helpers";
import { HomeButton } from "../../components/HomeButton";
import './Orders.css'

const Orders = (props) => {

  const [resolve, setResolve] = useState([false])

  const [orders, setOrders] = useState([]);
  const [ORDERS, setORDERS] = useState([])
  const { user } = props

  useEffect(() => {
    user.isAdmin ?
      getOrders().then(data => {
        data.sort(Compare())
        setOrders(data)
        setORDERS(data)
      })
      :
      getUserOrders(user._id).then(data => {
        if (data) {
          data.sort(Compare())
          setOrders(data)
          setORDERS(data)
        }
        else {
          setOrders([])
        }
      })
  }, [user.isAdmin, user._id, resolve])

  const showAllOrders = () => setOrders(ORDERS)

  const showPendingOrders = () => setOrders(ORDERS.filter(order => !order.resolved))

  const showCompletedOrders = () => setOrders(ORDERS.filter(order => order.resolved))

  const HeaderLogic = () => {

    const header = user.isAdmin ? "All Orders" : "Your Orders"

    return (
      <div className='basket_header'>
        <h1>{header}</h1>
      </div >
    )
  }

  const orderFilters = [
    {
      title: "Show all orders",
      click: showAllOrders
    },
    {
      title: "Show completed orders",
      click: showCompletedOrders
    },
    {
      title: "Show pending orders",
      click: showPendingOrders
    },
  ]

  const orderFilterButtons = orderFilters.map((btn) => (
    <button onClick={btn.click} className="order_filter_button">
      {btn.title}
    </button>
  ))

  const orderListArgs = {
    resolve,
    setResolve,
    user,
    orders
  }

  const orderOuter = orders.length ?
    <div className='order_elements'>
      <OrderList {...orderListArgs} />
    </div>
    :
    <h2 className='empty_basket'>You have no orders</h2>

  return (
    <>
      <HomeButton />
      <HeaderLogic />
      {orderFilterButtons}
      <div className='order_outer'>
        {orderOuter}
      </div>
    </>

  )
}

export default Orders