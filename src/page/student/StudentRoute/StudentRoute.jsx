import React, { Component } from 'react';
import {Route, Routes,Navigate} from 'react-router-dom';
import Home from '../Home/Home';

export default class StudentRoute extends Component {
    render() {
        return (
        <div>
            <Routes>
            <Route path="home" element={<Home/>}/>
            <Route path="" element = {<Navigate to="home" />} /> 
            </Routes>
        </div>);
      }
}
