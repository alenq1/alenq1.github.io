import React from 'react'
import {Carousel} from 'react-bootstrap'


const PortCarousel = ({content}) => {
  
    return (
        <Carousel>
    {content.images.map( (image, index) => (
      <Carousel.Item key={index}>
      <img
        className=""
        src={image}
        alt={image[index]}
        width='100%'
        height='100%'
        
      />
      
    </Carousel.Item>

    ))}      
  
</Carousel>
    )
}

export default PortCarousel
