import { Link } from 'react-router-dom';

interface SingleProductProps {
  title: string;
  description: string;
  price: number;
  id: number;
  image: string;
}

const SingleProductCard = (props: SingleProductProps) => {
  const { title, description, price, image, id } = props;

  return (
    <div className="product-list-card">
      <figure className="product-list-card-thumb">
        <img src={image} alt="single product" />
        <figcaption className="product-list-card-caption">
          <h2>
            {title} - £{price}
          </h2>
          <p>{description}</p>
          <Link to={`/product/${id}`}>
            <button className="product-list-card-button">View Product</button>
          </Link>
        </figcaption>
      </figure>
    </div>
  );
};

export default SingleProductCard;
