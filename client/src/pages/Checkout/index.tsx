import Cart from "../../data/cart";
import { CountDuplicates, UniqueValues } from "../../helpers/UniqueValues";
import CheckoutCard from "./CheckoutCard";
import "./Checkout.css";

const Checkout = () => {
  const displayOrders = UniqueValues(Cart).map((order) => {
    
    const { pictures, title, description, price } = order;
    const totalQuantity = CountDuplicates(title, Cart);

    const SingleOrderArgs = {
      key: title,
      title,
      price,
      description,
      pictures,
      totalQuantity,
    };

    return (
      <div className="single-checkout-card">
        <CheckoutCard {...SingleOrderArgs} />
      </div>
    );
  });

  return <div className="checkout-cards-container">{displayOrders}</div>;
};

export default Checkout;
