
import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const App = () => {
  const [currStep,setCurrStep]=useState({previous:false,next:true,submit:false});
  function handleCurrentState(e,curr){
    e.preventDefault();
    setCurrStep(curr);

  }
  return (
    <div>
       {( currStep.previous==false && currStep.submit==false)?
        <Step title="Customer Details"  id1="first-name" id2="last_name" placeholder1="first-name" placeholder2="last-nmae"  handleCurrentState={handleCurrentState} step="first"/>:
       ( currStep.previous==true && currStep.next==true)? <Step title="Car Details" id1="model" id2="car_price" placeholder1="Brand" placeholder2="Model"  handleCurrentState={handleCurrentState} step="second"/>:
        <Step title="Payment Details" id1="card_info" id2="expiry_date" placeholder1="Card Info" placeholder2="Expiry Date"  handleCurrentState={handleCurrentState} step="third"/>

       }
    </div>
  )
}

export default App
