import React from 'react';
import logo from '../logo.svg';

export default function Home(){
    return(
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
        <span>Welcome to PilotApp!</span>
      </header>
    );
};