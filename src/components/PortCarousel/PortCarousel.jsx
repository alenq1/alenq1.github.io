import React from 'react'
import { StyledCarousel } from './style'

const settings = {
  className: "center",
  accessibility: false,
  // arrows: false,
  variableWidth: true,
  centerMode: true,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  adaptiveHeight: true
};

const PortCarousel = ({content}) => {
  
    return (
        <StyledCarousel {...settings}         
            // infiniteLoop={true} 
            // showIndicators={false} 
            // showStatus={false}
            // showThumbs={false}
        >
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
