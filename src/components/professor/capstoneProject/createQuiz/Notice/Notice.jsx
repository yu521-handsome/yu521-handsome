import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Notice extends Component {
  render() {
    const {noticeInfo} = this.props
    const {header,body} = noticeInfo
    return (
        <div>
            <div className="modal fade" role="dialog" tabIndex={-1} id="modal-2">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title"><strong>{header}</strong><br /></h4>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                      {body}
                    </div>
                    <div className="modal-footer">
                        <Link to = "/professor/capstoneProject/infor"><button className="btn btn-primary" type="button" data-bs-dismiss="modal">COURSE OUTLINE</button></Link>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
  }
}
