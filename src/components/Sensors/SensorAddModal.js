import React, { Component } from 'react';
import { Modal, Popover, Tooltip, Button, OverlayTrigger } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class SensorAddModal extends Component{
  constructor() {
    super();
    this.state =
    {
      showModal: false,
    };
  }

  componentDidMount(){
    this.setState({ showModal: false});
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
            <Modal.Title>Sensor Add</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label htmlFor="SensorName">Sensor Name</label>
                <input type="text" className="form-control" id="SensorName" aria-describedby="emailHelp" placeholder="Enter sensor name"/>
              </div>
              <div className="form-group">
                <label htmlFor="SensorName">Type</label>
                <select className="form-control" id="typeSelect">
                  <option>Temperature</option>
                  <option>Humidity</option>
                  <option>Wind</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="TargetApiLink">API Link</label>
                <input type="text" className="form-control" id="TargetApiLink" aria-describedby="emailHelp" placeholder="Enter Target API Link"/>
              </div>
            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal}>Save</Button>
            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default SensorAddModal;
