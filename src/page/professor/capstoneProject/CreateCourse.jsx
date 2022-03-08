import React, { Component } from 'react'
import Notice from '../../../components/professor/capstoneProject/createCourse/Notice'
import NavigationBar from '../../../components/professor/NavigationBar/NavigationBar'

export default class CreateCourse extends Component {
  state = {
    subjectCode:'',
    themeTitle:'',
  }

  saveSubjectCode = (event)=> {
    this.setState({subjectCode:event.target.value})
  }

  saveThemeTitle = (event) => {
    this.setState({themeTitle:event.target.value})
  }


  handleSubmit = (event)=> {
    event.preventDefault()
    const {subjectCode,themeTitle,professor} = this.state
    const HEADER = {
      'Accept':'application/json,text/plain,*/*',
      'Content-Type':'application/json'
    }
    const BODY = {
      code:subjectCode,
      theme:themeTitle,
    }

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
            <section id="setup-course" className="contact-clean" style={{background: 'rgba(249,242,243,0.98)', marginTop: '7%',paddingRight: '50px',paddingLeft: '50px'}}>
                <form method="post" style={{marginTop: 53}} onSubmit={this.handleSubmit}>
                    <h2 className="text-center" style={{marginBottom: 20}}>Setup Course</h2><small className="form-text" style={{marginTop: '-13px', color: 'var(--bs-red)'}}>Please input all the required information.</small>
                    <div id="subject-code-1" style={{marginTop: 5}}><small className="form-text">Subject Code</small>
                    <input className="form-control" type="text" name = 'subjectCode' onChange={this.saveSubjectCode}/></div>
                    <div id="theme-title-1" style={{marginTop: 5}}><small className="form-text">Theme Title</small>
                    <input className="form-control" type="text" name='theme Title' onChange={this.saveThemeTitle}/></div>
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
