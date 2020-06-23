import React from 'react';

import { Switch, Route } from 'react-router-dom';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn}></Route>
      <Route path="/signup" component={SignUp}></Route>
    </Switch>
  );
};

export default Routes;
