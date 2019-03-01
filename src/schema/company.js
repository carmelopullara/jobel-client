/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const CREATE_COMPANY = gql`
  mutation CreateCompany($owner: ID!, $name: String!) {
    createCompany(owner: $owner, name: $name) {
      id
    }
  }
`;
