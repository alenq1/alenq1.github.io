import React, {useState, useEffect} from 'react';
import {FaThList, FaWrench, FaBriefcase, FaUserFriends} from 'react-icons/fa'
import {StyledHeader} from './style'
import Fade from 'react-reveal/Fade'
import TextLoop from 'react-text-loop';


const Header = () => {
    
    return (
    <StyledHeader>
    	<Fade left> 
                <div className="header-text">
                    {/*<img src={require('../assets/img/terminal2.gif')} alt="Avatar" />*/}
                    <div className='logo'>
                        <div className='console'>
                            <div className='titlebar'>
                            </div>
                            <h5 className='prompt'>
                                <div className='cursor'>_</div>
                                <div className="console-msg">                                    
                                </div>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className='header-text-loop'>
                    <TextLoop interval={5000}>
                        <h3>Alejandro Castellanos</h3>
                        <h3>FullStack Developer</h3>
                        <h3>IT Problem Solver</h3>
                    </TextLoop>
                </div>    
                <ul className='buttons'>
                    <a href='#skills'>
                    	<li>
                        	<FaWrench className='btn-icons' />
                            	<span>Skills</span>
                        </li>
                    </a>
                    <a href='#portfolio'>
                    	<li>
                        <FaBriefcase className='btn-icons' />
                        <span>Portfolio</span>
                        </li>
                    </a>
                    <a href='#experience'>
                    	<li>
                        <FaThList className='btn-icons' />
                        <span>Experience</span>
                        </li>
                    </a>
                    <a href='#contact'>
                    	<li>
                        <FaUserFriends className='btn-icons' />
                        <span>Contact</span>
                        </li>
                    </a>    
                </ul>        
            </Fade>
    </StyledHeader>
  )
}

export default Header;