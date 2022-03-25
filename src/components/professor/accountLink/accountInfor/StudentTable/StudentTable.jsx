import React, { Component } from 'react'
import PageNav from '../PageNav/PageNav'

export default class StudentTable extends Component {
    //students:[{studentId:"",name:"",email:""}]
    state= {
        pageCurr:1,
        listNumber:10,
    }

    //create the data showing in the table
    createShowData() {
        const {listNumber,pageCurr} = this.state
        const {students} = this.props
        let showingRow = []
        for(var i=listNumber*(pageCurr-1); i < listNumber*pageCurr; i++) {
            if(i === students.length) {
                break
            }
            let index = i
            showingRow.push(
                <tr key={index}>
                    <td>{students[index].name}</td>
                    <td>{students[index].studentId}</td>
                    <td>{students[index].email}</td>
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
        const {students} = this.props
        const {listNumber} = this.state
        return (
            <div>
                <div id="student-information-table">
                    <div className="container">
                        <h2>Student List</h2>
                        <p>The table below shows the student information updated for the selected course and class.</p>            
                        <table className="table table-condensed">
                        <thead>
                            <tr>
                            <th>Student Name</th>
                            <th>Student ID</th>
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
                            <PageNav totalPage = { Math.ceil(students.length/listNumber)} changeCurrent = {this.changeCurrent}/>
                        </nav>
                    </nav>
                </div>
            </div>
        )
    }
}
