import {useState, useEffect} from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { getProduct } from '../services/productService';
import BasketFormColours from './BasketFormColours'
import BasketFormScents from './BasketFormScents'


export default function ProductDetails(props) {

  const history = useHistory();

  const { id } = useParams();
  const [product, setProduct] = useState({})

  const [colour, setColour] = useState('')

  let scents = product.colours && product.colours.find(colourObject => colourObject.colour === colour)?.scents

   useEffect(() => {
    getProduct(id).then(data => {
      return setProduct(data)
    })
  }, [id])

  function addToBasket(event) {
    event.preventDefault();
    //placeholder
    const newItem = {
       title: product.title,
       price: product.price,
       colour: event.target.candleColour.value,
       scent: event.target.candleScent.value,
    }
    event.target.candleColour.value = 'Colour';
    event.target.candleColour.value = 'Scent';

    props.setBasket(basket => [...basket, newItem])
    history.push('/basket')
  }

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
            <form className='add_to_basket_form' onSubmit={addToBasket} >
                <select id="select_colour" onChange={(event) => setColour(event.target.value)} className="add_to_basket_selector" name="candleColour">
                <option>Colour</option>
                  {product.colours && <BasketFormColours product={product} />}
                </select>
                <select className="add_to_basket_selector" name="candleScent">
                  {scents ? <BasketFormScents scents={scents}/> : <option>Scent</option>}
                </select>
                <button type="submit" className='add_to_basket_selector'>Add to basket</button>
            </form>
          </div>
        </div>
    </>
  )
}
