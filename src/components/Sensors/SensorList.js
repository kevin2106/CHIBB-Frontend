import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import SensorListRow from './SensorListRow';

const SensorList = ({sensor}) => {

  console.log({sensor})

  return (
      <ul className="list-group" >
        {sensor.map(sensor =>
          <SensorListRow key={sensor._id} sensor={sensor} />
        )}
      </ul>
  );
};

SensorList.propTypes = {
  sensor: PropTypes.array.isRequired
};

export default SensorList;
