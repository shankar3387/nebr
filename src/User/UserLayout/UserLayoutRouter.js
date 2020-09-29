import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const UserLayoutRouter = ({component: Component,restricted, ...rest}) => {
  return (
      <Route {...rest} render={props => (
          restricted ?
           <Redirect to="/login" />
           :  <Component {...props} />
      )} />
  );
};

export default UserLayoutRouter;