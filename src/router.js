import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Admin from './pages/admin';
import createHistory from 'history/createHashHistory';
let history = createHistory();
//每当路由变化的时候，都会执行这个监听函数
history.listen(loc => {
    if (loc.pathname == '/admin' && !sessionStorage.getItem('username')) {
        history.push('/');
    }
});
//HashRouter内置了history hashHistory 
export default class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/admin" component={Admin} />
                </Switch>
            </Router>
        )
    }
}