import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CourseInforTable from '../../../components/professor/capstoneProject/infor/CourseInforTable/CourseInforTable'

export default class CourseInfor extends Component {
  render() {
    return (
        <div>
            <div className="tab-pane fade show active" role="tabpanel">
                <h4>Capstone Project - Course Information</h4>
                <p>The table below shows all the information of courses you set up. You can setup a new course. You can also change or update the information of existing courses.</p>
                <Link className="btn btn-primary" role="button" to="/professor/capstoneProject/createCourse">Setup Course</Link>
                <CourseInforTable/>
                <div style={{width: '50%', marginLeft: '25%', marginRight: '25%'}}>
                <div className="dropdown" style={{marginTop: '10%'}}><button className="btn btn-primary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">Change Information&nbsp;</button>
                <div className="dropdown-menu"><a className="dropdown-item" id="change-course" style={{background: '#ffffff'}} href="P-1.1.2.Professor%20course%20change%20information.html">Course&nbsp;</a><a className="dropdown-item" id="change-class" href="P-1.2.2.Professor%20class%20change%20information.html">Class</a><a className="dropdown-item" id="change-report" href="P-1.3.2.Professor%20project%20change%20information.html">Project</a><a className="dropdown-item" id="change-quiz" href="P-1.4.2.Professor%20report%20change%20information.html">Report</a><a className="dropdown-item" id="change-project" href="P-1.5.2.Professor%20quiz%20change%20information.html">Quiz</a><a className="dropdown-item" id="change-milestone" href="P-1.6.2.Professor%20milestone%20change%20information.html">Milestone</a></div>
                </div>
                </div>
            </div>
        </div>
    )
  }
}
