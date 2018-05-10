import 'whatwg-fetch';
import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import "./main.css";
import store from './store'

const App = () => <Router>
    <Switch>
        <Route path="/" component={Home} />
    </Switch>
</Router>

render(
    <Provider store={store}><App /></Provider>, document.getElementById("root"));
