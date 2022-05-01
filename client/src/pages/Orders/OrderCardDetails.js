const OrderCardDetails = (props) => {

    const { title, price, description, pictures } = props.data

    const backgroundImage = {
        backgroundImage: `url(${pictures[1]})`
    }

    return (
        <div className="order-card" id="bright">
            <div className="order-info-section">
                <div className="order-header">
                    <img className="locandina" src={pictures[0]} alt="order-card" />
                    <h1>{title}</h1>
                    <h4>£{price}</h4>
                </div>
                <div className="order_desc">
                    <p>{description}</p>
                </div>
            </div>
            <div className="blur_back" style={backgroundImage} />
        </div>
    )
}

export default OrderCardDetails