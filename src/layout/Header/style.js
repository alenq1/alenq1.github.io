import styled, {keyframes} from 'styled-components'

export const StyledHeader = styled.header`

position: fixed;

color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
background-image: var(--header-bg);
height: 75px;
width: 100%;
/* filter: drop-shadow(-1px 6px 3px rgba(0, 0, 0, 0.5)); */
z-index: 3;



.logo {
    display: flex;    
    height: calc(2 * 40px);
    width: calc(2 * 50px);
    background-image: var(--header-color);
    /*background-image: linear-gradient(307deg, transparent 0%, transparent 10%,rgba(190, 190, 190,0.04) 10%, rgba(190, 190, 190,0.04) 64%,transparent 64%, transparent 100%),linear-gradient(118deg, transparent 0%, transparent 11%,rgba(190, 190, 190,0.04) 11%, rgba(190, 190, 190,0.04) 31%,transparent 31%, transparent 100%),linear-gradient(73deg, transparent 0%, transparent 22%,rgba(190, 190, 190,0.04) 22%, rgba(190, 190, 190,0.04) 90%,transparent 90%, transparent 100%),linear-gradient(156deg, transparent 0%, transparent 51%,rgba(190, 190, 190,0.04) 51%, rgba(190, 190, 190,0.04) 97%,transparent 97%, transparent 100%),linear-gradient(90deg, rgb(15,28,82),rgb(15,28,82));*/
    align-items: center;
    justify-content: center;
    margin: 0em 1em;
    position: relative;
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 16% 51%, 0% 0%);

}


.console {
    width: calc(2 * 25px);
    height: calc(2 * 20px);
    background-image: linear-gradient(45deg, rgba(13, 13, 13,0.04) 0%, rgba(13, 13, 13,0.04) 36%,rgba(108, 108, 108,0.04) 36%, rgba(108, 108, 108,0.04) 76%,rgba(202, 202, 202,0.04) 76%, rgba(202, 202, 202,0.04) 100%),linear-gradient(0deg, rgba(13, 13, 13,0.04) 0%, rgba(13, 13, 13,0.04) 28%,rgba(108, 108, 108,0.04) 28%, rgba(108, 108, 108,0.04) 39%,rgba(202, 202, 202,0.04) 39%, rgba(202, 202, 202,0.04) 100%),linear-gradient(135deg, rgba(13, 13, 13,0.04) 0%, rgba(13, 13, 13,0.04) 56%,rgba(108, 108, 108,0.04) 56%, rgba(108, 108, 108,0.04) 97%,rgba(202, 202, 202,0.04) 97%, rgba(202, 202, 202,0.04) 100%),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0));
    background-size: contain;
    border-radius: 10px;
    margin: 9em auto;
    color: #58d817;
    position: relative;
    object-fit: cover;
    font-weight: var(--font-medium);
}

.titlebar{
    position: absolute;
    width: 100%;
    height: 10px;
    background-image: radial-gradient(circle at 17% 77%, rgba(17, 17, 17,0.04) 0%, rgba(17, 17, 17,0.04) 50%,rgba(197, 197, 197,0.04) 50%, rgba(197, 197, 197,0.04) 100%),radial-gradient(circle at 26% 17%, rgba(64, 64, 64,0.04) 0%, rgba(64, 64, 64,0.04) 50%,rgba(244, 244, 244,0.04) 50%, rgba(244, 244, 244,0.04) 100%),radial-gradient(circle at 44% 60%, rgba(177, 177, 177,0.04) 0%, rgba(177, 177, 177,0.04) 50%,rgba(187, 187, 187,0.04) 50%, rgba(187, 187, 187,0.04) 100%),linear-gradient(19deg, rgb(28, 117, 250),rgb(34, 2, 159));
    top: 0;
    border-radius: 10px 10px 0px 0px;

    &::after {
        display: flex;
        content: 'x';
        position: absolute;
        right: 0;
        color: white;
        background: #ff0f18bf;
        height: 95%;
        width: 15%;
        border-radius: 0px 20px 0px 0px;
        font-size: 0.4em;
        justify-content: center;
    }
    
}

.prompt {
    padding: .5em 0em 0em .5em;
    
}
.cursor{
    margin: -1em 0em 0em .5em;
    animation: 1s blink step-end infinite;
}

.console-msg {
    display: none;
}

.header-text-loop{
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}



.slideset3 {
	margin: 1.5em 0em 0em 0em;
	width: 40em;
    height: 3em; position: relative;
    overflow: hidden;

}
.slideset3 > * {
    height: 100%; box-sizing: border-box;
    overflow: hidden
}

.slideset3 > *:first-child {
    animation: 12s autoplay3 infinite ease-in-out
}


img {
    
}

h3, h4 {
    margin-top: 1rem;
    text-align: center;
    font-weight: var(--font-medium);
}

.buttons {

    display: flex;
    justify-content: flex-end;
    width: 100%;
    /*padding: 3rem;*/
    margin: 1em 0em 0em 0em;
    position: relative;
    

}


.buttons a {
    margin-top: 1em;
    width: 8%;
    height: calc(2 * 14px);
    font-weight: 900;
    font-size: .9em;
    color: whitesmoke;
	box-shadow: 3px 4px 0px 0px black;
	background-image: var(--header-color);
	clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 16% 51%, 0% 0%);
	display: inline-block;
	cursor: pointer;
	color:#ffffff;
	padding:20px 30px;
	text-decoration: none;
	text-shadow:0px 1px 0px darkgrey;
    /*box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);*/
    transition: all 0.5s ease;
    /*transition: all .5s ease-in-out;*/

}

.buttons a:hover{
    transform: scale(1.1);
}

ul {
	list-style: none;
	algin-items: center;
	justify-content: center;
}

li {
	height: 100%;
}

.btn-icons {
	margin-left: 3em;
	position: absolute;
	width: 3em;
	height: 3em;
	opacity: 0.5;
}



.buttons a:hover{
    box-shadow: 0 0px 0px 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
    
}

@keyframes gradient {
    50% {
        background-position: 100% 0;
    }
}

@keyframes autoplay3 {
    0% {margin-top: 2em}
    4% {margin-top: 0em}
    31% {margin-top: 0em}
    35% {margin-top: -2em}
    64% {margin-top: -2em}
    68% {margin-top: -4em}
    96% {margin-top: -4em}
    100% {margin-top: -6em}
}


@keyframes "blink" {
  from, to {
    color: transparent;
  }
  50% {
    color: #58d817;
  }
}



/*========  Phone ===========*/
@media (max-width: 640px) {

    justify-content: space-between;
    height: 50px;
    width: 100vw;

.logo {
    

    height: 50px;
    width: 65px;
    margin-left: 25px;
    
}


.console {
    width: 35px;
    height: 30px;
    border-radius: 10px;
    margin: 2em auto;
    font-weight: var(--font-medium);
}

.titlebar{
    position: absolute;
    width: 100%;
    height: 10px;

}

.prompt {
    margin: 1em 0em 0em 0em;
    font-size: .75em;
    
}
.cursor{
    margin: -0.5em 0em 0em 0em;
    font-size: 1em;
}


    .slideset3 {
        height: 1em; 
        position: relative;
        overflow: hidden
    }
    
        .slideset3 > * {
        height: 100%; 
        box-sizing: border-box;
        overflow: hidden
    }


    .header-text {
        display: flex;

        img {
            display: block;
            width: 15%;
            height: 15%;
            border-radius: 50%;
            margin: auto auto auto 10px

}
        
        h3 {
            margin: 1.0rem 4.5rem 0rem 0rem;
        }
    }

.header-text-loop{
    margin-right: 35px
}

h3, h4 {

    text-align: center;
    font-size: 1rem;
}

.buttons {

    display: none;
    width: 80%;
    margin: -1.5em 0em 1em 5em;
    padding: 0rem;
}

.buttons a{
    margin: 0.5rem 0.3rem;
    width: 10%;
}

.buttons span {
    display: none;
}



}


`
