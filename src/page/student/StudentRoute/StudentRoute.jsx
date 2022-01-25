import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from '../Home/Home';

export default class StudentRoute extends Component {
    render() {
        return (
        <div>
            <Switch>
            <Route path="/student/home" component={Home}/>
            <Redirect to="/student/home"/>
            </Switch>
        </div>);
      }
}
