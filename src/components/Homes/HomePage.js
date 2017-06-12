import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sensorActions from '../../actions/SensorActions';
import SensorList from '../Sensors/SensorList';
import Nav from '../Nav';
import {browserHistory} from 'react-router';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: '',
      sensors: []
    };
  }

componentWillReceiveProps(nextProps) {
  console.log(nextProps);
  if (this.props.params.Name != nextProps.params.name){
    this.setState({
      home: nextProps.params.name,
      sensors: []
    });
  }
}

componentWillMount(){
  this.setState({sensors: this.props.sensors});
}

componentDidMount(){
  if(this.props.sensors.length == 0){
    this.props.actions.getSensors(this.props.params.name);
  }
}

  render() {
    const sensors = this.state.sensors;
    console.log(sensors);
      return (
        <div>
        <Nav />
        <div className="col-md-12">
        <h1>Sensors for home {this.props.params.name}</h1>
         <div className="col-md-4">
         <SensorList sensor={this.props.sensors}/>
         </div>
         <div className="col-md-8">
         </div>
       </div>
       </div>
      )
    }
}


HomePage.propTypes = {
  sensors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
      home: state.home,
      sensors: state.sensors
    }
  }


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sensorActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
