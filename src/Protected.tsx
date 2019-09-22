import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

const Protected: React.FC<RouteComponentProps> = (props: any) => {
  const [ accessToken, setAccessToken ] = useState("");
  const [ user, setUser ] = useState(null);
  
  props.auth.getAccessToken().then((accessToken: string) => {
    setAccessToken(accessToken);
  });
  props.auth.getUser().then((user: any) => {
    setUser(user ? user.email : "");
  });
  console.log(`ACCESS TOKEN is ${accessToken}`);
  return (<h3>Welcome, {user}</h3>);
};

export default withAuth(Protected);
