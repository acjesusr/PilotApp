import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { QRCode } from "react-qr-svg";
import QrRegister from './components/QrRegister';
import { BrowserRouter as Router, Route } from "react-router-dom";

import CreateEvent from './components/CreateEvent';
import GoogleButton from './components/GoogleButton';
import ProfessorSwicth from './components/ProfessorSwitch';
import NavBar from './components/NavBar';
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Route exact path="/" component={home} />
        <Route path="/login" component={login} />
        <Route path="/qr" component={qrGen}/>
        <Route path="/createEvent" component={CreateEvent}/>
        <Route path="/scanQr" component={QrRegister}/>
      </Router>
      
    </div>
  );
}
const home = () =>{
  return(
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
      <span>Welcome to PilotApp!</span>
    </header>
  );
}
const login = () =>{
  return(
    <div>
      <span>Please, log in with your Google account to go further!</span>
      <GoogleButton/>
      <br/>
      <ProfessorSwicth/>
    </div>
  );
}

const qrGen = () => {
  return(
    <QRCode
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="M"
              style={{ width: 256 }}
              value="All hope abandon, ye who enter here."
          />
  );
}

export default App;
