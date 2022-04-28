const BasketElement = (props) => {

  const { basket, element, total, index } = props
  const { title, price, colour, scent } = element


  function removeItem() {
    props.setBasket([
      ...basket.slice(0, index),
      ...basket.slice(index + 1)
    ])
    props.setTotal([...total, -price])
  }

  return (
    <div className='element_container'>
      <div className='basket_element'>
        <p className='basket_name'>Qty: 1</p>
        <p className='basket_name'>Title: {title} </p>
        <p className='basket_name'>Price: {price} </p>
        <p className='basket_name'>Colour: {colour} </p>
        <p className='basket_name'>Scent: {scent} </p>
      </div>
      <button onClick={removeItem} className='basket_delete_button'>X</button>
    </div>
  )
}

export default BasketElement