import React from 'react'
import {Card, } from 'react-bootstrap'
import {skills} from '../sources/data'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'


const StyledSkills = styled.div`

.cardskill {
    
    
    --text-color: whitesmoke;


    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 0px;
    text-align: center;
    margin: 6rem 1.8rem;
    color: var(--text-color);

    .header {
        display: block;
        background: var(--card-header-footer);
        padding: 1rem 0rem;
        opacity: 0.9;
        
    }

    h4 {
        font-weight: var(--font-medium);
    }

    .body{
        display: flex;
        flex-wrap: wrap;
        background: var(--card-background);
        opacity: var(--transparency);
        width: 100%;
        

        .single-skill {
            margin: 2rem auto;
            padding: 0rem 1rem;
            opacity: 1;
            
            img{
                height: 6.5rem;
                max-width: auto;        
                transition: all .2s ease-in-out;
                opacity: 1;
            }

            img:hover{
                transform: scale(1.1);
            }
        }
        
    }

  }
  .cardskill:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }


@media screen and (max-width: 640px) {
    
    .cardskill {

        margin: 4rem 1rem;

    .header {
        padding: 0.5rem 0rem;
    }

    .body{
        background-color: whitesmoke;
        

        .single-skill {
            padding: 0rem .5rem;
            margin: 1.5rem auto;
            align-content: center;
            
            img{
                height: 4.5rem;
                max-width: auto;        
                transition: all .2s ease-in-out;
            }

            img:hover{
                transform: scale(1.1);
            }
        }
        
    }

    }

}

`
const Skills = () => {
    return (
    
        <StyledSkills>    
            {skills.map( (skills, index) => (
            <Fade bottom key={index}>
                <div className='cardskill' >
                    <div className='header'>
                        <h4>{skills.type}</h4>
                    </div>
                    <div className='body'>
                        {skills.libraries.map( (libraries, libindex) => (
                        <div className='single-skill' key={libindex}>
                            <img src={libraries.image} alt={index}/>
                            <p className='ml'></p>                    
                        </div>
                        ))}                    
                    </div>            
                </div>
            </Fade>
            ))}  
        </StyledSkills>
    
    )
}

export default Skills