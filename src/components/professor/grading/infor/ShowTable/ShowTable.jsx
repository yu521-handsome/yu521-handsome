import React, { Component } from 'react';

export default class ShowTable extends Component {
  render() {
    return (
        <div>
            <div className="container" id="overall-information">
                <h1>Overall Information</h1>
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <div className="form-group mb-3">
                                <div className="input-group"><span className="input-group-addon"> <i className="fa fa-search"></i></span><input className="form-control" type="search" name="search"/></div>
                            </div>
                        </form>
                        <div>
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item" role="presentation"><a className="nav-link" role="tab" data-bs-toggle="tab" href="#tab-1">Report&nbsp;<span className="badge rounded-pill bg-primary">42</span></a></li>
                                <li className="nav-item" role="presentation"><a className="nav-link" role="tab" data-bs-toggle="tab" href="#tab-2">Project&nbsp;<span className="badge rounded-pill bg-primary">42</span></a></li>
                                <li className="nav-item" role="presentation"><a className="nav-link" role="tab" data-bs-toggle="tab" href="#tab-3">Quiz</a></li>
                                <li className="nav-item" role="presentation"><a className="nav-link active" role="tab" data-bs-toggle="tab" href="#tab-4">Course Completion&nbsp;<span className="badge rounded-pill bg-primary">42</span></a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane" role="tabpanel" id="tab-1">
                                    <div className="thread-list-head">
                                        <div className="input-group"><span className="input-group-addon"> </span><small className="form-text">Enter Report ID&nbsp;</small><input type="search" name="search"/></div>
                                        <nav className="thread-pages">
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link" href="1" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                                <li className="page-item"><a className="page-link" href="1">1</a></li>
                                                <li className="page-item"><a className="page-link" href="1">2</a></li>
                                                <li className="page-item"><a className="page-link" href="1">3</a></li>
                                                <li className="page-item"><a className="page-link" href="1">4</a></li>
                                                <li className="page-item"><a className="page-link" href="1">5</a></li>
                                                <li className="page-item"><a className="page-link" href="1" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <ul className="thread-list">
                                        <li className="thread"><span className="time">Report ID</span><span className="time" style={{marginLeft: '70px'}}>Student ID</span><span className="time" style={{width: '115px',marginLeft: '90px'}}>Student Name</span><span className="time" style={{width: '115px',marginLeft: '90px'}}>Grade</span></li>
                                        <li className="thread"><span className="time" style={{width: '13%'}}>AF4512BDBR1</span><span className="time" style={{width: '15%'}}>19xxxxxxd</span><span className="time" style={{width: '15%'}}>Alice</span><span className="time" style={{width: '15%'}}>A</span><span className="icon"> <a className="subscribe" href="P-4.2.Grade%20report.html"><i className="fa fa-refresh"></i></a><a className="flag" href="#badge-issue"><i className="fa fa-flag"></i></a></span></li>
                                    </ul>
                                </div>
                                <div className="tab-pane" role="tabpanel" id="tab-2">
                                    <div className="thread-list-head">
                                        <div className="input-group"><span className="input-group-addon"> </span><small className="form-text">Enter Project ID&nbsp;</small><input type="search" name="search"/></div>
                                        <nav className="thread-pages">
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link" href="1" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                                <li className="page-item"><a className="page-link" href="1">1</a></li>
                                                <li className="page-item"><a className="page-link" href="1">2</a></li>
                                                <li className="page-item"><a className="page-link" href="1">3</a></li>
                                                <li className="page-item"><a className="page-link" href="1">4</a></li>
                                                <li className="page-item"><a className="page-link" href="1">5</a></li>
                                                <li className="page-item"><a className="page-link" href="1" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <ul className="thread-list">
                                        <li className="thread"><span className="time">Report ID</span><span className="time" style={{marginLeft: '70px'}}>Student ID</span><span className="time" style={{width: '115px',marginLeft: '90px'}}>Student Name</span><span className="time" style={{width: '115px',marginLeft: '90px'}}>Grade</span></li>
                                        <li className="thread"><span className="time" style={{width: '13%'}}>AF4512BDBR1</span><span className="time" style={{width: '15%'}}>19xxxxxxd</span><span className="time" style={{width: '15%'}}>Alice</span><span className="time" style={{width: '15%'}}>A</span><span className="icon"> <a className="subscribe" href="P-4.2.Grade%20report.html"><i className="fa fa-refresh"></i></a><a className="flag" href="#badge-issue"><i className="fa fa-flag"></i></a></span></li>
                                    </ul>
                                </div>
                                <div className="tab-pane" role="tabpanel" id="tab-3">
                                    <div className="thread-list-head">
                                        <div className="input-group"><span className="input-group-addon"> </span><small className="form-text">Enter Quiz ID&nbsp;</small><input type="search" name="search"/></div>
                                        <nav className="thread-pages">
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link" href="1" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                                <li className="page-item"><a className="page-link" href="1">1</a></li>
                                                <li className="page-item"><a className="page-link" href="1">2</a></li>
                                                <li className="page-item"><a className="page-link" href="1">3</a></li>
                                                <li className="page-item"><a className="page-link" href="1">4</a></li>
                                                <li className="page-item"><a className="page-link" href="1">5</a></li>
                                                <li className="page-item"><a className="page-link" href="1" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <ul className="thread-list">
                                        <li className="thread"><span className="time">Report ID</span><span className="time" style={{marginLeft: '70px'}}>Student ID</span><span className="time" style={{width: '115px',marginLeft: '90px'}}>Student Name</span><span className="time" style={{width: '115px',marginLeft: '90px'}}>Grade</span></li>
                                        <li className="thread"><span className="time" style={{width: '13%'}}>AF4512BDBR1</span><span className="time" style={{width: '15%'}}>19xxxxxxd</span><span className="time" style={{width: '15%'}}>Alice</span><span className="time" style={{width: '15%'}}>A</span><span className="icon"> <a className="subscribe" href="P-4.2.Grade%20report.html"><i className="fa fa-refresh"></i></a><a className="flag" href="#badge-issue"><i className="fa fa-flag"></i></a></span></li>
                                    </ul>
                                </div>
                                <div className="tab-pane active" role="tabpanel" id="tab-4">
                                    <div className="thread-list-head">
                                        <div className="input-group"><span className="input-group-addon"> </span><small className="form-text">Enter Course ID&nbsp;</small><input type="search" name="search"/></div>
                                        <nav className="thread-pages">
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link" href="1" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                                <li className="page-item"><a className="page-link" href="1">1</a></li>
                                                <li className="page-item"><a className="page-link" href="1">2</a></li>
                                                <li className="page-item"><a className="page-link" href="1">3</a></li>
                                                <li className="page-item"><a className="page-link" href="1">4</a></li>
                                                <li className="page-item"><a className="page-link" href="1">5</a></li>
                                                <li className="page-item"><a className="page-link" href="1" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <ul className="thread-list">
                                        <li className="thread"><span className="time">Report ID</span><span className="time" style={{marginLeft: '70px'}}>Student ID</span><span className="time" style={{width: '115px',marginLeft: '90px'}}>Student Name</span><span className="time" style={{width: '115px',marginLeft: '90px'}}>Grade</span></li>
                                        <li className="thread"><span className="time" style={{width: '13%'}}>AF4512BDBR1</span><span className="time" style={{width: '15%'}}>19xxxxxxd</span><span className="time" style={{width: '15%'}}>Alice</span><span className="time" style={{width: '15%'}}>A</span><span className="icon"> <a className="subscribe" href="P-4.2.Grade%20report.html"><i className="fa fa-refresh"></i></a><a className="flag" href="#badge-issue"><i className="fa fa-flag"></i></a></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
