import React from 'react'
import {contact} from '../sources/data'
import Fade from 'react-reveal/Fade'

const Contact = () => {
    return (
        <>
        <div className='row justify-content-center'>
                {contact.map((contact, index) => (
                <Fade bottom>
                <a href={contact.link} className='m-5' 
                >
                <h1
                style={{color: 'whitesmoke',
                width: '300',
                height: '300'
                }}
                >{contact.image}</h1>
                </a>
                </Fade>
                ))}
                
                </div>
            
        </>
    )
}

export default Contact
