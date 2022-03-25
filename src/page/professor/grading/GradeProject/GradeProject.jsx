import React, { Component } from 'react'
import GradingTable from '../../../../components/professor/grading/gradeProject/GradingTable/GradingTable'
import IdChosen from '../../../../components/professor/grading/IdChosen/IdChosen'
import SuccessNotice from '../../../../components/professor/grading/SuccessNotice/SuccessNotice'
import NavigationBar from '../../../../components/professor/NavigationBar/NavigationBar'

export default class GradeProject extends Component {

  // projectRecords:[{groupName:"",id:"",groupId:"",gradeByProfessor:""}]
  // projectInfor:[{id:"",title:""}]
  state = {
    idList:[],
    chosenId:"",
    chosenTitle:"",
    projectInfor:[],
    projectRecords:[],
    userEmail:"p1@gmail.com"
  }

  //fetch the all the project id
  componentDidMount(){
    window.scrollTo(0,0)
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
    fetch(`/api1/projects?professor=${this.state.userEmail}`,{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error"){
        this.setState({projectInfor:response},function(){
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
    const {projectInfor} = this.state
    for(var i = 0; i < projectInfor.length; i++) {
      idList.push(projectInfor[i].id)
    }
    this.setState({idList})
  }
  
  //serach the project-records by projectid
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
    await fetch(`/api1/project-records?projectId=${this.state.chosenId}`,{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error"){
        this.setState({projectRecords:response},function(){
          this.getGroupName()
        })
      }
    }).catch((e)=>{
      console.log("error")
    })
  }

  //add group name to project records
  getGroupName() {
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
    const {projectRecords} = this.state
    for(var i=0; i < projectRecords.length; i++) {
      let index = i;
      fetch(`/api1/groups/${projectRecords[index].groupId}`,{
        method:"get",
        headers:HEADER
      }).then((response)=>{
        if(response.ok) {
          return response.json()
        }
        return "error"
      }).then((response) => {
        if(response !== "error"){
          let groupName = response.name
          projectRecords[index].groupName= groupName
        }
      }).catch((e)=>{
        console.log("error")
      })
    }
  }

  render() {
    const idFormInfor = {
      title:"Grade Project",
      notice:"Please choose Project id to grade for the students.",
      listTitle:"Project id",
      idList:this.state.idList,
      search:this.search
    } //use to show information in the id chosen form
    return (
      <div>
        <NavigationBar/>
        <IdChosen formInfor={idFormInfor}/>
        <GradingTable projectRecords={this.state.projectRecords} projectId={this.state.chosenId}/>
        <SuccessNotice/>
      </div>
    )
  }
}
