import React, { Component } from 'react'
import NavigationBar from '../../../components/professor/NavigationBar/NavigationBar'
import Notice from '../../../components/professor/capstoneProject/createQuiz/Notice/Notice'

export default class CreateQuiz extends Component {
  state = {
    title:"",
    courseID:"",
    description:"",
    courseInfor:[],
    isValid:false,
    noticeHeader:"",
    quizId:"",
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
      else {
        alert("Course get failed.")
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

  handleSubmit = async (event)=> {
    event.preventDefault()
    let isValid = this.errordectection()
    let noticeHeader=""
    if(!isValid) {
      noticeHeader = "Please input all the information"
      this.setState({isValid:isValid,noticeHeader:noticeHeader})
      return
    }
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
    await fetch('/api1/quizzes',{
      method:'post',
      headers:HEADER,
      body:JSON.stringify(BODY)
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      this.dataProcess(data)
    }).catch((error)=>{
      this.errorHandale(error)
    })
  }

  errordectection(){
    const {title,courseID,description} = this.state
    if(title==="" || courseID==="" || description==="") {
      return false
    }
    return true
  }

  dataProcess(data) {
    let noticeHeader=""
    if(data.status < 200 || data.status > 300) {
      noticeHeader = data.message
      this.setState({isValid:false,noticeHeader:noticeHeader})
    }
    else {
      this.setState({quizId:data.id,isValid:true})
    }
  }

  errorHandale(error) {
    let noticeHeader = "Quiz set failed.Unexpected error occurs"
    this.setState({isValid:false,noticeHeader:noticeHeader})
    console.log(error)
  }
  render() {
    const {quizId,isValid,noticeHeader} = this.state
    let noticeInfo = {
      header:noticeHeader,
      body:<div></div>
    }
    if(isValid) {
      noticeInfo = {
        header:"Successful setup a new quiz",
        body:<div><p>Your Quiz ID is {quizId}.<br/></p><p>Click the COURSE OUTLINE to go back to course outline check the new quiz information.<br /></p></div>
      }
    }
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
              <button className="btn btn-secondary" style={{background: 'var(--bs-primary)'}} data-bs-target="#modal-2" data-bs-toggle="modal" type='submit'>SETUP</button>
              <Notice noticeInfo = {noticeInfo}/>
            </div>
          </form>
        </section>
      </div>
    )
  }
}
