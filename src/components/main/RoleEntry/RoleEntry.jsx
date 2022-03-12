import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class RoleEntry extends Component {
  render() {
    return (
        <div>
            <section className="bg-light" id="portfolio">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="text-uppercase section-heading">Sign up &amp; LOg in</h2>
                    <h3 className="text-muted section-subheading">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4 portfolio-item">
                        <Link className="portfolio-link" to="/professor/home" data-bs-toggle="page">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x" />
                                </div>
                            </div>
                            <img alt="" className="img-fluid" src="assets/img/portfolio/professor.png" />
                        </Link>
                        <div className="portfolio-caption">
                            <Link to="">
                            <h4>Professor</h4>
                            </Link>
                            <p>
                                <Link to="">SignUP &amp; Login</Link>
                                <i className="fa fa-arrow-right" style={{marginLeft: 10}} />
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="Student%20Home%20Page.html" data-bs-toggle="modal">
                        <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x" /></div>
                        </div><img alt="" className="img-fluid" src="assets/img/portfolio/student.png" />
                    </a><a href="login&signup-student.html">
                    </a><div className="portfolio-caption"><a href="login&signup-student.html">
                        <h4>Student</h4>
                        </a><p><a href="login&signup-student.html" /><a href="login&signup-student.html">SignUP &amp; Login</a><i className="fa fa-arrow-right" style={{marginLeft: 10}} /></p>
                    </div>
                    </div>
                    <div className="col-sm-6 col-md-4 portfolio-item"><a className="portfolio-link" href="#portfolioModal6" data-bs-toggle="modal">
                        <div className="portfolio-hover">
                        <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x" /></div>
                        </div><img alt="" className="img-fluid" src="assets/img/portfolio/industry%20expert%20.png" />
                    </a><a href="login&signup-industryexpert.html">
                    </a><div className="portfolio-caption"><a href="login&signup-industryexpert.html">
                        <h4>Industry Expert</h4>
                        </a><p><a href="login&signup-industryexpert.html" /><a href="login&signup-industryexpert.html">SignUP &amp; Login</a><i className="fa fa-arrow-right" style={{marginLeft: 10}} /></p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
  }
}
