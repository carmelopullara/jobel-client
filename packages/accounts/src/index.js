import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo-hooks';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import 'normalize.css/normalize.css';
import 'i18n';
import { UserProvider, SERVER_URL } from './context';
import authReducer from 'reducers/authReducer';
import App from 'components/App';
import { ThemeProvider, GlobalStyle, theme } from '@jobel/ui';

const httpLink = new HttpLink({
  uri: SERVER_URL,
  credentials: 'include',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const Root = () => {
  const initialState = {
    currentUser: null,
    isLoading: true,
    company: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  const value = { state, dispatch };
  return (
    <UserProvider value={value}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <App />
          </>
        </ThemeProvider>
      </ApolloProvider>
    </UserProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
