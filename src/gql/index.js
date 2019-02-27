import gql from 'graphql-tag';

export const GET_CURRENT_USER = gql`
  {
    me {
      id
      email
    }
  }
`;

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