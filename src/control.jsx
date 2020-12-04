import React from 'react';

class Reservation extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		isGoing: true,
		numberOfGuests: 2,
	  };
  
	  this.handleInputChange = this.handleInputChange.bind(this);
	}
  
	handleInputChange(event) { 
	  // event.target = reference to the modified 'input' element with type="checkbox" OR  type="number"
	  const target = event.target;

	  // if the modified 'input' element is a checkbox type
	  	// then value = content of 'checked' property of the input element with type="checkbox"
		// else value = content of the 'value' property of the input element with type="number"
	  const modifiedValue = target.type === 'checkbox' ? target.checked : target.value;
	  
	  // attribute the new value to the modified 'input' element
	  // the command 'setState' re-renders the componant => new value is re-displayed in the modified element
	  // 'this.setState( { [target.name]=value })' = set the content of variable 'modifiedValue'
	  	// in the property value of the modified element 
	  // 
	  this.setState({ // control the modified Html element
		[target.name]: modifiedValue 
	  });
	  
	  alert('element : "' + target.name + '" , modified with new value: "' + modifiedValue + '"'	);
	  event.preventDefault();
	}
  
	render() {
	  return (
		<form>
			Example of controlled componant:<br/>
		  <label>
			Is going:
			<input
			  name="isGoing"
			  type="checkbox"
			  checked={this.state.isGoing}
			  onChange={this.handleInputChange} />
		  </label>
		  <br />
		  <label>
			Number of guests:
			<input
			  name="numberOfGuests"
			  type="number"
			  value={this.state.numberOfGuests}
			  onChange={this.handleInputChange} />
		  </label>
		  <hr/>
		  1st input element is NO modifiable because of its 'value' property ALREADY setted:<br/>
		   <input value="Salut" /><br/> {/*input element filled with unmodifiable value*/}
		  Next input elements are modifiable because of the 'value' property is 'null' or not defined:<br/>
		  <input value={null} /> {/*input element wan be modified */}
		  <input />	{/*input element wan be modified */}
		</form>
	  );
	}
  }

  export default Reservation;