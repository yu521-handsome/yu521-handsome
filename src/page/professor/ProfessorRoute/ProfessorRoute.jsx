import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from '../Home/Home';

export default class ProfessorRoute extends Component {
  render() {
    return (
    <div>
        <Switch>
        <Route path="/professor/home" component={Home}/>
        <Redirect to="/professor/home"/>
        </Switch>
    </div>);
  }
}
