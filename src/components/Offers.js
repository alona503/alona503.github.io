import React from 'react'
import Card from './Card'
const offers = [
  {
    name: 'מסלול לחודש',
    price: '300',
    content: 'מסלול שכולל 2 אימונים אישיים בשבוע',
  },
  {
    name: 'some name2',
    price: '10',
    content:
      ' fgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggמסלול שכולל 2 אימונים אישיים בשבוע',
  },
  {
    name: 'some name3',
    price: '10',
    content: 'מסלול שכולל 2 אימונים בשבוע +תזונה ',
  },
  {
    name: 'some name3',
    price: '10',
    content: 'מסלול שכולל 2 אימונים אישיים בשבוע',
  },
  { name: 'some name3', price: '10' },
  { name: 'some name3', price: '10' },
]

export default function Offers() {
  return (
    <div className="cards">
      {offers.map((offer, index) => {
        return (
          <Card name={offer.name} price={offer.price} content={offer.content} />
        )
      })}
    </div>
  )
}
