import React from 'react'

export default function BasketFormColours(props) {

  return (
   props.product.colours.map(colour => {
      return (
        <option>{colour.colour}</option>
      )
      })
  )}
