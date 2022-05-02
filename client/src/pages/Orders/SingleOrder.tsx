import OrderCardDetails from './OrderCardDetails';
// import { Item } from '../../interfaces/item';

interface SingleOrderProps {
  title: string;
  price: number;
  description: string;
  pictures: string[];
}

const SingleOrder = (props: SingleOrderProps) => {
  return (
    <div className="order-card-list-container">
      <OrderCardDetails data={props} />
    </div>
  );
};

export default SingleOrder;
