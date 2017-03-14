import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

render(
  <Router
    routes={routes}
    history={browserHistory}
    key={process.env.NODE_ENV !== "production" ? Math.random() : false}
  />,
  document.getElementById('root')
)
