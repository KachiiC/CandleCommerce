import React from 'react'

export default function BasketFormScents(props) {
  console.log(props)
  return (
    props.scents.map(scent => {
        return (
              <option>{scent}</option>
        )
    })
)}