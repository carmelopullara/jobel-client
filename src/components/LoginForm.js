import React from 'react';
import { Formik } from 'formik';
import { Field, Input } from 'styled/form';
import { useLogin } from 'hooks/auth';

const LoginForm = () => {
  const { submitLogin } = useLogin();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        submitLogin(values);
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
