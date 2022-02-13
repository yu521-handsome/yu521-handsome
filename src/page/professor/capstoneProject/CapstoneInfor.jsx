import React, { Component } from 'react'
import NavigationBar from '../../../components/professor/NavigationBar/NavigationBar'
import ClassInfor from './ClassInfor'
import CourseInfor from './CourseInfor'
import MilestoneInfor from './MilestoneInfor'
import ProjectInfor from './ProjectInfor'
import QuizInfor from './QuizInfor'
import ReportInfor from './ReportInfor'

export default class CapstoneInfor extends Component {
  render() {
    return (
        <div>
            <NavigationBar/>
            <div className="p-5 mb-4 bg-light round-3">
                <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Capstone Project Course</h1>
                <p className="col-md-8 fs-4">This page shows all the information related to the Capstone Project Course. Professors need to setup course, class, and assessments for their students, and review all the information here. They can also update or change information.</p><a className="btn btn-primary btn-lg" role="button" href="#information-table">Information &amp; Setup</a>
                </div>
            </div>
            <div className="card" id="information-table">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs" role="tablist">
                        <li className="nav-item"><a className="nav-link active" id="item-1-1-tab" role="tab" aria-controls="item-1-1" aria-selected="true" href="#item-1-1" data-bs-toggle="tab">Course</a></li>
                        <li className="nav-item"><a className="nav-link" id="item-1-2-tab" role="tab" aria-controls="item-1-2" aria-selected="false" href="#item-1-2" data-bs-toggle="tab">Class</a></li>
                        <li className="nav-item"><a className="nav-link" id="item-1-3-tab" role="tab" aria-controls="item-1-3" aria-selected="false" href="#item-1-3" data-bs-toggle="tab">Project</a></li>
                        <li className="nav-item"><a className="nav-link" id="item-1-4-tab" role="tab" aria-controls="item-1-4" aria-selected="false" href="#item-1-4" data-bs-toggle="tab">Report</a></li>
                        <li className="nav-item"><a className="nav-link" id="item-1-5-tab" role="tab" aria-controls="item-1-5" aria-selected="false" href="#item-1-5" data-bs-toggle="tab">Quiz</a></li>
                        <li className="nav-item"><a className="nav-link" id="item-1-6-tab" role="tab" aria-controls="item-1-6" aria-selected="false" href="#item-1-6" data-bs-toggle="tab">Milestone</a></li>
                    </ul>
                    </div>
                    <div className="card-body">
                    <div id="nav-tabContent" className="tab-content">
                        <CourseInfor/>
                        <ClassInfor/>
                        <ProjectInfor/>
                        <ReportInfor/>
                        <QuizInfor/>
                        <MilestoneInfor/>
                    </div>
                </div>
            </div>

            <script src="assets/bootstrap/js/bootstrap.min.js"></script>
            <script src="assets/js/agency.js"></script>
            <script src="assets/js/Table-with-search.js"></script>
        </div>
    )
  }
}
