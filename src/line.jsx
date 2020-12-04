//
import React from 'react';

// from an object, list all the keys & their values.
function printObject(o) {
  let out = '';
  for (let p in o) {
    out += p + ': ' + o[p] + '\n';
  }
  console.log(out);
}

class TwoButtons extends React.Component{
    constructor(props) {
      super(props);
      this.state = {showButton : true};
      this.deleteButton = this.deleteButton.bind(this);
    }

    deleteButton(event){
	  console.log("Error:" );
	  printObject(event);
	  
      this.setState({showButton: !this.state.showButton}); //inverse the value of the 'showButton' flag
	}
  
    render(){
      return (
        <div>
          <button onClick={(e) => this.deleteButton(e)} 
            style={{visibility: this.state.showButton ? 'visible' : 'hidden' }} >{this.props.Button1Label}
          </button>
          <button onClick={(e) => this.deleteButton(e)} 
            style={{visibility: this.state.showButton ? 'hidden' : 'visible' }} >{this.props.Button2Label}
          </button>
        </div>
      )
    }
  }

  export default TwoButtons;