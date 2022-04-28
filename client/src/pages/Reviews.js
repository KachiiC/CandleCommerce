import { Link } from "react-router-dom"
// eslint-disable-next-line
import { useState, useEffect } from 'react'
// eslint-disable-next-line
import { getReviews, postReview, resolveReviews, destroyReview } from '../services/reviewService';

export default function Reviews(props) {
  // eslint-disable-next-line
  const [resolve, setResolve] = useState([false]);
  // eslint-disable-next-line
  const [reviews, setReviews] = useState([]);

  const { user } = props
  const adminLogic = user.isAdmin ? "All Reviews" : "Reviews"

  return (
    <>
      <Link to="/"><button className='continue_shopping_button'>Home</button></Link>
      <div className='basket_header'>
        {adminLogic}
      </div >
      {/* This should be show in ascending order --> make sure sending date property over and write a sort in the order single component */}
      <div className='order_outer'>
        {
          reviews.length &&
          <div >
            <div className='order_elements'>
              {/* <ReviewList resolve={props.resolve} setResolve={setResolve} user={props.user} reviews={reviews}  />  */}
            </div>
          </div>
        }
      </div>
    </>
  )
}