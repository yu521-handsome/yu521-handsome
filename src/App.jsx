import React, { Component } from 'react'
import {Route,Navigate, Routes} from 'react-router-dom'
import Main from './page/main/Main'
import ProfessorRoute from './page/professor/ProfessorRoute/ProfessorRoute'
import StudentRoute from './page/student/StudentRoute/StudentRoute'
import IndustryRoute from './page/industry/IndustryRoute/IndustryRoute'

export default class App extends Component {
    render() {
        return(
            <div>
                <Routes>
                    <Route path="main" element = {<Main/>}/>
                    <Route path="professor/*" element = {<ProfessorRoute/>}/>
                    <Route path="student" element = {<StudentRoute/>}/>
                    <Route path="industry" element = {<IndustryRoute/>}/>
                    <Route path="*" element = {<Navigate to="professor" />} /> 
                </Routes>
            </div>
        )
    }
}
