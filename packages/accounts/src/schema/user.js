import gql from 'graphql-tag';

export const GET_CURRENT_USER = gql`
  {
    me {
      id
      email
      firstName
      lastName
      type
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
        type
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation SignUp($firstName: String!, $lastName: String!, $email: String!, $password: String!, $type: String!) {
    signUp(firstName: $firstName, lastName: $lastName, email: $email, password: $password, type: $type) {
      id
      email
      type
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
        type
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
