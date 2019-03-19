import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import AlertCircle from 'react-feather/dist/icons/alert-circle';
import { Alert } from 'styled/common';
import { Field, Input, Error } from 'styled/form';
import { Button } from 'styled/button';
import Spinner from 'styled/spinner';
import { useLogin } from 'hooks/auth';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('invalidEmail')
    .required('requiredEmpty'),
  password: yup
    .string()
    .required('requiredEmpty')
    .min(6, 'passwordLength'),
});

const LoginForm = () => {
  const [error, setError] = useState(null);
  const submitLogin = useLogin();
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
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
        isValid,
      }) => {
        return (
          <>
            {error && (
              <Alert danger>
                <AlertCircle />
                <span>
                  {t(error)}
                  { error === 'emailNotVerified' && (
                    <>
                      <br />
                      <Link to="/resend">{t('resendEmail')}</Link>
                    </>
                  )}
                </span>
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
                <Error>{touched.email && t(errors.email)}</Error>
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
                <Error>{touched.password && t(errors.password)}</Error>
              </Field>
              <Button primary block large disabled={isSubmitting} type="submit">
                { isSubmitting ? <Spinner white /> : t('login.index') }
              </Button>
            </form>
          </>
        );
      }}
    />
  );
};

export default LoginForm;
