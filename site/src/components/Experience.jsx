import React from 'react'
import { Card } from 'react-bootstrap'
import {experience} from '../sources/data'
import Fade from 'react-reveal/Fade'


const Experience = () => {
    return (
        <div>
        <Fade bottom>
        
            <Card className='m-4'>
                <Card.Header>
                    <h4 className='lead'>{experience.title}</h4>
                </Card.Header>
                <Card.Body>
                    <div className='row container-fluid'>
                    {experience.types.map((items, index)=> (
                       <div className='m-2 mt-3 col-lg-5 col-md-6 col-sm-12' style={{textAlign: 'left'}}> 
                       <h5 className='lead mt-4 mb-4' >{items.name}</h5>
                       {items.description.map((item, index) => (

                        <li className="mt-1">{item}</li>
                       ))}
                        
                        </div>
                    ))}
                    </div>
                </Card.Body>


            </Card>
            
        </Fade>
        </div>
    )
}

export default Experience
