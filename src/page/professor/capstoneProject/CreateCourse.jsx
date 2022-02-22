import React, { Component } from 'react'
import Notice from '../../../components/professor/capstoneProject/createCourse/Notice'
import NavigationBar from '../../../components/professor/NavigationBar/NavigationBar'

export default class CreateCourse extends Component {
  state = {
    subjectTitle:'',
    subjectCode:'',
    themeTitle:'',
    professor:['','',''],
    chiefProfessor:'brian'
  }

  saveSubjectTitle = (event)=> {
    this.setState({subjectTitle:event.target.value})
  }

  saveSubjectCode = (event)=> {
    this.setState({subjectCode:event.target.value})
  }

  saveThemeTitle = (event) => {
    this.setState({themeTitle:event.target.value})
  }

  saveProfessor1 = (event) => {
    let {professor} = this.state
    professor[0] = event.target.value
    this.setState({professor:professor})
  }

  saveProfessor2 = (event) => {
    let {professor} = this.state
    professor[1] = event.target.value
    this.setState({professor:professor})
  }

  saveProfessor3 = (event) => {
    var {professor} = this.state
    professor[2] = event.target.value
    this.setState({professor:professor})
  }

  handleSubmit = (event)=> {
    event.preventDefault()
    const {subjectTitle,subjectCode,themeTitle,professor,chiefProfessor} = this.state
    var submitProfessors=[]
    for(var i=0; i < professor.length; i++) {
      if(professor[i] !== '') {
        submitProfessors.push(professor[i])
      }
    }
    const HEADER = {
      'Accept':'application/json,text/plain,*/*',
      'Content-Type':'application/json'
    }
    const BODY = {
      code:subjectCode,
      title:subjectTitle,
      theme:themeTitle,
      chiefProfessor:chiefProfessor,
      deputyProfessors:submitProfessors}

    fetch('/api1/courses',{
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
            <section id="setup-course" className="contact-clean" style={{background: 'rgba(249,242,243,0.98)', marginTop: '7%'}}>
                <form method="post" style={{marginTop: 53}} onSubmit={this.handleSubmit}>
                    <h2 className="text-center" style={{marginBottom: 20}}>Setup Course</h2><small className="form-text" style={{marginTop: '-13px', color: 'var(--bs-red)'}}>Please input all the required information.</small>
                    <div id="subject-title-1"><small className="form-text">Subject Title</small>
                    <input className="form-control" type="text" name='subjectTitle' onChange={this.saveSubjectTitle}/></div>
                    <div id="subject-code-1" style={{marginTop: 5}}><small className="form-text">Subject Code</small>
                    <input className="form-control" type="text" name = 'subjectCode' onChange={this.saveSubjectCode}/></div>
                    <div id="theme-title-1" style={{marginTop: 5}}><small className="form-text">Theme Title</small>
                    <input className="form-control" type="text" name='theme Title' onChange={this.saveThemeTitle}/></div>
                    <div id="teaching-staff-1" style={{marginTop: 5}}><small className="form-text">Deputy Professor</small>
                    <input className="form-control" type="text" name='professor1' onChange={this.saveProfessor1}/>
                    <input className="form-control" type="text" name='professor2' onChange={this.saveProfessor2}/>
                    <input className="form-control" type="text" name='professor3' onChange={this.saveProfessor3}/></div>
                    <div className="mb-3" style={{marginTop: 27}}>
                      <button className="btn btn-secondary" style={{background: 'var(--bs-primary)'}} data-bs-target="#modal-2" data-bs-toggle="modal" href="#modal-2" type='submit'>Setup</button>
                    <Notice/>
                    </div>
                </form>
            </section>
            <script src="assets/bootstrap/js/bootstrap.min.js"></script>
            <script src="assets/js/agency.js"></script>
            <script src="assets/js/Table-with-search.js"></script>
        </div>
    )
  }
}
