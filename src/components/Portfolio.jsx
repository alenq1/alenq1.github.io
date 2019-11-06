import React, {useState } from 'react'
import {portfolio} from '../sources/data'
import { Button, Card, Accordion  } from 'react-bootstrap'
import PortCarousel from './PortCarousel'
import { FaAngleDoubleDown,
    } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'




const Portfolio = () => {

   // const [toggle, setToggle] = useState(false)
   // const [isHover, setHover] = useState(false)
    const [show, setShow] = useState(false)
   // const [index, showIndex] = useState(0)


    //const CustomButton = () => 

            
    return (
        <>
                <Fade bottom>
                <div className="row container">
                

                
                {portfolio.map( (detail, index) => (
                
                <Card className='m-4 col-lg-5 col-md-12 col-sm-12' key={index} 
                style={{                 }}>
                <Card.Header>
                    <h6 className='lead'>{detail.project}{detail.repo}</h6>
                
                </Card.Header>
                <Card.Body>
                <PortCarousel content={detail} key={index}/>
                
                <div>
                
                </div>
                <div>
                
                <Accordion>
                <Accordion.Toggle as={Button} eventKey={index} className="m-3">
                <FaAngleDoubleDown size='2em' onclick={()=> setShow(!show)}/> Details
                </Accordion.Toggle>
                
                
                <Accordion.Collapse eventKey={index}>
                <div>
                <Fade bottom >
                {detail.description.map((list, index) => (
                
                <li key={index}>{list}</li>
                
                ))}    
                </Fade>
                </div>
                
                </Accordion.Collapse>    
                </Accordion>
                </div>
                <Card.Footer>
                    Stack Used
                    {detail.stack.map((stack, index) => (

                        stack
                    ))}
                </Card.Footer>  
                </Card.Body>

                </Card>
                
                ))}
                
                
                </div>
                </Fade>
        </>
    )
}

export default Portfolio
