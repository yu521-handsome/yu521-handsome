import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HeaderBg from '../../../../img/professor/header-bg.jpg'

export default class Header extends Component {
  scrollToAnchor = (anchorName) => {
    if(anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if(anchorElement) {
        anchorElement.scrollIntoView()
      }
    }
  }
  render() {
    return (
        <div>            
          <header className="masthead" style={{backgroundImage: `url(${HeaderBg})`, backgroundSize: 'cover'}}>
                <div className="container">
                <div className="intro-text">
                    <div className="intro-lead-in"><span>Welcome To PolyU TCPCM!</span></div>
                    <div className="intro-heading text-uppercase"><span>professor&nbsp;</span></div>
                    <Link className="btn btn-primary btn-xl text-uppercase" role="button" to="">Tell me more</Link>
                </div>
                </div>
            </header>
            <div className="p-5 mb-4 bg-light round-3">
                <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Hi&nbsp;&nbsp;<strong>Prof. CW Brian KEI</strong></h1>
                <p className="col-md-8 fs-4">Welcome to the professor home page of TCPCM! Here you can upload your capstone project course related information, and you can issue badge to your outstanding students in the&nbsp;
                <button className="btn btn-light" onClick={()=>this.scrollToAnchor('functions')}>Functions</button>&nbsp;. You can also review your
                <button className="btn btn-light" onClick={()=>this.scrollToAnchor('profile')}>Profile</button> .&nbsp;</p>
                </div>
            </div>
        </div>
    )
  }
}
