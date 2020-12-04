import React from 'react';

const scaleNames = {
	c: 'Celsius',
	f: 'Fahrenheit'
 };
  
  function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
  }
  
  function tryConvert(temperature, convert) {//convert = name of the callback fct 'toCelsius' or 'toFahrenheit'
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
	  return '';
	}
	return (Math.round(convert(input) * 1000) / 1000).toString();
  }
  
  function BoilingVerdict(props) {
	if (props.celsius >= 100) {
	  return <p>The water would boil.</p>;
	}
	return <p>The water would not boil.</p>;
  }
  
  class TemperatureInput extends React.Component {
	constructor(props) {
	  super(props);
	  this.handleChange = this.handleChange.bind(this);
	}
  
	handleChange(event) {
	  // execute the method 'handleCelsiusChange' OR 'handleFahrenheitChange' (belonging to the parent object Calculator)
	  // , which is the value of the prop "onTemperatureChange" of the TemperatureInput element , whose the value has been modified in the UI.
	  this.props.onTemperatureChange(event.target.value);
	}	
	
	render() {
	  const scale = this.props.scale ;//get the value of the prop 'scale' coming from upper object 'Calculator'
	  const temperature = this.props.temperature; //get the value of the prop 'temperature' coming from upper object 'Calculator'
	 // return an input element from the upper class 'Calculator' 
	  return (
		<fieldset>
		  <legend>Enter temperature in {scaleNames[scale]}:</legend>
		  <input value={temperature}
				 onChange={this.handleChange} />
		</fieldset>
	  );
	}
  }
  
  class Calculator extends React.Component {
	constructor(props) {
	  super(props);
	  this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
	  this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
	  this.state = {temperature: '', scale: 'c'}; // teperature = empty , default scale = Celsius
	}
  
	handleCelsiusChange(temperature) {
	  this.setState({scale: 'c', temperature});//update of the state variable => re-rendering of the componant
	}
  
	handleFahrenheitChange(temperature) {
	  this.setState({scale: 'f', temperature});//update of the state variable => re-rendering of the componant
	}
  
	render() {
	 // gives the state of the scale, that is local in the parent object 'Calculator', to the child object  TemperatureInput
	  const scale = this.state.scale;
	 // gives the state of the temperature, that is local in the parent object 'Calculator' , to the child object  TemperatureInput 
	  const temperature = this.state.temperature; 
	  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
	  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
	  return (
		<div>
		  <TemperatureInput
			scale="c"
			temperature={celsius}
			onTemperatureChange={this.handleCelsiusChange} />
		  <TemperatureInput
			scale="f"
			temperature={fahrenheit}
			onTemperatureChange={this.handleFahrenheitChange} />
		  <BoilingVerdict celsius={parseFloat(celsius)} />
		</div>
	  );
	}
  }
  
export default Calculator;
  