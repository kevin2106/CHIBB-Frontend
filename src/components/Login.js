import React, { Component, PropTypes } from 'react';
import Nav from './Nav';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../actions/SessionActions';

class Login extends Component {
  constructor(props){
      super(props)
      this.state = {
          grant_type: `password`,
          userName: "",
          password: ""
      }

      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

  handleEmailChange(e){
    this.setState({userName: e.target.value});
  }

  handlePasswordChange(e){
    this.setState({password: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
    this.props.actions.loginUser(this.state);
    //loginUser(this.state);
  }

  render() {


 //const { grant_type, email, password } = this.state;
    return (
      <div>
        <Nav />
        <h3 className="text-center">Login </h3>
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

            <div className="control-group">
              <div className="controls">
                <button className="btn btn-success" onClick={this.onSubmit}>Login</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(Login);
