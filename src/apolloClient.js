import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // GraphQL backend URL
  cache: new InMemoryCache(), // Caching for performance
});

export default client;
