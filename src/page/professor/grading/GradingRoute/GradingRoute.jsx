import React, { Component } from 'react';
import {Route,Routes,Navigate} from 'react-router-dom';
import GradingInfor from '../GradingInfor/GradingInfor'

export default class GradingRoute extends Component {
  render() {
    return (
        <div>
            <Routes>
            <Route path="infor" element={<GradingInfor/>}/>
            <Route path="" element = {<Navigate to="infor" />} /> 
            </Routes>
        </div>);
  }
}
