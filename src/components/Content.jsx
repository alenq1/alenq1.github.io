import React from 'react'
import { Button,  } from 'react-bootstrap'
import {IoIosArrowDropdownCircle,} from 'react-icons/io'
import styled from 'styled-components'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Experience from './Experience'
import Fade from 'react-reveal/Fade'
import Jump from 'react-reveal/Jump'
import ilust from '../assets/img/displays.svg'

//const img = require('../assets/img/banner.jpg')

const StyledContent = styled.div`


background-repeat: repeat;
background-position: center top;
text-align: center;
height: 100%;



.title {
    padding: 10% 0 0 0;
    color: var(--titles-colors);
    text-shadow: 2px 2px 8px #000;
    
    p {
        font-size: 4.5rem;
        font-weight: 300;
        line-height: 1.2;
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: .15em solid orange; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: .05em; /* Adjust as needed */
        animation: 
            typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;
    }
    
}

.ilust {
    width: 600px;
    height: 500px;
    position: absolute;
    z-index: -1;
    margin: -3em 0em 0em 0em;
}


.showbutton {
    display: flex;
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    background-image: var(--slider-colors);
    width: 20%;

    align-items: center;
    justify-content: center;
    margin: 15% 0%;
    text-shadow: 2px 2px 8px #000;
    a{        
        color: var(--titles-colors);
        text-decoration: none;
    }
    
}

.sections {
    /*max-width: 80%;
    margin-left: auto;
    margin-right: auto;*/

}

.slides {
    background : var(--slider-colors);
    color: var(--titles-colors);
    text-shadow: 2px 2px 8px #000;
    padding: 2rem;

    h3{
        font-size: 6rem;
        font-weight: bold;
        line-height: 1.2;

        }
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}



@media screen and (max-width: 640px) {
    
    .title {

        padding: 35% 0 0 0;

        p {
            font-size: 1.35rem;
            font-weight: 300;
            line-height: 1.2;
        }
        .complement{
            

            }
    }

    .showbutton{
        margin: 35% 0 0 0;
    }
    
    .slides{
        height: 3rem;

        h3{
            font-size: 2rem;
            font-weight: 300;
            line-height: 1.2;
            
        }
    }
}
`
const Content = () => {

    return (
        <StyledContent>            
            <Fade bottom>
                <div className='title'>  
                    <img src={ilust} alt='sdfdf' className='ilust'/>
                        <p >Let`s solve some problems </p>
                        <p className='complement'>with Code</p>                    
                </div>
                <div className='showbutton'>
                    <Jump forever='true'>
                        <a href='#skills'>
                            Show me How                    
                        </a>                                
                    </Jump>
                </div>
            </Fade>
            <div className='sections'>
                <Fade right>    
                    <div className='slides'>                
                        <h3 id='skills'>Skills</h3>                
                    </div>        
                </Fade>
                <Skills/>
            
                <Fade right>
                    <div className='slides'>
                        <h3 id='portfolio'>PortFolio</h3>
                    </div>
                </Fade>
                <Portfolio/>
                
                <Fade right>
                    <div className='slides'>                
                        <h3 id='experience'>Experience</h3>                
                    </div>
                </Fade>                
                <Experience/>
                
                <Fade right>
                    <div className='slides'>
                        <h3 id='contact'>Contact</h3>                
                    </div>
                </Fade>   
                <Contact/>                                
            </div>
        </StyledContent>
    )
}

export default Content