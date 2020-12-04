/* eslint-disable */ /*disable warnings*/

import React from 'react';

function handleClickbis(e) { 
    //e.preventDefault(); 
    console.log('Le lien handleClickBIS a été cliqué.');
}
  
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true}; // create the state (= private property of class 'Toggle') 'isToggleOn' = true

        // This binding is necessary to make `this` useable on the call of the callback 'handleClick()', in the event onClick()
        this.handleClick = this.handleClick.bind(this);
    }   

    handleClick() {
        this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
        }));
        console.log('Le lien handleClick a été cliqué.');
    }

    handleClickter(e) { 
        //e.preventDefault(); 
        this.handleClick();
        console.log('Le lien handleClickTER a été cliqué.');
    }

    render() {
        return (
        <div>
            <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF' /* BEST PRATICE (avoids over-rendering) : call internal method 
                // with binding to the class 'Toggle' with the code 'this.handleClick = this.handleClick.bind(this)' */} 
            </button>
            <button onClick={() => handleClickbis() /*call external function */}> 
            {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
            <button onClick={() => this.handleClickter() /*call internal method without binding */}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        </div>
        );
    }
}

export default Toggle;