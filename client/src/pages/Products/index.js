import './Products.css';
import SingleProductCard from './SingleProductCard';
import ProductsData from '../../data/products';

const ProductsList = () => {
  const displayImages = ProductsData.map(product => {
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

export default ProductsList;
