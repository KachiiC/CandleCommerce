import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProduct } from '../services/productService';

export default function ProductDetails() {

  const [product, setProduct] = useState([])
  const { id } = useParams();

  useEffect(() => {
    getProduct(id).then(data => {
      return setProduct(data)
    })
  }, [])
  console.log(product);

  return (
    <>
      <Link to="/">Home</Link>
      <p>Product details {product.title}</p>
    </>
  )
}
