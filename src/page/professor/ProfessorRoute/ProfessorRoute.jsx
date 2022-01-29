import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from '../Home/Home';
import TestRouter from '../TestRouter'

export default class ProfessorRoute extends Component {
  render() {
    return (
    <div>
        <Switch>
        <Route path="/professor/home" component={Home}/>
        <Route path="/professor/test" component={TestRouter}/>
        <Redirect to="/professor/test"/>
        </Switch>
    </div>);
  }
}
