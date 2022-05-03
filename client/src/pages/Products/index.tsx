import './Products.css';
import SingleProductCard from './SingleProductCard';
import { SingleProduct } from '../../interfaces/SingleProduct';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/productService';

const Products = () => {
  const [products, setProducts] = useState<SingleProduct[]>([]);

  // TODO now we call the backend on every product page load, the backend doesn't really like it
  useEffect(() => {
    getAllProducts().then((res: SingleProduct[]) => setProducts(res));
  }, []);

  const displayImages = products.map((product: SingleProduct) => {
    const { title, description, pictures, price, id } = product;

    const SingleProductArgs = {
      key: title,
      title,
      description,
      price,
      id,
      image: pictures[0]
    };

    return <SingleProductCard {...SingleProductArgs} />;
  });

  return <div className="product-list-container">{displayImages}</div>;
};

export default Products;
