import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Main from './page/main/Main'
import ProfessorRoute from './page/professor/ProfessorRoute/ProfessorRoute'
import StudentRoute from './page/student/StudentRoute/StudentRoute'
import IndustryRoute from './page/industry/IndustryRoute/IndustryRoute'

export default class App extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route path="/main" component = {Main}/>
                    <Route path="/professor" component = {ProfessorRoute}/>
                    <Route path="/student" component = {StudentRoute}/>
                    <Route path="/industry" component = {IndustryRoute}/>
                    <Redirect to="/main"/>
                </Switch>
            </div>
        )
    }
}
