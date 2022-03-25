import React, { Component } from 'react'

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
                <section style={{paddingTop: 0, paddingLeft: 0, paddingBottom: 0}}>
                    <form className="contact-clean" onSubmit={(event) => search(this.state.id,event)}>
                        <div style={{height: '50%'}}><small className="form-text" style={{color: 'rgb(0,0,0)', fontSize: 15}}>Course ID</small>
                            <select className="form-select" style={{fontSize: 14}} defaultValue="" onChange={this.saveId}>
                                <option key={-1} value="">Choose a Course</option>
                                    {idList.map((item,index) => {
                                        return(<option key={index} value={item}>{item}</option>)
                                    })}
                            </select>
                        </div>
                        <div style={{marginTop: '5%'}}><button className="btn btn-primary" type='submit'>Search</button></div>
                    </form>
                </section>
            </div>
        )
    }
}
