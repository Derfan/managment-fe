import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

import { App } from "./App";
import "./styles/index.css";

const API_URL = 'https://derfan-management-gateway.herokuapp.com/';

const httpLink = createHttpLink({ uri: API_URL });

const authLink = setContext((_, { headers = {} }) => {
  const token = window.localStorage.getItem('token');

  if (token) headers.authorization = `Bearer ${token}`;

  return { headers };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ApolloProvider>
    </StrictMode>,
    document.getElementById("app")
);
