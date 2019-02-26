import { useContext, useEffect } from 'react';
import { useMutation, useQuery } from 'react-apollo-hooks';
import { LOGIN, GET_CURRENT_USER } from 'queries/user';
import { UserContext } from 'context';

export const useCurrentUser = () => {
  const { data, error, loading } = useQuery(GET_CURRENT_USER);
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    if (data.me) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        user: data.me,
      });
    } else {
      dispatch({ type: 'LOGIN_FAIL' });
    }
  }, [data, dispatch]);

  return {
    error,
    loading,
  };
};

export const useLogin = () => {
  const mutate = useMutation(LOGIN);
  const { dispatch } = useContext(UserContext);

  const submitLogin = (values) => {
    const { email, password } = values;
    mutate({ variables: { email, password } })
      .then((result) => {
        const {
          data: { signIn },
        } = result;
        localStorage.setItem('token', signIn.token);
        localStorage.setItem('refreshToken', signIn.refreshToken);
        dispatch({
          type: 'LOGIN_SUCCESS',
          user: signIn.user,
        });
      })
      .catch(error => console.log('ERROR', error));
  };

  return { submitLogin };
};

export const signUp = () => {};
