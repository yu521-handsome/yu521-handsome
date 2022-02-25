import React, { Component } from 'react'
import GradingTable from '../../../../components/professor/grading/gradeProject/GradingTable/GradingTable'
import IdChosen from '../../../../components/professor/grading/IdChosen/IdChosen'
import SuccessNotice from '../../../../components/professor/grading/SuccessNotice/SuccessNotice'
import NavigationBar from '../../../../components/professor/NavigationBar/NavigationBar'

export default class GradeProject extends Component {

  // projectRecords:[{groupName:"",ID:"",groupID:"",gradeByProfessor:""}]
  // projectInfor:[{ID:"",title:""}]
  state = {
    idList:[],
    chosenId:"",
    chosenTitle:"",
    projectInfor:[],
    projectRecords:[]
  }

  //fetch the all the project id
  componentDidMount(){
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
    fetch('/api1/projects',{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error"){
        this.setState({projectInfor:response})
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
    const {projectInfor} = this.state
    for(var i = 0; i < projectInfor.length; i++) {
      idList.push(projectInfor[i].ID)
    }
    return idList
  }
  
  //serach the project-records by projectID
  search = (id,event) => {
    event.preventDefault()
    const {projectInfor} = this.state
    //save title
    for(var i=0; i < projectInfor.length; i++) {
      if(projectInfor[i].ID === id) {
        this.setState({chosenTitle:projectInfor[i].title})
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
    await fetch(`/api1/project-records?projectID=${this.state.chosenId}`,{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error"){
        this.setState({projectRecords:response})
      }
    }).catch((e)=>{
      console.log("error")
    })
  }

  render() {
    const idFormInfor = {
      title:"Grade Project",
      notice:"Please choose project id to grade for the students.",
      listTitle:"Project ID",
      idList:this.state.idList,
      search:this.search
    } //use to show information in the id chosen form
    return (
      <div>
        <NavigationBar/>
        <IdChosen formInfor={idFormInfor}/>
        <GradingTable projectRecords={this.state.projectRecords} projectName={this.state.chosenTitle}/>
        <SuccessNotice/>
      </div>
    )
  }
}
