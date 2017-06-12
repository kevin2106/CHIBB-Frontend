import React, { Component } from 'react';
import { Link } from 'react-router';
import * as sessionActions from '../actions/SessionActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../App.css';

class Nav extends Component {

  constructor(props) {
    super();
    this.logOut = this.logOut.bind(this);
  }

  logOut(e) {
    e.preventDefault();
    this.props.actions.logOutUser();
  }

  logIn(e) {
    e.preventDefault();
    window.location.href='/login';
  }

  register(e) {
    e.preventDefault();
    window.location.href='/register';
  }

  render() {
    return (

      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">CHIBB-Dashboard</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            {
             ( sessionActions.isLoggedIn() ) ? <Link to="/homes">Homes</Link> :  ''
            }
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
           {
             (sessionActions.isLoggedIn()) ? (
                <button className="btn btn-danger log" onClick={this.logOut}>Log out </button>
              )
              :
              (
                 <button className="btn btn-info log" onClick={this.logIn}>Log In</button>
              )
           }
           { (sessionActions.isLoggedIn()) ? '' : (<button className="btn btn-danger log" onClick={this.register}>Register</button>) }
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {logged_in: state.session};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
