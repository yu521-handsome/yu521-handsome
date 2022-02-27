import React, { Component } from 'react'
import Notice from '../../../../components/professor/group/groupStudent/Notice/Notice'
import NavigationBar from '../../../../components/professor/NavigationBar/NavigationBar'

export default class GroupStudent extends Component {
  state = {
    ok:false,
    classInfor:[
      {
        courseID:"",
        ID:"",
        componentCode:"",
        chiefProfessor:"",
        experts:[],
        students:[]
      }
    ],
    expertsList:[],
    submitCourseID:"",
    submitExpert:"",
    chiefProfessor:"brain",
    groupName:"",
    students:['','',''],
    groupID:"",
    note:""

  }
  componentDidMount(){
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
    fetch('/api1/classes',{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error"){
        this.setState({classInfor:response})
      }
    }).catch((e)=>{
      console.log("error")
    })
  }

  handleClass = (event) => {
    if(event.target.value !== "null"){
      let choosedID = event.target.value
      let expertsList = []
      const classInfor = this.state.classInfor
      for(var i=0; i < classInfor.length; i++) {
        if(classInfor[i].ID === choosedID) {
          expertsList = classInfor[i].experts.map(item => item)
          this.setState({submitCourseID:classInfor[i].courseID})
        }
      }
      this.setState({expertsList:expertsList})
    }
    else{
      this.setState({expertsList:[]})
    }
  }

  handleExpert = (event) => {
    if(event.target.value !== "null"){
      let choosedExpert = event.target.value
      this.setState({submitExpert:choosedExpert})
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
    this.setState({note:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {submitExpert,students,chiefProfessor,submitCourseID,groupName,note} = this.state
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
      note:note,
      courseID:submitCourseID,
      chiefProfessor:chiefProfessor,
      expert:submitExpert,
      students:submitStudents
    }

    fetch('/group',{
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
                <small className="form-text">Class ID</small>
                <select className="form-select" onChange={this.handleClass} defaultValue="">
                    {this.state.classInfor.map((item,index) => {
                      return(<option key={index} value={item.ID}>{item.ID}</option>)
                    })}
                </select>
              </div>
              <div id="industry-expert" style={{marginTop: 10}}>
                <small className="form-text">Industry Expert</small>
                <select className="form-select" onChange={this.handleExpert} defaultValue="">
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
