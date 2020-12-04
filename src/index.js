/* eslint-disable */ /*disable warnings*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import DisplayClocks from './clock';
import Toggle from './toggle';
import TwoButtons from './line';
import LoginControl from './login';
import Page from './page';

//separator
const separator = <hr/>;

// number lists
import NumberList from './lists.jsx';
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
	<li>number={numbers}</li>
);	
const listItemsParagraph1 = 
	<p>variable containing a List of unordered elements:
	<ul>{listItems}</ul>
	</p>;

// blog
import Blog from './posts';
const posts = [
	{id: 1, title: 'Bonjour, monde', content: 'Bienvenue sur la doc de React !'},
	{id: 2, title: 'Installation', content: 'Vous pouvez installer React depuis npm.'}
];
const listItemsParagraph2 = 
<p>function displaying a List of unordered elements: 
	<NumberList numbers={[0,1, 2, 3, 4, 5]}/></p>;

// form
import NameForm from './form';
// texterea
import EssayForm from './textarea';
// select
import FlavorForm from './select';
// control
import Reservation from './control';
// uncontrolled componant by React
import NameFormUncontrolled from './uncontrolForm';
//file selector
import FileInput from './file';
//make go up the state
import Calculator from './state';
//delegation of display
import WelcomeDialog from './delegate';
import './delegate.css';
//
import DisplayPanes from './splitpane';
import './splitpane.css';
//
import SignUpDialog from './signup';
import './signup.css';

// rendering in DOM 
function tick(){
  ReactDOM.render(
    <div>
      <App />
	  {separator}
      <DisplayClocks date={new Date()} />
	  {separator} 
	  <Toggle />
	  {separator}
      <TwoButtons Button1Label="Delete the button" Button2Label="Delete another button"/>
      <TwoButtons Button1Label="Effacer le bouton" Button2Label="Effacer l'autre boutton"/>
	  {separator}
      <LoginControl />
	  {separator}
	  <Page />
	  {separator}
	  {listItemsParagraph1}
	  {listItemsParagraph2}
	  <Blog posts={posts} />
	  {separator}
	  <NameForm />
	  {separator}
	  <EssayForm />
	  {separator}
	  <FlavorForm />
	  {separator}
	  <Reservation />
	  {separator}
	  <NameFormUncontrolled/>
	  {separator}
	  <FileInput/>
	  {separator}
	  <Calculator/>
	  {separator}
	  <WelcomeDialog/>
	  {separator}
	  <DisplayPanes/>
	  {separator}
	  <SignUpDialog/>
    </div>,
    document.getElementById('root')
  );
}
setInterval(tick, 1000);
