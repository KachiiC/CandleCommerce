import {useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import BasketElements from './BasketElements'

export default function Basket(props) {
 
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0)
    }, [location]);


  return (
    <>
      <Link to="/"><button className='continue_shopping_button'>Continue Shopping</button></Link>
    <div className='basket_header'>
      <h1>Basket</h1>
    </div>
    <div className='basket_outer'>
      {props.basket.length 
      ?
        <div className='basket_elements'>
          <BasketElements setTotal={props.setTotal} total={props.total} basket={props.basket} setBasket={props.setBasket}/>
          <div className='total_order_button'>
            <h2 className='basket_total'>Total: £{props.total.reduce((prevVal, currentVal) => prevVal + currentVal).toFixed(2) }</h2>
            <button className="basket_order_button">Order</button>
          </div>
        </div>
      :
        <h2 className='empty_basket'>Your basket is empty</h2>
      }
    </div>
    </>
  )
}
