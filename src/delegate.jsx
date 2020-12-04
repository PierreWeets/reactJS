import React from 'react';

// delegates the style to the function FancyBorder(props).
function FancyBorder(props) {
	return (
	  <div className={'FancyBorder FancyBorder-' + props.color}>
		{props.children} {/* // get all child content of the tag <FancyBorder></FancyBorder> */}
	  </div>
	);
  }
  
  function WelcomeDialog() {
	return (
	  <FancyBorder color="blue">
		<h1 className="Dialog-title">
		  Welcome
		</h1>
		<p className="Dialog-message">
		  Thank you for visiting our spacecraft!
		</p>
	  </FancyBorder>
	);
  }

  export default WelcomeDialog;