import React, { Component } from 'react';
import {Route,Navigate, Routes} from 'react-router-dom';
import Home from '../Home/Home';

export default class StudentRoute extends Component {
    render() {
        return (
        <div>
            <Routes>
            <Route path="/student/home" element={<Home/>}/>
            <Route path="*" element={<Navigate to="/student/home"/>} />
            </Routes>
        </div>);
      }
}
