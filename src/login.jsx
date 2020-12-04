/* eslint-disable */ /*disable warnings*/

import React from 'react';

// login - logout
function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Connexion
      </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
        Déconnexion
        </button>
    );
}

function UserGreeting(props) {
    return <h1>Bienvenue !</h1>;
}

function GuestGreeting(props) {
    return <h1>Veuillez vous inscrire.</h1>;
}

function Greeting(props) {
const isLoggedIn = props.isLoggedIn;
if (isLoggedIn) {  
   return <UserGreeting />; 
}  return <GuestGreeting />;
}

class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = {isLoggedIn: false};
	}

	handleLoginClick() {
		this.setState({isLoggedIn: true});
	}

	handleLogoutClick() {
		this.setState({isLoggedIn: false});
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button;
		{isLoggedIn //ternary expression
			? button= <LogoutButton onClick={this.handleLogoutClick} /> 
			: button= <LoginButton onClick={this.handleLoginClick} /> 
		}
		
		return (
			<div>
			<Greeting isLoggedIn={isLoggedIn} />{button}      
			</div>
		);
	}
}

export default LoginControl;