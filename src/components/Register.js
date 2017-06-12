import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import {registerUser} from '../utils/ApiService';


class Register extends Component {


  constructor() {
    super()
    this.state = { email: "",
                   password: "",
                   confirmPassword: ""}

const status = "";
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleEmailChange(e){
    this.setState({email: e.target.value});
    console.log(this.state.email);
  }

  handlePasswordChange(e){
    this.setState({password: e.target.value});
  }
  handleConfirmPasswordChange(e){
    this.setState({confirmPassword: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
  status = registerUser(this.state);
  window.location.href='/login';
  }



  render() {


 const { email, password, confirmPassword } = this.state;
    return (
      <div>
        <Nav />
        <h3 className="text-center">Register</h3>
        <hr/>
        <form className="form-horizontal" onSubmit={this.onSubmit}>
          <fieldset>
            <div className="form-group">
              <label className="form-label" htmlFor="email">E-mail</label>
              <div className="controls">
                <input type="text" id="email" name="email" placeholder="" onChange={this.handleEmailChange} className="form-control"/>
                <p className="help-block">Please provide your E-mail</p>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <div className="controls">
                <input type="password" id="password" name="password" placeholder="" value={this.state.password} onChange={this.handlePasswordChange} className="form-control"/>
                <p className="help-block">Password should be at least 4 characters</p>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label"  htmlFor="password_confirm">Password (Confirm)</label>
              <div className="controls">
                <input type="password" id="password_confirm" name="password_confirm" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange} placeholder="" className="form-control"/>
                <p className="help-block">Please confirm password</p>
              </div>
            </div>

            <div className="control-group">
              <div className="controls">
                <button className="btn btn-success" onClick={this.onSubmit}>Register</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Register;
