import React, { Component } from 'react'
import Header from '../../../../components/professor/accountLink/accountInfor/Header/Header'
import IdChosen from '../../../../components/professor/accountLink/accountInfor/IdChosen/IdChosen'
import InfoTable from '../../../../components/professor/accountLink/accountInfor/InfoTable/InfoTable'
import NavigationBar from '../../../../components/professor/NavigationBar/NavigationBar'

export default class AccountInfor extends Component {
  //courseInfo:[{id:"",students:[{id:"",name:"",email:""}],experts:[{name:"",email:""}]}]
  state = {
    idList:[],
    chosenId:"",
    chosenCourse:{id:"",students:[],experts:[]},
    courseInfo:[],
    userEmail:"p1@gmail.com"
  }

  //fetch the all the courseId and create the idList
  async componentDidMount(){
    window.scrollTo(0,0)
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
    await fetch(`/api1/courses?chiefProfessor=${this.state.userEmail}`,{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      else {
        alert("Course get failed")
        return "error"
      }
    }).then((response) => {
      if(response !== "error"){
        this.responseProcess(response)
      }
    }).catch((e)=>{
      console.log("error")
    })
    this.createIdList()
  }

  //process the response and get the right data
  responseProcess(response) {
    let result=response
    this.setState({courseInfo:result},function(){
      this.createIdList()
    })
  }

  //create the id List for search
  createIdList(){
    let idList = []
    const {courseInfo} = this.state
    for(var i = 0; i < courseInfo.length; i++) {
      idList.push(courseInfo[i].id)
    }
    this.setState({idList})
  }

  //set the state of chosenCourse
  search = (id,event) => {
    event.preventDefault()
    const {courseInfo} = this.state
    for(var i=0; i < courseInfo.length; i++) {
      if(courseInfo[i].id === id) {
        this.setState({chosenCourse:courseInfo[i]})
      }
    }
  }

  render() {
    //use to show information in the id chosen form
    const idFormInfo = {
      idList:this.state.idList,
      search:this.search
    }

    const {chosenCourse} = this.state
    return (
      <div>
        <NavigationBar/>
        <Header/>
        <IdChosen formInfo={idFormInfo}/>
        <InfoTable chosenCourse={chosenCourse}/>
      </div>
    )
  }
}
