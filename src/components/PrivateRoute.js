import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from 'context';

const PrivateRoute = (props) => {
  const { currentUser } = useContext(UserContext);
  return currentUser ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
