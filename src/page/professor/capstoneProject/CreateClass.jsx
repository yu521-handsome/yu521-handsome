import React, { Component } from 'react'
import Notice from '../../../components/professor/capstoneProject/createClass/Notice'
import NavigationBar from '../../../components/professor/NavigationBar/NavigationBar'

export default class CreateClass extends Component {
  render() {
    return (
    <div>
        <NavigationBar/>
        <section id="class-setup" className="contact-clean" style={{background: 'rgba(249,242,243,0.98)', marginTop: '7%'}}>
          <form method="post">
            <h2 className="text-center">Class Setup</h2>
            <div id="course-id" className="mb-3"><small className="form-text">Course ID</small><input className="form-control" type="text" /></div>
            <div id="component-code" className="mb-3"><small className="form-text">Component Code</small><input className="form-control" type="text" /></div>
            <div className="mb-3"><a className="btn btn-secondary" role="button" href="#modal-3" style={{background: 'var(--bs-primary)'}} data-bs-target="#modal-3" data-bs-toggle="modal">SETUP</a>
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
