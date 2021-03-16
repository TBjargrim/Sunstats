import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms; 
  &:hover {
    background-color: orange;
  }
  `
const Title = styled.h1`

`;

const Landing = () => (
  <>
    <div>
      <Title>Landing</Title>

    </div>
  </>
);

export default Landing;
