import React, { Component } from 'react'

export default class ReportInforTable extends Component {
  render() {
    const {courseTheme,reportId,title,description} = this.props.reportInfor
    return (
      <div>
            <section id="report-information" style={{marginTop: 0, height: 'auto'}}>
                <div className="container" style={{width: '75%', marginTop: 0, boxShadow: '2px 4px 3px 1px rgb(82,88,94), -2px -4px 7px 1px', background: 'rgba(249,242,243,0.98)', height: 'auto'}}>
                <div className="row">
                    <div className="col" style={{height: '50%'}}>
                    <h1 style={{fontFamily: 'Actor, sans-serif', color: '#9f2536'}}><strong>Report:&nbsp;{reportId}</strong><br /></h1>
                    </div>
                </div>
                <div className="row" id="heading-basic-information-5">
                    <div className="col" style={{height: '50%'}}>
                    <h4 style={{fontFamily: 'Actor, sans-serif', fontWeight: 'bold', color: '#1479bc'}}>Basic Information</h4>
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
                            <p style={{width: '80%', height: '60%', fontFamily: 'Actor, sans-serif', borderWidth: 1, borderLeftStyle: 'none', marginTop: 5, marginLeft: 0}}>{courseTheme}</p>
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
                            <p style={{width: 201, height: 28, marginTop: 5, fontSize: 22, fontFamily: 'Actor, sans-serif', marginLeft: '-4px', borderWidth: 1, fontWeight: 'bold', textAlign: 'left'}}><strong>Report Name</strong></p>
                        </div>
                        <div className="col-lg-8" style={{width: '574.328px', borderWidth: 10, height: 'auto', margin: '-1px'}}>
                            <p style={{width: '80%', height: '60%', fontFamily: 'Actor, sans-serif', borderWidth: 1, borderLeftStyle: 'none', marginTop: 5, marginLeft: 0}}>{title}</p>
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
                            <p style={{width: 201, height: 28, marginTop: 5, fontSize: 22, fontFamily: 'Actor, sans-serif', marginLeft: '-4px', borderWidth: 1, fontWeight: 'bold', textAlign: 'left'}}><strong>Report Description</strong></p>
                        </div>
                        <div className="col-lg-8" style={{width: '574.328px', borderWidth: 10, height: 'auto', margin: '-1px'}}>
                            <p style={{width: '80%', height: '60%', fontFamily: 'Actor, sans-serif', borderWidth: 1, borderLeftStyle: 'none', marginTop: 5, marginLeft: 0}}>{description}</p>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </section>
      </div>
    )
  }
}
