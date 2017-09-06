/* eslint no-unused-vars: "off" */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import Root from './Root'
import LoginContainer from './LoginContainer'
import SignupContainer from './SignupContainer'
import MainLayout from './MainLayout'
import DashboardContainer from './DashboardContainer'
import Logout from './Logout'
import Search from './Search'
import AppDetails from './AppDetails'
import './index.css'

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

// see https://github.com/ReactTraining/react-router
render((
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Root}/>
      <Route path="/dashboard" component={DashboardContainer}/>
      <Route path="/login" component={LoginContainer}/>
      <Route path="/signup" component={SignupContainer}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/search" component={Search}/>
      <Route path="/app" component={AppDetails}/>
    </Route>
  </Router>
), document.getElementById('root'))
