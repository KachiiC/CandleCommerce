import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProduct } from '../services/productService';
import AddToBasketForm from './AddToBasketForm'
import Products from './Products';

export default function ProductDetails() {

  const [product, setProduct] = useState([])
  const { id } = useParams();

  useEffect(() => {
    getProduct(id).then(data => {
      return setProduct(data)
    })
  }, [id])

  return (
    <>
      <Link  to="/"><button className='home_button'>Home</button></Link>
      <div className='img_container'>
        <img className="details_picture" src={product.pic_two} alt="imageOfCandle"></img>
        </div>
        <div className='details_layout'>
          <div className='inner_details_layout'>
            <p>Description: <br/>{product.description}</p>
            <p>Price: £{product.price}</p>
          </div>
          <div>
            {/* <AddToBasketForm product={product} key={product._id}/> */}
          </div>
        </div>
    </>
  )
}
