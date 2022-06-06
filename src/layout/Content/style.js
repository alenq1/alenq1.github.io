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
    
    h1 {
        /* font-size: 4rem;
        font-weight: 300;
        line-height: 1.2;
        /* overflow: hidden; Ensures the content is not revealed until the animation */
        /* border-right: .15em solid orange; The typwriter cursor */
        /* white-space: nowrap; Keeps the content on a single line */
        /* word-wrap: break-word; */
        /* margin: 0 auto; Gives that scrolling effect as the typing happens */
        /* letter-spacing: .05em; Adjust as needed */
        /* animation:  */
            /* typing 3.5s steps(40, end), */
            /* blink-caret .75s step-end infinite; */
            /* typing 4s steps(44) 1s 1 normal both, */
            /* blinkTextCursor 500ms steps(44) infinite normal; */ 
            margin-top: 0px;
            width: 50%;
            /* animation: typing 4s steps(22), blink-caret .5s step-end infinite alternate; */
            /* white-space: nowrap; */
            word-wrap: wrap;
            /* overflow: hidden; */
            /* border-right: 3px solid;             */
            font-size: 4em;
            font-weight: 300;
            line-height: 1.2;
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
        
        /* background: green; */

        h1 {
            width: 90%;
            font-size: 2.5rem;
            font-weight: 300;
            line-height: 1.2;
        }
        .complement{
            

            }
    }

    .ilust {
        /* display: none; */
        width: 50%;
        height: 50%;
        position: absolute;
        z-index: -1;
        display: flex;
        justify-content: center;
        align-self: center;
        margin-top: 150px;

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