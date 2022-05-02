import Cart from '../../data/cart';
import UniqueValues from '../../helpers/UniqueValues';
import SingleOrder from '../Orders/SingleOrder';

const Checkout = () => {
  const displayOrders = UniqueValues(Cart).map(order => {
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

  return <>{displayOrders}</>;
};

export default Checkout;
