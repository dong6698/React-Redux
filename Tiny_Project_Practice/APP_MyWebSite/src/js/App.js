import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Settings from "./pages/settings"

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="setting" name="setting" component={Settings}></Route>
    </Route>
  </Router>,
app);


// React router hashHistory need to learn;

