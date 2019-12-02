import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Dashboard from "./dashboard";
import {
  BrowserRouter,
  HashRouter,
  Route,
} from "react-router-dom";

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route path="/dashboard" component={Dashboard} />
  </BrowserRouter>,
  document.getElementById('root'));


serviceWorker.unregister();
