import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Sensors from './components/Sensors';
import Settings from './components/Settings';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Callback from './components/Callback';
import HomesPage from './components/Homes/HomesPage';
import configureStore from './store/configureStore';
import {loadHomes} from './actions/HomeActions';
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/AuthService';

const store = configureStore();

store.dispatch(loadHomes());


const Root = () => {
  return (
    <div className="container">
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/homes" component={HomesPage} />
        <Route path="/sensors" component={Sensors} onEnter={requireAuth} />
          <Route path="/settings" component={Settings} onEnter={requireAuth} />
        <Route path="/callback" component={Callback} />
      </Router>
    </Provider>
    </div>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));
