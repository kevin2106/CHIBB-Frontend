import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { getSensorTemps } from '../utils/ApiService';
import SensorAddModal  from './SensorAddModal';
var _ = require('lodash');

class Sensors extends Component {

  constructor() {
    super();
    this.state =
    {
      sensors: [],
      showGraphs: true
    };
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

    const { sensors, showGraph } = this.state;

    const showHideGraph = {
      'display' : this.state.showGraph ? 'block' : 'none'
    };

    const toggleGraph = () => {
      this.setState(prevState => ({
      showGraph: !prevState.showGraph
    }));
    console.log(this.state.showGraph)
    };

    return (
      <div>
        <Nav />
        <h3 className="text-center">Sensor Data</h3>
        <button type ="button" className="btn btn-default" aria-label="Right Align" onClick={toggleGraph}>
            <i className="fa fa-line-chart" aria-hidden="true"/>
        </button>
        <SensorAddModal/>
        <hr/>

        { sensors.map((sensor, index) => (
             <div className="col-sm-6" key={index}>
               <div className="panel panel-primary">
                 <div className="panel-heading">
                   <h3 className="panel-title"> <span className="btn">Name: { sensor.Name }</span><span className="pull-right btn">Type: {sensor.Type}</span></h3>
                 </div>
                 <div className="panel-body">
                    <p> Current {sensor.Type}: { sensor.Readings[0].Value} {sensor.Unit}</p>
                    <p> Active: {sensor.isActive} </p>
                    <div style={showHideGraph}>
                    <LineChart width={400} height={400} data={sensor.Readings}>
                     <Line type="monotone" dataKey="Value" stroke="#8884d8" />
                     <CartesianGrid stroke="#ccc" />
                     <XAxis dataKey="Timestamp"  />
                     <YAxis />
                     <Tooltip />
                    </LineChart>
                    </div>
                    <button type="button" className="btn btn-default" aria-label="Right Align">
                        <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                    </button>

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
