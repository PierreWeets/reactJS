/* eslint-disable */ /*disable warnings*/

import React from 'react';

function WarningBanner(props) {
	if (!props.warn) {return null; } //if the property 'warn' = false, end the function without affecting the life cycle

	return ( // else display the message 'warning'
	  <div className="warning">
		Attention !
	  </div>
	);
}
  
class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {showWarning: true}; // set the state 'showWarning' to 'true'
		this.handleToggleClick = this.handleToggleClick.bind(this);//link 'handleToggleClick' as  method of the object 'Page'
	}

	handleToggleClick() {
		this.setState(state => ({
		showWarning: !state.showWarning // invert the value of the state 'showWarning'
		}));
	}

	render() {
		return (
		<div>
			<WarningBanner warn={this.state.showWarning} /> <button onClick={this.handleToggleClick}>
			{this.state.showWarning ? 'Masquer' : 'Afficher'}
			</button>
		</div>
		);
	}
}

export default Page;