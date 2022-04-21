import { useState } from 'react'
import { Link } from 'react-router-dom'
import BasketElements from './BasketElements'

export default function Basket(props) {

  const backgroundImage = 'https://scontent.flhr10-2.fna.fbcdn.net/v/t39.30808-6/275675848_326814872806643_5935923096652623576_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TF-kqGP4QSkAX8WaZcJ&_nc_ht=scontent.flhr10-2.fna&oh=00_AT8Tyy6zsw_jdNrKG-hbzkVa2oI-5Cc6kQ4c3sQlLF_z-g&oe=6265866F'


  return (
    <>
      <Link to="/"><button className='home_button'>Continue Shopping</button></Link>
    <div className='basket_header'>
      <h1>Basket</h1>
    </div>
    <div className='basket_outer'>
      {props.basket.length ?
      <div className='basket_elements'>
        <BasketElements setTotal={props.setTotal} basket={props.basket}/>
        <h2 className='basket_total'>Total: {props.total}</h2>
      </div>
      :
      <h2 className='empty_basket'>Your basket is empty</h2>
      }
    </div>
    </>
  )
}
