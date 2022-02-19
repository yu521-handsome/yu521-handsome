import React, { Component } from 'react'

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
                        <p style={{fontSize: 16}}>Click the GROUP INFORMATION to view the group you just made, and the new group id is BDB04. Click CLOSE to form another group.&nbsp;<br /></p>
                    </div>
                    <div className="modal-footer"><button className="btn btn-light" type="button" data-bs-dismiss="modal">Close</button><a className="btn btn-primary" role="button" href="P-3.2.Grouping%20information.html">Group information</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
