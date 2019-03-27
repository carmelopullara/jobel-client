import gql from 'graphql-tag';

export const GET_CURRENT_USER = gql`
  {
    me {
      id
      email
      firstName
      lastName
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
        firstName
        lastName
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

export const FORGOT_PASSWORD = gql`
  mutation RequestPasswordReset($email: String!) {
    requestPasswordReset(email: $email) {
      success
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation ResetPassword($passwordToken: String!, $password: String!) {
    resetPassword(passwordToken: $passwordToken, password: $password) {
      token
      refreshToken
      user {
        id
        email
        firstName
        lastName
      }
    }
  }
`;

export const CHECK_TOKEN = gql`
  query CheckResetToken($token: String!) {
    checkResetToken(token: $token) {
      success
    }
  }
`;
