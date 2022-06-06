import React from 'react'
import {contact} from '../../sources/data'
import Fade from 'react-reveal/Fade'
import {StyledContact} from './style';

const Contact = () => {
    return (
        <StyledContact>
            <div className='contact-wrapper' >
                {/* <div className='contact-form'>
                    <form>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname"/>

                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname"/>

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message"></textarea>
                        <button type='sumbit'>Send</button>
                    </form>
                </div> */}
                <div className='contact-icons'>
                        {contact.map((contact, index) => (
                        <Fade bottom key={index}>
                        <a href={contact.link} 
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
            </div>
         </StyledContact>
    )
}

export default Contact
