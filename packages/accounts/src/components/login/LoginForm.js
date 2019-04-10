import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import AlertCircle from 'react-feather/dist/icons/alert-circle';
import {
  Alert, PasswordLink, Field, Input, Error, Button, Spinner,
} from '@jobel/ui';
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
  const isJobSeeker = mode === 'JobSeeker';

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
                  {error === 'emailNotVerified' && (
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
              <Field wrap={isJobSeeker ? 1 : 0}>
                <Button primary large block={mode === 'Customer'} disabled={isSubmitting} type="submit">
                  {isSubmitting ? <Spinner white /> : t('login.index')}
                </Button>
                <PasswordLink to="/password/forgot" left={isJobSeeker ? 1 : 0}>
                  {t('login.forgot')}
                </PasswordLink>
              </Field>
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
