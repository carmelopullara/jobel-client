import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import UserContext from '../contexts/UserContext';
import { GET_CURRENT_USER } from '../queries/user';
import Signup from './Auth/Signup';
import Home from './Home';
import GuestRoute from './Routes/GuestRoute';
import PrivateRoute from './Routes/PrivateRoute';

const App = () => {
  const { data, error, loading } = useQuery(GET_CURRENT_USER);
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    if (data.me) {
      dispatch({
        type: 'setCurrentUser',
        user: data.me,
      });
    }
  }, [data]);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return `Error! ${error.message}`;
  }

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <GuestRoute exact path="/signup" component={Signup} />
        <Route render={() => <p>Not Found</p>} />
      </Switch>
    </Router>
  );
};

export default App;
