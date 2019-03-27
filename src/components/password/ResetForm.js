import React, { useState } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import AlertCircle from 'react-feather/dist/icons/alert-circle';
import { Alert } from 'styled/common';
import { Field, Input, Error } from 'styled/form';
import { Button } from 'styled/button';
import Spinner from 'styled/spinner';
import { useResetPassword } from 'hooks/auth';
import { useTranslation } from 'react-i18next';

const validationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'passwordLength')
    .required('requiredEmpty'),
  repeatPassword: yup
    .string()
    .min(8, 'passwordLength')
    .required('requiredEmpty')
    .oneOf([yup.ref('password')], 'passwordMismatch'),
});

const ResetForm = ({ token }) => {
  const [error, setError] = useState(null);
  const submitReset = useResetPassword();
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        password: '',
        repeatPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        setError(null);
        submitReset(token, values, actions).catch(e => setError(e));
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
                  type="password"
                  name="password"
                  placeholder={t('password.reset.new')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  hasError={touched.password && errors.password}
                  required
                  large
                />
                <Error>{touched.password && t(errors.password)}</Error>
              </Field>
              <Field>
                <Input
                  type="password"
                  name="repeatPassword"
                  placeholder={t('password.reset.repeat')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.repeatPassword}
                  hasError={touched.repeatPassword && errors.repeatPassword}
                  required
                  large
                />
                <Error>{touched.repeatPassword && t(errors.repeatPassword)}</Error>
              </Field>
              <Button primary block large disabled={isSubmitting} type="submit">
                {isSubmitting ? <Spinner white /> : t('password.reset.button')}
              </Button>
            </form>
          </>
        );
      }}
    />
  );
};

ResetForm.propTypes = {
  token: PropTypes.string.isRequired,
};

export default ResetForm;
