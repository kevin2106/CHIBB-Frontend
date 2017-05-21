import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { isLoggedIn } from '../utils/AuthService';
import { getSensorTemps } from '../utils/ApiService';


class Home extends Component {

  constructor() {
    super()
    this.state = { jokes: [] };
  }

  getSensorTemps() {
    getSensorTemps().then((sensors) => {
      this.setState({ sensors });
    });
  }

  componentDidMount() {
    this.getSensorTemps();
  }

  render() {

    const { sensors }  = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center">Home Page</h3>
        <hr/>

        <div className="col-sm-12">
          { isLoggedIn() ?
          <div className="jumbotron text-center">
            <h2>View Sensor Data</h2>
            <Link className="btn btn-lg btn-success" to='/sensors'> Sensor Data </Link>
          </div> : <div className="jumbotron text-center"><h2>Get Access to Sensor Data by logging in</h2></div>
          }
        </div>
      </div>
    );
  }
}

export default Home;
