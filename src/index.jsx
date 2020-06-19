import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './Components/app';
import './style/main.scss';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
