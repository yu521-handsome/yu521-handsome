import React, { Component } from 'react'
import GroupInfoTable from '../../../../components/professor/group/groupInfor/GroupInfoTable/GroupInfoTable'
import IdChosen from '../../../../components/professor/group/groupInfor/IdChosen/IdChosen'
import NavigationBar from '../../../../components/professor/NavigationBar/NavigationBar'

export default class GroupInfor extends Component {
  componentDidMount(){
    window.scrollTo(0,0)
  }
  render() {
    return (
      <div>
        <NavigationBar/>
        <IdChosen/>
        <GroupInfoTable/>
      </div>
    )
  }
}
