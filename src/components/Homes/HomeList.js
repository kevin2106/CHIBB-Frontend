import React from 'react';
import PropTypes from 'prop-types';
import HomeListItem from './HomeListItem';
import {Link} from 'react-router';

const HomeList = ({homes}) => {
  return (
      <ul className="list-group">
        {homes.map(home =>
           <HomeListItem key={home.Name} home={home}/>
        )}
      </ul>
  );
};

HomeList.propTypes = {
  homes: PropTypes.array.isRequired
};

export default HomeList;
