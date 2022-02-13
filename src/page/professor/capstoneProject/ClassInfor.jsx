import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ClassInfor extends Component {
  render() {
    return (
        <div>
            <div id="item-1-2" className="tab-pane fade" role="tabpanel" aria-labelledby="item-1-2-tab">
                <h4>Capstone Project - Class Information</h4>
                <p>The table below shows all the information of classes you set up. You can setup a new class for a course. You can also change or update the information of existing classes.<br /></p>
                <Link className="btn btn-primary" role="button" to="/professor/capstoneProject/createClass">Setup Class</Link>
                <section id="class-information" style={{marginTop: 0, height: 'auto'}}>
                    <div className="container" style={{width: '75%', marginTop: 0, boxShadow: '2px 4px 3px 1px rgb(82,88,94), -2px -4px 7px 1px', background: 'rgba(249,242,243,0.98)', height: 'auto'}}>
                    <div className="row">
                        <div className="col" style={{height: '50%'}}>
                        <h1 style={{fontFamily: 'Actor, sans-serif', color: '#9f2536'}}><strong>Class 1:&nbsp;AF4912BDBKEIC1</strong><br /></h1>
                        </div>
                    </div>
                    <div className="row" id="heading-basic-information-2">
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
                                <p style={{width: 201, height: 28, marginTop: 5, fontSize: 22, fontFamily: 'Actor, sans-serif', marginLeft: '-4px', borderWidth: 1, fontWeight: 'bold', textAlign: 'left'}}><strong>Component Code</strong></p>
                            </div>
                            <div className="col-lg-8" style={{width: '574.328px', borderWidth: 10, height: 'auto', margin: '-1px'}}>
                                <p style={{width: '80%', height: '60%', fontFamily: 'Actor, sans-serif', borderWidth: 1, borderLeftStyle: 'none', marginTop: 5, marginLeft: 0}}>SEM 001</p>
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
                                <p style={{width: 201, height: 28, marginTop: 5, fontSize: 22, fontFamily: 'Actor, sans-serif', marginLeft: '-4px', borderWidth: 1, fontWeight: 'bold', textAlign: 'left'}}><strong>Class Type</strong></p>
                            </div>
                            <div className="col-lg-8" style={{width: '574.328px', borderWidth: 10, height: 'auto', margin: '-1px'}}>
                                <p style={{width: '80%', height: '60%', fontFamily: 'Actor, sans-serif', borderWidth: 1, borderLeftStyle: 'none', marginTop: 5, marginLeft: 0}}>Seminar</p>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                    <div style={{width: '50%', marginLeft: '25%', marginRight: '25%'}}>
                    <div className="dropdown" style={{marginTop: '10%'}}><button className="btn btn-primary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">Change Information&nbsp;</button>
                        <div className="dropdown-menu"><a className="dropdown-item" href="P-1.2.2.Professor%20class%20change%20information.html">Class 1</a><a className="dropdown-item" href="P-1.2.2.Professor%20class%20change%20information.html">Class 2</a><a className="dropdown-item" href="P-1.2.2.Professor%20class%20change%20information.html">Other Classes</a></div>
                    </div>
                    </div>
                </section>
            </div>
        </div>
    )
  }
}
