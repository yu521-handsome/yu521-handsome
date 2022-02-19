import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//This page is the main page of the whole web page
export default class Main extends Component {
  render() {
    return (
    <div>
      <body id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="54">
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top" id="mainNav" style={{backgroundColor:"#9f2536"}}>
        <div className="container"><Link className="navbar-brand" to="">TCPCM</Link><button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" className="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto text-uppercase">
                    <li className="nav-item"><Link className="nav-link" to = "#">Student</Link></li>
                    <li className="nav-item"><Link className="nav-link" to = "#">Professor</Link></li>
                    <li className="nav-item"><Link className="nav-link" to = "#">INdustry Expert</Link></li>
                    <li className="nav-item"><Link className="nav-link" to = "#">General Inquiry</Link></li>
                    <li className="nav-item"><Link className="nav-link" to = "#">Contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    <header className="masthead" style={{backgroundImage: "url('assets/img/header-bg.jpg')"}}>
        <div className="container">
            <div className="intro-text">
                <div className="intro-lead-in"><span>Welcome To PolyU TCPCM!</span></div>
                <div className="intro-heading text-uppercase"><span>It's Nice To Meet You</span></div><Link className="btn btn-primary btn-xl text-uppercase" role="button" to="">Tell me more</Link>
            </div>
        </div>
    </header>
    <section className="bg-light" id="portfolio">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="text-uppercase section-heading">Our users</h2>
                    <h3 className="text-muted section-subheading">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-4 portfolio-item">
                    <Link to = "/professor/home" className="portfolio-link" href="1.%20Professor&nbsp;%20Home%20Page.html">
                        <div className="portfolio-hover" data-bs-toggle="page">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-plus fa-3x"></i>
                                </div>
                        </div><img alt="" className="img-fluid" src="assets/img/portfolio/1-thumbnail.jpg"/>
                        <div className="portfolio-caption">
                            <h4>Professor</h4>
                            <p className="text-muted">Illustration</p>
                        </div>
                    </Link>
                </div>
                <div className="col-sm-6 col-md-4 portfolio-item"><Link to = "#" className="portfolio-link" href="Student%20Home%20Page.html" data-bs-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x"></i></div>
                        </div><img alt="" className="img-fluid" src="assets/img/portfolio/2-thumbnail.jpg"/>
                    </Link><Link to = "#" href="Student%20Home%20Page.html">
                        <div className="portfolio-caption">
                            <h4>Student</h4>
                            <p className="text-muted">Graphic Design</p>
                        </div>
                    </Link></div>
                <div className="col-sm-6 col-md-4 portfolio-item"><Link to = "#" className="portfolio-link" href="#portfolioModal6" data-bs-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x"></i></div>
                        </div><img alt="" className="img-fluid" src="assets/img/portfolio/6-thumbnail.jpg"/>
                    </Link><Link to = "#" href="Expert%20Home%20Page.html">
                        <div className="portfolio-caption">
                            <h4>Industry Expert</h4>
                            <p className="text-muted">Photography</p>
                        </div>
                    </Link></div>
            </div>
        </div>
    </section>
    <section id="services">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="text-uppercase section-heading">Services</h2>
                    <h3 className="text-muted section-subheading">Lorem ipsum dolor sit amet consectetur</h3>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-4"><span className="fa-stack fa-4x"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i></span>
                    <h4 className="section-heading">E-Commerce</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="col-md-4"><span className="fa-stack fa-4x"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-laptop fa-stack-1x fa-inverse"></i></span>
                    <h4 className="section-heading">Responsive Design</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="col-md-4"><span className="fa-stack fa-4x"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-lock fa-stack-1x fa-inverse"></i></span>
                    <h4 className="section-heading">Web Security</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
            </div>
        </div>
    </section>
    <section id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="text-uppercase">About</h2>
                    <h3 className="text-muted section-subheading">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <ul className="list-group timeline">
                        <li className="list-group-item">
                            <div className="timeline-image"><img alt="" className="rounded-circle img-fluid" src="assets/img/about/1.jpg"/></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>2009-2011</h4>
                                    <h4 className="subheading">Our Humble Beginnings</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item timeline-inverted">
                            <div className="timeline-image"><img alt="" className="rounded-circle img-fluid" src="assets/img/about/2.jpg"/></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>March 2011</h4>
                                    <h4 className="subheading">An Agency is Born</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="timeline-image"><img alt="" className="rounded-circle img-fluid" src="assets/img/about/3.jpg"/></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>December 2012</h4>
                                    <h4 className="subheading">Transition to Full Service</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item timeline-inverted">
                            <div className="timeline-image"><img alt="" className="rounded-circle img-fluid" src="assets/img/about/4.jpg"/></div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>July 2014</h4>
                                    <h4 className="subheading">Phase Two Expansion</h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item timeline-inverted">
                            <div className="timeline-image">
                                <h4>Be Part<br/>&nbsp;Of Our<br/>&nbsp;Story!</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section className="bg-light" id="team">
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="team-member"><img alt="" className="rounded-circle mx-auto" src="assets/img/team/1.jpg"/>
                        <h4>Kay Garland</h4>
                        <p className="text-muted">Lead Designer</p>
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item"><Link to = "#" href="#"><i className="fa fa-twitter"></i></Link></li>
                            <li className="list-inline-item"><Link to = "#" href="#"><i className="fa fa-facebook"></i></Link></li>
                            <li className="list-inline-item"><Link to = "#" href="#"><i className="fa fa-linkedin"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="team-member"><img alt="" className="rounded-circle mx-auto" src="assets/img/team/2.jpg"/>
                        <h4>Larry Parker</h4>
                        <p className="text-muted">Lead Marketer</p>
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item"><Link to = "#" href="#"><i className="fa fa-twitter"></i></Link></li>
                            <li className="list-inline-item"><Link to = "#" href="#"><i className="fa fa-facebook"></i></Link></li>
                            <li className="list-inline-item"><Link to = "#" href="#"><i className="fa fa-linkedin"></i></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="team-member"><img alt="" className="rounded-circle mx-auto" src="assets/img/team/3.jpg"/>
                        <h4>Diana Pertersen</h4>
                        <p className="text-muted">Lead Developer</p>
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item"><Link to = "#" href="#"><i className="fa fa-twitter"></i></Link></li>
                            <li className="list-inline-item"><Link to = "#" href="#"><i className="fa fa-facebook"></i></Link></li>
                            <li className="list-inline-item"><Link to = "#" href="#"><i className="fa fa-linkedin"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-3"><Link to = "#" href="#"><img alt="" className="img-fluid d-block mx-auto" src="assets/img/clients/creative-market.jpg"/></Link></div>
                <div className="col-sm-6 col-md-3"><Link to = "#" href="#"><img alt="" className="img-fluid d-block mx-auto" src="assets/img/clients/designmodo.jpg"/></Link></div>
                <div className="col-sm-6 col-md-3"><Link to = "#" href="#"><img alt="" className="img-fluid d-block mx-auto" src="assets/img/clients/envato.jpg"/></Link></div>
                <div className="col-sm-6 col-md-3"><Link to = "#" href="#"><img alt="" className="img-fluid d-block mx-auto" src="assets/img/clients/themeforest.jpg"/></Link></div>
            </div>
        </div>
    </section>
    <section id="contact" style={{backgroundImage:"url('assets/img/map-image.png')"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="text-uppercase section-heading">Contact Us</h2>
                    <h3 className="text-muted section-subheading">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <form id="contactForm" name="contactForm" novalidate="novalidate">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group mb-3"><input className="form-control" type="text" id="name" placeholder="Your Name *" required=""/><small className="form-text text-danger flex-grow-1 help-block lead"></small></div>
                                <div className="form-group mb-3"><input className="form-control" type="email" id="email" placeholder="Your Email *" required=""/><small className="form-text text-danger help-block lead"></small></div>
                                <div className="form-group mb-3"><input className="form-control" type="tel" placeholder="Your Phone *" required=""/><small className="form-text text-danger help-block lead"></small></div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group mb-3"><textarea className="form-control" id="message" placeholder="Your Message *" required=""></textarea><small className="form-text text-danger help-block lead"></small></div>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-lg-12 text-center">
                                <div id="success"></div><button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4"><span className="copyright">Copyright&nbsp;© TCPCM 2022</span></div>
                <div className="col-md-4">
                    <ul className="list-inline social-buttons">
                        <li className="list-inline-item"><Link to = "#" href="#"><i className="fa fa-twitter"></i></Link></li>
                        <li className="list-inline-item"><Link to = "#" href="#"><i className="fa fa-facebook"></i></Link></li>
                        <li className="list-inline-item"><Link to = "#" href="#"><i className="fa fa-linkedin"></i></Link></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="list-inline quicklinks">
                        <li className="list-inline-item"><Link to = "#" href="#">Privacy Policy</Link></li>
                        <li className="list-inline-item"><Link to = "#" href="#">Terms of Use</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <div className="modal fade text-center portfolio-modal" role="dialog" tabindex="-1" id="portfolioModal1">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="modal-body">
                                <h2 className="text-uppercase">Project Name</h2>
                                <p className="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p><img alt="" className="img-fluid d-block mx-auto" src="assets/img/portfolio/1-full.jpg"/>
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul className="list-unstyled">
                                    <li>Date: January 2017</li>
                                    <li>Client: Threads</li>
                                    <li>Category: Illustration</li>
                                </ul><button className="btn btn-primary" type="button" data-bs-dismiss="modal"><i className="fa fa-times"></i><span>&nbsp;Close Project</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="modal fade text-center portfolio-modal" role="dialog" tabindex="-1" id="portfolioModal2">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="modal-body">
                                <h2 className="text-uppercase">Project Name</h2>
                                <p className="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p><img alt="" className="img-fluid d-block mx-auto" src="assets/img/portfolio/2-full.jpg"/>
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul className="list-unstyled">
                                    <li>Date: January 2017</li>
                                    <li>Client: Threads</li>
                                    <li>Category: Illustration</li>
                                </ul><button className="btn btn-primary" type="button" data-bs-dismiss="modal"><i className="fa fa-times"></i><span>&nbsp;Close Project</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="modal fade text-center portfolio-modal" role="dialog" tabindex="-1" id="portfolioModal3">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="modal-body">
                                <h2 className="text-uppercase">Project Name</h2>
                                <p className="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p><img alt="" className="img-fluid d-block mx-auto" src="assets/img/portfolio/3-full.jpg"/>
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul className="list-unstyled">
                                    <li>Date: January 2017</li>
                                    <li>Client: Threads</li>
                                    <li>Category: Illustration</li>
                                </ul><button className="btn btn-primary" type="button" data-bs-dismiss="modal"><i className="fa fa-times"></i><span>&nbsp;Close Project</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="modal fade text-center portfolio-modal" role="dialog" tabindex="-1" id="portfolioModal4">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="modal-body">
                                <h2 className="text-uppercase">Project Name</h2>
                                <p className="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p><img alt="" className="img-fluid d-block mx-auto" src="assets/img/portfolio/4-full.jpg"/>
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul className="list-unstyled">
                                    <li>Date: January 2017</li>
                                    <li>Client: Threads</li>
                                    <li>Category: Illustration</li>
                                </ul><button className="btn btn-primary" type="button" data-bs-dismiss="modal"><i className="fa fa-times"></i><span>&nbsp;Close Project</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="modal fade text-center portfolio-modal" role="dialog" tabindex="-1" id="portfolioModal5">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="modal-body">
                                <h2 className="text-uppercase">Project Name</h2>
                                <p className="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p><img alt="" className="img-fluid d-block mx-auto" src="assets/img/portfolio/5-full.jpg"/>
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul className="list-unstyled">
                                    <li>Date: January 2017</li>
                                    <li>Client: Threads</li>
                                    <li>Category: Illustration</li>
                                </ul><button className="btn btn-primary" type="button" data-bs-dismiss="modal"><i className="fa fa-times"></i><span>&nbsp;Close Project</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="modal fade text-center portfolio-modal" role="dialog" tabindex="-1" id="portfolioModal6">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="modal-body">
                                <h2 className="text-uppercase">Project Name</h2>
                                <p className="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p><img alt="" className="img-fluid d-block mx-auto" src="assets/img/portfolio/6-full.jpg"/>
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul className="list-unstyled">
                                    <li>Date: January 2017</li>
                                    <li>Client: Threads</li>
                                    <li>Category: Illustration</li>
                                </ul><button className="btn btn-primary" type="button" data-bs-dismiss="modal"><i className="fa fa-times"></i><span>&nbsp;Close Project</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/agency.js"></script>
    <script src="assets/js/Table-with-search.js"></script>
</body>
    </div>);
  }
}
