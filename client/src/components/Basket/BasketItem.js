import Cart from "data/cart"

const BasketItem = (props) => {

    const {id, pictures, title, price} = props.item

    const quanitiy = Cart.filter((cart_item) => cart_item.id === id).length

    return (
        <div className="basket-item">
            <img src={pictures[0]} alt="basket-item-pic" />
            <h3>{title}: £{price}</h3>
            <h3>x {quanitiy}</h3>
        </div>
    )
}

export default BasketItem