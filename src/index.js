import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import "antd/dist/antd.css";

import HomePage from "./pages/HomePage";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={(props) => <HomePage {...props} />} />
      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
