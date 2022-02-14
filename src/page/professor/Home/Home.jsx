import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top" id="mainNav" style={{background: '#9f2536'}}>
                <div className="container"><a className="navbar-brand" href="#page-top">TCPCM</a><button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" className="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" /></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto text-uppercase">
                    <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#">functions&nbsp;</a>
                        <div className="dropdown-menu"><a className="dropdown-item text-capitalize" href="P-%201.Professor%20course.html">Capstone Project</a><a className="dropdown-item text-capitalize" href="P-2.1.Professor%20account%20setup.html">Account Setup</a><a className="dropdown-item text-capitalize" href="P-3.1.Student%20Grouping.html">Student Grouping</a><a className="dropdown-item text-capitalize" href="P-4.1.Grading.html">Grading</a><a className="dropdown-item text-capitalize" href="P-5.Course%20report.html">Course Report</a><a className="dropdown-item text-capitalize" href="P-6.Badge%20Setting.html">Badge Setting</a></div>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="#profile">Profile</a></li>
                    <li className="nav-item"><a className="nav-link" href="contactpage.html">Contact</a></li>
                    <li className="nav-item"><a className="nav-link" href="index.html"><i className="fa fa-home" style={{width: '24.375px', fontSize: '24.4px'}} /></a></li>
                    </ul>
                </div>
                </div>
            </nav>
            <header className="masthead" style={{background: 'url("assets/img/header-bg.jpg")', backgroundSize: 'cover'}}>
                <div className="container">
                <div className="intro-text">
                    <div className="intro-lead-in"><span>Welcome To PolyU TCPCM!</span></div>
                    <div className="intro-heading text-uppercase"><span>professor&nbsp;</span></div><a className="btn btn-primary btn-xl text-uppercase" role="button" href="#services">Tell me more</a>
                </div>
                </div>
            </header>
            <div className="p-5 mb-4 bg-light round-3">
                <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Hi&nbsp;&nbsp;<strong>Prof. CW Brian KEI</strong></h1>
                <p className="col-md-8 fs-4">Welcome to the professor home page of TCPCM! Here you can upload your capstone project course related information, and you can issue badge to your outstanding students in the&nbsp;<a className="btn btn-light" role="button" href="#functions">Functions</a>&nbsp;. You can also review your<a className="btn btn-light" role="button" href="#profile">Profile</a> .&nbsp;</p>
                </div>
            </div>
            <section id="functions">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="text-uppercase section-heading">Functions</h2>
                    <h3 className="text-muted section-subheading">Professors are expected to make full use of our website to manage capstone project and support their students.</h3>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4"><Link id="capstone-project" to="/professor/capstoneProject/infor"><span className="fa-stack fa-4x"><i className="fa fa-circle fa-stack-2x text-primary" /><i className="fa fa-flag fa-stack-1x fa-inverse" /></span></Link>
                    <h4 className="section-heading">Capstone Project</h4>
                    <p className="text-muted">Professors can setup everything about the capstone project course (AF4912), including course, class, report, quiz, project, and milestones.</p>
                    </div>
                    <div className="col-md-4"><a id="acccount-setup" href="P-2.1.Professor%20account%20setup.html"><span className="fa-stack fa-4x"><i className="fa fa-circle fa-stack-2x text-primary" /><i className="fa fa-link fa-stack-1x fa-inverse" /></span></a>
                    <h4 className="section-heading">Account Setup</h4>
                    <p className="text-muted">Professors can find their students' and industry mentors' accounts, then group all relevant personnel to a course.</p>
                    </div>
                    <div className="col-md-4"><a href="P-3.1.Student%20Grouping.html"><span className="fa-stack fa-4x"><i className="fa fa-circle fa-stack-2x text-primary" /><i className="fa fa-group fa-stack-1x fa-inverse" /></span></a>
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
            <section className="bg-light" id="profile">
                <div className="container">
                <div className="row" style={{height: 121}}>
                    <div className="col-lg-12 text-center" style={{height: '121.188px'}}>
                    <h2 className="text-uppercase section-heading">profile</h2>
                    <h3 className="text-muted section-subheading">Professor registered information</h3>
                    </div>
                </div>
                <div className="row" style={{background: 'linear-gradient(black 0%, white 0%)', height: '200%', width: '102%'}}>
                    <div className="col-xl-12 col-xxl-5 offset-xxl-5" style={{width: 'auto'}}>
                    <div><img className="img-fluid" src="assets/img/about/2.jpg" style={{width: '80%', marginTop: '10%'}} /></div>
                    </div>
                    <div className="col-lg-7 col-xl-7 col-xxl-12" style={{width: 'auto', height: '80%', background: '#ffffff'}}>
                    <h2 style={{marginTop: 20}}>Prof. CW Brian KEI</h2>
                    <h3 className="text-muted; section-subheading element.style { } #portfolio * { z-index: 2; } section h3.section-subheading, section .section-subheading.h3 { font-size: 16px; font-weight: 400; margin-bottom: 75px; text-transform: none; font-family: &quot;Montserrat&quot;,&quot;Helvetica Neue&quot;,Helvetica,Arial,sans-serif; } .text-muted { --bs-text-opacity: 1; color: #868e96 !important; }">Professor of Practice</h3>
                    <form style={{marginTop: '-51px'}}>
                        <div className="row" id="infor1">
                        <div className="col">
                            <h5 style={{marginTop: 6, letterSpacing: '-1px'}}>Email Address</h5>
                        </div>
                        <div className="col-lg-8"><input className="form-control-plaintext" type="text" defaultValue="cw-brian.kei@polyu.edu.hk" readOnly /></div>
                        </div>
                        <div className="row" id="infor-2">
                        <div className="col">
                            <h5 style={{marginTop: 6, letterSpacing: '-1px'}}>Phone Number&nbsp;</h5>
                        </div>
                        <div className="col-lg-8"><input className="form-control-plaintext" type="text" defaultValue="3400 3953" readOnly /></div>
                        </div>
                        <div className="row" id="infor-3">
                        <div className="col">
                            <h5 style={{marginTop: 6, letterSpacing: '-1px'}}>Office</h5>
                        </div>
                        <div className="col-lg-8"><input className="form-control-plaintext" type="text" defaultValue="M505D" readOnly /></div>
                        </div>
                        <div className="row" id="infor-4">
                        <div className="col">
                            <h5 style={{marginTop: 6, letterSpacing: '-1px'}}>Research Area</h5>
                        </div>
                        <div className="col-lg-8"><input className="form-control-plaintext" type="text" defaultValue="Financial Services, Fintech and Technology Innovation" readOnly /></div>
                        </div>
                        <div className="row" id="infor-5">
                        <div className="col">
                            <h5 style={{marginTop: 6, letterSpacing: '-1px'}}><strong>Consulting, Research and Teaching Interests</strong></h5>
                        </div>
                        <div className="col-lg-8">
                            <p>Financial Services, Fintech, Blockchain, Big Data, Machine Learning, Natural Language Processing, Robotic Process Automation</p>
                        </div>
                        </div>
                    </form>
                    </div>
                    <div className="col" style={{background: '#ffffff'}}>
                    <div>
                        <p>If you have any update on your profile information, please&nbsp;<a className="btn" role="button" style={{color: '#9f2536'}}>Change it by clicking</a></p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <script src="assets/bootstrap/js/bootstrap.min.js"></script>
            <script src="assets/js/agency.js"></script>
            <script src="assets/js/Table-with-search.js"></script>
        </div>
)
  }
}
