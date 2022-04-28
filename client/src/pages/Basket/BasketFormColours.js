import React from 'react'

const BasketFormColours = (props) => {
  return (
    props.product.colours.map(colour => {
      return (
        <option key={colour.colour}>{colour.colour}</option>
      )
    })
  )
}

export default BasketFormColours