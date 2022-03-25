import React, { Component } from 'react'
import PageNav from '../PageNav/PageNav'

export default class GroupInfoTable extends Component {
    state= {
        pageCurr:1,
        listNumber:10,
    }
    //create the data showing in the table
    createShowData() {
        //groupInfo:[{id:"",name:"",students:[],experts:""}]
        const {listNumber,pageCurr} = this.state
        const {groupInfo} = this.props
        let showingRow = []
        for(var i=listNumber*(pageCurr-1); i < listNumber*pageCurr; i++) {
            if(i === groupInfo.length) {
                break
            }
            let index = i
            showingRow.push(
                <tr>
                    <th scope="row">{index}</th>
                    <td>{groupInfo[index].id}</td>
                    <td>{groupInfo[index].name}</td>
                    <td>
                        {groupInfo[index].students.map((item,index) => {
                            return <div key={index}>{item}</div>
                        })}
                    </td>
                    <td>{groupInfo[index].expert}</td>
                </tr>
            )
        }
        return showingRow
    }

    //call back function to get the current page from PageNav
    changeCurrent = (pageCurr) => {
        this.setState({pageCurr})
    }
    render() {
        const {courseId} = this.props
        const showingData = this.createShowData.bind(this)()
        return (
            <div>
                <section id="group-list-1" style={{height: 'auto'}}>
                    <div id="course-1" style={{marginBottom: '5%', background: 'rgba(249,242,243,0.98)'}}>
                        <div className="row" style={{width: '70%'}}>
                        <div className="col">
                            <h3>Course ID: {courseId}</h3>
                        </div>
                        </div>
                    </div>
                    <div id="group-table" style={{background: 'rgba(255,255,255,0.2)'}}>
                        <div className="form-group pull-right">
                        <input type="text" className="search form-control" placeholder="What you looking for?" />
                        </div>
                        <span className="counter pull-right" />
                        <table className="table table-hover table-bordered results">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th className="col-md-1 col-xs-1">Group ID</th>
                            <th className="col-md-2 col-xs-2">Group Name</th>
                            <th className="col-md-6 col-xs-6">Students</th>
                            <th className="col-md-3 col-xs-3">Industry Expert</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showingData}
                        </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <nav>
                                <PageNav totalPage = { Math.ceil(this.props.groupInfo.length/this.state.listNumber)} changeCurrent = {this.changeCurrent}/>
                            </nav>
                        </nav>
                    </div>
                </section>
            </div>
        )
    }
}
