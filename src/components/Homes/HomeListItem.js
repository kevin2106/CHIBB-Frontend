import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import HomePage from './HomePage';

const HomeListItem = ({home}) => {
  return (
    <li className="list-group-item" key={home.Name}><Link to={'/home/' + home.Name}>{home.Name}</Link></li>
  );
};

HomeListItem.propTypes = {
  home: PropTypes.object.isRequired
};

export default HomeListItem;
