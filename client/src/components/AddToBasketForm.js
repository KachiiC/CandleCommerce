import React from 'react'
import AddForm from './AddForm'

export default function AddToBasketForm(props) {


  return (
   props.product.colours.map(colour => {
      return <AddForm colour={colour} key={colour}/>
      })
  )}
