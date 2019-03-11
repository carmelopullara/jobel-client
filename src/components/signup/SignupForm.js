import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import AlertCircle from 'react-feather/dist/icons/alert-circle';
import { Alert } from 'styled/common';
import {
  Field, Input, DoubleField, Error,
} from 'styled/form';
import { Button } from 'styled/button';
import Spinner from 'styled/spinner';
import { useSignup } from 'hooks/auth';
import { useTranslation } from 'react-i18next';

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('requiredEmpty'),
  lastName: yup
    .string()
    .required('requiredEmpty'),
  email: yup
    .string()
    .required('requiredEmpty')
    .email('invalidEmail'),
  password: yup
    .string()
    .required('requiredEmpty')
    .min(6, 'passwordLength'),
});

const SignupForm = () => {
  const [error, setError] = useState(null);
  const submitSignup = useSignup();
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        submitSignup(values, actions).catch(e => setError(e));
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
                <span>{t(error)}</span>
              </Alert>
            )}
            <form onSubmit={handleSubmit}>
              <DoubleField>
                <Field>
                  <Input
                    type="text"
                    name="firstName"
                    placeholder={t('firstName')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    hasError={touched.firstName && errors.firstName}
                    required
                    large
                  />
                  <Error>{touched.firstName && t(errors.firstName)}</Error>
                </Field>
                <Field>
                  <Input
                    type="text"
                    name="lastName"
                    placeholder={t('lastName')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    hasError={touched.lastName && errors.lastName}
                    large
                  />
                  <Error>{touched.lastName && t(errors.lastName)}</Error>
                </Field>
              </DoubleField>
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
              <Button primary block large disabled={isSubmitting || !isValid} type="submit">
                {isSubmitting ? <Spinner white /> : t('getStartedFree')}
              </Button>
            </form>
          </>
        );
      }}
    />
  );
};

export default SignupForm;
