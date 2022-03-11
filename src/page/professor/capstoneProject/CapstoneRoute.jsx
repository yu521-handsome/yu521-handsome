import React, { Component } from 'react'
import {Route,Routes,Navigate} from 'react-router-dom';
import CapstoneInfor from './CapstoneInfor';
import CreateCourse from './CreateCourse';
import CreateMilestone from './CreateMilestone'
import CreateProject from './CreateProject';
import CreateQuiz from './CreateQuiz';
import CreateReport from './CreateReport';
import CourseInfor from './CourseInfor'
import MilestoneInfor from './MilestoneInfor'
import ProjectInfor from './ProjectInfor'
import QuizInfor from './QuizInfor'
import ReportInfor from './ReportInfor'

export default class CapstoneRoute extends Component {
  render() {
    return (
      <div>
          <Routes>
              <Route path="infor" element={<CapstoneInfor/>}>
                <Route path="course" element={<CourseInfor/>}/>
                <Route path="project" element={<ProjectInfor/>}/>
                <Route path="report" element={<ReportInfor/>}/>
                <Route path="quiz" element={<QuizInfor/>}/>
                <Route path="milestone" element={<MilestoneInfor/>}/>
                <Route path="" element = {<Navigate to="course" />} /> 
              </Route>
              <Route path="createCourse" element={<CreateCourse/>}/>
              <Route path="createMilestone" element={<CreateMilestone/>}/>
              <Route path="createProject" element={<CreateProject/>}/>
              <Route path="createQuiz" element={<CreateQuiz/>}/>
              <Route path="createReport" element={<CreateReport/>}/>
              <Route path="" element = {<Navigate to="infor" />} /> 
          </Routes>
      </div>);
  }
}
