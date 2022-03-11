import React, { Component } from 'react'
import GradingTable from '../../../../components/professor/grading/gradeOverall/GradingTable'
import IdChosen from '../../../../components/professor/grading/IdChosen/IdChosen'
import SuccessNotice from '../../../../components/professor/grading/SuccessNotice/SuccessNotice'
import NavigationBar from '../../../../components/professor/NavigationBar/NavigationBar'

export default class GradeOverall extends Component {

  state = {
    idList:[],
    chosenId:"",
    chosenTitle:"",
    courseInfor:[],
    courseRecord:[],
    userEmail:"p1@gmail.com"
  }

  //fetch the all the courseId and create the idList
  componentDidMount(){
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
    fetch(`/api1/courses?chiefProfessor=${this.state.userEmail}`,{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error"){
        this.setState({courseInfor:response},function(){
          this.createIdList()
        })
      }
    }).catch((e)=>{
      console.log("error")
    })
  }

  //create the id List for search
  createIdList(){
    let idList = []
    const {courseInfor} = this.state
    for(var i = 0; i < courseInfor.length; i++) {
      idList.push(courseInfor[i].id)
    }
    this.setState({idList})
  }

  //serach the course-records by courseID
  search = (id,event) => {
    event.preventDefault()
    const {courseInfor} = this.state
    //save title
    for(var i=0; i < courseInfor.length; i++) {
      if(courseInfor[i].id === id) {
        this.setState({chosenTitle:courseInfor[i].theme})
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
    await fetch(`/api1/course-records?courseId=${this.state.chosenId}`,{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error"){
        this.setState({courseRecord:response})
      }
    }).catch((e)=>{
      console.log("error")
    })
  }

  render() {
    const idFormInfor = {
      title:"Grade overalls",
      notice:"Please choose Course id to grade for the students.",
      listTitle:"Course ID",
      idList:this.state.idList,
      search:this.search
    } //use to show information in the id chosen form
    return (
      <div>
        <NavigationBar/>
        <IdChosen formInfor={idFormInfor}/>
        <GradingTable courseRecord={this.state.courseRecord} courseName={this.state.chosenTitle} courseId={this.state.chosenId}/>
        <SuccessNotice/>
      </div>
    )
  }
}

