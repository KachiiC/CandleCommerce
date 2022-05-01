import OrderCardDetails from "./OrderCardDetails"

const SingleOrder = (props) => {

    return (
        <div className="order-card-list-container">
            <OrderCardDetails data={props} />
        </div>
    )

}

export default SingleOrder