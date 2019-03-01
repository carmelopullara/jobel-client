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

export const SIGNUP = gql`
  mutation SignUp($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    signUp(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      id
      email
    }
  }
`;
