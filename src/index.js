import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Sensors from './components/Sensors/Sensors';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import HomesPage from './components/Homes/HomesPage';
import  NewHomeModal  from './components/Homes/NewHomeModal';
import HomePage from './components/Homes/HomePage';

import configureStore from './store/configureStore';
import {loadHomes} from './actions/HomeActions';
import { Router, Route, browserHistory } from 'react-router';

const store = configureStore();

store.dispatch(loadHomes());
//Application Root with routing included
const Root = () => {
  return (
    <div className="container">
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/homes" component={HomesPage} />
        <Route path="/home/:name" component={Sensors} />
        <Route path="/homes/add" component={NewHomeModal} />
        <Route path="/sensors" component={Sensors} />
      </Router>
    </Provider>
    </div>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));
