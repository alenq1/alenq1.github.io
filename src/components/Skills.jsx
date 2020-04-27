import React from 'react'
import {Card, } from 'react-bootstrap'
import {skills} from '../sources/data'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

const Skills = () => {
    return (
        <>
        <div className=''>
            
            {skills.map( (skills, index) => (
            <Fade bottom>
            <Card className='m-4'>
                <Card.Header>
                <h4 className='lead'>{skills.type}</h4>
                </Card.Header>
                <Card.Body className="row">
                    {skills.libraries.map( (libraries, index) => (
                    <div className='ml-lg-4 ml-md-3 mt-sm-3 p-sm-2 col-lg-2 col-md-4 col-sm-12'>
                        
                    <img src={libraries.image} height='115' alt={index}/>
                    <p className='ml'></p>
                    
                    </div>
                    ))}                    
                </Card.Body>            
            </Card>
            </Fade>
            ))}  
        </div>
    </>
    )
}

export default Skills


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


export const NewSkills = () => {
    return (
    
        <StyledSkills>    
            {skills.map( (skills, index) => (
            <Fade bottom>
                <div className='cardskill'>
                    <div className='header'>
                        <h4>{skills.type}</h4>
                    </div>
                    <div className='body'>
                        {skills.libraries.map( (libraries, index) => (
                        <div className='single-skill'>
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