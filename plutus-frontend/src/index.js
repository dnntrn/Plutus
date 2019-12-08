import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Dashboard from "./dashboard";
import Recommendations from "./recommendations";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Router
} from "react-router-dom";

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path ="/recommendations" component = {Recommendations}/>
  </BrowserRouter>,
  document.getElementById('root'));


serviceWorker.unregister();
