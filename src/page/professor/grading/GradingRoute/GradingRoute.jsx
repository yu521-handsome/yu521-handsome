import React, { Component } from 'react';
import {Route,Routes,Navigate} from 'react-router-dom';
import GradingInfor from '../GradingInfor/GradingInfor'
import GradeReport from '../GradeReport/GradeReport'
import GradeProject from '../GradeProject/GradeProject'
import GradeQuiz from '../GradeQuiz/GradeQuiz'
import GradeOverall from '../GradeOverall/GradeOverall'

export default class GradingRoute extends Component {
  render() {
    return (
        <div>
            <Routes>
            <Route path="infor" element={<GradingInfor/>}/>
            <Route path="report" element={<GradeReport/>}/>
            <Route path="project" element={<GradeProject/>}/>
            <Route path="quiz" element={<GradeQuiz/>}/>
            <Route path="overall" element={<GradeOverall/>}/>
            <Route path="" element = {<Navigate to="infor" />} /> 
            </Routes>
        </div>);
  }
}
