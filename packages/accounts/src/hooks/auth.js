/* eslint-disable object-curly-newline */
import { useContext, useEffect } from 'react';
import { useMutation, useQuery } from 'react-apollo-hooks';
import { UserContext, PORTAL_URL, APP_URL } from 'context';
import { GET_CURRENT_USER, LOGIN, SIGNUP, FORGOT_PASSWORD, RESET_PASSWORD } from 'schema/user';

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

  const submitLogin = (values, actions, type) => {
    return new Promise((resolve, reject) => {
      const { email, password } = values;
      mutate({ variables: { email, password, type } })
        .then((result) => {
          const { data: { signIn: { user } } } = result;
          dispatch({
            type: 'LOGIN_SUCCESS',
            user,
          });
          if (user.type === 'JobSeeker') {
            window.location = PORTAL_URL;
          } else {
            window.location = APP_URL;
          }
          resolve();
        })
        .catch((error) => {
          actions.setSubmitting(false);
          reject(error.graphQLErrors[0].message);
        });
    });
  };

  return submitLogin;
};

export const useSignup = () => {
  const mutate = useMutation(SIGNUP);
  const submitLogin = useLogin();

  const submitSignup = (values, actions, type) => {
    return new Promise((resolve, reject) => {
      const { firstName, lastName, email, password } = values;

      mutate({ variables: { firstName, lastName, email, password, type } })
        .then(() => {
          submitLogin({ email, password }, values);
        })
        .catch((error) => {
          actions.setSubmitting(false);
          reject(error.graphQLErrors[0].message);
        });
    });
  };

  return submitSignup;
};

export const useForgotPassword = () => {
  const mutate = useMutation(FORGOT_PASSWORD);

  const submitForgot = (values, actions) => {
    return new Promise((resolve, reject) => {
      const { email } = values;

      mutate({ variables: { email } })
        .then(() => {
          actions.setSubmitting(false);
          resolve();
        })
        .catch((error) => {
          actions.setSubmitting(false);
          reject(error.graphQLErrors[0].message);
        });
    });
  };

  return submitForgot;
};

export const useResetPassword = () => {
  const mutate = useMutation(RESET_PASSWORD);
  const { dispatch } = useContext(UserContext);

  const submitReset = (passwordToken, { password }, actions) => {
    return new Promise((resolve, reject) => {
      mutate({ variables: { passwordToken, password } })
        .then((result) => {
          const { data: { resetPassword } } = result;
          dispatch({
            type: 'LOGIN_SUCCESS',
            user: resetPassword.user,
          });
          resolve();
        })
        .catch((error) => {
          actions.setSubmitting(false);
          reject(error.graphQLErrors[0].message);
        });
    });
  };

  return submitReset;
};
