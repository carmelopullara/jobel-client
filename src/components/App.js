import React, { useContext, useEffect } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { UserContext } from 'context';
import { GET_CURRENT_USER } from 'queries/user';
import Loading from 'components/Loading';
import Routes from 'components/Routes';
import GlobalStyle from 'styled/GlobalStyle';

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
  }, [data, dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return `Error! ${error.message}`;
  }

  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
};

export default App;
