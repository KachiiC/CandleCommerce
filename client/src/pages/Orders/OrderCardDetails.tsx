import { DescriptionTrimmer } from "../../helpers/DescriptionTrimmer";
import { OrderCardProps } from "../../interfaces/Orders";

const OrderCardDetails = (data : OrderCardProps) => {

  const {
    title,
    price,
    pictures,
    fulfilled,
    createdAt,
    description
  } = data;

  const backgroundImage = {
    backgroundImage: `url(${pictures[1]})`,
  };

  const date = new Date(createdAt).toLocaleDateString()

  return (
    <div className="order-card" id="bright">
      <div className="order-info-section">
        <div className="order-header">
          <img className="locandina" src={pictures[0]} alt="order-card" />
          <h1>{title}</h1>
          <h4>£{price}</h4>
        </div>
        <div className="order_desc">
          <h3><strong>Shipped :</strong> {fulfilled ? "True" : "False"}</h3>
          <h3><strong>Ordered On :</strong> {date}</h3>
          <p>{DescriptionTrimmer(description)}</p>
        </div>
      </div>
      <div className="blur_back" style={backgroundImage} />
    </div>
  );
};

export default OrderCardDetails;
