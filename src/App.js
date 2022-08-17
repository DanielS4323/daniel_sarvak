import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import "./App.css";
import GetGraph from "./components/GetGraph";

const errorLink = onError(({ graphqlErrors, networkError}) => {
  if(graphqlErrors) {
   return graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql  error ${message}`)
    })
  }
})

const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000" }),]);

const client = new ApolloClient({ cache: new InMemoryCache(), link: link });



const App = () => {
  return <ApolloProvider client={client}>App
    <GetGraph/>
  </ApolloProvider>;
};

export default App;
