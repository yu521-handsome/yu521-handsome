import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Notice extends Component {
  render() {
    return (
        <div>
            <div className="modal fade" role="dialog" tabIndex={-1} id="modal-2">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Successful setup a new course</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <p>You can click the button to setup classes for this new course or go back to course outline check the new course information.</p>
                        </div>
                        <div className="modal-footer">
                            <Link to = "/professor/capstoneProject/createClass"><button className="btn btn-primary" data-bs-dismiss="modal">Setup Class</button></Link>
                            <Link to = "/professor/capstoneProject/infor"><button className="btn btn-primary" to = "/professor/capstoneProject/infor" data-bs-dismiss="modal">Course outline</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
