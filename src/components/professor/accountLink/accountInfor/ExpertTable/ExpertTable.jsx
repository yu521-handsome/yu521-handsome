import React, { Component } from 'react'
import PageNav from '../PageNav/PageNav'

export default class ExpertTable extends Component {
    //experts:[{name:"",email:""}]
    state= {
        pageCurr:1,
        listNumber:10,
    }

    //create the data showing in the table
    createShowData() {
        const {listNumber,pageCurr} = this.state
        const {experts} = this.props
        let showingRow = []
        for(var i=listNumber*(pageCurr-1); i < listNumber*pageCurr; i++) {
            if(i === experts.length) {
                break
            }
            let index = i
            showingRow.push(
                <tr key={index}>
                    <td>{experts[index].name}</td>
                    <td>{experts[index].email}</td>
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
        const showingData = this.createShowData.bind(this)()
        const {experts} = this.props
        const {listNumber} = this.state
        return (
            <div>
                <div id="expert-information-table">
                    <div className="container">
                        <h2>Industry Expert List</h2>
                        <p>The table below shows the Industry Expert information updated for the selected course and class.</p>            
                        <table className="table table-condensed">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showingData}
                        </tbody>
                        </table>
                    </div>
                    <nav aria-label="Page navigation example" style={{marginTop:''}}>
                        <nav>
                            <PageNav totalPage = { Math.ceil(experts.length/listNumber)} changeCurrent = {this.changeCurrent}/>
                        </nav>
                    </nav>
                </div>
            </div>
        )
    }
}
