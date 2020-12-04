import React from 'react';

  function Contacts(text) {
  	return <div className="Contacts" >{text}</div>;
  }
  
  function Chat() {
	return <div className="Chat" >Right</div>;
  }
  
  function SplitPane(props) {
	return (
	  <div className="SplitPane">
		<div className="SplitPane-left">
		  {props.left}
		</div>
		<div className="SplitPane-right">
		  {props.right}
		</div>
	  </div>
	);
  }
  
  function DisplayPanes() {
	return ( // 2 ways of displaying a text inside a styled div.
	  <SplitPane left={Contacts('Left')} right={<Chat/>} />
	);
  }

  export default DisplayPanes;