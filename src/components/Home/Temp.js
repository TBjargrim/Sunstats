import styled from "styled-components";

const TravelSlc = styled.select`
  font-size: 18px;
  border-radius: 30px;
  margin: 0 0 30px 0;
  padding: 5px 60px 5px 60px;
  font-size: 20px;
  background: white;
  border: none;
  outline: none;
  box-shadow: 1px 2px 10px gray;
   background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right #fff;
  -webkit-appearance: none;
  background-position-x: 120px; 
`;

const Temp = () => {
    return (<TravelSlc>
        <option value="10">10 C</option>
        <option value="15">15 C</option>
        <option value="20">20 C</option>
        <option value="25">25 C</option>
    </TravelSlc>);
}
export default Temp;