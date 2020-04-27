import React from 'react'
import {Nav, Button} from 'react-bootstrap'
import Buttons from '../components/Buttons'
import {FaThList, FaWrench, FaBriefcase, FaUserFriends} from 'react-icons/fa'
import styled, {keyframes} from 'styled-components'
import Fade from 'react-reveal/Fade'


const StyledSideBar = styled.div`

position: -webkit-sticky;
position: sticky;
top: 10%;

.slideset3 {height: 3em; position: relative;
  overflow: hidden}
.slideset3 > * {height: 100%; box-sizing: border-box;
  overflow: hidden}

.slideset3 > *:first-child {
  animation: 12s autoplay3 infinite ease-in-out}
@keyframes autoplay3 {
  0% {margin-top: 2em}
  4% {margin-top: 0em}
  31% {margin-top: 0em}
  35% {margin-top: -2em}
  64% {margin-top: -2em}
  68% {margin-top: -4em}
  96% {margin-top: -4em}
  100% {margin-top: -6em}
}

img {
    display: block;
    width: 30%;
    height: 35%;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    
}

h3, h4 {
    margin-top: 1rem;
    text-align: center;
}

.buttons {

    display: block;
    width: 100%;
    padding: 3rem;
}

.buttons a{
    margin-top: 2rem;
    width: 100%;
    color: white;
	box-shadow: 3px 4px 0px 0px black;
	background-image: linear-gradient(45deg, #780206 0%, #780206 55%, #061161 90%);
    background-position: 100% 0;
    background-size: 200% 200%;
	border-radius: 18px;
	border: 1px solid linear-gradient(to left, #780206, #061161);
	display: inline-block;
	cursor: pointer;
	color:#ffffff;
	padding:7px 25px;
	text-decoration:none;
	text-shadow:0px 1px 0px darkgrey;
    /*box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);*/
    transition: all 0.5s ease;
    
}
.buttons a:hover{
    box-shadow: 0 0px 0px 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
    
}

@keyframes gradient {
  50% {
    background-position: 100% 0;
  }
}


/*========  Phone ===========*/
@media (max-width: 640px) {

    top: 3%;
    width: 100vw;

    .slideset3 {
        height: 1em; 
        position: relative;
        overflow: hidden
    }
    
        .slideset3 > * {
        height: 100%; 
        box-sizing: border-box;
        overflow: hidden
    }


    .headertext {
        display: flex;

        img {
            display: block;
            width: 15%;
            height: 15%;
            border-radius: 50%;
            margin: auto auto auto 10px

}
        
        h3 {
            margin: 1.0rem 4.5rem 0rem 0rem;
        }
    }

h3, h4 {

    text-align: center;
    font-size: 1rem;
}

.buttons {

    display: block;
    width: 80%;
    margin: 0rem auto 1rem auto;
    padding: 0rem;
}

.buttons a{
    margin: 0.5rem 0.3rem;
    width: 20%;
}

.buttons span {
    display: none;
}




}

`


const Sidebar = () => {
    return (
        
        <StyledSideBar>
            <Fade left> 
                <div className="headertext">
                    <img src={require('../assets/img/terminal2.gif')} alt="Avatar" />
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