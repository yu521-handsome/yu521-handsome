import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-dark navbar-expand-lg fixed-top" id="mainNav" style={{background: '#9f2536'}}>
                <div className="container"><a className="navbar-brand" href="#page-top" style={{height: 'auto'}}>
                    <picture style={{height: 'auto', width: 'auto'}}><img src="assets/img/Y%20(1).png" style={{width: 100, height: 'auto'}} alt=""/></picture>
                </a><button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" className="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars" /></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto text-uppercase">
                    <li className="nav-item"><Link className="nav-link" to="">Student</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/professor/home">Professor</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="">INdustry Expert</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="">General Inquiry</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="">Contact</Link></li>
                    </ul>
                </div>
                </div>
            </nav>
      </div>
    )
  }
}
