import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { QRCode } from "react-qr-svg";

import QrRegister from './components/QrRegister';
import GoogleButton from './components/GoogleButton';
import ProfessorSwicth from './components/ProfessorSwitch';

function App() {
  return (
    <div className="App">
      <div className="log">
        <header className="App-header">
          <GoogleButton/>
          <ProfessorSwicth/>
        </header>
      </div>
      <div className="content">
          <QRCode
              bgColor="#FFFFFF"
              fgColor="#000000"
              level="M"
              style={{ width: 256 }}
              value="All hope abandon, ye who enter here."
          />
          <QrRegister/>
      </div>
      
    </div>
  );
}

export default App;
