import React from 'react';
import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { QRCode } from "react-qr-svg";
//import QrRegister from './components/QrRegister';
import GoogleButton from './components/GoogleButton';
import ProfessorSwicth from './components/ProfessorSwitch';
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
          <span>Welcome to PilotApp!</span>
      </header>
      <div>
        <span>Please, log in with your Google account to go further!</span>
        <GoogleButton/>
        <ProfessorSwicth/>
      </div>
      
      {/*<div className="content">
          <QRCode
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="M"
              style={{ width: 256 }}
              value="All hope abandon, ye who enter here."
          />
          <QrRegister/>
      </div>*/}
      
    </div>
  );
}

export default App;
