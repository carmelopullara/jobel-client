import React, { useContext } from 'react';
import Loading from 'components/Loading';
import Routes from 'components/Routes';
import GlobalStyle from 'components/GlobalStyle';
import { useCurrentUser } from 'hooks/auth';
import { UserContext } from 'context';

const App = () => {
  const { state: { isLoading } } = useContext(UserContext);
  const { error } = useCurrentUser();

  if (isLoading) {
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
