import React, {PropTypes} from 'react';
import HomeListItem from './HomeListItem';
import {Link} from 'react-router';


const HomeList = ({homes}) => {
  return (

      <ul className="list-group">
        {homes.map(home =>
           <li className="list-group-item" key={home.name}><Link to={'/home/' + home.name}>{home.name}</Link></li>
        )}
      </ul>
  );
};

HomeList.propTypes = {
  homes: PropTypes.array.isRequired
};

export default HomeList;
