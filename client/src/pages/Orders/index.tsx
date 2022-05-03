import ProductsData from '../../data/products';
import './Orders.css';
import SingleOrder from './SingleOrder';

const Orders = () => {
  // fetch orders info by sub

  const displayOrders = ProductsData.map(order => {
    const { pictures, title, description, price } = order;

    const SingleOrderArgs = {
      key: title,
      title,
      price,
      description,
      pictures
    };

    return <SingleOrder {...SingleOrderArgs} />;
  });

  return <div className="order-list-page">{displayOrders}</div>;
};

export default Orders;
