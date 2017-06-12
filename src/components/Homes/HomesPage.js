import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  HomeList  from './HomeList';
import  NewHomeModal  from './NewHomeModal';
import Nav from '../Nav';
import * as actions from '../../actions/HomeActions';

//Homes page
class HomesPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      homes: ''
    }
  }
  componentWillMount() {
    if(this.props.homes[0].name == ''){
      this.props.actions.loadHomes();
    }
  }

  render () {
    const homes = this.props.homes;
    return (
      <div>
      <Nav/>
      <div className="col-sm-12">
        <div className="jumbotron text-center">
          <h2>Homes</h2>
          <NewHomeModal />
        </div>
      </div>
      <div className="col-sm-12 text-center">

       <div className="col-sm-12 text-center">
       <HomeList homes={homes}/>
       </div>
       <div className="col-sm-12">
       </div>
     </div>
     </div>
    )
  }
}

HomesPage.propTypes = {
  homes: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps){
  if (state.homes.length > 0) {
    return {
      homes: state.homes
    };
  } else {
    return {
      homes: [{name: '', sensors: []}]
    }
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomesPage);
