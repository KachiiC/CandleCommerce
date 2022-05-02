import Cart from '../../data/cart';
import BasketItem from './BasketItem';
import UniqueValues from '../../helpers/UniqueValues';
import { Link } from 'react-router-dom';

const BasketMenu = () => {
  const basketList = UniqueValues(Cart).map(item => (
    <BasketItem item={item} key={item.id} />
  ));
  const total = Cart.map(obj => obj.price).reduce((a, b) => a + b);
  return (
    <div className="basket-list">
      {basketList}
      <h2>Total: £{total}</h2>
      <Link to="/checkout">
        <button className="checkout-btn">Checkout</button>
      </Link>
    </div>
  );
};

export default BasketMenu;
