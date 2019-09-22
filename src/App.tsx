import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Routed from './Routed';
import Home from './Home';
import Login from './Login';
import Protected from './Protected';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routed/>
      </Router>
    </div>
  );
};

export default App;
