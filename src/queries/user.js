import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      refreshToken
      user {
        id
        email
      }
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
