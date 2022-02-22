import React, { Component } from 'react'
import Notice from '../../../components/professor/capstoneProject/createClass/Notice'
import NavigationBar from '../../../components/professor/NavigationBar/NavigationBar'

export default class CreateClass extends Component {
  state = {
    id:'',
    code:'',
    chiefProfessor:'brian'
  }

  saveId = (event)=> {
    this.setState({id:event.target.value})
  }

  saveCode = (event)=> {
    this.setState({code:event.target.value})
  }

  handleSubmit = (event)=> {
    event.preventDefault()
    const {id,code,chiefProfessor} = this.state
    const HEADER = {
      'Accept':'application/json,text/plain,*/*',
      'Content-Type':'application/json'
    }
    const BODY = {
      courseID:id,
      componentCode:code,
      chiefProfessor:chiefProfessor}
    fetch('/api1/classes',{
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
        <section id="class-setup" className="contact-clean" style={{background: 'rgba(249,242,243,0.98)', marginTop: '7%'}}>
          <form method="post" onSubmit={this.handleSubmit}>
            <h2 className="text-center">Class Setup</h2>
            <div id="course-id" className="mb-3"><small className="form-text">Course ID</small>
            <input className="form-control" type="text" onChange={this.saveId}/></div>
            <div id="component-code" className="mb-3"><small className="form-text">Component Code</small>
            <input className="form-control" type="text" onChange={this.saveCode}/></div>
            <div className="mb-3">
              <button className="btn btn-secondary" href="#modal-3" style={{background: 'var(--bs-primary)'}} data-bs-target="#modal-3" data-bs-toggle="modal" type='submit'>SETUP</button>
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
