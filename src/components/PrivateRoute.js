import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from 'context';

const PrivateRoute = (props) => {
  const { state } = useContext(UserContext);
  return state.currentUser ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
