import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'


export default class InforTable extends Component {
  render() {
    return (
        <div>            
            <div className="card" id="information-table">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs" role="tablist">
                        <li className="nav-item"><Link className="nav-link" to="/professor/capstoneProject/infor/course">Course</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/professor/capstoneProject/infor/project">Project</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/professor/capstoneProject/infor/report">Report</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/professor/capstoneProject/infor/quiz">Quiz</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/professor/capstoneProject/infor/milestone">Milestone</Link></li>
                    </ul>
                </div>
                <div className="card-body">
                    <div className="tab-content">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
