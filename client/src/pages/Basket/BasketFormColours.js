import React from 'react'

const BasketFormColours = ({ product }) => {

  const displayedColors = product.colours.map(colour => (
    <option key={colour.colour}>{colour.colour}</option>
  ))

  return displayedColors

}

export default BasketFormColours