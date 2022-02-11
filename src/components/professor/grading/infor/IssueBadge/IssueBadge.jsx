import React, { Component } from 'react';

export default class IssueBadge extends Component {
  render() {
    return (
        <div>
            <section id="badge-issue" className="contact-clean" style={{background: 'rgba(249,242,243,0.98)',width: '100%',marginLeft: '0'}}>
                <form method="post">
                    <h2 className="text-center">Badge Issue</h2>
                    <div><small className="form-text">Issue Badge for</small><select className="form-select">
                            <optgroup label="This is a group" defaultValue={12}>
                                <option value="12" >Individual Report</option>
                                <option value="13">Student Project</option>
                                <option value="14">Milestone</option>
                            </optgroup>
                        </select></div>
                    <div><small className="form-text">Student ID</small><input className="form-control" type="text" placeholder="Enter student id or upload a file"/></div>
                    <div><small className="form-text">Student List File Upload</small><input className="form-control" type="file"/><small className="form-text text-danger">Please download template file first.</small>
                        <p>Template:&nbsp;<a href="1">Link</a></p>
                    </div>
                    <div className="mb-3"><a className="btn btn-primary" role="button" href="#modal-1" data-bs-target="#modal-1" data-bs-toggle="modal">Confirm and signed</a></div>
                </form>
            </section>
        </div>
    )
  }
}
