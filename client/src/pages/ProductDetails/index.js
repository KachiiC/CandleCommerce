import { useParams } from "react-router-dom"
import { ProductsData } from "../../data/products"
import './ProductDetails.css'

const NewProductDetails = () => {

    const { id } = useParams()
    // eslint-disable-next-line
    const correctProduct = ProductsData.find(product => product.id == id)
    const { title, price, description, pictures } = correctProduct

    return (
        <div class="product-detail-page">
        <section class="product-detail-container">
            <h1>{title}</h1>
            <div class="product-detail-content">
                <h2>£{price}</h2>
                <p>{description}</p>
                <button href="">Buy Now</button>
            </div>
            <div class="product-detail-img">
                <img src={pictures[0]} alt="product-details"/>
            </div>
        </section>
    </div>
    )
}

export default NewProductDetails