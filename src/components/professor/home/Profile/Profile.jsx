import React, { Component } from 'react'
import ProfileImage from "../../../../img/professor/profileImage.jpg"

export default class Profile extends Component {
  render() {
    return (
        <div>            
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
                    <div><img className="img-fluid" src={ProfileImage} style={{width: '80%', marginTop: '10%'}} alt="" /></div>
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
                        <p>If you have any update on your profile information, please&nbsp;<button className="btn" style={{color: '#9f2536'}}>Change it by clicking</button></p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
  }
}
