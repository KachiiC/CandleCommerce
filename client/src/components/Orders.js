import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'

import { getOrders, getUserOrders, updateOrder } from '../services/orderService';
import OrderList from "./OrderList";

export default function Orders(props) {
  
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([])

  function compare(a, b) {
    if (b.date > a.date) return 1;
    if (b.date < a.date) return -1;
    return 0;
  }

  useEffect(() => {
    props.user.isAdmin ?
    getOrders().then(data => {
      data.sort(compare)
      setOrders(data)
      setFilteredOrders(data)
    })
    : 
    getUserOrders(props.user._id).then(data => { if(data) {
      data.sort(compare) 
      setOrders(data)
      setFilteredOrders(data)
    }
    else {
    setOrders([])
    }
  })
}, [props.user.isAdmin,props.user._id])

  function showAllOrders() {
    setOrders(filteredOrders)
  }

  function showPendingOrders() {
     setOrders(orders.filter(order => !order.resolved))
   }

   function showCompletedOrders() {
     setOrders(orders.filter(order => order.resolved))
   }

  return (
    <>
    <Link to="/"><button className='continue_shopping_button'>Home</button></Link>
    <div className='basket_header'>
      { props.user.isAdmin?
      <h1>All Orders</h1>
      :
      <h1>Your Orders</h1>
      }
    </div >
        <div className="order_filter_buttons">
          <button onClick={showAllOrders} className="order_filter_button">Show all orders</button>
          <button onClick={showCompletedOrders}  className="order_filter_button">Show completed orders</button>
          <button onClick={showPendingOrders}  className="order_filter_button">Show pending orders</button>
        </div>
        {/* This should be show in ascending order --> make sure sending date property over and write a sort in the order single component */}
        <div className='order_outer'>
        {
        orders.length ? 
          <div >
            <div className='order_elements'>
              <OrderList user={props.user} orders={orders}  /> 
            </div>
          </div>
        : 
        <h2 className='empty_basket'>You have no orders</h2>
      }
      </div>
    </>

  )
}
