import React, { Component } from 'react'
import GradingTable from '../../../../components/professor/grading/gradeOverall/GradingTable'
import IdChosen from '../../../../components/professor/grading/IdChosen/IdChosen'
import SuccessNotice from '../../../../components/professor/grading/SuccessNotice/SuccessNotice'
import NavigationBar from '../../../../components/professor/NavigationBar/NavigationBar'

export default class GradeOverall extends Component {

  // overallRecords:[{groupName:"",ID:"",groupID:"",gradeByProfessor:""}]
  // overallInfor:[{ID:"",title:""}]
  state = {
    idList:[],
    chosenId:"",
    chosenTitle:"",
    overallInfor:[],
    overallRecords:[]
  }

  //fetch the all the overall id
  componentDidMount(){
    const HEADER = {
      'Accept':'application/json,text/plain,*/*'
    }
    fetch('/api1/overallzes',{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error"){
        this.setState({overallInfor:response})
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
    const {overallInfor} = this.state
    for(var i = 0; i < overallInfor.length; i++) {
      idList.push(overallInfor[i].ID)
    }
    return idList
  }

  //serach the overall-records by overallID
  search = (id,event) => {
    event.preventDefault()
    const {overallInfor} = this.state
    //save title
    for(var i=0; i < overallInfor.length; i++) {
      if(overallInfor[i].ID === id) {
        this.setState({chosenTitle:overallInfor[i].title})
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
    await fetch(`/api1/overall-records?overallID=${this.state.chosenId}`,{
      method:"get",
      headers:HEADER
    }).then((response)=>{
      if(response.ok) {
        return response.json()
      }
      return "error"
    }).then((response) => {
      if(response !== "error"){
        this.setState({overallRecords:response})
      }
    }).catch((e)=>{
      console.log("error")
    })
  }

  render() {
    const idFormInfor = {
      title:"Grade overalls",
      notice:"Please choose overall id to grade for the students.",
      listTitle:"overall ID",
      idList:this.state.idList,
      search:this.search
    } //use to show information in the id chosen form
    return (
      <div>
        <NavigationBar/>
        <IdChosen formInfor={idFormInfor}/>
        <GradingTable overallRecords={this.state.overallRecords} overallName={this.state.chosenTitle}/>
        <SuccessNotice/>
      </div>
    )
  }
}

