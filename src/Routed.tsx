import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback, withAuth } from '@okta/okta-react';
import Home from './Home';
import Login from './Login';
import Protected from './Protected';

const yourOktaDomain = 'austin-rr.okta.com';
const clientId = '0oa1e9qzo2bHXANDV357';

function onAuthRequired(history: any) {
  history.push('/login');
}

const Routed: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  return (
    <Security issuer={`https://${yourOktaDomain}/oauth2/default`}
            clientId={clientId}
            redirectUri={window.location.origin + '/implicit/callback'}
            onAuthRequired={onAuthRequired.bind(null, props.history)}
            pkce={true} >
      <Route path='/' exact={true} component={Home} />
      <SecureRoute path='/protected' component={Protected} />
      <Route path='/login' render={() => <Login baseUrl={`https://${yourOktaDomain}`} />} />
      <Route path='/implicit/callback' component={ImplicitCallback} />
    </Security>
  );
};

export default withRouter(Routed);
