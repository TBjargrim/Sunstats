import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
// import { VingTheme, ApolloTheme } from './ThemeStyled'
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
// import { ReactComponent as MoonIcon } from 'icons/moon.svg';
// import { ReactComponent as SunIcon } from 'icons/sun.svg';
const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;
  p {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    
    &:first-child {
      transform: ${({ VingTheme }) => VingTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    &:nth-child(2) {
      transform: ${({ VingTheme }) => VingTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;
const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'ving';
  return (
    <div>
      {/* // <ToggleContainer onClick={toggleTheme} >
        //     <p>Ving</p>
        //     <p>Apollo</p>
        // </ToggleContainer> */}
    </div>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;