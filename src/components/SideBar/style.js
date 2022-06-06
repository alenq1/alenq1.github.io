import styled, {keyframes} from 'styled-components'

export const StyledSideBar = styled.div`

position: -webkit-sticky;
position: sticky;
top: 10%;
color: white;



.logo {
    display: flex;    
    height: 150px;
    width: 150px;
    background-image: linear-gradient(330deg, rgba(225, 225, 225, 0.05) 0%, rgba(225, 225, 225, 0.05) 33.333%,rgba(114, 114, 114, 0.05) 33.333%, rgba(114, 114, 114, 0.05) 66.666%,rgba(52, 52, 52, 0.05) 66.666%, rgba(52, 52, 52, 0.05) 99.999%),linear-gradient(66deg, rgba(181, 181, 181, 0.05) 0%, rgba(181, 181, 181, 0.05) 33.333%,rgba(27, 27, 27, 0.05) 33.333%, rgba(27, 27, 27, 0.05) 66.666%,rgba(251, 251, 251, 0.05) 66.666%, rgba(251, 251, 251, 0.05) 99.999%),linear-gradient(225deg, rgba(98, 98, 98, 0.05) 0%, rgba(98, 98, 98, 0.05) 33.333%,rgba(222, 222, 222, 0.05) 33.333%, rgba(222, 222, 222, 0.05) 66.666%,rgba(228, 228, 228, 0.05) 66.666%, rgba(228, 228, 228, 0.05) 99.999%),linear-gradient(90deg, rgb(28, 20, 63),rgb(40, 160, 253));
    align-items: center;
    justify-content; center;
    margin: 0px auto;
    display: relative;
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 16% 51%, 0% 0%);
}


.console {
    width: 80px;
    height: 70px;
    background-image: linear-gradient(45deg, rgba(13, 13, 13,0.04) 0%, rgba(13, 13, 13,0.04) 36%,rgba(108, 108, 108,0.04) 36%, rgba(108, 108, 108,0.04) 76%,rgba(202, 202, 202,0.04) 76%, rgba(202, 202, 202,0.04) 100%),linear-gradient(0deg, rgba(13, 13, 13,0.04) 0%, rgba(13, 13, 13,0.04) 28%,rgba(108, 108, 108,0.04) 28%, rgba(108, 108, 108,0.04) 39%,rgba(202, 202, 202,0.04) 39%, rgba(202, 202, 202,0.04) 100%),linear-gradient(135deg, rgba(13, 13, 13,0.04) 0%, rgba(13, 13, 13,0.04) 56%,rgba(108, 108, 108,0.04) 56%, rgba(108, 108, 108,0.04) 97%,rgba(202, 202, 202,0.04) 97%, rgba(202, 202, 202,0.04) 100%),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0));
    background-size: contain;
    border-radius: 10px;
    margin: 2em auto;
    color: #58d817;
    position: relative;
    object-fit: cover;
    font-weight: bold;
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



.slideset3 {
    height: 3em; position: relative;
    overflow: hidden
}
.slideset3 > * {
    height: 100%; box-sizing: border-box;
    overflow: hidden
}

.slideset3 > *:first-child {
    animation: 12s autoplay3 infinite ease-in-out
}


img {
    display: block;
    width: 30%;
    height: 35%;
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    
}

h3, h4 {
    margin-top: 1rem;
    text-align: center;
}

.buttons {

    display: block;
    width: 100%;
    padding: 3rem;
}

.buttons a{
    margin-top: 2rem;
    width: 100%;
    color: white;
	box-shadow: 3px 4px 0px 0px black;
	background-image: linear-gradient(45deg, #780206 0%, #780206 55%, #061161 90%);
    background-position: 100% 0;
    background-size: 200% 200%;
	border-radius: 18px;
	border: 1px solid linear-gradient(to left, #780206, #061161);
	display: inline-block;
	cursor: pointer;
	color:#ffffff;
	padding:7px 25px;
	text-decoration:none;
	text-shadow:0px 1px 0px darkgrey;
    /*box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);*/
    transition: all 0.5s ease;
    
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

top: 3%;
width: 100vw;

.logo {
    
    height: 50px;
    width: 50px;
    margin: 0px auto;
    
}


.console {
    width: 30px;
    height: 40px;
    border-radius: 10px;
    margin: 2em auto;
    font-weight: bold;
}

.titlebar{
    position: absolute;
    width: 100%;
    height: 10px;

}

.prompt {
    margin: .5em 0em 0em 0em;
    font-size: .75em;
    
}
.cursor{
    margin: -1em 0em 0em .5em;
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


    .headertext {
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

h3, h4 {

    text-align: center;
    font-size: 1rem;
}

.buttons {

    display: block;
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
