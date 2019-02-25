import { useContext, useEffect } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { GET_CURRENT_USER } from 'queries/user';
import { RouterContext, UserContext } from 'context';

export const useRouter = () => useContext(RouterContext);

export const useCurrentUser = () => {
  const { data, error, loading } = useQuery(GET_CURRENT_USER);
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    if (data.me) {
      dispatch({
        type: 'setCurrentUser',
        user: data.me,
      });
    } else {
      dispatch({ type: 'userNotLogged' });
    }
  }, [data, dispatch]);

  return {
    error,
    loading,
  };
};
