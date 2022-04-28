import { useEffect } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import BasketElements from './BasketElements'
import { createOrder } from '../../services/orderService'
import { TotalAmount } from '../../helpers'
import './Basket.css'

const Basket = (props) => {

  const { user, total, basket, setTotal, setBasket } = props

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location]);

  const checkLogin = () => {
    if (user._id) {
      //sets total cost from array to number
      const formattedTotal = +(total.reduce((prevVal, currentVal) => prevVal + currentVal).toFixed(2));

      const newOrder = {
        submittedBy: user._id,
        resolved: false,
        products: basket,
        totalCost: formattedTotal,
        user: user.email,
        date: Date.now()
        // address: form for address
      }

      createOrder(newOrder)
        .then(response => response ? history.push('/orders') : console.log('Order not placed'));
      setBasket([])
      setTotal([])
    }
    else {
      history.push('/login');
    }
  }

  const filledBasketProps = {
    setTotal,
    total,
    basket,
    setBasket
  }

  const basketFilled = (
    <div className='basket_elements'>
      <BasketElements {...filledBasketProps} />
      <div className='total_order_button'>
        <h2 className='basket_total'>
          Total: £{TotalAmount(total)}
        </h2>
        <button onClick={checkLogin} className="basket_order_button">
          Order
        </button>
        {/* add address form with this as the submit button --> also on submit timestamp the date and time using momentum */}
      </div>
    </div>
  )

  const emptyBasket = <h2 className='empty_basket'>Your basket is empty</h2>

  const basketLogic = basket.length ? basketFilled : emptyBasket

  return (
    <>
      <Link to="/">
        <button className='continue_shopping_button'>
          Continue Shopping
        </button>
      </Link>
      <div className='basket_header'>
        <h1>Your Basket</h1>
      </div>
      <div className='basket_outer'>
        {basketLogic}
      </div>
    </>
  )
}
export default Basket 