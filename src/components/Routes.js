import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BrowserRouter from 'components/CustomRouter';
import GuestRoute from 'components/GuestRoute';
import PrivateRoute from 'components/PrivateRoute';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Signup from 'pages/Signup';
import Login from 'pages/Login';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <GuestRoute exact path="/signup" component={Signup} />
        <GuestRoute exact path="/login" component={Login} />

        <PrivateRoute exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
