import React from 'react';
//import gql from 'graphql-tag';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import App from './App';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
link: new HttpLink({uri: '/api'}),
  cache: new InMemoryCache(),
})

ReactDOM.render(
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
    document.getElementById('root'),
);

//client.query({
//  query: gql`query getC{
//                      c{
//                         title,
//                         author,
//                         description,
//                         topic,
//                         url
//                         }
//                      }
//  `,
//})
//  .then(data => console.log(data))
//  .catch(error => console.error(error));