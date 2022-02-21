import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import GroupInfor from '../GroupInfor/GroupInfor'
import GroupStudent from '../GroupStudent/GroupStudent'

export default class GroupRouter extends Component {
  render() {
    return (
      <div>
          <Routes>
              <Route path='set' element = {<GroupStudent/>}/>
              <Route path='infor' element = {<GroupInfor/>}/>
          </Routes>
      </div>
    )
  }
}
