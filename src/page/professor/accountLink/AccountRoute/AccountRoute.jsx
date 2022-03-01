import React, { Component } from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import AccountInfor from '../AccountInfor/AccountInfor'
import SetAccount from '../SetAccount/SetAccount'

export default class AccountRoute extends Component {
  render() {
    return (
      <div>
            <Routes>
                <Route path="set" element={<SetAccount/>}/>
                <Route path="infor" element = {<AccountInfor/>}/>
                <Route path="" element = {<Navigate to="set" />} /> 
            </Routes>
      </div>
    )
  }
}
