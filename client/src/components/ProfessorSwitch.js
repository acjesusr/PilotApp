import React, { Component } from "react";
import Switch from "react-switch";
 
export default class ProfessorSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
  }
 
  render() {
    return (
      <label>
        <span>Are you a professor?</span>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label>
    );
  }
}