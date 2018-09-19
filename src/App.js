import React from 'react';
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";
import cvPage from './containers/cv_page/cv';
import './index.css';

const App = () => (
  <Switch>
    <Route
      path="/"
      component={cvPage}
    />
  </Switch>
);

export default withRouter(App);
