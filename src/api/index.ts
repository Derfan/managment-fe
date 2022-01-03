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

  query Dashboard($page: Int!, $pageSize: Int!) {
    employees: clients(search: { page: $page, pageSize: $pageSize, seed: "e3fb85f6afd79635" }) {
      ...CoreClientFields
    }
  }
`;

export const GET_CUSTOMERS = gql`
  ${CLIENT_FRAGMENT}

  query Clients($search: ClientSearch!) {
    clients(search: $search) {
      ...CoreClientFields
    }
  }
`;
