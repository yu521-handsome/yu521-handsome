import React, { Component } from 'react'
import GradingTable from '../../../../components/professor/grading/gradeReport/GradingTable'
import IdChosen from '../../../../components/professor/grading/IdChosen/IdChosen'
import SuccessNotice from '../../../../components/professor/grading/SuccessNotice/SuccessNotice'
import NavigationBar from '../../../../components/professor/NavigationBar/NavigationBar'

export default class GradeReport extends Component {

  // reportRecords:[{groupName:"",ID:"",groupID:"",gradeByProfessor:""}]
  // reportInfor:[{ID:"",title:""}]
  state = {
    idList:[],
    chosenId:"",
    chosenTitle:"",
    reportInfor:[],
    reportRecords:[]
  }

  //fetch the all the report id
  componentDidMount(){
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
    fetch('/api1/reports',{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error"){
        this.setState({reportInfor:response})
      }
    }).catch((e)=>{
      console.log("error")
    })

    let idList = this.createIdList()

    this.setState({idList})

  }

  //create the id List for search
  createIdList(){
    let idList = []
    const {reportInfor} = this.state
    for(var i = 0; i < reportInfor.length; i++) {
      idList.push(reportInfor[i].ID)
    }
    return idList
  }

  //serach the report-records by reportID
  search = (id,event) => {
    event.preventDefault()
    const {reportInfor} = this.state
    //save title
    for(var i=0; i < reportInfor.length; i++) {
      if(reportInfor[i].ID === id) {
        this.setState({chosenTitle:reportInfor[i].title})
      }
    }
    this.setState({chosenId:id},function(){
      this.doSearch()
    })
  }
  async doSearch(){
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
    await fetch(`/api1/report-records?reportID=${this.state.chosenId}`,{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error"){
        this.setState({reportRecords:response})
      }
    }).catch((e)=>{
      console.log("error")
    })
  }

  render() {
    const idFormInfor = {
      title:"Grade Report",
      notice:"Please choose report id to grade for the students.",
      listTitle:"Report ID",
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
