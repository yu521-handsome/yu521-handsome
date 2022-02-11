import React, { Component } from 'react';
import background from "../../../../../img/professor/badgeImage.png";

export default class BadgeInfor extends Component {
  render() {
    return (
        <div>
            <div className="container" style={{width: '100%',maxWidth: '1400px',marginBottom: '10%'}}>
                <div className="photo-card" style={{marginTop: '10%'}}>
                    <div className="photo-background" style={{backgroundImage:`url(${background})`}}></div>
                    <div className="photo-details">
                        <h1>Issue Badge</h1>
                        <p>This badge can be issued to students that satisfy the criteria professors set up. First, professors need to go to Badge Setting function to decide how to issue badge and make criteria. Then professors can issue badge for a specific student by inputting student id, or they can upload a file giving all the students' name and student id.</p>
                        <div className="photo-tags">
                            <ul>
                                <li><a className="text-capitalize" href="P-6.Badge%20Setting.html">Badge setting</a></li>
                                <li><a className="text-capitalize" href="#badge-issue">Issue Badge</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
