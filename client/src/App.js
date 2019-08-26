import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import GoogleLogin from 'react-google-login';
//import GoogleLogout from 'react-google-login';
import { QRCode } from "react-qr-svg";
//import QrCodeScanner from '@sensorfactdev/qr-code-scanner';

import QrRegister from './components/QrRegister';
import GoogleButton from './components/GoogleButton';

/*const handleScanResult = result => {
  console.log(result);
  // {
  //   "result": "RESULT STRING VALUE",
  //   "points": [
  //     {
  //       "x": 171,
  //       "y": 445,
  //       "count": 2,
  //       "estimatedModuleSize": 3.857142857142857
  //     },
  //     // .... more points
  //   ]
  // }
}*/

/*var res;
const result = (data) => {
  res = data;
}*/

/*console.log({qr_png,png_string})
alert(png_string)*/
function App() {
  return (
    <div className="App">
      <div className="log">
        <header className="App-header">
          <GoogleButton/>
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
          {/*<QrCodeScanner
            onQrCodeScanned={handleScanResult}
            width={window.innerWidth}
            height={window.innerHeight}
            showAimAssist={false} // Defaults to true, disable to remove the aim assist
          />*/}
          <QrRegister/>
      </div>
      
    </div>
  );
}
//console.log(test)
export default App;
