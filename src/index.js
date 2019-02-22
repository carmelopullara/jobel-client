import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo-hooks';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloLink } from 'apollo-link';
import UserContext from './contexts/UserContext';
import authReducer from './reducers/authReducer';
import App from './components/App';

const httpLink = new HttpLink({ uri: 'http://localhost:3001/graphql' });

const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'x-token': localStorage.getItem('token') || '',
      'x-refresh-token': localStorage.getItem('refreshToken') || '',
    },
  });

  return forward(operation);
});

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const {
      response: { headers },
    } = operation.getContext();
    if (headers) {
      const token = headers.get('x-token');
      const refreshToken = headers.get('x-refresh-token');

      if (token) {
        localStorage.setItem('token', token);
      }

      if (refreshToken) {
        localStorage.setItem('refreshToken', refreshToken);
      }
    }

    return response;
  });
});

const httpLinkWithMiddleware = afterwareLink.concat(middlewareLink.concat(httpLink));

const client = new ApolloClient({
  link: httpLinkWithMiddleware,
  cache: new InMemoryCache(),
});

const Root = () => {
  const [{ currentUser }, dispatch] = useReducer(authReducer, { currentUser: null });

  return (
    <UserContext.Provider value={{ currentUser, dispatch }}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </UserContext.Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
