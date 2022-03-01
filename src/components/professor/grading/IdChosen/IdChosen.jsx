import React, { Component } from 'react'

export default class IdChosen extends Component {
    state={
        id:""
    }
    saveId = (event) => {
        this.setState({id:event.target.value})
    }
    render() {
        const {title, notice, listTitle, idList, search} = this.props.formInfor
        return (
            <div>
                <section id="input-project" className="contact-clean" style={{background: 'rgba(159,37,54,0.05)', width: '100%', marginLeft: 0, marginRight: 0, marginTop: '7%'}}>
                    <form method="post" style={{marginTop: 50}} onSubmit={(event) => search(this.state.id,event)}>
                        <h2 className="text-center">{title}</h2>
                        <p style={{textAlign: 'center'}}>{notice}</p>
                        <div style={{marginTop: 20}}>
                            <small className="form-text">{listTitle}</small>
                            <select className="form-select" defaultValue="" onChange={this.saveId}>
                                <option key={-1} value="null">{""}</option>
                                {idList.map((item,index) => {
                                    return(<option key={index} value={item}>{item}</option>)
                                })}
                            </select>
                            </div>
                        <div className="mb-3"><button className="btn btn-primary" type='submit'>Search</button></div>
                    </form>
                </section>
            </div>
        )
    }
}
