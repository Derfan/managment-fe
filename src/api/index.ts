import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query Users {
    users {
      id
      firstName
      lastName
      token
    }
  }
`;

export const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout {
      success
    }
  }
`;
