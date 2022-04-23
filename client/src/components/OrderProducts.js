export default function OrderProducts(props) {
  return (
    props.orderProducts.map(product => {
      return (
        <>
          <p>{product.title}</p>
          <p>{product.qty}</p>
          <p>{product.colour}</p>
          <p>{product.scent}</p>
          <p>{product.price}</p>
        </>
        )
    })
  )
}
