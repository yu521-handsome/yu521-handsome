import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
        <div>
            <div className="p-5 mb-4 bg-light round-3" style={{marginTop: '7%'}}>
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Account Setup</h1>
                    <p className="col-md-8 fs-4">You can upload student lists and expert lists excel files using the format we recommended in the <strong>template</strong>. By finishing account linking, you can assign specific courses and classes to students and industry experts.</p>
                    <Link className="btn btn-primary btn-lg" role="button" to="/professor/account/infor">Account Information</Link>
                    <div className="row" style={{marginTop: 20}}>
                        <div className="col">
                            <p>Download :&nbsp;<a class="d-inline-flex" href="#" style="padding-left: 0px;width: 20%;">StudentListTemplate.xlsx</a><a class="d-inline-flex" href="#" style="padding-left: 0px;">IndustryExpertListTemplate.xlsx</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
