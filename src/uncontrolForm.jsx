import React from 'react';

class NameFormUncontrolled extends React.Component {
	constructor(props) {
	  super(props);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.input = React.createRef(); // create a REF to the input element
	}
  
	handleSubmit(event) {
	  alert('A name was submitted: ' + this.input.current.value);
	  event.preventDefault();
	}
  
	render() {
	  return (
		<form onSubmit={this.handleSubmit}>
		  <p>Uncontrolled componant by React:</p>	
		  <label>
			Name:
			<input defaultValue="default value" type="text" ref={this.input} /> {/*ref of the input element*/}
		  </label>
		  <input type="submit" value="Submit" />
		</form>
	  );
	}
  }
  
  export default NameFormUncontrolled;