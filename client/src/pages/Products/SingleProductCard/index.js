import { Link } from 'react-router-dom'

const SingleProductCard = (props) => {

    const { title, description, price, image, id } = props

    return (
        <div className="product-list-card">
            <figure className="product-list-card-thumb">
                <img src={image} alt="single product" />
                <figcaption className="product-list-card-caption">
                    <h2>{title} - £{price}</h2>
                    <p>{description}</p>
                    <Link to={`/product/${id}`}>
                        <button className="product-list-card-button">
                            View Product
                        </button>
                    </Link>
                </figcaption>
            </figure >
        </div>
    )
}

export default SingleProductCard