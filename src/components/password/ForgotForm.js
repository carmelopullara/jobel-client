import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import AlertCircle from 'react-feather/dist/icons/alert-circle';
import { Alert } from 'styled/common';
import { Field, Input, Error } from 'styled/form';
import { Button } from 'styled/button';
import Spinner from 'styled/spinner';
import { useForgotPassword } from 'hooks/auth';
import { useTranslation } from 'react-i18next';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('invalidEmail')
    .required('requiredEmpty'),
});

const ForgotForm = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const submitForgot = useForgotPassword();
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
        submitForgot(values, actions)
          .then(() => {
            setError(null);
            setSuccess(true);
          })
          .catch(e => setError(e));
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
            {success && (
              <Alert success>
                <AlertCircle />
                <span>
                  {t('password.forgot.success')}
                  .
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
                  disabled={success}
                  required
                  large
                />
                <Error>{touched.email && t(errors.email)}</Error>
              </Field>
              <Button primary block large disabled={isSubmitting || success} type="submit">
                {isSubmitting ? <Spinner white /> : t('password.forgot.button')}
              </Button>
            </form>
          </>
        );
      }}
    />
  );
};

export default ForgotForm;
