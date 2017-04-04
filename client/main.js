import React from 'react';
import ReactDOM from 'react-dom';
import  App from './app/App.js';
import  AppItem from './app/AppItem.js';
import  About from './app/About.js';
import  Layout from './app/Layout.js';
import  Containers from './app/Containers.js';
import  MesosState from './app/MesosState.js';
import  { Router, Route, hashHistory,  }  from 'react-router';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={ Layout }>
      <Route path="apps" component={ App } />
      <Route path="apps/:appId" component={ AppItem } />

      <Route path="containers" component={ Containers } />
      <Route path="mesosState" component={ MesosState } />
    </Route>

    <Route path="about" component={ About } />
  </Router>
), document.getElementById('app'));
