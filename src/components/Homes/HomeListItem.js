import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import HomePage from './HomePage';

const HomeListItem = ({home}) => {
  return (
    <li className="list-group-item"><Link to={'/homes/' + home.id}>{home.name}</Link></li>
  );
};

HomeListItem.propTypes = {
  home: PropTypes.object.isRequired
};

export default HomeListItem;
