import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div>
            <div className="p-5 mb-4 bg-light round-3" style={{width: '80%', marginLeft: '10%', marginRight: '10%'}}>
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Account Information</h1>
                    <p className="col-md-8 fs-4">You can search the lists for students and industry experts for a specific course and class.</p>
                </div>
            </div>
        </div>
    )
  }
}
