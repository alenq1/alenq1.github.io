import React from 'react'
import {contact} from '../sources/data'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'


const StyledContact = styled.div`
    
.contact-wrapper {
    display: flex;
    flex-direction: row;
    background: var(--header-bg);
    color: whitesmoke;
}

.contact-form {
    width: 50%;
    font-weight: var(--font-medium);


    form {
        display: flex;
        flex-direction: column;
        margin: 6em auto 3em auto; 
        height: 75%;
        width: 50%;
        background: var(--slider-colors);
        /*border-radius: 20px 40px 20px 0px;*/
        clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 16% 51%, 0% 0%);

    }

    label {
        text-align: left;
        margin: 0em 0em 0em 4em;
    }

    label:first-of-type{
        margin-top: 1.5em;
        margin-left: 2em;
    }

    input, textarea, button {
        margin: 1em 1em 1em 5em;
        width: 12.5em;
        height: 2em;
    }

    input:first-of-type{
        margin-top: 1.5em;
        margin-left: 3em;
    }

    button {
        margin: 1.5em 0em 1em 2.5em;   
        width: 60%;
    }


}

.contact-icons {
    width: 50%;
}

`






const Contact = () => {
    return (
        <StyledContact>
            <div className='contact-wrapper' >
                <div className='contact-form'>
                    <form>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname"/>

                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname"/>

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message"></textarea>
                        <button type='sumbit'>Send</button>
                    </form>
                </div>
                <div className='contact-icons'>
                        {contact.map((contact, index) => (
                        <Fade bottom key={index}>
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
            </div>
         </StyledContact>
    )
}

export default Contact
