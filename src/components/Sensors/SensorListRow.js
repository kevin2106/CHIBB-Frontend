import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const SensorListRow = ({sensor}) => {
  return (
    <h1>{sensor.Name}</h1>
  );
};

SensorListRow.propTypes = {
  sensor: PropTypes.object.isRequired
};

export default SensorListRow;
