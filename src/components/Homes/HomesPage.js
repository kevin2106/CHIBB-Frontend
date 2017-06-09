import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HomeList } from './HomeList';
import { NewHomeModal } from './NewHomeModal';
import * as actions from '../../actions/HomeActions';

class HomesPage extends Component {
  componentWillMount() {
    console.log(this.props.actions.loadHomes());
    if(this.props.homes[0].name == ''){
      this.props.actions.loadHomes();
    }
  }

  render () {
    const homes = this.props.homes;
    console.log(homes);
    return (
      <div className="col-md-12">
       <h1>Homes <Link to={'/homes/new'} className="btn btn-primary">+ Homes</Link></h1>
       <div className="col-md-4">
       <HomeList homes={homes}/>
       </div>
       <div className="col-md-8">
         {this.props.children}
       </div>
     </div>
    )
  }
}

HomesPage.propTypes = {
  homes: PropTypes.array.isRequired,
  children: PropTypes.object
};


function mapStateToProps(state, ownProps){
  if (state.homes.length > 0) {
    return {
      homes: state.homes
    };
  } else {
    return {
      homes: [{name: ''}]
    }
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomesPage);
