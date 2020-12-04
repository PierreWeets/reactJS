/* eslint-disable */ /*disable warnings*/

import React from 'react';

import Paragraph from './paragraph';

const paragraphFCT = function(){
    return <p className="App-header">ex of paragraph via Function</p>;
}

const Hello = function () {
    return (
            <div >
            <h1>Hello World</h1>
            {paragraphFCT()}
            <Paragraph />
            </div>
        );
} 

export default Hello;