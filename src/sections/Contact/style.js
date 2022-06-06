import styled from 'styled-components'

export const StyledContact = styled.div`
    
.contact-wrapper {
    display: flex;
    flex-direction: row;
    background: var(--header-bg);
    color: whitesmoke;
}

.contact-form {
    display: none;
    width: 50%;
    font-weight: var(--font-medium);


    form {
        display: flex;
        flex-direction: column;
        margin: 6em auto 3em auto; 
        height: 75%;
        width: 50%;
        background: var(--slider-colors);
        /*border-radius: 20px 40px 20px 0px;*/
        clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 16% 51%, 0% 0%);

    }

    label {
        text-align: left;
        margin: 0em 0em 0em 4em;
    }

    label:first-of-type{
        margin-top: 1.5em;
        margin-left: 2em;
    }

    input, textarea, button {
        margin: 1em 1em 1em 5em;
        width: 12.5em;
        height: 2em;
    }

    input:first-of-type{
        margin-top: 1.5em;
        margin-left: 3em;
    }

    button {
        margin: 1.5em 0em 1em 2.5em;   
        width: 60%;
    }


}

.contact-icons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    flex-wrap: wrap;

    svg {
        width: 75px;
        height: 75px;
    }
}

@media screen and (max-width: 640px) {

    .contact-icons {    
        display: flex;
        justify-content: space-evenly;
        align-content: center;
        flex-wrap: wrap;

    svg {
        width: 40px;
        height: 40px;
    }
}
}

`