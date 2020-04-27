import React from 'react'
import { Card } from 'react-bootstrap'
import {experience} from '../sources/data'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'


const Experience = () => {
    return (
        <div>
        <Fade bottom>
        
            <Card className='m-4'>
                <Card.Header>
                    <h4 className='lead'>{experience.title}</h4>
                </Card.Header>
                <Card.Body>
                    <div className='row container-fluid'>
                    {experience.types.map((items, index)=> (
                       <div className='m-2 mt-3 col-lg-5 col-md-6 col-sm-12' style={{textAlign: 'left'}}> 
                       <h5 className='lead mt-4 mb-4' >{items.name}</h5>
                       {items.description.map((item, index) => (

                        <li className="mt-1">{item}</li>
                       ))}
                        
                        </div>
                    ))}
                    </div>
                </Card.Body>


            </Card>
            
        </Fade>
        </div>
    )
}

export default Experience



const StyledExperience = styled.div`

.card-experience {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 0px;
    text-align: left;
    margin: 6rem 1.8rem;
    color:  whitesmoke;
    
    

    .header {
        display: block;
        background: var(--card-header-footer);
        padding: 1rem 0rem;
        opacity: 0.9;
        text-align: center;
    }

    .body{
        display: flex;
        flex-wrap: wrap;
        background: var(--card-background);
        opacity: 0.9;
        width: 100%;
        
        .experience-list {
            margin: 2.5rem 1.5rem; 
            text-align: left;            
            display: flex;
            flex-wrap: wrap;
            
            div{
                width: 50%;
            }

            h5{
                margin-top: 1.5rem;
            }

            li{
                margin: 1rem 2rem;
            }

        }
        
        }
        
    }

  .card-experience:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }


@media screen and (max-width: 640px) {
    
    .card-experience {

        margin: 4rem 1rem;

    .header {
        padding: 0.5rem 0rem;
    }

    .body {
        
        background-color: whitesmoke;
        width: 100%;

        .experience-list {
            display: block;
            text-align: left;
            margin: 1rem .5rem; 

            div{
                width: 100%;
            }

            h5{
                margin: 2.5rem 1rem; 
            }

            li{
                margin: 1rem;
            }
        }       
    }
}

}



`




export const NewExperience = () => {
    return (
        <StyledExperience>
        <Fade bottom>
        
            <div className='card-experience'>
                <div className='header'>
                    <h4>{experience.title}</h4>
                </div>
                <div className='body'>
                    <div className='experience-list'>
                    {experience.types.map((items, index)=> (
                    <div> 
                       <h5 className='' >{items.name}</h5>
                       {items.description.map((item, index) => (

                        <li className="">{item}</li>
                       ))}
                        
                    </div>
                    ))}
                    </div>
                </div>


            </div>
            
        </Fade>
        </StyledExperience>
    )
}


