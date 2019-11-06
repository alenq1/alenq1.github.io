import React from 'react'
import {Carousel} from 'react-bootstrap'


const PortCarousel = ({content}) => {
  
    return (
        <Carousel>
    {content.images.map( (image, index) => (
      <Carousel.Item>
      <img
        className=""
        src={image}
        alt={image[index]}
        width='500px'
        height='250px'
        
      />
      
    </Carousel.Item>

    ))}      
  
</Carousel>
    )
}

export default PortCarousel
