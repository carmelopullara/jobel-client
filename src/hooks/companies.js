/* eslint-disable import/prefer-default-export */
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { useRouter } from 'hooks/common';

const CREATE_COMPANY = gql`
  mutation CreateCompany($name: String!, $website: String, $country: String!) {
    createCompany(name: $name, website: $website, country: $country) {
      id
    }
  }
`;

export const useCompanySignup = () => {
  const mutate = useMutation(CREATE_COMPANY);
  const { history } = useRouter();

  const createCompany = (values, actions) => {
    return new Promise((resolve, reject) => {
      const { name, website, country } = values;
      mutate({ variables: { name, website, country } })
        .then(() => history.push('/'))
        .catch((error) => {
          actions.setSubmitting(false);
          reject(error.graphQLErrors[0].message);
        });
    });
  };

  return createCompany;
};
