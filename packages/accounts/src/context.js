import { createContext } from 'react';

const isProd = process.env.NODE_ENV === 'production';

export const SERVER_URL = isProd ? 'https://api.jobel.co/graphql' : 'http://localhost:3001/graphql';
export const APP_URL = isProd ? 'https://app.jobel.co' : 'http://localhost:3000';
export const PORTAL_URL = isProd ? 'https://my.jobel.co' : 'http://localhost:5000';

export const UserContext = createContext({});
export const UserProvider = UserContext.Provider;
export const CompanyContext = createContext({});
export const CompanyProvider = CompanyContext.Provider;
export const RouterContext = createContext({});
