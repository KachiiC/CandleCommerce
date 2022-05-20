import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { GetUserOrders } from "../../services/orderService";
import OrderList from "./OrderList";
import "./Orders.css";

const Orders = () => {

  const { isAuthenticated, user } = useAuth0();
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      GetUserOrders(user?.sub)
        .then((res) => {
          console.log(res)
          setUserOrders(res)
        })
        .catch((err) => console.log(err));
    }
  }, [user, isAuthenticated]);

  const displayOrders = userOrders.map(order => <OrderList {...order} />);

  return (
    <div className="order-list-page">
      {displayOrders}
    </div>
  );
};

export default Orders;
