import React, { Component } from 'react';
import {Route,Navigate, Routes} from 'react-router-dom';
import Home from '../Home/Home';

export default class IndustryRoute extends Component {
  render() {
    return (
    <div>
        <Routes>
        <Route path="/industry/home" element={<Home/>}/>
        <Route path="*" element={<Navigate to="/industry/home"/>} />
        </Routes>
    </div>
    )
  }
}
