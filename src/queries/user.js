import { gql } from 'apollo-boost';

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      refreshToken
    }
  }
`;

export const GET_CURRENT_USER = gql`
  {
    me {
      id
      email
    }
  }
`;
