import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import { Router, Route } from 'react-router-dom';
import history from './history';

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <Route path='/' exact component={Login} />
        <Route path='/dashboard' component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
