import React from 'react'

const BasketFormScents = (props) => {
  return (
    props.scents.map(scent => {
      return (
        <option key={scent} >{scent}</option>
      )
    })
  )
}

export default BasketFormScents