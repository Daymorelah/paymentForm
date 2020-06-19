import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PaymentForm from './PaymentForm';
import Dashboard from './dashboard';
const App = () => (
  <div id='app-container'>
    <Switch>
      <Route exact path="/" component={PaymentForm} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  </div>
);

export default App;