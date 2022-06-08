import React from 'react'
import {skills} from '../../sources/data'
import Fade from 'react-reveal/Fade'
import {StyledSkills} from './style'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
    className: "slider variable-width center",
    accessibility: false,
    arrows: false,
    // centerPadding: "91px",
    variableWidth: true,
    centerMode: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    adaptiveHeight: true,
  };
  



const Skills = () => {
    return (
    
        <StyledSkills>    
            {skills.map( (skills, index) => (
            <Fade bottom key={index}>
                <div className='cardskill' >
                    <div className='header'>
                        <h4>{skills.type}</h4>
                    </div>
                    <Slider {...settings}
                        // showThumbs={false} 
                        // infiniteLoop={true} 
                        // showIndicators={false} 
                        // showStatus={false}
                        className='body'

                    >
                        {skills.libraries.map( (libraries, libindex) => (
                        <div className='single-skill' key={libindex+libraries.image}>
                            <img src={libraries.image} alt={index}/>
                            <p className='ml'></p>                    
                        </div>
                        ))}                    
                    </Slider>            
                </div>
            </Fade>
            ))}  
        </StyledSkills>
    
    )
}

export default Skills