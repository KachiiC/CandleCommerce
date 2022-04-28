import BasketElement from "./BasketElement"

const BasketElements = (props) => {
  const { setTotal, total, basket, setBasket } = props
  const BasketElementProps = {
    setTotal,
    total,
    basket,
    setBasket,
  }

  const basketItems = basket.map((el, index) => (
    <BasketElement
      key={index}
      index={index}
      element={el}
      {...BasketElementProps}
    />
  ))

  return basketItems
  
}

export default BasketElements