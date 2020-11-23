import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import {  createBrowserHistory } from 'history'

import main from './pages/main'

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/main" component={main} />
      {/* <Route path="/login" component={Login} /> */}
      <Redirect from="/" to="/main/login" />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
