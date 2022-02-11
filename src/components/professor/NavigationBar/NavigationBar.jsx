import React, { Component } from 'react';

export default class NavigationBar extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top" id="mainNav" style={{background: "#9f2536"}}>
                <div className="container"><a className="navbar-brand" href="#page-top">TCPCM</a><button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" className="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"/></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto text-uppercase">
                            <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">functions&nbsp;</a>
                                <div className="dropdown-menu"><a className="dropdown-item text-capitalize" href="P-%201.Professor%20course.html">Capstone Project</a><a className="dropdown-item text-capitalize" href="P-2.1.Professor%20account%20setup.html">Account Setup</a><a className="dropdown-item text-capitalize" href="P-3.1.Student%20Grouping.html">Student Grouping</a><a className="dropdown-item text-capitalize" href="P-4.1.Grading.html">Grading</a><a className="dropdown-item text-capitalize" href="P-5.Course%20report.html">Course Report</a><a className="dropdown-item text-capitalize" href="P-6.Badge%20Setting.html">Badge Setting</a></div>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="contactpage.html">Contact</a></li>
                            <li className="nav-item"><a className="nav-link" href="1.%20Professor&nbsp;%20Home%20Page.html"><i className="fa fa-home" style={{width: "24.375px", fontSize: "24.4px"}}/></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
  }
}
