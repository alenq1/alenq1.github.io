import styled from 'styled-components'

export const StyledExperience = styled.div`

.card-experience {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 0px;
    
    margin: 10rem 1.8rem 6rem;
    color:  whitesmoke;
    
    

    .header {
        display: flex;
        justify-content: center;
        background: var(--card-header-footer);
        padding: .1rem 0rem;
        opacity: 0.9;
        height: 7.5%;   
        width: 100%; 
        

        h4 {
        font-weight: var(--font-medium);
        font-size: 2.2rem;
        margin: 0;

        text-align: center;   
    }
    }

    .body{
        text-align: left;
        display: flex;
        flex-wrap: wrap;
        background: var(--card-background);
        /*opacity: 0.9;*/
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
        padding: 0rem;
        height: 10%;
        text-shadow: 2px 2px 8px #000;
        

        h4{
            font-size: 1.5rem;
        }
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
                font-size: 1.5rem;
            }

            li{
                margin: 1rem;
            }
        }       
    }
}

}



`