import React from 'react'
import { StyledButton } from './style'

const Buttons = ({children, link}) => {
    return (
        <StyledButton href={link}>
            <div className='btn-three'>
                {children}
            </div>
        </StyledButton>
    )
}

export default Buttons
