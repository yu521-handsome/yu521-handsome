import React, { Component } from 'react';
import {Route,Routes,Navigate} from 'react-router-dom';
import AccountRoute from '../accountLink/AccountRoute/AccountRoute';
import CapstoneRoute from '../capstoneProject/CapstoneRoute';
import GradingRoute from '../grading/GradingRoute/GradingRoute';
import GroupRouter from '../group/GroupRouter/GroupRouter';
import Home from '../Home/Home';

export default class ProfessorRoute extends Component {
  render() {
    return (
    <div>
        <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path='grading/*' element = {<GradingRoute/>}/>
        <Route path='capstoneProject/*' element = {<CapstoneRoute/>}/>
        <Route path='group/*' element = {<GroupRouter/>}/>
        <Route path='account/*' element = {<AccountRoute/>}/>
        <Route path="" element = {<Navigate to="home" />} /> 
        </Routes>
    </div>);
  }
}
