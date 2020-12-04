import React from 'react';

//lists
function ListItem(props) {
	// Correct! There is no need to specify the key here:
	// REM: the value of prop 'key' not passed to componant via 'props' <=> 'props.key' = reserved word
	return <li>key='{props.key}' keyValue='{props.keyValue}' value='{props.value}'</li>;
}

function NumberList(props) {

	const numbers = props.numbers;
	return (
	  	<ul>
			{numbers.map((number) =>
			<ListItem key={number.toString()} keyValue={number.toString()} value={Math.pow(number, number)}/>
			)}
		</ul>)
  }
  
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((numbers) =>
// 	<li>number={numbers}</li>
// );	

export default NumberList ;