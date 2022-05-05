import { DescriptionTrimmer } from "../../helpers/DescriptionTrimmer";

interface CheckoutCardProps {
    title: string;
    price: number;
    description: string;
    pictures: string[];
    totalQuantity: Number
}

const CheckoutCard = (props: CheckoutCardProps) => {
  const { title, price, pictures, description, totalQuantity } = props;

  const backgroundImage = {
    backgroundImage: `url(${pictures[1]})`,
  };
  return (
    <div className="order-card" id="bright">
      <div className="order-info-section">
        <div className="order-header">
          <img className="locandina" src={pictures[0]} alt="order-card" />
          <h1>{title}</h1>
          <h3>£{price}</h3>
          <h4>Quantity: {`${totalQuantity}`}</h4>
        </div>
        <div className="order_desc">
          <p>{DescriptionTrimmer(description)}</p>
        </div>
      </div>
      <div className="blur_back" style={backgroundImage} />
    </div>
  );
};

export default CheckoutCard;
