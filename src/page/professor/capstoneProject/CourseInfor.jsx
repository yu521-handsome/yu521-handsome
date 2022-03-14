import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CourseInforTable from '../../../components/professor/capstoneProject/infor/CourseInforTable/CourseInforTable'

export default class CourseInfor extends Component {
  state = {
    courseInfor:[],
    userEmail:"p1@gmail.com"
  }
  //create courseInfor
  componentDidMount(){
    let courseInfor = []
    let courseList = []
    let projectList = []
    let quizzesList = []
    let reprotList = []

    courseList = this.getCourses()
    
    for(var i = 0; i < courseList.length; i++) {
      const courseId = courseList[i].id
      const courseTheme = courseList[i].theme
      projectList = this.getProjects(courseId)
      quizzesList = this.getQuizzes(courseId)
      reprotList = this.getReports(courseId)
      let projectId = []
      let reportId = []
      let quizzId = []
      var j
      for(j = 0; j < projectList.length; j++) {
        projectId.push(projectList[i].id)
      }
      for(j = 0; j < quizzesList.length; j++) {
        quizzId.push(quizzesList[i].id)
      }
      for(j = 0; j < reprotList.length; j++) {
        reportId.push(reprotList[i].id)
      }
      let oneCourseInfor = {
        courseId:courseId,
        theme:courseTheme,
        projectId:projectId,
        reportId:reportId,
        quizzId:quizzId,
        mileStoneId:[]
      }
      courseInfor.push(oneCourseInfor)
    }
    this.setState({courseInfor})
  }

  getCourses() {
    let courseList = []
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
    //get course
    fetch(`/api1/courses?chiefProfessor=${this.state.userEmail}`,{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error") {
        courseList = response
      }
      else {
        alert("Courses get failed")
      }
    }).catch((e)=>{
      console.log("error")
    })
    return courseList
  }

  getProjects(courseId) {
    let projectsList = []
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
    //get projects
    fetch(`/api1/projects?courseId=${courseId}`,{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error") {
        projectsList = response
      }
      else {
        alert("Projects get failed")
      }
    }).catch((e)=>{
      console.log("error")
    })
    return projectsList
  }

  getQuizzes(courseId) {
    let quizzesList = []
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
    //get projects
    fetch(`/api1/quizzes?courseId=${courseId}`,{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error") {
        quizzesList = response
      }
      else {
        alert("Quizzes get failed")
      }
    }).catch((e)=>{
      console.log("error")
    })
    return quizzesList
  }

  getReports(courseId) {
    let reportsList = []
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
    //get projects
    fetch(`/api1/reports?courseId=${courseId}`,{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error") {
        reportsList = response
      }
      else {
        alert("Reports get failed")
      }
    }).catch((e)=>{
      console.log("error")
    })
    return reportsList
  }
  render() {
    return (
        <div>
            <div className="tab-pane fade show active" role="tabpanel">
                <h4>Capstone Project - Course Information</h4>
                <p>The table below shows all the information of courses you set up. You can setup a new course. You can also change or update the information of existing courses.</p>
                <Link className="btn btn-primary" role="button" to="/professor/capstoneProject/createCourse">Setup Course</Link>
                {this.state.courseInfor.map((item) => {
                    return(<CourseInforTable courseInfor = {item}/>)
                  })}
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
