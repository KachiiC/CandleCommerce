import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { useEffect, useState } from 'react';
import { SingleProduct } from '../../interfaces/SingleProduct';
import { getOneProduct } from '../../services/productService';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<SingleProduct>();

  useEffect(() => {
    getOneProduct(Number(id)).then((res: SingleProduct) => setProduct(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (product) {
    const { title, price, description, pictures } = product;

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
  } else {
    return <>Sorry, there was an error</>;
  }
};

export default ProductDetails;
