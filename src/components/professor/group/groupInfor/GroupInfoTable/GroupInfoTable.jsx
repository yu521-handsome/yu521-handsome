import React, { Component } from 'react'

export default class GroupInfoTable extends Component {
    render() {
        return (
            <div>
                <section id="group-list-1" style={{height: 'auto'}}>
                    <div id="course-1" style={{marginBottom: '5%', background: 'rgba(249,242,243,0.98)'}}>
                        <div className="row" style={{width: '70%'}}>
                        <div className="col">
                            <h3>Course ID: AF4512BDB01</h3>
                        </div>
                        </div>
                    </div>
                    <div id="group-table" style={{background: 'rgba(255,255,255,0.2)'}}><div className="form-group pull-right">
                        <input type="text" className="search form-control" placeholder="What you looking for?" />
                        </div>
                        <span className="counter pull-right" />
                        <table className="table table-hover table-bordered results">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th className="col-md-1 col-xs-1">Group ID</th>
                            <th className="col-md-2 col-xs-2">Group Name</th>
                            <th className="col-md-6 col-xs-6">Students</th>
                            <th className="col-md-3 col-xs-3">Industry Expert</th>
                            </tr>
                            <tr className="warning no-result">
                            <td colSpan={4}><i className="fa fa-warning" /> No result</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>BDB01</td>
                            <td>UI &amp; UX</td>
                            <td>Eger</td>
                            <td>1</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>BDB02</td>
                            <td>Graphic Designer</td>
                            <td>Eger</td>
                            <td>2</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>BDB03</td>
                            <td>Software Developer</td>
                            <td>Budapest</td>
                            <td>3</td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td>BDB04</td>
                            <td>Front-end Developer</td>
                            <td>Luxemburg</td>
                            <td>4</td>
                            </tr>
                        </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                                <span className="sr-only">Previous</span>
                            </a>
                            </li>
                            <li className="page-item, active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">»</span>
                                <span className="sr-only">Next</span>
                            </a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                </section>
            </div>
        )
    }
}
