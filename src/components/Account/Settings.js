import React from 'react'
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import styled from 'styled-components'

const StyledDiv = styled.div`
margin-left: 10px;
margin-top: 50px;
p {
    font-size: 20px;
}
`
const Settings = () => {
    return (
        <StyledDiv>
            <p>Byt lösenord:</p>
            <PasswordChangeForm />
            <p>Återställ lösenord:</p>
            <PasswordForgetForm />
        </StyledDiv>
    )
}

export default Settings
