import React from 'react';
import ReactDOM from 'react-dom';
import Sensors from './components/Sensors';
import Settings from './components/Settings';
import Home from './components/Home';
import Callback from './components/Callback';
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth } from './utils/AuthService';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/sensors" component={Sensors} onEnter={requireAuth} />
          <Route path="/settings" component={Settings} onEnter={requireAuth} />
        <Route path="/callback" component={Callback} />
      </Router>
    </div>
  )
}


ReactDOM.render(<Root />, document.getElementById('root'));
