const OrderProducts = ({ orderProducts }) => {

  const displayOrderProps = orderProducts.map(product => {

    const { title, colour, scent, price } = product

    return (
      <div className="order_items">
        <p className='basket_name'>Title: {title}</p>
        <p className='basket_name'>Qty: 1</p>
        <p className='basket_name'>Colour: {colour}</p>
        <p className='basket_name'>Scent: {scent}</p>
        <p className='basket_name'>Price: {price}</p>
      </div>
    )
  })

  return displayOrderProps

}

export default OrderProducts