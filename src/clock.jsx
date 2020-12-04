/* eslint-disable */ /*disable warnings*/

import React from 'react';

function ClockFCT(props) {
    return (
      <div>
        <h1>Clock by location - function:</h1>
        <h2>Time at {props.location} : {props.date.toLocaleTimeString()}.</h2>
      </div>
    )
}
  
function updateHours(propDate, offsetHour){
//console.log(propDate.toLocaleTimeString());
//console.log(propDate.getHours());
const date = new Date(propDate);
date.setHours(propDate.getHours() + offsetHour);
return date;
}

class ClockCLASS extends React.Component {
    constructor(props) {
      super(props); //always , class component MUST call props from the parent class
      this.state = {date: new Date()};// state = property ONLY existing  in the class
              // rem : this.state ONLY in the constructor
    }
    
    componentDidMount() { //mount a timer , when the rendering has been done
      this.timerID = setInterval( //add dynamically a property TimerID, to the object ClockCLASS, containting the reference 
        // to the created timer, AND calling the tick() each 1000 ms
        () => this.tick(), // use of '()=>' to avoid untimely calls to tick()
        1000
      );
    }
  
    componentWillUnmount() { //unmount a timer , when the component is removeed from the DOM .
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({ date: new Date()}); //this.setState() updates the component state 
          // => re-rendering of the class object => render() re-executed
    }
  
    render() {
      return (
        <div>
          <h1>Clock by location - class:</h1>
          <h2>Time at {this.props.location} : {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
function DisplayClocks(props){
  return(
    <div>
      <ClockCLASS location="Brussels" />
      <ClockFCT date={updateHours(props.date , -4)} location="N-Y" /> 
    </div>
  )
}

export default DisplayClocks;
  
