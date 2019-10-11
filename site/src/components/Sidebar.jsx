import React from 'react'
import {Nav, Button} from 'react-bootstrap'
import {FaThList, FaWrench, FaBriefcase, FaUserFriends} from 'react-icons/fa'
import Fade from 'react-reveal/Fade'


const Sidebar = () => {


    return (
        <>
            <Fade left>
                <div style={{
                    position: '-webkit-sticky',
                    position: 'sticky',
                    top: '20px',

    	        }}>
                <center>
                 <img src={require('../assets/img/terminal2.gif')} alt="Avatar" 
                    width='100' height='100'
                    style={{borderRadius: '50%',
                    background: 'white'
                    }}/>
                 <h3 className="pt-4 lead">Alejandro Castellanos</h3>
            
                 <h4 className='pt-4 lead'>IT Problem Solver</h4>
    
            
                    <Nav defaultActiveKey="#" className="flex-sm-column pt-4" id='sidemenu'>
                        <Button  eventKey="link-1" href='#skills' variant='outline-light' className='mt-lg-4 mt-md-4'>
                            <FaWrench className='mr-lg-5 mr-md-5' />Skills
                        </Button>
                        <Button eventKey="link-2" href='#portfolio' variant='outline-light' className='mt-lg-4 mt-md-4'>
                            <FaBriefcase className='mr-lg-5 mr-md-5' />Portfolio</Button>
                        <Button eventKey="link-2" href='#experience' variant='outline-light' className='mt-lg-4 mt-md-4'>
                            <FaThList className='mr-lg-5 mr-md-5' />Experience</Button>
                        <Button eventKey="link-2" href='#contact' variant='outline-light' className='mt-lg-4 mt-md-4'>
                            <FaUserFriends className='mr-lg-5 mr-md-5' />Contact</Button>
                    </Nav>
                </center>
                </div>
            </Fade>
        </> 
    )
}

export default Sidebar
