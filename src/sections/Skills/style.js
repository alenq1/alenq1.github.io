import styled from 'styled-components'

export const StyledSkills = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 100px 50px 0px 50px;



.cardskill {
    
    
    --text-color: whitesmoke;    
    /* width: 100%; */

    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
    padding: 0px;
    
    margin: 4rem 2em;
    color: var(--text-color);
    /* display: flex;
    justify-content:center; */
    flex-wrap: wrap;
    max-width: 300px;

    .header {
        /* background: red; */
        display: flex;
        text-shadow: 2px 2px 8px #000;
        background: var(--card-header-footer);
        padding: .1rem 0rem;
        opacity: 0.9;
        height: 7.5%;   
        width: 100%;     
    }

    h4 {
        font-weight: var(--font-medium);
        font-size: 1.75rem;
        margin-top: -20px;
    }

    .body{
        /* display: flex; */
        /* flex-wrap: wrap; */
        /* background: green; */
        background: var(--card-background);
        opacity: var(--transparency);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        

        .single-skill {
            margin: 2rem auto;
            padding: 0rem 3rem;
            opacity: 1;
            
            img{
                height: 6.5rem;
                max-width: 200px;        
                transition: all .2s ease-in-out;
                opacity: 1;
                object-fit: contain;
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