import React, { Component } from 'react'
import GroupInfoTable from '../../../../components/professor/group/groupInfor/GroupInfoTable/GroupInfoTable'
import IdChosen from '../../../../components/professor/group/groupInfor/IdChosen/IdChosen'
import NavigationBar from '../../../../components/professor/NavigationBar/NavigationBar'

export default class GroupInfor extends Component {
  //courseInfo:[{id:""}]
  //groupInfo:[{id:"",name:"",students:[],expert:""}]
  state = {
    idList:[],
    chosenId:"",
    courseInfo:[],
    groupInfo:[],
    userEmail:"p1@gmail.com"
  }

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
        this.courseResponseProcess(response)
      }
    }).catch((e)=>{
      console.log("error")
    })
    this.createIdList()
  }
  
  //process the response and get the right data
  courseResponseProcess(response) {
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

  //set the state of chosenId and search the group
  search = (id,event) => {
    event.preventDefault()
    this.setState({chosenId:id},function(){
      this.doSearch()
    })
  }

  //search the group information
  async doSearch(){
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
    await fetch(`/api1/groups?courseId=${this.state.chosenId}`,{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      else {
        alert("Group information get failed")
        return "error"
      }
    }).then((response) => {
      if(response !== "error"){
        this.groupResponseProcess(response)
      }
    }).catch((e)=>{
      console.log("error")
    })
  }

  //groupInfo:[{id:"",name:"",students:[],expert:""}]
  groupResponseProcess(response) {
    let result = []
    for(var i=0; i<response.length;i++) {
      let oneRecord={}
      let students=[]
      for(var j =0; j<response[i].students.length;j++) {
        students.push(response[i].students[j].name)
      }
      oneRecord.id = response[i].id
      oneRecord.name = response[i].name
      oneRecord.students = students
      oneRecord.expert = response[i].expert.name
      result.push(oneRecord)
    }
    this.setState({groupInfo:result})
  }

  render() {
    //use to show information in the id chosen form
    const idFormInfo = {
      idList:this.state.idList,
      search:this.search
    }
    const {groupInfo,chosenId} = this.state
    return (
      <div>
        <NavigationBar/>
        <IdChosen formInfo={idFormInfo}/>
        <GroupInfoTable groupInfo={groupInfo} courseId = {chosenId}/>
      </div>
    )
  }
}
