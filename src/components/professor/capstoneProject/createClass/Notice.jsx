import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class 
 extends Component {
  render() {
    return (
      <div>
           <div className="modal fade" role="dialog" tabIndex={-1} id="modal-3">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title"><strong>Successful setup a new class</strong><br /></h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                      <p>Click the COURSE OUTLINE to go back to course outline check the new class information.<br /></p>
                    </div>
                    <div className="modal-footer">
                      <button className="btn btn-light" type="button" data-bs-dismiss="modal">Close</button>
                      <Link className="btn btn-primary" role="button" to="/professor/capstoneProject/infor">COURSE OUTLINE</Link>
                    </div>
                  </div>
                </div>
            </div>
      </div>
    )
  }
}
