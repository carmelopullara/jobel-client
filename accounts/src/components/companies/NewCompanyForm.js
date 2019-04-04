import React, { useState } from 'react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import AlertCircle from 'react-feather/dist/icons/alert-circle';
import { Alert } from '@jobel/ui/common';
import { Field, Input, Error } from '@jobel/ui/form';
import Select from '@jobel/ui/select';
import { Button } from '@jobel/ui/button';
import Spinner from '@jobel/ui/spinner';
import { useCompanySignup } from 'hooks/companies';
import countries from 'utils/countries.json';

const validationSchema = yup.object().shape({
  name: yup.string().required('requiredEmpty'),
  website: yup.string().url('invalidUrl'),
  country: yup.string().required('requiredEmpty'),
});

const LoginForm = () => {
  const [error, setError] = useState(null);
  const createCompany = useCompanySignup();
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        name: '',
        website: '',
        country: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        createCompany(values, actions).catch(e => setError(e));
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
                  type="text"
                  name="name"
                  placeholder={t('companyName')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  hasError={touched.name && errors.name}
                  required
                  large
                />
                <Error>{touched.name && t(errors.name)}</Error>
              </Field>
              <Field>
                <Input
                  type="url"
                  name="website"
                  placeholder={t('companyWebsite')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.website}
                  hasError={touched.website && errors.website}
                  large
                />
                <Error>{touched.website && t(errors.website)}</Error>
              </Field>
              <Field>
                <Select
                  name="country"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.country}
                  hasError={touched.country && errors.country}
                  required
                  large
                >
                  <option value="">Country</option>
                  {countries.map((country) => {
                    return (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    );
                  })}
                </Select>
              </Field>
              <Button primary block large disabled={isSubmitting} type="submit">
                {isSubmitting ? <Spinner white /> : t('startYourTrial')}
              </Button>
            </form>
          </>
        );
      }}
    />
  );
};

export default LoginForm;
