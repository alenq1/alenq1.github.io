import React from 'react'
import { Button,  } from 'react-bootstrap'
import {FaAngleDoubleDown,} from 'react-icons/fa'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Experience from './Experience'
import Fade from 'react-reveal/Fade'
import Jump from 'react-reveal/Jump'


const styletitle = {

    background : 'linear-gradient(to left, #780206, #061161)',
    color: 'white',
}

const img = require('../assets/img/banner.jpg')

const Content = () => {

    return (
        <div className='text-center' style={{backgroundImage: `linear-gradient(to bottom, rgba(30, 35, 59, 0.52), rgba(0, 0, 0, 0.73)),url(${img})`}}>
            
            <div className='' style={{ height: '650px', alignContent: 'center',
            backgroundImage: `linear-gradient(to bottom, rgba(30, 35, 59, 0.52), rgba(0, 0, 0, 0.73)),
				url(${img})`,
            color: 'whitesmoke',
            
            }}>
                <Fade bottom>
                <div style={{paddingTop: '15%'}}>                
                    <p className='display-3'>Let`s solve some problems</p>
                    <p className='display-4'>with IT</p>
                </div>
                <Button href='#skills' variant='outline-light' style={{marginTop: '10%'}}>
                    <p>
                    <Jump forever='true'>
                        <FaAngleDoubleDown size='3em'/>
                    </Jump>   
                        Show me How 
                    </p>
                </Button>
                
                </Fade>
                </div>
            
                <div data-spy='scroll' data-target='#sidemenu' data-offset='0'>
            
                <Fade right>
                <div style={styletitle}>
                
                    <h1 className='p-5 display-4' id='skills'>Skills</h1>
                
                </div>        
                </Fade>
                <Skills/>
            
                <Fade right>
                <div style={styletitle}>
                    
                    <h3 className='p-5 display-4' id='portfolio'>PortFolio</h3>
                    
                </div>
                </Fade>
            
                <Portfolio/>
                
                <Fade right>
                <div style={styletitle}>
                
                    <h3 className='mt-5 p-5 display-4' id='experience'>Experience</h3>
                
                </div>
                </Fade>
                
                <Experience/>
                
                <Fade right>
                <div style={styletitle}>
                
                    <h3 className="mt-5 p-5 display-4" id='contact'>Contact</h3>
                
                </div>
                </Fade>   
                <Contact/>
                
                
                </div>
        </div>
    )
}

export default Content
