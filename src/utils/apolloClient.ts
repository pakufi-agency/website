import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.STRAPI_GRAPHQL_ENDPOINT,
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
  },
  cache: new InMemoryCache(),
});

export default client;
