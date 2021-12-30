import { gql } from '@apollo/client';

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

export const CREATE_USER = gql`
  mutation CreateUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      success
      message
    }
  }
`;

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

export const DELETE_USER = gql`
  mutation DeleteUser($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId) {
      success
      message
    }
  }
`;

const CLIENT_FRAGMENT = gql`
  fragment CoreClientFields on Client {
    email
    name {
      title
      first
      last
    }
    gender
    dob {
      age
    }
    picture {
      medium
    }
    nat
  }
`;

export const GET_DASHBOARD_INFORMATION = gql`
  ${CLIENT_FRAGMENT}

  query Dashboard($pageSize: Int!) {
    element1: clients(search: { pageSize: $pageSize, page: 1 }) {
      ...CoreClientFields
    }

    element2: clients(search: { pageSize: $pageSize, page: 2 }) {
      ...CoreClientFields
    }

    element3: clients(search: { pageSize: $pageSize, page: 3 }) {
      ...CoreClientFields
    }

    element4: clients(search: { pageSize: $pageSize, page: 4 }) {
      ...CoreClientFields
    }

    element5: clients(search: { pageSize: $pageSize, page: 5 }) {
      ...CoreClientFields
    }
  }
`;

export const GET_CUSTOMERS = gql`
  ${CLIENT_FRAGMENT}

  query Clients($search: Search!) {
    clients(search: $search) {
      ...CoreClientFields
    }
  }
`;
