import React, { Component } from 'react';
import Header from '../../components/main/Header/Header';
import NavigationBar from '../../components/main/NavigationBar/NavigationBar';
import RoleEntry from '../../components/main/RoleEntry/RoleEntry';


//This page is the main page of the whole web page
export default class Main extends Component {
  render() {
    return (
        <div id="page-top" data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset={54}>
            <NavigationBar/>
            <Header/>
            <RoleEntry/>
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
                        <div className="timeline-image" style={{background: 'rgb(255,255,255)'}}><img alt="" className="rounded-circle img-fluid" src="assets/img/about/1.jpg" /></div>
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
                        <div className="timeline-image"><img alt="" className="rounded-circle img-fluid" src="assets/img/about/2.jpg" /></div>
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
                        <div className="timeline-image"><img alt="" className="rounded-circle img-fluid" src="assets/img/about/3.jpg" /></div>
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
                        <div className="timeline-image"><img alt="" className="rounded-circle img-fluid" src="assets/img/about/4.jpg" /></div>
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
                            <h4>Be Part<br />&nbsp;Of Our<br />&nbsp;Story!</h4>
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
                    <div className="team-member"><img alt="" className="rounded-circle mx-auto" src="assets/img/team/1.jpg" />
                        <h4>Kay Garland</h4>
                        <p className="text-muted">Lead Designer</p>
                        <ul className="list-inline social-buttons">
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="team-member"><img alt="" className="rounded-circle mx-auto" src="assets/img/team/2.jpg" />
                        <h4>Larry Parker</h4>
                        <p className="text-muted">Lead Marketer</p>
                        <ul className="list-inline social-buttons">
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="team-member"><img alt="" className="rounded-circle mx-auto" src="assets/img/team/3.jpg" />
                        <h4>Diana Pertersen</h4>
                        <p className="text-muted">Lead Developer</p>
                        <ul className="list-inline social-buttons">
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-linkedin" /></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3"><a href="#"><img alt="" className="img-fluid d-block mx-auto" src="assets/img/clients/creative-market.jpg" /></a></div>
                    <div className="col-sm-6 col-md-3"><a href="#"><img alt="" className="img-fluid d-block mx-auto" src="assets/img/clients/designmodo.jpg" /></a></div>
                    <div className="col-sm-6 col-md-3"><a href="#"><img alt="" className="img-fluid d-block mx-auto" src="assets/img/clients/envato.jpg" /></a></div>
                    <div className="col-sm-6 col-md-3"><a href="#"><img alt="" className="img-fluid d-block mx-auto" src="assets/img/clients/themeforest.jpg" /></a></div>
                </div>
                </div>
            </section>
            <div id="general-inquiry" className="p-5 mb-4 bg-light round-3">
                <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">General Inquiry&nbsp;</h1>
                <p className="col-md-8 fs-4">Welcome to use our website. Please enter your email below to verify a e-certification.</p>
                <div style={{width: '70%'}}><small className="form-text" style={{width: '100%', marginRight: '2%', color: 'rgb(0,0,0)', fontSize: 20}}>Email:&nbsp;</small><input type="email" style={{width: '60%'}} placeholder="Please enter your email" /></div>
                </div><a className="btn btn-primary btn-lg" role="button" href="#verification">Confirm</a>
            </div>
            <section id="verification" className="newsletter-subscribe" style={{height: 760}}>
                <div className="container" style={{marginTop: 44, height: 226}}>
                <div className="intro">
                    <h2 className="text-center d-xl-flex" style={{fontSize: 35, width: '67%', marginLeft: '15%', marginRight: '15%'}}>POLYU CAPSTONE PROJECT E-CERTIFICATION </h2>
                    <p className="text-center" style={{lineHeight: 25, fontSize: 13, width: '50%', marginLeft: '25%'}}>Use this page to obtain E-Certifications that are awared to both students for their hardwork during the course of the Capstone Project.<br />For questions, contact us at email or phone number.&nbsp;</p>
                </div>
                <form className="d-flex justify-content-center flex-wrap" method="post">
                    <div className="mb-3" style={{width: '50%'}}><input className="placeholder form-control" type="url" placeholder="Certificate URL" style={{width: '50%', marginLeft: '15%'}} /><a className="btn btn-primary" role="button" href="Screenshot 2021-09-18 at 1.05.38 PM.png">Verify</a></div>
                </form>
                </div>
            </section>
            <section id="contact" style={{background: 'url("assets/img/contact%20us%20.jpeg") center / cover'}}>
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="text-uppercase section-heading">Contact Us</h2>
                    <h3 className="text-muted section-subheading">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <form id="contactForm" name="contactForm" noValidate="novalidate">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="form-group mb-3"><input className="form-control" type="text" id="name" placeholder="Your Name *" required /><small className="form-text text-danger flex-grow-1 help-block lead" /></div>
                            <div className="form-group mb-3"><input className="form-control" type="email" id="email" placeholder="Your Email *" required /><small className="form-text text-danger help-block lead" /></div>
                            <div className="form-group mb-3"><input className="form-control" type="tel" placeholder="Your Phone *" required /><small className="form-text text-danger help-block lead" /></div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-3"><textarea className="form-control" id="message" placeholder="Your Message *" required defaultValue={""} /><small className="form-text text-danger help-block lead" /></div>
                        </div>
                        <div className="w-100" />
                        <div className="col-lg-12 text-center">
                            <div id="success" /><button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </section>
            <div className="modal fade text-center portfolio-modal" role="dialog" tabIndex={-1} id="portfolioModal1">
                <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                        <div className="modal-body">
                            <h2 className="text-uppercase">Project Name</h2>
                            <p className="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p><img alt="" className="img-fluid d-block mx-auto" src="assets/img/portfolio/1-full.jpg" />
                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                            <ul className="list-unstyled">
                            <li>Date: January 2017</li>
                            <li>Client: Threads</li>
                            <li>Category: Illustration</li>
                            </ul><button className="btn btn-primary" type="button" data-bs-dismiss="modal"><i className="fa fa-times" /><span>&nbsp;Close Project</span></button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="modal fade text-center portfolio-modal" role="dialog" tabIndex={-1} id="portfolioModal2">
                <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                        <div className="modal-body">
                            <h2 className="text-uppercase">Project Name</h2>
                            <p className="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p><img alt="" className="img-fluid d-block mx-auto" src="assets/img/portfolio/2-full.jpg" />
                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                            <ul className="list-unstyled">
                            <li>Date: January 2017</li>
                            <li>Client: Threads</li>
                            <li>Category: Illustration</li>
                            </ul><button className="btn btn-primary" type="button" data-bs-dismiss="modal"><i className="fa fa-times" /><span>&nbsp;Close Project</span></button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="modal fade text-center portfolio-modal" role="dialog" tabIndex={-1} id="portfolioModal3">
                <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                        <div className="modal-body">
                            <h2 className="text-uppercase">Project Name</h2>
                            <p className="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p><img alt="" className="img-fluid d-block mx-auto" src="assets/img/portfolio/3-full.jpg" />
                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                            <ul className="list-unstyled">
                            <li>Date: January 2017</li>
                            <li>Client: Threads</li>
                            <li>Category: Illustration</li>
                            </ul><button className="btn btn-primary" type="button" data-bs-dismiss="modal"><i className="fa fa-times" /><span>&nbsp;Close Project</span></button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="modal fade text-center portfolio-modal" role="dialog" tabIndex={-1} id="portfolioModal4">
                <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                        <div className="modal-body">
                            <h2 className="text-uppercase">Project Name</h2>
                            <p className="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p><img alt="" className="img-fluid d-block mx-auto" src="assets/img/portfolio/4-full.jpg" />
                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                            <ul className="list-unstyled">
                            <li>Date: January 2017</li>
                            <li>Client: Threads</li>
                            <li>Category: Illustration</li>
                            </ul><button className="btn btn-primary" type="button" data-bs-dismiss="modal"><i className="fa fa-times" /><span>&nbsp;Close Project</span></button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="modal fade text-center portfolio-modal" role="dialog" tabIndex={-1} id="portfolioModal5">
                <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                        <div className="modal-body">
                            <h2 className="text-uppercase">Project Name</h2>
                            <p className="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p><img alt="" className="img-fluid d-block mx-auto" src="assets/img/portfolio/5-full.jpg" />
                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                            <ul className="list-unstyled">
                            <li>Date: January 2017</li>
                            <li>Client: Threads</li>
                            <li>Category: Illustration</li>
                            </ul><button className="btn btn-primary" type="button" data-bs-dismiss="modal"><i className="fa fa-times" /><span>&nbsp;Close Project</span></button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="modal fade text-center portfolio-modal" role="dialog" tabIndex={-1} id="portfolioModal6">
                <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                        <div className="modal-body">
                            <h2 className="text-uppercase">Project Name</h2>
                            <p className="text-muted item-intro">Lorem ipsum dolor sit amet consectetur.</p><img alt="" className="img-fluid d-block mx-auto" src="assets/img/portfolio/6-full.jpg" />
                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                            <ul className="list-unstyled">
                            <li>Date: January 2017</li>
                            <li>Client: Threads</li>
                            <li>Category: Illustration</li>
                            </ul><button className="btn btn-primary" type="button" data-bs-dismiss="modal"><i className="fa fa-times" /><span>&nbsp;Close Project</span></button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <footer id="myFooter" style={{background: '#ffffff'}}>
                <div className="container-fluid" style={{borderStyle: 'solid', borderTopWidth: 1, borderTopColor: 'rgb(50,47,47)'}}>
                <div className="row text-center">
                    <div className="col-12 col-sm-6 col-md-3">
                    <h1 className="logo" style={{marginTop: 30}}><a href="#">&nbsp;<picture><img alt="" src="assets/img/Y.png" style={{width: '80%', height: '80%'}} /></picture></a></h1>
                    </div>
                    <div className="col-sm-6 col-md-2 offset-xxl-2">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#" style={{color: '#1479bc'}}>Privacy Statement</a></li>
                        <li><a href="#" style={{color: '#1479bc'}}>Copyright<br /></a></li>
                        <li><a href="#" style={{color: '#1479bc'}}>Sitemap</a></li>
                        <li><a href="#contact" style={{color: '#1479bc'}}>Contact Us</a></li>
                    </ul>
                    </div>
                    <div className="col-md-3 offset-xxl-2 social-networks">
                    <div /><a className="facebook" href="#" style={{color: '#9f2536'}}><i className="fa fa-facebook" style={{background: '#ffffff'}} /></a><a className="twitter" href="#" style={{color: '#9f2536'}}><i className="fa fa-twitter" /></a><a className="google" href="#" style={{color: '#9f2536'}}><i className="fa fa-google-plus" /></a><a className="linkedin" href="#" style={{color: '#9f2536'}}><i className="fa fa-linkedin" /></a><button className="btn btn-primary" style={{marginTop: 20}} type="button">Follow us</button>
                    </div>
                </div>
                <div className="row footer-copyright" style={{background: 'rgba(249,242,243,0.98)'}}>
                    <div className="col">
                    <p>&nbsp;<span className="copyright">Copyright&nbsp;© TCPCM 2022</span></p>
                    </div>
                </div>
                </div>
            </footer>
        </div>
    );
  }
}
