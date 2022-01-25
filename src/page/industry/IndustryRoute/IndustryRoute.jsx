import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from '../Home/Home';

export default class IndustryRoute extends Component {
  render() {
    return (
    <div>
        <Switch>
        <Route path="/industry/home" component={Home}/>
        <Redirect to="/industry/home"/>
        </Switch>
    </div>
    )
  }
}
