import { Link } from "react-router-dom"

export default function Orders() {
  return (
    <>
    <Link to="/"><button className='continue_shopping_button'>Home</button></Link>
    <div className='basket_header'>
      <h1>Orders</h1>
    </div>
    </>
  )
}
