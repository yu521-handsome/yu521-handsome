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
                        <h4 className="modal-title">Successfully grouping</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <p style={{fontSize: 16}}>Click the GROUP INFORMATION to view the group you just made, and the new group id is ${this.props.groupID}. Click CLOSE to form another group.&nbsp;<br /></p>
                    </div>
                    <div className="modal-footer"><button className="btn btn-light" type="button" data-bs-dismiss="modal">Close</button>
                    <Link to='/professor/group/infor'><button className="btn btn-primary" data-bs-dismiss="modal">Group information</button></Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
