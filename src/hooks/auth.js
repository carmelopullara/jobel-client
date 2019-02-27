import { useContext, useEffect } from 'react';
import { useMutation, useQuery } from 'react-apollo-hooks';
import { UserContext } from 'context';
import { GET_CURRENT_USER, LOGIN } from 'gql';
import { useTranslation } from 'react-i18next';

export const useCurrentUser = () => {
  const { data, error, loading } = useQuery(GET_CURRENT_USER);
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      if (data.me) {
        dispatch({
          type: 'LOGIN_SUCCESS',
          user: data.me,
        });
      } else if (!loading) {
        dispatch({ type: 'LOGIN_FAIL' });
      }
    }, 500);
  }, [data, dispatch, loading]);

  return {
    error,
    loading,
  };
};

export const useLogin = () => {
  const mutate = useMutation(LOGIN);
  const { dispatch } = useContext(UserContext);

  const submitLogin = (values, actions) => {
    return new Promise((resolve, reject) => {
      const { email, password } = values;
      mutate({ variables: { email, password } }).then(
        (result) => {
          const { data: { signIn } } = result;
          localStorage.setItem('token', signIn.token);
          localStorage.setItem('refreshToken', signIn.refreshToken);
          dispatch({
            type: 'LOGIN_SUCCESS',
            user: signIn.user,
          });
          resolve();
        },
        (error) => {
          actions.setSubmitting(false);
          reject(error.graphQLErrors[0].message);
        },
      );
    });
  };

  return { submitLogin };
};

export const signUp = () => {};