import React from 'react'
import {StyledContent} from './style'
import Skills from '../../sections/Skills/Skills'
import Portfolio from '../../sections/Portfolio/Portfolio'
import Contact from '../../sections/Contact/Contact'
import Experience from '../../sections/Experience/Experience'
import Fade from 'react-reveal/Fade'
import Jump from 'react-reveal/Jump'
import Typewriter from 'typewriter-effect';
import {ReactComponent as Ilust} from '../../assets/img/displays.svg'


const Content = () => {

    return (
        <StyledContent>            
            <Fade bottom>
                <div className='content-title'>  
                <h1><Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Lets solve problems')                                                        
                            .typeString(' with code')                            
                            .start();
                        }}
                    />
                </h1>
                    <Ilust fill='red' className='ilust'/>
                </div>
                <div className='showbutton'>
                    {/* <Jump forever='true'>
                        <a href='#skills'>
                            Show me How                    
                        </a>                                
                    </Jump> */}
                </div>
            </Fade>
            <div className='sections'>
                <Fade right>    
                    <h3 id='skills' className='slides-left'>Skills</h3>
                </Fade>
                <Skills/>            
                <Fade right>
                    <h3 id='portfolio' className='slides-right' >PortFolio</h3>
                </Fade>
                <Portfolio/>
                
                <Fade right>
                    <h3 id='experience' className='slides-left'>Experience</h3>                    
                </Fade>                
                <Experience/>
                
                <Fade right>
                    <h3 id='contact' className='slides-right contact'>Contact</h3>                    
                </Fade>   
                <Contact/>                                
            </div>
        </StyledContent>
    )
}

export default Content