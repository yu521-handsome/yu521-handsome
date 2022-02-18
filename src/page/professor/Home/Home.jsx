import React, { Component } from 'react';
import FunctionsTable from '../../../components/professor/home/FuntionsTable/FunctionsTable';
import Header from '../../../components/professor/home/Header/Header';
import HomeNavigationBar from '../../../components/professor/home/HomeNavigationBar/HomeNavigationBar';
import Profile from '../../../components/professor/home/Profile/Profile';


export default class Home extends Component {
  render() {
    return (
        <div>
            <HomeNavigationBar/>
            <Header/>
            <FunctionsTable/>
            <Profile/>
        </div>
)
  }
}
