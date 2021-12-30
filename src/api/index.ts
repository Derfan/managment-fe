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
    element1: clients(search: { page: $page, pageSize: $pageSize, seed: "e3fb85f6afd79635" }) {
      ...CoreClientFields
    }

    element2: clients(search: { page: $page, pageSize: $pageSize, seed: "b29b7be181d9d77b" }) {
      ...CoreClientFields
    }

    element3: clients(search: { page: $page, pageSize: $pageSize, seed: "4acb8906b9864275" }) {
      ...CoreClientFields
    }

    element4: clients(search: { page: $page, pageSize: $pageSize, seed: "c324ad1beee707da" }) {
      ...CoreClientFields
    }

    element5: clients(search: { page: $page, pageSize: $pageSize, seed: "8bbbfd4048fc713d" }) {
      ...CoreClientFields
    }

    element6: clients(search: { page: $page, pageSize: $pageSize, seed: "ba94e590903df38a" }) {
      ...CoreClientFields
    }

    element7: clients(search: { page: $page, pageSize: $pageSize, seed: "12c56af1d711e2af" }) {
      ...CoreClientFields
    }

    element8: clients(search: { page: $page, pageSize: $pageSize, seed: "fe8c0d8610cb6dd1" }) {
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
