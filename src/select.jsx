import React from 'react';

class FlavorForm extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {value: 'lime'};
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
    // save the content of the <select> element (event.target.value) into the state of the componant
	handleChange(event) {    this.setState({value: event.target.value});  }
	
	handleSubmit(event) {
	  alert('Your favorite flavor is : ' + this.state.value);
	  event.preventDefault();
	}
  
	render() {
	  return (
		<form onSubmit={this.handleSubmit}>
		  <label>
			Your favorite flavor :
			<select value={this.state.value} onChange={this.handleChange}>
			  <option value="grapefruit">Pamplemousse</option>
			  <option value="lime">Citron vert</option>
			  <option value="coconut">Noix de coco</option>
			  <option value="mango">Mangue</option>
			</select>
		  </label>
		  <input type="submit" value="Send" />
		</form>
	  );
	}
  }

  export default FlavorForm;