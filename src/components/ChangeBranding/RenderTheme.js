import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components';
import { VingTheme, ApolloTheme } from './ThemeStyled'
import { useVingMode } from './LocalStorage'

const StyledDiv = styled.div`
color: ${({ theme }) => theme.h1};
border:1px solid ${({ theme }) => theme.h1};
border-radius:20px;
padding:0 15px;
display:flex;
margin:20px auto;
background: rgba(255, 255, 255, 0.65);
display:flex;
justify-content:space-between;
width: 48%;
button{
    cursor: ${({ theme }) => theme.button};
    justify-content:center;
    font-size: 12px;
    margin: auto 0%;
    height: 60px;
    padding:5px;
    &:focus{
        outline: none;
    }
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
                    <h2>Branded by {theme === 'ving' ? 'Ving' : 'Apollo'}!</h2>
                    <button onClick={toggleTheme}>Ändra resebolag</button>
                </StyledDiv>
            </ThemeProvider>
        </div>
    )
}

export default RenderTheme





