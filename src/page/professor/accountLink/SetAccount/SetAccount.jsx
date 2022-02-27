import React, { Component } from 'react'
import Header from '../../../../components/professor/accountLink/accountSet/Header/Header'
import Notice from '../../../../components/professor/accountLink/accountSet/Notice/Notice'
import NavigationBar from '../../../../components/professor/NavigationBar/NavigationBar'

export default class SetAccount extends Component {
  state ={
    classInfor:[
      {
        ID:"1",
      }
    ],
    classID:"",
    experts:[],
    students:[],
  }
  componentDidMount(){
    //get the classID
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

  saveClass = (event) => {
    this.setState({classID:event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {classID, experts,students} = this.state
    const HEADER = {
      'Accept':'application/json,text/plain,*/*',
      'Content-Type':'application/json'
    }
    const BODY = {
      experts:experts,
      students,students
    }
    fetch(`/classes/${classID}`,{
      method:'patch',
      headers:HEADER,
      body:JSON.stringify(BODY)
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
    }).catch((error) => {
      console.log(error)
    })
  }


  render() {
    return (
        <div>
          <NavigationBar/>
          <Header/>
          <section className="contact-clean" style={{background: 'rgba(249,242,243,0.98)'}}>
            <form method="post" style={{padding: 40, maxWidth: 700}} onSubmit = {this.handleSubmit}>
              <h2 className="text-center">Account Linking</h2>
              <div id="class-id" style={{marginTop: 15}}>
                <small className="form-text">Class ID</small>
                <select className="form-select" onChange={this.saveClass} defalutValue="">
                   <option key={-1} value="">-</option>
                  {this.state.classInfor.map((item,index) => {
                        return(<option key={index} value={item.ID}>{item.ID}</option>)
                  })}                  
                </select>
              </div>
              <div id="student-list" style={{marginTop: 15}}><small className="form-text">Student List</small><input className="form-control" type="file" /></div>
              <div id="industry-expert-list" style={{marginTop: 15}}><small className="form-text">Industry Expert List</small><input className="form-control" type="file" /></div>
              <div className="mb-3">
                <button className="btn btn-secondary" type="submit" href="#modal-1" style={{background: 'var(--bs-primary)', marginTop: 20}} data-bs-target="#modal-1" data-bs-toggle="modal">Confirm</button>
                <Notice/>
              </div>
            </form>
          </section>
        </div>

    )
  }
}
