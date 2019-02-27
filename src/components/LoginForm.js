import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import AlertCircle from 'react-feather/dist/icons/alert-circle';
import Alert from 'styled/alert';
import { Field, Input } from 'styled/form';
import { Button } from 'styled/button';
import { useLogin } from 'hooks/auth';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const [error, setError] = useState(null);
  const { submitLogin } = useLogin();
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validateOnChange={false}
      validationSchema={yup.object().shape({
        email: yup
          .string()
          .email('invalidEmail')
          .required(''),
        password: yup
          .string()
          .required('')
          .min(6, 'passwordLength'),
      })}
      onSubmit={(values, actions) => {
        submitLogin(values, actions).catch(e => setError(e));
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => {
        return (
          <>
            {error && (
              <Alert danger>
                <AlertCircle />
                <span>{t(error)}</span>
              </Alert>
            )}
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
                />
                <span>{touched.email && errors.email}</span>
              </Field>
              <Field>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  hasError={touched.password && errors.password}
                  required
                  large
                />
                <span>{touched.password && errors.password}</span>
              </Field>
              <Button primary block large disabled={isSubmitting} type="submit">
                Login
              </Button>
            </form>
          </>
        );
      }}
    />
  );
};

export default LoginForm;
