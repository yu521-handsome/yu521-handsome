import React, { Component } from 'react';
import {Route,Routes,Navigate} from 'react-router-dom';
import CapstoneRoute from '../capstoneProject/CapstoneRoute';
import GradingRoute from '../grading/GradingRoute/GradingRoute';
import Home from '../Home/Home';
import TestRouter from '../TestRouter'

export default class ProfessorRoute extends Component {
  render() {
    return (
    <div>
        <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path='grading/*' element = {<GradingRoute/>}/>
        <Route path="test" element={<TestRouter/>}/>
        <Route path='capstoneProject/*' element = {CapstoneRoute}/>
        <Route path="" element = {<Navigate to="home" />} /> 
        </Routes>
    </div>);
  }
}
