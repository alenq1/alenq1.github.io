import styled from 'styled-components'

export const StyledContent = styled.div`


background-repeat: repeat;
background-position: center top;
text-align: center;
height: 100%;



.content-title {
    /* padding: 10% 0 0 0; */
    color: var(--titles-colors);
    text-shadow: 2px 2px 8px #000;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-top: 70px;

    .call-to-action{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;

    
        h1 {        
            margin-top: 0px;
            width: 80%;
            word-wrap: wrap;
            font-size: 4em;
            font-weight: 300;
            line-height: 1.2;
        }
        a{
            width: 30%;
            color: var(--titles-colors);
            cursor: pointer;
            text-shadow: 2px 2px 8px #000;
            font-weight: 800;
            text-decoration-line: none;
            background: var(--slider-colors);
            padding: 0.75em;
            border-radius: 10px;
            border: 0;

            &:hover{
                background-blend-mode:"darken";
            }
        }


    }
    
    
    
}

.ilust {
    width: 40%;
    height: 40%;
    /* position: absolute; */
    /* z-index: -1; */
    bottom: 100px;
    right: 0;
    
    svg{
        fill:white;
    }
}


.showbutton {    
    display: none;
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    background-image: var(--slider-colors);
    width: 20%;

    align-items: center;
    justify-content: center;
    margin: 15% 0%;
    text-shadow: 2px 2px 8px #000;
    a{        
        color: var(--titles-colors);
        text-decoration: none;
    }
    
}

.sections {
    /*max-width: 80%;
    margin-left: auto;
    margin-right: auto;*/

}


.slides-left {
    font-size: 5rem;
    text-align:left;
    color: var(--titles-colors);
    text-shadow: 2px 2px 8px #000;

    &:after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 40%;
        padding: 1rem;
        z-index: -1;
        background : var(--slider-colors);
        /* background-color: rgba(255,255,255,0.1); */
        transition: all 0.3s;
    }


}

.slides-right{
    /* background:red; */
    font-size: 5rem;
    text-align: right;
    /* position: absolute; */    
    /* margin-bottom: 100px; */
    color: var(--titles-colors);
    text-shadow: 2px 2px 8px #000;
    /* padding: 1rem; */

    &:after{
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 40%;
        padding: 1rem;
        z-index: -1;
        background : var(--slider-colors);
        /* background-color: rgba(255,255,255,0.1); */
        transition: all 0.3s;
    }

    
}
.contact{
        margin-bottom: 0;    
    }

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: var(--slider-colors); }
}



@media screen and (max-width: 640px) {
    
    .content-title {

        padding: 0;
        flex-direction: column;
        width: 100%;
        /* background: green; */

        
        .call-to-action{
            
            width: 90%;
            h1 {
                margin-top: 0px;
                width: 100%;
                font-size: 2.5rem;
                font-weight: 300;
                line-height: 1.2;
            }
            a{
                width: 70%;
            }
            
            
        }

        .ilust {
            /* display: none; */
            width: 50%;
            height: 50%;
            position: absolute;
            bottom: 0;
            z-index: -1;
            display: flex;
            justify-content: center;
            align-self: center;
            margin-bottom: 0px;
        }
    }

    

    .showbutton{
        display: none;
        margin: 35% 0 0 0;
    }

    .slides-left{
    /* background:red; */
    font-size: 3.5rem;
    text-align: left;
    margin-left: 20px;
    /* position: absolute; */    
    /* margin-bottom: 100px; */
    color: var(--titles-colors);
    text-shadow: 2px 2px 8px #000;
    /* padding: 1rem; */

        &:after{
            content: '';
            position: absolute;
            bottom: 0;
            left: -20px;            
            width: 40%;
            padding: 1rem;
            z-index: -1;
            background : var(--slider-colors);
            /* background-color: rgba(255,255,255,0.1); */
            transition: all 0.3s;
        }
    }

    .slides-right{
    /* background:red; */
    font-size: 3.5rem;
    /* padding: 1rem; */

        &:after{
            /* content: ''; */
            /* position: absolute; */
            /* bottom: 0; */
            /* left: -20px;             */
            /* width: 40%; */
            padding: .75rem;
            /* z-index: -1; */
            /* background : var(--slider-colors); */
            /* background-color: rgba(255,255,255,0.1);
            transition: all 0.3s; */
        }
    }


    
    
}
`