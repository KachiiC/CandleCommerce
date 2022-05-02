import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import ProductsData from '../../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  // eslint-disable-next-line
  const correctProduct = ProductsData.find(product => product.id == id);

  const { title, price, description, pictures } = correctProduct;

  return (
    <div className="product-detail-page">
      <section className="product-detail-container">
        <h1>{title}</h1>
        <div className="product-detail-content">
          <h2>£{price}</h2>
          <p>{description}</p>
          <button>Buy Now</button>
          <button>Add to Cart</button>
        </div>
        <div className="product-detail-img">
          <img src={pictures[0]} alt="product-details" />
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
