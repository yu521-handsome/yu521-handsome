import React, { Component } from 'react'
import GradingTable from '../../../../components/professor/grading/gradeQuiz/GradingTable'
import IdChosen from '../../../../components/professor/grading/IdChosen/IdChosen'
import SuccessNotice from '../../../../components/professor/grading/SuccessNotice/SuccessNotice'
import NavigationBar from '../../../../components/professor/NavigationBar/NavigationBar'

export default class GradeQuiz extends Component {

  // quizRecords:[{id:"",studentId:"",studentName:"",grade:""}]
  // quizInfor:[{id:"",title:""}]
  state = {
    idList:[],
    chosenId:"",
    chosenTitle:"",
    quizInfor:[],
    quizRecords:[],
    userEmail:"p1@gmail.com"
  }

  //fetch the all the quiz id
  componentDidMount(){
    window.scrollTo(0,0)
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
    fetch(`/api1/quizzes?professor=${this.state.userEmail}`,{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error"){
        this.quizInfoProcess(response)
      }
    }).catch((e)=>{
      console.log("error")
    })

  }

  quizInfoProcess(response) {
    let result=response
    this.setState({quizInfor:result},function(){
      this.createIdList()
    })
  }
  //create the id List for search
  createIdList(){
    let idList = []
    const {quizInfor} = this.state
    for(var i = 0; i < quizInfor.length; i++) {
      idList.push(quizInfor[i].id)
    }
    this.setState({idList})
  }

  //serach the quiz-records by quizID
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
    await fetch(`/api1/quiz-records?quizId=${this.state.chosenId}`,{
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

  // quizRecords:[{id:"",studentId:"",studentName:"",grade:""}]
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
    this.setState({quizRecords:result})
  }
  render() {
    const idFormInfor = {
      title:"Grade quizs",
      notice:"Please choose Quiz id to grade for the students.",
      listTitle:"Quiz id",
      idList:this.state.idList,
      search:this.search
    } //use to show information in the id chosen form
    return (
      <div>
        <NavigationBar/>
        <IdChosen formInfor={idFormInfor}/>
        <GradingTable quizRecords={this.state.quizRecords} quizId={this.state.chosenId}/>
        <SuccessNotice/>
      </div>
    )
  }
}
