import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

const PrivateRoute = (props) => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Redirect to="/signup" />;
  }

  return (
    <Route {...props} />
  );
};

export default PrivateRoute;
