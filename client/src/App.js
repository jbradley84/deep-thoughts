import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// page components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

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
         <Router>
            <div className='flex-column justify-flex-start min-100-vh'>
               <Header />
               <div className='container'>
                  <Routes>
                     <Route
                        path="/"
                        element={<Home />}
                     />
                     <Route
                        path="/login"
                        element={<Login />}
                     />
                     <Route
                        path="/signup"
                        element={<Signup />}
                     />
                     <Route path="/profile">
                        <Route path=":username" element={<Profile />} />
                        <Route path="" element={<Profile />} />
                     </Route>
                     <Route
                        path="/thought/:id"
                        element={<SingleThought />}
                     />

                     <Route
                        path="*"
                        element={<NoMatch />}
                     />
                  </Routes>
               </div>
               <Footer />
            </div>
         </Router>
      </ApolloProvider>
   );
}

export default App;
