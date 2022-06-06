import React from 'react'
import {experience} from '../../sources/data'
import Fade from 'react-reveal/Fade'
import {StyledExperience} from './style'


export const Experience = () => {
    return (
        <StyledExperience>
        <Fade bottom>
        
            <div className='card-experience'>
                <div className='header'>
                    <h4>{experience.title}</h4>
                </div>
                <div className='body'>
                    <div className='experience-list'>
                    {experience.types.map((items, index)=> (
                    <div key={index}> 
                       <h5 className='' >{items.name}</h5>
                       {items.description.map((item, index) => (

                        <li key={index}>{item}</li>
                       ))}
                        
                    </div>
                    ))}
                    </div>
                </div>


            </div>
            
        </Fade>
        </StyledExperience>
    )
}


export default Experience