import React from 'react';


class FileInput extends React.Component {
	constructor(props) {
	  // highlight-range{3}
	  super(props);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleOnChange = this.handleOnChange.bind(this);
	  this.fileInput = React.createRef();
	  this.message = "";
	  this.fileName = "";
	}
	
	handleSubmit(event) {
	  // highlight-range{3}
	  event.preventDefault();
	  alert(
		`Selected File - ${
		  this.fileInput.current.files[0].name
		}`
	  );
	}

	handleOnChange(event){
		this.message= "choosen file : " +  this.fileInput.current.files[0].name;
	}
  
	render() {
	  // highlight-range{5}
	  return (
		<form onSubmit={this.handleSubmit}>
		  <label>
			Send a file :
			<input value="Search file" type="file" ref={this.fileInput} onChange={this.handleOnChange}/>
		 {this.message }
		 {/* { this.fileInput.current.files[0].name} */}
		  </label>
		  <br />
		  <button type="submit">Envoyer</button>
		</form>
	  );
	}
  }
  
  export default FileInput;
  