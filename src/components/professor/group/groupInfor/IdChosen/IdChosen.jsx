import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class IdChosen extends Component {
    state={
        id:""
    }
    saveId = (event) => {
        this.setState({id:event.target.value})
    }
    render() {
        const {idList, search} = this.props.formInfo
        return (
            <div>        
                <div className="p-5 mb-4 bg-light round-3" style={{marginTop: '7%'}}>
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Grouping Information</h1>
                        <p className="col-md-8 fs-4">You can group students and industry experts for a course by clicking the button below. You can also check all the group you have created below by searching course.</p>
                        <Link className="btn btn-primary" role="button" style={{marginTop: '5%'}} to="/professor/group/set">Group Now</Link>
                        <form className="contact-clean" style={{background: 'rgb(248,249,250)', marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: '40%'}} onSubmit={(event) => search(this.state.id,event)}>
                        <div style={{height: '50%'}}>
                            <small className="form-text" style={{color: 'rgb(0,0,0)', fontSize: 15}}>Course ID</small>
                            <select className="form-select" defaultValue="" onChange={this.saveId}>
                                <option key={-1} value="">Choose a Course</option>
                                        {idList.map((item,index) => {
                                            return(<option key={index} value={item}>{item}</option>)
                                        })}
                                </select>
                            </div>
                        <div style={{marginTop: '10%'}}>
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
