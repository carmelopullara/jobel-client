import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { RouterContext } from 'context';

const CustomRouter = ({ children }) => (
  <BrowserRouter>
    <Route>
      {routeProps => <RouterContext.Provider value={routeProps}>{children}</RouterContext.Provider>}
    </Route>
  </BrowserRouter>
);

export default CustomRouter;
