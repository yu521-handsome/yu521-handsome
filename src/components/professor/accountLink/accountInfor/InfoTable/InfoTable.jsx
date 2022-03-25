import React, { Component } from 'react'
import ExpertTable from '../ExpertTable/ExpertTable'
import StudentTable from '../StudentTable/StudentTable'

export default class InfoTable extends Component {
    render() {
        const {chosenCourse} = this.props
        const {id,students,experts} = chosenCourse
        return (
            <div>
                <div style={{width: 'auto', marginTop: '10%', marginLeft: '10%'}}>
                    <div className="row" style={{width: 'auto'}}>
                        <div className="col-xxl-4">
                        <h3>Course ID:{id}</h3>
                        </div>
                    </div>
                </div>
                <StudentTable students={students}/>
                <ExpertTable experts={experts}/>
            </div>
        )
    }
}
