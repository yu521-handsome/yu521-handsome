import React, { Component } from 'react';
import BadgeInfor from '../../../../components/professor/grading/infor/BadgeInfor/BadgeInfor';
import Header from '../../../../components/professor/grading/infor/Header/Header';
import IssueBadge from '../../../../components/professor/grading/infor/IssueBadge/IssueBadge';
import IssueNotice from '../../../../components/professor/grading/infor/IssueNotice/IssueNotice';
import ShowTable from '../../../../components/professor/grading/infor/ShowTable/ShowTable';
import NavigationBar from '../../../../components/professor/NavigationBar/NavigationBar';


export default class GradingInfor extends Component {
  render() {
    return (
    <div> 
        <NavigationBar/>
        <Header/>
        <ShowTable/>
        <section id="badge-example" style={{height: '600px',background: '#ffffff'}}>
            <BadgeInfor/>
            <IssueBadge/>
        </section>
        <IssueNotice/>
    </div>)
  }
}
