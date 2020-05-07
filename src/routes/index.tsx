import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboars';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/repositories" component={Repository} />
  </Switch>
);

export default Routes;
