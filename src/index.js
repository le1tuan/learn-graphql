import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom'

const networkInterface = createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj8y468r10iao01281zlyojdb'
});
const client = new ApolloClient({
    networkInterface
});




ReactDOM.render(<BrowserRouter><ApolloProvider client={client}><App /></ApolloProvider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
