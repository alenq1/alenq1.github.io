import styled from 'styled-components'

export const StyledPortfolio = styled.div `

    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100% !important;
    margin-top: 100px;
    flex-wrap: wrap;
    

.card-portfolio {
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
    padding: 0px;
    text-align: left;
    margin: 1rem 1.8rem 1rem 1rem;
    width: 40%;

    .header, .footer {
        display: flex;
        justify-content: space-between;
        background: var(--card-header-footer);
        color: whitesmoke;
        font-size: 2.2rem;


        a{
            color: whitesmoke;
        }
    }

    .header{
        
        padding: 0rem;
        height: 2.5%;
        opacity: 0.9;
        text-align: right;        
        font-weight: var(--font-medium);
        position: relative;

        .project-title{
            display: flex;
            text-shadow: 2px 2px 8px #000;
            justify-content:center;
            position: absolute;
            left:0;
            margin-top: -23px;
        }
        .project-links{
            display: flex;            
            justify-content:center;
            position: absolute;
            right:0;
            margin-top: -50px;
        }
    }
    .footer {

    }


    .body{
        display: flex;
        flex-wrap: wrap;
        background: var(--card-background);
        color: whitesmoke;
        
        width: 100%;
        height: 65%;
        overflow: scroll;
        
        .projects {
            margin: 2.5rem 1.5rem; 
            text-align: left;            
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            
            
            .slide-show{
                /* width: 300px;
                height: 200px; */
                
                img{
                    /* max-width: 300px; */
                    /* width: 300px;
                    height:250px; */
                    object-fit: cover;
                }
            }

            .description {
                width: auto;
            }

            h5{
                margin-top: 1.5rem;
            }

            li{
                margin: 1rem 2rem;
            }

        }
        
        }
        
        .footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            span:first-child {
                margin-left:1rem;
                
            }
            span:last-child {
                display:flex;
                justify-content: space-between;
                margin-right: 1rem;
                font-size: 0.75rem;
            }
        }
    }

@media screen and (max-width: 640px) {
    
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .card-portfolio {

        width: 80%;
        margin: 4rem 1rem;

    .header, .footer {
        padding: 0.75rem 0rem;
    }

    .header{
                
        .project-title{
            font-size: 1.5rem;
            
            display: flex;
            text-shadow: 2px 2px 8px #000;
            justify-content:space-between;
            position: absolute;
            left:0;
            margin-top: -23px;
        }
        .project-links{
            display: flex;            
            justify-content:space-evenly;
            position: absolute;
            right:0;
            margin-top: -40px;  
            word-break: break-word;
            svg{
                width: 65%;
                height: 65%
            }
        }
    }



    .body {
        
        width: 100%;

        .projects {
             
            width: 100%;
            display: flex;
            justify-content: center;
            
            .slide-show{
                width: 85%;
                display: none;
            }

            .description {
                width: 100%;
            }

            h5{
                margin-top: 1.5rem;
            }

            li{
                margin: 1rem 2rem 1rem 0rem;
                text-align: center;
            }
        }       
    }

    .footer {
            display: flex;
            justify-content: space-between;
            span:first-child {
                margin-left: 1rem;
                font-size: 1rem;
            }
            span:last-child {
                margin-right: 1rem;
                font-size: 0.6rem;
            }
        }

}

}
`
