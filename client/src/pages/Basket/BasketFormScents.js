import React from 'react'

const BasketFormScents = ({ scents }) => {

  const displayBasketScents = scents.map(scent => {
    return (
      <option key={scent} >{scent}</option>
    )
  })

  return displayBasketScents
}

export default BasketFormScents