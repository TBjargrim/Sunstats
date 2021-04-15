import React, { useState } from 'react'
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import styled from 'styled-components'
const StyledDiv = styled.div`

`

const Settings = () => {


    return (
        <StyledDiv>
            <PasswordForgetForm />
            <PasswordChangeForm />
        </StyledDiv>
    )
}

export default Settings
