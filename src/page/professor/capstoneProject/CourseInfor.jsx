import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CourseInfor extends Component {
  render() {
    return (
        <div>
            <div className="tab-pane fade show active" role="tabpanel">
                <h4>Capstone Project - Course Information</h4>
                <p>The table below shows all the information of courses you set up. You can setup a new course. You can also change or update the information of existing courses.</p>
                <Link className="btn btn-primary" role="button" to="/professor/capstoneProject/createCourse">Setup Course</Link>
                <section id="course-information" style={{height: 'auto', marginTop: 20}}>
                    <div className="container" style={{width: '75%', marginTop: 0, boxShadow: '2px 4px 3px 1px rgb(82,88,94), -2px -4px 7px 1px', background: 'rgba(249,242,243,0.98)', height: 'auto'}}>
                    <div className="row">
                        <div className="col" style={{height: '50%'}}>
                        <h1 style={{fontFamily: 'Actor, sans-serif', color: '#9f2536'}}>Course ID:&nbsp;AF4912BDBKEI<br /></h1>
                        </div>
                    </div>
                    <div className="row" id="heading-basic-information">
                        <div className="col" style={{height: '50%'}}>
                        <h4 style={{fontFamily: 'Actor, sans-serif', fontWeight: 'bold', color: '#1479bc'}}>Basic Information</h4>
                        </div>
                    </div>
                    <div className="row" style={{background: 'rgba(239,239,239,0.4)', height: 'auto'}}>
                        <div className="col">
                        <form>
                            <div className="row" style={{height: '50%', borderWidth: 1, borderStyle: 'solid'}}>
                            <div className="col" style={{width: '50%', height: 'auto', fontSize: 18}}>
                                <p style={{width: 201, height: 28, marginTop: 5, fontSize: 22, fontFamily: 'Actor, sans-serif', marginLeft: '-4px', borderWidth: 1, fontWeight: 'bold', textAlign: 'left'}}>Subject Title</p>
                            </div>
                            <div className="col-lg-8" style={{width: '574.328px', borderWidth: 10, height: 'auto', margin: '-1px'}}>
                                <p style={{width: '80%', height: '60%', fontFamily: 'Actor, sans-serif', borderWidth: 1, borderLeftStyle: 'none', marginTop: 5, marginLeft: 0, fontSize: 18}}>Capstone Project</p>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="row" style={{background: 'rgba(239,239,239,0.4)', height: 'auto', borderLeftColor: 'rgb(71,74,78)'}}>
                        <div className="col">
                        <form>
                            <div className="row" style={{height: '50%', borderWidth: 1, borderStyle: 'initial'}}>
                            <div className="col" style={{width: 400, height: 'auto'}}>
                                <p style={{width: 201, height: 28, marginTop: 5, fontSize: 22, fontFamily: 'Actor, sans-serif', marginLeft: '-4px', borderWidth: 1, fontWeight: 'bold', textAlign: 'left'}}>Theme Title</p>
                            </div>
                            <div className="col-lg-8" style={{width: '574.328px', borderWidth: 10, height: 'auto', margin: '-1px'}}>
                                <p style={{width: '80%', height: '60%', fontFamily: 'Actor, sans-serif', borderWidth: 1, borderLeftStyle: 'none', marginTop: 5, marginLeft: 0}}>Business Digitalisation by Blockchain</p>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="row" style={{background: 'rgba(239,239,239,0.4)'}}>
                        <div className="col">
                        <form>
                            <div className="row" style={{height: '50%', borderWidth: 1, borderStyle: 'solid'}}>
                            <div className="col" style={{width: 400, height: 'auto'}}>
                                <p style={{width: 201, height: 28, marginTop: 5, fontSize: 22, fontFamily: 'Actor, sans-serif', marginLeft: '-4px', borderWidth: 1, fontWeight: 'bold', textAlign: 'left'}}>Teaching Staff</p>
                            </div>
                            <div className="col-lg-8" style={{width: '574.328px', borderWidth: 10, height: 'auto', margin: '-1px'}}>
                                <p style={{width: '80%', height: '60%', fontFamily: 'Actor, sans-serif', borderWidth: 1, borderLeftStyle: 'none', marginTop: 5, marginLeft: 0}}>Staff 1 Staff 2</p>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="row" style={{background: 'rgba(239,239,239,0.4)'}}>
                        <div className="col">
                        <form>
                            <div className="row" style={{height: '50%', borderWidth: 1, borderStyle: 'initial'}}>
                            <div className="col" style={{width: 400, height: 'auto'}}>
                                <p style={{width: 201, height: 28, marginTop: 5, fontSize: 22, fontFamily: 'Actor, sans-serif', marginLeft: '-4px', borderWidth: 1, fontWeight: 'bold', textAlign: 'left'}}>Class ID</p>
                            </div>
                            <div className="col-lg-8" style={{width: '574.328px', borderWidth: 10, height: 'auto', margin: '-1px'}}>
                                <p style={{width: '80%', height: '60%', fontFamily: 'Actor, sans-serif', borderWidth: 1, borderLeftStyle: 'none', marginTop: 5, marginLeft: 0}}>AF4912BDBKEIC1; AF4912BDBKEIC2</p>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="row" id="heading-assessment-information" style={{height: 'auto'}}>
                        <div className="col" style={{height: 'auto'}}>
                        <h4 style={{margin: 0, marginLeft: '-7px', marginTop: 21, fontFamily: 'Actor, sans-serif', color: '#1479bc'}}>Assessment Information</h4>
                        </div>
                    </div>
                    <div className="row" style={{background: 'rgba(239,239,239,0.4)'}}>
                        <div className="col">
                        <form>
                            <div className="row" style={{height: '50%', borderWidth: 1, borderStyle: 'solid'}}>
                            <div className="col" style={{width: 400, height: 'auto'}}>
                                <p style={{width: 201, height: 28, marginTop: 5, fontSize: 22, fontFamily: 'Actor, sans-serif', marginLeft: '-4px', borderWidth: 1, fontWeight: 'bold', textAlign: 'left'}}>Course Project</p>
                            </div>
                            <div className="col-lg-8" style={{width: '574.328px', borderWidth: 10, height: 'auto', margin: '-1px'}}>
                                <p style={{width: '80%', height: '60%', fontFamily: 'Actor, sans-serif', borderWidth: 1, borderLeftStyle: 'none', marginTop: 5, marginLeft: 0}}><span style={{textDecoration: 'underline'}}>AF4912BDBKEIP1</span></p>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="row" style={{background: 'rgba(239,239,239,0.4)'}}>
                        <div className="col">
                        <form>
                            <div className="row" style={{height: '50%', borderWidth: 1, borderStyle: 'initial'}}>
                            <div className="col" style={{width: 400, height: 'auto'}}>
                                <p style={{width: 201, height: 28, marginTop: 5, fontSize: 22, fontFamily: 'Actor, sans-serif', marginLeft: '-4px', borderWidth: 1, fontWeight: 'bold', textAlign: 'left'}}>Course Report</p>
                            </div>
                            <div className="col-lg-8" style={{width: '574.328px', borderWidth: 10, height: 'auto', margin: '-1px'}}>
                                <p style={{width: '80%', height: '60%', fontFamily: 'Actor, sans-serif', borderWidth: 1, borderLeftStyle: 'none', marginTop: 5, marginLeft: 0}}><span style={{textDecoration: 'underline'}}>AF4912BDBKEIR1</span></p>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="row" style={{background: 'rgba(239,239,239,0.4)'}}>
                        <div className="col">
                        <form>
                            <div className="row" style={{height: '50%', borderWidth: 1, borderStyle: 'solid'}}>
                            <div className="col" style={{width: 400, height: 'auto'}}>
                                <p style={{width: 201, height: 28, marginTop: 5, fontSize: 22, fontFamily: 'Actor, sans-serif', marginLeft: '-4px', borderWidth: 1, fontWeight: 'bold', textAlign: 'left'}}>Course Quiz</p>
                            </div>
                            <div className="col-lg-8" style={{width: '574.328px', borderWidth: 10, height: 'auto', margin: '-1px'}}>
                                <p style={{width: '80%', height: '60%', fontFamily: 'Actor, sans-serif', borderWidth: 1, borderLeftStyle: 'none', marginTop: 5, marginLeft: 0}}><span style={{textDecoration: 'underline'}}>AF4912BDBKEIQ1</span></p>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="row" style={{background: 'rgba(239,239,239,0.4)'}}>
                        <div className="col">
                        <form>
                            <div className="row" style={{height: '50%', borderWidth: 1, borderStyle: 'initial'}}>
                            <div className="col" style={{width: 400, height: 'auto'}}>
                                <p style={{width: 201, height: 28, marginTop: 5, fontSize: 22, fontFamily: 'Actor, sans-serif', marginLeft: '-4px', borderWidth: 1, fontWeight: 'bold', textAlign: 'left'}}>Course Milestone</p>
                            </div>
                            <div className="col-lg-8" style={{width: '574.328px', borderWidth: 10, height: 'auto', margin: '-1px'}}>
                                <p style={{width: '80%', height: '60%', fontFamily: 'Actor, sans-serif', borderWidth: 1, borderLeftStyle: 'none', marginTop: 5, marginLeft: 0}}><span style={{textDecoration: 'underline'}}>AF4912BDBKEIM1</span></p>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                    <div style={{width: '50%', marginLeft: '25%', marginRight: '25%'}}>
                    <div className="dropdown" style={{marginTop: '10%'}}><button className="btn btn-primary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">Change Information&nbsp;</button>
                        <div className="dropdown-menu"><a className="dropdown-item" id="change-course" style={{background: '#ffffff'}} href="P-1.1.2.Professor%20course%20change%20information.html">Course&nbsp;</a><a className="dropdown-item" id="change-class" href="P-1.2.2.Professor%20class%20change%20information.html">Class</a><a className="dropdown-item" id="change-report" href="P-1.3.2.Professor%20project%20change%20information.html">Project</a><a className="dropdown-item" id="change-quiz" href="P-1.4.2.Professor%20report%20change%20information.html">Report</a><a className="dropdown-item" id="change-project" href="P-1.5.2.Professor%20quiz%20change%20information.html">Quiz</a><a className="dropdown-item" id="change-milestone" href="P-1.6.2.Professor%20milestone%20change%20information.html">Milestone</a></div>
                    </div>
                    </div>
                </section>
            </div>
        </div>
    )
  }
}
