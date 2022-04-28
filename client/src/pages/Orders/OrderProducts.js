const OrderProducts = (props) => {

  return (
    props.orderProducts.map(product => {
      return (
        <>
          <div className="order_items">
            <p className='basket_name'>Title: {product.title}</p>
            <p className='basket_name'>Qty: 1</p>
            <p className='basket_name'>Colour: {product.colour}</p>
            <p className='basket_name'>Scent: {product.scent}</p>
            <p className='basket_name'>Price: {product.price}</p>
          </div>
        </>
      )
    })
  )
}

export default OrderProducts