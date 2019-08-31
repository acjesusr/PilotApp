import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';

import CreateEvent from './pages/CreateEvent';
import ViewEvent from './pages/ViewEvent';
import Login from "./pages/Login";
import Home from "./pages/Home";

import QRGenerator from "./components/QRGenerator";
import NavBar from './components/NavBar';
import QrRegister from './components/QrRegister';
import store from './store';
import './App.css';
class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <NavBar/>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/qr" component={QRGenerator}/>
            <Route path="/createevent" component={CreateEvent}/>
            <Route path="/scanqr" component={QrRegister}/>
            <Route path="/eventlist" component={ViewEvent}/>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
