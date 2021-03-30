import React from 'react'
import { Spring, animated } from 'react-spring'
import styled from "styled-components";

const AnimationWrapper = styled.div`
width:100%;
`
const StyledButton = styled.button`
position:absolute;
bottom:20px;
right:20px;
 width:50px;
 border-radius:100%;
 height: 50px;
 border: 0;  
 cursor: pointer !important;
 background: #3DA5D9;
 color: white;
 outline: none;
 text-transform:lowercase;
 -webkit-appearance: none;
font-size:25px;
font-weight:900;
letter-spacing:1px;
 &:hover{
  background: #93D4E4;
 }
`

const ContentContainer = styled.div`
/* width:100%; */
`
const StyledDiv = styled(animated.div)`
position:absolute;

left:0;
margin:10px;
   background: #fff;
   /* width:100%; */
   overflow: hidden;
   color: black;
`
const StyledP = styled.p`
padding: 10px;
`

const LOREM = `En tjänst som via en enkel sökning visuellt visar klimat, dvs temperatur och nederbörd, i olika delar av världen. Ett effektivt hjälpmedel för den som vill resa, men inte vet vart eller när. Att sälja in tjänsten till reseoperatörer. Idag har flera operatörer liknande tjänster, med dessa är bristfälliga i sin funktion. Vi vill skapa en enkel tjänst som samlar information, gör den sökbar och visualiserar den. Både den planerande och den spontana sista minuten resenär.`

export default class AnimationsInfo extends React.Component {
  state = { toggle: true, text: [LOREM] }
  onToggle = () => this.setState(state => ({ toggle: !state.toggle }))
  onAddText = () =>
    this.setState(state => ({ toggle: true, text: [...state.text, LOREM] }))
  onRemoveText = () =>
    this.setState(state => ({ toggle: true, text: state.text.slice(1) }))
  render() {
    const { toggle, text } = this.state
    return (
      <AnimationWrapper>
        <StyledButton onClick={this.onToggle}>i</StyledButton>
        {/* <button onClick={this.onAddText}>+</button> */}
        <ContentContainer>
          <Spring
            native
            force
            config={{ tension: 2000, friction: 100, precision: 1 }}
            from={{ height: toggle ? 0 : 'auto' }}
            to={{ height: toggle ? 'auto' : 0 }}>
            {props => (
              <StyledDiv className="item" style={props}>
                {text.map((t, i) => (
                  <StyledP key={i}>{t}</StyledP>
                ))}
              </StyledDiv>
            )}
          </Spring>
        </ContentContainer>
      </AnimationWrapper>
    )
  }
}