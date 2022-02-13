import React, { Component } from 'react'
import Notice from '../../../components/professor/capstoneProject/createCourse/Notice'
import NavigationBar from '../../../components/professor/NavigationBar/NavigationBar'

export default class CreateCourse extends Component {
  render() {
    return (
        <div>
            <NavigationBar/>
            <section id="setup-course" className="contact-clean" style={{background: 'rgba(249,242,243,0.98)', marginTop: '7%'}}>
                <form method="post" style={{marginTop: 53}}>
                    <h2 className="text-center" style={{marginBottom: 20}}>Setup Course</h2><small className="form-text" style={{marginTop: '-13px', color: 'var(--bs-red)'}}>Please input all the required information.</small>
                    <div id="subject-title-1"><small className="form-text">Subject Title</small><input className="form-control" type="text" /></div>
                    <div id="subject-code-1" style={{marginTop: 5}}><small className="form-text">Subject Code</small><input className="form-control" type="text" /></div>
                    <div id="theme-title-1" style={{marginTop: 5}}><small className="form-text">Theme Title</small><input className="form-control" type="text" /></div>
                    <div id="teaching-staff-1" style={{marginTop: 5}}><small className="form-text">Deputy Professor</small><input className="form-control" type="text" /><input className="form-control" type="text" /><input className="form-control" type="text" /></div>
                    <div className="mb-3" style={{marginTop: 27}}><a className="btn btn-secondary" role="button" style={{background: 'var(--bs-primary)'}} data-bs-target="#modal-2" data-bs-toggle="modal" href="#modal-2">Setup</a>
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
