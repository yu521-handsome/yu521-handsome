import React, { Component } from 'react'
import {Route,Routes,Navigate} from 'react-router-dom';
import CapstoneInfor from './CapstoneInfor';
import CreateClass from './CreateClass'
import CreateCourse from './CreateCourse';
import CreateMilestone from './CreateMilestone'
import CreateProject from './CreateProject';
import CreateQuiz from './CreateQuiz';
import CreateReport from './CreateReport';

export default class CapstoneRoute extends Component {
  render() {
    return (
      <div>
          <Routes>
              <Route path="infor" element={<CapstoneInfor/>}/>
              <Route path="createClass" element={<CreateClass/>}/>
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
