import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Main from './page/main/Main'



export default class App extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route path="/main" component = {Main}/>
                    <Redirect to="/main"/>
                </Switch>
            </div>
        )
    }
}
