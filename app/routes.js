import React from 'react';
import { Route } from 'react-router';

import App from './modules';
import Settings from './modules/Settings';
import Timer from './modules/Timer';
import Notes from './modules/Notes';
import Info from './modules/Info';
import Intervals from './modules/Intervals';

export default (
  <Route component={App}>
    <Route exact path="/" component={Settings} />
    <Route path="/timer" component={Timer} />
    <Route path="/notes" component={Notes} />
    <Route path="/info" component={Info} />
    <Route path="/intervals" component={Intervals} />
  </Route>
);