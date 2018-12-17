import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './login/Login';
import Home from './home/Home';
import PageNotFound from './page-not-found/PageNotFound';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/home" component={Home} />
            {/* <Route path="/home" component={Home} /> */}
            <Route path="*" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}