import React from 'react'

import {StyledSideBar} from './style'
import {FaThList, FaWrench, FaBriefcase, FaUserFriends} from 'react-icons/fa'
import Fade from 'react-reveal/Fade'

const Sidebar = () => {
    return (
        
        <StyledSideBar>
            <Fade left> 
                <div className="headertext">
                    {/*<img src={require('../assets/img/terminal2.gif')} alt="Avatar" />*/}
                    <div className='logo'>
                        <div className='console'>
                            <div className='titlebar'>
                            </div>
                            <h5 className='prompt'>>
                                <h5 className='cursor'>_</h5>
                                <div className="console-msg">
                                    hello
                                </div>
                            </h5>
                        </div>
                    </div>
                    <div className="slideset3">
                        <h3 className='item-1'>Alejandro Castellanos</h3>
                        <h4 className='item-2'>Web Developer &amp;</h4>                            
                        <h4 className='item-2'>IT Problem Solver</h4>  
                    </div>
                </div>    
                <div className='buttons'>
                    <a  eventKey="link-1" href='#skills' variant='outline-light'>
                        <FaWrench className='mr-lg-5 mr-md-5' />
                            <span>Skills</span>
                    </a>
                    <a eventKey="link-2" href='#portfolio' variant='outline-light'>
                        <FaBriefcase className='mr-lg-5 mr-md-5' />
                        <span>Portfolio</span>
                    </a>
                    <a eventKey="link-2" href='#experience' variant='outline-light'>
                        <FaThList className='mr-lg-5 mr-md-5' />
                        <span>Experience</span>
                    </a>
                    <a href='#contact' variant='outline-light'>
                        <FaUserFriends className='mr-lg-5 mr-md-5' />
                        <span>Contact</span>
                    </a>    
                </div>        
            </Fade>
        </StyledSideBar>
    )
}

export default Sidebar