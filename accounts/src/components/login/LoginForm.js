import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import AlertCircle from 'react-feather/dist/icons/alert-circle';
import { Alert, PasswordLink } from '@jobel/ui/common';
import { Field, Input, Error } from '@jobel/ui/form';
import { Button } from '@jobel/ui/button';
import Spinner from '@jobel/ui/spinner';
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

const LoginForm = ({ mode }) => {
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
        setError(null);
        submitLogin(values, actions, mode).catch(e => setError(e));
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
              <PasswordLink to="/password/forgot">{t('login.forgot')}</PasswordLink>
            </form>
          </>
        );
      }}
    />
  );
};

LoginForm.propTypes = {
  mode: PropTypes.oneOf(['JobSeeker', 'Customer']),
};

LoginForm.defaultProps = {
  mode: 'Customer',
};

export default LoginForm;
