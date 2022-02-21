import React, { Component } from 'react'
import Notice from '../../../../components/professor/group/groupStudent/Notice/Notice'
import NavigationBar from '../../../../components/professor/NavigationBar/NavigationBar'

export default class GroupStudent extends Component {
  state = {classInfor:[]}
  componentDidMount(){
    fetch('/classes').then((response)=>{
      return response.json()
    }).then((response) => {
      this.setState({classInfor:response})
    }).catch((e)=>{
      console.log("error")
    })
  }

  render() {
    return (
        <div>
          <NavigationBar/>
          <section className="contact-clean" style={{background: 'rgba(249,242,243,0.98)', padding: '80px 0px', marginTop: '7%'}}>
            <form method="post">
              <h2 className="text-center">Group Student</h2>
              <div id="class-id" style={{marginTop: 10}}><small className="form-text">Class ID</small><select className="form-select">
                  <optgroup label="This is a group">
                    <option value={12} selected>This is item 1</option>
                    <option value={13}>This is item 2</option>
                    <option value={14}>This is item 3</option>
                  </optgroup>
                </select>
              </div>
              <div id="industry-expert" style={{marginTop: 10}}><small className="form-text">Industry Expert</small><select className="form-select">
                  <optgroup label="This is a group">
                    <option value={12} selected>This is item 1</option>
                    <option value={13}>This is item 2</option>
                    <option value={14}>This is item 3</option>
                  </optgroup>
                </select>
              </div>
              <div id="group-name" style={{marginTop: 10}}><small className="form-text">Group Name</small><input className="form-control" type="text" /></div>
              <div id="student-id" style={{marginTop: 10}}><small className="form-text">Student ID</small><input className="form-control" type="text" /><input className="form-control" type="text" style={{marginTop: 10}} /><input className="form-control" type="text" style={{marginTop: 10}} /></div>
              <div id="note" className="mb-3" style={{marginTop: 10}}><small className="form-text">Note:</small><textarea className="form-control" name="message" placeholder="Message" rows={14} defaultValue={""} /></div>
              <div className="mb-3">
                <a className="btn btn-secondary" role="button" href="#modal-1" data-bs-target="#modal-1" data-bs-toggle="modal" style={{background: 'var(--bs-primary)'}}>confirm</a>
                <Notice/>
              </div>
            </form>
          </section>
       </div>

    )
  }
}
