import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from 'context';

const GuestRoute = (props) => {
  const { state } = useContext(UserContext);
  return state.currentUser ? <Redirect to="/" /> : <Route {...props} />;
};

export default GuestRoute;
