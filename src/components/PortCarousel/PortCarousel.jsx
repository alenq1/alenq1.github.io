import React from 'react'
import { StyledCarousel } from './style'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const PortCarousel = ({content}) => {
  
    return (
        <StyledCarousel          
            // infiniteLoop={true} 
            showIndicators={false} 
            showStatus={false}
            showThumbs={false}>
            {content.images.map( (image, index) => (
              <div key={index+image} className="carousel-img">
                <img                  
                  src={image}
                  alt={image[index]}
                />
              </div>
            ))}
        </StyledCarousel>
    )
}

export default PortCarousel
