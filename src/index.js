import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import "antd/dist/antd.css";

import HomePage from "./pages/HomePage";
import ProductsListPage from "./pages/ProductsListPage";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={(props) => <HomePage {...props} />} />
      <Route
        path="/products"
        render={(props) => <ProductsListPage {...props} />}
      />
      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
