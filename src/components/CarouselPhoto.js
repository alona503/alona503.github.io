import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function CarouselPhoto({ images }) {
  return (
    <Carousel controls={false} fade="true" interval={900}>
      {images.map((image) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100 photoSlideSize"
              src={image.src}
              alt="slide"
            />
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}
