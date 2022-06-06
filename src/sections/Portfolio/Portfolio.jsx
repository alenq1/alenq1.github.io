import React, {useState } from 'react'
import {portfolio} from '../../sources/data'
import PortCarousel from '../../components/PortCarousel/PortCarousel'
import { FaAngleDoubleDown,
    } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import {StyledPortfolio} from './style'
import { v4 as uuidv4 } from "uuid";


const Portfolio = () => {

    // const [toggle, setToggle] = useState(false)
    // const [isHover, setHover] = useState(false)
    const [show, setShow] = useState(false)
    // const [index, showIndex] = useState(0)
     //const CustomButton = () => 

    return (
        <StyledPortfolio>                
                                                    
                        {portfolio.map( (detail, index) => (                 
                        <Fade bottom key={uuidv4()}>
                        <div className='card-portfolio'>
                            <div className='header'>
                                <span className='project-title'>{detail.project}</span>
                                <span className='project-links'>{detail.repo}</span>                 
                            </div>
                            <div className='body' key={uuidv4()}>                                
                                <div className='projects'>
                                    <div className='slide-show'>
                                        <PortCarousel content={detail}/>
                                    </div>
                                    <div className='description'>
                                            <Fade bottom >
                                                {detail.description.map((list, desc_index) => (                 
                                                    <li key={uuidv4()}>{list}</li>                 
                                                ))}    
                                            </Fade>
                                    </div>
                                </div>
                            </div>   
                            <div className='footer' key={uuidv4()}>
                                <span>Stack Used</span>
                                <span>
                                {detail.stack.map((stack) => ( 
                                    stack
                                ))}
                                </span>
                            </div>  
                        </div>
                        </Fade>    
                        ))}
                    
            </StyledPortfolio>
        )
}

export default Portfolio