import { ProductsData } from "../../data/products"
import "./Orders.css"
import SingleOrder from "./SingleOrder"

const Orders = () => {
    const displayOrders = ProductsData.map(order => {
        const { pictures, title, description, price } = order
        const SingleOrderArgs = { pictures, title, description, price }
        return <SingleOrder {...SingleOrderArgs} />
    })
    return (
        <>
            {displayOrders}
        </>
    )
}

export default Orders