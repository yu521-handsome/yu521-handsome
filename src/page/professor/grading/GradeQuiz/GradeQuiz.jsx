import React, { Component } from 'react'
import GradingTable from '../../../../components/professor/grading/gradeQuiz/GradingTable'
import IdChosen from '../../../../components/professor/grading/IdChosen/IdChosen'
import SuccessNotice from '../../../../components/professor/grading/SuccessNotice/SuccessNotice'
import NavigationBar from '../../../../components/professor/NavigationBar/NavigationBar'

export default class GradeQuiz extends Component {

  // quizRecords:[{groupName:"",ID:"",groupID:"",gradeByProfessor:""}]
  // quizInfor:[{ID:"",title:""}]
  state = {
    idList:[],
    chosenId:"",
    chosenTitle:"",
    quizInfor:[],
    quizRecords:[]
  }

  //fetch the all the quiz id
  componentDidMount(){
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
    fetch('/api1/quizzes',{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error"){
        this.setState({quizInfor:response})
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
    const {quizInfor} = this.state
    for(var i = 0; i < quizInfor.length; i++) {
      idList.push(quizInfor[i].ID)
    }
    return idList
  }

  //serach the quiz-records by quizID
  search = (id,event) => {
    event.preventDefault()
    const {quizInfor} = this.state
    //save title
    for(var i=0; i < quizInfor.length; i++) {
      if(quizInfor[i].ID === id) {
        this.setState({chosenTitle:quizInfor[i].title})
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
    await fetch(`/api1/quiz-records?quizID=${this.state.chosenId}`,{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error"){
        this.setState({quizRecords:response})
      }
    }).catch((e)=>{
      console.log("error")
    })
  }

  render() {
    const idFormInfor = {
      title:"Grade quizs",
      notice:"Please choose quiz id to grade for the students.",
      listTitle:"quiz ID",
      idList:this.state.idList,
      search:this.search
    } //use to show information in the id chosen form
    return (
      <div>
        <NavigationBar/>
        <IdChosen formInfor={idFormInfor}/>
        <GradingTable quizRecords={this.state.quizRecords} quizName={this.state.chosenTitle}/>
        <SuccessNotice/>
      </div>
    )
  }
}
