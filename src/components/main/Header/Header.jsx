import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="masthead" style={{background: 'url("assets/img/overview.jpeg") center / cover, var(--bs-orange)', marginTop: '10%', height: 637, width: 'auto'}}>
            <div className="container">
            <div className="intro-text">
                <div className="intro-lead-in"><span style={{background: 'rgba(0,0,0,0.3)', boxShadow: '3px 3px 20px rgb(44,44,44)'}}>Welcome To PolyU TCPCM!</span></div>
                <div className="intro-heading text-uppercase"><span style={{background: 'rgba(0,0,0,0.3)', boxShadow: '3px 3px 20px 0px rgb(0,0,0)'}}>It's Nice To Meet You</span></div><a className="btn btn-primary btn-xl text-uppercase" role="button" href="#services">Tell me more</a>
            </div>
            </div>
        </header>
      </div>
    )
  }
}
