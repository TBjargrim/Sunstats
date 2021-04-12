import styled from "styled-components";
import React, { useState } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom"


  function InputFilter() {
  let history = useHistory();

    function handleClick(e) {
    e.preventDefault();
    let selectionMonth = document.querySelector(".month");
    let monthValue = selectionMonth.value;
    let selectionTemp = document.querySelector(".temp");
    let tempValue = selectionTemp.value;
    
    history.push(`/result/${tempValue}/${monthValue}`);
  }
    return (
    <div>
      <select className="month">
        <option value="January"> January</option>
        <option value="February"> February</option>
        <option value="March"> March</option>
        <option value="April"> April</option>
        <option value="May"> May</option>
        <option value="June"> June</option>
        <option value="July"> July</option>
        <option value="August"> August</option>
        <option value="September"> September</option>
        <option value="October"> October</option>
        <option value="November"> November</option>
        <option value="December"> December</option>
        </select>

        <select className="temp">
        <option value="10"> 10</option>
        <option value="15"> 15</option>
        <option value="20"> 20</option>
        <option value="25"> 25</option>
        <option value="30"> 30</option>
        <option value="35"> 35</option>
          </select>
        <button onClick={handleClick}>Sök</button>
    </div>
        

    //     <div>
    //     <input >/>

    //     <table>
    //         <thead>
    //             <tr>
    //                 <th onClick={()=>this.setSortedData('Type')}>filter</th>
                    
    //             </tr>
    //         </thead>
           
    //     </table>
    // </div>
);
    }
        
    
  
  
  
  export default InputFilter;