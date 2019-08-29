import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { QRCode } from "react-qr-svg";
import QrRegister from './components/QrRegister';
import { BrowserRouter as Router, Route } from "react-router-dom";

import CreateEvent from './pages/CreateEvent';
import ViewEvent from './pages/ViewEvent';
import Login from "./pages/Login";

import NavBar from './components/NavBar';
import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/qr" component={qrGen}/>
        <Route path="/createEvent" component={CreateEvent}/>
        <Route path="/scanQr" component={QrRegister}/>
        <Route path="/eventList" component={ViewEvent}/>
      </Router>
      
    </div>
  );
}
const Home = () =>{
  return(
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
      <span>Welcome to PilotApp!</span>
    </header>
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
