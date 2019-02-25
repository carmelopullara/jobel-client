import React, { useContext } from 'react';
import { Formik } from 'formik';
import { Field, Input } from 'styled/form';
import { useMutation } from 'react-apollo-hooks';
import { LOGIN } from 'queries/user';
import { UserContext } from 'context';
import { useRouter } from 'hooks';

const LoginForm = () => {
  const mutate = useMutation(LOGIN);
  const { dispatch } = useContext(UserContext);
  const { history } = useRouter();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async ({ email, password }, actions) => {
        const variables = { email, password };
        mutate({ variables })
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
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Field>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                hasError={touched.email && errors.email}
                required
                large
                shadow
              />
            </Field>
            <Field>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                required
                large
                shadow
              />
            </Field>
            <button type="submit">submit</button>
          </form>
        );
      }}
    />
  );
};

export default LoginForm;
