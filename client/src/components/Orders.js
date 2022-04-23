import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'

import { getOrders, getUserOrders, updateOrder } from '../services/orderService';
import OrderList from "./OrderList";

export default function Orders(props) {
  
  const [orders, setOrders] = useState([]);
  
  console.log('userid', props.user._id)
  console.log('orders', orders);

  useEffect(() => {
    props.user.isAdmin ?
    getOrders().then(data => setOrders(data)) 
    : 
    getUserOrders(props.user._id).then(data => data ? setOrders(data) : setOrders([])) 
  }, [ props.user.isAdmin,props.user._id])

  return (
    <>
    <Link to="/"><button className='continue_shopping_button'>Home</button></Link>
    <div className='basket_header'>
      { props.user.isAdmin?
      <h1>All Orders</h1>
      :
      <h1>Your Orders</h1>
      }
    </div>
    <div>
      {/* This should be show in ascending order --> make sure sending date property over and write a sort in the order single component */}
      {orders.length ? <OrderList orders={orders}  /> : <h2 className='empty_basket'>You have no orders</h2>}
    </div>
    </>
  )
}
