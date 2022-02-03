import React, { Component } from 'react';
import {Route,Routes,Navigate} from 'react-router-dom';
import AccountInfor from './AccountInfor/AccountInfor';
import AccountSet from './AccountSet/AccountSet';
import CourseInfor from './CourseInfor/CourseInfor';
import CourseSet from './CourseSet/CourseSet';

export default class TestRouter extends Component {
  render() {
    return(
        <Routes>
        <Route path="courseInfor" elements={<CourseInfor/>}/>
        <Route path="courseSet" elements={<CourseSet/>}/>
        <Route path="AccountInfor" elements={<AccountInfor/>}/>
        <Route path="AccountSet" elements={<AccountSet/>}/>
        <Route path="" element = {<Navigate to="courseInfor" />} /> 
        </Routes>
    )
  }
}
