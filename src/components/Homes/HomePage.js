import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../../actions/HomeActions';
//import SensorList from '../hobbies/HobbyList';
//import HomeForm from './HomeForm';
import {browserHistory} from 'react-router';
// import toastr from 'toastr';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      home: this.props.home,
      homeSensors: this.props.homeSensors,
      saving: false,
      isEditing: false
    };
    this.saveHome = this.saveHome.bind(this);
    this.updateHomeState = this.updateHomeState.bind(this);
    this.updateHomeSensors = this.updateHomeSensors.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteHome = this.deleteHome.bind(this);
    this.redirect = this.redirect.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.home.name != nextProps.home.name) {
      this.setState({home: nextProps.home});
    }

    this.setState({saving: false, isEditing: false});
  }

  toggleEdit() {
    this.setState({isEditing: true});
  }

  /*updateHomeSensors(event) {
    const home = this.state.home;
    const sensorId = event.target.value;
    //const sensor = this.state.checkBoxHobbies.filter(sensor => hobby.id == hobbyId)[0];
    const checked = !hobby.checked;
    hobby['checked'] = !hobby.checked;
    if (checked) {
      cat.hobby_ids.push(hobby.id);
    } else {
      cat.hobby_ids.splice(cat.hobby_ids.indexOf(hobby.id));
    }
    this.setState({cat: cat});

  }*/

  updateHomeState(event) {
    const field = event.target.name;
    const home = this.state.home;
    home[field] = event.target.value;
    return this.setState({home: home});
  }

  /*saveCat(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.updateHome(this.state.home);

  }

  deleteCat(event) {
    this.props.actions.deleteCat(this.state.cat)
  }*/

  redirect() {
    browserHistory.push('/homes');
  }

  render() {
    /*if (this.state.isEditing) {
      return (
      <div>
        <h1>edit cat</h1>
        <CatForm
          cat={this.state.cat}
          hobbies={this.state.checkBoxHobbies}
          onSave={this.saveCat}
          onChange={this.updateCatState}
          onHobbyChange={this.updateCatHobbies}
          saving={this.state.saving}/>
      </div>
      )
    }*/
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.state.home.name}</h1>
        //<button onClick={this.toggleEdit} className="btn btn-default  ">edit</button>
        //<button onClick={this.deleteCat} className="btn btn-default  ">delete</button>
      </div>
    );
  }
}


HomePage.propTypes = {
  home: PropTypes.object.isRequired,
  //catHobbies: PropTypes.array.isRequired,
  //checkBoxHobbies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

/*function getCatById(cats, id) {
  let cat = cats.find(cat => cat.id == id)
  return Object.assign({}, cat)
}

function hobbiesForCheckBoxes(hobbies, cat=null) {
  return hobbies.map(hobby => {
    if (cat && cat.hobby_ids.filter(hobbyId => hobbyId == hobby.id).length > 0) {
      hobby['checked'] = true;
    } else {
      hobby['checked'] = false;
    }
    return hobby;
  });
}

function collectCatHobbies(hobbies, cat) {
  let selected = hobbies.map(hobby => {
    if (cat.hobby_ids.filter(hobbyId => hobbyId == hobby.id).length > 0) {
      return hobby;
    }
  })
  return selected.filter(el => el != undefined)
}*/

function mapStateToProps(state, ownProps) {
  /*const stateHobbies = Object.assign([], state.hobbies)
  let checkBoxHobbies = [];
  let catHobbies = [];*/
  let home = {name: ''};
  const homeId = ownProps.params.id;
  /*if (homeId && state.homes.length > 0 && state.hobbies.length > 0) {
    cat = getCatById(state.cats, ownProps.params.id);
    if (cat.id && cat.hobby_ids.length > 0) {
      checkBoxHobbies = hobbiesForCheckBoxes(stateHobbies, cat);
      catHobbies = collectCatHobbies(stateHobbies, cat);
    } else {
      checkBoxHobbies = hobbiesForCheckBoxes(stateHobbies)
    }
  }*/
    return {home: home};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(homeActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
