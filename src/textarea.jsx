import React from 'react';

class EssayForm extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {value: 'Écrivez un essai à propos de votre élément du DOM préféré'};
	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
	// save the content of the <textarea> element (event.target.value) into the state of the componant
	handleChange(event) {this.setState({value: event.target.value});}

	handleSubmit(event) {
	  alert('Un essai a été envoyé : ' + this.state.value);
	  event.preventDefault();// prevent displaying again the whole page
	}
  
	render() {
	  return (
		<form onSubmit={this.handleSubmit}>
		  <label>Essay:</label>
		  <textarea value={this.state.value} onChange={this.handleChange} /> 
		  <input type="submit" value="Send" />
		</form>
	  );
	}
  }

export default EssayForm;