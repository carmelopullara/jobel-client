import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from 'context';

const PrivateRoute = (props) => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
