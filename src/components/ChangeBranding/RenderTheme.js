import React, { useState } from 'react'

import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';
import { VingTheme, ApolloTheme } from './ThemeStyled'
import Toggle from './Toggle'
import { useVingMode } from './LocalStorage'
const StyledDiv = styled.div`
background: ${({ theme }) => theme.body};
color: ${({ theme }) => theme.text};
button{
    cursor: ${({ theme }) => theme.button};
}
`


const RenderTheme = () => {
    const [theme, toggleTheme, componentMounted] = useVingMode();
    const themeMode = theme === 'ving' ? VingTheme : ApolloTheme;

    if (!componentMounted) {
        return <div />
    };
    return (
        <div>
            <ThemeProvider theme={themeMode}>
                <StyledDiv>
                    <Toggle theme={theme} toggleTheme={toggleTheme} />
                    <h1>Branded by {theme === 'ving' ? 'Ving' : 'Apollo'}!</h1>
                    <button onClick={toggleTheme}>Ändra resebolag</button>
                </StyledDiv>
            </ThemeProvider>
        </div>
    )
}

export default RenderTheme





