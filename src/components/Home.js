import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import * as sessionActions from '../actions/SessionActions';

class Home extends Component {

  render() {

    return (
      <div>
        <Nav />
        <h3 className="text-center">Home Page</h3>
        <hr/>

        <div className="col-sm-12">
          { sessionActions.isLoggedIn() ?
          <div className="jumbotron text-center">
            <h2>View Sensor Data</h2>
            <Link className="btn btn-lg btn-success" to='/homes'> Sensor Data </Link>
          </div> : <div className="jumbotron text-center"><h2>Get Access to Sensor Data by logging in</h2></div>
          }
        </div>
      </div>
    );
  }
}

export default Home;
