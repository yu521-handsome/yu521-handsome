import React, { Component } from 'react'
import Notice from '../../../../components/professor/group/groupStudent/Notice/Notice'
import NavigationBar from '../../../../components/professor/NavigationBar/NavigationBar'

export default class GroupStudent extends Component {
  state = {
    ok:false,
    courseInfor:[],
    expertsList:[],
    courseID:"",
    submitExpert:"",
    groupName:"",
    students:['','',''],
    groupID:"",
    notes:"",
    userEmail:"p1@gmail.com",
  }

  componentDidMount(){
    //get the course list
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

  handleCourse = (event) => {
    if(event.target.value !== ""){
      this.setState({courseID:event.target.value})
      let choosedId = event.target.value
      let expertsList = []
      const courseInfor = this.state.courseInfor
      for(var i=0; i < courseInfor.length; i++) {
        if(courseInfor[i].id === choosedId) {
          expertsList = courseInfor[i].experts.map(item => item)
        }
      }
      this.setState({expertsList:expertsList})
    }
  }

  handleExpert = (event) => {
    if(event.target.value !== ""){
      this.setState({submitExpert:event.target.value})
    }
  }

  saveGroupName = (event) => {
    this.setState({groupName:event.target.value})
  }

  saveStudent1 = (event) => {
    let {students} = this.state
    students[0] = event.target.value
    this.setState({students:students})
  }

  saveStudent2 = (event) => {
    let {students} = this.state
    students[1] = event.target.value
    this.setState({students:students})
  }

  saveStudent3 = (event) => {
    let {students} = this.state
    students[2] = event.target.value
    this.setState({students:students})
  }

  saveNote = (event) => {
    this.setState({notes:event.target.value})
  }

  saveCourseID = (event) => {
    this.setState({submitCourseID:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {submitExpert,students,courseID,groupName,notes} = this.state
    var submitStudents=[]
    for(var i=0; i < students.length; i++) {
      if(students[i] !== '') {
        submitStudents.push(students[i])
      }
    }
    const HEADER = {
      'Accept':'application/json,text/plain,*/*',
      'Content-Type':'application/json'
    }
    const BODY = {
      name:groupName,
      notes:notes,
      courseID:courseID,
      expert:submitExpert,
      students:submitStudents
    }

    fetch('/api1/groups',{
      method:'post',
      headers:HEADER,
      body:JSON.stringify(BODY)
    }).then((res)=>{
      this.setState({ok:res.ok})
      return res.json()
    }).then((data)=>{
      if(this.state.ok) {
        this.setState({groupID:data.ID})
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
        <div>
          <NavigationBar/>
          <section className="contact-clean" style={{background: 'rgba(249,242,243,0.98)', padding: '80px 0px', marginTop: '7%'}}>
            <form method="post" onSubmit={this.handleSubmit}>
              <h2 className="text-center">Group Student</h2>
              <div id="class-id" style={{marginTop: 10}}>
                <small className="form-text">Course ID</small>
                <select className="form-select" onChange={this.handleCourse} defaultValue="">
                    <option key={-1} value="">Choose a course</option>
                    {this.state.courseInfor.map((item,index) => {
                      return(<option key={index} value={item.id}>{item.id}</option>)
                    })}
                </select>
              </div>
              <div id="industry-expert" style={{marginTop: 10}}>
                <small className="form-text">Industry Expert</small>
                <select className="form-select" onChange={this.handleExpert} defaultValue="">
                    <option key={-1} value="">Choose an Expert</option>
                    {this.state.expertsList.map((item,index) => {
                      return(<option key={index} value={item}>{item}</option>)
                    })}
                </select>
              </div>
              <div id="group-name" style={{marginTop: 10}}><small className="form-text">Group Name</small>
              <input className="form-control" type="text" onChange={this.saveGroupName}/></div>
              <div id="student-id" style={{marginTop: 10}}><small className="form-text">Student ID</small>
              <input className="form-control" type="text" onChange={this.saveStudent1}/>
              <input className="form-control" type="text" style={{marginTop: 10}} onChange={this.saveStudent2}/>
              <input className="form-control" type="text" style={{marginTop: 10}} onChange={this.saveStudent3}/></div>
              <div id="note" className="mb-3" style={{marginTop: 10}}><small className="form-text">Note:</small>
              <textarea className="form-control" name="message" placeholder="Message" rows={14} defaultValue={""} onChange={this.saveNote}/></div>
              <div className="mb-3">
                <button className="btn btn-secondary" href="#modal-1" data-bs-target="#modal-1" data-bs-toggle="modal" style={{background: 'var(--bs-primary)'}} type='submit'>confirm</button>
                <Notice groupID={this.state.groupID}/>
              </div>
            </form>
          </section>
       </div>

    )
  }
}
