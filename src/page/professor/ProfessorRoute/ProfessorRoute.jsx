import React, { Component } from 'react';
import {Route,Navigate,Routes} from 'react-router-dom';
import Home from '../Home/Home';

export default class ProfessorRoute extends Component {
  render() {
    return (
    <div>
        <Routes>
        <Route path="/professor/home" element={<Home/>}/>
        <Route path="*" element={<Navigate to="/professor/home"/>} />
        </Routes>
    </div>);
  }
}
