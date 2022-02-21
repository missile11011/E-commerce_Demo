import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav"
import Home from "./pages/Home.js"
import Login from "./pages/Login.js"
import Signup from "./pages/Signup.js"
import Footer from "./components/Footer"
import Account from "./pages/Account"
import Product from "./pages/Product"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from "./utils/Globalstate"

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql/',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          <Nav/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path="/login" component={Login}/>
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/account' component={Account}/>
              <Route exact path='/item/:_id' component={Product}/>
            </Switch>
          <Footer/>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
