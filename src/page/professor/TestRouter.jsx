import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import AccountInfor from './AccountInfor/AccountInfor';
import AccountSet from './AccountSet/AccountSet';
import CourseInfor from './CourseInfor/CourseInfor';
import CourseSet from './CourseSet/CourseSet';

export default class TestRouter extends Component {
  render() {
    return(
        <Switch>
        <Route path="/professor/test/courseInfor" component={CourseInfor}/>
        <Route path="/professor/test/courseSet" component={CourseSet}/>
        <Route path="/professor/test/AccountInfor" component={AccountInfor}/>
        <Route path="/professor/test/AccountSet" component={AccountSet}/>
        <Redirect to="/professor/test/courseInfor"/>
        </Switch>
    )
  }
}
