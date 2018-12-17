import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './login/Login';
import Home from './home/Home';
import PageNotFound from './page-not-found/PageNotFound';
import App from './App';

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

const Routes = () => {
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/app" component={App} />
            <Route path="/home" component={Home} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    </BrowserRouter>
}