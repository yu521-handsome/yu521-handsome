import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Notice extends Component {
  render() {
    return (
        <div>
            <div className="modal fade" role="dialog" tabIndex={-1} id="modal-1">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Successfully setup</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <p>Please click ACCOUNT INFORMATION to check the updated information.&nbsp;</p>
                    </div>
                    <div className="modal-footer">
                        <Link to="/professor/account/set"><button className="btn btn-light" type="button" data-bs-dismiss="modal">Close</button></Link>
                        <Link to="/professor/account/infor"><button className="btn btn-primary" type="button" data-bs-dismiss="modal">Accunt Information</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
