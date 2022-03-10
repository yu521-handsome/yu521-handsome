import React, { Component } from 'react'
import NavigationBar from '../../../components/professor/NavigationBar/NavigationBar'
import Notice from '../../../components/professor/capstoneProject/createQuiz/Notice/Notice'

export default class CreateQuiz extends Component {
  state = {
    title:"",
    courseID:"",
    description:"",
    courseInfor:[],
    userEmail:"p1@gmail.com"
  }

  componentDidMount(){
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
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
        this.setState({courseInfor:response})
      }
    }).catch((e)=>{
      console.log("error")
    })
  }

  saveTitle = (event) => {
    this.setState({title:event.target.value})
  }
  saveCourseID = (event) => {
    this.setState({courseID:event.target.value})
  }

  saveDescription = (event) => {
    this.setState({description:event.target.value})
  }

  handleSubmit = (event)=> {
    event.preventDefault()
    const {title,courseID,description} = this.state
    const HEADER = {
      'Accept':'application/json,text/plain,*/*',
      'Content-Type':'application/json'
    }
    const BODY = {
      courseId:courseID,
      title:title,
      description:description
    }
    fetch('/api1/quizzes',{
      method:'post',
      headers:HEADER,
      body:JSON.stringify(BODY)
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data)
    }).catch(function(error){
      console.log(error)
    })
  }
  render() {
    return (
      <div>
        <NavigationBar/>
        <section id="quiz-setup" className="contact-clean" style={{background: 'rgba(249,242,243,0.98)', marginTop: '7%',paddingRight: '50px',paddingLeft: '50px'}}>
          <form method="post" onSubmit={this.handleSubmit}>
            <h2 className="text-center">Course Quiz Setup</h2>
            <div id="report-name-1" className="mb-3"><small className="form-text">Quiz Name</small>
            <input className="form-control" type="text" onChange={this.saveTitle}/></div>
            <div id="course-id-1" className="mb-3">
                <small className="form-text">Course ID</small>
                <select className="form-select" onChange={this.saveCourseID} defaultValue="">
                  <option key={-1} value="">Choose a course</option>
                  {this.state.courseInfor.map((item,index) => {
                    return(<option key={index} value={item.id}>{item.id}</option>)
                  })}
                </select>
            </div>
            <div id="report-description-1" className="mb-3"><small className="form-text">Quiz Description</small>
            <textarea className="form-control form-control-sm" defaultValue={""} onChange={this.saveDescription}/></div>
            <div className="mb-3">
              <button className="btn btn-secondary" href="#modal-2" style={{background: 'var(--bs-primary)'}} data-bs-target="#modal-2" data-bs-toggle="modal" type='submit'>SETUP</button>
              <Notice/>
            </div>
          </form>
        </section>
      </div>
    )
  }
}
