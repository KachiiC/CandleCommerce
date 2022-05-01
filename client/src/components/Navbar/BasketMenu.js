import { useState } from 'react'
import { ShoppingOutlined } from '@ant-design/icons';


const BasketMenu = () => {

    const [basketItems, setBasketItems] = useState(0)

    const iconStyles = {
        color: "grey",
        fontSize: "25px",
        cursor: "pointer"
    }

    return (
        <div className="shopping-cart-menu" onClick={() => setBasketItems(prev => prev + 1)}>
            {basketItems > 0 && <span className="badge">{basketItems}</span>}
            <ShoppingOutlined style={iconStyles} />
        </div>
    )
}

export default BasketMenu