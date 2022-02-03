import React, { Component } from 'react';
import {Route,Routes,Navigate} from 'react-router-dom';
import Home from '../Home/Home';
import TestRouter from '../TestRouter'

export default class ProfessorRoute extends Component {
  render() {
    return (
    <div>

        <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="test" element={<TestRouter/>}/>
        <Route path="" element = {<Navigate to="home" />} /> 
        </Routes>
    </div>);
  }
}
