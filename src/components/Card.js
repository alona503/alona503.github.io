import { Button } from '@mui/material'
import React from 'react'

export default function Card({ name, price, content }) {
  return (
    <div className="cardOffer">
      <h3 className="title"> {name} </h3>
      <p>{content}</p>
      <p>{price}</p>
      <button className="purchase">
        <span>לתשלום</span>
      </button>
    </div>
  )
}
