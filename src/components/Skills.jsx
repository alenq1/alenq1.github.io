import React from 'react'
import {Card, } from 'react-bootstrap'
import {skills} from '../sources/data'
import Fade from 'react-reveal/Fade'

const Skills = () => {
    return (
        <>
        <div className=''>
            
            {skills.map( (skills, index) => (
            <Fade bottom>
            <Card className='m-4'>
                <Card.Header>
                <h4 className='lead'>{skills.type}</h4>
                </Card.Header>
                <Card.Body className="row">
                    {skills.libraries.map( (libraries, index) => (
                    <div className='ml-lg-4 ml-md-3 mt-sm-3 p-sm-2 col-lg-2 col-md-4 col-sm-12'>
                        
                    <img src={libraries.image} height='115' alt={index}/>
                    <p className='ml'></p>
                    
                    </div>
                    ))}
                    
                </Card.Body>
            
            </Card>
            </Fade>
            ))}  


        </div>
        
        
        </>
    )
}

export default Skills
