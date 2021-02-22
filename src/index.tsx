import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter} from 'react-router-dom';
import { InMemoryCache, ApolloClient , ApolloProvider } from '@apollo/client';



const client = new ApolloClient({
  uri:'https://apollo-assign-server.dantelentsoe.repl.co/',
  cache :new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <BrowserRouter>
    <ChakraProvider>
    <App />
   </ChakraProvider>
    </BrowserRouter>     
    </ApolloProvider>
    
  </React.StrictMode>
,
  document.getElementById('root')
);

reportWebVitals();
