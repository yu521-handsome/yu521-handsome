import React, { Component } from 'react'
import Header from '../../../components/professor/capstoneProject/infor/Header/Header'
import InforTable from '../../../components/professor/capstoneProject/infor/InforTable/InforTable'
import NavigationBar from '../../../components/professor/NavigationBar/NavigationBar'


export default class CapstoneInfor extends Component {
  render() {
    return (
        <div>
            <NavigationBar/>
            <Header/>
            <InforTable/>
        </div>
    )
  }
}
