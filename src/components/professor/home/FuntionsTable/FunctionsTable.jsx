import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class FunctionsTable extends Component {
  render() {
    return (
        <div>
          <section id="functions">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="text-uppercase section-heading">Functions</h2>
                    <h3 className="text-muted section-subheading">Professors are expected to make full use of our website to manage capstone project and support their students.</h3>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4"><Link id="capstone-project" to="/professor/capstoneProject/infor/course"><span className="fa-stack fa-4x"><i className="fa fa-circle fa-stack-2x text-primary" /><i className="fa fa-flag fa-stack-1x fa-inverse" /></span></Link>
                    <h4 className="section-heading">Capstone Project</h4>
                    <p className="text-muted">Professors can setup everything about the capstone project course (AF4912), including course, class, report, quiz, project, and milestones.</p>
                    </div>
                    <div className="col-md-4"><a id="acccount-setup" href="P-2.1.Professor%20account%20setup.html"><span className="fa-stack fa-4x"><i className="fa fa-circle fa-stack-2x text-primary" /><i className="fa fa-link fa-stack-1x fa-inverse" /></span></a>
                    <h4 className="section-heading">Account Setup</h4>
                    <p className="text-muted">Professors can find their students' and industry mentors' accounts, then group all relevant personnel to a course.</p>
                    </div>
                    <div className="col-md-4"><Link to='/professor/group/set'><span className="fa-stack fa-4x"><i className="fa fa-circle fa-stack-2x text-primary" /><i className="fa fa-group fa-stack-1x fa-inverse" /></span></Link>
                    <h4 className="section-heading">Student Grouping</h4>
                    <p className="text-muted">Professors can review student grouping information here.</p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4"><a href="P-4.1.Grading.html"><span className="fa-stack fa-4x"><i className="fa fa-circle fa-stack-2x text-primary" /><i className="fa fa-graduation-cap fa-stack-1x fa-inverse" /></span></a>
                    <h4 className="section-heading">Grading</h4>
                    <p className="text-muted">Professors can update students' grades here and issue badge to outstanding students.</p>
                    </div>
                    <div className="col-md-4"><a href="P-5.Course%20report.html"><span className="fa-stack fa-4x"><i className="fa fa-circle fa-stack-2x text-primary" /><i className="fa fa-file-o fa-stack-1x fa-inverse" /></span></a>
                    <h4 className="section-heading">Course Report</h4>
                    <p className="text-muted">Professors can write a report for the whole course here.</p>
                    </div>
                    <div className="col-md-4"><a href="P-6.Badge%20Setting.html"><span className="fa-stack fa-4x"><i className="fa fa-circle fa-stack-2x text-primary" /><i className="fa fa-lock fa-stack-1x fa-inverse" /></span></a>
                    <h4 className="section-heading">Badge Setting</h4>
                    <p className="text-muted">Professors can change issuing criteria to issue badge for students who meet requirements.</p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
  }
}
