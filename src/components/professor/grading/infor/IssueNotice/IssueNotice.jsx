import React, { Component } from 'react';

export default class IssueNotice extends Component {
  render() {
    return (
        <div>
            <div className="modal fade" role="dialog" tabIndex="-1" id="modal-1">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Successfully Confirmed and Signed</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Badges have been issued and sent to the students.</p>
                        </div>
                        <div className="modal-footer"><button className="btn btn-light" type="button" data-bs-dismiss="modal">Close</button><a className="btn btn-primary" role="button" href="1.%20Professor&nbsp;%20Home%20Page.html">Home Page</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
