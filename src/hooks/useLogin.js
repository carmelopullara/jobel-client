import { useContext } from 'react';
import { useMutation } from 'react-apollo-hooks';
import { LOGIN } from 'queries/user';
import { UserContext } from 'context';
import { useRouter } from 'hooks';

export const useLogin = (values) => {
  const mutate = useMutation(LOGIN);
  const { dispatch } = useContext(UserContext);
  const { history } = useRouter();
  const { email, password } = values;

  mutate({ variables: { email, password } })
    .then((result) => {
      const { data: { signIn } } = result;
      localStorage.setItem('token', signIn.token);
      localStorage.setItem('refreshToken', signIn.refreshToken);
      dispatch({
        type: 'setCurrentUser',
        user: signIn.user,
      });
      history.push('/');
    })
    .catch(error => console.log('ERROR', error));
};

export const signUp = () => {};
