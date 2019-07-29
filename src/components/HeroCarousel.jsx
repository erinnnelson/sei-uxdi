import React from 'react'
import Carousel from 'react-bootstrap/Carousel'



function HeroCarousel() {
  return (


    <>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/iH2CzPN.png"
            alt="store-frong"
          />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/yD9QNR6.png"
            alt="pizza-image"
          />

          <Carousel.Caption>


          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/dObXgRy.png"
            alt="pizza-image"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default HeroCarousel;

