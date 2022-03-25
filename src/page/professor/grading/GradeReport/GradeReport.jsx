import React, { Component } from 'react'
import GradingTable from '../../../../components/professor/grading/gradeReport/GradingTable'
import IdChosen from '../../../../components/professor/grading/IdChosen/IdChosen'
import SuccessNotice from '../../../../components/professor/grading/SuccessNotice/SuccessNotice'
import NavigationBar from '../../../../components/professor/NavigationBar/NavigationBar'

export default class GradeReport extends Component {

  // reportRecords:[{id:"",studentId:"",studentName:"",grade:"",}]
  // reportInfor:[{id:"",title:""}]
  state = {
    idList:[],
    chosenId:"",
    chosenTitle:"",
    reportInfor:[],
    reportRecords:[],
    userEmail:"p1@gmail.com"
  }

  //fetch the all the report id
  componentDidMount(){
    window.scrollTo(0,0)
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
    fetch(`/api1/reports?professor=${this.state.userEmail}`,{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      else{
        alert("Reprot Get failed")
        return "error"
      }
    }).then((response) => {
      if(response !== "error"){
        this.reportInfoProcess(response)
      }
    }).catch((e)=>{
      console.log("error")
    })
  }

  reportInfoProcess(response) {
    let result=response
    this.setState({reportInfor:result},function(){
      this.createIdList()
    })
  }
  //create the id List for search
  createIdList(){
    let idList = []
    const {reportInfor} = this.state
    for(var i = 0; i < reportInfor.length; i++) {
      idList.push(reportInfor[i].id)
    }
    this.setState({idList})
  }

  //serach the report-records by reportid
  search = (id,event) => {
    event.preventDefault()
    this.setState({chosenId:id},function(){
      this.doSearch()
    })
  }

  async doSearch(){
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
    await fetch(`/api1/report-records?reportId=${this.state.chosenId}`,{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error"){
        this.recordsProcess(response)
      }
    }).catch((e)=>{
      console.log("error")
    })
  }

  // reportRecords:[{id:"",studentId:"",studentName:"",grade:"",}]
  recordsProcess(response) {
    let result=[]
    for(var i = 1; i < response.length;i++) {
      let oneRecord={}
      oneRecord.id=response[i].id
      oneRecord.studentId = response[i].student.studentId
      oneRecord.studentName = response[i].student.name
      oneRecord.grade = response[i].grade
      result.push(oneRecord)
    }
    this.setState({reportRecords:result})
  }

  render() {
    const idFormInfor = {
      title:"Grade Report",
      notice:"Please choose Report id to grade for the students.",
      listTitle:"Report id",
      idList:this.state.idList,
      search:this.search
    } //use to show information in the id chosen form
    return (
      <div>
        <NavigationBar/>
        <IdChosen formInfor={idFormInfor}/>
        <GradingTable reportRecords={this.state.reportRecords} reportName={this.state.chosenTitle}/>
        <SuccessNotice/>
      </div>
    )
  }
}
