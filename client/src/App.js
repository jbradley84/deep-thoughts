import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

// establish link to GraphQL server at graphql enpoint
const httpLink = createHttpLink({
   uri: '/graphql',
});

// instantiate Apollo Client instance & create connection to API endpoint
const client = new ApolloClient({
   link: httpLink,
   // instantiate new cache object
   cache: new InMemoryCache(),
});

function App() {
   // return JSX code
   return (
      // enable application to interact with Apollo Client instance
      <ApolloProvider client={client}>
         <div className='flex-column justify-flex-start min-100-vh'>
            <Header />
            <div className='container'>
               <Home />
            </div>
            <Footer />
         </div>
      </ApolloProvider>
   );
}

export default App;
