import React from 'react'
import { Button,  } from 'react-bootstrap'
import {IoIosArrowDropdownCircle,} from 'react-icons/io'
import styled from 'styled-components'
import Skills, {NewSkills} from './Skills'
import Portfolio, {NewPortfolio} from './Portfolio'
import Contact from './Contact'
import Experience, {NewExperience} from './Experience'
import Fade from 'react-reveal/Fade'
import Jump from 'react-reveal/Jump'


//const img = require('../assets/img/banner.jpg')

const StyledContent = styled.div`


--slider-colors: linear-gradient(to left, #780206, #061161);
--titles-colors: whitesmoke;



background-repeat: repeat;
background-position: center top;
text-align: center;
height: 100%;



.title {
    padding: 20% 0 0 0;
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


.showbutton {
    margin: 15% 0%;
    text-shadow: 2px 2px 8px #000;
    a{        
        color: var(--titles-colors);
        text-decoration: none;
    }
    
}

.sections {
    
}

.slides {
    background : var(--slider-colors);
    color: var(--titles-colors);
    text-shadow: 2px 2px 8px #000;
    padding: 3.5rem;

    h3{
        font-size: 3.5rem;
        font-weight: 300;
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
                        <p >Let`s solve some problems </p>
                        <p className='complement'>with IT</p>                    
                </div>
                <div className='showbutton'>
                    <a href='#skills' style={{marginTop: '10%'}}>
                        <p>
                        <Jump forever='true'>                            
                            <IoIosArrowDropdownCircle size='4em'/>
                        </Jump>   
                            Show me How 
                        </p>
                    </a>                                
                </div>
            </Fade>
            <div className='sections'>
                <Fade right>    
                    <div className='slides'>                
                        <h3 id='skills'>Skills</h3>                
                    </div>        
                </Fade>
                <NewSkills/>
            
                <Fade right>
                    <div className='slides'>
                        <h3 id='portfolio'>PortFolio</h3>
                    </div>
                </Fade>
                <NewPortfolio/>
                
                <Fade right>
                    <div className='slides'>                
                        <h3 id='experience'>Experience</h3>                
                    </div>
                </Fade>                
                <NewExperience/>
                
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