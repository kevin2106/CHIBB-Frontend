import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { getSensorTemps } from '../utils/ApiService';

class Sensors extends Component {

  constructor() {
    super();
    this.state = { sensors: [] };
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

    const { sensors } = this.state;

    return (
      <div>
        <Nav />
        <h3 className="text-center">Sensor Data</h3>
        <hr/>

        { sensors.map((sensor, index) => (
             <div className="col-sm-6" key={index}>
               <div className="panel panel-primary">
                 <div className="panel-heading">
                   <h3 className="panel-title"> <span className="btn">#{ sensor.id }</span></h3>
                 </div>
                 <div className="panel-body">
                   <p> { sensor.temperature  } </p>
                 </div>
               </div>
             </div>
         ))}


        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <h2>Settings</h2>
            <Link className="btn btn-lg btn-success" to='/'>Settings</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Sensors;
