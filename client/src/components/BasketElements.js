import {useState} from 'react'

export default function BasketElements(props) {

  const [counter, setCounter] = useState()

  return (
    props.basket.map(el => {
      return (
        <>
        <div className='element_container'>
          <div>
            <button>+</button>
            <p>{counter}</p>
            <button>-</button>
          </div>
          <div className='basket_element'>
            <p className='basket_name'>Title: {el.title} </p>
            <p className='basket_name'>Price: {el.price} </p>
            <p className='basket_name'>Colour: {el.colour} </p>
            <p className='basket_name'>Scent: {el.scent} </p>
          </div>
            <button className='basket_delete'>X</button>
        </div>
        </>

      )
    })
  )
}
