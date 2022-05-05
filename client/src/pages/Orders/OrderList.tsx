import { OrderListProps } from "../../interfaces/Orders";
import OrderCardDetails from "./OrderCardDetails";

const OrderList = (props: OrderListProps) => {

  const { fulfilled, createdAt, shippedAt, products } = props;

  const displayList = products.map((orderedProduct) => {
    const { pictures, title, price, description } = orderedProduct;
    const singleOrderArgs = {
      fulfilled,
      createdAt,
      shippedAt,
      pictures,
      title,
      price,
      description
    };
    return (
      <div className="order-card-list-container">
        <OrderCardDetails {...singleOrderArgs} />
      </div>
    );
  });

  return <>{displayList}</>;
};

export default OrderList;
