import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavigationBar extends Component {
    scrollToAnchor = (anchorName) => {
        if(anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if(anchorElement) {
            anchorElement.scrollIntoView()
            }
        }
    }
  render() {
    return (
        <div>
          <nav className="navbar navbar-dark navbar-expand-lg fixed-top" id="mainNav" style={{background: '#9f2536'}}>
                <div className="container">
                  <a className="navbar-brand" href="#page-top">TCPCM</a>
                  <button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" className="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" /></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto text-uppercase">
                    <li className="nav-item dropdown"><div className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown">functions&nbsp;</div>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item text-capitalize" to="/professor/capstoneProject/infor">Capstone Project</Link>
                            <Link className="dropdown-item text-capitalize" to="/professor/account/set">Account Setup</Link>
                            <Link className="dropdown-item text-capitalize" to="/professor/group/set">Student Grouping</Link>
                            <Link className="dropdown-item text-capitalize" to="/professor/grading/infor">Grading</Link>
                            <Link className="dropdown-item text-capitalize" to="">Course Report</Link>
                            <Link className="dropdown-item text-capitalize" to="">Badge Setting</Link>
                          </div>
                    </li>
                    <li className="nav-item"><Link className="nav-link" to="">Contact</Link></li>
                    <li className="nav-item"><Link className="nav-link" to=""><i className="fa fa-home" style={{width: '24.375px', fontSize: '24.4px'}} /></Link></li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
  }
}
