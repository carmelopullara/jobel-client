import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BrowserRouter from 'components/routes/CustomRouter';
import GuestRoute from 'components/routes/GuestRoute';
import PrivateRoute from 'components/routes/PrivateRoute';
import Home from 'components/home/Home';
import NotFound from 'components/notFound/NotFound';
import Signup from 'components/signup/Signup';
import Login from 'components/login/Login';
import CandidateLogin from 'components/login/CandidateLogin';
import CandidateSignup from 'components/signup/CandidateSignup';
import ForgotPassword from 'components/password/Forgot';
import ResetPassword from 'components/password/Reset';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <GuestRoute exact path="/signup" component={Signup} />
        <GuestRoute exact path="/login" component={Login} />
        <GuestRoute exact path="/candidate/login" component={CandidateLogin} />
        <GuestRoute exact path="/candidate/signup" component={CandidateSignup} />
        <GuestRoute exact path="/password/forgot" component={ForgotPassword} />
        <GuestRoute exact path="/password/reset/:token" component={ResetPassword} />

        <PrivateRoute exact path="/" component={Home} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
