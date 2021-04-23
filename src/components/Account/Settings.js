import React from 'react'
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import styled from 'styled-components'

const StyledDiv = styled.div`
margin-top: 100px;
margin-left: 10px;
display: flex;
flex-direction: column;
div {
    margin-top: 10px;
}
p {
    margin-left: 10px;
    font-size: 20px;
}
`
const Settings = () => {
    return (
        <StyledDiv>
            <div>
                <p>Byt lösenord:</p>
                <PasswordChangeForm />
            </div>
            <div>
                <p>Återställ lösenord:</p>
                <PasswordForgetForm />
            </div>
        </StyledDiv>
    )
}

export default Settings
