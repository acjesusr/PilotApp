import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export default class GoogleButton extends Component{
  constructor(props){
    super(props);
    this.onChangeButtonText = this.onChangeButtonText.bind(this);
    this.onConnectionSuccessfull = this.onConnectionSuccessfull.bind(this)

    this.state = {
      googleData: null,
      buttonText: "Login"
    }
  }
  
  onConnectionSuccessfull(e){
    console.log(e);
    this.onChangeButtonText();
    this.setState({
      googleData:e.profileObj
    });
  }

  onChangeButtonText(){
    if (this.state.buttonText === "Login") {
      this.setState({
        buttonText: "logout"
      });
    }else{
      this.setState({
        buttonText: "login"
      });
    }
  }

  render() {
    return (
      <div>
        <GoogleLogin
          clientId="1074900799253-81665pj1q75ilgphi9s6iahhm27eth8r.apps.googleusercontent.com"
          buttonText={this.state.buttonText}
          onSuccess={this.onConnectionSuccessfull}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
};