import React, { Component } from 'react'

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
            <div className="p-5 mb-4 bg-light round-3">
                <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Capstone Project Course</h1>
                <p className="col-md-8 fs-4">This page shows all the information related to the Capstone Project Course. Professors need to setup course, class, and assessments for their students, and review all the information here. They can also update or change information.</p>
                <button className="btn btn-primary btn-lg" onClick={()=>this.scrollToAnchor('information-table')}>Information &amp; Setup</button>
                </div>
            </div>
        </div>
    )
    }
}
