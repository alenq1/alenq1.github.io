import React from 'react'
import {skills} from '../../sources/data'
import Fade from 'react-reveal/Fade'
import {StyledSkills} from './style'
import { Carousel } from 'react-responsive-carousel'

const Skills = () => {
    return (
    
        <StyledSkills>    
            {skills.map( (skills, index) => (
            <Fade bottom key={index}>
                <div className='cardskill' >
                    <div className='header'>
                        <h4>{skills.type}</h4>
                    </div>
                    <Carousel showThumbs={false} 
                        infiniteLoop={true} 
                        showIndicators={false} 
                        showStatus={false}
                        className='body'

                    >
                        {skills.libraries.map( (libraries, libindex) => (
                        <div className='single-skill' key={libindex+libraries.image}>
                            <img src={libraries.image} alt={index}/>
                            <p className='ml'></p>                    
                        </div>
                        ))}                    
                    </Carousel>            
                </div>
            </Fade>
            ))}  
        </StyledSkills>
    
    )
}

export default Skills