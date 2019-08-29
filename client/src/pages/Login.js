import React from 'react';
import GoogleButton from '../components/GoogleButton';
import ProfessorSwicth from '../components/ProfessorSwitch';
export default function Login(){
    return(
      <div>
        <span>Please, log in with your Google account in order to access!</span>
        <GoogleButton/>
        <br/>
        <ProfessorSwicth/>
      </div>
    );
  }