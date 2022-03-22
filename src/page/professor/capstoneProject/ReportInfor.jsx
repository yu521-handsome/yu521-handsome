import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ReportInforTable from '../../../components/professor/capstoneProject/infor/ReportInforTable/ReportInforTable'

export default class ReportInfor extends Component {
    state = {
        reportInfor:[],
        userEmail:"p1@gmail.com"
    }
    //create projectInfor
    async componentDidMount(){
        let reportInfor = []
        let courseList = []
        let reportsList = []

       //get all courses
        const HEADER = {
            'Accept':'application/json,text/plain,*/*'
        }
        //get course
        await fetch(`/api1/courses?chiefProfessor=${this.state.userEmail}`,{
            method:"get",
            headers:HEADER
        }).then((response)=>{
            if(response.ok) {
            return response.json()
            }
            return "error"
        }).then((response) => {
            if(response !== "error") {
            courseList = response
            }
            else {
            alert("Courses get failed")
            }
        }).catch((e)=>{
            console.log("error")
        })
        
        for(var i = 0; i < courseList.length; i++) {
            const courseId = courseList[i].id
            const courseTheme = courseList[i].theme
            //get reports
            await fetch(`/api1/reports?courseId=${courseId}`,{
                method:"get",
                headers:HEADER
            }).then((response)=>{
                if(response.ok) {
                return response.json()
                }
                return "error"
            }).then((response) => {
                if(response !== "error") {
                reportsList = response
                }
                else {
                alert("Reports get failed")
                }
            }).catch((e)=>{
                console.log("error")
            })
            var j;
            for(j = 0; j < reportsList.length; j++) {
                let oneReportInfor = {
                    courseTheme:courseTheme,
                    reportId:reportsList[j].id,
                    title:reportsList[j].title,
                    description:reportsList[j].description
                }
                reportInfor.push(oneReportInfor)
            }
        }
        this.setState({reportInfor})
    }
  render() {
    return (
        <div>
            <div className="tab-pane fade show active" role="tabpanel">
                <h4>Capstone Project - Report Information</h4>
                <p>The table below shows all the information of reports you set up. You can setup a new report. You can also change or update the information of existing reports.<br /></p>
                <Link className="btn btn-primary" role="button" to="/professor/capstoneProject/createReport">Setup Report</Link>
                {this.state.reportInfor.map((item,index) => {
                    return(<ReportInforTable key={index} reportInfor={item}/>)
                  })}
                <div style={{width: '50%', marginLeft: '25%', marginRight: '25%'}}>
                    <div className="dropdown" style={{marginTop: '10%'}}><button className="btn btn-primary dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button">Change Information&nbsp;</button>
                        <div className="dropdown-menu"><a className="dropdown-item" href="P-1.4.2.Professor%20report%20change%20information.html">Report 1</a><a className="dropdown-item" href="P-1.4.2.Professor%20report%20change%20information.html">Report 2</a><a className="dropdown-item" href="P-1.4.2.Professor%20report%20change%20information.html">Other Reports</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
