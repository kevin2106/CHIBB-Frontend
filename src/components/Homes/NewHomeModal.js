import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Modal, Popover, Tooltip, Button, OverlayTrigger } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import * as actions from '../../actions/HomeActions';

//Add new home modal
class NewHomeModal extends Component{
  constructor(props) {
    super(props);
    this.state =
    {
      name,
      showModal: false,
    };
    this.handleHomeNameChange = this.handleHomeNameChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){

  }

  onSubmit(e) {
    e.preventDefault();
    this.props.actions.createHome(this.state);
  }

  handleHomeNameChange(e){
    this.setState({name: e.target.value});
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );

    const openModal = () => {
      this.setState({showModal: true});
    };

    const closeModal = () => {
      this.setState({showModal: false});
    }

    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
        <Button
          onClick={openModal}
          className="btn btn-default"
          aria-label="Right Align"
        >
        <span className="glyphicon glyphicon-plus" aria-hidden="true"/>
        </Button>

        <Modal show={this.state.showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add new Home</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="HomeName">Sensor Name</label>
                <input type="text" className="form-control" onChange={this.handleHomeNameChange} id="HomeName" aria-describedby="emailHelp" placeholder="Enter home name"/>
              </div>
            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick= {this.onSubmit}>Add</Button>
            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

NewHomeModal.propTypes = {
  actions: PropTypes.object.isRequired
};


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}


export default connect(null, mapDispatchToProps)(NewHomeModal);
