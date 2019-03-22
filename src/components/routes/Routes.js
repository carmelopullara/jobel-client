import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BrowserRouter from 'components/routes/CustomRouter';
import GuestRoute from 'components/routes/GuestRoute';
import PrivateRoute from 'components/routes/PrivateRoute';
import Home from 'components/home/Home';
import NotFound from 'components/notFound/NotFound';
import Signup from 'components/signup/Signup';
import Login from 'components/login/Login';
import SignupCompany from 'components/companies/NewCompany';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <GuestRoute exact path="/signup" component={Signup} />
        <GuestRoute exact path="/login" component={Login} />
        <GuestRoute exact path="/password/forgot" component={Login} />
        <PrivateRoute exact path="/signup/company" component={SignupCompany} />

        <PrivateRoute exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
