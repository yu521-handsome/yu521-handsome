import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
        <div>
            <div className="p-5 mb-4 bg-light round-3" style={{marginTop: '7%'}}>
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Grading</h1>
                    <p className="col-md-8 fs-4">This function enables professors to grade for their students' performance, including quiz, project, report, and the completion of the course. Click the button below and grade for each component. The overall
                    <a className="btn btn-light btn-lg" role="button" id="overall-information" href="#overall-information">Overall Informaton</a>&nbsp;
                    will be shown in the page below. Professors can also
                    <a className="btn btn-light btn-lg" role="button" id="issue-badge" href="#badge-example">Issue Badge</a> 
                    for the outstanding students&nbsp;</p>
                    <a className="btn btn-primary btn-lg" role="button" href="P-4.2.Grade%20report.html">Report</a>
                    <a className="btn btn-light btn-lg" role="button" href="P-4.3.Grade%20project.html">Project</a>
                    <a className="btn btn-primary btn-lg" role="button" href="P-4.4.Grade%20quiz.html">Quiz</a>
                    <a className="btn btn-light btn-lg" role="button" href="P-4.5.Grade%20overall.html">Course Completion</a>
                </div>
            </div>
        </div>
    )
  }
}
