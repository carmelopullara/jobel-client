import React, { useContext } from 'react';
import { Loading } from '@jobel/ui';
import Routes from 'components/routes/Routes';
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
    <Routes />
  );
};

export default App;
