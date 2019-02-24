import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from 'context';

const GuestRoute = (props) => {
  const { currentUser } = useContext(UserContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
};

export default GuestRoute;
