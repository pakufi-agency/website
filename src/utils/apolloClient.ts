import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
  uri: process.env.STRAPI_GRAPHQL_ENDPOINT,
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
  },
  cache: new InMemoryCache()
  // HELPER: These config remove cache which might be useful for development
  // cache: new InMemoryCache({
  //   typePolicies: {
  //     Query: {
  //       fields: {
  //         allData: {
  //           merge: false,
  //         },
  //       },
  //     },
  //   },
  // }),
  // defaultOptions: {
  //   query: {
  //     fetchPolicy: "no-cache",
  //     //errorPolicy: 'all', // To handle errors properly
  //   },
  // },
})
};

export default createApolloClient;
