import React, { Component } from 'react'
import * as XLSX from 'xlsx';
import Header from '../../../../components/professor/accountLink/accountSet/Header/Header'
import Notice from '../../../../components/professor/accountLink/accountSet/Notice/Notice'
import NavigationBar from '../../../../components/professor/NavigationBar/NavigationBar'

export default class SetAccount extends Component {
  state ={
    courseInfor:[],
    courseId:"",
    experts:[],
    students:[],
    userEmail:"p1@gmail.com"
  }

  componentDidMount(){
    //get the courseId
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
      if(response !== "error"){
        this.setState({courseInfor:response})
      }
    }).catch((e)=>{
      console.log("error")
    })
  }

  saveCourseID = (event) => {
    this.setState({courseId:event.target.value})
  }

  fileOnLoad = (event) => {
    try {
      const { result } = event.target
      const workbook = XLSX.read(result, { type: 'binary' })
      let data = []
      for (const sheet in workbook.Sheets) {
        if (workbook.Sheets.hasOwnProperty(sheet)) {
          data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
          break
        }
      }
      console.log(data);
    } catch (e) {
      console.log('error file type');
      return;
    }
  }

  saveStudents = (file) => {
    const {files} = file.target
    const fileReader = new FileReader()
    fileReader.onload = (event) => {
      try {
        const { result } = event.target
        const workbook = XLSX.read(result, { type: 'binary' })
        let data = []
        for (const sheet in workbook.Sheets) {
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
            break
          }
        }
        var final = []
        for(var i = 0; i < data.length; i++) {
          final.push(data[i].email)
        }
        this.setState({students:final})
      } catch (e) {
        console.log('error file type');
        return;
      }
    }
    fileReader.readAsBinaryString(files[0])
  }

  saveExperts = (file) => {
    const {files} = file.target
    const fileReader = new FileReader()
    fileReader.onload = (event) => {
      try {
        const { result } = event.target
        const workbook = XLSX.read(result, { type: 'binary' })
        let data = []
        for (const sheet in workbook.Sheets) {
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
            break
          }
        }
        var final = []
        for(var i = 0; i < data.length; i++) {
          final.push(data[i].email)
        }
        this.setState({experts:final})
      } catch (e) {
        console.log('error file type');
        return;
      }
    }
    fileReader.readAsBinaryString(files[0])
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {courseId, experts,students} = this.state
    const HEADER = {
      'Accept':'application/json,text/plain,*/*',
      'Content-Type':'application/json'
    }
    const BODY = {
      experts:experts,
      students:students
    }
    fetch(`/api1/courses/${courseId}`,{
      method:'PATCH',
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
          <section className="contact-clean" style={{background: 'rgba(249,242,243,0.98)',paddingRight: '40px',paddingLeft: '40px'}}>
            <form method="post" style={{padding: 40, maxWidth: 700}} onSubmit = {this.handleSubmit}>
              <h2 className="text-center">Account Linking</h2>
              <div id="course-id-1" className="mb-3">
                <small className="form-text">Course ID</small>
                <select className="form-select" onChange={this.saveCourseID} defaultValue="">
                  <option key={-1} value="">Choose a course</option>
                  {this.state.courseInfor.map((item,index) => {
                    return(<option key={index} value={item.id}>{item.id}</option>)
                  })}
                </select>
              </div>
              <div id="student-list" style={{marginTop: 15}}>
                <small className="form-text">Student List</small>
                <input className="form-control" type='file' accept='.xlsx, .xls' onChange={this.saveStudents}/>
              </div>
              <div id="industry-expert-list" style={{marginTop: 15}}>
                <small className="form-text">Industry Expert List</small>
                <input className="form-control" type='file' accept='.xlsx, .xls' onChange={this.saveExperts}/>
              </div>
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
