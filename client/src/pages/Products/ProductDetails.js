import { useState, useEffect } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'
import { HomeButton } from '../../components/HomeButton';
import { getProduct } from '../../services/productService';
import BasketFormColours from '../Basket/BasketFormColours'
import BasketFormScents from '../Basket/BasketFormScents'


const ProductDetails = ({ setBasket, setTotal }) => {

  const history = useHistory();

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location]);

  //access the id in the url
  const { id } = useParams();
  const [product, setProduct] = useState({})

  const {
    title,
    description,
    colours,
    pic_two,
    price
  } = product

  //sets the currently selected colour
  const [colour, setColour] = useState('')

  //sets scents to be the array inside the object with the colour value
  let scents = colours && colours.find(colourObject => colourObject.colour === colour)?.scents

  //fetches the data of a specific product
  useEffect(() => {
    getProduct(id).then(data => setProduct(data))
  }, [id])

  //when form is handled adds product to the basket state
  const addToBasket = (event) => {
    event.preventDefault();

    const targeter = input => event.target[input].value

    const newItem = {
      title,
      price,
      colour: targeter("candleColour"),
      scent: targeter("candleScent")
    }

    //ensures that the item can only be submitted if it has a valid value
    let checkItem = true && newItem.scent !== 'Scent' && newItem.colour !== 'Colour'

    if (checkItem) {
      setBasket(basket => [...basket, newItem]);
      history.push('/basket');
      setTotal(current => [...current, newItem.price])
    }
  }

  return (
    <>
      <HomeButton />
      <div className='img_container'>
        <img className="details_picture" src={pic_two} alt="imageOfCandle"></img>
      </div>
      <div className='details_layout'>
        <div className='inner_details_layout'>
          <p>Description: <br />{description}</p>
          <p>Price: £{price}</p>
        </div>
        <div>
          <form className='add_to_basket_form' onSubmit={addToBasket} >
            <select id="select_colour" onChange={(e) => setColour(e.target.value)} className="add_to_basket_dropdown" name="candleColour">
              <option>Colour</option>
              {product.colours && <BasketFormColours product={product} />}
            </select>
            <select className="add_to_basket_dropdown" name="candleScent">
              {scents ? <BasketFormScents scents={scents} /> : <option>Scent</option>}
            </select>
            <button type="submit" className='add_to_basket_selector'>Add to basket</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProductDetails