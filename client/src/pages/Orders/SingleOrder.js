const SingleOrder = (props) => {

    const { pictures, title, description, price } = props
    const backgroundImage = {
        backgroundImage: `url(${pictures[1]})`
    }
    return (
        <div class="order-card-list-container">
            <div class="order-card" id="bright">
                <div class="order-info-section">
                    <div class="order-header">
                        <img class="locandina" src={pictures[0]} alt="order-card" />
                        <h1>{title}</h1>
                        <h4>£{price}</h4>
                    </div>
                    <div class="order_desc">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="blur_back" style={backgroundImage}></div>
            </div>
        </div>
    )

}

export default SingleOrder