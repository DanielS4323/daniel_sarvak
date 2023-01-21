import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { Provider } from "react-redux";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    return graphqlErrors.map(({ message, location, path }) => {
      return alert(`Graphql  error ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000" })]);

const client = new ApolloClient({ cache: new InMemoryCache(), link: link });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
);
