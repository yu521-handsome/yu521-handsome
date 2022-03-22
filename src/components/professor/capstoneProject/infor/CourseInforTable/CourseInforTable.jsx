import React, { Component } from 'react'

export default class CourseInforTable extends Component {
    render() {
        const {courseId, theme, projectId,reportId,quizzId,mileStoneId} = this.props.courseInfor
        return (
            <div>
                <section id="course-information" style={{height: 'auto', marginTop: 20}}>
                <div className="container" style={{width: '75%', marginTop: 0, boxShadow: '2px 4px 3px 1px rgb(82,88,94), -2px -4px 7px 1px', background: 'rgba(249,242,243,0.98)', height: 'auto'}}>
                <div className="row">
                    <div className="col" style={{height: '50%'}}>
                    <h1 style={{fontFamily: 'Actor, sans-serif', color: '#9f2536'}}>Course ID:&nbsp;{courseId}<br /></h1>
                    </div>
                </div>
                <div className="row" id="heading-basic-information">
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
                            <p style={{width: '80%', height: '60%', fontFamily: 'Actor, sans-serif', borderWidth: 1, borderLeftStyle: 'none', marginTop: 5, marginLeft: 0}}>{theme}</p>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                <div className="row" id="heading-assessment-information" style={{height: 'auto'}}>
                    <div className="col" style={{height: 'auto'}}>
                    <h4 style={{margin: 0, marginLeft: '-7px', marginTop: 21, fontFamily: 'Actor, sans-serif', color: '#1479bc'}}>Assessment Information</h4>
                    </div>
                </div>
                <div className="row" style={{background: 'rgba(239,239,239,0.4)'}}>
                    <div className="col">
                    <form>
                        <div className="row" style={{height: '50%', borderWidth: 1, borderStyle: 'solid'}}>
                        <div className="col" style={{width: 400, height: 'auto'}}>
                            <p style={{width: 201, height: 28, marginTop: 5, fontSize: 22, fontFamily: 'Actor, sans-serif', marginLeft: '-4px', borderWidth: 1, fontWeight: 'bold', textAlign: 'left'}}>Course Project</p>
                        </div>
                        <div className="col-lg-8" style={{width: '574.328px', borderWidth: 10, height: 'auto', margin: '-1px'}}>
                            <p style={{width: '80%', height: '60%', fontFamily: 'Actor, sans-serif', borderWidth: 1, borderLeftStyle: 'none', marginTop: 5, marginLeft: 0}}>
                                {projectId.map((item,index) => {
                                    return(<span key={index} style={{textDecoration: 'underline'}}>{item}&nbsp;</span>)
                                })}
                            </p>
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
                            <p style={{width: 201, height: 28, marginTop: 5, fontSize: 22, fontFamily: 'Actor, sans-serif', marginLeft: '-4px', borderWidth: 1, fontWeight: 'bold', textAlign: 'left'}}>Course Report</p>
                        </div>
                        <div className="col-lg-8" style={{width: '574.328px', borderWidth: 10, height: 'auto', margin: '-1px'}}>
                            <p style={{width: '80%', height: '60%', fontFamily: 'Actor, sans-serif', borderWidth: 1, borderLeftStyle: 'none', marginTop: 5, marginLeft: 0}}>
                                {reportId.map((item,index) => {
                                    return(<span key={index} style={{textDecoration: 'underline'}}>{item}&nbsp;</span>)
                                })}
                            </p>
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
                            <p style={{width: 201, height: 28, marginTop: 5, fontSize: 22, fontFamily: 'Actor, sans-serif', marginLeft: '-4px', borderWidth: 1, fontWeight: 'bold', textAlign: 'left'}}>Course Quiz</p>
                        </div>
                        <div className="col-lg-8" style={{width: '574.328px', borderWidth: 10, height: 'auto', margin: '-1px'}}>
                            <p style={{width: '80%', height: '60%', fontFamily: 'Actor, sans-serif', borderWidth: 1, borderLeftStyle: 'none', marginTop: 5, marginLeft: 0}}>
                                {quizzId.map((item,index) => {
                                    return(<span key={index} style={{textDecoration: 'underline'}}>{item}&nbsp;</span>)
                                })}
                            </p>
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
                            <p style={{width: 201, height: 28, marginTop: 5, fontSize: 22, fontFamily: 'Actor, sans-serif', marginLeft: '-4px', borderWidth: 1, fontWeight: 'bold', textAlign: 'left'}}>Course Milestone</p>
                        </div>
                        <div className="col-lg-8" style={{width: '574.328px', borderWidth: 10, height: 'auto', margin: '-1px'}}>
                            <p style={{width: '80%', height: '60%', fontFamily: 'Actor, sans-serif', borderWidth: 1, borderLeftStyle: 'none', marginTop: 5, marginLeft: 0}}>
                                {mileStoneId.map((item,index) => {
                                    return(<span key={index} style={{textDecoration: 'underline'}}>{item}&nbsp;</span>)
                                })}
                            </p>
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
